import './App.css'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'

function App() {
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CharacterCounter
        minWords={25}
        maxWords={100}
        targetReadingTime={2}
        />
    </div>
        </>
  )
}

export default App
