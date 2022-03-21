---
sidebar_label: setMode()+
title: setMode Method
description: You can learn about the setMode method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# setMode()

### Description

@short: Sets a view mode of Scheduler

### Usage

~~~jsx {}
setMode({ value: string }): void;
~~~

### Parameters

- `value` - (required) a view mode of Scheduler

:::info
You can set the **value** parameter to the *"day"*, *"week"* or *"month"* values
:::

### Example

~~~jsx {6}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// initial configuration parameters
});
// set the "day" mode
calendar.setMode({ value: "day" });
~~~
