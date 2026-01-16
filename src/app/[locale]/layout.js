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

    return (
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
    );
}
