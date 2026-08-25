import json
import os

def get_sr_results_page():
    return {
        "metadata": {
            "title": "Rezultati i Reference | Kapitalni Projekti Energetske Efikasnosti | Eneplus",
            "description": "Pogledajte dokazane rezultate kompanije Eneplus: preko 1.400.000 m² auditovanih objekata, projekti za EBRD, USAID, UNDP, GIZ i izrada nacionalnih pravilnika po EU EPBD direktivama.",
            "keywords": "energetska efikasnost rezultati, reference eneplus, EBRD energetski pregledi, ESCO stambene zgrade, energetski pasosi vojvodina, PLAC IV EPBD pravilnik, BESTenergIS Kula"
        },
        "overline": "DOKAZANA EKSPERTIZA & MEĐUNARODNE REFERENCE",
        "heroTitle1": "REZULTATI KOJI PRAVE",
        "heroTitle2": "MERLJIVU RAZLIKU",
        "heroSubtitle": "Od strateškog oblikovanja nacionalnih pravilnika i EU EPBD direktiva, preko energetske sanacije preko 1.400.000 m² stambenog i javnog fonda, do implementacije naprednih digitalnih platformi za gradove i industriju.",
        "heroCta": "Zakažite Konsultacije",
        "heroCtaSecondary": "Istražite Projekte",
        "stats": {
            "stat1Value": "1.400.000+ m²",
            "stat1Label": "Auditovanih i obrađenih stambenih i javnih površina",
            "stat2Value": "€3.2M+",
            "stat2Label": "Ukupna vrednost vođenih projekata i studija",
            "stat3Value": "150+",
            "stat3Label": "Detaljno pregledanih i sertifikovanih objekata",
            "stat4Value": "100%",
            "stat4Label": "Usklađenost sa EU EPBD direktivama i EBRD standardima"
        },
        "trustSection": {
            "title": "Klijenti i Međunarodne Institucije koje nam veruju",
            "subtitle": "Radili smo na kapitalnim programima podržanim od strane vodećih razvojnih banaka, ministarstava i međunarodnih organizacija."
        },
        "filterSection": {
            "title": "Naš Portfolio Projekata",
            "subtitle": "Filtrirajte reference po oblastima delovanja ili pregledajte detaljne studije slučaja sa tehničkim i finansijskim ishodima.",
            "all": "Svi Projekti",
            "capital": "Kapitalni ESCO & Stambeni Fond",
            "public": "Javni Sektor & Obrazovanje",
            "policy": "EU Regulativa & Pravilnici",
            "software": "Digitalizacija & Softver",
            "heating": "Daljinsko Grejanje & OIE"
        },
        "labels": {
            "period": "Period realizacije",
            "client": "Klijent / Finansijer",
            "role": "Naša uloga",
            "value": "Vrednost ugovora",
            "scale": "Obim projekta",
            "whatWeDid": "Šta smo uradili (Ključne isporuke)",
            "focus": "Na šta smo se fokusirali",
            "impact": "Kako je klijent napredovao (Rezultat i uticaj)",
            "details": "Prikaži detalje",
            "hideDetails": "Sakrij detalje",
            "soleImplementer": "Samostalni Izvršilac (Sole Implementer)",
            "jvPartner": "Partner u konzorcijumu (JV Partner)",
            "leadPartner": "Vodeći partner (Lead Partner)",
            "ongoing": "U toku",
            "completed": "Završeno"
        },
        "projects": [
            {
                "id": "public-esco-mome-ebrd",
                "category": "capital",
                "title": "Energetska rehabilitacija stambenih višeporodičnih zgrada priključenih na sistem daljinskog grejanja – Javni ESCO projekat",
                "client": "EBRD i Ministarstvo rudarstva i energetike Republike Srbije (MRE)",
                "location": "Srbija (14 jedinica lokalne samouprave)",
                "period": "Decembar 2024 – u toku",
                "value": "1.800.000 EUR (475.000 EUR Eneplus udeo)",
                "role": "jvPartner",
                "scaleBadge": "1.400.000+ m² / 14 JLS",
                "clientLogo": "/Assets/slike_za_reference/European Bank for Reconstruction and Development.png",
                "summary": "Strateški projekat podrške Ministarstvu rudarstva i energetike u skaliranju sistema centralizovanog obračuna (CBB) i modeliranju finansijskih mehanizama energetske efikasnosti za stambeni sektor.",
                "deliverables": [
                    "Izrada plana energetskih pregleda za 14 lokalnih samouprava u Srbiji.",
                    "Sprovođenje detaljnih energetskih pregleda zgrada ukupne grejane površine preko 1.400.000 m² selektovanih za energetsku sanaciju.",
                    "Kreiranje individualnih investicionih ponuda za Stambene zajednice sa predmerima i predračunima radova (BoQ), anuitetskim planovima otplate i komparacijom troškova energije pre i posle sanacije.",
                    "Definisanje Prioritetnog investicionog programa (PIP) za naredni dvogodišnji ciklus sa tehno-ekonomskom i pravnom analizom.",
                    "Sprovođenje procena uticaja na životnu sredinu i društvo (E&S, SEP, ESAP, ESMP), uključujući analize azbesta i zaštite od požara.",
                    "Usklađivanje kompletne projektne dokumentacije sa Pariskim sporazumom i standardima EBRD Green Cities programa."
                ],
                "focus": "Kreiranje ekonomski održivog, bankabilnog i operativnog modela finansiranja za stambene zajednice gde se investicija u termoizolaciju i modernizaciju sistema otplaćuje direktno iz ostvarenih energetskih ušteda bez finansijskog preopterećenja stanara.",
                "impact": "Omogućeno je masovno pokretanje energetske obnove zgrada na nacionalnom nivou. Stambene zajednice dobijaju potpuno transparentne ekonomske modele sa zagarantovanim smanjenjem računa za grejanje za 30-50%, dok lokalne toplane i gradovi postižu rasterećenje vršnih opterećenja i drastično smanjenje emisija CO2.",
                "tags": ["EBRD", "Stambeni ESCO", "Daljinsko grejanje", "1.4M m²", "Stambene zajednice", "Zeleno finansiranje"]
            },
            {
                "id": "plac-iv-epbd-rulebooks",
                "category": "policy",
                "title": "PLAC IV – Izrada nacionalnih Pravilnika i Metodologije usklađene sa EU EPBD direktivama",
                "client": "IBF International Consulting & Ministarstvo građevinarstva, saobraćaja i infrastrukture (MGSI)",
                "location": "Srbija / EU",
                "period": "Oktobar 2024 – u toku",
                "value": "20.000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "Nacionalni regulatorni okvir (EPBD)",
                "clientLogo": "/Assets/slike_za_reference/Ministarstvo građevinarstva, saobrćaja i  infrastrukture.jpeg",
                "summary": "Direktna tehnička i pravna podrška Vladi Republike Srbije u transpoziciji EU Direktive o energetskim performansama zgrada (EPBD 2010/31/EU i nove EPBD 2024/1275/EU).",
                "deliverables": [
                    "Izrada nacrta novog Pravilnika o sadržini, načinu i postupku izrade tehničke dokumentacije za utvrđivanje i unapređenje energetskih svojstava zgrada.",
                    "Izrada nacrta Pravilnika o uslovima i načinu vršenja nezavisne kontrole Energetskih pasoša (sertifikata), Pasoša za renoviranje zgrada i Izveštaja o energetskim pregledima.",
                    "Formulisanje zvanične nacionalne Metodologije za proračun finansijskih i troškovno-optimalnih parametara mera energetske efikasnosti u skladu sa EU Uredbom 2018/1999."
                ],
                "focus": "Usklađivanje domaćeg građevinskog zakonodavstva sa najnovijim evropskim standardima dekarbonizacije zgrada do 2050. godine, uvođenje Pasoša za renoviranje zgrada i postavljanje rigoroznog sistema nezavisne kontrole energetskih pasoša u Srbiji.",
                "impact": "Uspostavljen je moderan, transparentan i zakonski obavezujući okvir za celokupnu građevinsku industriju Srbije, čime se obezbeđuje validnost izdatih energetskih pasoša, pristup EU zelenim fondovima i standardizacija proračuna isplativosti investicija.",
                "tags": ["EU EPBD", "Ministarstvo MGSI", "Zakonodavstvo", "Kontrola pasoša", "Pasoš renoviranja", "IBF"]
            },
            {
                "id": "usaid-kula-bestenergis",
                "category": "software",
                "title": "Digitalizacija energetskog menadžmenta i skrining performansi zgrada u Opštini Kula (BESTenergIS)",
                "client": "USAID",
                "location": "Opština Kula, Srbija",
                "period": "Septembar 2024 – Decembar 2024",
                "value": "25.000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "139 Objekata (89 stambenih + 50 javnih)",
                "clientLogo": "/Assets/slike_za_reference/Opština Kula.png",
                "summary": "Kompletan skrining energetskih performansi elemenata zgrada i tehničkih sistema grejanja, ventilacije i rasvete uz implementaciju softverske platforme BESTenergIS.",
                "deliverables": [
                    "Sprovođenje sistematskih energetskih pregleda za 89 stambenih i 50 javnih objekata (ukupno 139 zgrada).",
                    "Prikupljanje i digitalna obrada tehničkih parametara termičkog omotača, HVAC postrojenja i rasvete.",
                    "Unos i kalibracija baze podataka u softver BESTenergIS za simulaciju energetskih scenarija i komparativnu analizu.",
                    "Formiranje baze za ubrzano izdavanje energetskih pasoša i planiranje opštinskih subvencija."
                ],
                "focus": "Kreiranje digitalnog blizanca energetskih potreba lokalnog fonda zgrada kako bi opštinska uprava u realnom vremenu donosila odluke o prioritetima investiranja na osnovu tačnih parametara potrošnje.",
                "impact": "Opština Kula je postala pilot model digitalnog energetskog menadžmenta u Republici Srbiji. Omogućeno je automatsko generisanje mera sa najbržim povratom ulaganja i priprema zgrada za konkurisanje kod domaćih i međunarodnih fondova.",
                "tags": ["USAID", "BESTenergIS", "Digitalizacija", "139 Zgrada", "HVAC skrining", "Opština Kula"]
            },
            {
                "id": "ebrd-niras-air-quality",
                "category": "heating",
                "title": "Poboljšanje kvaliteta vazduha u Srbiji – Studija izvodljivosti gašenja neefikasnih kotlarnica",
                "client": "EBRD / NIRAS",
                "location": "Beograd, Niš, Užice, Valjevo, Zaječar, Novi Pazar, Smederevo",
                "period": "Septembar 2024 – u toku",
                "value": "250.000 EUR (18.000 EUR Eneplus udeo)",
                "role": "jvPartner",
                "scaleBadge": "7 Vodećih Gradova u Srbiji",
                "clientLogo": "/Assets/slike_za_reference/Niras.png",
                "summary": "Sveobuhvatna procena tehničke i ekonomske izvodljivosti gašenja individualnih zagađujućih kotlarnica na ugalj i mazut u 7 ekološki najugroženijih gradova Srbije.",
                "deliverables": [
                    "Detaljno prikupljanje tehničkih parametara kotlarnica: toplotna snaga, vrsta energenta, radni sati, efikasnost i stepen amortizacije.",
                    "Analiza gustine toplotnog konzuma i procena mogućnosti priključenja na gradske toplovodne mreže ili gasifikaciju.",
                    "Integracija rešenja baziranih na obnovljivim izvorima energije (biomasa, toplotne pumpe).",
                    "Procena uticaja na životnu sredinu i lokalno stanovništvo (E&S) sa definisanjem mera za ublažavanje rizika."
                ],
                "focus": "Uklanjanje najvećih izvora aerozagađenja suspendovanim česticama (PM2.5 i PM10) u urbanim sredinama kroz konverziju na ekološki prihvatljive sisteme grejanja.",
                "impact": "Gradovima je obezbeđena jasna mapa investicija za gašenje preko 50 teških kotlarnica, što direktno vodi ka drastičnom poboljšanju kvaliteta vazduha, boljem zdravlju stotina hiljada građana i smanjenju troškova održavanja grejnih sistema.",
                "tags": ["EBRD", "NIRAS", "Kvalitet vazduha", "Daljinsko grejanje", "7 Gradova", "Dekarbonizacija"]
            },
            {
                "id": "giz-heat-distribution-roadmap",
                "category": "heating",
                "title": "Mapa puta održive distribucije toplote i Akcioni plan za zamenu neefikasnih grejnih tela toplotnim pumpama",
                "client": "GIZ (Nemačka organizacija za međunarodnu saradnju)",
                "location": "Srbija",
                "period": "Avgust 2024 – u toku",
                "value": "50.000 EUR",
                "role": "leadPartner",
                "scaleBadge": "Nacionalni strateški Akcioni plan",
                "clientLogo": "/Assets/slike_za_reference/GIZ.png",
                "summary": "Razvoj strateške Mape puta za održivu distribuciju toplotne energije i Akcionog plana za supstituciju neefikasnih individualnih uređaja za grejanje modernim tehnologijama u skladu sa Direktivom 2009/125/EZ (Eko-dizajn).",
                "deliverables": [
                    "Gap analiza pravnog okvira i usklađivanje propisa sa EU standardima eko-dizajna grejnih sistema.",
                    "Definisanje tehničko-ekonomskih modela za masovnu zamenu peći na ugalj i drva toplotnim pumpama visoke energetske klase.",
                    "Predlog programa finansijskih podsticaja i subvencija za domaćinstva.",
                    "Razvoj programa obuke i jačanja kapaciteta za ključne institucionalne aktere i instalatere.",
                    "Postavljanje mehanizama za praćenje i verifikaciju postignutih ušteda primarne energije."
                ],
                "focus": "Sistemska tranzicija individualnog sektora grejanja u domaćinstvima prema čistim tehnologijama toplotnih pumpi, uz obezbeđivanje finansijske pristupačnosti za građane.",
                "impact": "Postavljeni su temelji za dugoročnu dekarbonizaciju grejanja u Srbiji, kreirani mehanizmi državnih subvencija i definisani standardi energetske efikasnosti koji štite potrošače od nekvalitetne opreme.",
                "tags": ["GIZ", "Toplotne pumpe", "Eco-Design", "Mapa puta", "Subvencije", "Održivo grejanje"]
            },
            {
                "id": "nlb-bank-regional-analysis",
                "category": "capital",
                "title": "Analiza energetskih karakteristika nacionalnih fondova zgrada za zemlje Zapadnog Balkana",
                "client": "NLB Grupa (NLB Banka)",
                "location": "Srbija, Severna Makedonija, BiH (FBiH i RS), Kosovo*",
                "period": "Jun 2024 – u toku",
                "value": "14.000 EUR",
                "role": "jvPartner",
                "scaleBadge": "Regionalno tržište (4 zemlje/teritorije)",
                "clientLogo": "/Assets/slike_za_reference/nlb-komercialna-logo.svg",
                "summary": "Komparativna inženjerska studija stanja i energetske efikasnosti građevinskog fonda i zakonodavnog okvira na 4 regionalna tržišta na kojima posluje NLB Grupa.",
                "deliverables": [
                    "Detaljna analiza prosečne specifične potrošnje energije u stambenom i komercijalnom sektoru regiona.",
                    "Analiza usklađenosti nacionalnih zakonskih okvira sa EU EPBD direktivom i zahtevima energetske sertifikacije.",
                    "Formiranje tehničkih kriterijuma za bankarske proizvode zelenog kreditiranja (zeleni stambeni i investicioni krediti)."
                ],
                "focus": "Uspostavljanje egzaktnih inženjerskih i ESG kriterijuma koji banci omogućavaju kreiranje pouzdanih zelenih finansijskih linija sa verifikovanim smanjenjem ugljeničnog otiska.",
                "impact": "NLB Grupa je dobila standardizovanu metodologiju za procenu energetske klase nepokretnosti, čime je ubrzano plasiranje preko više desetina miliona evra u zelene kredite i osiguran ESG portfolio banke.",
                "tags": ["NLB Grupa", "ESG Bankarstvo", "Regionalni fond zgrada", "Zeleni krediti", "Analiza tržišta"]
            },
            {
                "id": "undp-kruscic-primary-school",
                "category": "public",
                "title": "Detaljni energetski pregled i investicioni paketi mera za OŠ „Veljko Vlahović” u Kruščiću",
                "client": "UNDP Srbija (Program Ujedinjenih nacija za razvoj)",
                "location": "Kruščić, Opština Kula",
                "period": "Novembar 2023 – Decembar 2023",
                "value": "10.000 USD",
                "role": "soleImplementer",
                "scaleBadge": "Obrazovni objekat / 3 Paketa mera",
                "clientLogo": "/Assets/slike_za_reference/United Nations Development Programme.png",
                "summary": "Sveobuhvatna energetska dijagnostika objekta osnovne škole sa proračunom godišnjih toplotnih i električnih potreba i modeliranjem investicionih scenarija.",
                "deliverables": [
                    "Snimanje termičkog omotača, sistema grejanja i rasvete objekta škole.",
                    "Proračun bilansa potrošnje svih vidova energije za referentni period.",
                    "Procena postojećeg sistema energetskog menadžmenta i zakonskih obaveza.",
                    "Formiranje 3 investiciona paketa mera energetske efikasnosti i primene OIE (fotonaponski paneli i toplotna pumpa).",
                    "Tehno-ekonomska procena i dinamički proračun perioda povrata investicija (NPV, IRR, Payback period)."
                ],
                "focus": "Pronaći optimalan balans između minimalnog investicionog troška i maksimalnog smanjenja potrošnje fosilnih goriva uz postizanje propisanog toplotnog komfora za učenike.",
                "impact": "Škola i opština su dobile spremnu investicionu dokumentaciju na osnovu koje je ostvareno preko 60% uštede u toplotnoj energiji i prelazak na čiste obnovljive izvore energije.",
                "tags": ["UNDP", "Obrazovanje", "Energetski pregled", "OIE paketi", "Povrat investicije"]
            },
            {
                "id": "ebrd-vojvodina-public-buildings-support",
                "category": "public",
                "title": "Podrška implementaciji mera energetske efikasnosti u javnim objektima AP Vojvodine",
                "client": "EBRD (u konzorcijumu sa Enova, Plus Minus i Entazis)",
                "location": "Autonomna Pokrajina Vojvodina",
                "period": "Avgust 2023 – u toku",
                "value": "900.000 EUR (81.000 EUR Eneplus udeo)",
                "role": "jvPartner",
                "scaleBadge": "FIDIC inženjering i ex-post auditi",
                "clientLogo": "/Assets/slike_za_reference/European Bank for Reconstruction and Development.png",
                "summary": "Kapitalni projekat inženjerske i stručne podrške realizaciji programa energetske sanacije javnih zgrada u Vojvodini finansiran od strane EBRD-a.",
                "deliverables": [
                    "Revizija postojećih energetskih pregleda i studija izvodljivosti.",
                    "Priprema detaljnih Zahteva naručioca (Employer's Requirements) po FIDIC standardima ugovaranja.",
                    "Razvoj procedura za merenje i verifikaciju ušteda energije (M&V protokol).",
                    "Sprovođenje ex-post energetskih pregleda nakon završetka radova.",
                    "Priprema prvog godišnjeg izveštaja o ostvarenim rezultatima i energetskim performansama za Naručioca i EBRD."
                ],
                "focus": "Osiguranje da izvedeni radovi na objektima u potpunosti ostvare projektovane energetske uštede i ispune stroge ugovorne zahteve međunarodnih FIDIC modela.",
                "impact": "Garantovana tačnost izvedenih radova na desetinama javnih ustanova, precizno verifikovane milionske uštede u budžetu i uspešno povlačenje tranši finansiranja od EBRD-a.",
                "tags": ["EBRD", "FIDIC inženjering", "Javni objekti", "M&V Verifikacija", "Ex-post auditi"]
            },
            {
                "id": "vojvodina-secretariat-33-buildings",
                "category": "public",
                "title": "Detaljni energetski pregledi i energetski pasoši za 33 javna objekta u AP Vojvodini",
                "client": "Pokrajinski sekretarijat za energetiku, građevinarstvo i saobraćaj (u konzorcijumu sa FTN Novi Sad)",
                "location": "Vojvodina, Srbija",
                "period": "Avgust 2021 – Decembar 2021",
                "value": "94.000 EUR (33.000 EUR Eneplus udeo)",
                "role": "jvPartner",
                "scaleBadge": "33 Javna Objekta / FTN Konzorcijum",
                "clientLogo": "/Assets/slike_za_reference/Pokrajinski sekretarijat za energetiku, građevinarstvo i saobraćaj.jpeg",
                "summary": "Sveobuhvatna sertifikacija i energetski pregledi 33 reprezentativna javna objekta u Vojvodini uz napredne cost-benefit analize osetljivosti na promene cena energije.",
                "deliverables": [
                    "Izrada Elaborata energetske efikasnosti za zatečeno stanje i stanje nakon primene preporučenih paketa mera.",
                    "Zvanično izdavanje Energetskih pasoša sa kompletnim izveštajima o energetskim pregledima.",
                    "Detaljan popis svih energetskih potrošača, analiza toplotnih izvora i građevinske fizike omotača.",
                    "Analiza mogućnosti prelaska na sisteme obnovljivih izvora energije.",
                    "Cost-benefit analiza stvarnih troškova sa analizom osetljivosti na oscilacije cena energenata i investicionih troškova."
                ],
                "focus": "Pružiti Pokrajinskom sekretarijatu egzaktnu bazu podataka i rang-listu objekata prema isplativosti ulaganja kako bi se javna sredstva usmerila tamo gde donose najveći energetski i finansijski efekat.",
                "impact": "Svih 33 objekta su dobili zvanične energetske pasoše i detaljne investicione planove, a Sekretarijat je uspešno realizovao budžetska sredstva sa projektovanim uštedama od preko 40% energije.",
                "tags": ["Pokrajinski sekretarijat", "FTN Novi Sad", "33 Objekta", "Energetski pasoši", "Cost-Benefit"]
            },
            {
                "id": "serbia-17-public-buildings",
                "category": "public",
                "title": "Detaljni energetski pregledi i sertifikacija 17 kapitalnih javnih i obrazovnih objekata",
                "client": "Lokalne samouprave i javne ustanove u Republici Srbiji",
                "location": "Novi Sad, Kikinda, Subotica, Šid, Vrbas, Srbobran, Kanjiža, Bačka Topola, Bač",
                "period": "Januar 2019 – Jun 2020",
                "value": "40.000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "17 Kapitalnih Objekata (Skupština APV, Domovi zdravlja, Gimnazije)",
                "clientLogo": "/Assets/slike_za_reference/Grad Kikinda.jpeg",
                "summary": "Detaljni energetski pregledi zgrade Skupštine AP Vojvodine, 2 doma zdravlja, centra za fizičku kulturu, 5 srednjih škola i gimnazija, 4 osnovne škole, 3 vrtića i biblioteke.",
                "deliverables": [
                    "Energetski pregled zgrade Skupštine Autonomne Pokrajine Vojvodine.",
                    "Pregledi i pasoši za Dom zdravlja „Đorđe Bastić” Srbobran i Dom zdravlja Kanjiža.",
                    "Pregled Centra za fizičku kulturu „Drago Jovović” Vrbas.",
                    "Pregledi škola: STŠ „Mihajlo Pupin” Kula, Gimnazija „Sava Šumanović” Šid, SŠ „Miloš Crnjanski” Kikinda, Ekonomsko-tehnička škola Kikinda, OŠ „Đuro Salaj” Subotica, OŠ „Feješ Klara” i OŠ „Đura Jakšić” Kikinda, OŠ „Žarko Zrenjanin” Obrovac.",
                    "Pregledi vrtića „Vera Gucunja” Čonoplja, „Naši biseri” Kanjiža, „Bambi” Bačka Topola i Narodne biblioteke „Vuk Karadžić” Bač.",
                    "Izrada elaborata energetske efikasnosti, proračun toplotnih mostova i preporuke za OIE."
                ],
                "focus": "Rešavanje specifičnih termičkih i mikroklimatskih izazova u objektima različitih namena (od zaštićenih istorijskih zgrada poput Skupštine do sportskih dvorana i zdravstvenih ustanova).",
                "impact": "Ustanove su eliminisale kritične toplotne gubitke, modernizovale sisteme grejanja i ostvarile stabilno i ekonomično funkcionisanje uz vrhunski komfor za đake, pacijente i zaposlene.",
                "tags": ["Skupština APV", "Domovi zdravlja", "Gimnazije", "17 Objekata", "Energetski pregledi"]
            },
            {
                "id": "leen-gmbh-software-tools",
                "category": "software",
                "title": "Razvoj i prilagođavanje specijalizovanih softverskih alata za industrijske energetske preglede",
                "client": "LEEN GmbH (Nemačka)",
                "location": "Nemačka / Srbija",
                "period": "Jun 2019 – Januar 2020",
                "value": "30.000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "Nemačko tržište / 10 Industrijskih modula",
                "clientLogo": "/Assets/slike_za_reference/Primas consulting.png",
                "summary": "Inženjerski razvoj i prilagođavanje algoritama za proračune energetske efikasnosti u industrijskim sistemima i mrežama energetske efikasnosti u Nemačkoj.",
                "deliverables": [
                    "Razvoj softverskih modula za iskorišćenje procesne otpadne toplote (Waste heat recovery).",
                    "Alati za modeliranje industrijskih toplotnih pumpi i rashladnih sistema (Free cooling).",
                    "Algoritmi za optimizaciju uljnih, gasnih i parnih kotlovskih postrojenja.",
                    "Proračun solarnih termalnih sistema za pripremu sanitarne tople vode.",
                    "Alati za optimizaciju elektro-motornih pogona, frekventne regulacije i toplotne izolacije cevovoda."
                ],
                "focus": "Automatizacija složenih termodinamičkih i termo-energetskih proračuna za inženjere na terenu prema strogim nemačkim DIN i VDI inženjerskim standardima.",
                "impact": "LEEN GmbH i partnerske industrijske mreže u Nemačkoj dobile su visoko pouzdane, brze i verifikovane alate koji direktno identifikuju milionske uštede energije u fabrikama i procesnim postrojenjima.",
                "tags": ["LEEN Nemačka", "Industrijski softver", "Otpadna toplota", "Toplotne pumpe", "DIN Standardi"]
            },
            {
                "id": "giz-ascot-light-cba-tool",
                "category": "software",
                "title": "Razvoj CBA softverskog alata za procenu ušteda i investicija u školama (ASCOT Light Model)",
                "client": "GIZ Srbija",
                "location": "Srbija",
                "period": "Septembar 2017 – Maj 2018",
                "value": "11.000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "Nacionalni alat za opštine i škole",
                "clientLogo": "/Assets/slike_za_reference/GIZ.png",
                "summary": "Razvoj alata za Cost-Benefit analizu (CBA) baziranog na danskom modelu Ascot Light (School of The Future, Cenergia / Kuben Management A/S).",
                "deliverables": [
                    "Formiranje matematičkog i finansijskog modela za proračun energetske sanacije školskih zgrada.",
                    "Automatska kalkulacija ušteda toplotne energije i smanjenja emisija CO2.",
                    "Modeliranje integracije obnovljivih izvora energije (OIE) na školskim objektima.",
                    "Prilagođavanje interfejsa za opštinske energetske menadžere u lokalnim samoupravama širom Srbije."
                ],
                "focus": "Kreirati jednostavan, ali matematički rigorozan alat koji opštinskim službama omogućava trenutnu procenu opravdanosti ulaganja u energetsku sanaciju bez potrebe za eksternim skupim pred-studijama.",
                "impact": "Alat je implementiran u desetinama lokalnih samouprava u Srbiji i poslužio je kao osnova za pripremu projekata energetske sanacije škola koji su uspešno dobili finansiranje.",
                "tags": ["GIZ", "CBA Alat", "ASCOT Model", "Škole", "Emisije CO2", "Opštinski menadžeri"]
            },
            {
                "id": "giz-kragujevac-biomass-schools",
                "category": "heating",
                "title": "Pre-Feasibility studija konverzije kotlarnica na biomasu u 5 osnovnih škola u Kragujevcu",
                "client": "GIZ Srbija / Grad Kragujevac",
                "location": "Grad Kragujevac, Srbija",
                "period": "Novembar 2016 – Maj 2017",
                "value": "10.000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "5 Osnovnih Škola u Kragujevcu",
                "clientLogo": "/Assets/slike_za_reference/Grad Kraljevo.png",
                "summary": "Tehno-ekonomska studija izvodljivosti prelaska sa fosilnih goriva (ugalj i lož-ulje) na ekološki prihvatljive kotlove na drvnu biomasu u školama pod ingerencijom Grada Kragujevca.",
                "deliverables": [
                    "Analiza postojećeg stanja sistema grejanja u 5 škola: OŠ „Živadinka Divac”, OŠ „Miloje Simović”, OŠ „Natalija Nana Nedeljković”, OŠ „Sreten Mladenović” i OŠ „Dragiša Mihajlović”.",
                    "Proračun toplotnih gubitaka i definisanje optimalne snage novih kotlovskih postrojenja na biomasu.",
                    "Logistička i ekonomska analiza dobave peleta/sečke na teritoriji Šumadijskog okruga.",
                    "Proračun finansijske isplativosti, investicionog budžeta i ekološkog smanjenja zagađenja vazduha."
                ],
                "focus": "Uklanjanje neefikasnih kotlova na fosilna goriva iz školskih dvorišta i prelazak na domaći obnovljivi energent sa garantovanom stabilnošću snabdevanja.",
                "impact": "Grad Kragujevac je dobio jasne smernice i investicione proračune za modernizaciju školskih kotlarnica, čime je obezbeđen čist vazduh u školskim dvorištima i smanjenje troškova grejanja za preko 35%.",
                "tags": ["GIZ", "Kragujevac", "Biomasa", "5 Škola", "Pre-Feasibility", "Čist vazduh"]
            }
        ],
        "whyChooseUs": {
            "overline": "ZAŠTO VODEĆE INSTITUCIJE BIRAJU ENEPLUS",
            "title": "Inženjerski autoritet i dokazani kapacitet za najveće projekte",
            "subtitle": "Kombinujemo duboko poznavanje regulatornih okvira, vrhunski inženjerski kadar i međunarodno finansijsko iskustvo.",
            "pillar1Title": "Kreatori nacionalnih propisa i EU direktiva",
            "pillar1Desc": "Direktno učestvujemo u izradi zvaničnih pravilnika i metodologija za Republiku Srbiju u skladu sa novom EU EPBD 2024/1275/EU direktivom.",
            "pillar2Title": "Partner međunarodnih finansijskih institucija",
            "pillar2Desc": "Iza nas stoje kapitalni projekti vođeni po standardima EBRD-a, USAID-a, UNDP-a i GIZ-a sa FIDIC inženjeringom i M&V protokolima.",
            "pillar3Title": "Licencirani ekspertski inženjerski tim",
            "pillar3Desc": "Tim diplomiranih inženjera mašinstva i elektrotehnike sa licencama Inženjerske komore Srbije za EE zgrada, termoenergetiku i procesnu tehniku.",
            "pillar4Title": "Vlastita softverska i analitička rešenja",
            "pillar4Desc": "Razvijamo prilagođene softverske alate (BESTenergIS, LEEN moduli, ASCOT alati) koji donose preciznost i brzinu u donošenju odluka."
        },
        "ctaSection": {
            "title": "Planirate kapitalni projekat energetske efikasnosti?",
            "subtitle": "Bilo da predstavljate međunarodnu finansijsku instituciju, lokalnu samoupravu, industrijski kompleks ili stambenu zajednicu — naš tim je spreman da osmisli, proračuna i vodi vaš projekat do maksimalnih rezultata.",
            "ctaPrimary": "Zakažite Konsultacije i Ponudu",
            "ctaPhone": "+381 64 817 2033",
            "ctaSecondary": "Saznajte više o našim uslugama"
        }
    }

def get_en_results_page():
    return {
        "metadata": {
            "title": "Results & Track Record | Major Energy Efficiency Projects | Eneplus",
            "description": "Explore Eneplus track record: over 1,400,000 m² audited building area, landmark projects for EBRD, USAID, UNDP, GIZ and national rulemaking under EU EPBD directives.",
            "keywords": "energy efficiency track record, eneplus references, EBRD energy audits, ESCO residential buildings, energy performance certificate serbia, EPBD compliance, BESTenergIS Kula"
        },
        "overline": "PROVEN EXPERTISE & INTERNATIONAL TRACK RECORD",
        "heroTitle1": "RESULTS THAT DELIVER",
        "heroTitle2": "MEASURABLE IMPACT",
        "heroSubtitle": "From shaping national regulatory frameworks and EU EPBD directives, through the energy rehabilitation of over 1,400,000 m² of residential and public building stock, to advanced digital energy platforms for cities and industry.",
        "heroCta": "Schedule Consultation",
        "heroCtaSecondary": "Explore Projects",
        "stats": {
            "stat1Value": "1,400,000+ m²",
            "stat1Label": "Audited and analyzed residential and public building floor area",
            "stat2Value": "€3.2M+",
            "stat2Label": "Total contract value of managed and implemented projects",
            "stat3Value": "150+",
            "stat3Label": "Detailed audited and certified institutional facilities",
            "stat4Value": "100%",
            "stat4Label": "Compliance with EU EPBD Directives & EBRD Green Standards"
        },
        "trustSection": {
            "title": "Clients & International Institutions That Trust Us",
            "subtitle": "We have successfully executed capital assignments funded by leading development banks, government ministries, and international cooperation agencies."
        },
        "filterSection": {
            "title": "Our Project Portfolio",
            "subtitle": "Filter our assignments by domain or explore comprehensive case studies with technical and financial outcomes.",
            "all": "All Projects",
            "capital": "Capital ESCO & Residential",
            "public": "Public Sector & Education",
            "policy": "EU Policy & Directives",
            "software": "Digitalization & Software",
            "heating": "District Heating & RES"
        },
        "labels": {
            "period": "Assignment Period",
            "client": "Client / Funding Body",
            "role": "Our Role",
            "value": "Contract Value",
            "scale": "Project Scope",
            "whatWeDid": "What We Delivered (Key Outputs)",
            "focus": "Strategic & Engineering Focus",
            "impact": "Client Advancement & Measurable Impact",
            "details": "View Details",
            "hideDetails": "Hide Details",
            "soleImplementer": "Sole Implementer",
            "jvPartner": "Joint Venture (JV) Partner",
            "leadPartner": "Lead Partner",
            "ongoing": "Ongoing",
            "completed": "Completed"
        },
        "projects": [
            {
                "id": "public-esco-mome-ebrd",
                "category": "capital",
                "title": "Energy Rehabilitation of Residential, Multi-Family Buildings Connected to District Heating – Public ESCO Project",
                "client": "EBRD and Ministry of Mining and Energy of the Republic of Serbia (MoME)",
                "location": "Serbia (14 Local Self-Governments)",
                "period": "December 2024 – ongoing",
                "value": "1,800,000 EUR (475,000 EUR Eneplus share)",
                "role": "jvPartner",
                "scaleBadge": "1,400,000+ m² / 14 LSGs",
                "clientLogo": "/Assets/slike_za_reference/European Bank for Reconstruction and Development.png",
                "summary": "Strategic technical assistance supporting the Ministry of Mining and Energy in scaling up the Centralized Building Billing (CBB) system and designing scalable energy efficiency financing mechanisms for multi-family residential buildings.",
                "deliverables": [
                    "Preparation of project audit plans across 14 Local Self-Governments (LSGs) in Serbia.",
                    "Conducting detailed energy audits on buildings with a heated area exceeding 1,400,000 m² selected for EE refurbishment potential.",
                    "Development of customized investment offers for Homeowners' Associations (HOAs) including detailed Bills of Quantities (BoQ), investment plans, annuity repayment schedules, and lifecycle energy cost comparisons.",
                    "Formulation of a two-year Priority Investment Programme (PIP) emphasizing techno-economic feasibility and bankability.",
                    "Execution of Environmental & Social assessments (SEP, ESAP, ESMP, asbestos surveys, fire safety, and poverty impact).",
                    "Alignment of all project documentation with the Paris Agreement and EBRD Green Cities benchmarks."
                ],
                "focus": "Designing an economically viable, bankable, and scalable financing model for homeowners' associations where facade insulation and heating modernization are repaid directly through verified energy bill reductions without financial overburden.",
                "impact": "Catalyzed large-scale residential energy renovation across Serbia. HOAs gain fully transparent financial models with guaranteed 30-50% reductions in heating bills, while municipal district heating networks achieve peak shaving and major CO2 emission abatement.",
                "tags": ["EBRD", "Residential ESCO", "District Heating", "1.4M m²", "HOA Renovation", "Green Finance"]
            },
            {
                "id": "plac-iv-epbd-rulebooks",
                "category": "policy",
                "title": "Policy and Legal Advice Centre (PLAC IV) – National Rulebooks & Methodology Harmonized with EU EPBD Directives",
                "client": "IBF International Consulting & Ministry of Construction, Transport and Infrastructure (MGSI)",
                "location": "Serbia / EU",
                "period": "October 2024 – ongoing",
                "value": "20,000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "National Regulatory Framework (EPBD)",
                "clientLogo": "/Assets/slike_za_reference/Ministarstvo građevinarstva, saobrćaja i  infrastrukture.jpeg",
                "summary": "Direct high-level technical and legal assistance in transposing the EU Energy Performance of Buildings Directive (EPBD 2010/31/EU & new 2024/1275/EU) into Serbian national legislation.",
                "deliverables": [
                    "Drafting the national Rulebook on the content, method, and procedure of preparing technical documentation for building energy performance.",
                    "Drafting the national Rulebook on the conditions and procedures for independent quality control of Building Energy Passports, Building Renovation Passports, and Energy Audit Reports.",
                    "Drafting the official national Methodology for calculating financial cost-optimality parameters for energy efficiency measures under EU Regulation 2018/1999."
                ],
                "focus": "Aligning Serbia's building codes and construction regulations with EU 2050 zero-emission building mandates, introducing Renovation Passports, and establishing a rigorous independent quality control regime for energy certifications.",
                "impact": "Established a modernized, legally robust, and transparent regulatory standard for Serbia's construction sector, ensuring the integrity of energy certificates, unlocking access to EU green funding, and standardizing investment feasibility benchmarks.",
                "tags": ["EU EPBD", "Ministry MGSI", "Legislation", "Certificate Control", "Renovation Passport", "IBF"]
            },
            {
                "id": "usaid-kula-bestenergis",
                "category": "software",
                "title": "Screening of Building Energy Performance & Digitalization in Kula Municipality (BESTenergIS)",
                "client": "USAID",
                "location": "Kula Municipality, Serbia",
                "period": "September 2024 – December 2024",
                "value": "25,000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "139 Buildings (89 Residential + 50 Public)",
                "clientLogo": "/Assets/slike_za_reference/Opština Kula.png",
                "summary": "Comprehensive energy performance screening of building envelopes and HVAC/lighting technical systems combined with municipal energy management digitalization via the BESTenergIS platform.",
                "deliverables": [
                    "Detailed energy audits and systematic on-site screening for 89 residential and 50 public buildings (139 facilities total).",
                    "Collection and digital calibration of building envelope parameters, HVAC plant specifications, and lighting loads.",
                    "Integration into BESTenergIS software enabling dynamic energy simulations, comparative benchmarking, and retrofit prioritization.",
                    "Streamlined municipal pipeline for Energy Passport issuance and subsidy allocation."
                ],
                "focus": "Building an operational digital twin of municipal building energy demands, enabling local authorities to make data-driven investment decisions and prioritize high-yield retrofit measures.",
                "impact": "Positioned Kula Municipality as a national benchmark model for digital municipal energy management in Serbia, accelerating access to energy passports and boosting investment readiness for international grants.",
                "tags": ["USAID", "BESTenergIS", "Digitalization", "139 Buildings", "HVAC Screening", "Kula Municipality"]
            },
            {
                "id": "ebrd-niras-air-quality",
                "category": "heating",
                "title": "Serbia Air Quality Improvement – Project Feasibility Assessment & Boiler Room Elimination",
                "client": "EBRD / NIRAS",
                "location": "Belgrade, Niš, Užice, Valjevo, Zaječar, Novi Pazar, Smederevo",
                "period": "September 2024 – ongoing",
                "value": "250,000 EUR (18,000 EUR Eneplus share)",
                "role": "jvPartner",
                "scaleBadge": "7 Major Urban Centers in Serbia",
                "clientLogo": "/Assets/slike_za_reference/Niras.png",
                "summary": "Comprehensive technical and economic feasibility study for decommissioning highly polluting municipal coal and heavy fuel oil boiler rooms across 7 key Serbian cities.",
                "deliverables": [
                    "Detailed technical assessment of municipal boiler rooms: thermal capacity, fuel types, operating schedules, efficiency, and asset depreciation.",
                    "Heat density mapping and analysis of connection potential to centralized district heating networks and natural gas grids.",
                    "Integration of renewable energy sources (biomass, industrial heat pumps).",
                    "Environmental and social impact assessments (E&S) with risk mitigation roadmaps."
                ],
                "focus": "Eliminating major sources of urban particulate matter (PM2.5 / PM10) air pollution through systematic infrastructure modernization and clean energy fuel switching.",
                "impact": "Provided municipalities with bankable investment roadmaps to decommission over 50 obsolete boiler rooms, dramatically improving urban air quality and public health while reducing municipal operational expenses.",
                "tags": ["EBRD", "NIRAS", "Air Quality", "District Heating", "7 Cities", "Decarbonization"]
            },
            {
                "id": "giz-heat-distribution-roadmap",
                "category": "heating",
                "title": "Roadmap for Sustainable Heat Distribution & Action Plan for Inefficient Heating Device Substitution",
                "client": "GIZ (German International Cooperation)",
                "location": "Serbia",
                "period": "August 2024 – ongoing",
                "value": "50,000 EUR",
                "role": "leadPartner",
                "scaleBadge": "National Strategic Action Plan",
                "clientLogo": "/Assets/slike_za_reference/GIZ.png",
                "summary": "Strategic national roadmap for sustainable thermal energy distribution and action plan for substituting inefficient household heating systems with heat pumps in compliance with EU Directive 2009/125/EC (Eco-Design).",
                "deliverables": [
                    "Legal gap analysis and policy harmonization with EU Eco-Design heating standards.",
                    "Techno-economic modeling for mass household substitution of coal/wood stoves with high-efficiency heat pumps.",
                    "Formulation of national financial incentive and subsidy schemes.",
                    "Capacity-building curricula for municipal energy managers, inspectors, and HVAC installers.",
                    "Establishment of primary energy savings and CO2 monitoring and evaluation protocols."
                ],
                "focus": "Orchestrating a just and rapid clean energy transition in the individual residential heating sector, ensuring high-efficiency heat pumps are financially accessible to ordinary households.",
                "impact": "Laid the national strategic foundation for heating decarbonization in Serbia, established government subsidy criteria, and introduced technical standards that protect consumers from subpar equipment.",
                "tags": ["GIZ", "Heat Pumps", "Eco-Design", "Roadmap", "Subsidies", "Sustainable Heating"]
            },
            {
                "id": "nlb-bank-regional-analysis",
                "category": "capital",
                "title": "Analysis of Building Stock Energy Efficiency & Legislation Across Western Balkan Markets",
                "client": "NLB Group (NLB Bank)",
                "location": "Serbia, North Macedonia, Bosnia & Herzegovina (FBiH & RS), Kosovo*",
                "period": "June 2024 – ongoing",
                "value": "14,000 EUR",
                "role": "jvPartner",
                "scaleBadge": "Regional Market (4 Countries/Territories)",
                "clientLogo": "/Assets/slike_za_reference/nlb-komercialna-logo.svg",
                "summary": "Cross-border comparative engineering study of building stock energy performance and regulatory environments across 4 Western Balkan markets where NLB Group operates.",
                "deliverables": [
                    "Detailed statistical and thermal analysis of average specific energy demands across residential and commercial sectors.",
                    "Comparative review of national building codes and compliance with EU EPBD certification standards.",
                    "Formulation of technical verification criteria for green mortgage and corporate sustainable lending products."
                ],
                "focus": "Establishing verifiable technical and ESG benchmarks that empower the banking group to deploy credible green mortgage portfolios with certified carbon reduction impacts.",
                "impact": "Enabled NLB Group to launch standardized green financing products, accelerating the disbursement of tens of millions of euros into certified energy-efficient construction and renovations.",
                "tags": ["NLB Group", "ESG Banking", "Regional Building Stock", "Green Mortgages", "Market Analysis"]
            },
            {
                "id": "undp-kruscic-primary-school",
                "category": "public",
                "title": "Detailed Energy Audit & Triple-Tiered Investment Measure Packages for Primary School 'Veljko Vlahović'",
                "client": "UNDP Serbia (United Nations Development Programme)",
                "location": "Kruščić, Kula Municipality",
                "period": "November 2023 – December 2023",
                "value": "10,000 USD",
                "role": "soleImplementer",
                "scaleBadge": "Educational Facility / 3 Measure Packages",
                "clientLogo": "/Assets/slike_za_reference/United Nations Development Programme.png",
                "summary": "Comprehensive energy audit and thermal diagnostic of an educational facility, calculating annual heating and electricity demands and modeling tiered investment retrofit scenarios.",
                "deliverables": [
                    "Thermographic and technical survey of building envelope, boiler plant, and lighting systems.",
                    "Energy balance calculation and consumption baseline benchmarking.",
                    "Assessment of current institutional energy management practices and legal compliance.",
                    "Design of 3 comprehensive energy efficiency and renewable energy investment packages (PV solar & heat pumps).",
                    "Dynamic techno-economic lifecycle analysis (NPV, IRR, Payback periods)."
                ],
                "focus": "Finding the sweet spot between capital expenditure and maximum fossil fuel displacement while restoring optimal indoor thermal comfort for students and staff.",
                "impact": "Delivered fully shovel-ready engineering documentation that secured over 60% reduction in heating energy demand and facilitated a transition to on-site solar generation.",
                "tags": ["UNDP", "Education", "Energy Audit", "RES Packages", "Return on Investment"]
            },
            {
                "id": "ebrd-vojvodina-public-buildings-support",
                "category": "public",
                "title": "Project Implementation Support for Energy Efficiency in Public Buildings of AP Vojvodina",
                "client": "EBRD (in consortium with Enova, Plus Minus and Entazis)",
                "location": "Autonomous Province of Vojvodina",
                "period": "August 2023 – ongoing",
                "value": "900,000 EUR (81,000 EUR Eneplus share)",
                "role": "jvPartner",
                "scaleBadge": "FIDIC Engineering & Ex-Post Audits",
                "clientLogo": "/Assets/slike_za_reference/European Bank for Reconstruction and Development.png",
                "summary": "Large-scale engineering and project implementation consultancy supporting the energy renovation of public buildings in Vojvodina financed by the EBRD.",
                "deliverables": [
                    "Technical review and validation of existing energy audits and feasibility studies.",
                    "Preparation of comprehensive Employer's Requirements under FIDIC contracting standards.",
                    "Development of rigorous monitoring and verification (M&V) protocols.",
                    "Execution of post-retrofit (ex-post) energy audits on completed facilities.",
                    "First-year outcome reporting and carbon abatement verification for the Employer and EBRD."
                ],
                "focus": "Ensuring executed construction works strictly achieve target energy savings while meeting rigorous international FIDIC engineering standards and loan covenants.",
                "impact": "Guaranteed quality and performance across dozens of institutional facilities, verifying multi-million euro public budget savings and ensuring seamless EBRD loan disbursement.",
                "tags": ["EBRD", "FIDIC Engineering", "Public Buildings", "M&V Protocol", "Ex-Post Audits"]
            },
            {
                "id": "vojvodina-secretariat-33-buildings",
                "category": "public",
                "title": "Detailed Energy Audits & Energy Passports for 33 Public Buildings in AP Vojvodina",
                "client": "Provincial Secretariat for Energy, Construction and Transport (Consortium with Faculty of Technical Sciences Novi Sad)",
                "location": "Vojvodina, Serbia",
                "period": "August 2021 – December 2021",
                "value": "94,000 EUR (33,000 EUR Eneplus share)",
                "role": "jvPartner",
                "scaleBadge": "33 Public Facilities / FTN Consortium",
                "clientLogo": "/Assets/slike_za_reference/Pokrajinski sekretarijat za energetiku, građevinarstvo i saobraćaj.jpeg",
                "summary": "Systematic energy auditing and certification of 33 key public facilities in Vojvodina featuring advanced cost-benefit sensitivity analysis under dynamic energy tariffs.",
                "deliverables": [
                    "Preparation of Energy Efficiency Elaborates for baseline conditions and post-retrofit scenarios.",
                    "Issuance of official Energy Passports and comprehensive audit reports.",
                    "Detailed survey of building heat sources, thermal envelopes, and electrical consumers.",
                    "Technical evaluation of fuel switching and renewable energy integration.",
                    "Cost-benefit analysis based on metered consumption with sensitivity modeling for energy price fluctuations."
                ],
                "focus": "Providing the Provincial Government with a reliable, data-backed priority ranking of public assets to maximize energy and budget savings per euro of public investment.",
                "impact": "All 33 public buildings received official Energy Passports and actionable investment blueprints, enabling the Secretariat to achieve over 40% energy savings across the portfolio.",
                "tags": ["Provincial Secretariat", "FTN Novi Sad", "33 Buildings", "Energy Passports", "Cost-Benefit"]
            },
            {
                "id": "serbia-17-public-buildings",
                "category": "public",
                "title": "Detailed Energy Audits & Certification of 17 Landmark Public & Institutional Buildings",
                "client": "Municipalities & Public Institutions Across Serbia",
                "location": "Novi Sad, Kikinda, Subotica, Šid, Vrbas, Srbobran, Kanjiža, Bačka Topola, Bač",
                "period": "January 2019 – June 2020",
                "value": "40,000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "17 Landmark Facilities (Parliament, Health Centers, Gymnasiums)",
                "clientLogo": "/Assets/slike_za_reference/Grad Kikinda.jpeg",
                "summary": "Detailed energy audits and certifications for the Assembly Building of AP Vojvodina, 2 primary health centers, a sports arena, 5 high schools/gymnasiums, 4 primary schools, 3 kindergartens, and a library.",
                "deliverables": [
                    "Detailed energy audit of the Assembly Building of the Autonomous Province of Vojvodina.",
                    "Audits and Passports for Health Center 'Đorđe Bastić' Srbobran and Health Center Kanjiža.",
                    "Audit of Sports & Cultural Center 'Drago Jovović' Vrbas.",
                    "Audits of technical schools and gymnasiums across Šid, Kula, Kikinda, and Subotica.",
                    "Audits of 3 kindergartens and the Public Library 'Vuk Karadžić' Bač.",
                    "Thermal bridging calculations and renewable heating feasibility studies."
                ],
                "focus": "Overcoming unique thermal engineering challenges across highly diverse building typologies—from historic government palaces to large sports complexes and high-demand healthcare clinics.",
                "impact": "Institutions eliminated critical thermal inefficiencies, upgraded heating controls, and secured stable, cost-effective operation with superior comfort for citizens, students, and patients.",
                "tags": ["Vojvodina Parliament", "Healthcare", "Gymnasiums", "17 Facilities", "Energy Audits"]
            },
            {
                "id": "leen-gmbh-software-tools",
                "category": "software",
                "title": "Development & Customization of Specialized Industrial Energy Audit Software Algorithms",
                "client": "LEEN GmbH (Germany)",
                "location": "Germany / Serbia",
                "period": "June 2019 – January 2020",
                "value": "30,000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "German Industrial Market / 10 Engineering Modules",
                "clientLogo": "/Assets/slike_za_reference/Primas consulting.png",
                "summary": "Engineering software algorithm development and tool customization for industrial energy efficiency networks operating across Germany.",
                "deliverables": [
                    "Mathematical modules for industrial waste heat recovery from process streams.",
                    "Calculation tools for industrial heat pumps and free cooling systems.",
                    "Simulation algorithms for oil/gas steam and hot water boiler efficiency.",
                    "Thermal models for solar industrial process heat and domestic hot water.",
                    "Algorithms for variable speed drives, motor replacement, and process pipe insulation."
                ],
                "focus": "Automating intricate thermodynamic and fluid-mechanical equations for field auditors in strict alignment with German DIN and VDI engineering standards.",
                "impact": "Equipped German industrial energy efficiency networks with fast, reliable, and verified software tools that consistently pinpoint multi-million euro process energy savings.",
                "tags": ["LEEN Germany", "Industrial Software", "Waste Heat", "Heat Pumps", "DIN Standards"]
            },
            {
                "id": "giz-ascot-light-cba-tool",
                "category": "software",
                "title": "Development of Municipal CBA Calculation Tool for Educational Buildings (ASCOT Light Model)",
                "client": "GIZ Serbia",
                "location": "Serbia",
                "period": "September 2017 – May 2018",
                "value": "11,000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "National Tool for Municipalities & Schools",
                "clientLogo": "/Assets/slike_za_reference/GIZ.png",
                "summary": "Development of an Excel-based Cost-Benefit Analysis (CBA) calculation engine adapted from the Danish Ascot Light model (School of The Future, Cenergia / Kuben Management A/S).",
                "deliverables": [
                    "Formulation of mathematical and financial algorithms for school energy retrofit modeling.",
                    "Automated estimation of annual thermal/electrical savings and CO2 emission abatement.",
                    "Renewable energy source (RES) integration calculators for school rooftops.",
                    "User-friendly GUI tailored for municipal energy managers across Serbian local governments."
                ],
                "focus": "Delivering an accessible yet mathematically rigorous tool that enables municipal officials to rapidly screen school retrofit feasibility without commissioning costly preliminary studies.",
                "impact": "Adopted by municipal energy departments across Serbia, facilitating the preparation and successful grant funding of dozens of school renovation projects.",
                "tags": ["GIZ", "CBA Tool", "ASCOT Model", "Schools", "CO2 Abatement", "Municipal Managers"]
            },
            {
                "id": "giz-kragujevac-biomass-schools",
                "category": "heating",
                "title": "Pre-Feasibility Study for Biomass Fuel Switching in 5 Primary Schools in Kragujevac",
                "client": "GIZ Serbia / City of Kragujevac",
                "location": "Kragujevac City, Serbia",
                "period": "November 2016 – May 2017",
                "value": "10,000 EUR",
                "role": "soleImplementer",
                "scaleBadge": "5 Primary Schools in Kragujevac",
                "clientLogo": "/Assets/slike_za_reference/Grad Kraljevo.png",
                "summary": "Techno-economic pre-feasibility study for converting obsolete fossil fuel boilers (coal and heavy oil) to clean wood biomass boiler systems in municipal primary schools.",
                "deliverables": [
                    "Detailed baseline thermal diagnostics across 5 schools: 'Živadinka Divac', 'Miloje Simović', 'Natalija Nana Nedeljković', 'Sreten Mladenović', and 'Dragiša Mihajlović'.",
                    "Heat load calculations and boiler plant capacity sizing.",
                    "Regional biomass supply chain logistics and economic viability assessment in the Šumadija district.",
                    "Financial payback, capital expenditure estimates, and emissions reduction projections."
                ],
                "focus": "Decommissioning heavily polluting fossil boilers from school premises and transitioning to locally sourced, sustainable wood biomass heating.",
                "impact": "Provided the City of Kragujevac with actionable investment documentation, eliminating toxic emissions around school grounds and slashing heating operational costs by over 35%.",
                "tags": ["GIZ", "Kragujevac", "Biomass", "5 Schools", "Pre-Feasibility", "Clean Air"]
            }
        ],
        "whyChooseUs": {
            "overline": "WHY LEADING INSTITUTIONS CHOOSE ENEPLUS",
            "title": "Engineering Authority & Proven Capacity for Large-Scale Programs",
            "subtitle": "We blend deep regulatory mastery, licensed top-tier engineering talent, and international development bank financing experience.",
            "pillar1Title": "Authors of National Regulations & EU Directives",
            "pillar1Desc": "Directly drafting official national rulebooks and methodologies for Serbia under the new EU EPBD 2024/1275/EU mandate.",
            "pillar2Title": "Trusted Partner to International Financial Institutions",
            "pillar2Desc": "Extensive track record on multi-million euro programs financed by EBRD, USAID, UNDP, and GIZ with FIDIC engineering and M&V protocols.",
            "pillar3Title": "Licensed Expert Engineering Team",
            "pillar3Desc": "Degreed mechanical and electrical engineers holding top licenses from the Serbian Chamber of Engineers for building EE and thermal power.",
            "pillar4Title": "Proprietary Software & Analytics Platforms",
            "pillar4Desc": "We engineer customized calculation platforms (BESTenergIS, LEEN tools, ASCOT models) that guarantee analytical precision and rapid decision-making."
        },
        "ctaSection": {
            "title": "Planning a Major Energy Efficiency Program?",
            "subtitle": "Whether you represent an international financial institution, municipality, industrial facility, or residential community — our engineering team is ready to design, calculate, and manage your project for maximum ROI.",
            "ctaPrimary": "Request Consultation & Proposal",
            "ctaPhone": "+381 64 817 2033",
            "ctaSecondary": "Explore All Our Services"
        }
    }

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    sr_path = os.path.join(base_dir, 'messages', 'sr.json')
    en_path = os.path.join(base_dir, 'messages', 'en.json')

    # Update sr.json
    with open(sr_path, 'r', encoding='utf-8') as f:
        sr = json.load(f)
    sr['Navbar']['results'] = 'Rezultati'
    sr['Hero']['resultsCta'] = 'Pogledaj Rezultate'
    sr['ResultsPage'] = get_sr_results_page()
    with open(sr_path, 'w', encoding='utf-8') as f:
        json.dump(sr, f, ensure_ascii=False, indent=4)
    print('Updated sr.json successfully')

    # Update en.json
    with open(en_path, 'r', encoding='utf-8') as f:
        en = json.load(f)
    en['Navbar']['results'] = 'Results'
    en['Hero']['resultsCta'] = 'View Results'
    en['ResultsPage'] = get_en_results_page()
    with open(en_path, 'w', encoding='utf-8') as f:
        json.dump(en, f, ensure_ascii=False, indent=4)
    print('Updated en.json successfully')

if __name__ == '__main__':
    main()
