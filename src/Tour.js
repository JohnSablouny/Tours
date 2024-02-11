import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [readMore, setReadmore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <p className='tour-price'>{price}</p>
        </div>
        <p>
          {readMore?`${info}`:`${info.substring(0,200)}...`}
          <button onClick={() => setReadmore(!readMore)}>
            {readMore?'Show Less':'Read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;