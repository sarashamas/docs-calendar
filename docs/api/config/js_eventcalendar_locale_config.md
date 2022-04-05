---
sidebar_label: locale+
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# locale

### Description

@short: Optional. An object of the built-in or custom locale

:::info
The **locale** object includes all labels of Event Calendar with the corresponding translations and other parameters
:::

### Usage

~~~jsx {}
locale?: object; // TODO дать расширенное описание объекта локализации
~~~

### Parameters

In the **locale** object you can specify the following parameters:

- TODO

- `timeFormat` - (optional) a time format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
- `dateFormat` - (optional) a date format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
- `weekStartsOn` - (optional) a start day of week. Here you can specify values from 0 (Sunday) to 6 (Saturday)

### Default config

By default, the **locale** parameter is set to the built-in **en** locale. You can set it to the **ru** or custom locale as well

~~~jsx {}
locale: eventCalendar.en
~~~

:::info
To apply new locale dynamically, you can use the
[**setLocale()**](../../methods/js_eventcalendar_setlocale_method) and 
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
	locale: eventСalendar.ru // apply the "ru" locale by default
	// other configuration parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)