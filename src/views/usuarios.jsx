import { Text, Container, Button } from "native-base"
import { View } from "native-base"

export const AgregarUsuario = ({ navigation }) => {



    return (
        <View>
            <Container >
                <Text>Details Screen</Text>
                <Button onPress={() => navigation.navigate('Registro')}>Registrar Usuarios</Button>
                <Text>Screen Agregar Usuario</Text>
            </Container>
        </View>


    )
}