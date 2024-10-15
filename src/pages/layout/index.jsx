import Menu from "../../components/Menu";
import {Outlet, useLocation} from "react-router-dom";
import Header from "../../components/header";
import {useState} from "react";

function Layout(){
    const value = useLocation()
    console.log(value)
    return(
    <>
        <Menu value={value}/>
        <Outlet/>
    </>

    )
}

export default Layout