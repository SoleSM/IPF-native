import { Text, Container, VStack, Input, Button } from "native-base"
import { useState } from "react";

export const Login = () => {


    const [datosForm, setDatosForm] = useState({
        email: '',
        password: ''
    });

    const { email, password } = datosForm;


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

        console.log("dsta", data) //no me trae pq tira error
        if(data.ok){
            console.log("ok",data.usuario)
        }else{
            console.log("error", data.msg)
        }
    }

    return (
        <>

            <Text style={{ "textAlign": "center", "padding": 14 }}>LOGIN</Text>
            <Container style={{ "minWidth": "100%", "minHeight": "100%" }}>
                <VStack space={4} w="75%" maxW="300px" mx="auto">
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
                    <Button onPress={ Submit}>
                        Iniciar Sesión
                    </Button>
                </VStack>
            </Container>

        </>
    )
}