import React from "react";
import {  Route, Routes } from 'react-router-dom';
import MissedOrders from "./Components/Dashboard/Orders/missedOrder";
import CancelledOrders from "./Components/Dashboard/Orders/cancelledOrders";
import InaccurateOrders from "./Components/Dashboard/Orders/inaccurateOrders";
import MenuList from './Components/Dashboard/MenuList/index';
import AddMeal from './Components/Dashboard/MenuList/AddMeal/addmeal'
import Homepage from "./Pages/Homepage";
import History from "./Components/Dashboard/transaction-history";
import Dashboard from "./Components/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
import Messages from "./Components/messages";
import StoreSettings from "./Components/Settings/storeSettings";
import UserProfile from "./Components/Settings/userProfile";




const App = () =>{
    return(
        <>
            <Routes>
                <Route path="/"  element={<Homepage />}/>
                <Route path="/dashboard"  element={<Dashboard messages={<Messages />}/>}/>
                <Route path="/settings" element={<StoreSettings />} />
                <Route path="/settings/profile" element={<UserProfile />} />
                <Route path='/orders/missed' element={<MissedOrders  messages={<Messages />}/>} />
                <Route path="/orders/inaccurate" element={<InaccurateOrders  messages={<Messages />}/>} />
                <Route path="/orders/cancelled" element={<CancelledOrders  messages={<Messages />}/>} />
                <Route path='/list' element={<MenuList  messages={<Messages />}/>} />
                 <Route path="/lists/addmeal" element={<AddMeal  messages={<Messages />}/>} />
                 <Route path="/history" element={<History  messages={<Messages />}/>} />
                 <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default App;