
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1,hero2,hero3,hero4]

const Hero = () => {
  return (
    <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className='hidden h-[28rem] lg:carousel rounded-box '>
    {
        carouselImages.map((img)=>{
            return(
            <div className="carousel-item w-1/2" key={img}>
                <img src={img} className="w-full h-full object-cover" />
                </div>
            )
        })
    }
    </div>
    
    
    <div>
      <h1 className="text-5xl font-bold">We are changing the way people shop</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">View Products</button>
    </div>
  </div>
</div>
  )
}

export default Hero