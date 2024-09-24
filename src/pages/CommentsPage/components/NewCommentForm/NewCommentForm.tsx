import { useRef, useState } from "react";

import { ICommentary } from "../../../../connect/models/ICommentary";

import styles from "./NewCommentForm.module.scss";

interface NewCommentFormProps {
  addNewComment: (newComment: ICommentary) => void;
}

export const NewCommentForm = ({ addNewComment }: NewCommentFormProps) => {
  const username = useRef<string>("");
  const email = useRef<string>("");

  const [comment, setComment] = useState<string>("");
  const [validUsername, setValidUsername] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const validateUsername = () => {
    let result = username.current?.length >= 4;
    setValidUsername(result);
    return result;
  };

  const validateEmail = () => {
    let result = email.current?.length >= 4;
    setValidEmail(result);
    return result;
  };

  const validateBody = () => {
    return comment.length > 0;
  };

  const submitNewComment = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateUsername()) return;
    if (!validateEmail()) return;
    if (!validateBody()) return;

    let newComment: ICommentary = {
      name: username.current,
      email: email.current,
      body: comment,
    };

    addNewComment(newComment);
    setComment("");
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.header}>Оставить комментарий</div>

        <div className={styles.flex_container}>
          <div className={styles.field}>
            Ваше имя:
            <input
              className={validUsername ? styles.input : styles.input_error}
              type="text"
              onChange={(e) => {username.current = e.target.value}}
            />
          </div>
          <div className={styles.field}>
            Email:
            <input
              className={validEmail ? styles.input : styles.input_error}
              type="text"
              onChange={(e) => {email.current = e.target.value}}
            />
          </div>
        </div>

        <div className={styles.comment_container}>
          <textarea
            className={comment.length > 0 ? styles.comment_area : styles.comment_area_error}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className={styles.button_container}>
          <button className={styles.button} onClick={submitNewComment}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
