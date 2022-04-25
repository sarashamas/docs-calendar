---
sidebar_label: edit-event
title: edit-event Event
description: You can learn about the edit-event event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# edit-event

### Description

@short: Fires when editing an event

### Usage

~~~jsx {}
"edit-event": ({
	id?: string | number, 
	add?: boolean
}) => void;
~~~

### Parameters

The callback of the **edit-event** event can take an object with the following parameters:

- `id` - (optional) an ID of the event to be edited
- `add` - (optional) enables/disables an ability to add new event

Depending on the passed parameters, you can perform the following operations:

1) **open the editor** by the event ID

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
	// configuration parameters
});
// open the editor for the event with the "1" ID
calendar.api.exec("edit-event", { id: "1" });
~~~

2) **open the editor** for the new event

~~~jsx {2}
// open the editor for the new event
calendar.api.exec("edit-event", { add: true });
~~~

3) **close the editor**

~~~jsx {2}
// close the editor 
calendar.api.exec("edit-event");
~~~

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/eventbus_overview.md)
:::

### Example

~~~jsx {7-9}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
	// configuration parameters
});

// subscribe on the "edit-event" event
calendar.api.on("edit-event", (obj) => {
	console.log(obj);
});
~~~
