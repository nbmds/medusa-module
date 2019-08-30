import api from "@/libs/request";

export const test = (data: any) => {
  return api.post<{ test: "test" }>("/test", data);
};
