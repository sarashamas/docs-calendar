---
sidebar_label: locale+
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# locale

### Description

@short: Optional. Sets the built-in or custom locale

:::info
The **locale** object includes all labels of Event Calendar with the corresponding translations
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, the **locale** parameter is set to the built-in **en** locale. You can set it to the **ru** or custom locale as well

~~~jsx {}
locale: eventcalendar.en
~~~

:::info
To apply new locale dynamically, you can use the
[**setLocale()**](../../methods/js_eventcalendar_setlocale_method) and 
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new scheduler.Scheduler("#root", {
	locale: eventcalendar.ru // apply the "ru" locale by default
	// other configuration parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)