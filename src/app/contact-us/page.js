import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/styles.module.css";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className={styles.contactMain}>
        <section className={styles.contactSection}>
          <h1 className={styles.contactTitle}>Contact Me</h1>
          <p className={styles.contactDescription}>
            Feel free to reach out for any inquiries, collaborations, or just to
            connect!
          </p>

          <form className={styles.contactForm}>
            <div>
              <label className={styles.contactLabel} htmlFor="name">
                Name
              </label>
              <input
                className={styles.contactInput}
                type="text"
                id="name"
                required
              />
            </div>

            <div>
              <label className={styles.contactLabel} htmlFor="email">
                Email
              </label>
              <input
                className={styles.contactInput}
                type="email"
                id="email"
                required
              />
            </div>

            <div>
              <label className={styles.contactLabel} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.contactTextarea}
                id="message"
                required
              />
            </div>

            <button type="submit" className={styles.contactSubmit}>
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
