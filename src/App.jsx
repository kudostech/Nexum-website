import Aboutsection from './components/Aboutsection'
import Navbar from './components/Navbar'
import bg from './assets/bg.png'

function App() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
              <Aboutsection />
      </div>
    </>
  )
}

export default App
