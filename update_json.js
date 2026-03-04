const fs = require('fs');

const srPath = './messages/sr.json';
const enPath = './messages/en.json';

const srData = JSON.parse(fs.readFileSync(srPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// SR Metadata Additions
srData.HomePage = {
    metadata: {
        title: "Početna",
        description: "Eneplus pruža ekspertske usluge u oblasti energetske efikasnosti, menadžmenta i obnovljivih izvora energije. Vaš partner za održivu budućnost.",
        keywords: "eneplus, energetska efikasnost, pametna energija, ušteda novca"
    }
};

srData.AboutPage.metadata = {
    title: "O Nama | Eneplus",
    description: "ENEPLUS je konsultantska firma koja pruža usluge iz oblasti energetskog menadžmenta, energetske efikasnosti i projektnog menadžmenta. Upoznajte naš ekspertski tim.",
    keywords: "o nama, eneplus tim, energetski menadžment, analitika, energetska efikasnost"
};

srData.ServicesPage.metadata = {
    title: "Usluge | Energetska Efikasnost i Menadžment | Eneplus",
    description: "Nudimo sveobuhvatna rešenja za energetsku efikasnost i održivost. Otkrijte naše usluge iz oblasti energetskog menadžmenta, projektovanja i sertifikacije.",
    keywords: "usluge, energetska efikasnost, energetski menadžment, projektovanje, energetski pasoš, eneplus usluge"
};

srData.SoftwarePage.metadata = {
    title: "Softver za Energetski Menadžment | Eneplus",
    description: "Web orijentisan softver za energetski menadžment. Neizostavna alatka za praćenje i optimizaciju energetske potrošnje opština i preduzeća.",
    keywords: "softver za energetski menadžment, praćenje potrošnje energije, energetska efikasnost softver, pametno upravljanje, eneplus"
};

srData.MediaPage.metadata = {
    title: "Media i Resursi | Eneplus",
    description: "Preuzmite korisne materijale, dokumentaciju i video prezentacije naših softvera i usluga. Informišite se o najnovijim trendovima.",
    keywords: "media, dokumentacija, video prezentacije, energetski menadžment materijali, eneplus resursi"
};

srData.ContactPage.metadata = {
    title: "Kontakt | Eneplus",
    description: "Kontaktirajte ENEPLUS. Stojimo Vam na raspolaganju za sve informacije i konsultacije o unapređenju energetske efikasnosti vaših objekata.",
    keywords: "kontakt, eneplus, informacije, adresa, telefon, email, zakazivanje, konsultacije"
};

srData.EnergyManagementPage.metadata = {
    title: "Energetski Menadžment | Usluge | Eneplus",
    description: "Usluga energetskog menadžmenta po standardu ISO 50001. Pomažemo vam u sistematičnom upravljanju energetskim performansama i racionalnom korišćenju energije.",
    keywords: "energetski menadžment, ISO 50001, upravljanje energijom, ušteda energije, eneplus"
};

srData.StudiesPage.metadata = {
    title: "Studije i Analize EE | Eneplus",
    description: "Izrada studija i detaljnih analiza iz oblasti energetske efikasnosti i obnovljivih izvora energije za pametno donošenje investicionih odluka.",
    keywords: "studije, energetska analiza, cost benefit, akcioni planovi, energetska efikasnost, eneplus"
};

srData.TrainingPage.metadata = {
    title: "Treninzi i Edukacije | Eneplus",
    description: "Sertifikovane obuke i treninzi iz oblasti energetskog menadžmenta. Prenosimo najnovija praktična znanja i trendove u energetici.",
    keywords: "treninzi, obuke, edukacija, energetski menadžeri, eneplus edukacije"
};

srData.DesignPage.metadata = {
    title: "Projektovanje | Energetska Efikasnost | Eneplus",
    description: "Usluga projektovanja u građevinarstvu sa fokusom na maksimalnu energetsku efikasnost, preciznost i dugoročnu isplativost.",
    keywords: "projektovanje, izgradnja, sanacija, rekonstrukcija, ušteda energije, eneplus"
};

srData.WebAppsPage.metadata = {
    title: "Web Aplikacije i Prezentacije | Eneplus",
    description: "Izrada namenskih web aplikacija i prezentacija uz korišćenje najsavremenijih IT tehnologija sa profesionalnim pristupom.",
    keywords: "web aplikacije, razvoj softvera, prezentacije, IT rešenja, eneplus"
};

srData.EnergyConsultingPage.metadata = {
    title: "Energetski Konsalting | Eneplus",
    description: "Stručne konsultacije i podrška prilikom gradnje ili rekonstrukcije objekata po najvišim principima energetske efikasnosti.",
    keywords: "energetski konsalting, savetovanje, rekonstrukcija, konsultacije, stručna podrška, eneplus"
};

srData.PppSupportPage.metadata = {
    title: "Priprema i Podrška za JPP | Eneplus",
    description: "Pružamo stručnu i profesionalnu podršku javnom i privatnom sektoru u realizaciji projekata Javno-Privatnog Partnerstva (JPP).",
    keywords: "javno privatno partnerstvo, JPP, priprema tendera, podrška projektima, eneplus"
};

srData.IsoPage.metadata = {
    title: "ISO 50001 Standard | Uvođenje | Eneplus",
    description: "Konsultantske usluge i asistencija pri uspostavljanju ISO 50001 standarda za energetski menadžment. Maksimizirajte uštede uz ENEPLUS.",
    keywords: "ISO 50001, uvođenje standarda, implementacija, sistem energetskog menadžmenta, sertifikat, eneplus"
};

srData.EnergyAuditsPage.metadata = {
    title: "Energetski Pregledi | Usluga | Eneplus",
    description: "Energetski pregledi objekata i opreme koji daju jasan uvid u mesta neracionalne potrošnje i predlog konkretnih mera za optimizaciju.",
    keywords: "energetski pregledi, ušteda energije, identifikacija potrošnje, ISO 50002, EN 16247, eneplus"
};

srData.MeasurementsPage.metadata = {
    title: "Termografija i Blower Door Merenja | Eneplus",
    description: "Napredna infracrvena termografija, provera vazdušne zaptivenosti (Blower Door) i provera uslova komfora (CO2, temperatura).",
    keywords: "merenja, termografija, blower door test, uslovi komfora, infracrvena kamera, zaptivenost zgrade, eneplus"
};

srData.ProjectManagementPage.metadata = {
    title: "Projekt Menadžment | Upravljanje | Eneplus",
    description: "Upravljanje projektima od planiranja do zatvaranja. Koordinacija tima, praćenje rokova, resursa i budžeta za uspeh vašeg projekta.",
    keywords: "projekt menadžment, upravljanje projektima, koordinacija tima, analiza budžeta, eneplus"
};

// EN Metadata Additions
enData.HomePage = {
    metadata: {
        title: "Home",
        description: "Eneplus provides expert services in energy efficiency, management, and renewable energy sources. Your partner for a sustainable future.",
        keywords: "eneplus, energy efficiency, smart energy, money saving"
    }
};

enData.AboutPage.metadata = {
    title: "About Us | Eneplus",
    description: "ENEPLUS is a consulting firm providing services in energy management, and energy efficiency. Meet our expert engineering team.",
    keywords: "about us, eneplus team, energy management, energy efficiency, analytics"
};

enData.ServicesPage.metadata = {
    title: "Services | Energy Efficiency | Eneplus",
    description: "We offer comprehensive solutions for energy efficiency and sustainability, including design, audits, and certifications.",
    keywords: "services, energy efficiency, energy management, design, energy passport, eneplus services"
};

enData.SoftwarePage.metadata = {
    title: "Energy Management Software | Eneplus",
    description: "Web-oriented energy management software. An indispensable tool for tracking and optimizing energy consumption for municipalities and companies.",
    keywords: "energy management software, tracking energy, energy efficiency, smart management, eneplus"
};

enData.MediaPage.metadata = {
    title: "Media and Resources | Eneplus",
    description: "Download useful materials, documentation, and video presentations of our software and services. Stay informed.",
    keywords: "media, documentation, video presentations, energy management resources, eneplus"
};

enData.ContactPage.metadata = {
    title: "Contact Us | Eneplus",
    description: "Contact ENEPLUS. We are at your disposal for all information and consultations on improving your energy efficiency.",
    keywords: "contact, eneplus, information, address, phone, email, scheduling, consultations"
};

enData.EnergyManagementPage.metadata = {
    title: "Energy Management | Services | Eneplus",
    description: "Energy management service according to ISO 50001 standard. We help you systematically manage energy performance and usage.",
    keywords: "energy management, ISO 50001, energy savings, management lifecycle, eneplus"
};

enData.StudiesPage.metadata = {
    title: "Studies and Analyses | Eneplus",
    description: "Preparation of studies and detailed analyses in the field of energy efficiency and renewable energy sources for smart investment decisions.",
    keywords: "studies, analyses, cost benefit, action plans, energy efficiency, eneplus"
};

enData.TrainingPage.metadata = {
    title: "Training and Education | Eneplus",
    description: "Certified courses and training in energy management. We transfer the latest practical knowledge and trends in energy.",
    keywords: "training, courses, education, energy managers, eneplus training"
};

enData.DesignPage.metadata = {
    title: "Design | Energy Efficiency | Eneplus",
    description: "Building design services focused on maximum energy efficiency, precision, and long-term economic sustainability.",
    keywords: "design, construction, renovation, energy saving, eneplus"
};

enData.WebAppsPage.metadata = {
    title: "Web Applications & Presentations | Eneplus",
    description: "Development of custom web applications and presentations using modern IT technologies aimed at professional results.",
    keywords: "web applications, software development, presentations, IT solutions, eneplus"
};

enData.EnergyConsultingPage.metadata = {
    title: "Energy Consulting | Eneplus",
    description: "Expert consultations and support during construction or renovation of facilities to the highest energy efficiency principles.",
    keywords: "energy consulting, consulting services, renovation support, expert advice, eneplus"
};

enData.PppSupportPage.metadata = {
    title: "PPP Preparation and Support | Eneplus",
    description: "We provide professional support to the public and private sectors in implementing Public-Private Partnership (PPP) projects.",
    keywords: "public private partnership, PPP, tender prep, project support, eneplus"
};

enData.IsoPage.metadata = {
    title: "ISO 50001 Standard | Implementation | Eneplus",
    description: "Consulting services and assistance in establishing the ISO 50001 energy management standard. Maximize your savings with ENEPLUS.",
    keywords: "ISO 50001, standard implementation, energy management system, certification, eneplus"
};

enData.EnergyAuditsPage.metadata = {
    title: "Energy Audits | Service | Eneplus",
    description: "Energy audits of facilities and equipment that provide clear insight into irrational consumption and propose specific optimization measures.",
    keywords: "energy audits, energy savings, ISO 50002, EN 16247, consulting, eneplus"
};

enData.MeasurementsPage.metadata = {
    title: "Thermography & Blower Door | Eneplus",
    description: "Advanced infrared thermography, air tightness testing (Blower Door), and assessment of comfort conditions (CO2, temp, humidity).",
    keywords: "measurements, thermography, blower door test, comfort conditions, infrared camera, eneplus"
};

enData.ProjectManagementPage.metadata = {
    title: "Project Management | Service | Eneplus",
    description: "End-to-end project management. Team coordination, schedule tracking, and budget control to ensure your project's success.",
    keywords: "project management, coordination, budget analysis, timeline, eneplus"
};

fs.writeFileSync(srPath, JSON.stringify(srData, null, 4), 'utf8');
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4), 'utf8');
console.log('JSON files successfully updated.');
