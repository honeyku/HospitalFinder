import React from "react";
import CurrentLocation from "../component/currentLocation";

const HomePage = ({ info }) => {
    return (
        <>
            <div className="Home">
                <p>{info}</p>
                <CurrentLocation />

            </div>

        </>
    );
}
export default HomePage;