
import { NativeBaseProvider} from 'native-base';
import { Login } from './src/views/Login';

export default function App() {
  return (
    <NativeBaseProvider>
  
        <Login/>
    
    </NativeBaseProvider>
  );
}
