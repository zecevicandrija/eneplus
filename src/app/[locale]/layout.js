import { Geist, Geist_Mono, Outfit } from "next/font/google";
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from './Pocetna/Navbar';
import Footer from './Pocetna/Footer';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

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
    const organizationJsonLd = {
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

    // JSON-LD for LocalBusiness (Serbian Only)
    const localBusinessJsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Eneplus",
        "image": "https://eneplus.rs/Assets/banner.avif",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Stevana Doronjskog 38",
            "addressLocality": "Vrbas",
            "addressRegion": "Vojvodina",
            "postalCode": "21460",
            "addressCountry": "RS"
        },
        "telephone": "+381 64 8172033",
        "url": "https://eneplus.rs/sr"
    };

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
                <NextIntlClientProvider messages={messages}>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                    />
                    {locale === 'sr' && (
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
                        />
                    )}
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage.metadata' });

    const title = t('title');
    const description = t('description');

    return {
        title: {
            template: '%s | Eneplus',
            default: title,
        },
        description: description,
        keywords: t('keywords'),
        metadataBase: new URL('https://eneplus.rs'),
        alternates: {
            canonical: `https://eneplus.rs/${locale}`,
            languages: {
                'sr': '/sr',
                'en': '/en',
            },
        },
        openGraph: {
            title: title,
            description: description,
            url: `https://eneplus.rs/${locale}`,
            siteName: 'Eneplus',
            images: [
                {
                    url: 'https://eneplus.rs/Assets/enepluslogo.png',
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
            title: title,
            description: description,
            images: ['https://eneplus.rs/Assets/enepluslogo.png'],
        },
        icons: {
            icon: 'https://eneplus.rs/Assets/enepluslogo.png',
            shortcut: 'https://eneplus.rs/Assets/enepluslogo.png',
            apple: 'https://eneplus.rs/Assets/enepluslogo.png',
        },
    };
}
