import React from "react";
import './Header.css';
import { motion } from "framer-motion";

export const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-wrapper">
                <motion.h1
                initial={{ 
                    y: 120, 
                }}
                animate={{ 
                    y: 0, 
                }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeOut",
                }}
                >
                { props.header }
                </motion.h1>
            </div>
        </div>
    )
}