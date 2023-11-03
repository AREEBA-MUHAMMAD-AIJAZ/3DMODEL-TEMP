import Image        from 'next/image'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import About        from '../components/About'
import Varieties    from '../components/Varieties'
import BgimgSec     from '../components/BgimgSec' 
import ModelHover   from '../components/ModelHover'
import AnimatedPG   from '../components/AnimatedPG'
import Mems         from '../components/Mems'
import BgLastimgSec from '../components/LastSession'
import Footer       from '../components/Footer'
import AAA from '../components/Model'

export default function Home() {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <AAA/>
      <About />
      <Varieties />
      <BgimgSec/> 
      <ModelHover/>
      <AnimatedPG/>
      <Mems/> 
      <BgLastimgSec/>
      <Footer/>

    </div>
  )
}


