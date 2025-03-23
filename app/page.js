import styles from "./page.module.css";
import Flip from "@/components/FlipContainer/Flip";
import FloatingDock from "@/components/FloatingDock/FloatingDock";
import ExpandingCards from "@/components/ExpandingCards/ExpandingCards";
import MovingCell from "@/components/MovingCell/MovingCell";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 style={{color: "#fff"}}>Flip</h1>
          <p style={{color: "#e3dbd4"}}>A quick coding challenge put together for a bit of fun</p>
      <div className={styles.component__container}>
          <Flip initialText={"Make your site:"} textArray={["Pretty","Reactive","Fun", "User Friendly", "Smart"]} />
      </div>
          <h1 style={{color: "#fff"}}>Floating Dock</h1>
          <p style={{color: "#fff"}}>Created to test my CSS and JS skill *DESKTOP ONLY*</p>
          <div className={styles.component__container}>
                   <FloatingDock/>
          </div>
          <h1 style={{color: "#fff"}}>Expanding Cards</h1>
          <p style={{color: "#fff"}}>Inspiration from some reel I saw on Instagram</p>
          <div className={styles.component__container}>
              <ExpandingCards/>
          </div>
          <h1 style={{color: "#fff"}}>Moving Cell</h1>
          <p style={{color: "#fff"}}>Click a letter and watch the cell move</p>
          <div className={styles.component__container}>
              <MovingCell cells={["Home", "About", "Pricing", "Other", "Hi"]}/>
          </div>
      </main>
    </div>
  );
}
