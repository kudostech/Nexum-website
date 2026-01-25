import Aboutsection from './components/Aboutsection'
import Navbar from './components/Navbar'
import Bg from './assets/Bg.png'
import FeatureSection from './components/FeatureSection'
import Nexumtoken from './components/Nexumtoken'
import Vision from './components/Vision'
import Howtobuy from './components/Howtobuy'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <Navbar />
              <Aboutsection />
              <FeatureSection/>
             <Nexumtoken/>
                 <Vision/>
                 <Howtobuy/>
                 <Blog/>
      </div>
    </>
  )
}

export default App
