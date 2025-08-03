import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    console.log('login')
    await login();
    router.replace('/(tabs)');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;