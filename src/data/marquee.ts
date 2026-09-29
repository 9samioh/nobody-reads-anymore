export type MarqueeTile = {
  image: string;
  name: string;
  title: FormattedText[];
};

type FormattedText = {
  text: string;
  italic?: boolean;
};

export const marqueeTiles: MarqueeTile[] = [
  {
    image: "/assets/marquee/img-13.png",
    name: "India Ennenga",
    title: [{ text: "Writer, Editor, Actor" }],
  },
  {
    image: "/assets/marquee/img-2.png",
    name: "Cree Myles",
    title: [{ text: "@creemyles" }],
  },
  {
    image: "/assets/marquee/img.png",
    name: "Diana Silvers",
    title: [{ text: "Musician, Actor" }],
  },
  {
    image: "/assets/marquee/img-1.png",
    name: "Willa Bennett",
    title: [
      { text: "Editor-in-Chief, " },
      { text: "Cosmopolitan", italic: true },
      { text: " and " },
      { text: "Seventeen", italic: true },
    ],
  },
  {
    image: "/assets/marquee/img-3.png",
    name: "Jack Edwards",
    title: [{ text: "Founder of Inklings and Content Creator" }],
  },
  {
    image: "/assets/marquee/img-4.png",
    name: "Hunter Harris",
    title: [
      { text: "Author of " },
      { text: "Hung Up", italic: true },
      { text: " on Substack" },
    ],
  },
  {
    image: "/assets/marquee/img-5.png",
    name: "Clara Perlmutter",
    title: [{ text: "@tinyjewishgirl" }],
  },
  {
    image: "/assets/marquee/img-6.png",
    name: "Lucy Zhao",
    title: [{ text: "Cofounder, Pagebound" }],
  },
  {
    image: "/assets/marquee/img-7.png",
    name: "Zoe Dubno",
    title: [{ text: "Author" }],
  },
  {
    image: "/assets/marquee/img-8.png",
    name: "Sabrina Fuentes",
    title: [{ text: "Musician" }],
  },
  {
    image: "/assets/marquee/img-9.png",
    name: "Matthew Gasda",
    title: [{ text: "Playwright" }],
  },
  {
    image: "/assets/marquee/img-10.png",
    name: "Monica Quintanar",
    title: [{ text: "Model, Brand Marketing Coordinator" }],
  },
  {
    image: "/assets/marquee/img-11.png",
    name: "Bella M. Lucio",
    title: [{ text: "Stylist, Writer" }],
  },
  {
    image: "/assets/marquee/img-12.png",
    name: "Morgan Hamilton",
    title: [{ text: "Associate Editor, Alfred A. Knopf" }],
  },
];
