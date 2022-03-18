---
sidebar_label: set-bound
title: set-bound Event
description: You can learn about the set-bound event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# set-bound

### Description

@short: fires when ...

### Usage

~~~jsx {}
"set-bound": ({
	...	
}) => void;
~~~

### Parameters

The callback of the **set-bound** event can take an object with the following parameters:

...

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// initial configuration parameters
});

// subscribe on the "set-bound" event
calendar.api.on("set-bound", (obj) => {
	...
});
~~~
