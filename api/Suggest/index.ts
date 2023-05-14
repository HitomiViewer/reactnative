import api from "..";

const getSuggestList = async (
  page: number = 1,
  language: string = "korean"
) => {
  const res = await api.get(`/?page=${page}&language=${language}`);
  return res.data;
};

export default getSuggestList;
