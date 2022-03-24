import React from "react"



const AddLabel=()=>{
    let colors =[
    {
        value:1,
        label:"purple",
    },
    {
        value:2,
        label:"verde",
    },
    {
        value:3,
        label:"orange"
    },
    {
        value:4,
        label:"blue"
    }
]
    return(
        <div>
            <select class="form-select" aria-label="Default select example">
                   <option value="1" >Personal</option>
                   <option value="2">Work</option>
                   <option value="3">Home</option>
                   <option value="4">Social</option>
           </select>
        </div>

    )
}

export default AddLabel;