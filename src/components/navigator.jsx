import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../views/login";
import { Home } from "../views/home";
import { Register } from "../views/register";
import { AgregarUsuario } from "../views/usuarios";
import useSession from "../hooks/useSession";
import { useState, useEffect } from 'react'

const Stack = createNativeStackNavigator();

export const Rooter = () => {
    const [initial, setInitial] = useState('')
    const { usuario } = useSession();

    useEffect(() => {
        usuario !== null
        ? setInitial('Home')
        : setInitial('Login')
    }, [usuario])
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initial}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Usuarios" component={AgregarUsuario}/>
                <Stack.Screen name="RegistroUsuario" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}