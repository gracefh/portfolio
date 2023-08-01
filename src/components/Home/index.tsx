import React from "react";
import styles from './styles.module.css';

export const Home = () => {
    return (
        <main >
            <section className={styles.intro}>
                <div className={styles.introText}>
                    <p style={{"left": "55vw", "top": "20vh"}}>Hi! I'm Grace</p>
                    <p style={{"left": "65vw", "top": "25vh"}}>Senior at MIT</p>
                    <p style={{"left": "60vw", "top": "30vh"}}>CS + HCI</p>
                </div>  
            </section>
            <section className={styles.projects}>
                <h2 className={styles.sectionHeader}>projects</h2>
                <div className={styles.projectsGrid}>
                    <div className={styles.projectRow}>
                        <div className={styles.projectPic}>
                            Project 1
                        </div>
                        <div className={styles.projectDesc}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Modi cum maiores illum fugit delectus dolore suscipit harum qui saepe ex eaque,
                            architecto quae ipsum impedit consequatur et sit. Corrupti, nulla!
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </main>
    )
}

