export interface Mission {
  id: string
  title: string
  goal: string
  why: string
  measures: string[]
  vision2050: string
  firstStep2026: string
  image: string
}

export const missions: Mission[] = [
  {
    id: 'staat',
    title: 'Staat, der funktioniert',
    goal: 'Verwaltung und Politik werden wieder schnell, verständlich und vertrauenswürdig — digital und menschlich zugleich.',
    why: 'Bürokratie kostet Tempo, Vertrauen und Innovationskraft. Ohne handlungsfähigen Staat bleiben gute Ideen in Warteschleifen stecken.',
    measures: [
      'Digitale Bürgerämter mit durchgängigen Prozessen statt Medienbrüchen',
      'Entscheidungswege transparent machen: Wer entscheidet was — und bis wann?',
      'Pilotverfahren für schnelle Genehmigungen in Klimaschutz und Infrastruktur',
      'Bürgerbeteiligung als Standardformat, nicht als Ausnahme-Event',
      'Qualitätsstandards für digitale Verwaltungsdienste europaweit anschlussfähig',
    ],
    vision2050:
      'Anträge dauern Tage statt Monate. Bürgerinnen und Unternehmen wissen, woran sie sind. Verwaltung ist Service — nicht Hürde.',
    firstStep2026:
      'Drei Kommunen starten als GermaNEW-Pilot mit offener Roadmap für digitale Verwaltungsprozesse und öffentlicher Fortschrittsmessung.',
    image: './assets/images/missions/01-staat.webp',
  },
  {
    id: 'schule',
    title: 'Schule der Neugier',
    goal: 'Bildung weckt wieder Forschergeist, Mut und praktische Kompetenz — für alle Kinder und Jugendlichen.',
    why: 'Schulen prägen, ob eine Gesellschaft Probleme löst oder nur verwaltet. Neugier ist der Rohstoff für Innovation und Demokratie.',
    measures: [
      'Projektwochen zu Zukunft, KI und Nachhaltigkeit ab der Grundschule',
      'Lehrkräfte-Fortbildung zu Kreativmethoden und digitalen Werkzeugen',
      'Partnerschaften zwischen Schulen, Unternehmen und Kultureinrichtungen',
      'Portfolio statt reiner Notendruck: sichtbare Kompetenzentwicklung',
      'GermaNEW-Schul-Kit als modulares Unterrichtsformat ab 2026',
    ],
    vision2050:
      'Schulen sind Orte des Entdeckens. Kinder lernen, Fragen zu stellen, zu experimentieren und Verantwortung zu übernehmen.',
    firstStep2026:
      'Erste Schulen testen das GermaNEW-Workshop-Kit zu den sieben Missionen — dokumentiert und evaluiert.',
    image: './assets/images/missions/02-schule.webp',
  },
  {
    id: 'ki',
    title: 'Souveräne KI',
    goal: 'Deutschland und Europa entwickeln eigene, vertrauenswürdige KI-Infrastruktur — offen, sicher, demokratisch kontrolliert.',
    why: 'Wer KI nur konsumiert, verliert Souveränität über Daten, Wirtschaft und öffentliche Debatte. Souveränität beginnt bei Infrastruktur.',
    measures: [
      'Offene KI-Modelle und Rechenkapazität in europäischer Hand',
      'Klare Regeln für Datenschutz, Transparenz und menschliche Kontrolle',
      'Förderung von KI-Anwendungen im Mittelstand und in Verwaltung',
      'GermaNEW als Showcase: KI als Werkzeug für Bildung, nicht Ersatz für Urteil',
      'Internationale Kooperation mit EU-Partnern statt Abhängigkeit von Drittstaaten',
    ],
    vision2050:
      'KI unterstützt Entscheidungen — sie trifft sie nicht allein. Bürgerinnen verstehen, wo KI wirkt und wie sie kontrolliert wird.',
    firstStep2026:
      'Future-Lab-Workshops zu souveräner KI mit Schulen, Hochschulen und Kommunen — inklusive offener Leitfragen und Materialien.',
    image: './assets/images/missions/03-ki.webp',
  },
  {
    id: 'industrie',
    title: 'Neue Industrie & Mittelstand',
    goal: 'Deutschlands Wirtschaft erfindet sich neu: produktiv, grün, digital — mit starkem Mittelstand und guter Arbeit.',
    why: 'Industriestandort und sozialer Zusammenhalt hängen zusammen. Ohne neue Industrie fehlen Jobs, Steuern und technologische Souveränität.',
    measures: [
      'Investitionen in grüne Produktion, Automatisierung und Kreislaufwirtschaft',
      'Mittelstandsprogramme für KI, Robotik und neue Materialien',
      'Regionale Innovationscluster statt Konzentration in wenigen Metropolen',
      'Ausbildung und Weiterbildung als Kernelement der Industriepolitik',
      'GermaNEW-Formate für Unternehmen: Zukunftsbilder als Strategie-Werkzeug',
    ],
    vision2050:
      'Deutschland exportiert wieder Ideen und Systeme — nicht nur Maschinen. Der Mittelstand ist global wettbewerbsfähig und regional verankert.',
    firstStep2026:
      'Pilot-Workshops mit drei Mittelstandsunternehmen: Zukunftsatlas als Basis für Innovations- und Investitionsentscheidungen.',
    image: './assets/images/missions/04-industrie.webp',
  },
  {
    id: 'energie',
    title: 'Energie, Infrastruktur & Tempo',
    goal: 'Energieversorgung und Infrastruktur werden schnell, resilient und klimaneutral — sichtbar und spürbar für alle.',
    why: 'Klimaschutz scheitert nicht am Willen allein, sondern an Tempo und Umsetzung. Infrastruktur ist die Bühne der Zukunft.',
    measures: [
      'Beschleunigte Genehmigung für Erneuerbare, Netze und Speicher',
      'Solarpunk-Prinzipien in Städteplanung: grün, effizient, lebenswert',
      'Mobilität neu denken: ÖPNV, Rad, autonomes Fahren als System',
      'Transparenz über Fortschritt: Wo steht der Ausbau — wirklich?',
      'Bürgerenergie und regionale Versorgung stärken',
    ],
    vision2050:
      'Städte leuchten grün und leben. Energie ist günstig, sauber und zuverlässig. Infrastruktur verbindet Regionen statt sie zu spalten.',
    firstStep2026:
      'Lokaler Zukunftsatlas für eine Pilotregion: Energie- und Mobilitätsszenarien bis 2050 visualisieren und öffentlich diskutieren.',
    image: './assets/images/missions/05-energie.webp',
  },
  {
    id: 'kreativ',
    title: 'Kreative Gesellschaft',
    goal: 'Kunst, Kultur und Kreativwirtschaft werden wieder zentral für Identität, Debatte und wirtschaftliche Kraft.',
    why: 'Kreativität ist nicht Luxus — sie ist der Motor für neue Narrative, Produkte und gesellschaftlichen Zusammenhalt.',
    measures: [
      'Kultur als Pflichtfach und Querschnittsthema in Bildung und Verwaltung',
      'Förderung unabhängiger Künstlerinnen und Kreativwirtschaft',
      'Öffentliche Räume für Kunst, Debatte und Begegnung ausbauen',
      'GermaNEW als Brücke zwischen Kultur, Politik und Technologie',
      'Neue Vermittlungsformate: Ausstellungen, Film, immersive Erlebnisse',
    ],
    vision2050:
      'Kunst und Kultur sind Alltag — nicht Randerscheinung. Menschen erleben Zukunft emotional, nicht nur als Statistik.',
    firstStep2026:
      'Erste Immersive-Ausstellung oder Vernissage mit GermaNEW-Zukunftsbildern — öffentlich zugänglich und dokumentiert.',
    image: './assets/images/missions/06-kreativ.webp',
  },
  {
    id: 'europa',
    title: 'Europa & internationale Verantwortung',
    goal: 'Deutschland trägt Verantwortung in Europa und weltweit — als Partner, nicht als Alleingänger.',
    why: 'Keine große Zukunftsfrage löst sich national allein. Klima, Sicherheit, Technologie und Migration brauchen europäische Antworten.',
    measures: [
      'Deutschland als Motor europäischer Innovations- und Klimapolitik',
      'Internationale Forschungs- und Bildungspartnerschaften ausbauen',
      'Entwicklungspolitik mit Technologie, Bildung und fairen Partnerschaften',
      'GermaNEW-Formate für EU-Kontext: Zukunftsatlas als gemeinsame Sprache',
      'Transparenz über internationale Verpflichtungen und Fortschritt',
    ],
    vision2050:
      'Deutschland ist Zukunftslabor Europas — vertrauenswürdig, kooperativ, mit klaren Werten und messbarem Beitrag.',
    firstStep2026:
      'Dialogformat mit EU-Partnern: GermaNEW-Missionen als Diskussionsgrundlage für gemeinsame Zukunftsbilder.',
    image: './assets/images/missions/07-europa.webp',
  },
]
