
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importe se estiver usando React Router

/**
 * Componente React que injeta o Meta Pixel da Meta no documento.
 */
const FacebookPixel = () => {
  // Use useLocation se quiser rastrear mudanças de rota automaticamente (SPA navigation)
  // const location = useLocation(); 

  useEffect(() => {
    const pixelId = '1407806606993916';

    // Função que carrega o script base do Pixel
    const loadPixelScript = () => {
      !(function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      // Inicializa e rastreia a visualização de página inicial
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    };

    // Adiciona a tag <noscript> para garantir compatibilidade
    const noScriptTag = document.createElement('noscript');
    noScriptTag.innerHTML = `<img height="1" width="1" style="display:none" src="www.facebook.com{pixelId}&ev=PageView&noscript=1"/>`;
    document.head.appendChild(noScriptTag);

    loadPixelScript();

    return () => {
      // Limpeza opcional se o componente for desmontado
      document.head.removeChild(noScriptTag);
    };
  }, []); // Array de dependências vazio garante que rode apenas uma vez ao montar

  // Se você usa React Router para SPA, adicione um useEffect extra para rastrear pageViews em mudanças de rota:
  /*
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);
  */

  return null; // Este componente não renderiza nada visualmente
};

export default FacebookPixel;
