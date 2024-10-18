import SearchMicrocontroller from "../components/SearchMicrocontroller/SearchMicrocontroller";
import ListMicrocontroller from "../components/ListMicrocontroller/ListMicrocontroller";
import styles from "./MainPage.module.css";

function MainPage() {
    return (
        <div className={styles.MainPage}>
            <SearchMicrocontroller />
            <ListMicrocontroller />
        </div>
    );
}

export default MainPage;
