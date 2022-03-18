---
sidebar_label: deleteEvent()+
title: deleteEvent Method
description: You can learn about the deleteEvent method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# deleteEvent()

### Description

@short: Removes an event by its ID from datastore of Scheduler

### Usage

~~~jsx {}
deleteEvent({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an **ID** of the event to be deleted 

### Example

~~~jsx {6}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// remove an event with the "1" ID
calendar.deleteEvent({ id: "1" });
~~~
