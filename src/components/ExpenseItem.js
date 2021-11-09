import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 234;
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description ">
                <h1>{expenseTitle}</h1>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
