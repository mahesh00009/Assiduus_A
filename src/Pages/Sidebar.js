

import React, { useState } from 'react'
import './Sidebar.css'

import {BiSolidDashboard, BiSolidUser, BiSolidUserAccount, BiDollar, BiSolidReport, BiSolidContact} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [active, setActive] = useState("dashboard")
  return (
<div className='sidebar'>
    <ul className='sidebarItems'>
        <Link to = "/dashboard" onClick={() => setActive("dashboard")} className={`${active ==="dashboard" ? "active": ""}`}><BiSolidDashboard /> <span>Dashboard</span></Link>

        <Link to = "/accounts"  onClick={() => setActive("accounts")} className={`${active ==="accounts" ? "active": ""}`} ><BiSolidUserAccount/> <span>Accounts</span></Link>

        <Link to = "/payroll"  onClick={() => setActive("payroll")} className={`${active ==="payroll" ? "active": ""}`}><BiDollar/> <span>Payroll</span></Link>

        <Link to = "/reports"  onClick={() => setActive("reports")} className={`${active ==="reports" ? "active": ""}`}><BiSolidReport/> <span>Reports</span></Link>

        <Link to = "/advisor"  onClick={() => setActive("advisor")} className={`${active ==="advisor" ? "active": ""}`}><BiSolidUser/> <span>Advisor</span></Link>

        <Link to = "/contacts" onClick={() => setActive("contacts")} className={`${active ==="contacts" ? "active": ""}`}><BiSolidContact/> <span>Contacts</span></Link>
    </ul>
</div>

  )
}

export default Sidebar