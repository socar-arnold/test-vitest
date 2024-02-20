import React from 'react'

const useCount = () => {
    const [count, setCount] = React.useState(0);

    const plus = () => setCount((prev)=> prev + 1);
    const minors = () => setCount((prev)=> prev - 1);

  return {
    count, plus, minors
  }
}

export default useCount