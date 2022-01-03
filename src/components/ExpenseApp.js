import React, { useEffect, useState } from "react";

// components
import TransActionsForms from "./TransActionsForms";

// styles
import TransActionsComponent from "./TransActionsComponent";
import styles from "./ExpenseApp.module.css";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [transActions, setTransActions] = useState([]);
  const saveData = JSON.parse(localStorage.getItem("transActions"))

  const showHandler = () => {
    setIsShow((prevState) => !prevState);
  };

  // this is for put id for each trans actions
  transActions.forEach((item, i) => {
    item.id = i + 1;
  });

  useEffect(() => {
    let expenseAmount = 0;
    let incomeAmount = 0;
    // + before t.amout for convert int to num
    transActions.map((t) => t.type === "expense" ? expenseAmount += +t.amount : incomeAmount += +t.amount)
    setExpense(expenseAmount)
    setIncome(incomeAmount)
  }, [transActions])
  
  useEffect(() => {
    if (saveData) setTransActions(saveData)
  }, [])

  useEffect(() => {
    localStorage.setItem("transActions", JSON.stringify(transActions))
  }, [transActions])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.balance}>
          <p>
            Balance: <span>${income - expense}</span>
          </p>
        </div>
        <div className={styles.amount}>
          <p>
            Income: <span>${income}</span>
          </p>
          <p>
            Expense: <span>${expense}</span>
          </p>
        </div>
        <button className={styles.addBtn} onClick={showHandler}>{isShow ? <span>Cancel</span> : <span>Add New Transaction</span>}</button>
        <div className={styles.transForm}>
          {isShow && (
            <TransActionsForms
              transActions={transActions}
              setTransActions={setTransActions}
            />
          )}
        </div>
      </div>
      <div>
        <TransActionsComponent transActions={transActions} saveData={saveData} setTransActions={setTransActions} />
      </div>
    </>
  );
};

export default ExpenseApp;
