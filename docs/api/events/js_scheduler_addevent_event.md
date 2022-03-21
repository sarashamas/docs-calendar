---
sidebar_label: add-event+
title: add-event Event
description: You can learn about the add-event event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# add-event

### Description

@short: Fires when adding a new event

### Usage

~~~jsx {}
"add-event": ({ event: object }) => void;
~~~

### Parameters

The callback of the **add-event** event can take an object with the following parameter:

- `event` - (required) an object of the event data. The full list of the **event** parameter can be found [**here**](api/config/js_scheduler_data_config.md)

:::info
For handling the inner events of Scheduler you can use the [**Event Bus methods**](api/overview/eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// subscribe on the "add-event" event
calendar.api.on("add-event", (obj) => {
	console.log(obj);
});
~~~
