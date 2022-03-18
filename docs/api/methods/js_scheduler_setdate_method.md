---
sidebar_label: setDate()+
title: setDate Method
description: You can learn about the setDate method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# setDate()

### Description

@short: Sets the current date of Scheduler

### Usage

~~~jsx {}
setDate({ value: Date }): void;
~~~

### Parameters

- `value` - (required) the current date of Scheduler

### Example

~~~jsx {6-7}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
//set current date
const date = new Date("2021-05-24 00:00:00");
calendar.setDate({ value: date });
~~~
