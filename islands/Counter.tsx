/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";

// An interface is a feature of typescript to clearly define the properties of a group
interface CounterProps {
  start: number;
}

// props can be passed in to this function but it must be of type CounterProps
export default function Counter(props: CounterProps) {

  // Set the count to be of the default value passed into the Counter function
  const [count, setCount] = useState(props.start);
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
}
