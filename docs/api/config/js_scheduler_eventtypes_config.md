---
sidebar_label: eventTypes+
title: eventTypes Config
description: You can learn about the eventTypes config in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# eventTypes

### Description

@short: Optional. An array of event types

### Usage

~~~jsx {}
eventTypes?: { 
    id: string | number,
    label: string,
    color?: {
        background?: string, 
        border?: string,
        color?: string
    }
}
~~~

### Parameters

For each event type you can specify the following parameters (data):

- `id` - (required) an ID of the event type
- `label` - (required) a text label of the event type
- `color` - (optional) an object of the event type styles. Here you can specify the following parameters:
    - `background` - (optional) a background color of the event type
    - `border` - (optional) a border color of the event type
    - `color` - (optional) a font color of the event type

### Default config

~~~jsx {}
const defaultEventTypes = [
	{
		id: "Work",
		label: "Work",
		color: {
			background: "#d5eaf7",
			border: "#098CDC"
		}
	},
	{
		id: "Meeting",
		label: "Meeting",
		color: {
			background: "#E6E5EC",
			border: "#7A67EB"
		}
	},
	{
		id: "Rest",
		label: "Rest",
		color: {
			background: "#EDD1EC",
			border: "#AD44AB"
		}
	},
	{
		id: "Movie",
		label: "Movie",
		color: {
			background: "#CEEDC3",
			border: "#77D257"
		}
	}
];
~~~

:::info
To set the **eventTypes** property dynamically, you can use the 
[**setConfig()**](api/methods/js_scheduler_setconfig_method.md) method
:::

### Example

~~~jsx {2-21,23}
// custom event types
const eventTypes = [
    {
		id: "Rest",
		label: "Custom Rest",
		color: {
			background: "#EDD1EC",
			border: "#AD44AB",
            color: "#3e98db"
		}
	},
	{
		id: "Movie",
		label: "Custom Movie",
		color: {
			background: "#CEEDC3",
			border: "#77D257",
            color: "#3e98db"
		}
	}
];
// create Scheduler
new scheduler.Scheduler("#root", {
    eventTypes
	// other configuration parameters
});
~~~
