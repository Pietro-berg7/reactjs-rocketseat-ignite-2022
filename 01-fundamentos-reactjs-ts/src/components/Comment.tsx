import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  deleteComment: (content: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/Pietro-berg7.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pietro Bergamaschi</strong>
              <time
                title="11 de Fevereito às 08:13h"
                dateTime="2024-02-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
