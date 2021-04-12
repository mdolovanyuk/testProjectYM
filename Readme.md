# TestProjectYM 


## Описание

В проекте реализовано тестирование части функциональности сайта Яндекс.Маркет по поиску модели телевизора.

Целевой браузер - Google Chrome, версия 89.0.4389.

Тесты запускаются параллельно.

## Структура проекта 
-  **//TV_PriceMaker.js** 

   содержит функцию TV_PriceMaker (param_1, param_2), которая на сайте Яндекс.Маркет совершает поиск 
телевизоров по набору параметров {Цена  от, Производитель} 
и осуществляет переход на страницу первой модели из списка. 
В качестве результата функция возвращает значения цены и 
производителя с открытой страницы;
   

- **//tests/TV_PriceMaker<1,2,3>.test.js** 

   тестовые файлы, в которых происходит вызов описанной выше 
функции с 
  определенными значениями параметров и проверка того, 
  что функция вернула подходящие под эти условия результаты;


- **//package.json**
  
   содержит краткое описание проекта, зависимости, настройки. 


## Использованные инструменты

- **Google Chrome**, версия 89.0.4389 - целевой браузер;

- **Selenium WebDriver** - библиотека для автоматизации действий вэб-браузера;
  
- **Node.js** - серверная платформа для работы с JavaScript;
  
- **Jest** - фреймворк для параллельного запуска тестов и сопоставления результатов.


## Инструкция по запуску


1. Необходимо установить следующее программное обеспечение:
   - Браузер Google Chrome, версия 89.0.4389
  https://www.google.ru/chrome/
  
   - Selenium Webdriver, версия 89.0.4389.23
     http://chromedriver.storage.googleapis.com/index.html?path=89.0.4389.23/
     
     Указать путь к папке с файлом chromedriver.exe в переменной среды path;

   - Node.js

     https://nodejs.org/en/download/


2. Скопировать проект TestProjectYM;


3. В командной строке перейти в директорию с содержимым проекта. Запустить команду для загрузки зависимостей:
   
        npm install

4. В командной строке запустить выполнение тестов с помощью команды:
          
       npm test

5. После окончания выполнения тестов ознакомиться с результатами в командной строке.

![Пример1](https://github.com/mdolovanyuk/testProjectYM/blob/master/pics/picErr.png "Один из тестов завершился с ошибкой")

![Пример2](https://github.com/mdolovanyuk/testProjectYM/blob/master/pics/picAcc.png "Успешное выполнение тестового прогона")

*Примечание. Чтобы исключить тест из списка выполняемых, нужно к функции test добавить skip:*


    test.skip('TestName', async () => {
    ...
