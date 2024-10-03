import React, {useState} from 'react';
import "./AddMicrocontroller.css"


function AddMicrocontroller(){

    const [title, setTitle] = useState("")

    const [pins, setPin] = useState([
        {"id": 1,"name": ""},
        {"id": 2,"name": ""},
    ]);

    function addButton () {
        const id = pins[pins.length - 1].id + 1
        setPin(pins => [...pins, {"id": id,"name": ""}])
    };

    function inputChange(e) {
        const id = e.target.getAttribute('data-id')
        pins[id].name = e.target.value
        setPin(pins => [...pins])
    };

    function sendButton() {
        fetch("/api/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"title": title, "pins": pins})
        })
        .then(response => response.json())
        .then(data => responseCheck(data))
    }

    function responseCheck(data) {
        if (data.status == 200) {
            console.log(data.message)
            setTitle("")
            setPin([
                {"id": 1,"name": ""},
                {"id": 2,"name": ""},
            ])
        }
    }

    return (
        <div>
            <div className="form">
                <div>
                    <span>Название</span>
                    <input value={title} onChange={e => setTitle(e.target.value)}></input>
                </div>

                {pins.map((pin) => (
                    <div key={pin.id}>
                        <span> пин {pin.id} </span>
                        <input onChange={inputChange} data-id={pin.id - 1} value={pin.name}></input>
                    </div> 
                ))}

                <button onClick={addButton}>Добавить пин</button>
                <button onClick={sendButton}>Сохранить</button>
            </div>
        </div>
    );
}

export default AddMicrocontroller;