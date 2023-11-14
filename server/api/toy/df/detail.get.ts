import axios from "axios";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;
  const charId = getQuery<{ id: string; server: string }>(event);
  try {
    return Promise.all([
      // 캐릭터 기본 정보
      await axios
        .get<IDfCharInfo>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id,
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
      // 캐릭터 능력치 정보
      await axios
        .get<IDfCharStatusList>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/status",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return [response.data.buff, response.data.status];
        }),
      // 캐릭터 장착장비
      await axios
        .get<IDfCharEquipment>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/equip/equipment",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data.equipment;
        }),
      // 캐릭터 장착 아바타
      await axios
        .get<IDfCharAvatar>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/equip/avatar",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
      // 캐릭터 장착 크리쳐
      await axios
        .get<IDfCharCreature>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/equip/creature",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
      // 캐릭터 장착 휘장
      await axios
        .get<IDfCharFlag>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/equip/flag",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
      // 캐릭터 장착 탈리스만
      await axios
        .get<IDfCharTalisman>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/equip/talisman",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
      await axios
        .get<IDfCharBuffEquip>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/skill/buff/equip/equipment",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          let text : string = response.data.skill.buff.skillInfo.option.desc;
          const values : string[] = response.data.skill.buff.skillInfo.option.values;
          for(let i = 0; i < values.length; i++) {
            text = text.replace(`{value${i+1}}`, values[i]);
          }
          return response.data;
        }),
      await axios
        .get<IDfCharBuffAvatar>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/skill/buff/equip/avatar",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
      await axios
        .get<IDfCharBuffCreature>(
          config.df_url +
            "servers/" +
            charId.server +
            "/characters/" +
            charId.id +
            "/skill/buff/equip/creature",
          {
            method: "GET",
            params: {
              apikey: config.df_api,
            },
          }
        )
        .then((response) => {
          return response.data;
        }),
    ]).then((response) => {
      return response;
    });
  } catch (error) {
    return error;
  }
});
