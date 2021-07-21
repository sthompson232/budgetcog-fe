export const getIconColor = (name) => {
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