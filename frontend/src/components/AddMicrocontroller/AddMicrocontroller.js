import React, { useState } from "react";
import "./AddMicrocontroller.css";

function AddMicrocontroller() {
    const [title, setTitle] = useState("");
    const [datasheet, setDatasheet] = useState("");
    const [description, setDescription] = useState("");

    const [pins, setPin] = useState([
        { id: 1, name: "" },
        { id: 2, name: "" },
    ]);

    function addButton() {
        const id = pins[pins.length - 1].id + 1;
        setPin(pins => [...pins, { id: id, name: "" }]);
    }

    function inputChange(e) {
        const id = e.target.getAttribute("data-id");
        pins[id].name = e.target.value;
        setPin(pins => [...pins]);
    }

    function sendButton() {
        fetch("/api/addMicrocontroller", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, datasheet, description, pins }),
        })
            .then(response => response.json())
            .then(data => responseCheck(data));
    }

    function responseCheck(data) {
        if (data.status === 200) {
            console.log(data.message);

            setTitle("")
            setPin([
                {"id": 1,"name": ""},
                {"id": 2,"name": ""},
            ])
            setDatasheet("")
            setDescription("")
        }
    }

    return (
        <div className="form">
            
                <div className="form-item">
                    <span>Название</span>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>
                </div>

                <div className="form-item">
                    <span>Datasheet</span>
                    <input
                        value={datasheet}
                        onChange={e => setDatasheet(e.target.value)}
                    ></input>
                </div>

                <div className="form-item">
                    <span>Описание</span>
                    <input
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></input>
                </div>

                    {pins.map(pin => (
                        <div key={pin.id} className="form-item">
                            <span> пин {pin.id} </span>
                            <input
                                onChange={inputChange}
                                data-id={pin.id - 1}
                                value={pin.name}
                            ></input>
                        </div>
                    ))}

                <button onClick={addButton}>Добавить пин</button>
                <button onClick={sendButton}>Сохранить</button>
           
        </div>
    );
}

export default AddMicrocontroller;
