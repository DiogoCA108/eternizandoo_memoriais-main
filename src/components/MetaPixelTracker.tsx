import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPixelEvent, trackWhatsAppClick } from "@/lib/metaPixel";

/**
 * Componente headless para gerenciar o rastreamento do Meta Pixel em SPA (Single Page Application):
 * 1. Rastreia PageView em mudanças de rota no React Router (evitando duplicação no carregamento inicial).
 * 2. Monitora globalmente cliques em qualquer link de WhatsApp como rede de segurança.
 */
export const MetaPixelTracker = () => {
  const location = useLocation();
  const isFirstMount = useRef(true);
  const lastPath = useRef(location.pathname + location.search);

  // Rastreamento de PageView em transições de rotas (SPA)
  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      lastPath.current = currentPath;
      // O PageView inicial já foi disparado pelo script base no index.html
      return;
    }

    if (currentPath !== lastPath.current) {
      lastPath.current = currentPath;
      trackPixelEvent("PageView");
    }
  }, [location.pathname, location.search]);

  // Listener global de contingência para qualquer link de WhatsApp
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a");
      if (!anchor || !anchor.href) return;

      const href = anchor.href.toLowerCase();
      if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send")
      ) {
        trackWhatsAppClick("whatsapp_global_link");
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
};

