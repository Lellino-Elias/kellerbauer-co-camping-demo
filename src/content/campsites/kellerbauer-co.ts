import type { CampsiteConfig } from "../types";

/**
 * Wohnmobil Stellplatz Kellerbauer — Altenmarkt im Pongau (Salzburg).
 * Kleiner, familiär geführter Stellplatz (Fam. Mooshammer) in ruhiger Bauernhoflage
 * am Waldrand, 4 km von der A10, mitten in Ski Amadé. Inhalte 100 % aus raw/digest.
 * Wenig Bildmaterial (6 platzeigene Fotos) → kompakte, ehrliche Komposition.
 */
const IMG = "/campsites/kellerbauer-co";

const kellerbauer: CampsiteConfig = {
  name: "Wohnmobil Stellplatz Kellerbauer",
  shortName: "Kellerbauer",
  slug: "kellerbauer-co",
  ort: "Altenmarkt im Pongau",
  region: "Salzburg",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Altenmarkt-Zauchensee · Ski Amadé · Salzburger Land",

  heroVariant: "center",

  claim: "Ruhig am Bauernhof — mitten in Ski Amadé",
  claimEmphasis: "mitten in Ski Amadé",
  intro:
    "Hier stellst du dein Wohnmobil in ruhiger Bauernhoflage am Waldrand ab — nur 4 km von der A10 und mitten im Skigebiet Ski Amadé. An- und Abreise sind rund um die Uhr möglich.",

  logo: { src: `${IMG}/logo-6304bcba04.png`, alt: "Wohnmobil Stellplatz Kellerbauer Logo" },

  statement: {
    text: "Der gratis Skibus hält direkt am Platz — und in der Hauptsaison bringt der Bäcker die frischen Semmeln bis ans Wohnmobil.",
    emphasis: "direkt am Platz",
  },

  pillars: [
    {
      title: "Bauernhof am Waldrand",
      text: "Der Platz liegt in einer kleinen Bauernhofsiedlung am Waldrand — abseits vom Durchzugsverkehr und doch nur wenige Minuten vom Ortszentrum Altenmarkt.",
      image: { src: `${IMG}/hero-845620a6cb.webp`, alt: "Luftaufnahme des Stellplatzes Kellerbauer in Bauernhoflage am Waldrand" },
    },
    {
      title: "Dachstein-Blick im Winter",
      text: "Mitten in der Bergwelt: Im Winter öffnet sich vom Stellplatz der Blick auf den verschneiten Dachstein — klare Luft, Stille, und das Skigebiet nur 1,5 km entfernt.",
      image: { src: `${IMG}/amenity-f240750165.webp`, alt: "Wohnmobil am Stellplatz Kellerbauer im tiefen Winter mit Blick auf den verschneiten Dachstein" },
    },
    {
      title: "Alles für Selbstversorger",
      text: "Frischwasser, Ver- und Entsorgung, WC, Gratis-WLAN, Waschmaschine und Trockner — und im Winter ein beheizter Schischuhtrockner.",
      image: { src: `${IMG}/gallery-0b63b7eb99.webp`, alt: "Serviceraum mit Waschmaschine, Trockner und Schischuhtrockner am Stellplatz Kellerbauer" },
    },
  ],

  usps: [
    "24 h An- & Abreise",
    "Skibus direkt am Platz",
    "Gratis-WLAN am ganzen Platz",
    "Waschmaschine & Trockner",
    "Bäckerservice in der Saison",
    "4 km zur A10",
  ],

  trust: {
    heading: "Klein, ruhig, persönlich geführt",
    headingEmphasis: "persönlich",
    intro:
      "Familie Mooshammer führt den Stellplatz selbst — viele Gäste kommen seit Jahren wieder. Geschätzt werden die Ruhe, die sauberen Anlagen und das Gefühl, hier wirklich willkommen zu sein.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-c66c08c2ca.webp`, alt: "Stellplatz Kellerbauer mit Wohnmobilen vor den Bergen im Sommer" },
  },

  // Kein eigener Camping-Feature-Block: nur 6 platzeigene Fotos, die in Hero/Pillars/
  // Aktivitäten ehrlich aufgehen. Die Ausstattung steht in den Pillars, USPs und im Booking.
  camping: {
    heading: "Service & Ausstattung",
    intro: "Alles, was Wohnmobil und Wohnwagen am Platz brauchen.",
    features: [],
  },

  aktivitaeten: {
    heading: "Ski im Winter, Berge im Sommer",
    intro:
      "Der gratis Skibus hält am Platz, die Skischaukel Altenmarkt-Radstadt ist 1,5 km entfernt. Im Sommer warten Wander- und Radwege entlang der Enns, Therme und Badeseen rundum.",
    items: [
      {
        title: "Ski Amadé direkt vor der Tür",
        text: "Der gratis Skibus hält direkt am Platz. Nur 1,5 km bis zur Skischaukel Altenmarkt-Radstadt — 7 km nach Flachau-Wagrain-St. Johann, 10 km bis Zauchensee-Flachauwinkl. Der beheizte Schischuhtrockner am Platz macht jeden Skitag leicht.",
        image: { src: `${IMG}/activity-3f1b401dd4.webp`, alt: "Bergstation der Skischaukel Altenmarkt-Radstadt mit Gondel und Skifahrern auf der Piste im Skigebiet Ski Amadé" },
      },
    ],
  },

  anreise: {
    heading: "Nur 4 km von der A10",
    modes: [
      { title: "Mit dem Auto", text: "A10 Tauern Autobahn bis Ausfahrt Altenmarkt (Nr. 63), dann Richtung Ortszentrum und über die Zauchenseestraße zum beschilderten Stellplatz." },
      { title: "Mit der Bahn", text: "Bahnhof Radstadt oder Altenmarkt im Pongau, von dort mit Bus oder Taxi — die letzten Kilometer sind ausgeschildert." },
      { title: "Mit dem Skibus", text: "In der Wintersaison hält der gratis Skibus direkt am Stellplatz — ins Skigebiet kommst du ganz ohne Auto." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro: "Sommer, Winter und Frühling am Stellplatz Kellerbauer.",
    tag: "Altenmarkt im Pongau",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "deinen Stellplatz",
    intro:
      "Wähle Zeitraum und Personenzahl — Familie Mooshammer meldet sich persönlich mit deiner Verfügbarkeit. Reservierung auch telefonisch möglich.",
    pricesArePlaceholder: false,
    priceNote:
      "24 h inkl. 2 Personen · jede weitere Person ab 3 Jahren € 4 · Strom € 3 / 24 h · Angaben ohne Gewähr, es gelten die am Platz ausgehängten Preise.",
    highlight: { title: "Rund um die Uhr", text: "An- und Abreise sind jederzeit möglich — auch spät in der Nacht." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (24 h)", perNight: 22, perExtraGuest: 4 },
    ],
  },

  kontakt: {
    tel: "+43 677 62312010",
    telHref: "tel:+4367762312010",
    mail: "stellplatz@kellerbauer.co.at",
    adresse: "Kellerdörfl 18 · 5541 Altenmarkt im Pongau · Salzburg",
    coords: { lat: 47.370304, lng: 13.429376 },
  },

  languages: ["DE"],

  nav: [
    { label: "Ski & Aktiv", href: "#aktivitaeten" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default kellerbauer;
