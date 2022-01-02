import React, { useState } from 'react';

// components
import TransActionsForms from './TransActionsForms';

// styles
import styles from "./ExpenseApp.module.css"

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const [transActions, setTransActions] = useState([]);

    const showHandler = () => {
        setIsShow(prevState => !prevState)
    }

    return (
        <div className={styles.container}>
            <div>
                <p>Balance: <span>{income - expense}</span></p>
            </div>
            <div>
                <p>Income:<span>{income}</span></p>
                <p>Expense:<span>{expense}</span></p>
            </div>
            <button onClick={showHandler}>Add New Transaction</button>
            <div>
                {
                    isShow && <TransActionsForms transActions={transActions} setTransActions={setTransActions} />
                }
            </div>
        </div>
    );
};

export default ExpenseApp;