import LinkBtn from "../linkbtn/LinkBtn";
import styles from "./linkBox.module.sass";

function LinkBox() {

    const exampleDb = [
        {
            name: "xD",
            direction: "https://www.google.com/"
        },
        {
            name: "xD",
            direction: "https://www.google.com/"
        },
        {
            name: "xD",
            direction: "https://www.google.com/"
        },
        {
            name: "xD",
            direction: "https://www.google.com/"
        },{
            name: "xD",
            direction: "https://www.google.com/"
        },{
            name: "xD",
            direction: "https://www.google.com/"
        },{
            name: "xD",
            direction: "https://www.google.com/"
        },{
            name: "xD",
            direction: "https://www.google.com/"
        },{
            name: "xD",
            direction: "https://www.google.com/"
        },{
            name: "xD",
            direction: "https://www.google.com/"
        },
    ]
    return (
        <div className={styles.box}>
            {exampleDb.map((element) => (
                <LinkBtn name={element.name} direction={element.direction} />
            ))}
        </div>
    )
}

export default LinkBox;