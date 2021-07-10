import React, {useState} from 'react';

export function StatefulComponent() {
    const [count, setCount] = useState(1);
    return (
        <h2>
            This is Stateful component {count}
            <button type="button" onClick = {() => setCount(count + 1)}>Click me</button>
        </h2>
    )
}