import styles from "./NotFound.module.css";
import imgNotFound from "../../Assets/Imgs/image.png"


const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <img src={imgNotFound} alt="404" />
        </div>
    );
};

export default PageNotFound;