---
sidebar_label: setMode()+
title: setMode Method
description: You can learn about the setMode method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# setMode()

### Description

@short: Sets a view mode of Event Calendar

### Usage

~~~jsx {}
setMode({ value: string }): void;
~~~

### Parameters

- `value` - (required) a view mode of Event Calendar

:::info
You can set the **value** parameter to the *"day"*, *"week"* or *"month"* values
:::

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
	// initial configuration parameters
});
// set the "day" mode
calendar.setMode({ value: "day" });
~~~
