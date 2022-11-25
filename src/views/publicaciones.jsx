
import { Text, View, Box } from "native-base"
import { useEffect, useState } from "react";


export const Publicaciones = () => {

    const [data, setData] = useState("")

    const getPublicaciones = async () => {

        const url = 'http://192.168.0.19:5000/publicaciones';
        const content = {
            method: 'GET'
        }
        const res = await fetch(url, content)
        const dataRes = await res.json()
        // console.log("data res", dataRes)

        if (dataRes.ok) {

            setData(dataRes.publicacion)
            // console.log(data)

        } r
    }

 

    useEffect(() => {
        getPublicaciones()
    }, [])


    return (
        <View>
            <Text>Publicaciones Screen</Text>
            <Box style={{ "backgroundColor": "blue" }}>
                {
                    data.map((item) => (
                        <Text>{item.texto}</Text>
                    ))
                }

            </Box>
        </View>

    )
}