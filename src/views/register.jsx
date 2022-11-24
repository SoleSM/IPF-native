import { Text, View } from "native-base"
import { FormularioRegistro } from "../components/formularioRegistro"
export const Register = () => {
    return (
        <View>
            <Text style={{ "textAlign": "center", "padding": 14 }}>Registrar Usuarios</Text>
            <FormularioRegistro/>
        </View>
    )
}