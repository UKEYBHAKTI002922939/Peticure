"use client" // set as client component

// impporting necessary file/libraries

import {store} from "./store";
import {Provider }  from "react-redux";
import React from "react";

// Redux function for wrapping
export function ReduxProvider({children}: {children: React.ReactNode}) {
    return <Provider store={store}> {children} </Provider>;
}


