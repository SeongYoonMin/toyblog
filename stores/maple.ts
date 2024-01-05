import { defineStore } from 'pinia'

interface getOcid {
  ocid: string;
}

export const useMapleStore = defineStore('maple', {
  state: () => ({ maple_key: "", }),
  actions: {
    async setMapleKey(id: string) {
      try {
        const {data} = await useApiFetch<getOcid>(
          "/api/toy/maple/key",
          {
            method: "GET",
            query: {
              name: id
            },
          }
        );
        this.maple_key = data.value?.toString() || "";

      } catch (error) {
        
      }
    },
  },
})