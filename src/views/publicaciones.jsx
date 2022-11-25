
import { Text, View, Box, Container, VStack } from "native-base"
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export const Publicaciones = () => {

    const [data, setData] = useState([])
    const [cargando, setCargando] = useState(true)

    const getPublicaciones = async () => {

        const url = 'http://192.168.216.139:5000/publicaciones';
        const content = {
            method: 'GET'
        }
        const res = await fetch(url, content)
        const dataRes = await res.json()
        // console.log("data res", dataRes)

        if (dataRes.ok) {
            setData(dataRes.publicacion)
            // console.log(data)
        }
    }

    const publisGeneral = data.filter((anuncio) => anuncio.tipo == "general")
    // console.log("publicaciones generales ", publisGeneral)

    useEffect(() => {
        getPublicaciones()
        setCargando(false)
    }, [])


    return (
        <View style={styles.fondo}>
            <Box style={styles.boxTitulo}>
                <Text style={styles.titulo} >General</Text>
            </Box>

            {
                cargando ? <Text>Cargando Anuncios</Text>
                    : (
                        publisGeneral.length > 0 ?
                            (
                                <Box style={styles.boxPublicacion}>

                                    {
                                        publisGeneral.map(element => (
                                            <Container key={element._id} style={styles.containerPublicacion}>
                                                <Text style={styles.nombreUsuario}>{element.usuario.nombre}</Text>
                                                <Text style={styles.textoAnuncio}>{element.texto}</Text>
                                                <Text style={{"marginTop" : 15}}>Comentarios</Text>
                                                <VStack space={1} >
                                                    {
                                                        element.comments.map(comment => (
                                                            <Box key={comment._id} style={styles.containerComment}>
                                                                <Text style={styles.nombreComments}>{comment.user.nombre}</Text>
                                                                <Text style={styles.textoComments}>{comment.text}</Text>
                                                            </Box>
                                                        ))
                                                    }
                                                </VStack>
                                            </Container>
                                        )
                                        )
                                    }
                                </Box>)
                            :
                            <Text>No hay Anuncios para mostrar</Text>
                    )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    fondo: {
        minWidth: 100,
        minHeight: '100%',
        backgroundColor: "#e1bee7"
    },  
    boxTitulo: {
        backgroundColor: "#8e24aa",
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    titulo: {
        fontSize: 30,
        paddingTop: 65,
        paddingLeft: 10,
        color: "white"
    },
    boxPublicacion: {
        backgroundColor: "#e1bee7",
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ba68c8'
    },
    containerPublicacion: {
        padding: 20,
        alignContent: "center",
        minWidth: '100%',
        padding: 20
    },
    textoAnuncio: {
        fontSize: 15
    },
    containerComment: {
        borderRadius: 5,
        backgroundColor: "white",
        marginTop: 10, 
        minWidth: '100%'
    },
    nombreUsuario: {
        fontSize: 17
    },
    nombreComments: {
        fortSize: 15,
        marginLeft: 10
    },
    textoComments: {
        marginLeft: 10
    }

})