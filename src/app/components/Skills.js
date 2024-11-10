import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import styles from "../styles/styles.module.css";

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsHeading}>My Skills</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillItem}>
          <FaReact className={styles.skillIcon} />
          <p className={styles.skillText}>React</p>
        </div>
        <div className={styles.skillItem}>
          <FaNodeJs className={styles.skillIcon} />
          <p className={styles.skillText}>Node.js</p>
        </div>
        <div className={styles.skillItem}>
          <FaHtml5 className={styles.skillIcon} />
          <p className={styles.skillText}>HTML5</p>
        </div>
        <div className={styles.skillItem}>
          <FaCss3Alt className={styles.skillIcon} />
          <p className={styles.skillText}>CSS3</p>
        </div>
      </div>
    </div>
  );
}
