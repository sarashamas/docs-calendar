---
sidebar_label: EVENT_NAME
title: EVWNT_NAME Event
description: You can learn about the add event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# EVENT_NAME

### Description

@short: fires when ...

### Usage

~~~jsx {}
"EVENT_NAME": ({
	...	
}) => void;
~~~

### Parameters

The callback of the **add** event can take an object with the following parameters:

...

:::info
For handling the inner events you can use the [**Event Bus methods**](api/api_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create Scheduler
const scheduler = new scheduler.Scheduler("#root", {
	// initial configuration parameters
});

// subscribe on the "EVENT_NAME" event
scheduler.api.on("EVENT_NAME", (obj) => {
	...
});
~~~
