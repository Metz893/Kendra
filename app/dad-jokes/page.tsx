'use client';

import { useState } from 'react';

const jokes = [
  {
    question: 'Why did the scarecrow win an award?',
    answer: 'Because he was outstanding in his field.',
  },
  {
    question: 'I am going on a seafood diet (click answer)',
    answer: 'I see food and I eat it.',
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
  {
    question: 'Why the tomato blush?',
    answer: 'Because it saw the salad dressing.',
  },
  {
    question: 'What did the banana say to the boy?',
    answer: 'Nothing, bananas can\'t talk.',
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
          A little bit of fun.
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
    </main>
  );
}