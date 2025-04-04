import React from 'react'

const Card = (image,title,btn) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img src={image}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>{title}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{btn}</button>
    </div>
  </div>
</div>
  )
}

export default Card
