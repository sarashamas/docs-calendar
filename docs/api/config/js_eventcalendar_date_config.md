---
sidebar_label: date+
title: date Config
description: You can learn about the date config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# date

### Description

@short: Optional. Initial date of Event Calendar

### Usage

~~~jsx {}
date?: Date;
~~~

:::info
To set the **date** property dynamically, you can use the 
[**setDate()**](api/methods/js_eventcalendar_setdate_method.md) and
[**setConfig()**](api/methods/js_eventcalendar_setconfig_method.md) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new scheduler.Scheduler("#root", {
    date: new Date("2022-03-15 00:00:00"),
	// other configuration parameters
});
~~~
