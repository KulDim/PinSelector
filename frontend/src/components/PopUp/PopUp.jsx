import React from "react";
import styles from "./PopUp.module.css";

function PopUp({ popup, setPopup }) {
    function closePopUp(e) {
        if (e.target.className === styles.popupWindow) {
            setPopup(null);
        }
        console.log(popup);
    }

    return (
        <div className={styles.popup}>
            {popup && (
                <div
                    className={styles.popupWindow}
                    onClick={e => closePopUp(e)}
                >
                    <div className={styles.dataWindow}>
                        <div className={styles.data}>
                            <div>title: {popup.title}</div>
                            <div>description: {popup.description}</div>
                            <div>datasheet: {popup.datasheet}</div>
                            <div>counter: {popup.counter}</div>
                            {popup.pins.map(pin => (
                                <div key={pin.id}>
                                    <div>pin: {pin.id} - {pin.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUp;
