// Error Component
import React from 'react';
interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
    <div className="text-red-500 font-bold">Error loading data: {message}</div>
);
export default Error;