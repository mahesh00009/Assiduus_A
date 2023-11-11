

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3';

import "./Data.css"
import { checkingAccountData } from '../Datas/CheckingAccountData';
import { AccountInvoiceChart } from '../Charts/AccountInvoiceChart';
import InvoiceOwedChart from '../Charts/InvoiceOwedChart';
import CashFlowChart from '../Charts/CashFlowChart';
import { cashFlowData } from '../Datas/CashFlowData';

const Data = () => {
  const [selectedMonth, setSelectedMonth] = useState(checkingAccountData[0]);


  const data = {
    headings: ['Sales', 'Advertising', 'Inventory', 'Entertainment', 'Product'],
    thisMonth: [1000, 6000, 4000, 0, 4500],
    ytd: [11000, 9000, 8000, 0, 2500],
  };

  const handleMonthChange = (event) => {
    const selected = checkingAccountData.find(month => month.month === event.target.value);
    setSelectedMonth(selected);
  };

  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const svgWidth = 600;
    const svgHeight = 250;

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(checkingAccountData, d => d.balance)])
      .range([svgHeight, 0]);

    svg.selectAll('rect')
      .data(checkingAccountData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (svgWidth / checkingAccountData.length))
      .attr('y', d => yScale(d.balance))
      .attr('width', svgWidth / checkingAccountData.length - 5)
      .attr('height', d => svgHeight - yScale(d.balance));
  }, []);

  return (
    <div className='data'>

      <div>
        <div className='headingWithChart'>

          <h3>Checking Account Balance</h3>
          <select value={selectedMonth.month} onChange={handleMonthChange}>
            {checkingAccountData.map(month => (
              <option key={month.month} value={month.month}>
                {month.month}
              </option>
            ))}
          </select>
        </div>
        <AccountInvoiceChart data={selectedMonth} />
      </div>


      <div>
        <div className='headingWithChart'>
          <h3>Invoices Owed To You</h3>

          <div class="file-upload-container">
            <input type="file" class="file-input" id="fileInput" />

            <label for="fileInput" class="file-button">
              <span class="file-button-label">New Sales Invoice</span>
            </label>

          </div>

        </div>

        <InvoiceOwedChart />

      </div>



      <div>

        <div className='headingWithChart'>
          <h3>Total Cash Flow</h3>

          <div className='colors'>
            <p>In</p>
            <p>Out</p>
          </div>

        </div>

        <CashFlowChart data={cashFlowData} />


      </div>
      <div>

        <div className='headingWithChart'>
          <h3>Account Watchlist</h3>

        </div>

        <table className="watchlist-table">
          <thead>
            <tr>
              <th>Account</th>
              <th>This Month</th>
              <th>YTD</th>
            </tr>
          </thead>
          <tbody>
            {data.headings.map((heading, index) => (
              <tr key={index}>
                <td>{heading}</td>
                <td>${data.thisMonth[index]}</td>
                <td>${data.ytd[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Data