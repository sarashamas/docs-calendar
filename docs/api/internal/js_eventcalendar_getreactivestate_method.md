---
sidebar_label: api.getReactiveState()+
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# api.getReactiveState()

### Description

@short: Gets an object with the reactive properties of the Event Calendar StateStore

### Usage

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns

The method returns an object with the following properties:

~~~jsx {}
{
	bounds: object,
	config: object,
	data: object,
	date: object,
	dateRange: object,
	datepicker: object,
	edit: object,
	editorShape: object,
	eventTypes: object,
	mode: object,
	popupInfo: object,
	selected: object,
	viewData: object,
	viewModel: object
}
~~~  

### Example

~~~jsx {6-11}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
	// configuration properties
});
// subscribe on the event selection
calendar.api.getReactiveState().selected.subscribe((value) => {
	console.log(value);
	// other actions
});
~~~
