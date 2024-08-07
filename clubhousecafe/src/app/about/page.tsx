import React, { useLayoutEffect } from "react";

const topbar = {
   backgroundColor: "white",
   padding: "35px 0px 35px 0px",
}

const bottombar = {
    backgroundColor: "white",
    padding: "35px 0px 35px 0px",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
 }


const absoluteCenter =  {
    color: "black",
    alignItems: "center", // does vertically center the desired content
    justifyContent: "center", // horizontally centers single line items
    textAlign: "center", // optional, but helps horizontally center text that breaks into multiple lines
}


export default function about () {
    return (
        <>
        <div style={topbar}>
            <h1 style={absoluteCenter} >About</h1>
        </div>
        <div style={{"backgroundColor":"#e1f5ff", "padding": "35px 0px 35px 0px"}}>
            <h1 >About</h1>
        </div>
        <div style={bottombar}>
            <h1 style={{"color":"black"}}>BOTTON</h1>
        </div>

        </>
    );
}
