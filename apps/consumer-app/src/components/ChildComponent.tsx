import React from 'react';

const App = () => {
  return (
    <div> 
      <ChildComponent /> 
    </div> 
  )
}

export const ChildComponent = () => {
  return (
    <div>
     <p>Child Component</p>
    </div>
  )
}