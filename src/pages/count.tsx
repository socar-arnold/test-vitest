import useCount from '@/hooks/useCount'
import React from 'react'

const Count = () => {
    const {count, plus, minors} = useCount()
    

  return (
    <div>
        Count !!
        <button onClick={plus}>+</button>
        {count}
        <button onClick={minors}>-</button>
    </div>
  )
}

export default Count