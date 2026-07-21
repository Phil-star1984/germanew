export interface TimelinePhase {
  id: string
  period: string
  title: string
  summary: string
  highlights: string[]
  milestones: string[]
}

export const timelinePhases: TimelinePhase[] = [
  {
    id: 'phase-1',
    period: '2026–2030',
    title: 'Neustart & Pilotprojekte',
    summary:
      'GermaNEW wird erlebbar: erste Future-Labs, Schul-Workshops und kommunale Piloten machen die sieben Missionen greifbar.',
    highlights: [
      'Launch der Plattform und des filmischen Zukunftsnarrativs',
      'Pilotprojekte in drei Kommunen und zehn Schulen',
      'Erste Keynotes, Ausstellungen und Presseformate',
      'Feedback-Schleifen: Was funktioniert — was muss angepasst werden?',
    ],
    milestones: [
      '2026: Plattform live, Hero-Film und Missionen öffentlich',
      '2027: Erste evaluierte Pilotberichte veröffentlicht',
      '2028: Schul-Kit in mindestens 50 Bildungseinrichtungen',
      '2030: Roadmap-Review mit Bürgerbeteiligung',
    ],
  },
  {
    id: 'phase-2',
    period: '2030–2035',
    title: 'Skalierung',
    summary:
      'Bewährte Formate wachsen: Städte, Regionen, Unternehmen und Kulturinstitutionen übernehmen den Zukunftsatlas.',
    highlights: [
      'Regionale Zukunftsatlanten für Städte und Länder',
      'Lizenzierte Formate für Schulen, Unternehmen und Medien',
      'Netzwerk von Future-Labs in ganz Deutschland',
      'Internationale Sichtbarkeit und EU-Partnerschaften',
    ],
    milestones: [
      '2031: Standardisiertes Workshop- und Schul-Kit bundesweit',
      '2033: Mindestens 100 kommunale Future-Lab-Partner',
      '2035: GermaNEW als etabliertes Beteiligungsformat',
    ],
  },
  {
    id: 'phase-3',
    period: '2035–2040',
    title: 'Systemumbau',
    summary:
      'Einzelprojekte werden institutionell: Verwaltung, Bildung und Wirtschaft verankern Zukunftsorientierung dauerhaft.',
    highlights: [
      'Zukunftsorientierung in Verwaltungs- und Bildungsstrukturen',
      'Souveräne KI-Infrastruktur als europäisches Referenzmodell',
      'Industriepolitik und Klimaziele messbar auf Kurs',
      'Kreative Gesellschaft als anerkannte Wirtschafts- und Identitätskraft',
    ],
    milestones: [
      '2036: Nationale Zukunftsberichte mit GermaNEW-Methodik',
      '2038: EU-weite Anschlussformate etabliert',
      '2040: Systemreview — Anpassung der Roadmap für 2040–2050',
    ],
  },
  {
    id: 'phase-4',
    period: '2040–2050',
    title: 'Deutschland als Zukunftslabor Europas',
    summary:
      'Deutschland gilt als Ort, an dem positive, überprüfbare Zukunft gestaltet wird — exportierbar, diskutierbar, glaubwürdig.',
    highlights: [
      'Referenzmodell für europäische Zukunftspolitik',
      'Export von Formaten, Methoden und Narrativen',
      'Generationenübergreifende Verantwortung sichtbar gemacht',
      'GermaNEW als dauerhafte Plattform — nicht als Einmalprojekt',
    ],
    milestones: [
      '2042: Internationale GermaNEW-Konferenz',
      '2045: Halbzeit-Review der 2050-Vision',
      '2050: Deutschland 2050 — Bilanz und Weiterentwicklung',
    ],
  },
]
