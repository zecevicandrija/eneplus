const fs = require('fs');
const path = require('path');

const mappings = [
    ['about', 'AboutPage.metadata'],
    ['contact', 'ContactPage.metadata'],
    ['media', 'MediaPage.metadata'],
    ['software', 'SoftwarePage.metadata'],
    ['services', 'ServicesPage.metadata'],
    ['services/design', 'DesignPage.metadata'],
    ['services/energy-audits', 'EnergyAuditsPage.metadata'],
    ['services/energy-consulting', 'EnergyConsultingPage.metadata'],
    ['services/energy-management', 'EnergyManagementPage.metadata'],
    ['services/iso-50001', 'IsoPage.metadata'],
    ['services/measurements', 'MeasurementsPage.metadata'],
    ['services/ppp-support', 'PppSupportPage.metadata'],
    ['services/project-management', 'ProjectManagementPage.metadata'],
    ['services/studies-and-analysis', 'StudiesPage.metadata'],
    ['services/training-and-education', 'TrainingPage.metadata'],
    ['services/web-applications', 'WebAppsPage.metadata'],
];

const basePath = path.join(__dirname, 'src', 'app', '[locale]');

mappings.forEach(([route, namespace]) => {
    const dirPath = path.join(basePath, ...route.split('/'));
    const layoutPath = path.join(dirPath, 'layout.js');

    if (!fs.existsSync(layoutPath)) {
        const content = `import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: '${namespace}' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    };
}

export default function Layout({ children }) {
    return children;
}
`;
        fs.writeFileSync(layoutPath, content, 'utf8');
        console.log(`Created layout.js for ${route}`);
    } else {
        console.log(`layout.js already exists for ${route}`);
    }
});
