import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Tooltip.css';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    position?: TooltipPosition;
    delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top', delay = 200 }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const showTooltip = () => {
        const id = setTimeout(() => setIsVisible(true), delay);
        setTimeoutId(id);
    };

    const hideTooltip = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsVisible(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
        >
            {children}
            <AnimatePresence>
                {isVisible && content && (
                    <motion.div
                        className={`tooltip tooltip-${position}`}
                        initial={{ opacity: 0, scale: 0.8, y: position === 'bottom' ? -10 : 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: position === 'bottom' ? -10 : 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {content}
                        <span className={`tooltip-arrow tooltip-arrow-${position}`} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Tooltip;
