'use client';

import { useState } from 'react';

export default function LettersPage() {
  const [open, setOpen] = useState<number | null>(1);

  const letters = [
    {
      title: 'Letter 1',
      prompt: '[Add your main birthday letter here — longer, thoughtful, personal.]',
    },
    {
      title: 'Letter 2',
      prompt: '[Add a funny note here — inside jokes, little moments, favorite things.]',
    },
    {
      title: 'Letter 3',
      prompt: '[Add a future note here — plans, dreams, things you want to do together.]',
    },
    {
      title: 'Open when she needs a smile',
      prompt: '[Add a comfort note here.]',
    },
    {
      title: 'Open when she wants a reminder',
      prompt: '[Add a confidence note here.]',
    },
  ];

  return (
    <main className="book-page">
      <section className="card">
        <p className="small-tag">Letters Page</p>
        <h1>Notes for Kendra ♥</h1>
        <p className="soft-text">
          This page is built for your personal messages. Keep these placeholders or swap them with your real notes.
        </p>
      </section>

      <section className="letter-stack">
        {letters.map((letter, index) => {
          const isOpen = open === index;
          return (
            <div key={letter.title} className={`letter-envelope ${isOpen ? 'open' : ''}`}>
              <button
                className="envelope-header"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>💌 {letter.title}</span>
                <span>{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <div className="letter-paper">
                  <p className="letter-line">{letter.prompt}</p>
                  <p className="letter-line muted">
                    [You can also add dates, little lists, favorite memories, or screenshots.]
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section className="card">
        <h2>Mini note strips</h2>
        <div className="note-strips">
          <div>[Tiny note strip #1]</div>
          <div>[Tiny note strip #2]</div>
          <div>[Tiny note strip #3]</div>
          <div>[Tiny note strip #4]</div>
        </div>
      </section>
    </main>
  );
}