const daysLeft = () => {
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
    const daysLeft = daysInMonth - now.getDate()
    if (daysLeft >= 25) {
        return `You've just started the month, you have ${daysLeft} days remaning of the month!`
    } else if (daysLeft >= 20) {
        return `You stil have ${daysLeft} days left in the month!`
    } else if (daysLeft >= 14) {
        return `You're about half way, only ${daysLeft} days remaning of the month!`
    } else if (daysLeft >= 7) {
        return `Not long now, only ${daysLeft} days left in the month!`
    } else {
        return `The month is nearly over, only ${daysLeft} days left of the month!`
    }
  }


const getDate = (curDate, curDay, curMonth, curYear) => {
    let day = ''
    let month = ''
    let year = curYear
    switch(curDay) {
        case 0:
            day = 'Sunday'
            break
        case 1: 
            day = 'Monday'
            break
        case 2:
            day = 'Tuesday'
            break
        case 3:
            day = 'Wednesday'
            break
        case 4:
            day = 'Thursday'
            break
        case 5:
            day = 'Friday'
            break
        case 6:
            day = 'Saturday'
            break
        default:
            console.log("Date function broken")
    }
    
    switch(curMonth) {
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'March'
            break
        case 3:
            month = 'April'   
            break
        case 4:
            month = 'May' 
            break
        case 5:
            month = 'June'       
            break 
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
        default:
            console.log('Date function broken')
    }
    return `${curDate} ${day}, ${month} ${year}`
} 

const getMonthAndYear = () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return { month: month, year: year }
}

const getMonthName = (number) => {
    let month
    switch(parseInt(number)) {
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'March'
            break
        case 3:
            month = 'April'   
            break
        case 4:
            month = 'May' 
            break
        case 5:
            month = 'June'       
            break 
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
        default:
            console.log('Date function broken')
    }
    return month
} 

export { 
    getDate,
    daysLeft,
    getMonthAndYear,
    getMonthName
}