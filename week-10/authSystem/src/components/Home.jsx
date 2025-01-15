import React from 'react'

const Home = () => {
  return (
    <div style={{margin:"10px 10px",padding:"10px 30px"}}><h1>Welcome to The Auth System Demo</h1>
    <p>This demo showcases two apporaches to managing authentication state in React </p>
    <ul style={{listStyleType:"disc",padding:"20px"}}>
      <li>State Lifiting</li>
      <li>Context Api</li>
    </ul>
    <p> use toggle to switch between the two approaches</p>
    </div>
  )
}

export default Home