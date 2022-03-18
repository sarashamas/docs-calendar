---
sidebar_label: select-event
title: select-event Event
description: You can learn about the select-event event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# select-event

### Description

@short: fires when ...

### Usage

~~~jsx {}
"select-event": ({
	...	
}) => void;
~~~

### Parameters

The callback of the **select-event** event can take an object with the following parameters:

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

// subscribe on the "select-event" event
calendar.api.on("select-event", (obj) => {
	...
});
~~~
