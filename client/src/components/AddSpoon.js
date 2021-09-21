import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const AddSpoon = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addActivity } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    }

    addActivity(newActivity)
    setText('')
    setAmount('')
  }

  return (
    <>
    <h3>Add New Activity</h3>
      <form onSubmit={onSubmit}>
      <div className="form-control">
          <label htmlFor="text">Task</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Task..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount in Spoons <br />
            (negative - expense, positive - energy)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter Amount..." />
        </div>
        <button className="btn">Submit</button>
      </form>
    </>
  )
}
