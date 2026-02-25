'use client';

import { useState } from 'react';

const jokes = [
  {
    question: 'Why did the scarecrow win an award?',
    answer: 'Because he was outstanding in his field.',
  },
  {
    question: 'What do you call fake spaghetti?',
    answer: 'An impasta.',
  },
  {
    question: 'Why don’t eggs tell jokes?',
    answer: 'They’d crack each other up.',
  },
  {
    question: 'What do you call cheese that isn’t yours?',
    answer: 'Nacho cheese.',
  },
  {
    question: 'Why did the math book look sad?',
    answer: 'Because it had too many problems.',
  },
  {
    question: 'What do you call a bear with no teeth?',
    answer: 'A gummy bear.',
  },
  {
    question: 'Why can’t your nose be 12 inches long?',
    answer: 'Because then it would be a foot.',
  },
];

export default function DadJokesPage() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <main className="book-page">
      <section className="card">
        <p className="small-tag">Dad Jokes Page</p>
        <h1>Dad Jokes for Kendra ♥</h1>
        <p className="soft-text">
          Read the joke, think about it, then tap to reveal the answer.
        </p>
      </section>

      <section className="joke-grid">
        {jokes.map((joke, i) => {
          const isOpen = !!revealed[i];
          return (
            <div key={joke.question} className="joke-card">
              <p className="joke-q">#{i + 1} {joke.question}</p>
              <button
                className="joke-btn"
                onClick={() =>
                  setRevealed((prev) => ({ ...prev, [i]: !prev[i] }))
                }
              >
                {isOpen ? 'Hide answer' : 'Reveal answer'}
              </button>
              <div className={`joke-answer ${isOpen ? 'show' : ''}`}>
                {isOpen ? joke.answer : '...'}
              </div>
            </div>
          );
        })}
      </section>

      <section className="card">
        <h2>Add your own jokes</h2>
        <p className="soft-text">Use these spaces for your own custom ones.</p>
        <div className="placeholder-list">
          <div>[Custom joke #1 question + answer]</div>
          <div>[Custom joke #2 question + answer]</div>
          <div>[Custom joke #3 question + answer]</div>
        </div>
      </section>
    </main>
  );
}