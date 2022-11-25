import { Container, Button } from "native-base"
import { View } from "native-base"
import { StyleSheet } from "react-native"
export const AgregarUsuario = ({ navigation }) => {

    return (
        <View>
            <Container style={styles.container} >
                <Button style={styles.button} onPress={() => navigation.navigate('Registro')}>Registrar Usuarios</Button>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: "#e1bee7",
        alignItems: "center"
    },
    button: {
        marginTop: '50%'
    }
})
