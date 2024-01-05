import axios from "axios";

interface IMapleKeySearch {
  name: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery<IMapleKeySearch>(event);
  const config = useRuntimeConfig();
  const name = query.name;
  try {
    const {ocid} = await axios
      .get(`${config.public.maple_url}/id`, {
        method: "GET",
        headers: {
          "x-nxopen-api-key": config.public.maple_api?.toString() || "",
        },
        params: {
          character_name: name,
        },
      })
      .then(({data}) => {
        return data
      });
      return ocid;
  } catch (error) {
    console.log(error);
  }
});
