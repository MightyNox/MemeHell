export interface Meme {
  id: string;
  type: string;
  title: string;
  tags: string[];
  author: string;
  rating: {
    value: number;
    voted: string[];
  };
  date: Date;
}
