import axios from "axios";

interface IDfSearch {
  charName: string;
  selectOption: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery<IDfSearch>(event);
  const config = useRuntimeConfig();
  const name = query.charName;
  const server = query.selectOption;
  try {
    const {rows} = await axios.get<ISearchDfCharList>(
      config.public.df_url + "servers/" + server + "/characters",
      {
        method: "GET",
        params: {
          apikey: config.public.df_api,
          characterName: name,
          wordType: 'full',
          limit: 200,
        },
      }
    ).then((response) => {
      return response.data;
    });
    return rows;
  } catch (error) {
    console.log(error);
  }
});
