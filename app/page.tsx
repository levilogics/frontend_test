import styles from "./page.module.css";
import Gallery from "./gallery";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
    </main>
  );
}
