import { Text, Container, VStack, Input, Button, View, Image } from "native-base"
import { useState } from "react";
import useSession from "../hooks/useSession";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";

export const Login = ({navigation}) => {

    const [datosForm, setDatosForm] = useState({
        email: 'miliserrano@gmail.com',
        password: 'hola123'
    });

    const { email, password } = datosForm;
    const { login } = useSession();

    const Submit = async () => {

        const url = 'http://192.168.216.139:5000/auth/login';
        const content = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosForm)
        }

        const res = await fetch(url, content)
        const data = await res.json()

        if(data.ok){
            login(data.usuario)
            Alert.alert(
                'Bienvenido',
                `${data.msg}`
            )
            navigation.navigate('Logueado')
        }else{
            Alert.alert(
                'Error',
                `${data.msg}`
            )
        }
    }

    return (
        <View style={styles.container}>

           
            <Container style={{ "minWidth": "100%", "minHeight": "100%" }}>
                <VStack  style={styles.boxLogin} space={4} w="75%" maxW="300px" mx="auto">
                <Image style={{"alignSelf": "center"}} source={require('../../assets/logo.png')} alt="logo" size="xl" />
                <Text style={styles.titulo}>LOGIN</Text>
                    <Input name="email" value={email}
                        variant="rounded"
                        placeholder="Email"
                        onChangeText={(value) => setDatosForm({ ...datosForm, email: value })}
                    />
                    <Input name='password'
                        value={password}
                        onChangeText={(value) => setDatosForm({ ...datosForm, password: value })}
                        variant="rounded"
                        placeholder="Contraseña" />
                    <Button style={styles.button} onPress={ Submit}>
                        Iniciar Sesión
                    </Button>
                </VStack>
            </Container>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        minHeight: '100%'
    },
    titulo: {
        color: "#9c27b0",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }, 
    button: {
        alignSelf: "center",
        backgroundColor: "#9c27b0",
        width: 200
    },
    boxLogin:{
        marginTop: '20%'
    }
})