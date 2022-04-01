import React from "react";
import {  Route, Routes } from 'react-router-dom';
import MissedOrders from "./Components/Dashboard/Orders/missedOrder";
import CancelledOrders from "./Components/Dashboard/Orders/cancelledOrders";
import InaccurateOrders from "./Components/Dashboard/Orders/inaccurateOrders";
import MenuList from './Components/Dashboard/MenuList/index';
import AddMeal from './Components/Dashboard/MenuList/AddMeal/addmeal'
import Homepage from "./Pages/Homepage";
import Dashboard from "./Components/Dashboard";
import ErrorPage from "./Pages/ErrorPage";




const App = () =>{
    return(
        <>
            <Routes>
                <Route path="/"  element={<Homepage />}/>
                <Route path="/dashboard"  element={<Dashboard />}/>
                <Route path='/orders/missed' element={<MissedOrders />} />
                <Route path="/orders/inaccurate" element={<InaccurateOrders />} />
                <Route path="/orders/cancelled" element={<CancelledOrders />} />
                <Route path='/list' element={<MenuList />} />
                 <Route path="/lists/addmeal" element={<AddMeal />} />
                 <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default App;