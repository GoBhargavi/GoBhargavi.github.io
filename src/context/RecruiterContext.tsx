'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type RecruiterContextType = {
    isRecruiterMode: boolean;
    toggleRecruiterMode: () => void;
};

const RecruiterContext = createContext<RecruiterContextType | undefined>(undefined);

export const RecruiterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isRecruiterMode, setIsRecruiterMode] = useState(true);

    useEffect(() => {
        if (isRecruiterMode) {
            document.documentElement.classList.add('recruiter-mode');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.remove('recruiter-mode');
            document.documentElement.classList.add('dark');
        }
    }, [isRecruiterMode]);

    const toggleRecruiterMode = () => setIsRecruiterMode(prev => !prev);

    return (
        <RecruiterContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
            {children}
        </RecruiterContext.Provider>
    );
};

export const useRecruiter = () => {
    const context = useContext(RecruiterContext);
    if (context === undefined) {
        throw new Error('useRecruiter must be used within a RecruiterProvider');
    }
    return context;
};
