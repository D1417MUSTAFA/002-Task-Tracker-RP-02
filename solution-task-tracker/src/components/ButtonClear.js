import React from 'react'

const ButtonClear = ({clearAll}) => {
  return (
    <div>
        <button onClick={ clearAll} className="clear-Task">Clear All Tasks</button>
    </div>
  )
}

export default ButtonClear