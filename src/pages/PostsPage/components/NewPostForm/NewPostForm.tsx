import { useState } from "react";

import { postsApi } from "../../../../connect/postsApi/postsApi";

import styles from "./NewPostForm.module.scss";

interface NewPostFormProps {}

export const NewPostForm = ({}: NewPostFormProps) => {
  const [createPost, { error: createError }] = postsApi.useCreateNewPostMutation();

  const [isValidTitle, setIsValidTitle] = useState<boolean>(true);
  const [isValidBody, setIsValidBody] = useState<boolean>(true);

  const [titleText, setTitleText] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");

  const addPost = () => {
    let isValid = true;
    if (!validateTitle()) isValid = false;
    if (!validateBody()) isValid = false;

    if (isValid) {
      createPost({ title: titleText, body: bodyText });
      setTitleText("");
      setBodyText("");
    }
  };

  const validateTitle = () => {
    let result = titleText?.length >= 4;
    setIsValidTitle(result);
    return result;
  };

  const validateBody = () => {
    let result = bodyText?.length >= 4;
    setIsValidBody(result);
    return result;
  };

  return (
    <div className={styles.main}>
      <div>Создать пост</div>
      <input
        className={isValidTitle ? styles.title : styles.title_error}
        type="text"
        placeholder="Заголовок"
        value={titleText}
        onChange={(e) => { setTitleText(e.target.value) }}
        onFocus={() => { setIsValidTitle(true) }}
      ></input>

      <textarea
        className={isValidBody ? styles.new_post_body : styles.new_post_body_error}
        placeholder="Описание"
        value={bodyText}
        onChange={(e) => { setBodyText(e.target.value); }}
        onFocus={() => { setIsValidBody(true); }}
      ></textarea>

      <div className={styles.button_send} onClick={addPost}>
        Отправить
      </div>
      <div className={createError ? styles.creation_error : styles.creation_error_hidden}>
        Ошибка создания поста
      </div>
    </div>
  );
};
