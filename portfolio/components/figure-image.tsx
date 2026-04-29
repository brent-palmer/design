import Image from "next/image";
import { LazyVideo } from "@/components/lazy-video";

interface FigureImageProps {
  src: string;
  alt: string;
  caption?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
}

export function FigureImage({ src, alt, caption, sizes, priority, aspectRatio }: FigureImageProps) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  return (
    <figure className="space-y-3">
      <div
        className={`relative w-full overflow-hidden ${aspectRatio ? "" : "aspect-[16/9]"}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {isVideo ? (
          <LazyVideo
            src={src}
            ariaLabel={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes ?? "(max-width: 768px) 100vw, min(1200px, 100vw)"}
            priority={priority}
          />
        )}
      </div>
      {caption && (
        <figcaption className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
