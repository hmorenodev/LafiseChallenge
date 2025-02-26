import { SafeAreaView, StyleSheet } from 'react-native';
import Home from '@/components/HomeComponent';
import '@/i18n'; // Importamos i18n para habilitar las traducciones

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
