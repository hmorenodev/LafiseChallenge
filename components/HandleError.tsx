import { TextInput, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { TextInputProps } from 'react-native';
import type { FieldError } from 'react-hook-form';

interface InputProps extends TextInputProps {
  error?: FieldError;
}

export function Input({ error, ...props }: InputProps) {
  return (
    <View>
      <View className="flex-row items-center border border-gray-300 rounded-lg p-3">
        <TextInput
          className="flex-1 text-base"
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        <MaterialCommunityIcons name="pencil" size={20} color="#9CA3AF" />
      </View>
      {error && (
        <Text className="text-red-500 text-sm mt-1">
          Este campo es requerido
        </Text>
      )}
    </View>
  );
}
