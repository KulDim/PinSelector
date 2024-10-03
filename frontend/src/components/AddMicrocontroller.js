import React, {useState} from 'react';
import "./AddMicrocontroller.css"


function AddMicrocontroller(){

    const [pins, setPin] = useState([
        {"id": 1,"name": "vadim"},
        {"id": 2,"name": ""},
    ]);

    function addButton () {
        const id = pins[pins.length - 1].id + 1
        setPin(pins => [...pins, {"id": id,"name": ""}])
    };

    function inputChange(e) {
        const id = e.target.getAttribute('data-id') - 1
        pins[id].name = e.target.value
        setPin(pins => [...pins])
    };

    return (
        <div>
            <div className="form">
                <div><span>Название</span><input></input></div>

                {pins.map((pin) => (
                    <div key={pin.id}>
                        <span> пин {pin.id} </span>
                        {/* value */}
                        <input onChange={inputChange} data-id={pin.id}></input>
                    </div> 
                ))}

                <button onClick={addButton}>Добавить пин</button>
                <button>seve</button>
            </div>
        </div>
    );
}

export default AddMicrocontroller;