import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getUserById, getAccountById, getAccountTransactions } from '../Services/api';
import { useTranslation } from 'react-i18next';
import HomeScreen from '@/app/Home';
import { styles } from './styles/HomeStyles';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [account, setAccount] = useState<any>(null);
  const [transaction, setTransaction] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [accountLoading, setAccountLoading] = useState(true);
  const [transactionLoading, setTransactionLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUserById(1);
        setUser(userData);

        const accountId = userData?.products?.[0]?.id;
        if (accountId) {
          const accountData = await getAccountById(accountId);
          setAccount(accountData);

          const transactionsData = await getAccountTransactions(accountId);
          console.log("Respuesta completa de la API:", transactionsData);

          if (transactionsData && transactionsData.items?.length > 0) {
            setTransaction(transactionsData.items[0]); 
            console.log("Transacción extraída:", transactionsData.items[0]);
          } else {
            console.warn("No hay transacciones disponibles.");
          }
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
        setAccountLoading(false);
        setTransactionLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0A534B" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image source={require('@/assets/images/lafise.png')} style={styles.bankLogo} />
          <Text style={styles.userName}>{t('Hello')}, {user?.full_name || 'Usuario'}</Text>
          <Image source={{ uri: user?.profile_photo || 'https://art.pixilart.com/thumb/sr24096eacec5aws3.png' }} style={styles.userAvatar} />
        </View>
        <Text style={styles.productsTitle}>{t('Products')}</Text>
      </View>

      {/* Cuenta de Ahorro */}
      <View style={styles.accountCard}>
        <Text style={styles.accountType}>{t('Savings')}</Text>
        <Text style={styles.accountNumber}>{user?.products?.[0]?.id || '---'}</Text>
        <Text style={styles.balanceLabel}>{t('Balance')}</Text>
        <Text style={styles.balance}>
          {accountLoading ? 'Cargando...' : `NIO ${account?.balance?.toLocaleString() || '---'}`}
        </Text>
      </View>

          {/* Operaciones Rápidas */}
          <View style={styles.quickActionsCard}>
        <Text style={styles.sectionTitle}>{t('Quick')}</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/Transfer')}>
            <Ionicons name="swap-horizontal" size={24} color="#008CBA" />
            <Text style={styles.actionText}>{t('Transfer')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="card-outline" size={24} color="#FF8C00" />
            <Text style={styles.actionText}>{t('Pay')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="phone-portrait-outline" size={24} color="#4CAF50" />
            <Text style={styles.actionText}>{t('Recharge')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="cash-outline" size={24} color="#800080" />
            <Text style={styles.actionText}>{t('Card')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Última Transacción */}
      <View style={styles.transactionCard}>
        <Text style={styles.sectionTitle}>{t('Latest')}</Text>

        {transactionLoading ? (
          <ActivityIndicator size="small" color="#0A534B" />
        ) : transaction ? (
          <View style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Ionicons 
                name={transaction.transaction_type === 'Credit' ? 'arrow-down' : 'arrow-up'}
                size={24}
                color={transaction.transaction_type === 'Credit' ? '#4CAF50' : '#E53935'}
              />
            </View>

            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>
                {transaction.description || 'Sin descripción'}
              </Text>
              <Text style={styles.transactionSubtitle}>
                {transaction.bank_description || 'Banco'}
              </Text>
            </View>

            <Text style={[
              styles.transactionAmount, 
              transaction.transaction_type === 'Credit' ? styles.creditAmount : styles.debitAmount
            ]}>
              {`${transaction.amount.currency} ${transaction.amount.value.toLocaleString()}`}
            </Text>
          </View>
        ) : (
          <Text style={styles.noTransactions}>{t('NoTransacctions')}.</Text>
        )}
      </View>

      {/* Navegación inferior */}
      <View style={styles.bottomNav}>
        <Image source={require('@/assets/images/home.png')} style={styles.navIcon} />
        <Image source={require('@/assets/images/exchange.png')} style={styles.navIcon} />
        <Image source={require('@/assets/images/wallet.png')} style={styles.navIcon} />
      </View>
    </ScrollView>
  );
}
