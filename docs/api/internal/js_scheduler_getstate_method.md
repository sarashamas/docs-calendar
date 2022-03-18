---
sidebar_label: api.getState()+
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# api.getState()

### Description

@short: Gets an object with the current properties of the Scheduler StateStore

### Usage

~~~jsx {}
api.getState(): object;
~~~

### Returns

The **getState()** method returns an object with the following properties:

~~~jsx {}
{
	bounds: array,
	config: object,
	data: array,
	date: Date,
	dateRange: array,
	datepicker: object,
	edit: boolean,
	editorShape: array,
	eventTypes: array,
	mode: string,
	popupInfo: object,
	selected: string,
	viewData: array,
	viewModel: object
}
~~~  

### Example

~~~jsx {6}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// get the state of Scheduler
const state = calendar.api.getState();
console.log(state);
~~~
