'use client';

import { makeActor } from "@/services/actor";
import { useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState<string>('');
  
  const handleGreeting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGreeting(event.target.value);
    console.log(event.target.value);
  }

  function handleClick() {
    const actor = makeActor();
    actor.greet(greeting)
      .then((response: string) => {
        console.log(response);
        alert(response);
      })
  }

  return (
    <div className="container">
      <input type="text" onChange={(e) => {
        handleGreeting(e);
      }}/>
      <button onClick={(e) => {
        handleClick();
      }}>
        Click me!
      </button>
    </div>
  );
}
