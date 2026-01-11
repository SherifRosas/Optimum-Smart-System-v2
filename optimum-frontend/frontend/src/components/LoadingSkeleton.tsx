import React from 'react';
import './LoadingSkeleton.css';

export const CardSkeleton: React.FC = () => (
    <div className="skeleton-card">
        <div className="skeleton-header">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line skeleton-badge"></div>
        </div>
        <div className="skeleton-content">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line skeleton-short"></div>
        </div>
    </div>
);

interface ListSkeletonProps {
    count?: number;
}

export const ListSkeleton: React.FC<ListSkeletonProps> = ({ count = 5 }) => (
    <div className="skeleton-list">
        {Array.from({ length: count }).map((_, index) => (
            <CardSkeleton key={index} />
        ))}
    </div>
);

export const DashboardSkeleton: React.FC = () => (
    <div className="skeleton-dashboard">
        <div className="skeleton-stats">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="skeleton-stat-card">
                    <div className="skeleton-line skeleton-stat-label"></div>
                    <div className="skeleton-line skeleton-stat-value"></div>
                </div>
            ))}
        </div>
        <div className="skeleton-chart">
            <div className="skeleton-line skeleton-chart-title"></div>
            <div className="skeleton-chart-bars">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="skeleton-bar"></div>
                ))}
            </div>
        </div>
    </div>
);

export default CardSkeleton;
