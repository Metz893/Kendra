'use client';

import { useMemo, useState } from 'react';
import PhotoPolaroid from '@/components/PhotoPolaroid';

const photos = [
  { src: '5CFB3B46-10F1-46DA-BABD-8376DDC7947F_1_105_c.jpeg', caption: 'boat selfie' },
  { src: '26B95D9A-4685-4712-9484-2C5E3F9FCDE7_1_105_c.jpeg', caption: 'windy hair day' },
  { src: '37714600-ADB1-4BA7-B4EA-E4BAE8D5F6DC_1_105_c.jpeg', caption: 'Homecoming' },
  { src: '841E5E8F-1CEC-4610-B9C0-4470DFF36CBC_1_105_c.jpeg', caption: 'I think it was past your bedtime' },
  { src: '016CA950-D288-442A-A747-C050D045E19B_1_105_c.jpeg', caption: 'cozy cam' },
  { src: 'DC66649A-B324-44C3-8E4D-95EA811EFA19_1_105_c.jpeg', caption: 'You are so adorable' },
  { src: 'EB64113B-0D5F-474A-9514-C6836898AE30_1_105_c.jpeg', caption: 'Hoco' },
  { src: 'EEC16687-68E2-49F3-BBC1-D48DB5463B55_1_105_c.jpeg', caption: 'Pretty' },
  { src: 'B8DE3662-6129-4DDA-84DF-B6C18D203D00_1_105_c.jpeg', caption: 'Hoco photo' },
  { src: 'B5ED810A-BE8C-42C4-8487-15FFA7BD3080_1_105_c.jpeg', caption: 'hug pic' },
  { src: 'IMG_0491.JPG', caption: 'You seem suspicious' },
  { src: 'IMG_0492.JPG', caption: 'You are adorable' },
  { src: 'IMG_0493.JPG', caption: 'Looks like stealing Froyo' },
  { src: 'IMG_0496.JPG', caption: 'Somebody was tired' },
  { src: 'IMG_0497.JPG', caption: 'Beautiful' },
  { src: 'IMG_0498.JPG', caption: 'My shoulder doesn\'t smell that good' },
  { src: 'IMG_0499.JPG', caption: 'Cute' },
  { src: 'IMG_0500.JPG', caption: 'Again with the shoulder' },
  { src: 'IMG_0501.JPG', caption: 'That\'s my sweatshirt' },
  { src: 'IMG_0502.jpeg', caption: 'I love you\'re curly hair' },
  { src: 'new.jpeg', caption: 'Poster' },
  { src: 'nwq.jpeg', caption: 'I look high' },

];

const stickers = ['🎀', '🩷', '✨', '🫶', '🌸', '♥'];

export default function ScrapbookPage() {
  const [shuffle, setShuffle] = useState(0);

  const randomized = useMemo(() => {
    const copy = [...photos];
    // small stable-ish shuffle per click
    for (let i = copy.length - 1; i > 0; i--) {
      const j = (i * 7 + shuffle * 3) % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [shuffle]);

  return (
    <main className="book-page">
      <section className="card scrapbook-header">
        <div>
          <p className="small-tag">Scrapbook Page</p>
          <h1>Favorite Memories ♥</h1>
          <p className="soft-text">
            
          </p>
        </div>
        <div className="header-actions">
          <button onClick={() => setShuffle((n) => n + 1)}>Shuffle layout</button>
        </div>
      </section>

      <section className="scrapbook-board">
        {randomized.map((photo, idx) => (
          <div key={`${photo.src}-${shuffle}`} className={`scrap-slot slot-${(idx % 8) + 1}`}>
            <PhotoPolaroid
              src={photo.src}
              caption={photo.caption}
              rotate={[-5, 4, -2, 6, -4, 3][idx % 6]}
            />
            <div className="tiny-sticker">{stickers[idx % stickers.length]}</div>
          </div>
        ))}
      </section>

    </main>
  );
}