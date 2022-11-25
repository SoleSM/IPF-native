
import { NativeBaseProvider } from 'native-base';
import useSession from './src/hooks/useSession';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from 'react';
import { Login } from './src/views/Login';
import { Rooter } from './src/components/navigator';

const Stack = createNativeStackNavigator();

export default function App() {

  const [initial, setInitial] = useState('')
  const { usuario } = useSession();

  useEffect(() => {
    usuario !== null
      ? setInitial('Logueado')
      : setInitial('Login')
  }, [usuario])

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initial}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Logueado" component={Rooter} 
          options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
