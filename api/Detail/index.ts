import api from "..";

const getDetail = async (id: number) => {
  const res = await api.get(`/detail/${id}`);
  return res.data;
};

export default getDetail;
