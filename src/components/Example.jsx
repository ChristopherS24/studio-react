import { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);

// Definizione dell'effetto
    useEffect(() => {
        document.title = `Conteggio: ${count}`;
    }, [count]);

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}

export default Example;