import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    successIcon: {
      width: 80,
      height: 80,
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 4,
      color: '#000',
      textAlign: 'center',
    },
    date: {
      fontSize: 14,
      color: '#000',
      marginBottom: 24,
      textAlign: 'center',
    },
    divider: {
      height: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      width: '90%',
      alignSelf: 'center',
      marginVertical: 12,
    },
    summaryContainer: {
      width: '100%',
      backgroundColor: '#fff',
      paddingVertical: 10,
      borderRadius: 0,
    },
    summaryTitle: {
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 16,
      textAlign: 'center',
      color: '#000',
    },
    infoRow: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      color: '#000',
      textAlign: 'center',
    },
    value: {
      fontSize: 16,
      fontWeight: '700',
      color: '#000',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#027A48',
      paddingVertical: 16,
      borderRadius: 50,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });