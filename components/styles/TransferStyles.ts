import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 12,
    color: '#000',
  },
  mainQuestion: {
    fontSize: 18,
    marginBottom: 24,
    color: '#000',
  },
  form: {
    gap: 24,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    gap: 8,
    backgroundColor: '#FFFFFF',
  },
  inputLabel: {
    color: '#000',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonActive: {
    backgroundColor: '#4CAF50',
  },
  submitButtonText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#000',
  },
});
