---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Localization

You can localize labels in the interface of JavaScript Event Calendar and present it in any necessary language. You just need to provide localized strings for labels and apply your locale to the component.

## Default locale

The English locale is used by default:

~~~jsx {}
const en = {
	lang: "en",
    dateFnsLocale: dateFnsLocaleEn, // TODO
    scheduler: {
        "Create event": "Create event",
        "Edit event": "Edit event",
        "Delete event": "Delete event",
        "Event name": "Event name",
        "Start date": "Start date",
        "End date": "End date",
        "All day": "All day",
        Type: "Type",
        Description: "Description",
        Today: "Today",
        Day: "Day",
        Week: "Week",
        Month: "Month",
        Calendars: "Calendars",
        timeFormat: "h a",
        monthFormat: "EEE",
        dateFormat: "EEE, d"
    },
    core: { // TODO
		...
		weekStart: 7
	}
};
~~~

:::info
Besides the ***en*** locale, Event Calendar also includes a built-in ***ru*** one
:::

<details>
<summary><b>ru</b> locale</summary>

~~~jsx
const ru = {
	lang: "en",
    dateFnsLocale: dateFnsLocaleEn, // TODO
    scheduler: {
        "Create event": "Создать событие",
        "Edit event": "Редактировать событие",
        "Delete event": "Удалить событие",
        "Event name": "Название события",
        "Start date": "Дата начала",
        "End date": "Дата конца",
        "All day": "Весь день",
        Type: "Тип",
        Description: "Описание",
        Today: "Сегодня",
        Day: "День",
        Week: "Неделя",
        Month: "Месяц",
        Calendars: "Календари",
        timeFormat: "h a",
        monthFormat: "EEE",
        dateFormat: "EEE, d"
    },
    core: { // TODO
		...
		weekStart: 7
	}
};
~~~
</details>

## Custom locale

To apply a custom locale you need to:

- create the custom locale (or modify the existing one) and provide translations for all text labels in Event Calendar (it can be any language you need)
- apply the new locale via the [**locale**](api/config/event_calendar_locale_config.md) property or by calling the [**setLocale()**](api/methods/event_calendar_setlocale_method.md) method, that takes an object with translations (custom locale) as a parameter

## Example

In this snippet you can see how to switch through the *EN*, *RU* and *CN* locales:

**[TODO]!!! Заменить ссылку на сниппет с локализацией**
<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
