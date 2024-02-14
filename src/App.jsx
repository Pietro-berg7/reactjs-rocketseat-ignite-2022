import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Pietro Bergamaschi"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum doloremque quo sunt eligendi exercitationem dolores, nobis laborum magni, minus, explicabo unde modi. Praesentium consectetur ea excepturi odio quia hic minus."
      />
      <Post
        author="Bechote"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum doloremque quo sunt eligendi exercitationem dolores, nobis laborum magni, minus, explicabo unde modi. Praesentium consectetur ea excepturi odio quia hic minus."
      />
    </div>
  );
}
