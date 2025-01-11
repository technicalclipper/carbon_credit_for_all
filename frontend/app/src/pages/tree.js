import Header from "../components/header";
import { AuthContext } from "../contexts/authContext";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Treecard from "../components/treecard";
import { predictSpecies } from "../hooks/hooks";
import TreeUploader from "../components/uploadtree";
export default function Tree(){
    

    return(
    <div>
        <div className="plantadd">
            <div>Myplants</div>
            <div onClick={()=>{}} className="plantaddbutton">+Add</div>
        </div>

        <div className="outercon">
            
            <div className="innercon">
                <div className="garden">Your garden🏡 | chennai</div>
                <div className="treecon">
                    <Treecard/>
                    <Treecard/>
                    <Treecard/>
                </div>
            </div>
        </div>
    </div>
    )
}

