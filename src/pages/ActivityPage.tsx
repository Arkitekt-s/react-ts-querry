import React from "react"

import {Activities} from "../components/Activities";

import {useAllActivities} from "../hooks/UseAllActivities";

import {DeleteById} from "../components/DeleteById";
import {CreatActivity} from "../components/CreatActivity";
import {UpdateActivity} from "../components/UpdateActivity";
import {SearchActivity} from "../components/SearchActivity";


const ActivityPage = () => {

    return (
        <div>
            {/*//MAKE REALLY NICE table page*/}
            <h1>Activities</h1>
            <div>
                <Activities/>
            </div>

            <CreatActivity/>
            <UpdateActivity/>
            <DeleteById/>
        </div>
    )
}

export {ActivityPage}
