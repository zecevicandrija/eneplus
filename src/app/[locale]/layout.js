import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from './Pocetna/Navbar';
import Footer from './Pocetna/Footer';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    // Set the locale for this request
    setRequestLocale(locale);

    // Get messages for the current locale
    const messages = await getMessages();

    // JSON-LD for Organization
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Eneplus',
        url: 'https://eneplus.rs',
        logo: 'https://eneplus.rs/Assets/enepluslogo.png',
        sameAs: [
            // Add social profiles here if available, e.g.
            // 'https://www.linkedin.com/company/eneplus',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+381 64 817 2033',
            contactType: 'customer service',
            areaServed: ['RS', 'EU'],
            availableLanguage: ['Serbian', 'English', 'German']
        }
    };

    return (
        <NextIntlClientProvider messages={messages}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
    );
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    return {
        title: {
            template: '%s | Eneplus',
            default: 'Eneplus | Energy Efficiency & Consulting',
        },
        description: 'Eneplus pruža ekspertske usluge u oblasti energetske efikasnosti, menadžmenta i obnovljivih izvora energije. Vaš partner za održivu budućnost.',
        metadataBase: new URL('https://eneplus.rs'),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'sr': '/sr',
                'en': '/en',
            },
        },
        openGraph: {
            title: 'Eneplus | Energy Efficiency & Consulting',
            description: 'Leading experts in energy audits, management, and certification.',
            url: `https://eneplus.rs/${locale}`,
            siteName: 'Eneplus',
            images: [
                {
                    url: '/Assets/enepluslogo.png',
                    width: 800,
                    height: 600,
                    alt: 'Eneplus Logo',
                },
            ],
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Eneplus',
            description: 'Energy efficiency solutions.',
            images: ['/Assets/enepluslogo.png'],
        },
        icons: {
            icon: '/Assets/enepluslogo.png', // Using logo as favicon fallback if actual favicon.ico is missing or this is preferred
            shortcut: '/Assets/enepluslogo.png',
            apple: '/Assets/enepluslogo.png',
        },
    };
}
