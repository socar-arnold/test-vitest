import React from 'react'

const useCount = ({initialCount}:{initialCount: number} = { initialCount : 0}) => {
    const [count, setCount] = React.useState(initialCount);

    const plus = () => setCount((prev)=> prev + 1);
    const minus = () => setCount((prev)=> prev - 1);

  return {
    count, plus, minus
  }
}

export default useCount