import React from "react";

// style
import styles from "./TransActionsComponent.module.css";

// svg
import trash from "../svg/trash.svg";

const TransActionsComponent = ({ transActions, setTransActions }) => {
  const expenseType = transActions.filter((t) => t.type === "expense");
  const incomeType = transActions.filter((t) => t.type === "income");

  // this function for remove item from local storeage
  const deleteHandler = (id) => {
    var transActions = localStorage.getItem("transActions")
      ? JSON.parse(localStorage.getItem("transActions"))
      : [];
    var index;
    for (var i = 0; i < transActions.length; i++) {
      if (transActions[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === undefined) return;
    transActions.splice(index, 1);
    localStorage.setItem("transActions", JSON.stringify(transActions));
    const saveData = JSON.parse(localStorage.getItem("transActions"));
    if (saveData) setTransActions(saveData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.expContainer}>
        <h1 className={styles.expHead}>Expense</h1>
        {expenseType.length !== 0 ? (
          expenseType.map((t) => (
            <div key={t.id} className={styles.expenseContainer}>
              <p className={styles.transDesc}>{t.desc}</p>
              <p className={styles.transAmount}>${t.amount}</p>
              <p className={styles.transType}>{t.type}</p>
              <button onClick={() => deleteHandler(t.id)}><img src={trash} alt="logo" /></button>
            </div>
          ))
        ) : (
          <h3 className={styles.emptyAlert}>Expense is empty</h3>
        )}
      </div>

      <div className={styles.incContainer}>
        <h1 className={styles.incHead}>Income</h1>
        {incomeType.length !== 0 ? (
          incomeType.map((t) => (
            <div key={t.id} className={styles.incomeContainer}>
              <p className={styles.transDesc}>{t.desc}</p>
              <p className={styles.transAmount}>${t.amount}</p>
              <p className={styles.transType}>{t.type}</p>
              <button onClick={() => deleteHandler(t.id)}><img src={trash} alt="logo" /></button>
              <div className={styles.tooltip}>
                <span className={styles.tooltiptext}>{t.date}</span>
              </div>
            </div>
          ))
        ) : (
          <h3 className={styles.emptyAlert}>Income is empty</h3>
        )}
      </div>
    </div>
  );
};

export default TransActionsComponent;
