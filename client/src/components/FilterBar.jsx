import react from "react";
import TaskCard from "./TaskCard";
import { useState } from "react";

const Filterbar =({fil,setFilter})=>{

    return(
<div>
    <label>
        search:
    </label>
    <input type="text" value={fil} placeholder="search by title" onChange={(e)=>setFilter(e.target.value)}/>
</div>
    );
}

export default Filterbar;