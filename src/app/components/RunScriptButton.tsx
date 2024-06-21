'use client';

import React, { useState } from 'react';

const RunScriptButton = () => {
    const [output, setOutput] = useState('');

    const handleClick = async () => {
        try {
            const response = await fetch('/api/run-script');
            const data = await response.json();
            if (response.ok) {
                setOutput(data.message);
            } else {
                setOutput(`Error: ${data.error}`);
            }
        } catch (error) {
            let errorMessage = 'An unexpected error occurred';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setOutput(`Error: ${errorMessage}`);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Run Script</button>
            <pre>{output}</pre>
        </div>
    );
};

export default RunScriptButton;
