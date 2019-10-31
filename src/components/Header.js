import React from 'react';
import { NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <NavLink to= "/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to= "/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to= "/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to= "/help" activeClassName="is-active" >Help</NavLink>
    
    </header>
)
export default Header;