
import { NativeBaseProvider} from 'native-base';
import { Rooter } from './src/components/navigator';
export default function App() {
  return (
    <NativeBaseProvider>
  
        <Rooter/>
    
    </NativeBaseProvider>
  );
}
