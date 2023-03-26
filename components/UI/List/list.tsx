import styles from "@/styles/UI.module.css";
import ListItem from "@/components/UI/List/list-item"
import Projects from "@/components/Proyects/Projects"

export default function List() {
    const LIST =[{content:"C++",level:"80%"},{content:"Python",level:"40%"},{content:"Javascript",level:"80%"},
        {content:"React",level:"80%"},{content:"C++",level:"80%"},{content:"NodeJs",level:"60%"},
        {content:"HTML, CSS",level:"60%"},{content:"SQL",level:"30%"},{content:"mongoDB",level:"50%"}]
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-12 col-lg-6">
                    <h2 className={styles["subtitle"]}>Programming languages and technologies</h2>
                    <ul className="list-group">
                        {LIST.map(list_item=><ListItem content={list_item.content} width={list_item.level} />) }
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <Projects/>
                </div>
                </div>
            </div>
        </>
    )
}