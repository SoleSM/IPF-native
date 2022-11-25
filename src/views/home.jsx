import { Text, Button, Image, Container, VStack, View } from "native-base"
import { StyleSheet } from "react-native"
import useSession from "../hooks/useSession"

export const Home = ({ navigation }) => {

    const { usuario } = useSession();

    return (
        <View>
            <Container style={styles.container}>
                <Text>Bienvenid@ {`${usuario.nombre}`}</Text>
                <VStack space={4}>
                    <Button style={styles.button} onPress={() => navigation.navigate('Usuarios')}>
                        <Image source={require('../../assets/agregarUsuario.png')} alt="Alternate Text" size="xl" />
                        <Text style={styles.texto}>Usuarios</Text>
                    </Button>
                    <Button style={styles.button} onPress={() => navigation.navigate('Publicaciones')}>
                        <Image source={require('../../assets/altoparlante.png')} alt="Alternate Text" size="xl" />
                        <Text style={styles.texto}>Anuncios</Text>
                    </Button>
                    <Button style={styles.button}>
                        <Image source={require('../../assets/calendario.png')} alt="Alternate Text" size="xl" />
                        <Text style={styles.texto}>Inasistencias</Text>
                    </Button>
                </VStack>
            </Container>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#9c27b0',
        minWidth: '100%',
        height: '100%'
    },
    button: {
        width: 200,
        height: 200, 
        backgroundColor: '#e1bee7',
        borderRadius: 20
    },
    texto: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
        marginTop: 10
    }
});