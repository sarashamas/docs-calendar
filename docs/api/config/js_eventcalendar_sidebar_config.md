---
sidebar_label: sidebar
title: sidebar Config
description: You can learn about the sidebar config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# sidebar

### Description

@short: Optional. An object of the sidebar configuration

### Usage

~~~jsx {}
sidebar?: { show?: boolean } | null;
~~~

### Parameters

The **sidebar** property can be set to the following parameters:

- an object with a **show** property for displaying a sidebar:
    - `show` - (optional) shows/hides a sidebar
- a **null** value deactivates sidebar and hides a toggle button

### Default config

~~~jsx {}
sidebar: { show: true }
~~~

:::info
To set the **sidebar** config dynamically, you can use the 
[**setConfig()**](api/methods/js_eventcalendar_setconfig_method.md) method
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    sidebar: { show: false }
    // other configuration parameters
});
~~~
