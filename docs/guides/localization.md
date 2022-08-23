---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Localization

You can localize all labels of JavaScript Event Calendar and present them in any necessary language. For this you just need to provide the corresponding translations for labels and apply a custom locale to the component.

## Default locale

The **English** locale is used by default:

~~~jsx {}
const en = {
    dateFnsLocale: dateFnsLocaleEn, 
    eventCalendar: { // translations of the Event Calendar labels
        "Add description": "Add description",
        "All day": "All day",
        "Create event": "Create event",
        "Delete event": "Delete event",
        "Edit event": "Edit event",
        "End date": "End date",
        "Event name": "Event name",
        "New Event": "New Event",
        "Start date": "Start date",
        Add: "Add",
        Calendar: "Calendar",
        Calendars: "Calendars",
        Color: "Color",
        confirmDelete: "Are you sure you want to delete this event?",
        confirmUnsaved: "You have unsaved changes! Do you want to discard them?",
        Day: "Day",
        Delete: "Delete",
        Description: "Description",
        Edit: "Edit",
        Month: "Month",
        Name: "Name",
        New: "New",
        Save: "Save",
        Today: "Today",
        Type: "Type",
        Week: "Week",
        // time and date settings
        dateFormat: "EEE, d",
        hourFormat: "H",
        minuteFormat: "mm",
        monthFormat: "EEE",
        timeFormat: 12 // 24

    },
    calendar: { // translations and settings of the calendar
        monthFull: [
            "January", "February", "March", "April",
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        hours: "Hours",
        minutes: "Minutes",
        done: "Done",
        clear: "Clear",
        today: "Today",
        am: ["am", "AM"],
        pm: ["pm", "PM"],
        weekStart: 7, 
    },
    core: { // translations of the WX core elements
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

:::info
Besides the ***en*** locale, Event Calendar also includes a built-in ***ru*** one.
:::

<details>
<summary><b>ru</b> locale</summary>

~~~jsx
const ru = {
    dateFnsLocale: dateFnsLocaleRu,
    eventCalendar: {
		"Add description": "Описание",
		"All day": "Весь день",
		"Create event": "Создать событие",
		"Delete event": "Удалить",
		"Edit event": "Редактировать",
		"End date": "Дата окончания",
		"Event name": "Название",
		"New Event": "Новое событие",
		"Start date": "Дата начала",
		Add: "Добавить",
		Calendar: "Календарь",
		Calendars: "Календари",
		Color: "Цвет",
		confirmDelete: "Вы уверены, что хотите удалить это событие?",
		confirmUnsaved: "У вас есть несохраненные изменения! Вы действительно хотите отменить их?",
		Day: "День",
		Delete: "Удалить",
		Description: "Описание",
		Edit: "Редактировать",
		Month: "Месяц",
		Name: "Имя",
		New: "Новый",
		Save: "Сохранить",
		Today: "Сегодня",
		Type: "Тип",
		Week: "Неделя",
        // time and date settings
		dateFormat: "EEE, d",
		minuteFormat: "mm",
		monthFormat: "EEE",
        hourFormat: "H",
        timeFormat: 24 // 12
	},
    calendar: {
        monthFull: [
            "Январь", "Февраль", "Март", "Апрель",
            "Maй", "Июнь", "Июль", "Август",
            "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь",
        ],
        monthShort: [
            "Янв", "Фев", "Maр", "Aпр",
            "Maй", "Июн", "Июл", "Aвг",
            "Сен", "Окт", "Ноя", "Дек",
        ],
        dayFull: [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
        ],
        dayShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        hours: "Часы",
        minutes: "Минуты",
        done: "Гoтовo",
        clear: "Очистить",
        today: "Сегодня",
        weekStart: 1,
    },
    core: {
        ok:"OK",
        cancel:"Отмена"
    }
};
~~~
</details>

## Custom locale

To apply a custom locale you need to:

- create custom locale (or modify the existing one) and provide translations for all text labels of Event Calendar (it can be any language you need)
- apply new locale via the [`locale`](api/config/js_eventcalendar_locale_config.md) property or via the [`setLocale()`](api/methods/js_eventcalendar_setlocale_method.md) method, that takes an object with translations (custom locale) as a parameter

## Example

In this snippet you can see how to switch between the *EN* and *DE* locales:

<iframe src="https://snippet.dhtmlx.com/v3lszmay?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
