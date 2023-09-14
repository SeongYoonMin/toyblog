interface IBoard {
  title: string;
  name: string;
  date: string;
  tag?: string;
  content: string;
}
interface IBoardItems extends IBoard {
  id: number;
}