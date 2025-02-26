import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getUserById } from '../Services/api'; 
import { useTranslation } from 'react-i18next';
import { styles } from './styles/TransferSuccessStyles';

export function TransferSuccess() {
  const router = useRouter();
  const { accountNumber, amount } = useLocalSearchParams(); 
  const [userAccount, setUserAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchUserAccount() {
      try {
        const userData = await getUserById(1);
        const accountId = userData?.products?.[0]?.id || '---';
        setUserAccount(accountId);
      } catch (error) {
        console.error('Error al obtener la cuenta del usuario:', error);
        setUserAccount('Error');
      } finally {
        setLoading(false);
      }
    }
    fetchUserAccount();
  }, []);

  // Obtener fecha y hora actual en formato legible
  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Imagen de éxito */}
      <Image source={require('@/assets/images/success.jpg')} style={styles.successIcon} />

      {/* Mensaje de éxito */}
      <ThemedText style={styles.title}>{t('Succesfully')}</ThemedText>
      <ThemedText style={styles.date}>{getFormattedDate()}</ThemedText>

      {/* Línea divisoria superior */}
      <View style={styles.divider} />

      {/* Resumen del envío */}
      <ThemedView style={styles.summaryContainer}>
        <ThemedText style={styles.summaryTitle}>{t('Summary')}</ThemedText>

        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>{t('TotalTransfered')}</ThemedText>
          <ThemedText style={styles.value}>C${amount}</ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>{t('ToTheAccountNumber')}</ThemedText>
          <ThemedText style={styles.value}>{accountNumber}</ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>{t('AccountUsed')}</ThemedText>
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <ThemedText style={styles.value}>{userAccount}</ThemedText>
          )}
        </View>
      </ThemedView>

      {/* Línea divisoria inferior */}
      <View style={styles.divider} />

      {/* Botón para volver al inicio */}
      <Pressable style={styles.button} onPress={() => router.push('/Home')}>
        <ThemedText style={styles.buttonText}>{t('Back to Home')}</ThemedText>
      </Pressable>
    </SafeAreaView>
  );
}


export default TransferSuccess;
