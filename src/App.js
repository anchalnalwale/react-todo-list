import React, { useEffect } from 'react'
import Todo from './Todo'

const App = () => {
   useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowX = "hidden"; 
  }, []);
  return (
    <>
      <Todo/>
    </>
  )
}

export default App