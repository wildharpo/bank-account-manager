'use client'

import '@/app/dashboard/customers/customers.css';
import CustomerCard from '@/app/ui/customers/customer-card';
import { useState, useEffect } from 'react';

export default function Page() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/customer/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCustomers(data);
        });
    }, []);

    return (
        <div>
            {customers.map((customer) => (
               <CustomerCard target_customer={customer}/> 
            ))}
        </div>
    )
}