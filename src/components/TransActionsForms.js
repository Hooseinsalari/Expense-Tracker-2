import React, { useState } from "react";

// style
import styles from "./TransActionsForms.module.css";

const TransActionsForms = ({ transActions, setTransActions }) => {
  const [inputData, setInputData] = useState({
    desc: "",
    amount: 0,
    type: "expense",
  });

  const formHandler = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(inputData);
    setTransActions([...transActions, inputData]);
    setInputData({ desc: "", amount: 0, type: "expense" });
  };
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.textForm}>
        <label className={styles.label}>Text</label>
        <input
          type="text"
          name="desc"
          value={inputData.desc}
          className={styles.input}
          onChange={formHandler}
          required
        />
      </div>
      <div className={styles.amountForm}>
        <label className={styles.label}>Amount</label>
        <input
          type="number"
          name="amount"
          value={inputData.amount}
          className={styles.input}
          onChange={formHandler}
          required
        />
      </div>
      <div className={styles.radioForm}>
        <label>Expense</label>
        <input
          type="radio"
          name="type"
          value="expense"
          checked={inputData.type === "expense"}
          onChange={formHandler}
          required
        />
        <label>Income</label>
        <input
          type="radio"
          name="type"
          value="income"
          checked={inputData.type === "income"}
          onChange={formHandler}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default TransActionsForms;
