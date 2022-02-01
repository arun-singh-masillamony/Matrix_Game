import React from 'react';
import useMatrixHandle from '../useMatrixHandle/useMatrixHandle.js'
import './Matrix.css';

const Matrix = () => {
    const { matrixIndexArray, tracking, handleClick } = useMatrixHandle(16, 2);
    return (
        <div className='matrix-container'>
            {matrixIndexArray.map((_,seq) => (
            <button 
                key ={seq} 
                name={seq}
                onClick={handleClick} 
                className={tracking.includes(`${seq}`) ? 'matrix-box-red' : 'matrix-box-blue'} 
            />
        ))}
        </div>
    );
};

export default Matrix;