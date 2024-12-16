import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <>
            <div className="color-picker-container">
                <h1 style={{ color: color}}>COLOR PICKER </h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p>selected color: {color}</p>
                </div>
                <label >SELECT A COLOR:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </>
    );
}

export default ColorPicker;