import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiAPI, ordersAPI } from '../services/api';
import { useToast } from '../hooks/useToast';
import './BatchOrderUpload.css';

const BatchOrderUpload = () => {
    const toast = useToast();
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [creating, setCreating] = useState(false);
    const [file, setFile] = useState(null);
    const [extractedOrders, setExtractedOrders] = useState([]);
    const [errors, setErrors] = useState([]);
    const fileInputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault(); e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
        else if (e.type === "dragleave") setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault(); e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
    };

    const handleFile = (selectedFile) => {
        const validExtensions = ['.csv', '.xls', '.xlsx'];
        const fileName = selectedFile.name.toLowerCase();
        if (validExtensions.some(ext => fileName.endswith(ext))) {
            setFile(selectedFile);
            setExtractedOrders([]);
            setErrors([]);
        } else {
            toast.error('Please upload a CSV or Excel file.');
        }
    };

    const analyzeBatchFile = async () => {
        if (!file) return;
        setUploading(true);
        try {
            const response = await aiAPI.analyzeFile(file);
            if (response.data.success && response.data.is_batch) {
                setExtractedOrders(response.data.analysis.orders);
                toast.success(`Extracted ${response.data.analysis.extracted_count} orders!`);
            } else {
                toast.error(response.data.message || 'Failed to parse file.');
            }
        } catch (err) {
            toast.error('Error analyzing file.');
        } finally {
            setUploading(false);
        }
    };

    const createOrders = async () => {
        if (extractedOrders.length === 0) return;
        setCreating(true);
        try {
            const response = await ordersAPI.bulkCreateOrders(extractedOrders);
            if (response.data.success) {
                toast.success(`Successfully created ${response.data.created_count} orders!`);
                if (response.data.errors?.length > 0) {
                    setErrors(response.data.errors);
                    toast.warning(`Notice: ${response.data.errors.length} rows had errors.`);
                } else {
                    setFile(null);
                    setExtractedOrders([]);
                }
            }
        } catch (err) {
            toast.error('Failed to create orders in bulk.');
        } finally {
            setCreating(false);
        }
    };

    return (
        <div className="batch-upload-container">
            <div className="batch-header">
                <h1>📦 Batch Order Upload</h1>
                <p>Upload a spreadsheet to create multiple orders at once. AI will help map your columns.</p>
            </div>

            {!file ? (
                <div
                    className={`batch-dropzone ${dragActive ? 'active' : ''}`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="dropzone-content">
                        <span className="icon">📊</span>
                        <h3>Drop your CSV or Excel file here</h3>
                        <p>or click to select from your computer</p>
                        <span className="formats">Supports: .csv, .xls, .xlsx</span>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".csv, .xls, .xlsx"
                        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                        style={{ display: 'none' }}
                    />
                </div>
            ) : (
                <div className="batch-preview-area">
                    <div className="selected-file-card">
                        <div className="file-info">
                            <span className="file-icon">📄</span>
                            <div className="details">
                                <span className="name">{file.name}</span>
                                <span className="size">{(file.size / 1024).toFixed(1)} KB</span>
                            </div>
                        </div>
                        <button className="remove-btn" onClick={() => setFile(null)}>Remove</button>
                    </div>

                    {extractedOrders.length === 0 ? (
                        <button
                            className="action-btn analyze-btn"
                            onClick={analyzeBatchFile}
                            disabled={uploading}
                        >
                            {uploading ? 'Analyzing Spreadsheet...' : 'Analyze & Preview Orders'}
                        </button>
                    ) : (
                        <div className="preview-table-container">
                            <h3>Preview Extracted Orders ({extractedOrders.length})</h3>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Product</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                            <th>Delivery Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {extractedOrders.map((order, idx) => (
                                            <tr key={idx}>
                                                <td>{order.customer_name}</td>
                                                <td>{order.product_type}</td>
                                                <td>{order.quantity}</td>
                                                <td>${order.unit_price}</td>
                                                <td>{order.delivery_date || 'N/A'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="batch-actions">
                                <button
                                    className="action-btn cancel-btn"
                                    onClick={() => setExtractedOrders([])}
                                >
                                    Clear Selection
                                </button>
                                <button
                                    className="action-btn create-btn"
                                    onClick={createOrders}
                                    disabled={creating}
                                >
                                    {creating ? 'Creating Orders...' : `Create ${extractedOrders.length} Orders`}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {errors.length > 0 && (
                <div className="batch-errors">
                    <h3>⚠️ Upload Errors</h3>
                    <ul>
                        {errors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BatchOrderUpload;
