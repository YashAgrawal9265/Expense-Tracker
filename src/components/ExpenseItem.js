import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>June 30th 2021</div>
            <div className="expense-item__description ">
                <h1>Car Isuranve</h1>
                <div className="expense-item__price">$343.34</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
