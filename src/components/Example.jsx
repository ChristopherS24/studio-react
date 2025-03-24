import { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);
    //const [data, setData] = useState(null);

// Definizione dell'effetto
    useEffect(() => {
        document.title = `Conteggio: ${count}`;

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response)=> response.json())
        // .then((data) => {
        //     setData(data);
        //     console.log(data);
        // });
    },[count]);

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}

export default Example;