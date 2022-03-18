---
sidebar_label: mode+
title: mode Config
description: You can learn about the mode config in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# mode

### Description

@short: Optional. Sets initial view mode of Scheduler

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

By default, the **mode** property is set to the **"week"** value

~~~jsx {}
mode: "week" 
~~~

:::info
To set the view mode dynamically, you can use the
[**setMode()**](../../methods/js_scheduler_setmode_method) and
[**setConfig()**](../../methods/js_scheduler_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Scheduler
new scheduler.Scheduler("#root", {
    mode: "month"
	// other configuration parameters
});
~~~
