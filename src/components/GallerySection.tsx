import { AnimatedSection } from "./AnimatedSection";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Image, Camera } from "lucide-react";

interface GalleryItem {
  tipo: "foto" | "video";
  url: string;
  legenda?: string;
}

interface GallerySectionProps {
  galeria: GalleryItem[];
}

// Placeholder colors for demo
const placeholderColors = [
  "from-primary/20 to-accent/20",
  "from-accent/20 to-sage/20",
  "from-sage/20 to-primary/20",
  "from-primary/10 to-gold-light/30",
  "from-gold-light/20 to-accent/10",
  "from-accent/10 to-primary/20",
  "from-primary/15 to-sage/15",
  "from-sage/15 to-gold-light/20",
];

export const GallerySection = ({ galeria }: GallerySectionProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const visible = showAll ? galeria : galeria.slice(0, 8);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const navigate = (dir: number) => {
    setCurrentIndex((prev) => (prev + dir + galeria.length) % galeria.length);
  };

  const handleSwipeStart = (clientX: number) => {
    touchEndX.current = null;
    touchStartX.current = clientX;
  };

  const handleSwipeMove = (clientX: number) => {
    touchEndX.current = clientX;
  };

  const handleSwipeEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const minSwipeDistance = 50;
    const distance = touchStartX.current - touchEndX.current;
    
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) navigate(1);
    if (isRightSwipe) navigate(-1);

    touchStartX.current = null;
    touchEndX.current = null;
  };


  return (
    <section className="memorial-section bg-card">
      <div className="memorial-container">
        <AnimatedSection>
          <div className="flex justify-center mb-3">
            <Camera className="w-7 h-7 text-primary/60" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-2 font-body">
            Momentos eternos
          </p>
          <h2 className="section-title">Galeria de Memórias</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {visible.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <button
                onClick={() => openModal(i)}
                className={`relative aspect-square w-full rounded-lg overflow-hidden group bg-gradient-to-br ${placeholderColors[i % placeholderColors.length]} border border-border/30 hover:border-primary/30 transition-all duration-300`}
              >
                {item.url ? (
                  <img src={item.url} alt={item.legenda || ""} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <Image className="w-8 h-8 text-primary/40" />
                    <span className="text-xs text-muted-foreground font-body">{item.legenda}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
              </button>
            </AnimatedSection>
          ))}
        </div>

        {galeria.length > 8 && !showAll && (
          <AnimatedSection>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-body text-sm hover:bg-primary/90 transition-colors"
              >
                Ver todas as fotos
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 touch-none select-none"
          onTouchStart={(e) => handleSwipeStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => handleSwipeMove(e.targetTouches[0].clientX)}
          onTouchEnd={handleSwipeEnd}
          onMouseDown={(e) => handleSwipeStart(e.clientX)}
          onMouseMove={(e) => {
            if (touchStartX.current !== null) handleSwipeMove(e.clientX);
          }}
          onMouseUp={handleSwipeEnd}
          onMouseLeave={() => {
            if (touchStartX.current !== null) handleSwipeEnd();
          }}
        >
          <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground">
            <X className="w-8 h-8" />
          </button>
          <button onClick={() => navigate(-1)} className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={() => navigate(1)} className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground">
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-3xl w-full text-center">
            <div className={`aspect-video rounded-lg bg-gradient-to-br ${placeholderColors[currentIndex % placeholderColors.length]} flex items-center justify-center`}>
              {galeria[currentIndex]?.url ? (
                <img src={galeria[currentIndex].url} alt="" className="max-h-[70vh] rounded-lg pointer-events-none" draggable={false} />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <Image className="w-16 h-16 text-primary/40" />
                  <span className="text-muted-foreground font-body">{galeria[currentIndex]?.legenda}</span>
                </div>
              )}
            </div>
            {galeria[currentIndex]?.legenda && (
              <p className="text-primary-foreground/80 mt-4 font-body italic">{galeria[currentIndex].legenda}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
