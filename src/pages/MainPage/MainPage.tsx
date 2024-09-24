import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        Данное портфолио создано при помощи React TS.
      </div>
      <div className={styles.main_item}>
        На данной странице описана общая информация о реализованном функционале
        портфолио.
      </div>
      <div className={styles.main_item}>Навигация:</div>
      <div className={styles.flex_row_container}>
        <ul className={styles.main_ul}>
          <li className={styles.main_ul_li}>
            На странице "Обо мне" вы можете узнать контактную информацию, а
            также о проектах которые я разрабатывал.
          </li>
          <li className={styles.main_ul_li}>
            На странице "Комментарии" реализован стандартный функционал работы с
            комментариями через axios.
          </li>
          <li className={styles.main_ul_li}>
            На странице "Посты" реализован такой же функционал как у
            комментариев, но с помощью RTK Query.
          </li>
          <li className={styles.main_ul_li}>
            Если страницы не существует, вы попадете на страницу с ошибкой.
          </li>
        </ul>
      </div>
    </div>
  );
};
