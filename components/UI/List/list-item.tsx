import styles from "@/styles/UI.module.css";

interface Props {
    width: string;
    content:string;
}
export default function List(props: Props) {
    return (
        <>
            <li className="list-group-item">
                {props.content}
                <div className={styles["progress-bar"]}>
                    <div className={styles["progress"]} style={{'--progress-width': props.width}as React.CSSProperties} ></div>
                </div>
            </li>
        </>
    )
}
