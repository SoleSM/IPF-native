import { Text, Container, VStack, Input, Button, Picker, View } from "native-base"
import { useState } from "react"

export const FormularioRegistro = () => {

    const [data, setData] = useState({
        nombre: "",
        apellido: "",
        numeroDni: "",
        sexo: "",
        fechaDeNacimiento: "",
        email: "",
        password: "",
        tipo: ""
    });

    const { nombre, apellido, numeroDni, sexo, fechaDeNacimiento, email, password, tipo } = data;

    // const Submit = async () => {

    //     const url = 'http://192.168.216.139:5000/auth/register';
    //     const content = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }

    //     const res = await fetch(url, content)
    //     const dataRes = await res.json()
    //     console.log(dataRes)
    //     // if(dataRes.ok){
    //     //     console.log("usuario registrado con exito", dataRes.usuarioRegistrado)
    //     // }else{
    //     //     console.log("error", data.msg)
    //     // }
    // }


    return (
        <View>
            <Text style={{ "textAlign": "center", "padding": 14 }}>LOGIN</Text>
            <Container style={{ "minWidth": "100%", "minHeight": "100%" }}>
                <VStack space={4} w="75%" maxW="300px" mx="auto">

                    <Input name="nombre" value={nombre}
                        variant="rounded"
                        placeholder="Nombre"

                    />
                    <Input name='apellido'
                        value={apellido}

                        variant="rounded"
                        placeholder="Apellido"
                    />
                    <Input name='numeroDni'
                        value={numeroDni}

                        variant="rounded"
                        placeholder="DNI"
                    />


                    <Input name='email'
                        value={email}

                        variant="rounded"
                        placeholder="Email"
                    />
                    <Input name='password'
                        value={password}

                        variant="rounded"
                        placeholder="Contraseña"
                    />

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(value) => setData({...data, sexo: value})}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <Button >
                        REGISTRAR
                    </Button>
                </VStack>
            </Container>
        </View>
    )
}
