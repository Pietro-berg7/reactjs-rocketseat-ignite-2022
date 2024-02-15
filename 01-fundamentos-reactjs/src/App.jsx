import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pietro Bergamaschi"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum doloremque quo sunt eligendi exercitationem dolores, nobis laborum magni, minus, explicabo unde modi. Praesentium consectetur ea excepturi odio quia hic minus."
          />
          <Post
            author="Bechote"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum doloremque quo sunt eligendi exercitationem dolores, nobis laborum magni, minus, explicabo unde modi. Praesentium consectetur ea excepturi odio quia hic minus."
          />
        </main>
      </div>
    </div>
  );
}
