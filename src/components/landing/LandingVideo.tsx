import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const LandingVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-[310px] sm:max-w-md md:max-w-xl mx-auto">
        <div
          onClick={() => setIsOpen(true)}
          className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(176,122,44,0.15),0_12px_40px_rgba(0,0,0,0.6)] border border-[#B07A2C]/30 group cursor-pointer bg-black transition-all duration-300 hover:border-[#B07A2C]/60 hover:shadow-[0_10px_30px_rgba(176,122,44,0.25)]"
        >
          {/* Video preview background */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
            src="/videos/criativo.mp4#t=0.5"
            muted
            playsInline
          />
          
          {/* Radial light glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,122,44,0.18)_0%,transparent_75%)]" />

          {/* Glassmorphism play button wrapper */}
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-xl group-hover:bg-[#B07A2C]/40 group-hover:border-[#B07A2C]/60 transition-colors">
              <Play className="w-5 h-5 sm:w-7 sm:h-7 text-white ml-1 fill-white" />
            </div>
          </div>

          <div className="absolute bottom-2.5 sm:bottom-3.5 left-0 right-0 text-center pointer-events-none px-2">
            <p className="text-white/95 text-xs sm:text-sm md:text-base font-body tracking-widest uppercase drop-shadow-md font-semibold">
              Veja como funciona
            </p>
          </div>
        </div>
      </div>

      {/* Modal de reproducao ajustado na proporcao vertical (9:16) para eliminar faixas pretas e ampliar o video */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[92vw] sm:max-w-md p-1.5 bg-black border-[#B07A2C]/40 rounded-2xl overflow-hidden shadow-2xl">
          <DialogTitle className="sr-only">Vídeo demonstrativo do Memorial</DialogTitle>
          <div className="relative w-full aspect-[9/16] max-h-[82vh] overflow-hidden rounded-xl bg-black flex items-center justify-center mx-auto">
            <video
              className="w-full h-full object-cover rounded-xl"
              controls
              autoPlay
              playsInline
              src="/videos/criativo.mp4"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
