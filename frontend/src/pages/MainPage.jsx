import SearchMicrocontroller from "../components/SearchMicrocontroller/SearchMicrocontroller";
import ListMicrocontroller from "../components/ListMicrocontroller/ListMicrocontroller";
import PopUp from "../components/PopUp/PopUp";
import styles from "./MainPage.module.css";
import { useState } from "react";
import AddMicrocontroller from "../components/AddMicrocontroller/AddMicrocontroller";

function MainPage() {
    const [microcontrollers, setMicrocontrollers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(null);

    function handleMicrocontrollers(data) {
        if (data === null) {
            setMicrocontrollers(null);
            return;
        }
        setMicrocontrollers(data.message);
        setLoading(false);
    }

    return (
        <div className={styles.MainPage}>
            <SearchMicrocontroller
                handleMicrocontrollers={handleMicrocontrollers}
                setLoading={setLoading}
            />
            <ListMicrocontroller
                microcontrollers={microcontrollers}
                popup={setPopup}
                loading={loading}
            />
            <PopUp popup={popup} setPopup={setPopup} />
            {/* <AddMicrocontroller></AddMicrocontroller> */}
        </div>
    );
}

export default MainPage;
