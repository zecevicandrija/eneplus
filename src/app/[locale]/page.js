import Pocetna from "./Pocetna/Pocetna";
import { getSEOMetadata } from '@/utils/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage.metadata' });

    return getSEOMetadata({
        locale,
        route: '/',
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    });
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Eneplus",
        "description": "Eneplus je konsultantska firma specijalizovana za energetski menadžment, energetsku efikasnost i projektni menadžment.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Stevana Doronjskog 38",
          "addressLocality": "Vrbas",
          "postalCode": "21460",
          "addressCountry": "RS"
        },
        "telephone": "+381 64 817 2033",
        "url": "https://www.eneplus.rs",
        "openingHours": "Mo,Tu,We,Th,Fr 10:00-15:00",
        "priceRange": "$$",
        "areaServed": "RS"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kolika je cena za energetski pasoš?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cena zavisi od tipa i veličine vašeg objekta. Za stanove i manje kuće cena se najčešće kreće od 15.000 do 30.000 dinara. Za veće poslovne objekte cena se formira na upit."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko dugo traje izrada energetskog pasoša?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Izrada za standardne objekte obično traje između 2 i 5 radnih dana. U specifičnim, hitnim slučajevima moguća je i ubrzana izrada u roku od samo 24 sata."
            }
          },
          {
            "@type": "Question",
            "name": "Da li je obavezan izlazak inženjera na teren?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Apsolutno da. Naš licencirani inženjer mora lično izvršiti vizuelnu proveru instalacija, premeriti objekat i uporediti stanje na terenu sa dostavljenom građevinskom dokumentacijom."
            }
          },
          {
            "@type": "Question",
            "name": "Da li je energetski pasoš zakonski obavezan i za koje zgrade?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Da, prema Zakonu o planiranju i izgradnji, obavezan je za sve novoizgrađene objekte pre dobijanja upotrebne dozvole, kao i za postojeće zgrade koje se adaptiraju, rekonstruišu ili kada se nekretnina prodaje ili izdaje."
            }
          },
          {
            "@type": "Question",
            "name": "Koliko dugo važi izdat energetski pasoš?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zvaničan energetski pasoš važi 10 godina od datuma izdavanja."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Izrada energetskog pasoša i elaborata energetske efikasnosti",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Eneplus"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Uvođenje ISO 50001 standarda za energetski menadžment",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Eneplus"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Energetski pregledi (ISO 50002, EN 16247)",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Eneplus"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Termografija i Blower Door merenja",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Eneplus"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Softver za energetski menadžment",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Eneplus"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pocetna />
    </>
  );
}
