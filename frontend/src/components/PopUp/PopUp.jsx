import React from "react";
import styles from "./PopUp.module.css";

function PopUp({ popup }) {
    console.log(popup.id);

    return <div className={styles.popup}>{popup.id}</div>;
}

export default PopUp;
