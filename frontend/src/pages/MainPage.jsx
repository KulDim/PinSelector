import SearchMicrocontroller from "../components/SearchMicrocontroller/SearchMicrocontroller";
import ListMicrocontroller from "../components/ListMicrocontroller/ListMicrocontroller";
import styles from "./MainPage.module.css";
import { useState } from "react";

function MainPage() {
    const [microcontrollers, setMicrocontrollers] = useState(null)

    function handleMicrocontrollers(data) {
        setMicrocontrollers(data.message)
    }

    return (
        <div className={styles.MainPage}>
            <SearchMicrocontroller handleMicrocontrollers={handleMicrocontrollers}/>
            {microcontrollers && <ListMicrocontroller microcontrollers={microcontrollers}/>}
        </div>
    );
}

export default MainPage;
