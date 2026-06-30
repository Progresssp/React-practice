import { useState } from "react";
function Counter () {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Counter</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count +1)}>Incriement</button>

            <button onClick={() => setCount(0)}>Reset</button>

            <button onClick={() => setCount(count -1)}>Decriment</button>

           
        </div>
    );
}

export default Counter;