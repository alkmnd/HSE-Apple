import React from 'react'
import '.././styles.css'


function Activity({header, creator, description}) {
  
    return ( 
      <div className='activity'>
        <div>
          <h1 className='activity-header'>{header}</h1>
          <span className='activity-creator'>Автор: {creator}</span>
          <span className='description'>{description}</span>
        </div>
        <span className='date'>12.05.2022</span>

      </div>
    )
     
}
export default Activity;