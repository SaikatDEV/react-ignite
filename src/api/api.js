// https://api.rawg.io/api/games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=2023-02-29,2024-02-29&platforms=18,1,7

// BASE URL
const base_url = "https://api.rawg.io/api/";
const key = "a77e904e38434e63ad0cce0d0ac43e1f";

// Getting the date
const currentDate = (nYear = 0) => {
  const my_cd = new Date();
  const my_year = my_cd.getFullYear() + nYear;
  const my_month = my_cd.getMonth() + 1;
  const my_days = my_cd.getDate();
  if (my_month < 10 && my_days < 10) {
    return `${my_year}-0${my_month}-0${my_days}`;
  } else if (my_month < 10 && my_days > 10) {
    return `${my_year}-0${my_month}-${my_days}`;
  } else if (my_month > 10 && my_days < 10) {
    return `${my_year}-${my_month}-0${my_days}`;
  }
};
// Popular Games
const popular_games = `games?key=${key}&dates=${currentDate(
  -4
)},${currentDate()}&platforms=18,1,7`;
// console.log(`${base_url}${popular_games}`);

// upcoming Games
const upcoming_games = `games?key=${key}&dates=${currentDate(
  -4
)},${currentDate()}&platforms=18,1,7`;
// console.log(`${base_url}${upcoming_games}`);

// list of all Games
const all_games = `games?key=${key}`;
// console.log(`${base_url}games?key=${key}`);

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const allGamesURL = () => `${base_url}${all_games}`;
// GAME DETAIL with a param game_id which we dont know yet
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${key}`;
// Game Screenshots
export const gameScreenshotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${key}`;

// console.log(`${base_url}games/14/screenshots?key=${key}`);

// Steps to Build REDUX state:
// 1. Build API URL
// 2. Go to Actions/Create an Action js file > import > FETCH Data > Dispach
// 3. Go to Reducer > Add them in to reducer to update them
// 4. After complete creating Reducer, Hook it in the index.js in the reducers folder (So we can see them as state in redux tool also)
// 5. Retrieve the state and use in the components as below:
// step1: When we dispatch with loadDetail with/without param
// step2: It will send a payload with what we fetch in the URL
