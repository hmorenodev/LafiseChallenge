import React, { useEffect, useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { useStore } from '../store';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { Input } from '../Input/Input';
import { getAccountById } from '../Services/api'; 
import { useTranslation } from 'react-i18next';
import { styles } from './styles/TransferStyles';

type TransferFormData = {
  accountNumber: string;
  amount: string;
};

export function Transfer() {
  const router = useRouter();
  const { createTransfer } = useStore();
  const [balance, setBalance] = useState<number | null>(null); 
  const [loading, setLoading] = useState<boolean>(false); 
  const { t } = useTranslation();
  
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<TransferFormData>({
    defaultValues: {
      accountNumber: '',
      amount: '',
    },
  });

  // Observar valores del formulario en tiempo real
  const accountNumber = watch('accountNumber');
  const amount = watch('amount');

  // Verificar si el formulario es válido
  const isFormValid = accountNumber.length >= 8 && amount.length > 0;

  // Validar el monto antes de la transferencia
  const validateTransfer = async (data: TransferFormData) => {
    const numericAmount = parseFloat(data.amount);
    if (numericAmount <= 0) {
      setError('amount', { message: 'El monto debe ser mayor a 0' });
      return;
    }

    try {
      setLoading(true);
      const accountData = await getAccountById(1);
      setBalance(accountData.balance);

      if (numericAmount > accountData.balance) {
        setError('amount', { message: 'Saldo insuficiente' });
        return;
      }

      // Si todo está bien, ejecutar la transferencia
      router.push({
        pathname: '/TransferConfirmScreen',
        params: { accountNumber: data.accountNumber, amount: data.amount },
      });
    } catch (error) {
      console.error('Error al validar la cuenta:', error);
      Alert.alert('Error', 'No se pudo validar la cuenta. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.content}>
            <ThemedView style={styles.header}>
              <Pressable onPress={() => router.back()} style={styles.backButton}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
              </Pressable>
              <ThemedText style={styles.headerTitle}>{t('Transfer')}</ThemedText>
            </ThemedView>

            <ThemedText style={styles.mainQuestion}>{t('WhoSendMoney')}</ThemedText>

            <ThemedView style={styles.form}>
              <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.inputLabel}>{t('NumberAccount')}</ThemedText>
                <Controller
                  control={control}
                  rules={{ required: 'Este campo es obligatorio', minLength: 8 }}
                  name="accountNumber"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      onChangeText={onChange}
                      placeholder="N. de cuenta"
                      keyboardType="numeric"
                      error={errors.accountNumber}
                      style={styles.input}
                    />
                  )}
                />
              </ThemedView>

              <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.inputLabel}>{t('HowMuch')}</ThemedText>
                <Controller
                  control={control}
                  rules={{ required: 'Este campo es obligatorio' }}
                  name="amount"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ''))}
                      placeholder="C$500"
                      keyboardType="numeric"
                      error={errors.amount}
                      style={styles.input}
                    />
                  )}
                />
                {errors.amount && (
                  <ThemedText style={styles.errorText}>{errors.amount.message}</ThemedText>
                )}
              </ThemedView>
            </ThemedView>

            <Pressable
              style={[styles.submitButton, isFormValid && styles.submitButtonActive]}
              onPress={handleSubmit(validateTransfer)}
              disabled={!isFormValid || loading}
            >
              <ThemedText style={styles.submitButtonText}>
                {loading ? 'Procesando...' : 'Enviar'}
              </ThemedText>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Transfer;
