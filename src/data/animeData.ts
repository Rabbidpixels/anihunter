export interface AnimeData {
  id: string;
  title: string;
  category: string;
  clues: {
    genre: string;
    year: number;
    studio: string;
    episodes: number;
    rating: string;
    demographic: string;
    synopsis: string;
    protagonist: string;
  };
}

// Categories for daily rotation
export const categories = [
  "Classic",
  "Action",
  "Romance",
  "Sci-Fi",
  "Mystery",
  "Comedy",
  "Fantasy",
  "Psychological",
  "Sports",
  "Slice of Life",
] as const;

export type Category = (typeof categories)[number];

// Daily anime puzzles organized by category
export const animePuzzles: AnimeData[] = [
  // Classic
  {
    id: "1",
    title: "COWBOY BEBOP",
    category: "Classic",
    clues: {
      genre: "Sci-Fi / Action",
      year: 1998,
      studio: "Sunrise",
      episodes: 26,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "Bounty hunters travel through space catching criminals",
      protagonist: "A laid-back ex-hitman haunted by his past",
    },
  },
  {
    id: "2",
    title: "NEON GENESIS EVANGELION",
    category: "Classic",
    clues: {
      genre: "Mecha / Psychological",
      year: 1995,
      studio: "Gainax",
      episodes: 26,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "Teenagers pilot giant bio-mechs to fight mysterious beings",
      protagonist: "A reluctant 14-year-old with abandonment issues",
    },
  },
  {
    id: "3",
    title: "AKIRA",
    category: "Classic",
    clues: {
      genre: "Sci-Fi / Action",
      year: 1988,
      studio: "TMS Entertainment",
      episodes: 1,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A biker gang member gains psychic powers in post-apocalyptic Tokyo",
      protagonist: "A delinquent who discovers his friend's terrifying transformation",
    },
  },
  // Action
  {
    id: "4",
    title: "ATTACK ON TITAN",
    category: "Action",
    clues: {
      genre: "Action / Dark Fantasy",
      year: 2013,
      studio: "Wit Studio / MAPPA",
      episodes: 87,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "Humanity fights for survival against giant humanoid creatures",
      protagonist: "A vengeful boy who witnessed his mother's death",
    },
  },
  {
    id: "5",
    title: "FULLMETAL ALCHEMIST",
    category: "Action",
    clues: {
      genre: "Action / Adventure",
      year: 2009,
      studio: "Bones",
      episodes: 64,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "Two brothers seek the Philosopher's Stone to restore their bodies",
      protagonist: "A young state alchemist with automail limbs",
    },
  },
  {
    id: "6",
    title: "DEMON SLAYER",
    category: "Action",
    clues: {
      genre: "Action / Supernatural",
      year: 2019,
      studio: "ufotable",
      episodes: 44,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "A boy joins a demon hunting corps to avenge his family",
      protagonist: "A kind-hearted boy with an enhanced sense of smell",
    },
  },
  {
    id: "7",
    title: "JUJUTSU KAISEN",
    category: "Action",
    clues: {
      genre: "Action / Supernatural",
      year: 2020,
      studio: "MAPPA",
      episodes: 47,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "A student swallows a cursed finger and joins a secret society",
      protagonist: "An athletic teen who becomes host to the King of Curses",
    },
  },
  // Psychological
  {
    id: "8",
    title: "DEATH NOTE",
    category: "Psychological",
    clues: {
      genre: "Psychological Thriller",
      year: 2006,
      studio: "Madhouse",
      episodes: 37,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "A notebook that kills anyone whose name is written in it",
      protagonist: "A genius high school student with a god complex",
    },
  },
  {
    id: "9",
    title: "MONSTER",
    category: "Psychological",
    clues: {
      genre: "Psychological Thriller",
      year: 2004,
      studio: "Madhouse",
      episodes: 74,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A surgeon hunts down a patient he saved who became a serial killer",
      protagonist: "A Japanese neurosurgeon working in Germany",
    },
  },
  {
    id: "10",
    title: "PSYCHO-PASS",
    category: "Psychological",
    clues: {
      genre: "Sci-Fi / Thriller",
      year: 2012,
      studio: "Production I.G",
      episodes: 41,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "In a future society, a system judges citizens' mental states for crimes",
      protagonist: "A new inspector questioning the justice system",
    },
  },
  // Sci-Fi
  {
    id: "11",
    title: "STEINS;GATE",
    category: "Sci-Fi",
    clues: {
      genre: "Sci-Fi / Thriller",
      year: 2011,
      studio: "White Fox",
      episodes: 24,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A group accidentally invents time travel via microwave",
      protagonist: "A self-proclaimed mad scientist",
    },
  },
  {
    id: "12",
    title: "CODE GEASS",
    category: "Sci-Fi",
    clues: {
      genre: "Mecha / Thriller",
      year: 2006,
      studio: "Sunrise",
      episodes: 50,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "An exiled prince gains the power to command anyone",
      protagonist: "A strategic genius seeking revenge against an empire",
    },
  },
  {
    id: "13",
    title: "GHOST IN THE SHELL",
    category: "Sci-Fi",
    clues: {
      genre: "Sci-Fi / Action",
      year: 2002,
      studio: "Production I.G",
      episodes: 52,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A cyborg policewoman investigates cyber crimes in a futuristic world",
      protagonist: "A fully prosthetic agent questioning her humanity",
    },
  },
  // Comedy
  {
    id: "14",
    title: "ONE PUNCH MAN",
    category: "Comedy",
    clues: {
      genre: "Action / Comedy",
      year: 2015,
      studio: "Madhouse",
      episodes: 24,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A hero so powerful he defeats enemies with a single blow",
      protagonist: "A bald, unassuming man seeking a worthy opponent",
    },
  },
  {
    id: "15",
    title: "KONOSUBA",
    category: "Comedy",
    clues: {
      genre: "Isekai / Comedy",
      year: 2016,
      studio: "Studio Deen",
      episodes: 20,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A boy reincarnates in a fantasy world with useless party members",
      protagonist: "A NEET who died in an embarrassing way",
    },
  },
  {
    id: "16",
    title: "GINTAMA",
    category: "Comedy",
    clues: {
      genre: "Action / Comedy",
      year: 2006,
      studio: "Sunrise",
      episodes: 367,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A samurai does odd jobs in an alien-invaded Edo Japan",
      protagonist: "A lazy silver-haired man with a wooden sword",
    },
  },
  // Romance
  {
    id: "17",
    title: "YOUR LIE IN APRIL",
    category: "Romance",
    clues: {
      genre: "Romance / Drama",
      year: 2014,
      studio: "A-1 Pictures",
      episodes: 22,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A pianist who can't hear his own playing meets a free-spirited violinist",
      protagonist: "A former piano prodigy haunted by his mother's death",
    },
  },
  {
    id: "18",
    title: "TORADORA",
    category: "Romance",
    clues: {
      genre: "Romance / Comedy",
      year: 2008,
      studio: "J.C.Staff",
      episodes: 25,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "Two mismatched students team up to help each other confess to their crushes",
      protagonist: "A gentle boy with an intimidating face",
    },
  },
  {
    id: "19",
    title: "CLANNAD",
    category: "Romance",
    clues: {
      genre: "Romance / Drama",
      year: 2007,
      studio: "Kyoto Animation",
      episodes: 47,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A delinquent helps a sickly girl revive her school's drama club",
      protagonist: "A cynical high schooler who lost his passion for life",
    },
  },
  // Fantasy
  {
    id: "20",
    title: "MADE IN ABYSS",
    category: "Fantasy",
    clues: {
      genre: "Fantasy / Adventure",
      year: 2017,
      studio: "Kinema Citrus",
      episodes: 25,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "An orphan descends into a mysterious chasm to find her mother",
      protagonist: "A young cave raider girl with unwavering determination",
    },
  },
  {
    id: "21",
    title: "MUSHOKU TENSEI",
    category: "Fantasy",
    clues: {
      genre: "Isekai / Fantasy",
      year: 2021,
      studio: "Studio Bind",
      episodes: 35,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A NEET is reborn in a magical world and decides to live without regrets",
      protagonist: "A former shut-in reincarnated as a magical prodigy",
    },
  },
  {
    id: "22",
    title: "RE:ZERO",
    category: "Fantasy",
    clues: {
      genre: "Isekai / Psychological",
      year: 2016,
      studio: "White Fox",
      episodes: 50,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A boy gets transported to a fantasy world and discovers he can return from death",
      protagonist: "A tracksuit-wearing teen who suffers endlessly",
    },
  },
  // Mystery
  {
    id: "23",
    title: "ERASED",
    category: "Mystery",
    clues: {
      genre: "Mystery / Thriller",
      year: 2016,
      studio: "A-1 Pictures",
      episodes: 12,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A man travels back in time to prevent a series of kidnappings",
      protagonist: "A struggling manga artist with the power to rewind time",
    },
  },
  {
    id: "24",
    title: "THE PROMISED NEVERLAND",
    category: "Mystery",
    clues: {
      genre: "Mystery / Horror",
      year: 2019,
      studio: "CloverWorks",
      episodes: 23,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "Orphans discover the dark secret of their idyllic home",
      protagonist: "A genius girl planning an impossible escape",
    },
  },
  {
    id: "25",
    title: "ODD TAXI",
    category: "Mystery",
    clues: {
      genre: "Mystery / Drama",
      year: 2021,
      studio: "OLM / P.I.C.S.",
      episodes: 13,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A taxi driver gets entangled in a missing girl case",
      protagonist: "A walrus cabbie with a sharp tongue and keen observations",
    },
  },
  // Sports
  {
    id: "26",
    title: "HAIKYUU",
    category: "Sports",
    clues: {
      genre: "Sports / Drama",
      year: 2014,
      studio: "Production I.G",
      episodes: 85,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A short player dreams of becoming a volleyball ace",
      protagonist: "A tiny boy with incredible jumping power",
    },
  },
  {
    id: "27",
    title: "SLAM DUNK",
    category: "Sports",
    clues: {
      genre: "Sports / Comedy",
      year: 1993,
      studio: "Toei Animation",
      episodes: 101,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A delinquent joins the basketball team to impress a girl",
      protagonist: "A red-haired troublemaker with natural athletic ability",
    },
  },
  {
    id: "28",
    title: "BLUE LOCK",
    category: "Sports",
    clues: {
      genre: "Sports / Drama",
      year: 2022,
      studio: "8bit",
      episodes: 24,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "300 strikers compete in a ruthless program to create the world's best",
      protagonist: "A striker who lacks the ego to be selfish",
    },
  },
  // Slice of Life
  {
    id: "29",
    title: "VIOLET EVERGARDEN",
    category: "Slice of Life",
    clues: {
      genre: "Slice of Life / Drama",
      year: 2018,
      studio: "Kyoto Animation",
      episodes: 13,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A former child soldier learns to understand human emotions through letters",
      protagonist: "A mechanical-armed girl searching for the meaning of love",
    },
  },
  {
    id: "30",
    title: "A SILENT VOICE",
    category: "Slice of Life",
    clues: {
      genre: "Drama / Romance",
      year: 2016,
      studio: "Kyoto Animation",
      episodes: 1,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A former bully seeks redemption by reconnecting with his deaf victim",
      protagonist: "A suicidal teen trying to atone for his past cruelty",
    },
  },
  {
    id: "31",
    title: "MARCH COMES IN LIKE A LION",
    category: "Slice of Life",
    clues: {
      genre: "Slice of Life / Drama",
      year: 2016,
      studio: "Shaft",
      episodes: 44,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "A young professional shogi player struggles with depression and loneliness",
      protagonist: "A teenage prodigy who finds warmth in an adopted family",
    },
  },
  // More diverse picks
  {
    id: "32",
    title: "CHAINSAW MAN",
    category: "Action",
    clues: {
      genre: "Action / Horror",
      year: 2022,
      studio: "MAPPA",
      episodes: 12,
      rating: "R - 17+",
      demographic: "Shounen",
      synopsis: "A boy merges with his chainsaw devil pet to hunt devils",
      protagonist: "A poor teen who just wants a normal life with his crush",
    },
  },
  {
    id: "33",
    title: "SPY X FAMILY",
    category: "Comedy",
    clues: {
      genre: "Action / Comedy",
      year: 2022,
      studio: "Wit Studio / CloverWorks",
      episodes: 37,
      rating: "PG-13",
      demographic: "Shounen",
      synopsis: "A spy creates a fake family, unaware his wife is an assassin and daughter is telepathic",
      protagonist: "A master spy who adopts a mind-reading child",
    },
  },
  {
    id: "34",
    title: "MOB PSYCHO 100",
    category: "Comedy",
    clues: {
      genre: "Action / Comedy",
      year: 2016,
      studio: "Bones",
      episodes: 37,
      rating: "PG-13",
      demographic: "Seinen",
      synopsis: "An overpowered psychic middle schooler just wants to be normal",
      protagonist: "An emotionally repressed boy working for a con artist",
    },
  },
  {
    id: "35",
    title: "VINLAND SAGA",
    category: "Action",
    clues: {
      genre: "Action / Historical",
      year: 2019,
      studio: "Wit Studio / MAPPA",
      episodes: 48,
      rating: "R - 17+",
      demographic: "Seinen",
      synopsis: "A young Viking seeks revenge against his father's killer",
      protagonist: "A skilled warrior haunted by violence and seeking true strength",
    },
  },
];

/**
 * Simple deterministic hash function for a date string
 * Returns consistent results for the same input across all users
 */
const hashDateString = (dateStr: string): number => {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

/**
 * Get today's date string in YYYY-MM-DD format
 */
export const getTodayString = (): string => {
  return new Date().toISOString().split("T")[0];
};

/**
 * Get puzzle for a specific date (deterministic selection)
 */
export const getPuzzleForDate = (dateStr: string): AnimeData => {
  const hash = hashDateString(dateStr);
  const puzzleIndex = hash % animePuzzles.length;
  return animePuzzles[puzzleIndex];
};

/**
 * Get today's puzzle based on current date
 * Uses YYYY-MM-DD format for deterministic selection
 */
export const getTodaysPuzzle = (): AnimeData => {
  return getPuzzleForDate(getTodayString());
};

/**
 * Get category for a specific date (deterministic selection)
 * Categories rotate independently of puzzles
 */
export const getCategoryForDate = (dateStr: string): Category => {
  // Use a different hash seed for category rotation
  const hash = hashDateString("category-" + dateStr);
  const categoryIndex = hash % categories.length;
  return categories[categoryIndex];
};

/**
 * Get today's category
 */
export const getTodaysCategory = (): Category => {
  return getCategoryForDate(getTodayString());
};

// Clue reveal order
export const clueOrder: (keyof AnimeData["clues"])[] = [
  "genre",
  "year",
  "studio",
  "episodes",
  "rating",
  "demographic",
  "synopsis",
  "protagonist",
];

export const clueLabels: Record<keyof AnimeData["clues"], string> = {
  genre: "Genre",
  year: "Year Aired",
  studio: "Studio",
  episodes: "Episodes",
  rating: "Rating",
  demographic: "Demographic",
  synopsis: "Plot Hint",
  protagonist: "Protagonist",
};
