import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const useSession = () => {
  const [usuario, setUsuario] = useState({})

  const getItem = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    setUsuario(user)
  }

  const login = async (user) => {
    console.log("user que llega => ", user)
   
    await AsyncStorage.setItem("user", JSON.stringify(user));

    if(user !== null ){
       setUsuario(user);
    }

    console.log("usuario", usuario)
  }

  const logout = async () => {
    await AsyncStorage.removeItem('user')
    setUsuario(null)
    console.log("logout", usuario)
  }

  useEffect(() => {
    getItem()
  }, [])

  return { usuario, login, logout }
}

export default useSession