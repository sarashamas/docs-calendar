---
sidebar_label: serialize()
title: serialize Method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# serialize()

### Description

@short: Serializes Event Calendar data to JSON

### Usage

~~~jsx {}
serialize(): object;
~~~

### Returns

The method returns an object of Event Calendar data  

~~~jsx {}
{
	data: [{...}, {...}, ...]
}
~~~

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", { 
	// configuration parameters
});
// get an object of the Event Calendar data
calendar.serialize();
~~~
