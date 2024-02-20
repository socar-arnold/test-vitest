const removeLeadingZeros = (stringsWithZero:string) => {
    const parts = stringsWithZero.split(' ')
    const res = Array.from({ length: parts.length }, () => '')
  
    parts.forEach((part, index) => {
      res[index] = part.replace(/\b0+(\d+)\b/g, '$1')
    })
  
    return res.join(' ')
  }
  
  export default removeLeadingZeros
  