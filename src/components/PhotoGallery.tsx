import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Plus, Camera } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionDivider } from "./SectionDivider";

interface Photo {
  src: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  visibleCount?: number;
  title?: string;
  subtitle?: string;
}

export const PhotoGallery = ({
  photos,
  visibleCount = 7,
  title = "Galeria de Fotos",
  subtitle,
}: PhotoGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMore = photos.length > visibleCount;
  const hiddenCount = photos.length - visibleCount;
  const visiblePhotos = photos.slice(0, visibleCount);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigate = useCallback(
    (dir: number) => {
      setCurrentIndex((prev) => (prev + dir + photos.length) % photos.length);
    },
    [photos.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, navigate]);

  return (
    <section className="memorial-section bg-[hsl(36_20%_82%)]">
      <div className="memorial-container">
        {/* Header */}
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Camera className="w-7 h-7 text-primary/60" />
          </div>
          {subtitle && (
            <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
              {subtitle}
            </p>
          )}
          <h2 className="section-title">{title}</h2>
          <div className="section-divider" />
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-12">
          {visiblePhotos.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <button
                onClick={() => openLightbox(i)}
                className="relative aspect-[4/5] w-full rounded-lg overflow-hidden group border-2 border-transparent hover:border-primary/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.caption || ""}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder index={i} caption={photo.caption} />
                )}

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300" />
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-foreground/80 to-transparent p-3 pt-8">
                    <p className="text-primary-foreground text-xs font-body leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </button>
            </AnimatedSection>
          ))}

          {/* "Ver mais" slot */}
          {hasMore && (
            <AnimatedSection delay={visibleCount * 0.05}>
              <button
                onClick={() => openLightbox(visibleCount)}
                className="relative aspect-[4/5] w-full rounded-lg overflow-hidden group border-2 border-transparent hover:border-primary/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {/* Blurred background from next hidden photo */}
                {photos[visibleCount]?.src ? (
                  <img
                    src={photos[visibleCount].src}
                    alt=""
                    className="w-full h-full object-cover blur-sm scale-110"
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder index={visibleCount} />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-all duration-300" />

                {/* Plus icon + counter */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Plus className="w-10 h-10 text-primary-foreground/90 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-primary-foreground font-body text-sm font-medium">
                    +{hiddenCount} fotos
                  </span>
                </div>
              </button>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* Section Divider inside gallery background */}
      <SectionDivider />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          photos={photos}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </section>
  );
};

/* ── Lightbox sub-component ───────────────────────────── */

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}

const Lightbox = ({ photos, currentIndex, onClose, onNavigate }: LightboxProps) => {
  const photo = photos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style={{ backgroundColor: "hsla(var(--foreground) / 0.95)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
        aria-label="Fechar"
      >
        <X className="w-7 h-7 text-primary-foreground" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        className="absolute left-3 md:left-6 z-10 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-8 h-8 text-primary-foreground" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        className="absolute right-3 md:right-6 z-10 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-8 h-8 text-primary-foreground" />
      </button>

      {/* Image */}
      <div
        className="max-w-4xl w-full mx-4 text-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {photo?.src ? (
          <img
            src={photo.src}
            alt={photo.caption || ""}
            className="max-h-[75vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
          />
        ) : (
          <div className="aspect-video max-h-[75vh] mx-auto rounded-lg bg-muted/20 flex items-center justify-center">
            <span className="text-primary-foreground/60 font-body text-lg">
              {photo?.caption || "Foto"}
            </span>
          </div>
        )}

        {photo?.caption && (
          <p className="text-primary-foreground/80 mt-4 font-body italic text-sm md:text-base">
            {photo.caption}
          </p>
        )}

        {/* Counter */}
        <p className="text-primary-foreground/50 mt-2 font-body text-xs">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
};

/* ── Placeholder sub-component ────────────────────────── */

const placeholderGradients = [
  "from-primary/20 to-accent/20",
  "from-accent/20 to-sage/20",
  "from-sage/20 to-primary/20",
  "from-primary/10 to-gold-light/30",
  "from-gold-light/20 to-accent/10",
  "from-accent/10 to-primary/20",
  "from-primary/15 to-sage/15",
  "from-sage/15 to-gold-light/20",
];

const PhotoPlaceholder = ({ index, caption }: { index: number; caption?: string }) => (
  <div
    className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]}`}
  >
    <Camera className="w-8 h-8 text-primary/40" />
    {caption && (
      <span className="text-xs text-muted-foreground font-body px-2 text-center">
        {caption}
      </span>
    )}
  </div>
);
