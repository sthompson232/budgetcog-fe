const getIconColor = (name) => {
    let color 
    switch(name) {
        case 'Entertainment':
            color = 'red.400'
            break
        case 'Eating Out':
            color = 'cyan.400'
            break
        case 'Bills':
            color = 'orange.400'
            break
        case 'Rent':
            color = 'teal.400'
            break
        default:
            color = 'blue.400'
            break
    }
    return color
}

const getIconHexColor = (name) => {
    let color 
    switch(name) {
        case 'red.400':
            color = '#F56565'
            break
        case 'cyan.400':
            color = '#0BC5EA'
            break
        case 'orange.400':
            color = '#ED8936'
            break
        case 'teal.400':
            color = '#38B2AC'
            break
        default:
            color = '#4299E1'
            break
    }
    return color 
}


export {
    getIconColor,
    getIconHexColor
}