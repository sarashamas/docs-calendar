---
sidebar_label: api.getState()
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.getState()

### Description

@short: Gets an object with the current properties of the Event Calendar StateStore

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
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
	// configuration parameters
});
// get the state of Event Calendar
const state = calendar.api.getState();
console.log(state);
~~~
