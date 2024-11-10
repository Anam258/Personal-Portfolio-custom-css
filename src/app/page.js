import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import styles from "./styles/styles.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hi, I'm Anam Anwer</h1>
          <p className={styles.heroSubtitle}>
            A passionate web developer specializing in React, Node.js, and more.
          </p>
          <a href="#about" className={styles.ctaButton}>
            More about me
          </a>
        </div>
      </main>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <img
            src="/images/profile2.jpg"
            alt="Anam Anwer"
            className={styles.profileImage}
          />
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p>
              I’m a web developer passionate about creating interactive and
              responsive websites. With experience in React.js, Next.js, and
              Node.js, I am always learning and growing in this field.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new technologies or
              working on personal projects that improve my skills.
            </p>
          </div>
        </div>
      </section>

      <Skills />
      <Footer />
    </div>
  );
}
