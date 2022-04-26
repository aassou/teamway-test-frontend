import axiosInstance from '../axios';

export const addQuestion = (question) => axiosInstance.post(`/api/questions`, question);

export const putQuestion = (question) => axiosInstance.put(`/api/questions/${question.id}`, question);

export const patchQuestion = (question) => axiosInstance.patch(`/api/questions/${question.id}`, question);

export const getQuestion = (id) => axiosInstance.get(`/api/questions/${id}`);

export const getQuestions = () => axiosInstance.get(`/api/questions`);

export const deleteQuestion = (id) => axiosInstance.delete(`/api/questions/${id}`);