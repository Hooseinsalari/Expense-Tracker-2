import React, { useState } from "react";

// style
import styles from "./TransActionsForms.module.css";

// toast
import { notify } from "./toastify/toast";

const TransActionsForms = ({ transActions, setTransActions }) => {
  const [inputData, setInputData] = useState({
    desc: "",
    amount: "",
    type: "expense",
  });

  const formHandler = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputData.desc && inputData.amount) {
      notify("success", "Successfully added");
      setTransActions([...transActions, inputData]);
    } else {
      notify("error", "Wrong Data!");
    }
    setInputData({ desc: "", amount: "", type: "expense" });
  };

  return (
    <form
      className={styles.container}
      onSubmit={submitHandler}
      autoComplete="off"
    >
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
        <label >
            <input
              type="radio"
              name="type"
              value="expense"
              checked={inputData.type === "expense"}
              onChange={formHandler}
            />
            <span>Expense</span>
          </label>
        </div>
        <div className={styles.radio}>
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={inputData.type === "income"}
              onChange={formHandler}
            />
            <span>Income</span>
          </label>
        </div>
      </div>
      <button className={styles.subBtn} type="submit">
        Add
      </button>
    </form>
  );
};

export default TransActionsForms;
