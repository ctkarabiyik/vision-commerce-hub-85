const productsIt: Record<string, { shortDescription: string; description: string; descriptionBox?: string }> = {
  "ace-2040-pro-series": {
    shortDescription: "Telecamera area scan ad alte prestazioni con qualità d'immagine eccezionale per applicazioni industriali esigenti.",
    description: "La serie ACE-2040 Pro rappresenta l'apice della tecnologia di imaging industriale. Dotata di un sensore Sony IMX all'avanguardia, questa telecamera offre una qualità d'immagine eccezionale con rumore minimo, anche in condizioni di illuminazione difficili.",
  },
  "1-1-7-inch-fa-lenses": {
    shortDescription: "Obiettivi FA compatti ad alta risoluzione progettati per sensori 1/1.7\" in applicazioni di automazione industriale.",
    description: "La serie di obiettivi FA da 1/1.7 pollici offre prestazioni ottiche eccezionali per applicazioni di visione artificiale.",
  },
  "2-3-inch-standard-fa-lenses": {
    shortDescription: "Obiettivi FA standard ottimizzati per sensori 2/3\" con prestazioni affidabili per l'automazione industriale.",
    description: "La serie di obiettivi FA Standard da 2/3 pollici fornisce imaging economico e di alta qualità per applicazioni di visione artificiale.",
  },
  "2-3-inch-superior-fa-lenses": {
    shortDescription: "Obiettivi FA premium per sensori 2/3\" con prestazioni ottiche superiori e distorsione ultra-bassa.",
    description: "La serie di obiettivi FA Superior da 2/3 pollici rappresenta la massima qualità ottica per applicazioni con sensori 2/3\" con risoluzione migliorata e aberrazioni minimizzate.",
  },
  "1-1-inch-fa-lenses": {
    shortDescription: "Obiettivi FA grande formato per sensori 1.1\" con ampia copertura per imaging ad alta risoluzione.",
    description: "La serie di obiettivi FA da 1.1 pollici copre formati sensore più grandi per applicazioni di visione artificiale esigenti.",
  },
  "23-coaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico coassiale per sensori 2/3\" con illuminazione integrata per misurazioni dimensionali precise.",
    description: "L'obiettivo telecentrico coassiale 2/3\" fornisce imaging senza distorsione con illuminazione coassiale integrata, ideale per applicazioni di misurazione di precisione.",
  },
  "11-coaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico coassiale per sensori 1.1\" con illuminazione integrata per misurazioni ad alta risoluzione.",
    description: "L'obiettivo telecentrico coassiale 1.1\" offre imaging senza distorsione per sensori più grandi con capacità di illuminazione coassiale.",
  },
  "12-coaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico coassiale per sensori 1.2\" con misurazione senza distorsione e illuminazione integrata.",
    description: "L'obiettivo telecentrico coassiale 1.2\" supporta sensori grande formato per applicazioni di misurazione ad alta precisione.",
  },
  "large-coaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico coassiale grande formato per copertura sensore sovradimensionata in applicazioni di misurazione esigenti.",
    description: "L'obiettivo telecentrico coassiale grande formato fornisce imaging telecentrico per i formati sensore più grandi disponibili.",
  },
  "half-inch-noncoaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico non coassiale compatto per sensori 1/2\", ideale per configurazioni di misurazione con spazio limitato.",
    description: "L'obiettivo telecentrico non coassiale 1/2\" fornisce imaging senza distorsione in un fattore di forma compatto per applicazioni con sensori più piccoli.",
  },
  "23-noncoaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico non coassiale per sensori 2/3\" con compatibilità illuminazione esterna.",
    description: "L'obiettivo telecentrico non coassiale 2/3\" offre capacità di misurazione precise con flessibilità nella configurazione dell'illuminazione.",
  },
  "23-noncoaxial-telecentric-b": {
    shortDescription: "Obiettivo telecentrico non coassiale alternativo per sensori 2/3\" con diverse opzioni di ingrandimento.",
    description: "L'obiettivo telecentrico non coassiale 2/3\" Tipo B offre un range di ingrandimento alternativo per esigenze di misurazione specializzate.",
  },
  "11-noncoaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico non coassiale per sensori 1.1\" con capacità di misurazione ad alta risoluzione.",
    description: "L'obiettivo telecentrico non coassiale 1.1\" fornisce imaging telecentrico a campo largo per applicazioni di misurazione esigenti.",
  },
  "12-noncoaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico non coassiale per sensori 1.2\" per misurazioni di precisione su ampi campi.",
    description: "L'obiettivo telecentrico non coassiale 1.2\" supporta sensori grande formato per misurazioni dimensionali precise.",
  },
  "large-noncoaxial-telecentric": {
    shortDescription: "Obiettivo telecentrico non coassiale grande formato per copertura sensore sovradimensionata nella metrologia industriale.",
    description: "L'obiettivo telecentrico non coassiale grande formato fornisce l'imaging telecentrico più ampio per l'ispezione di grandi aree.",
  },
  "4k-line-scan-lens": {
    shortDescription: "Obiettivo line scan ad alte prestazioni ottimizzato per telecamere line scan 4K in applicazioni di ispezione web.",
    description: "L'obiettivo Line Scan 4K è progettato per l'imaging ottimale con telecamere line scan a risoluzione 4K.",
  },
  "8k-line-scan-lens": {
    shortDescription: "Obiettivo line scan ad alta risoluzione per telecamere 8K con qualità d'immagine superiore per ispezioni esigenti.",
    description: "L'obiettivo Line Scan 8K fornisce risoluzione migliorata per applicazioni di imaging line scan ad alto numero di pixel.",
  },
  "16k-35u-line-scan-lens": {
    shortDescription: "Obiettivo line scan 16K ultra-alta risoluzione ottimizzato per sensori con pixel pitch da 3,5µm.",
    description: "L'obiettivo Line Scan 16K/3,5µ offre la massima risoluzione per telecamere line scan 16K con il pixel pitch più fine.",
  },
  "16k-5u-line-scan-lens": {
    shortDescription: "Obiettivo line scan 16K ottimizzato per sensori con pixel pitch da 5µm, bilanciando risoluzione e trasmissione luminosa.",
    description: "L'obiettivo Line Scan 16K/5µ fornisce un imaging eccellente per telecamere line scan 16K con pixel pitch da 5µm.",
  },
  "macro-lenses": {
    shortDescription: "Obiettivi macro ad alto ingrandimento per l'ispezione ravvicinata di componenti piccoli e dettagli fini.",
    description: "La serie di obiettivi Macro fornisce imaging ad alto ingrandimento per l'ispezione dettagliata di componenti miniaturizzati.",
  },
  "infrared-lenses": {
    shortDescription: "Obiettivi specializzati per applicazioni di imaging infrarosso inclusi SWIR e range di lunghezze d'onda termiche.",
    description: "La serie di obiettivi Infrarosso è progettata per l'imaging oltre lo spettro visibile, supportando applicazioni SWIR e termiche.",
  },
  "vr-lenses": {
    shortDescription: "Obiettivi con ampio campo visivo progettati per applicazioni di realtà virtuale e imaging panoramico.",
    description: "La serie di obiettivi VR fornisce imaging con campo visivo ultra-ampio per la cattura di contenuti VR e sistemi panoramici.",
  },
  "scheimpflug-lenses": {
    shortDescription: "Obiettivi inclinabili che utilizzano il principio di Scheimpflug per profondità di campo estesa su piani inclinati.",
    description: "La serie di obiettivi Scheimpflug presenta meccanismi di inclinazione regolabili per l'imaging di piani inclinati con piena nitidezza.",
  },
  "large-format-lenses": {
    shortDescription: "Obiettivi ad alta copertura progettati per sensori grande formato nell'imaging industriale ad alta risoluzione.",
    description: "La serie di obiettivi Grande Formato fornisce copertura completa per sensori sovradimensionati in applicazioni ad alta risoluzione.",
  },
  "1gige-line-scan-camera": {
    shortDescription: "Telecamera line scan 1GigE economica per applicazioni di ispezione continua a velocità standard.",
    description: "La telecamera Line Scan 1GigE fornisce imaging line scan affidabile su Gigabit Ethernet standard per attività di ispezione comuni.",
  },
  "2-5gige-line-scan-camera": {
    shortDescription: "Telecamera line scan 2.5GigE ad alto throughput per ispezione continua esigente con larghezza di banda aumentata.",
    description: "La telecamera Line Scan 2.5GigE offre 2,5 volte la larghezza di banda del GigE standard per velocità di linea e risoluzioni superiori.",
  },
  "10gige-line-scan-camera": {
    shortDescription: "Telecamera line scan 10GigE con larghezza di banda ultra-alta per le ispezioni ad alta velocità e risoluzione più esigenti.",
    description: "La telecamera Line Scan 10GigE offre la massima larghezza di banda per applicazioni line scan ultra-veloci con la massima risoluzione.",
  },
  "mgv-series-1gige-area-scan": {
    shortDescription: "Telecamere area scan 1GigE versatili con sensori Sony per applicazioni di visione artificiale generiche.",
    description: "La serie MGV offre imaging GigE Vision affidabile per un'ampia gamma di attività di ispezione industriale.",
  },
  "mgs-series-1gige-area-scan": {
    shortDescription: "Telecamere area scan 1GigE ad alte prestazioni con sensibilità migliorata per ambienti di ispezione esigenti.",
    description: "La serie MGS offre frame rate più elevati e sensibilità migliorata rispetto alle telecamere GigE standard.",
  },
  "m3s-series-usb3-area-scan": {
    shortDescription: "Telecamere area scan USB3.0 ad alta larghezza di banda per applicazioni che richiedono il massimo throughput.",
    description: "La serie M3S sfrutta la larghezza di banda USB3.0 per frame rate più elevati e imaging a bassa latenza.",
  },
  "u3p-series-usb3-area-scan": {
    shortDescription: "Telecamere area scan USB3.0 premium con sensori grandi per applicazioni di imaging ad alta risoluzione.",
    description: "La serie U3P fornisce imaging USB3.0 ad alta risoluzione per attività di misurazione e ispezione esigenti.",
  },
  "m2s-series-usb2-area-scan": {
    shortDescription: "Telecamere area scan USB2.0 economiche per imaging standard e integrazione con sistemi legacy.",
    description: "La serie M2S offre imaging USB2.0 affidabile per applicazioni economiche e aggiornamenti di sistemi esistenti.",
  },
  "10gige-fiber-optic-area-scan": {
    shortDescription: "Telecamere area scan 10GigE in fibra ottica ultra-alta risoluzione per le applicazioni con sensori grandi più esigenti.",
    description: "La serie 10GigE Fiber Optic offre la massima larghezza di banda su fibra per imaging ultra-alta risoluzione a distanza.",
  },
  "ds-series-dual-usb3-area-scan": {
    shortDescription: "Telecamere area scan con doppia interfaccia USB3.0 per imaging ultra-veloce con doppia larghezza di banda.",
    description: "La serie DS utilizza due porte USB3.0 per doppia larghezza di banda, consentendo frame rate eccezionali ad alte risoluzioni.",
  },
  "dsv-series-usb3-coin": {
    shortDescription: "Telecamere USB3.0 ultra-compatte a forma di moneta per applicazioni di visione embedded con spazio limitato.",
    description: "La serie DSV racchiude imaging ad alte prestazioni in un fattore di forma ultra-miniaturizzato a dimensione di moneta.",
  },
  "lipstick-series-1gige-area-scan": {
    shortDescription: "Telecamere 1GigE sottili in formato lipstick progettate per l'integrazione in spazi ristretti.",
    description: "La serie Lipstick presenta un design allungato e sottile per installazioni dove le telecamere standard non possono entrare.",
  },
  "frame-grabber-10-40gige": {
    shortDescription: "Frame grabber PCIe ad alte prestazioni con supporto per interfacce telecamera in fibra ottica da 10GigE a 40GigE.",
    description: "Il Frame Grabber consente l'integrazione senza soluzione di continuità di telecamere in fibra ottica 10-40GigE con PC host tramite PCIe.",
    descriptionBox: "La serie XGG242 (frame grabber 10-40GigE) supporta il protocollo GigE Vision con velocità di interfaccia 10Gbps, e fino a 4 telecamere possono essere collegate alla sua interfaccia SFP tramite moduli SFP collegabili.",
  },
};

export default productsIt;
