import React from 'react'
import Tests from './Tests'
import Link from 'next/link'

const Test = () => {
  return (
    <div className='test-container'>
      <Link href="/" className='test-text-top center'>Test List</Link>
      <div className='center'>
      <span className='test-heading'>We offer a comprehensive coverage of more than 80+ medical tests with reliable results</span>
      </div>
      <Tests />
    </div>
  )
}

export default Test