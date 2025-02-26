import axios from 'axios';

// Configuración base de Axios
const API_BASE_URL = 'http://localhost:5566'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Función genérica para manejar errores
const handleApiError = (error: any) => {
  console.error('Error en la API:', error?.response?.data || error.message);
  throw error;
};

// Función para obtener información de un usuario
export const getUserById = async (userId: number) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error)
    throw error;
  }
};

// Función para obtener información de una cuenta
export const getAccountById = async (accountId: number) => {
  try {
    const response = await api.get(`/accounts/${accountId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Función para obtener las transacciones de una cuenta
export const getAccountTransactions = async (accountId: number) => {
  try {
    const response = await api.get(`/accounts/${accountId}/transactions`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Función para realizar una transferencia
export const createTransaction = async (transactionData: {
  origin: string;
  destination: string;
  amount: { currency: string; value: number };
}) => {
  try {
    const response = await api.post(`/transactions`, transactionData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};


export default api;
