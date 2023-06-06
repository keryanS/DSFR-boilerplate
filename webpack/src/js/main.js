import '../scss/style.scss';

window.dsfr = {
  verbose: true,
  production: false,
  analytics: { 
    domain: 'gva.et-gv.fr',
    enableRating: true,
    cmp: {
      id: 'tarteaucitron'
    },
    page: {
      categories: ['landing-page', 'articles'],
      template: 'landing-page',
    },
    site: {
      environment: 'development',
      entity: 'SIG',
      target: 'information',
      type: 'standard',
    }
  }
};

// require('@gouvfr/dsfr/dist/dsfr.module.min.js');
// require('@gouvfr/dsfr/dist/dsfr.nomodule.min.js');
// require('@gouvfr/dsfr/dist/analytics/analytics.module.min.js');
// require('@gouvfr/dsfr/dist/analytics/analytics.nomodule.min.js');
