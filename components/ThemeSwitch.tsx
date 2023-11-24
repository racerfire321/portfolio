"use client";

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className="fixed bottom-5 right-5  bg-slate-600 text-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={toggleTheme}
            whileHover={{ rotate: 360 }}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </motion.button>
    );
};

export default ThemeSwitch;
