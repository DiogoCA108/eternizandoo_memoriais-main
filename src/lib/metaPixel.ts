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
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (params) {
        window.fbq("track", eventName, params);
      } else {
        window.fbq("track", eventName);
      }
    } catch (err) {
      console.warn("[Meta Pixel] Erro ao disparar evento:", err);
    }
  }
};

let lastContactTimestamp = 0;

/**
 * Dispara o evento de conversão padrão 'Contact' nos cliques direcionados ao WhatsApp.
 * Inclui deduplicação automática para evitar múltiplos disparos acidentais (ex: clique duplo).
 */
export const trackWhatsAppClick = (origem: string = "whatsapp_button") => {
  const now = Date.now();
  // Evita disparos duplicados em menos de 800ms
  if (now - lastContactTimestamp < 800) {
    return;
  }
  lastContactTimestamp = now;

  trackPixelEvent("Contact", {
    content_name: origem,
    content_category: "contact_whatsapp",
  });
};

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

