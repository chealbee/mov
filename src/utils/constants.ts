const baseUrl = "https://imdb8.p.rapidapi.com";

export const APIKEY = "23bc164f50msh9a0d90c41f7694dp14926fjsnd8da8d3f64a9";
export const APIHOST = "imdb8.p.rapidapi.com";

export const getDetails = baseUrl + "/title/get-details";
export const getOvervives = baseUrl + "/title/get-overview-details";
export const topCredits = baseUrl + "/title/get-full-credits";
export const moviesByGenre = baseUrl + "/title/v2/get-popular-movies-by-genre";
export const getUserReviews = baseUrl + "/title/get-user-reviews";
export const getACtorBio = baseUrl + "/actors/get-bio";
export const getAllFilmography = baseUrl + "/actors/get-all-filmography";
export const gatTopRatedMovies = baseUrl + "/title/get-top-rated-movies";
export const findFilmByName = baseUrl + "/title/v2/find";
export const baseHeaders = {
  "X-RapidAPI-Key": APIKEY,
  "X-RapidAPI-Host": APIHOST,
};
