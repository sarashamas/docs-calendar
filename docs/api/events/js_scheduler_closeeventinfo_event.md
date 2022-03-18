---
sidebar_label: close-event-info
title: close-event-info Event
description: You can learn about the close-event-info event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# close-event-info

### Description

@short: fires when ...

### Usage

~~~jsx {}
"close-event-info": ({
	...	
}) => void;
~~~

### Parameters

The callback of the **close-event-info** event can take an object with the following parameters:

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

// subscribe on the "close-event-info" event
calendar.api.on("close-event-info", (obj) => {
	...
});
~~~
