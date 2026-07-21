export interface Offer {
  id: string
  title: string
  description: string
  audience: string
  image: string
}

export const offers: Offer[] = [
  {
    id: 'keynote',
    title: 'GermaNEW Keynote',
    description:
      'Inspirierender Vortrag mit Film, Zukunftsbildern und den sieben Missionen — für Konferenzen, Events und Führungskräfte.',
    audience: 'Unternehmen, Verbände, Politik, Kultur',
    image: './assets/images/offers/keynote.webp',
  },
  {
    id: 'future-lab',
    title: 'Deutschland-2050-Future-Lab',
    description:
      'Intensivformat für Teams und Institutionen: Zukunft sehen, prüfen und konkrete nächste Schritte entwickeln.',
    audience: 'Städte, Regionen, Innovationslabore',
    image: './assets/images/offers/future-lab.webp',
  },
  {
    id: 'schul-workshop',
    title: 'Schul- & Jugend-Workshop',
    description:
      'Interaktive Module zu Neugier, KI und Zukunft — mit Bildern, Leitfragen und kreativen Übungen für junge Menschen.',
    audience: 'Schulen, Volkshochschulen, Jugendeinrichtungen',
    image: './assets/images/offers/schul-workshop.webp',
  },
  {
    id: 'ausstellung',
    title: 'Immersive Ausstellung',
    description:
      'Zukunftsbilder als Raumerlebnis — mit großformatigen Visuals, Film und Stationen zum Mitdenken und Diskutieren.',
    audience: 'Museen, Kulturzentren, Rathäuser, Messen',
    image: './assets/images/offers/ausstellung.webp',
  },
  {
    id: 'lokal-atlas',
    title: 'Lokaler Zukunftsatlas',
    description:
      'Die sieben Missionen für Ihre Stadt oder Region — mit lokalen Szenarien, Bildern und Beteiligungsformaten.',
    audience: 'Kommunen, Landkreise, Regionalverbände',
    image: './assets/images/offers/lokal-atlas.webp',
  },
  {
    id: 'unternehmen-workshop',
    title: 'Zukunftsworkshop für Teams',
    description:
      'Strategie, Innovation und Motivation in einem Format — mit Visual Storytelling für Unternehmen und Organisationen.',
    audience: 'Mittelstand, Konzerne, öffentliche Einrichtungen',
    image: './assets/images/offers/unternehmen-workshop.webp',
  },
  {
    id: 'visual-story',
    title: 'AI-Film & Visual Storytelling',
    description:
      'Individuelle Zukunftsvisuals, Filme und Präsentationen — wenn Ihr Projekt ein starkes Bild braucht.',
    audience: 'Marken, Kampagnen, Initiativen, Medien',
    image: './assets/images/offers/visual-story.webp',
  },
]
