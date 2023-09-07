# Проект: Место React

## [Демонстрация сайта](https://marusillda.github.io/mesto-react/)

![Превью проекта](./src/images/preview.jpg)

## ***Содержание:***
- [Описание проекта](#Description)
- [Используемые технологии](#Technologies)
- [Структура каталога проекта](#ProjectStructure)
- [Оценка качества кода](#Quality)
- [Планы по доработке проекта](#Planes)


# Описание проекта <a id="Description"></a>

**Место** — самостоятельный интерактивный проект в рамках обучения на курсе "Web-разработчик" в Яндекс Практикум с использованием React. В рамках обучения для выполнения проектной работы был предоставлен макет в программе [Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1), по которому нужно было сверствать сайт.
Проект "Место" должен корректно отображаться на экранах размеров 1280px и 320px.


# Используемые технологии <a id="Technologies"></a>

1. Проект реализован с помощью framework React и утилиты Create React App (CRA).
2. Использованы функциоанльные и классовые компоненты, хуки.
3. Элементы пользовательнского интерефейса описаны с помощью JSX — это расширение синтаксиса JavaScript.
4. За описание внешнего вида сайта отвечает язык каскадных таблиц стилей CSS.
5. Все элементы страницы и стили реализованы в соответствии с концепцией [БЭМ](https://ru.bem.info/methodology/quick-start/).
6. При размещении элементов на странице использовалась технология для создания сложных гибких макетов [CSS Flexbox](https://doka.guide/css/flexbox-guide/) и технология [CSS Grid Layout](https://doka.guide/css/flexbox-guide/), которая предлагает систему компоновки на основе сетки со строками и столбцами.
7. Все кнопки на странице имеют состояние наведении мыши. Этот эффект реализован с использованием [псевдоклассов](https://doka.guide/css/pseudoclasses/) и свойства [CSS Transition](https://doka.guide/css/transition/).
8. Изменение внешнего вида элемнтов для корректного отображения на устройствах разного типа реализовано с помощью директив CSS - [медиазапросов](https://doka.guide/css/media/).
9. Плавное открытие и закрытие попапов реализовано с помощью свойств СSS visibility, opacity и transition.
10. Проект поключен к серверу. Адрес сервера проекта Mesto: https://mesto.nomoreparties.co. С сервера загружаются:
  - Информация о пользователе
  - Карточки
  - Количество лайков
11. Создан объект контекста и использован провайдер для передачи данных пользователя во все компоненты.
12. Реализована поддержка лайков и дизлайков.
13. Реализовано удаление карточки, добавленной полььзователем, и добаление карточки с новым местом.
14. Добавлена возможность редактировать данные ползователя.
15. Для получения значений инпутов использован как рефы, так и управляемые копоненты.

# Оценка качества кода <a id="Quality"></a>
Качество кода обусловлено его проверкой по чек-листу Яндекс Практикума, автоматическими проверками и код-ревью специалистом Яндекс Практикума.

# Планы по доработке проекта <a id="Planes"></a>
- сделать фалидацию форм.
- добавить индикатор запросов.
- добавить попап подтверждения удаления карточки с местом.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

