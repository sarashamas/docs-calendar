---
sidebar_label: serialize()+
title: serialize Method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# serialize()

### Description

@short: Serializes Scheduler data to JSON

### Usage

~~~jsx {}
serialize(): object;
~~~

### Returns

The method returns an object of Scheduler data  

~~~jsx {}
{
	data: [{...}, {...}, ...]
}
~~~

### Example

~~~jsx {6}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", { 
	// configuration parameters
});
// get an object of the Scheduler data
calendar.serialize();
~~~
