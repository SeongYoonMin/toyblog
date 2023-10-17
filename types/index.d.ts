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
interface ISearchDfChar {
  rows: { 
    serverId: string;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    fame: number;
  }[]
}