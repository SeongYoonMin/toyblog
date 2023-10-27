import axios from 'axios'

interface IDfSearch {
  charName: string;
  selectOption: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery<IDfSearch>(event);
  const config = useRuntimeConfig();
  const name = query.charName;
  const server = query.selectOption;
  console.log(name);
  try {
    const {data} = await axios.get<ISearchDfChar>(config.public.df_url + "servers/" + server + "/characters",{
      method: "GET",
      params: {
        apikey: config.public.df_api,
        characterName: name,
      }
    });
    return data;
    // const { data: searchData } = await useApiFetch<ISearchDfChar>(
    //         config.public.df_url + "servers/" + searchSelect.value + "/characters",
    //         {
    //           method: "GET",
    //           query: {
    //             apikey: config.public.df_api,
    //             characterName: encodeURIComponent(searchValue.value),
    //           },
    //         }
    //       );
  } catch (error) {
    console.log(error);
  }
});
