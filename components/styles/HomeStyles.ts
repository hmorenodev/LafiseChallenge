import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      backgroundColor: '#0A534B',
      height: '40%',
      width: '100%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    headerTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bankLogo: {
      width: 30,
      height: 30,
    },
    userName: {
      color: '#FFF',
      fontSize: 18,
      flex: 1,
      marginLeft: 10,
    },
    userAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    productsTitle: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 50,
    },
    accountCard: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      marginTop: -50,
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
    quickActionsCard: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 20,
      margin: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    quickActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    actionButton: {
      alignItems: 'center',
    },
    actionText: {
      fontSize: 12,
      marginTop: 5,
    },
    transactionCard: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 20,
      margin: 10,
    },
    noTransactions: {
      textAlign: 'center',
      color: '#777',
      marginTop: 10,
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    transactionIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#E8F5E9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    transactionDetails: {
      flex: 1,
      marginLeft: 10,
    },
    transactionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    transactionSubtitle: {
      fontSize: 14,
      color: '#666',
    },
    transactionAmount: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    creditAmount: {
      color: '#4CAF50',
    },
    debitAmount: {
      color: '#E53935',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: '#FFF',
      borderTopWidth: 110,
      borderColor: '#DDD',
    },
    navIcon: {
      width: 30,
      height: 30,
    },
  });
  