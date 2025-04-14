export interface CaseStudyType  {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  type: "design" | "art" | "print";
  description: string;
  image: string;
}

const caseStudies: CaseStudyType [] = [
  {
    slug: "majka",
    type: "design",
    title: "Majka karikatúra",
    subtitle: "rajz",
    date: "2022.05.31",
    description: "Egy különleges portré Majkáról, ahol a karakteres vonások karikatúraszerűen jelennek meg, játékos, mégis élethű stílusban.",
    image: "/references/art/majka.webp",
  },
  {
    slug: "marics",
    type: "design",
    title: "Marics rajz",
    subtitle: "rajz",
    date: "2022.06.05",
    description: "Egy fiatal előadó portréja, energikus és modern vonalvezetéssel, ami tükrözi az egyéniségét.",
    image: "/references/art/marics.webp",
  },
  {
    slug: "csalad",
    type: "design",
    title: "Családi illusztráció",
    subtitle: "rajz",
    date: "2022.06.12",
    description: "Egy szeretetteljes család karikatúrája, amely megragadja a kapcsolatok melegségét és dinamizmusát.",
    image: "/references/art/csalad.webp",
  },
  {
    slug: "fa",
    type: "design",
    title: "Művészi faábrázolás",
    subtitle: "grafika",
    date: "2022.06.20",
    description: "Egy természetközeli műalkotás, amely egy fa stilizált, mégis érzelmeket kiváltó ábrázolása.",
    image: "/references/art/fa.webp",
  },
  {
    slug: "mikrofon",
    type: "design",
    title: "Mikrofon illusztráció",
    subtitle: "rajz",
    date: "2022.06.28",
    description: "A zene és a hang vizuális megjelenítése egy mikrofonon keresztül, karakteres árnyékolással.",
    image: "/references/art/mikrofon.webp",
  },
  {
    slug: "wedding",
    type: "design",
    title: "Esküvői portré",
    subtitle: "karikatúra",
    date: "2022.07.01",
    description: "Egy meghitt pillanat megörökítése: menyasszony és vőlegény karikatúra formában.",
    image: "/references/art/wedding.webp",
  },
  {
    slug: "selfportraits",
    type: "design",
    title: "Önarckép gyűjtemény",
    subtitle: "karikatúra",
    date: "2022.07.10",
    description: "A művész saját magáról készült karikatúráinak válogatása – önreflexív és játékos rajzok.",
    image: "/references/art/selfportraits.webp",
  },
  {
    slug: "tilla",
    type: "design",
    title: "Tilla portré",
    subtitle: "rajz",
    date: "2022.07.18",
    description: "Egy népszerű műsorvezető karakteres arcvonásainak kiemelése karikatúraszerű stílusban.",
    image: "/references/art/tilla.webp",
  },
];

export default caseStudies;