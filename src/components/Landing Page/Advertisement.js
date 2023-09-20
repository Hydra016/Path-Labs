import React from 'react'
import Image from 'next/image'

const Advertisement = () => {
  return (
    <div className='advertisement-container'>
        <div className='back-circle'>
            <div className='inner-circle'>

            </div>
            <div className='advertisement-img-container'>
            <div className='adver-img-container'>
            <Image className='adver-img' src="/Actor.png" height={400} width={350} />
          </div>
            </div>
            <div className='advertisement-one'>
            <Image src="/Adver-1.png" width={100} height={50} />
            </div>
            <div className='advertisement-two'>
            <Image src="/Adver-2.png" width={80} height={80} />
            </div>
        </div>
        
    </div>
  )
}

export default Advertisement