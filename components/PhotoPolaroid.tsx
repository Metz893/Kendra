import Image from 'next/image';

type Props = {
  src: string;
  caption: string;
  className?: string;
  rotate?: number;
};

export default function PhotoPolaroid({
  src,
  caption,
  className = '',
  rotate = 0,
}: Props) {
  return (
    <figure
      className={`polaroid ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="polaroid-img">
        <Image
          src={`/photos/${src}`}
          alt={caption}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <figcaption>{caption} ♥</figcaption>
    </figure>
  );
}