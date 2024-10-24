import SearchMicrocontroller from "../components/SearchMicrocontroller/SearchMicrocontroller";
import ListMicrocontroller from "../components/ListMicrocontroller/ListMicrocontroller";
import styles from "./MainPage.module.css";
import { useState } from "react";

function MainPage() {
    const [microcontrollers, setMicrocontrollers] = useState(null);
    const [loading, setLoading] = useState(false);

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
                loading={loading}
            />
        </div>
    );
}

export default MainPage;
