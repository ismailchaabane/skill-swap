import React from 'react'

const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
  return (
    <div>About Us</div>
  )
}

export default page