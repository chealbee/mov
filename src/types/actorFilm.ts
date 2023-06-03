export interface IActorFilm {
  category: string;
  id: string;
  characters: string[];
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  status: string;
  title: string;
  titleType: string;
  year?: 2022;
}
