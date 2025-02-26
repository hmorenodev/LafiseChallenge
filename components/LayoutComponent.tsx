import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="transfer" />
        <Stack.Screen name="transfer/confirm" />
        <Stack.Screen name="transfer/success" />
      </Stack>
    </>
  );
}
