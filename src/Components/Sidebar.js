import React from 'react'
import home from './home.svg'
import face from './face.svg'
function helloworld() {}
const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <h1>1805352</h1>

      <div className='imgDiv' onClick={helloworld}>
        <img
          className='sideBarImgs'
          src={home}
          alt='Home'
          style={{ marginTop: '10px' }}
        ></img>
        Home
      </div>

      <div className='imgDiv'>
        <img className='sideBarImgs' src={face} alt='Home'></img>
        About Me
      </div>
    </div>
  )
}
export default SideBar
