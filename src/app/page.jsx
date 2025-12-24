'use client';

import { useState } from 'react';
import '../App.css'; 

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div>
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
           <span style={{fontSize: '4rem'}}>⚡</span>
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
           <span style={{fontSize: '4rem'}}>⚛️</span>
        </a>
      </div>
      <h1>Next.js + MUI + Bun</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app/page.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </main>
  );
}
