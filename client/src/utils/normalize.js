export const phone = value  => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`
}

export const date = value=>{
    if(!value){
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 2) {
        return onlyNums}
    if (onlyNums.length <= 3){
        return `${onlyNums.slice(0,2)}-${onlyNums.slice(2)}`
    }
    return `${onlyNums.slice(0,2)}-${onlyNums.slice(2,4)}-${onlyNums.slice(4,8)}`
}

export const lower = value => value && value.toLowerCase()
