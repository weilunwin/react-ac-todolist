import axios from 'axios';
const baseUrl = 'https://todo-list.alphacamp.io/api';
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  },
);

//取得資料
export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/todos`);
    return res.data.data;
  } catch (error) {
    console.error('[Get Todo failed]: ', error);
  }
};
//新增資料
export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axiosInstance.post(`${baseUrl}/todos`, { title, isDone });
    return res.data;
  } catch (error) {
    console.error('[Create Todo failed]: ', error);
  }
};
//修改資料
export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;

  try {
    const res = await axiosInstance.patch(`${baseUrl}/todos/${id}`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[Patch Todo failed]: ', error);
  }
};
//刪除資料
export const deleteTodo = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Delete Todo failed]: ', error);
  }
};
