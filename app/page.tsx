'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const heroPhotos = [
  'D6B08F87-889D-44BA-B07E-E1CDEC86E73F_1_105_c.jpeg',
  'DD7E2388-717E-46F4-B9F0-88308A048390_1_105_c.jpeg',
  '438D1244-8E88-4871-ABB5-A9FA9A7FD8F5_1_105_c.jpeg',
];

const gallery = [
  '5CFB3B46-10F1-46DA-BABD-8376DDC7947F_1_105_c.jpeg',
  '26B95D9A-4685-4712-9484-2C5E3F9FCDE7_1_105_c.jpeg',
  '37714600-ADB1-4BA7-B4EA-E4BAE8D5F6DC_1_105_c.jpeg',
  '841E5E8F-1CEC-4610-B9C0-4470DFF36CBC_1_105_c.jpeg',
  '016CA950-D288-442A-A747-C050D045E19B_1_105_c.jpeg',
  'DC66649A-B324-44C3-8E4D-95EA811EFA19_1_105_c.jpeg',
  'EB64113B-0D5F-474A-9514-C6836898AE30_1_105_c.jpeg',
  'EEC16687-68E2-49F3-BBC1-D48DB5463B55_1_105_c.jpeg',
  'B8DE3662-6129-4DDA-84DF-B6C18D203D00_1_105_c.jpeg',
  'B5ED810A-BE8C-42C4-8487-15FFA7BD3080_1_105_c.jpeg',
  '879E9D35-C64D-4E73-9364-2B7B4E339E7A_1_102_o.jpeg',
  'CD183130-6BAB-4C23-BB4C-902A14D4B682_1_105_c.jpeg',
  'EFE8B9B0-D09F-4350-AED8-7705F07A247F_1_105_c.jpeg',
  'F2B82C5F-9FFB-416D-9880-6EE79AD6035E_1_102_o.jpeg',
];

const reasons = [
  'Your smile fixes bad days',
  'You make everything feel fun',
  'You are gorgeous and genuine',
  'You are strong in quiet ways',
  'You make cozy moments the best',
  'You deserve the cutest birthday ever',
];

const surpriseNotes = [
  'Tiny surprise: You make every photo better ✨',
  'Secret note: 17 is going to look insanely good on you 💖',
  'Hidden message: You have the prettiest smile in the room, always.',
  'Bonus note: Save this page forever because it is basically a pink time capsule 🩷',
  'Another one: Beach day + rainbow pic = elite memory level.',
];

const captionPool = [
  'beach day',
  'prom night',
  'cozy mode',
  'cute pic alert',
  'memory unlocked',
  'main character moment',
  'our fav',
  '17 era preview',
];

export default function Home() {
  const [secretCount, setSecretCount] = useState(0);
  const [showLetter1, setShowLetter1] = useState(false);
  const [showLetter2, setShowLetter2] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [stamp, setStamp] = useState<'💗' | '🎀' | '✨' | '🫶'>('💗');

  const activeSecret = useMemo(
    () => (secretCount > 0 ? surpriseNotes[(secretCount - 1) % surpriseNotes.length] : ''),
    [secretCount]
  );

  const sparkles = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);

  return (
    <main className="site-shell">
      <div className="hearts" aria-hidden>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ left: `${(i * 13) % 100}%`, animationDelay: `${i * 0.7}s` }}>
            ♥
          </span>
        ))}
      </div>

      <div className="sparkle-layer" aria-hidden>
        {sparkles.map((i) => (
          <span key={i} style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%`, animationDelay: `${i * 0.4}s` }}>✦</span>
        ))}
      </div>

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">For Kendra</p>
          <h1>Happy 17th Birthday, Kendra 💗</h1>
          <p>
            A little pink website made just for you — full of favorite memories, cute surprises,
            and spots where I can add more notes and letters.
          </p>
          <div className="pill-row">
            <span>17 looks amazing on you ✨</span>
            <span>Pink era activated 🎀</span>
          </div>

          <div className="button-row">
            <button onClick={() => setSecretCount((c) => c + 1)}>Tap for surprise</button>
            <button onClick={() => setShowPlaylist((v) => !v)}>{showPlaylist ? 'Hide' : 'Open'} vibe list</button>
            <button onClick={() => setStamp((s) => (s === '💗' ? '🎀' : s === '🎀' ? '✨' : s === '✨' ? '🫶' : '💗'))}>
              Change stamp
            </button>
          </div>

          {activeSecret && (
            <div className="secret-box" key={secretCount}>
              <span>{stamp}</span>
              <p>{activeSecret}</p>
            </div>
          )}
        </div>

        <div className="hero-stack">
          {heroPhotos.map((src, idx) => (
            <div className={`stack-photo stack-${idx + 1}`} key={src}>
              <Image src={`/photos/${src}`} alt="Kendra memory" fill sizes="(max-width: 768px) 100vw, 300px" />
            </div>
          ))}
          <div className="floating-sticker">{stamp} Kendra turns 17</div>
        </div>
      </section>

      <section className="card mini-grid">
        <div className="mini-card">
          <h3>Open when...</h3>
          <p>Use these as placeholders for your personal notes later.</p>
          <div className="mini-buttons">
            <button onClick={() => setShowLetter1((v) => !v)}>{showLetter1 ? 'Hide' : 'Open'} Letter 1</button>
            <button onClick={() => setShowLetter2((v) => !v)}>{showLetter2 ? 'Hide' : 'Open'} Letter 2</button>
          </div>
          {showLetter1 && (
            <div className="letter-box">
              <p className="letter-title">💌 Letter Slot 1</p>
              <p>
                [Add your personal message here — maybe a birthday letter, favorite memory, or a
                note about what makes her special.]
              </p>
            </div>
          )}
          {showLetter2 && (
            <div className="letter-box alt">
              <p className="letter-title">🎀 Letter Slot 2</p>
              <p>
                [Add another message here — something more funny, more sentimental, or future plans
                for the year.] 
              </p>
            </div>
          )}
        </div>

        <div className="mini-card">
          <h3>Memory Jar</h3>
          <p>Quick prompts you can replace with your own stories.</p>
          <ul>
            <li>♥ First memory I always think about: [write here]</li>
            <li>♥ A moment that made me laugh hard: [write here]</li>
            <li>♥ Favorite thing about you: [write here]</li>
            <li>♥ A place I want to take you this year: [write here]</li>
          </ul>
          {showPlaylist && (
            <div className="playlist-box">
              <p className="letter-title">♫ Birthday Vibe List (Placeholder)</p>
              <p>[Add 5 songs you want to dedicate to her here]</p>
            </div>
          )}
        </div>
      </section>

      <section className="card reasons">
        <h2>Reasons you are the best</h2>
        <div className="reasons-grid">
          {reasons.map((r) => (
            <div key={r} className="reason-item">
              <span>💞</span>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card gallery-wrap">
        <div className="section-title">
          <h2>Our favorite memories</h2>
          <p>Beach days, cozy nights, and dressed-up moments ✨</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <figure key={src} className={index % 5 === 0 ? 'wide' : ''}>
              <Image
                src={`/photos/${src}`}
                alt={`Kendra photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption>{captionPool[index % captionPool.length]} ♥</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="card easter-egg">
        <h2>Hidden Corner</h2>
        <p>
          Easter egg: click the tiny hearts below to reveal more placeholder spaces for little notes.
        </p>
        <div className="heart-switches">
          <details>
            <summary>♥ secret drawer 1</summary>
            <div className="drawer">[Add a short inside joke here]</div>
          </details>
          <details>
            <summary>♥ secret drawer 2</summary>
            <div className="drawer">[Add a mini “remember when…” note here]</div>
          </details>
          <details>
            <summary>♥ secret drawer 3</summary>
            <div className="drawer">[Add a future date idea here]</div>
          </details>
        </div>
      </section>

      <section className="card final">
        <h2>Birthday Wish Jar 🎀</h2>
        <div className="wish-list">
          <div><strong>Wish #1:</strong> You feel celebrated all day.</div>
          <div><strong>Wish #2:</strong> You laugh a lot and take a million cute pics.</div>
          <div><strong>Wish #3:</strong> This year brings even better memories than these.</div>
          <div><strong>Wish #4:</strong> You always remember how amazing you are.</div>
        </div>
        <p className="footer-line">Happy Birthday Kendra 💕 17 never looked this cute.</p>
      </section>
    </main>
  );
}
