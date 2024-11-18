'use client'

import AccountCard from '@/app/ui/accounts/account-card';
import { useState, useEffect } from 'react';

export default function Page() {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/account/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setAccounts(data);
        });
    }, []);

    return (
        <div>
            {accounts.map((account) => (
               <AccountCard /> 
            ))}
        </div>
    )
}