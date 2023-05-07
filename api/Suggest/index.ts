import api from "..";

const getSuggestList = async (page: number) => {
  const res = await api.get(`/?page=${page}`);
  return res.data;
};

export default getSuggestList;
