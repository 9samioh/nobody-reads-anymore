export type FormattedText = {
  text: string;
  italic?: boolean;
};

export type TimelineItem = {
  year: number;
  title: string;
  quote: string;
  attribution: FormattedText[];
};

export const timelineData: TimelineItem[] = [
  {
    year: 1902,
    title: "Newspapers",
    quote:
      "I do not think there will be any novels or romances… in fifty or a hundred years from now. They will be supplanted altogether by the daily newspaper.",
    attribution: [
      { text: "— Jules Verne, " },
      { text: "as quoted in the Daily Mail", italic: true },
    ],
  },
  {
    year: 1913,
    title: "Silent films",
    quote:
      "Books will soon be obsolete in the public schools. Scholars will be instructed through the eye.",
    attribution: [
      { text: "— Thomas Edison, " },
      {
        text: "as quoted in The New York Dramatic Mirror",
        italic: true,
      },
    ],
  },
  {
    year: 1935,
    title: "Talkies",
    quote:
      "The novel and the poem may become extinct in 200 years, 100 years or in much less time… Radio and talking pictures have already displaced books in many homes, and television—near the threshold of American homes now—will injure the popularity of books.",
    attribution: [
      { text: "— Booth Tarkington, novelist & playwright, " },
      {
        text: "as quoted by the Associated Press",
        italic: true,
      },
    ],
  },
  {
    year: 1961,
    title: "Television",
    quote:
      "A whopping segment of the exploding new teen-age generation never really reads anything, unless forced to do so.",
    attribution: [
      { text: "— Richard L. Tobin, " },
      {
        text: `writing in the Saturday Review under the headline "Reading Is a Habit"`,
        italic: true,
      },
    ],
  },
  {
    year: 1972,
    title: "Electronic media",
    quote: "Books are becoming obsolete.",
    attribution: [
      { text: "— Marshall McLuhan, " },
      {
        text: "as quoted in The Los Angeles Times",
        italic: true,
      },
    ],
  },
  {
    year: 1989,
    title: "VCRs",
    quote:
      "Television is lulling us into nonchalance about language, books are being nudged aside by what they call video literature, and even our daily news is reduced to punchy items that must be entertaining and easy to read and, heaven help us, never, ever boring.",
    attribution: [
      { text: "— Jack Thomas, columnist, " },
      {
        text: `writing in The Boston Globe under the headline "The Powers of Words"`,
        italic: true,
      },
    ],
  },
  {
    year: 1991,
    title: "Video games",
    quote:
      "Bombarded by an ever more sophisticated array of electronic games... hypnotized by a gamut of television stations, taught in schools whose libraries are inadequate and teachers overwhelmed, generations of Americans are in danger of losing any taste for books or sense of their value. That at least is the view of many teachers and education experts.",
    attribution: [
      { text: "Roger Cohen, " },
      {
        text: `writing in The New York Times under the headline "The Lost Book Generation"`,
        italic: true,
      },
    ],
  },
  {
    year: 2005,
    title: "The internet",
    quote:
      "I'm feeling the woeful emotions of an old carriage maker as he watches the disappearance of his trade before the onrush of the automobile. The serious novel may soon be in danger of being adored with the same poignant concern we feel for endangered species.",
    attribution: [
      { text: "Norman Mailer, " },
      {
        text: "speaking at the 2005 National Book Awards Ceremony",
        italic: true,
      },
    ],
  },
  {
    year: 2008,
    title: "Smartphones",
    quote: "The fact is that people don't read anymore.",
    attribution: [
      { text: "Steve Jobs, " },
      {
        text: "as quoted in The New York Times",
        italic: true,
      },
    ],
  },
];
