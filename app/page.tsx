'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const INTRO_SEEN_KEY = 'kendra_intro_seen';

const heroPhotos = [
  'D6B08F87-889D-44BA-B07E-E1CDEC86E73F_1_105_c.jpeg',
  'DD7E2388-717E-46F4-B9F0-88308A048390_1_105_c.jpeg',
  '438D1244-8E88-4871-ABB5-A9FA9A7FD8F5_1_105_c.jpeg',
];

const introSteps = [
  'Hey Kendra',
  'So...',
  'I may not be able to draw as well as you..',
  'But...',
  'I can build websites',
  'So...',
  'Since everything happened, I wanted to ask...',
];

export default function HomePage() {
  const [introOpen, setIntroOpen] = useState(false);
  const [introIndex, setIntroIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answeredYes, setAnsweredYes] = useState(false);
  const [wrongChoice, setWrongChoice] = useState(false);

  // first visit logic
  useEffect(() => {
    try {
      const seen = localStorage.getItem(INTRO_SEEN_KEY) === 'true';
      if (!seen) setIntroOpen(true);
    } catch {
      // ignore
    }
  }, []);

  // hide navbar while intro is open
  useEffect(() => {
    if (introOpen) document.body.classList.add('intro-open');
    else document.body.classList.remove('intro-open');
    return () => document.body.classList.remove('intro-open');
  }, [introOpen]);

  const resetIntro = () => {
    setIntroIndex(0);
    setShowQuestion(false);
    setAnsweredYes(false);
    setWrongChoice(false);
  };

  const openIntro = () => {
    resetIntro();
    setIntroOpen(true);
  };

  const closeIntroAndMarkSeen = () => {
    try {
      localStorage.setItem(INTRO_SEEN_KEY, 'true');
    } catch {
      // ignore
    }
    setIntroOpen(false);
  };

  const nextIntro = () => {
    if (introIndex < introSteps.length - 1) {
      setIntroIndex((i) => i + 1);
      return;
    }
    setShowQuestion(true);
  };

  const handleNo = () => {
    setWrongChoice(true);
    setTimeout(() => setWrongChoice(false), 1200);
  };

  // ✅ KEY FIX: if intro is open, ONLY render intro (no cover behind it)
  if (introOpen) {
    return (
      <main className="intro-gate" role="dialog" aria-modal="true">
        <div className="intro-bg-blur" aria-hidden />
        <div className="intro-hearts" aria-hidden>
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 11 + 5) % 100}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              ♥
            </span>
          ))}
        </div>

        <div className="intro-card">
          {!showQuestion && !answeredYes && (
            <div key={`step-${introIndex}`} className="intro-step-anim">
              <p className="intro-label">for kendra ♥</p>
              <h1 className="intro-line">{introSteps[introIndex]}</h1>
              <p className="intro-sub">
                {introIndex < introSteps.length - 1 ? 'keep going' : 'one more thing...'}
              </p>
              <button className="intro-btn" onClick={nextIntro}>
                {introIndex < introSteps.length - 1 ? 'Next' : 'Continue'}
              </button>
            </div>
          )}

          {showQuestion && !answeredYes && (
            <div key="question-step" className="intro-step-anim">
              <p className="intro-label">important question</p>
              <h1 className="intro-line question-line">
                Will you be my girlfriend (again) ♥
              </h1>

              <div className="question-buttons">
                <button
                  className="intro-btn yes-btn"
                  onClick={() => {
                    setAnsweredYes(true);
                    setShowQuestion(false);
                  }}
                >
                  Yes
                </button>
                <button className="intro-btn no-btn" onClick={handleNo}>
                  No
                </button>
              </div>

              {wrongChoice && <p className="wrong-choice">wrong choice, pick again</p>}
            </div>
          )}

          {answeredYes && (
            <div key="yes-step" className="intro-step-anim">
              <p className="intro-label">exactly</p>
              <h1 className="intro-line">I knew it ♥</h1>
              <p className="intro-sub">okay now open the site</p>
              <button className="intro-btn" onClick={closeIntroAndMarkSeen}>
                Done
              </button>
            </div>
          )}
        </div>
      </main>
    );
  }

  // Normal site (only renders when introOpen is false)
  return (
    <main className="book-page">
      <section className="card cover-card">
        <div className="cover-left">
          <p className="small-tag">Birthday Book</p>
          <h1>Happy Birthday Kendra ♥</h1>
          <p className="soft-text">

          </p>

          <div className="cover-buttons">
            <Link href="/scrapbook" className="btn-link">
              Open scrapbook
            </Link>
            <Link href="/letters" className="btn-link">
              Open letters
            </Link>
            <Link href="/dad-jokes" className="btn-link">
              Dad jokes page
            </Link>

            <button onClick={openIntro} className="btn-link">
              Replay intro
            </button>
          </div>

          <div className="mini-drawer">
            <p className="drawer-title">♥ Kendra</p>
            <p>[Put a short personal note here for the front page.]</p>
          </div>

          <div className="page-links-grid">
            <Link href="/letters" className="mini-link-card">
              <h3>Letters</h3>
              <p>For you</p>
            </Link>
            <Link href="/dad-jokes" className="mini-link-card">
              <h3>Dad Jokes</h3>
              <p>Had to throw in some jokes</p>
            </Link>
          </div>
        </div>

        <div className="cover-right">
          <div className="hero-collage">
            {heroPhotos.map((src, i) => (
              <div key={src} className={`hero-photo hero-photo-${i + 1}`}>
              <Image
                src={`/photos/${src}`}
                alt="Kendra memory"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
              />              </div>
            ))}
            <div className="sticker sticker-1">🎀 pretty era</div>
            <div className="sticker sticker-2">♥ 17</div>
          </div>
        </div>
      </section>
    </main>
  );
}