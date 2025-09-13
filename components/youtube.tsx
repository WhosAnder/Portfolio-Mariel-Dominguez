// components/YouTube.tsx
type YouTubeProps = {
  id: string;            // ID del video (no la URL completa)
  title?: string;
  className?: string;
};

export default function YouTube({ id, title = "YouTube video", className }: YouTubeProps) {
  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden bg-muted ${className ?? ""}`}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
