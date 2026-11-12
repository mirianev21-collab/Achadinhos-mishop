document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('btn-entrar-grupo');

  if (ctaButton) {
    ctaButton.addEventListener('click', function (event) {
      const targetUrl = this.getAttribute('href');

      // Dispara os eventos do Meta Pixel (ID: 453862617588411)
      if (typeof fbq === 'function') {
        // Evento padrão de conversão/lead do Meta Ads
        fbq('track', 'Lead', {
          content_name: 'Grupo VIP Selecao de Ofertas',
          content_category: 'WhatsApp Group',
          destination: 'WhatsApp'
        });

        // Evento personalizado específico para clique no grupo
        fbq('trackCustom', 'EntrarGrupoWhatsApp', {
          grupo: 'Selecao de Ofertas VIP',
          url_destino: targetUrl
        });
      }

      // Garante tempo hábil (250ms) para o pixel enviar a requisição antes do redirecionamento
      event.preventDefault();
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 250);
    });
  }
});
