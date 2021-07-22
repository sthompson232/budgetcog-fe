
const total_expense = (expenses, recurring) => {
    let total = 0
    for (const expense of expenses) {
        total += parseFloat(expense.cost)
    }
    for (const recur of recurring) {
        total += parseFloat(recur.cost)
    }
    return total
}

const calculate_percentage = (number, total) => {
    const percent = (number / total) * 100 
    return percent
}

const decimal_round = (number) => {
    const rounded = Math.round(number * 100) / 100
    return rounded
}

export {
    total_expense,
    calculate_percentage,
    decimal_round
}

