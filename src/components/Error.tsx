// Error Component
import React from 'react';
interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
    <div className="text-red-500 font-bold">{message}</div>
);
export default Error;