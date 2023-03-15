# vue-brick

##  Стэк:
Vue 3, Vuex, Typescrpt


Упор делал больше на функционал и архитектурные моменты, на верстку особо времени не тратил, однако создал несколько переиспользуемых ui компонентов,
со своими темами пропсами и тд можно чекнуть папку shared

## За основу архитектуры фронта взял Feature-Sliced

## Что было сделано

Создано несколько ui компонентов
Типизорван Vuex Store
подключен vue-svg-loader через vue.config.json
минимальный инстанс axios
разбивка на entity типазация entity
Типизированы несколько компонентов
Все основные фичи сделаны
Использован Телепорт для модалки
Vuex декомпозирован на entity

## Что можно было сделать но затратно по времени
Полностью типизировать все компоненты
Пересмотреть некоторые ui компоненты на наличие в них какой-то бизнес логики
Создать нормальный ui компонент для инпутов типа TextField
Поставить нормальные плагины для обработки форм и их валидации
Нету public api из feature sliced архитектуры
Нормально настроить webpack
Поставить линтеры
Разбить vuex actions mutations getters по отдельным файлам
Прочекать перфоманс асинк чанки и тд
Ну и можно было бы сверстать до конца)

Не делал это так как займет много времени(

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Start json-server
```
json-server --watch db.json --port 8000
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
