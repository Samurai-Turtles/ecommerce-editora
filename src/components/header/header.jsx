import styles from "./header.module.css";
import Logotype from "../logotype/logotype";
import Actions from "../actions/actions";

export default function Header({logged = false}) {
    console.log(logged);

    return (
        <div className={styles.container}>
            <Logotype />
            <Actions logged={logged} />
        </div>
    )
}