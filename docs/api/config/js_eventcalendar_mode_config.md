---
sidebar_label: mode
title: mode Config
description: You can learn about the mode config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# mode

### Description

@short: Optional. The initial view mode of Event Calendar

### Usage

~~~jsx {}
mode?: string; 
~~~

### Parameters

You can set the **mode** parameter to the following values:

- "day"
- "week"
- "month"

### Default config

By default, the **mode** config is set to the **"week"** value

~~~jsx {}
mode: "week" 
~~~

:::info
To set the view mode dynamically, you can use the
[**setMode()**](../../methods/js_eventcalendar_setmode_method) and
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    mode: "month"
	// other configuration parameters
});
~~~
