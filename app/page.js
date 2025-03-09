import styles from "./page.module.css";
import Flip from "@/components/FlipContainer/Flip";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 style={{color: "#fff"}}>Flip</h1>
          <p style={{color: "#e3dbd4"}}>A quick coding challenge put together for a bit of fun</p>
      <div className={styles.component__container}>
          <Flip initialText={"Make your site:"} textArray={["Pretty","Reactive","Fun", "User Friendly", "Smart"]} />
      </div>
      </main>
    </div>
  );
}
