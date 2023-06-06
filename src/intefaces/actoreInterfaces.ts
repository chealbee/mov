export interface IMiniBio {
  author: string;
  id: string;
  language: string;
  text: string;
  userId: string;
}
export interface ICtor {
  id: string;
  birthDate: string;
  birthPlace: string;
  image: { url: string; height: number; width: number };
  name: string;
  realName: string;
  miniBios: IMiniBio[];
}
