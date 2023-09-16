import styles from "./navbar.module.sass";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h2>My Link</h2>
            <ul className={styles.optionsList}>
                <li>Edit Mode</li>
            </ul>
        </nav>
    )
}

export default Navbar;