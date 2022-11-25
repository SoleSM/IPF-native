import { Text, View, Container } from "native-base"
import { FormularioRegistro } from "../components/formularioRegistro"
import { StyleSheet } from "react-native"

export const Register = () => {
    return (
        <View>
            <Container style={styles.container}>
                <Text style={styles.texto}>Registra un Usuario</Text>
                <FormularioRegistro />
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        textAlign: "center",
        padding: 14,
        fontSize: 20
    },
    container: {
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "pink",
        
    }
})