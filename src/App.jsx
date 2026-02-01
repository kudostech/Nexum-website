import Aboutsection from './components/Aboutsection'
import Navbar from './components/Navbar'

import FeatureSection from './components/FeatureSection'
import Nexumtoken from './components/Nexumtoken'
import Vision from './components/Vision'
import Howtobuy from './components/Howtobuy'
import Blog from './components/Blog'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Faq from './components/Faq'
import  Team from './components/Team'
import Media from './components/Media'


function App() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      >
        <Navbar />
              <Aboutsection />
              <FeatureSection/>
             <Nexumtoken/>
                 <Vision/>
                 <Howtobuy/>
                 <Blog/>
                   <Team/>
                 <Faq/>
                  <Contactus/>
                  <Media/>
                  <Footer/>
      </div>
    </>
  )
}

export default App
