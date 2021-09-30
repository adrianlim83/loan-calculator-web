
import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import Table from "./Table";
import "./Results.css";
import { useHistory } from 'react-router-dom';

function Results() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // Sample payment details from loan calculator api        
            //        {
            //            "terms": 36,
            //            "loanAmount": 100000.0,
            //            "interestRate": 0.1,
            //            "residentialValue": 0.0,
            //            "exact": true,
            //            "paymentAmount": 3226.72
            //        }
            const results = await axios.get('http://localhost:8080/api/loan/payment/quote/list', {
                params: {
                    timestamp: new Date().getTime()
                }
            });
console.log('test: ')
console.log(results.data)
            setResults(results.data);
        }

        fetchData();
    }
    , []);


    const columns = useMemo(
            () => [
            {
                Header: "Results",
                columns: [
                    {
                        Header: "Terms",
                        accessor: "terms"
                    },
                    {
                        Header: "Loan Amount",
                        accessor: "loanAmount"
                    },
                    {
                        Header: "Interest Rate",
                        accessor: "interestRate"
                    },
                    {
                        Header: "Residual Value",
                        accessor: "residualValue"
                    },
                    {
                        Header: "Loan Fee Amount",
                        accessor: "paymentAmount"
                    }
                ]
            }
        ],
            []
            );

    console.log(results)

    const { push } = useHistory()
    
    return (
            <div className="Results">
                <Table columns={columns} data={results} />
                <button
                    type="button"
                    onClick={() => push('/quote')}
                    >
                    New Quote
                </button>
            </div>
            )
}

export default Results;
