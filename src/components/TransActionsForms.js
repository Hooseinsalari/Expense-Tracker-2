import React, { useState } from "react";

// style
import styles from "./TransActionsForms.module.css";


import { notify } from "./toastify/toast";

const TransActionsForms = ({ transActions, setTransActions }) => {
  // const [date, setDate] = useState("");
  // date of day
  // const utc = new Date().toJSON().slice(0,10).replace(/-/g,'-').toString();
  const [inputData, setInputData] = useState({
    desc: "",
    amount: 0,
    type: "expense",
  });

  const formHandler = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  // const dateHandler = (event) => {
  //   setDate(date === null ? utc : event.target.value)
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    if(inputData.desc && inputData.amount ) {
      notify("success", "good")
      setTransActions([...transActions, inputData ]);
    } else {
      notify("error", "bad")
    }
    setInputData({ desc: "", amount: 0, type: "expense" });
  };
  
  // console.log(typeof(utc))
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.inputForm}>
        <label className={styles.label}>Text</label>
        <input
          type="text"
          name="desc"
          value={inputData.desc}
          className={styles.input}
          onChange={formHandler}
          
        />
      </div>
      <div className={styles.inputForm}>
        <label className={styles.label}>Amount</label>
        <input
          type="number"
          name="amount"
          value={inputData.amount}
          className={styles.input}
          onChange={formHandler}
          
        />
      </div>
      <div className={styles.radioForm}>
        <div className={styles.radio}>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={inputData.type === "expense"}
            onChange={formHandler}
            
          />
          <label>Expense</label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            name="type"
            value="income"
            checked={inputData.type === "income"}
            onChange={formHandler}
            
          />
          <label>Income</label>
        </div>
      </div>
      {/* <div className={styles.date}>
          <input type="date" name="date" value={inputData.date} onChange={formHandler}  />
      </div> */}
      <button className={styles.subBtn} type="submit">Add</button>
    </form>
  );
};

export default TransActionsForms;
