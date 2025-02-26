import { getUserById } from './Services/api';

const testApi = async () => {
  try {
    const user = await getUserById(1);
    console.log('Usuario obtenido:', user);
  } catch (error) {
    console.error('Error en la prueba de API:', error);
  }
};

testApi();
