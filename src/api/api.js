// BASE URL
const base_url = "https://api.rawg.io/api/";

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
const popular_games = `games?dates=${currentDate(
  -1
)},${currentDate()}&ordering=-rating&paze_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());
