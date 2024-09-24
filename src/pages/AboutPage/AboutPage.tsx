import React from "react";

import styles from "./AboutPage.module.scss";

const imageMyPhoto = require("../../resources/images/imageMyPhoto.png");

export const AboutPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.flex_row_container}>
        <img className={styles.photo} src={imageMyPhoto} alt="MyProfilePhoto" />
        <div className={styles.flex_row_item}>
          Меня зовут Илья. Я являюсь постоянно развивающимся разработчиком
          приложений разного профиля. <br />
          На данный момент активно изучаю React, JS, TS для разработки во Front
          End.
          <br />
          <br />
          Так же в процессе изучения ASP.Net, C#, WPF и MongoDB для разработки
          собственного проекта Qumart Seller.
          <br />
          <br />
          Окончил в 2023 году бакалавриат в "Волгоградском государственном
          университете" (Волгу) по направлению "Математическое обеспечение и
          администрирование информационных систем".
          <br />
          <br />
          Темой дипломной работы была разработка сетевой игры на движке Unreal
          Engine 4, изучением которого занимался с 2017 года.
          <br />
          <br />В данный момент в поисках работы. Готов совершенствовать свои
          навыки, учить новое и стать частью вашей команды.
        </div>
      </div>
      <div className={styles.main_spacer}></div>
      <div className={styles.contacts}>
        <div className={styles.contact}>Контактные данные</div>
        <div className={styles.contact}>
          Почта:
          <div className={styles.link}>ilianik34@mail.ru</div>
        </div>
        <div className={styles.contact}>
          Номер телефона:
          <div className={styles.link}> +7(960)-876-13-06</div>
        </div>
        <div className={styles.contact}>
          Телеграмм:
          <a
            className={styles.link}
            href="https://t.me/Ilianik34"
            target="_blank"
          >
            https://t.me/Ilianik34
          </a>
        </div>
        <div className={styles.contact}>
          Github:
          <a
            className={styles.link}
            href="https://github.com/Nailed34"
            target="_blank"
          >
            https://github.com/Nailed34
          </a>
        </div>
      </div>
    </div>
  );
};
