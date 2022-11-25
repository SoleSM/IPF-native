import { Container, VStack, Input, Button, View } from "native-base"
import { useState } from "react"
import { SelectList } from "react-native-dropdown-select-list";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";

export const FormularioRegistro = () => {

    const [data, setData] = useState({
        nombre: "",
        apellido: "",
        numeroDni: "",
        sexo: "",
        email: "",
        password: "",
        tipo: ""
    });

    const { nombre, apellido, numeroDni, sexo, email, password, tipo } = data;

    const Submit = async () => {

        const url = 'http://192.168.216.139:5000/auth/register';
        const content = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const res = await fetch(url, content)
        const dataRes = await res.json()
        console.log("data res", dataRes)

        if (dataRes.ok) {
            Alert.alert(
                "Éxito",
                `${dataRes.msg}`
            )
        } else {
            return (
                Alert.alert(
                    "Error",
                    `${dataRes.msg.msg}`
                )
            )
        }
    }

    const selectGenero = [
        { key: '1', value: 'Femenino' },
        { key: '2', value: 'Masculino' },
        { key: '3', value: 'Otro' },
    ]
    const selectTipo = [
        { key: '1', value: 'alumno' },
        { key: '2', value: 'profesor' },
        { key: '3', value: 'administrador' },
    ]


    return (
        <View>
         
                <VStack space={4} w="100%" mx="auto">

                    <Input name="nombre"
                        value={nombre}
                        variant="rounded"
                        placeholder="Nombre"
                        onChangeText={value => setData({ ...data, nombre: value })}
                    />
                    <Input name='apellido'
                        value={apellido}
                        variant="rounded"
                        placeholder="Apellido"
                        onChangeText={value => setData({ ...data, apellido: value })}
                    />
                    <Input name='numeroDni'
                        value={numeroDni}
                        variant="rounded"
                        placeholder="DNI"
                        onChangeText={value => setData({ ...data, numeroDni: value })}
                    />
                    <Input name='email'
                        value={email}
                        variant="rounded"
                        placeholder="Email"
                        onChangeText={value => setData({ ...data, email: value })}
                    />
                    <Input name='password'
                        value={password}
                        variant="rounded"
                        placeholder="Contraseña"
                        onChangeText={value => setData({ ...data, password: value })}
                    />
                    <SelectList
                        setSelected={(value) => setData({ ...data, sexo: value })}
                        data={selectGenero}
                        save="value"
                        placeholder="Género"
                    />
                    <SelectList
                        setSelected={(value) => setData({ ...data, tipo: value })}
                        data={selectTipo}
                        save="value"
                        placeholder="Tipo de usuario"
                    />


                    <Button style={styles.button} onPress={Submit}>
                        REGISTRAR
                    </Button>

                </VStack>
         
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200
    }
})