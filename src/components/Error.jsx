import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
  <p className="bg-red-200 rounded-md p-2 mb-4">{mensaje}</p>
  </div>
  )
}

export default Error