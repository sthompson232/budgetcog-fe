export const getIconColor = (name) => {
    let color 
    switch(name) {
        case 'Entertainment':
            color = 'red'
            break
        default:
            color = 'blue'
            break
    }
    return color
}