---
sidebar_label: createEvent()+
title: createEvent Method
description: You can learn about the createEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# createEvent()

### Description

@short: Creates new event and opens an editor

### Usage

~~~jsx {}
createEvent(): void;
~~~

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
	// configuration parameters
});
// create new event
calendar.createEvent();
~~~
