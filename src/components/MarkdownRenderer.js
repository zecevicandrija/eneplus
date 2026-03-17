'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

export default function MarkdownRenderer({ content }) {
    const components = {
        // Custom component for images to use next/image
        img: (image) => {
             return (
                 <div style={{ position: 'relative', width: '100%', height: 'auto', margin: '2rem 0' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img
                         src={image.src || ''}
                         alt={image.alt || 'Blog image'}
                         style={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            borderRadius: '12px',
                            objectFit: 'cover'
                         }}
                         loading="lazy"
                     />
                 </div>
             );
         },
         // You can define other overrides here (e.g., custom links)
         a: ({ node, ...props }) => {
             const isInternal = props.href?.startsWith('/');
             if (isInternal) {
                 return <a {...props} />;
             }
             return <a target="_blank" rel="noopener noreferrer" {...props} />;
         }
    };

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={components}
        >
            {content}
        </ReactMarkdown>
    );
}
