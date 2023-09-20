import React from 'react'
import Link from 'next/link'
import Review from './Review';

const Reviews = () => {
  return (
    <div className='reviews-container'>
      <div className='center'>
      <span className='test-heading'>Our patients feedback about us</span>
      </div>
      <span className='test-text-top center'>their impression after using our service</span>
      <div>
        <div className='background'> 
          
        </div>
        <div>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default Reviews;