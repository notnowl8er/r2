export const redditAPI = async (subreddit, sort) => {
  try {
    const fetchReddit = await fetch(
      // .json?limit=100&after=
      // if top selected:
      // https://www.reddit.com/r/${subreddit}/${sort}/?t={sort.id===3}.json
      `https://www.reddit.com/r/${subreddit}/${sort}/.json`
    );
    const reddit = await fetchReddit.json();
    return reddit.data.children;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
