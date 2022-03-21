---
sidebar_label: sidebar+
title: sidebar Config
description: You can learn about the sidebar config in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# config

### Description

@short: Optional. An object of the sidebar configuration

### Usage

~~~jsx {}
sidebar?: { show?: boolean } | null;
~~~

### Parameters

The **sidebar** property can be set to the following parameters:

- an object with a **show** property to show/hide a sidebar:
    - `show` - (optional) shows/hides a sidebar
- a **null** value to hide a toggle button

### Default config

~~~jsx {}
sidebar: { show: true }
~~~

:::info
To set the **sidebar** property dynamically, you can use the 
[**setConfig()**](api/methods/js_scheduler_setconfig_method.md) method
:::

### Example

~~~jsx {3}
// create Scheduler
new scheduler.Scheduler("#root", {
    sidebar: { show: false }
    // other configuration parameters
});
~~~
