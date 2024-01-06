import axios from "axios";

interface IMapleKeySearch {
  ocid: string;
  date: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery<IMapleKeySearch>(event);
  const config = useRuntimeConfig();
  const ocid = query.ocid;
  const date = query.date;
  try {
    const data = await axios
      .get<IGetMapleInfo>(`${config.public.maple_url}/character/basic`, {
        method: "GET",
        headers: {
          "x-nxopen-api-key": config.public.maple_api?.toString() || "",
        },
        params: {
          ocid,
          date,
        },
      })
      .then((response) => {
        return response.data;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
});
