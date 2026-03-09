import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Shortcuts for Services (redirecting to Serbian version by default)
      {
        source: '/projektovanje',
        destination: '/sr/usluge/projektovanje',
        permanent: true,
      },
      {
        source: '/energetski-pregledi',
        destination: '/sr/usluge/energetski-pregledi',
        permanent: true,
      },
      {
        source: '/energetska-sertifikacija',
        destination: '/sr/usluge/energetska-sertifikacija',
        permanent: true,
      },
      {
        source: '/energetski-konsalting',
        destination: '/sr/usluge/energetski-konsalting',
        permanent: true,
      },
      {
        source: '/energetski-menadzment',
        destination: '/sr/usluge/energetski-menadzment',
        permanent: true,
      },
      {
        source: '/iso-50001',
        destination: '/sr/usluge/iso-50001',
        permanent: true,
      },
      {
        source: '/merenja',
        destination: '/sr/usluge/merenja',
        permanent: true,
      },
      {
        source: '/jpp-podrska',
        destination: '/sr/usluge/jpp-podrska',
        permanent: true,
      },
      {
        source: '/upravljanje-projektima',
        destination: '/sr/usluge/upravljanje-projektima',
        permanent: true,
      },
      {
        source: '/studije-i-analize',
        destination: '/sr/usluge/studije-i-analize',
        permanent: true,
      },
      {
        source: '/trening-i-edukacija',
        destination: '/sr/usluge/trening-i-edukacija',
        permanent: true,
      },
      {
        source: '/web-aplikacije',
        destination: '/sr/usluge/web-aplikacije',
        permanent: true,
      },
      // Additional Shortcuts
      {
        source: '/softver',
        destination: '/sr/softver',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/sr/kontakt',
        permanent: true,
      },
      {
        source: '/o-nama',
        destination: '/sr/o-nama',
        permanent: true,
      },
      // English-in-Serbian Redirects
      {
        source: '/sr/energy-audit',
        destination: '/en/services/energy-audits',
        permanent: true,
      },
      {
        source: '/sr/design',
        destination: '/en/services/design',
        permanent: true,
      },
      {
        source: '/sr/energy-certification',
        destination: '/en/services/energy-certification',
        permanent: true,
      },
      {
        source: '/sr/energy-consulting',
        destination: '/en/services/energy-consulting',
        permanent: true,
      },
      {
        source: '/sr/energy-management',
        destination: '/en/services/energy-management',
        permanent: true,
      },
      {
        source: '/sr/iso-50001',
        destination: '/en/services/iso-50001',
        permanent: true,
      },
      {
        source: '/sr/measurements',
        destination: '/en/services/measurements',
        permanent: true,
      },
      {
        source: '/sr/ppp-support',
        destination: '/en/services/ppp-support',
        permanent: true,
      },
      {
        source: '/sr/project-management',
        destination: '/en/services/project-management',
        permanent: true,
      },
      {
        source: '/sr/studies-and-analysis',
        destination: '/en/services/studies-and-analysis',
        permanent: true,
      },
      {
        source: '/sr/training-and-education',
        destination: '/en/services/training-and-education',
        permanent: true,
      },
      {
        source: '/sr/web-applications',
        destination: '/en/services/web-applications',
        permanent: true,
      },
      // SEO Shortcuts
      {
        source: '/energetski-pasos',
        destination: '/sr/energetski-pasos',
        permanent: true,
      }
    ];
  },
};

export default withNextIntl(nextConfig);
