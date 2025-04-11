import axios from 'axios';
import { Transaction } from '../types/Transaction';

const API_URL = 'http://localhost:8000/api/transacoes?format=json';

export const getTransacoes = async (): Promise<Transaction[]> => {
  const response = await axios.get<Transaction[]>(API_URL);
  return response.data;
};

export const postTransacao = async (transaction: Transaction): Promise<Transaction> => {
  const response = await axios.post<Transaction>(API_URL, transaction);
  return response.data;
};
