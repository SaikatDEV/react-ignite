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

// Steps:
// 1. Build API
// 2. Go to Actions > import > FETCH Data > Dispach
// 3. Go to Reducer > Add them in to reducer to update them
