const getIconColor = (name) => {
    let color 
    switch(name) {
        case 'Entertainment':
            color = 'red.500'
            break
        case 'Eating Out':
            color = 'cyan.500'
            break
        case 'Bills':
            color = 'orange.500'
            break
        case 'Rent':
            color = 'teal.500'
            break
        case 'Gift':
            color = 'purple.500'
            break 
        case 'Groceries':
            color = 'pink.500'
            break
        case 'Transport':
            color = 'blue.500'
            break 
        case 'Saving':
            color = 'green.500'
            break 
        case 'Insurance':
            color = 'yellow.500'
            break
        default:
            color = 'blue.500'
            break
    }
    return color
}

const getIconHexColor = (name) => {
    let color 
    switch(name) {
        case 'red.500':
            color = '#E53E3E'
            break
        case 'red':
            color = '#E53E3E'
            break
        case 'cyan.500':
            color = '#00B5D8'
            break
        case 'cyan':
            color = '#00B5D8'
            break
        case 'orange.500':
            color = '#DD6B20'
            break
        case 'orange':
            color = '#DD6B20'
            break
        case 'teal.500':
            color = '#319795'
            break
        case 'teal':
            color = '#319795'
            break
        case 'green.500':
            color = '#38A169'
            break 
        case 'green':
            color = '#38A169'
            break 
        case 'purple.500':
            color = '#805AD5'
            break
        case 'purple':
            color = '#805AD5'
            break
        case 'blue.500':
            color = '#3182CE'
            break
        case 'blue':
            color = '#3182CE'
            break
        case 'pink':
            color = '#D53F8C'
            break
        case 'pink.500':
            color = '#D53F8C'
            break
        case 'blue':
            color = '#3182CE'
            break 
        case 'blue.500':
            color = '#3182CE'
            break 
        case 'yellow':
            color = '#D69E2E'
            break
        case 'yellow.500':
            color = '#D69E2E'
            break
        default:
            color = '#D53F8C'
            break
    }
    return color 
}


export {
    getIconColor,
    getIconHexColor
}