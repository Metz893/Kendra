'use client';

import { useState } from 'react';

export default function HiddenPage() {
  const [stamp, setStamp] = useState('🎀');
  const [showSecret, setShowSecret] = useState(false);

  const cycleStamp = () => {
    setStamp((prev) =>
      prev === '🎀' ? '✨' : prev === '✨' ? '🩷' : prev === '🩷' ? '🫶' : '🎀'
    );
  };

  return (
    <main className="book-page">
      <section className="card">
        <p className="small-tag">Hidden Corner</p>
        <h1>Little secret drawers ♥</h1>
        <p className="soft-text">
          This page is for easter eggs, tiny notes, and random cute things.
        </p>

        <div className="header-actions">
          <button onClick={cycleStamp}>Change stamp</button>
          <button onClick={() => setShowSecret((v) => !v)}>
            {showSecret ? 'Hide' : 'Open'} hidden note
          </button>
        </div>

        {showSecret && (
          <div className="note-bubble">
            <span>{stamp}</span>
            <p>[Add a hidden message here that only shows when clicked.]</p>
          </div>
        )}
      </section>

      <section className="card">
        <h2>Secret drawers</h2>
        <div className="details-grid">
          <details>
            <summary>♥ secret drawer 1</summary>
            <div className="drawer-box">[Add an inside joke here]</div>
          </details>
          <details>
            <summary>♥ secret drawer 2</summary>
            <div className="drawer-box">[Add a “remember when…” moment here]</div>
          </details>
          <details>
            <summary>♥ secret drawer 3</summary>
            <div className="drawer-box">[Add a future date idea here]</div>
          </details>
          <details>
            <summary>♥ secret drawer 4</summary>
            <div className="drawer-box">[Add a tiny compliment here]</div>
          </details>
        </div>
      </section>

      <section className="card">
        <h2>Prompt cards</h2>
        <div className="prompt-cards">
          <div>[A memory I never want to forget: ...]</div>
          <div>[A song that reminds me of you: ...]</div>
          <div>[A place I want us to go: ...]</div>
          <div>[A thing I appreciate about you: ...]</div>
        </div>
      </section>
    </main>
  );
}