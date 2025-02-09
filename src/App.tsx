import { createSignal, type Component } from 'solid-js';
import Counter from './Components/Counter';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      SolidJS Props
      <Counter title='Counter' count={count()}/>
      <button onclick={() => setCount(count() + 1)}>Increase your steps</button>
    </div>
  );
};

export default App;
