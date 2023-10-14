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

interface ISearchDf {
  server: string;
  character: string;
}

interface IDfServerList {
  id: number;
  name: string;
  value: string;
}