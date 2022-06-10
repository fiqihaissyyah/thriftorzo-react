import React from "react";
import "./index.css";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const { data } = useSelector(
        (state) => state.user.user
    );

    console.log(data);

    return (
        <div>
            <h1 className="text-3xl text-center">This is Home!</h1>
        </div>
    );
}