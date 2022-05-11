---
sidebar_label: colors
title: colors Config
description: You can learn about the colors config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# colors

### Description

@short: Optional. A set of colors used for colorpickers

### Usage

~~~jsx {}
colors?: array; 
~~~

### Parameters

In the array of the **colors** property you can specify a set of **colors** used for colorpickers of Event Calendar

### Default config

~~~jsx {}
const colors = [ // TODO
    "#00a037",
    "#df282f",
    "#fd772c",
    "#6d4bce",
    "#b26bd3",
    "#c87095",
    "#90564d",
    "#eb2f89",
    "#ea77c0",
    "#777676",
    "#a9a8a8",
    "#9bb402",
    "#e7a90b",
    "#0bbed7",
    "#038cd9"
]; 
~~~

:::info
To set the colors dynamically, you can use the
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) method
:::

### Example

~~~jsx {3-7}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    colors: [
        "#00a037",
        "#df282f",
        "#fd772c"
    ],
	// other configuration parameters
});
~~~
