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
import SignUp from "./Pages/signup";
import Auth from "./Components/onboarding/auth";
import SignIn from "./Pages/SignIn";
import Category from './Components/Dashboard/MenuList/category/index';
import BankDetails from "./Components/Settings/bankDetails";



const App = () =>{
    return(
        <>
            <Routes>
                <Route path="/"  element={<Homepage />}/>
                <Route path="/dashboard"  element={<Dashboard messages={<Messages />}/>}/>
                <Route path="/merchant/" element={<SignUp />} />
                <Route path="/merchant/auth" element={<SignIn />}  />
                <Route path="/settings" element={<StoreSettings />} />
                <Route path="/settings/profile" element={<UserProfile />} />
                <Route path='/orders/missed' element={<MissedOrders  messages={<Messages />}/>} />
                <Route path="/orders/inaccurate" element={<InaccurateOrders  messages={<Messages />}/>} />
                <Route path="/orders/cancelled" element={<CancelledOrders  messages={<Messages />}/>} />
                <Route path='/lists' element={<MenuList  messages={<Messages />}/>} />
                 <Route path="/lists/addmeal" element={<AddMeal  messages={<Messages />}/>} />
                 <Route path="/lists/category" element={<Category />} />
                 <Route path="/settings/bank" element={<BankDetails />} />
                 <Route path="/history" element={<History  messages={<Messages />}/>} />
                 <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )
}

export default App;