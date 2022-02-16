import React from 'react'
import loading from '../icons/ajax-loader.gif'
export default function Spinner() {
  return (
    <div className='text-center' style={{marginTop:'80px'}}>
        <img src={loading} alt="loading"  />
    </div>
  )
}
