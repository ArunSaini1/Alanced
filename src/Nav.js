import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  return (
    <div>
    <ul>
      <li><Link to='/login'>Login</Link></li>
    </ul>
      
    </div>
  )
}
