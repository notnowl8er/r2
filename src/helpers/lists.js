export const categories = [
  { id: 0, topic: "askreddit" },
  { id: 1, topic: "worldnews" },
  { id: 2, topic: "videos" },
  { id: 3, topic: "funny" },
  { id: 4, topic: "todayilearned" },
  { id: 5, topic: "nba" },
  { id: 6, topic: "gaming" },
  { id: 7, topic: "news" },
  { id: 8, topic: "gifs" },
  { id: 9, topic: "aww" },
  { id: 10, topic: "showerthoughts" },
  { id: 11, topic: "science" },
  { id: 12, topic: "politics" },
  { id: 13, topic: "pics" },
  { id: 14, topic: "warriors" },
  { id: 15, topic: "niners" },
  { id: 16, topic: "sports" },
  { id: 17, topic: "nfl" },
  { id: 18, topic: "sanjose" },
];

export const feed = [
  { id: 0, sort: "Home" },
  { id: 1, sort: "Popular" },
  { id: 2, sort: "All" },
];

export const sort = [
  { id: 0, sort: "Hot", apiCode: "hot" },
  { id: 1, sort: "New", apiCode: "new" },
  { id: 2, sort: "Top", apiCode: "top" },
  {
    id: 3,
    sort: [
      { id: 0, sort: "Now", apiCode: "hour" },
      { id: 1, sort: "Today", apiCode: "day" },
      { id: 2, sort: "This Week", apiCode: "week" },
      { id: 3, sort: "This Month", apiCode: "month" },
      { id: 4, sort: "This Year", apiCode: "year" },
      { id: 5, sort: "All Time", apiCode: "all" },
    ],
  },
];
