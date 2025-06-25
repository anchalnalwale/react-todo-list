import React, { useEffect } from 'react'
import Todo from './Todo'

const App = () => {
   useEffect(() => {
    document.body.style.backgroundColor = 'powderblue'; 
  }, []);
  return (
    <>
      <Todo/>
    </>
  )
}

export default App