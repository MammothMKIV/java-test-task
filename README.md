# Simple CRUD Java + Angular 4

__Требования:__
* Java 8
* Maven
* NodeJS 6.11.3+
* Angular CLI
* MySQL 5.5+
* Apache Tomcat 8

__Сборка:__
1. В /client/ установить пакеты:
npm install
2. Собрать статику. В /client/ выполнить:
ng build --env=prod --base-href="/CRUDRogovoy/"
3. Установить корректные значения в src\main\resources\application.properties
3. В корне проекта выполнить:
maven clean package

Получившийся в target/CRUDRogovoy.war использовать для установки приложения на Tomcat.