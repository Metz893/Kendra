'use client';

import { useState } from 'react';

export default function LettersPage() {
  const [open, setOpen] = useState<number | null>(1);

  const letters = [
    {
      title: 'Letter 1',
      prompt: `
       Hi Kendra. So, if you haven't been able to tell yet, I'm not exactly the best at describing my feelings. I mean, I kind of had to make a website to do so. But, I just wanted to tell you a few things since everything that happened, and this is basically the only way I know how. To be honest, when we first met and started talking, I was pretty unsure about you. I didn't really like the people you hung out with, I got frustrated easily with some of the things that happened, I was too impatient, and honestly I just wasn't really in that great of a placce mentally. For how perfect you think I am, I'm really not. And since I'm being completely honest, I never thought that relationship was going to last very long and I didn't really even want it to. I didn't really know what I was thinking or how I felt or what to say, but you seemed of pure intentions and I wanted to get to know you better. So, I apologize for all of that. I was basically just dating you to date and I enjoyed seeing you happy and seeing how much you cared about me. And sitting here right now, I feel terrible about everything. I didn't know much, but I did not want to hurt you and I tried my best not to do so. But, I am glad you reached back out when you did. I didn't really know what to expect when we started talking again, but I did know that you at least cared and meant what you said, which was mmore than enough for me. I am writing this the night that we got Froyo after school (Sorry I couldn't call, I had to write this and a bunch of other things, and get up at 5 and its already 11). And Kendra, I told you this from the beginning but I will not lie to you. The reason I tell you this is because when we were sitting there outside, I was staring at you as you looked for the instagram post of my name on the football watchlist, and I truly felt love for you in a way I hadn't before. You just looked so beautiful and happy and perfect. Everything before this has been for you, to make you happy. And I did enjoy that, but it didn't feel real. But it's just different now. I feel as though I actually know you now. I truly do adore how you smile and laugh, how ticklish and cute you are, how much you enjoy trying to beat me in games, how much time you spend with me, how much you confide in me, how much you love me. So, I am sorry for how I may have made you feel and any pain I might have caused you. Regaurdless how how I felt when we were first dating, I would never mean to hurt you in any way. But, I hope you can read this for the truth that it is, and still forgive me. I want it to be different this time. I want it to last and I want to be with you. I really do care about you Kendra, I really do love you.
      `,
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
        <h1>My Letters to You ♥</h1>
        <p className="soft-text">
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
                  <p className="letter-line prewrap">{letter.prompt}</p>
                  <p className="letter-line muted">
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