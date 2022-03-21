---
sidebar_label: set-date+
title: set-date Event
description: You can learn about the set-date event in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# set-date

### Description

@short: Fires when setting a new date

### Usage

~~~jsx {}
"set-date": ({ value: Date }) => void;
~~~

### Parameters

The callback of the **set-date** event can take an object with the following parameters:

- `value` - (required) a current date to be set

:::info
For handling the inner events of Scheduler you can use the [**Event Bus methods**](api/overview/eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// subscribe on the "set-date" event
calendar.api.on("set-date", (obj) => {
	console.log(obj);
});
~~~
