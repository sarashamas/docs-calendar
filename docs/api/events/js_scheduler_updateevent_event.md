---
sidebar_label: update-event
title: update-event Event
description: You can learn about the update-event event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# update-event

### Description

@short: fires when ...

### Usage

~~~jsx {}
"update-event": ({
	...	
}) => void;
~~~

### Parameters

The callback of the **update-event** event can take an object with the following parameters:

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

// subscribe on the "update-event" event
calendar.api.on("update-event", (obj) => {
	...
});
~~~
