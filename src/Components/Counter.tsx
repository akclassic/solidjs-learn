import { Component } from "solid-js";

interface CounterProps {
    title: string;
    count: number;
}

const Counter: Component<CounterProps> = (props) => {

    const getTitle = () => props.title;
    const getCounter = () => props.count;

    return (
        <div>
           <h1>{getTitle()}</h1>
           <h1>{getCounter()}</h1>
        </div>
    )
}

export default Counter;