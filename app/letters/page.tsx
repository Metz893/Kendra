'use client';

import { useState } from 'react';

export default function LettersPage() {
  const [open, setOpen] = useState<number | null>(1);

  const letters = [
    {
      title: 'Letter 1',
      prompt: `    Hi Kendra. So, if you haven't been able to tell yet, I'm not exactly the best at describing my feelings. I mean, I kind of had to make a website to do so. But, I just wanted to tell you a few things since everything that happened, and this is basically the only way I know how. To be honest, when we first met and started talking, I was pretty unsure about you. I didn't really like the people you hung out with, I got frustrated easily with some of the things that happened, I was too impatient, and honestly I just wasn't really in that great of a place mentally. For how perfect you think I am, I'm really not. And since I'm being completely honest, I never thought that relationship was going to last very long and, while I did want to date you, I didn't really even want it to because of how the relationship was. I didn't really know what I was thinking or how I felt or what to say, but I knew that it needed to be different. You seemed of pure intentions though and I wanted to get to know you better. So, I apologize for all of that. I was dating you because I enjoyed seeing you happy and seeing how much you cared about me, but it didn't feel entirely real to me. And sitting here right now, I feel terrible about everything. I didn't know much, but I did not want to hurt you and I tried my best not to do so. But, I am glad you reached back out when you did. I didn't really know what to expect when we started talking again, but I did know that you at least cared and meant what you said, which was more than enough for me. I am writing this the night that we got froyo after school (Sorry I couldn't call, I had to write this and a bunch of other things, and get up at 5 and its already 11). And Kendra, I told you this from the beginning but I will not lie to you. The reason I tell you this is because when we were sitting there outside, I was staring at you as you looked for the instagram post of my name on the football watchlist, and I truly felt love for you in a way I hadn't before. You just looked so beautiful and happy and perfect, I could have just stayed there, staring out you for the rest of the day. Everything before this has been for you, to make you happy. And I did enjoy that, but it's different now. I feel as though I actually know you now. I truly do adore how you smile and laugh, how ticklish and cute you are, how much you enjoy trying to beat me in games, how much time you spend with me, how much you confide in me, how much you love me. So, I am sorry for how I may have made you feel and any pain I might have caused you. Regardless how how I felt when we were first dating, I would never mean to hurt you in any way. But, I hope you can read this for the truth that it is, and still forgive me. I want it to be different this time. I want it to last and I want to be with you. I really do care about you Kendra, I really do love you.
      `,
    },
    {
      title: 'Letter 2',
      prompt: '    I promise you everything I have ever told you is true, especially what I said in that previous letter. But, I want to put a frame of reference on it. I deeply think about life a lot and I often wonder what it actualy means to love someone, as cliche as it may seem. But, I have decided that for me it is caring deep enough for someone that you would help them in the middle of the night regardless of the time, day, place, or circumstances. That\'s it. And you may see that as shallow or unemotional, but it is the only way for me to put my emotions into perspective because I literally don\'t know how else to think about them. I say this because I want you to understand what I mean when I say I love you. I don\'t mean it in the corny and ficticious "ride or die" kind of way. I generally try to be a realist. So rather, I approach relatiionships from a different light. A great definition of a relationship I once came across is: "Two people who decide to grow together," and I believe that encompasses it perfectly. Kendra, when I say I love you I mean that I think about you more than you know. I hope nothing hurts you. I love you\'re smile and laugh, you\'re joy and happiness. And most importantly, I love how ticklish you are. So, I mean it as this. Regardless of what happens in the next months and years, I have no regrets being with you and I am committed to growing along side you for as long as you are willing to let me. From what I have learned to the fun I have had with you, you have brightened up my days and my life (you\'ve also made me kind of soft if I\'m being honest, but I\'ll let that slide). I have grown as a person both emotionally and mentally in my relationsip with you, and I hope you would say the same as yourself. So, in that sense, I love you what you have brought to my life. You will always have a special place in my heart Kendra, and I will always wish you to be and help you to become the best version of yourself. I am excited to be your boyfriend again.'
    },
    {
      title: 'Letter 3',
      prompt: '    I wanted to finish with one more thing. I know that you have been through a lot especially at your old school, and I feel terrible about that. People will always talk, whether its about you or anybody. The best piece of advice I can give to enyone is just learn to ignore people and keep living your life. I know in your circumstances that was basically impossible and far more severe than just unkind words, but just for future reference. You have to make sure to always understand your self-worth, to see how funny and beautiful and kind and sincere you are. Keep the closest parts of your life quiet as anything public is subject to the world\'s opinion. But, at the same time, don\'t be afraid to be who you are. Live and fail and screw up and learn from it. That is all you can do and that is all I strive to do. Thank you for everything Kendra, I wish you the best birthday you can have and I\'m so glad I get to spend more time with you to grow together.',
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
    </main>
  );
}