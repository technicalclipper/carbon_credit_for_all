import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext, useState } from "react";

export default function Treecard(){
    return(<div className="outertreecard">
        <img className="treecardimage"  src="images/MangoTree.jpg"/>
        <div className="innertreecarddesc">
            <div>BigD</div>
            <div>monday</div>
            <div>species</div>
        </div>
    </div>
    )
}