import React from "react";
import { Header } from "../components";

const Records = () => {
  return(
     <>
    <Header/>
    <section>
      <h3>Records</h3>
      <button>Add</button>
      <input type="text" placeholder="Search" />
      <div>
        <h5>Types</h5>
        <ul>
          <li>All</li>
          <li>Income</li>
          <li>Expense</li>
        </ul>
      </div>
      <div>
        <h5>Category</h5>
      </div>
    </section>
    <section>
      <h5>Last 30 Days </h5>
      <p>Today</p>
      <div>
        
      </div>
    </section>
  </>
  )
};

export default Records;
