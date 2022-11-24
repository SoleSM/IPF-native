import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../views/Login";
import { Register } from "../views/register";
import useSession from "../hooks/useSession";
const Stack = createNativeStackNavigator();

export const Rooter = () => {

    const { usuario} = useSession();

    console.log("usuario =>", usuario)

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
               {
                !!usuario ? (
                    <Stack.Screen name="Home" component={Register} />
                ): (
                    <Stack.Screen name="Login" component={Login} />
                )

               }
                        
                            
                       
                           
                        
                


            </Stack.Navigator>
        </NavigationContainer>
    )
}