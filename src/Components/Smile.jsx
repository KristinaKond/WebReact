import React, { useState } from 'react';

const Smile = function () {
    const [value,setValue] = useState(0)
function increment() {
    setValue(value + 1)
}
function decrement() {
    setValue(value - 1)
}
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Smile;
