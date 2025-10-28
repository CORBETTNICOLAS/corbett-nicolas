"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableTitleProps {
    title: string;
    content: string | React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    dimmed?: boolean;
}

export default function ExpandableTitle({ title, content, isOpen, onToggle, dimmed = false, }: ExpandableTitleProps) {
    return (

        <div className={` ${dimmed ? "opacity-3 transition duration-500 ease-in-out" : "opacity-100 transition duration-500 ease-in-out"
            }`} >
            <div onClick={onToggle}>
                <h2 >
                    {title}
                </h2>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "53vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                        }}

                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}