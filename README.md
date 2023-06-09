# Тестовое задание

## Описание задачи

![Снимок-t](https://user-images.githubusercontent.com/39487464/231236670-8a73c3d9-0b77-43e0-8557-466b75eee549.JPG)
![Снимок-003](https://user-images.githubusercontent.com/39487464/231229902-6337b2fa-b635-4071-b65d-bf2f7bdc62a2.JPG)
<br><br>

## Шаги реализации

<h2 align="center"><a href="https://test-task-imgloader.vercel.app/" target="_blank">Deploy link</a></h2>

1. **Дизайн в целом выполнен согласно примеру** ✅
2. **Начальное состояние приложения:** ✅

- картинка-заглушка
- таблица с данными (по дефолту пуста)
- кнопки, которые не участвуют в разработке на текущем этапе, залочены

3. **Реализация загрузки файла-картинки при нажатии на кнопку File выполнена, при этом:** ✅

- при загрузке картинка отражается в соотвествующей области
- в таблице отразятся свойства картинки, которые мы можем достать согласно документации, а именно:<br>
  название картинки, её тип (jpg/jpeg/png), её вес (в зависимости от размера данные будут в bytes/Kb/Mb), дата последнего изменения и условный путь, который нам доступен из значения value у input type="file"

4. **Реализация отражения пути к картинке в виде дерева папок** ❓ 🤔<br>
   Данный пункт вызвал у меня вопрос, т.к. согласно документации значение value не может предоставить полный абсолютный путь к файлу по причине ограничений безопасности. Мы, независимо от браузера, в value получаем путь типа _"C:\\fakepath\pic-name.jpg"_.

Поэтому, чтобы не оставлять этот пункт совсем без реализации, на свое усмотрение решила отразить условную статичную директорию согласно макету.
Данные директории реализованы не в html, а хранятся в виде объекта, а построение дерева осуществляется путем использования функции с рекурсией.<br>

![Снимок-9а9](https://user-images.githubusercontent.com/39487464/231234755-eec84e4c-2cee-44af-9c37-9630380bd613.JPG)

Чтобы как-то задействовать кнопку Tree, изначально дерево папок отражается с эффектом размытия, а при нажатии на кнопку этот эффект тогглится.

5. **Реализована адаптивная верстка (на экранах от 320px)** ✅ <br/>

![screen](https://user-images.githubusercontent.com/39487464/231236312-dfccd0f7-d55b-4b97-8d75-b1e9db4c0d5e.jpg)

## Выводы

В целом задачка понравилось, пришлось "поднять" знания об инпутах с type="file", поэтому полезностей получила достаточно 😉<br>

Вопрос с отражением директории остается открытым, т.к. пока не представляю, что имел ввиду автор 🤔. Может быть есть лайфхак, как в рамках браузера можно обойти этот момент, но я с такой информацией не столкнулась. На просторах интернета проскользнула мысль, что некоторые браузеры выдают абсолютные путь, но проверенные мной - Chrome/Opera/Firefox/Edge/Yandex - четко говорили "нет" 😁 <br/>

![Без названия](https://user-images.githubusercontent.com/39487464/231240665-763c91b7-c18a-46f6-840c-0adcd2fd893d.jpg)

Для себя отметила, что на решение этой задачки (в таком виде, как получилось), ушло около 1/2 рабочего дня в перерывах между основной работой.
