export const formattedTime=(secs)=>{
  const minutes = parseInt(secs/60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${minutes} : ${pad(seconds.toString())}`
}
const pad =(number) =>{
  const pad = '00'
  return pad.substring(0,pad.length - number.length)+number
}