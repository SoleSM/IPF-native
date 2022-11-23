// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const useSession = () => {
    const [usuario, setUsuario] = useState(null)
  
    const getItem = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      setUsuario(null)
    }
  
    const login = async (user) => {
      await AsyncStorage.removeItem('user')
      setUsuario(null)
  
      if (user !== null) {
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setUsuario(user);
      }
    }
  
    const logout = async () => {
      await AsyncStorage.removeItem('user')
      setUsuario(null)
    }
  
    useEffect(() => {
      getItem()
    }, [])
    
    return { usuario, login, logout }
  }
  
  export default useSession