
import { NativeBaseProvider} from 'native-base';
import { Login } from './src/views/Login';
import { Rooter } from './src/components/navigator';
export default function App() {
  return (
    <NativeBaseProvider>
  
        <Rooter/>
    
    </NativeBaseProvider>
  );
}
