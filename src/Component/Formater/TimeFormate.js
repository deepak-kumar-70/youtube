
const TimeFormate = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    const pad = (value) => (value < 10 ? `0${value}` : value);
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}


function formatTimeAgo(date) {
    const secondsAgo = Math.round((Date.now() - date.getTime()) / 1000);
    if (secondsAgo < 60) {
      return `${secondsAgo} second${secondsAgo === 1 ? '' : 's'} ago`;
    }
  
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
      return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
    }
  
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
      return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
    }
  
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 7) {
      return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
    }
  
    const weeksAgo = Math.floor(daysAgo / 7);
    if (weeksAgo < 4.34524) {
      return `${weeksAgo} week${weeksAgo === 1 ? '' : 's'} ago`;
    }
  
    const monthsAgo = Math.floor(weeksAgo / 4.34524);
    if (monthsAgo < 12) {
      return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
    }
  
    const yearsAgo = Math.floor(monthsAgo / 12);
    return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
  }
  
  const duration=TimeFormate(58.98)
  console.log(duration)

  const date = new Date();
  const formattedTimeAgo = formatTimeAgo(date);
  console.log(formattedTimeAgo);

  export default TimeFormate  