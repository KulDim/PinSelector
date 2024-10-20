import { useState, useEffect } from "react";

function ListMicrocontroller({microcontrollers}) {

    return <div>
        {microcontrollers.map((microcontroller, index) => (
            <div key={index}>
                <span>title:{ microcontroller.title }</span>
                <span>datasheet:{ microcontroller.datasheet }</span>
                <span>description:{ microcontroller.description }</span>
                <span>counter:{ microcontroller.counter }</span>
            </div>
        ))}
    </div>;
}

export default ListMicrocontroller;
