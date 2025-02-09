import { Component } from "solid-js";

interface CounterProps {
    title: string;
    count: number;
}

const Counter: Component<CounterProps> = (props) => {

    const getCount = () => props.count;

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{getCount()}</p>
        </div>
    )
}

export default Counter;