import { LocalAtm } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Transaction from './Transaction';

function Transactions() {
    const[transactions, setTransactions] = useState(null);
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLmdldFVzZXJuYW1lKCkiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicmVxdWVzdC5nZXRSZXF1ZXN0VVJMKCkudG9TdHJpbmcoKSIsImV4cCI6MTY0NTYxNTE0Mn0.S0lQjoQZADzkn10fzqHbkKDns7JUyFiQTb6iK_ZLhSE";

    useEffect(() => {
        // fetch("http://localhost:6786/blockchain/transactions", {headers : {"Authorization" : token}})
        // .then((response) => response.json())
        // .then((data) => {
        //     setTransactions(data);
        // });
        }, []);

  return (
    <div className="dashboard__tableContainer">
    <div className="dashboard__tableTop">
      <h3>Recent Transactions</h3>
      <LocalAtm />
    </div>
    <table className="dashboard__table">
      <thead>
        <tr>
          <th>UserID</th>
          <th>Charge amount</th>
          <th>Start time</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {transactions != null &&
          transactions.map((user) => (
            <Transaction key = {user.id}
            userID={user.userID}
            chargeAmount={user.chargeAmount}
            startTime={user.startTime}
            transactionType={user.type}
          ></Transaction>

          ))}
      </tbody>
    </table>
  </div>
  )
}

export default Transactions