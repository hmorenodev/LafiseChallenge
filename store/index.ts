import { create } from 'zustand';
import { apiService, type UserInfo, type Account } from '../Services/api';

interface AccountState {
  user: UserInfo | null;
  account: Account | null;
  loading: boolean;
  error: string | null;
  fetchUserInfo: (userId: number) => Promise<void>;
  fetchAccount: (accountId: string) => Promise<void>;
  createTransfer: (destination: string, amount: number) => Promise<void>;
}

export const useStore = create<AccountState>((set, get) => ({
  user: null,
  account: null,
  loading: false,
  error: null,

  fetchUserInfo: async (userId) => {
    try {
      set({ loading: true, error: null });
      const user = await apiService.getUserInfo(userId);
      set({ user });
      
      if (user.products[0]?.id) {
        await get().fetchAccount(user.products[0].id);
      }
    } catch (error) {
      set({ error: 'Error al cargar información del usuario' });
    } finally {
      set({ loading: false });
    }
  },

  fetchAccount: async (accountId) => {
    try {
      set({ loading: true, error: null });
      const account = await apiService.getAccount(accountId);
      set({ account });
    } catch (error) {
      set({ error: 'Error al cargar información de la cuenta' });
    } finally {
      set({ loading: false });
    }
  },

  createTransfer: async (destination, amount) => {
    try {
      set({ loading: true, error: null });
      const { account } = get();
      
      if (!account) throw new Error('No hay cuenta seleccionada');

      await apiService.createTransaction({
        origin: account.account_number.toString(),
        destination,
        amount: {
          currency: account.currency,
          value: amount
        }
      });

      await get().fetchAccount(account.account_number.toString());
    } catch (error) {
      set({ error: 'Error al realizar la transferencia' });
      throw error;
    } finally {
      set({ loading: false });
    }
  }
}));