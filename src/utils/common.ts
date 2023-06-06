export const getRandom = (max: number) => Math.floor(Math.random() * max);

export const getIdFromKey = (str: string) => str.split("/")[2];

export const convertDuration = (total: number) => {
  const minutes = total % 60;
  const hours = Math.floor(total / 60);

  return `${hours}h ${minutes}m`;
};

export const getRandomFilm = (data: string[]) =>
  data[getRandom(data.length)].split("/")[2];
