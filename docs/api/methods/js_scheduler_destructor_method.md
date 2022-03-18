---
sidebar_label: destructor()+
title: destructor Method
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# destructor()

### Description

@short: Removes all HTML elements of Scheduler, and detaches all related events

### Usage

~~~jsx {}
destructor(): void;
~~~

### Example

~~~jsx {6}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	//configuration parameters
});
// delete Scheduler
calendar.destructor();
~~~
