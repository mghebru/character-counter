import './App.css'
import { TextInput } from './components/TextInput/TextInput'

function App() {
  
  return (
    <>
      <TextInput onTextChange={function (text: string): void {
        throw new Error('Function not implemented.')
      } } />
    </>
  )
}

export default App
