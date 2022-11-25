import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/home";
import { Register } from "../views/register";
import { AgregarUsuario } from "../views/usuarios";
import { Publicaciones } from "../views/publicaciones";
import useSession from "../hooks/useSession";
import { Button } from "native-base";
import { NativeBaseProvider } from "native-base";


const Stack = createNativeStackNavigator();

export const Rooter = ({ navigation }) => {

    const { logout } = useSession();

    const buttonLogout = (
        <Button onPress={async () => {
            logout()
            navigation.navigate('Login')
        }}>Salir</Button>
    )

    return (
        <NativeBaseProvider>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerRight: () => buttonLogout
                    }}
                />
                <Stack.Screen name="Usuarios" component={AgregarUsuario} />
                <Stack.Screen name="Registro" component={Register} />
                <Stack.Screen name="Publicaciones" component={Publicaciones} />
            </Stack.Navigator>
        </NativeBaseProvider>
    )
}