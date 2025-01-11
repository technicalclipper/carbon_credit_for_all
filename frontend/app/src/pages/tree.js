import Header from "../components/header";
import { AuthContext } from "../contexts/authContext";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Treecard from "../components/treecard";
import { predictSpecies } from "../hooks/hooks";
import TreeUploader from "../components/uploadtree";

export default function Tree() {
    const [showUploader, setShowUploader] = useState(false);  // State to control the visibility of TreeUploader

    const handleAddClick = () => {
        setShowUploader(true);  // Show the TreeUploader when "+Add" is clicked
    };

    const handleCloseUploader = () => {
        setShowUploader(false);  // Hide the TreeUploader
    };

    return (
        <div>
            <div className="plantadd">
                <div>Myplants</div>
                <div onClick={handleAddClick} className="plantaddbutton">+Add</div>
            </div>

            {showUploader && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <TreeUploader />
                        <button onClick={handleCloseUploader} className="close-button">Close</button>
                    </div>
                </div>
            )}

            <div className="outercon">
                <div className="innercon">
                    <div className="garden">Your garden🏡 | Chennai</div>
                    <div className="treecon">
                        <Treecard />
                        <Treecard />
                        <Treecard />
                    </div>
                </div>
            </div>
        </div>
    );
}
