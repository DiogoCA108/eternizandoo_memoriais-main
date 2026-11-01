/**
 * Utilitários para rastreamento de eventos via Meta Pixel (Facebook Ads)
 * Pixel ID: 981234581146150
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: (...args: any[]) => void;
  }
}

export const META_PIXEL_ID = "981234581146150";

/**
 * Dispara um evento padrão ou customizado no Meta Pixel de forma segura,
 * verificando se o fbq está inicializado no navegador (respeita adblockers).
 */
export const trackPixelEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    if (typeof window.fbq === "function") {
      try {
        if (params && Object.keys(params).length > 0) {
          window.fbq("track", eventName, params);
        } else {
          window.fbq("track", eventName);
        }
      } catch (err) {
        console.warn("[Meta Pixel] Erro ao disparar evento:", err);
      }
    } else if (Array.isArray(window._fbq)) {
      try {
        if (params && Object.keys(params).length > 0) {
          window._fbq.push(["track", eventName, params]);
        } else {
          window._fbq.push(["track", eventName]);
        }
      } catch (err) {
        console.warn("[Meta Pixel] Erro no fallback do Pixel:", err);
      }
    }
  }
};

let lastContactTimestamp = 0;

/**
 * Dispara o evento de conversão padrão oficial da Meta:
 * fbq('track', 'Contact');
 *
 * Características essenciais:
 * - Execução síncrona imediata no momento do clique (ou mousedown), garantindo que a requisição
 *   seja despachada antes da transição da aba do WhatsApp.
 * - Deduplicação com janela de 1000ms para evitar disparos duplicados decorrentes de múltiplos eventos
 *   (ex: mousedown + click, touchstart + click, ou clique duplo do usuário).
 * - Preserva o comportamento nativo do link com target="_blank" sem depender de popups bloqueáveis.
 * - Seguro contra bloqueadores de anúncios (não lança exceções nem interrompe o clique).
 */
export const trackWhatsAppContact = () => {
  const now = Date.now();
  if (now - lastContactTimestamp < 1000) {
    return;
  }
  lastContactTimestamp = now;

  trackPixelEvent("Contact");
};

// Alias para manter retrocompatibilidade
export const trackWhatsAppClick = trackWhatsAppContact;

/**
 * Estrutura preparada para futuro rastreamento de compras reais (Purchase).
 * NOTA: Não deve ser disparada em cliques de WhatsApp, apenas quando a venda for concluída.
 */
export const trackPurchase = (value: number, currency: string = "BRL", transactionId?: string) => {
  trackPixelEvent("Purchase", {
    value,
    currency,
    ...(transactionId ? { order_id: transactionId } : {}),
  });
};
