import { ICtor } from "@/intefaces/actoreInterfaces";
import { baseHeaders, getACtorBio } from "@/utils/constants";
import axios from "axios";

export const ActorBio = {
  getActorBio: async (id: string) => {
    const res = await axios.get<ICtor>(getACtorBio, {
      params: {
        nconst: id,
      },
      headers: baseHeaders,
    });

    return res.data;
  },
};
