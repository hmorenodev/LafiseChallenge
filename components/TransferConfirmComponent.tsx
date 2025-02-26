import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { getUserById } from '../Services/api'; 
import { useTranslation } from 'react-i18next';
import { styles } from './styles/TransferConfirmStyles';

export function TransferConfirm() {
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

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <ThemedText style={styles.title}>{t('ConfirmTransfer')}</ThemedText>
        </View>

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={require('@/assets/images/phone.png')} style={styles.image} />
          </View>

          <ThemedText style={styles.amount}>{t('Total')}</ThemedText>

          <View style={styles.currencyContainer}>
            <ThemedText style={styles.currency} adjustsFontSizeToFit={true} numberOfLines={1}>
              C${amount}
            </ThemedText>
          </View>

          <View style={styles.infoContainer}>
            <ThemedText style={styles.label}>{t('ToTheAccountNumber')}</ThemedText>
            <ThemedText style={styles.value}>{accountNumber}</ThemedText>
          </View>

          <View style={styles.infoContainer}>
            <ThemedText style={styles.label}>{t('AccountToUse')}</ThemedText>
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <ThemedText style={styles.value}>{userAccount}</ThemedText>
            )}
          </View>

          <Pressable style={styles.confirmButton} 
          onPress={() => 
            router.push({
              pathname: '/TransferSuccess',
              params: { accountNumber, amount },
            })}>
            <ThemedText style={styles.confirmButtonText}>{t('ConfirmTransfer')}</ThemedText>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}


export default TransferConfirm;
