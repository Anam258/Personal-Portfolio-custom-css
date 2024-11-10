import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/styles.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.heroTitle}>About Me</h1>

        <div className={styles.contentSection}>
          <img
            src="/profile1.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.contentText}>
            <p>
              Hi, I'm Anam Anwer, a passionate web developer dedicated to
              crafting user-centric, responsive websites. I'm expanding my
              knowledge in modern technologies like Next.js and React.js.
            </p>
            <p>
              I believe in the power of collaboration and continuous growth. I
              am constantly exploring new tools, patterns, and techniques to
              improve my skills.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
