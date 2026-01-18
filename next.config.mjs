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
      }
    ];
  },
};

export default withNextIntl(nextConfig);
