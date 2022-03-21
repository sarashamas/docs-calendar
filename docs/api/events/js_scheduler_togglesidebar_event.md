---
sidebar_label: toggle-sidebar+
title: toggle-sidebar Event
description: You can learn about the toggle-sidebar event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# update-sidebar

### Description

@short: Fires when showing/hiding a sidebar 

### Usage

~~~jsx {}
"toggle-sidebar": ({ show?: boolean }) => void;
~~~

### Parameters

The callback of the **update-sidebar** event can take an object with the following parameter:

- `show` - (optional) allows to show/hide a sidebar  

:::info
For handling the inner events of Scheduler you can use the [**Event Bus methods**](api/overview/eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// subscribe on the "toggle-sidebar" event
calendar.api.on("toggle-sidebar", (obj) => {
	console.log(obj);
});
~~~
