import React from "react"
import Common from "./Common"
import web from "../src/images/canoe.jpg"

const Home = () => {
    return (
        <>
        <Common name='Grow here with us' imgsrc={web} visit="/service" btname="Get Started"/>
        </>
    )
}

export default Home;