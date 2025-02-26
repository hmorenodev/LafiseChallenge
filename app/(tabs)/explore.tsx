import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Contenido desplazable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/lafise.png')}
            style={styles.bankLogo}
          />
          <Text style={styles.userName}>Hola, Josué</Text>
          <Image
            source={require('@/assets/images/user.jpg')}
            style={styles.userAvatar}
          />
        </View>

        {/* Mis productos */}
        <Text style={styles.productsTitle}>Mis productos</Text>

        {/* Card de cuenta */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.accountType}>Cuenta de ahorro</Text>
            <TouchableOpacity>
              <Ionicons name="send-outline" size={20} color="green" />
            </TouchableOpacity>
          </View>
          <Text style={styles.accountNumber}>1134948394</Text>
          <Text style={styles.balanceLabel}>Saldo disponible</Text>
          <Text style={styles.balance}>NIO 7,500.00</Text>

          {/* Operaciones rápidas */}
          <Text style={styles.sectionTitle}>Operaciones Rápidas</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('./transfer')}
            >
              <Ionicons name="swap-horizontal" size={24} color="#008CBA" />
              <Text style={styles.actionText}>Transferir Dinero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="card-outline" size={24} color="#FF8C00" />
              <Text style={styles.actionText}>Pagar Servicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                color="#4CAF50"
              />
              <Text style={styles.actionText}>Recargar celular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="cash-outline" size={24} color="#800080" />
              <Text style={styles.actionText}>Retiro sin tarjeta</Text>
            </TouchableOpacity>
          </View>

          {/* Última transacción */}
          <View style={styles.transactionSection}>
            <Ionicons
              name="arrow-down-circle-outline"
              size={24}
              color="green"
            />
            <View>
              <Text style={styles.transactionTitle}>Paga quincenal</Text>
              <Text style={styles.transactionSubtitle}>Banco</Text>
            </View>
            <Text style={styles.transactionAmount}>C$7,500.00</Text>
          </View>
        </View>
      </ScrollView>

      {/* Barra de navegación fija al fondo */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/home.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/exchange.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/wallet.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#0A534B',
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  bankLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  userName: {
    color: '#FFF',
    fontSize: 18,
    flex: 1,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  productsTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  accountCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountNumber: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  balanceLabel: {
    fontSize: 12,
    color: '#777',
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    marginTop: 5,
  },
  transactionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 'auto',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    padding: 0,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});
