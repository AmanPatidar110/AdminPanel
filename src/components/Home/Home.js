import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from "./components/Header/Header";
import Display from "./components/Display/Display";

function Home() {
    return (
        <div>
            <Sidebar />
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Header />
          <Display />
        </div>
        </div>
    )
}

export default Home
