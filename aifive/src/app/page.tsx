import React from "react";
import Link from "next/link";
const Home = () => {
    return (
        <div style={{ height: "100vh", padding: "20px", backgroundColor:"#232323", color:"white"}}>
            <h1 style={{fontSize:"48", marginBottom:"20px"}}>Homepage</h1>
            <p style={{fontSize:"18px",marginBottom:"30px"}}>
                This project .......
                <a href="" style={{color: "#87CEFA",textDecoration:"none"}}>whatttt</a>
                . Quixkly use below links to navigate through all page.
            </p>
            <ul style={{ listStyle:"none", padding:"0"}}>
                <li style={{ marginBottom:"10px"}}>
                    <Link href="/tripsaifive" style={{ color:"#87CEFA", textDecoration:"none"}}>
                    TripAIFive
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;