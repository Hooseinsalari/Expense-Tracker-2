import React from "react";

// style
import styles from "./TransActionsComponent.module.css";

// svg
import trash from "../svg/trash.svg";
import { useEffect, useState } from "react/cjs/react.development";

const TransActionsComponent = ({ transActions, setTransActions }) => {
  const [filteredItem, setFilteredItem] = useState(transActions);
  const [searchItem, setSearchItem] = useState("")

  const filterTransactions = (search) => {
    if(!search || search === "") {
      setFilteredItem(transActions)
      return  
    }
    const filtered = transActions.filter((t) => t.desc.toLowerCase().includes(search.toLowerCase()))
    setFilteredItem(filtered)
  }

  const searchHandler = (event) => {
    setSearchItem(event.target.value)
    filterTransactions(event.target.value)
  }


  useEffect(() => {
    filterTransactions(searchItem)
  }, [transActions])

  const expenseType = filteredItem.filter((t) => t.type === "expense");
  const incomeType = filteredItem.filter((t) => t.type === "income");

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
  
  if(!transActions.length) {
    return (<div className={styles.container}>
      <div className={styles.transactionsCon}>
        <h3 className={styles.searchError}>Transactions is empty</h3>
      </div>
    </div>)
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.transactionsCon}>
        <div className={styles.form}>
          <input type="text" placeholder="Search transactions..." value={searchItem} onChange={searchHandler} className={styles.searchInput} />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Transactions</h1>
        </div>
        {filteredItem.length ? (
          filteredItem.map((t) => (
            t.type === "expense" ?
              <div key={t.id} className={styles.expenseContainer}>
                <p className={styles.transDesc}>{t.desc}</p>
                <p className={styles.transAmount}>${t.amount}</p>
                <button onClick={() => deleteHandler(t.id)}>
                  <img src={trash} alt="logo" />
                </button>
              </div> 
            :
              <div key={t.id} className={styles.incomeContainer}>
                <p className={styles.transDesc}>{t.desc}</p>
                <p className={styles.transAmount}>${t.amount}</p>
                <button onClick={() => deleteHandler(t.id)}>
                  <img src={trash} alt="logo" />
                </button>
              </div>
          ))
        ) : (
          <h3 className={styles.emptyAlert}>Not Matched!</h3>
        )}
      </div>
    </div>
  );
};

export default TransActionsComponent;
