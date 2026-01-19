import Aboutsection from './components/Aboutsection'
import Navbar from './components/Navbar'
import bg from './assets/bg.png'
import FeatureSection from './components/FeatureSection'
import Nexumtoken from './components/Nexumtoken'
import Vision from './components/Vision'
function App() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
              <Aboutsection />
              <FeatureSection/>
             <Nexumtoken/>
                 <Vision/>
      </div>
    </>
  )
}

export default App
