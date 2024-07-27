// Budget Planner
function calculateBudget(income, expenses) {
    const totalIncome = parseFloat(income);
    const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    const remainingBudget = totalIncome - totalExpenses;
    return {
        totalIncome: totalIncome.toFixed(2),
        totalExpenses: totalExpenses.toFixed(2),
        remainingBudget: remainingBudget.toFixed(2)
    };
}

// Example usage:
const monthlyIncome = 50000; // Monthly income
const monthlyExpenses = [
    { name: 'Rent', amount: 15000 },
    { name: 'Utilities', amount: 5000 },
    { name: 'Food', amount: 8000 },
    { name: 'Transportation', amount: 3000 }
];

const budgetDetails = calculateBudget(monthlyIncome, monthlyExpenses);
console.log(`Total Monthly Income: ₹${budgetDetails.totalIncome}`);
console.log(`Total Monthly Expenses: ₹${budgetDetails.totalExpenses}`);
console.log(`Remaining Budget: ₹${budgetDetails.remainingBudget}`);
