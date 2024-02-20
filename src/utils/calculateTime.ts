const calculateEndTime = (currentTimeStr:string, endTimeStr:string) => {
    const currentTime = new Date(currentTimeStr)
    const endTime = new Date(endTimeStr)
    const timeDifference = endTime.getTime() - currentTime.getTime()
    const millisecondsInADay = 24 * 60 * 60 * 1000
    const isOverTwoDays = timeDifference >= 2 * millisecondsInADay
    const [endHour, endMinutes, endSeconds] = [endTime.getUTCHours(), endTime.getUTCMinutes(), endTime.getUTCSeconds()]
    const isEndTimeMidnight = endHour === 23 
                            && endMinutes === 59 
                            && endSeconds === 59
  
    if (isOverTwoDays) {
      const year = endTime.getUTCFullYear()
      const month = String(endTime.getUTCMonth() + 1).padStart(2, '0')
      const day = String(endTime.getUTCDate()).padStart(2, '0')
  
      return `${year}년 ${month}월 ${day}일까지`
    }
  
  
    if (isEndTimeMidnight) {
      // 종료시간이 오늘인 경우
      if (endTime.getUTCDate() === currentTime.getUTCDate()) return '오늘까지'
  
      // 종료시간이 내일인 경우
      if (endTime.getUTCDate() === currentTime.getUTCDate() + 1) return '내일까지'
    } else if (!isEndTimeMidnight) {
      // 종료시간이 오늘인 경우
      if (endTime.getUTCDate() === currentTime.getUTCDate()) return String(`오늘 ${endHour}:${endMinutes}까지`)
  
      // 종료시간이 내일인 경우
      if (endTime.getUTCDate() === currentTime.getUTCDate() + 1) return `내일 ${endHour}:${endMinutes}까지`
    }
  
    return endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  
  
  export default calculateEndTime
  