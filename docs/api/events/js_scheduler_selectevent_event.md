---
sidebar_label: select-event+
title: select-event Event
description: You can learn about the select-event event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# select-event

### Description

@short: Fires when showing an info popup window

### Usage

~~~jsx {}
"select-event": ({
	id: string | number,
	popup?: boolean
}) => void;
~~~

### Parameters

The callback of the **select-event** event can take an object with the following parameters:

- `id` - (required) an ID of the event to be selected
- `popup` - (optional) allows to show an info popup window (if ***true***)

:::info
For handling the inner events of Scheduler you can use the [**Event Bus methods**](api/overview/eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// subscribe on the "select-event" event
calendar.api.on("select-event", (obj) => {
	console.log(obj);
});
~~~
