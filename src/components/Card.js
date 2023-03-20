import React from 'react'

const Card = ({ name, username, email  }) => {
  return (
    <div className='tc bg-lightest-blue dib br4 pa3 ma2 grow  bw2 shadow-5'>
      <img src={`https://robohash.org/${username}`} alt="robots" />
        <h2>{name}</h2>
        <h4>{`user: ${username}`}</h4>
        <p>{email}</p>
    </div>
  )
}

export default Card