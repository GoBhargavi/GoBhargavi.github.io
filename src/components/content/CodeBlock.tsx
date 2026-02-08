'use client';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    language: string;
    code: string;
    filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, filename }) => {
    return (
        <div className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl">
            {filename && (
                <div className="flex items-center gap-2 px-4 py-2 bg-[#252526] border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="ml-2 text-xs text-slate-400 font-mono">{filename}</span>
                </div>
            )}
            <div className="relative">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, background: 'transparent', padding: '1.5rem', fontSize: '0.9rem' }}
                    showLineNumbers={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
