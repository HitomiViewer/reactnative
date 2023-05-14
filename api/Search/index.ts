import api from "..";

const getSearchList = async (query: string, page: number = 1) => {
  const res = await api.get(
    `/search?query=${query}&page=${page}&language=korean`
  );
  return res.data;
};

export default getSearchList;
