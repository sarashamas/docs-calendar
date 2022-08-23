---
sidebar_label: date
title: date Config
description: You can learn about the date config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# date

### Description

@short: Optional. A selected date of Event Calendar

### Usage

~~~jsx {}
date?: Date;
~~~

:::info
To set the current date of Event Calendar dynamically, you can use the 
[`setDate()`](api/methods/js_eventcalendar_setdate_method.md) and
[`setConfig()`](api/methods/js_eventcalendar_setconfig_method.md) methods
:::

### Example

~~~jsx {4}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    events,
    date: new Date("2022-04-22 00:00:00"),
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Initialization](https://snippet.dhtmlx.com/btytgzed)