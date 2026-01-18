import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    localeDetection: false,
    pathnames: {
        '/': '/',
        '/about': {
            sr: '/o-nama',
            en: '/about'
        },
        '/services': {
            sr: '/usluge',
            en: '/services'
        },
        '/services/design': {
            sr: '/usluge/projektovanje',
            en: '/services/design'
        },
        '/services/energy-audits': {
            sr: '/usluge/energetski-pregledi',
            en: '/services/energy-audits'
        },
        '/services/energy-certification': {
            sr: '/usluge/energetska-sertifikacija',
            en: '/services/energy-certification'
        },
        '/services/energy-consulting': {
            sr: '/usluge/energetski-konsalting',
            en: '/services/energy-consulting'
        },
        '/services/energy-management': {
            sr: '/usluge/energetski-menadzment',
            en: '/services/energy-management'
        },
        '/services/iso-50001': {
            sr: '/usluge/iso-50001',
            en: '/services/iso-50001'
        },
        '/services/measurements': {
            sr: '/usluge/merenja',
            en: '/services/measurements'
        },
        '/services/ppp-support': {
            sr: '/usluge/jpp-podrska',
            en: '/services/ppp-support'
        },
        '/services/project-management': {
            sr: '/usluge/upravljanje-projektima',
            en: '/services/project-management'
        },
        '/services/studies-and-analysis': {
            sr: '/usluge/studije-i-analize',
            en: '/services/studies-and-analysis'
        },
        '/services/training-and-education': {
            sr: '/usluge/trening-i-edukacija',
            en: '/services/training-and-education'
        },
        '/services/web-applications': {
            sr: '/usluge/web-aplikacije',
            en: '/services/web-applications'
        },
        '/software': {
            sr: '/softver',
            en: '/software'
        },
        '/contact': {
            sr: '/kontakt',
            en: '/contact'
        },
        '/media': '/media'
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
