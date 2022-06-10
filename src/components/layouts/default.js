import React from "react";
import { Outlet } from 'react-router-dom';

import Header from "../header/index";
import Footer from "../footer/index";

export default function DefaultLayout(props) {
    return (
        <>
            <Header />
                <Outlet {...props} />
            <Footer />
        </>
    );
}