import axios from 'axios';
const baseUrl = 'http://localhost:3001';

//取得資料
export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (error) {
    console.error('[Get Todo failed]: ', error);
  }
};
//新增資料
export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axios.post(`${baseUrl}/todos`, { title, isDone });
    return res.data;
  } catch (error) {
    console.error('[Create Todo failed]: ', error);
  }
};
//修改資料
export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;

  try {
    const res = await axios.patch(`${baseUrl}/todos/${id}`, { title, isDone });
    return res.data;
  } catch (error) {
    console.error('[Patch Todo failed]: ', error);
  }
};
//刪除資料
export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Delete Todo failed]: ', error);
  }
};
