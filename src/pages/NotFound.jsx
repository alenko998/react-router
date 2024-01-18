import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eos iste explicabo dolore blanditiis quis quod porro itaque repellendus officiis?</p>
      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
