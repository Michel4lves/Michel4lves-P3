import React from 'react';
import { DiPython } from 'react-icons/di';

const GradientDiPython = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 17 20">
        <linearGradient id="gradient" x1="50%" y1="50%" x2="45%" y2="40%">
            <stop offset="0%" stopColor="#eef20e" />
            <stop offset="100%" stopColor="#3f14ff" />
        </linearGradient>
        <DiPython fill="url(#gradient)" />
        </svg>
    );
};

export default GradientDiPython;
