import replace from "gulp-replace";//Поиск и замена
import plumber from "gulp-plumber";//Обработка ошибок
import notify from "gulp-notify";//Сообщения (ошибки)
import browserSync from "browser-sync";//Локальный серевер
import newer from "gulp-newer";//Проверка обновления
import ifPlugin from "gulp-if";

export const plugins=
{
    replace:replace,
    plumber:plumber,
    notify:notify,
    newer:newer,
    browserSync:browserSync,
    if: ifPlugin
}