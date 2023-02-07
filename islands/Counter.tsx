/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button, DangerButton, SuccessButton } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <SuccessButton onClick={() => setCount(count + 1)}>increase</SuccessButton>
      <Button onClick={() => setCount(0)}>reset</Button>
      <DangerButton onClick={() => setCount(count - 1)}>decrease</DangerButton>
    </div>
  );
}

