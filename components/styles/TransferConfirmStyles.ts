import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    backButton: {
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    content: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#fff',
    },
    imageContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#E5F4FF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    image: {
      width: 40,
      height: 40,
    },
    amount: {
      fontSize: 16,
      color: '#6B7280',
      marginBottom: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    currencyContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 24,
      minHeight: 40,
      justifyContent: 'center',
    },
    currency: {
      fontSize: 32,
      paddingVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',
      flexShrink: 1,
      flexWrap: 'wrap',
      color: 'black',
    },
    infoContainer: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
      paddingVertical: 8,
    },
    label: {
      fontSize: 14,
      color: '#6B7280',
      fontWeight: 'bold',
    },
    value: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.6)',
    },
    confirmButton: {
      backgroundColor: '#027A48',
      paddingVertical: 16,
      borderRadius: 12,
      width: '100%',
      marginTop: 24,
    },
    confirmButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });