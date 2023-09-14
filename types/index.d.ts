interface IBoard {
  title: string;
  name: string;
  date: Date;
  tag?: string;
  content: string;
}
interface IBoardItems extends IBoard {
  id: number;
}