import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { FieldError } from 'react-hook-form';

interface InputProps extends Omit<TextInputProps, 'style'> {
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
}

export function Input({ error, style, ...props }: InputProps) {
  return (
    <View>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        <MaterialCommunityIcons name="pencil" size={20} color="#9CA3AF" />
      </View>
      {error && <Text style={styles.errorText}>Este campo es requerido</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
});
