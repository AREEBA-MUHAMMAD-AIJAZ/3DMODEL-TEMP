import React from 'react'

const About = () => {
  return (
    <div className=''>
         <p className='text-[250px] font-sans font-extrabold'>ABOUT➭ </p>

        <div className='flex gap-5 ml-56 -mt-[50px]'>
            <div className='w-80 '>
                <p className='text-sm leading-loose px-10'>
                <strong className='text-5xl'>L</strong> orem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo nihil fuga ipsam consequatur? Ea aspernatur commodi accusaantium <b> soluta tempore modi. Dolores repellat officia explicabo quam laborum aliquid</b> officiDolorum nemo nihil fuga ipsam consequatur? Ea aspernatur commodi accusaantium soluta tempore modi. Dolores repellat officia explicabo quam laborum aliquid officiiis.</p>

                <img src="/BMW-Parts.png" alt="PartsImg" className='pt-20 w-[500px]' />
            </div>
            <div className='text-[250px] -mt-[90px] font-extrabold '> 
                <p className=''>CAR</p>
                <img src="/seats.jpg" alt="PartsImg" className=' w-[600px] ml-40' />

            </div>
        </div>
    
    </div>

    
  )
}

export default About;
// className='-mt-[100px]'