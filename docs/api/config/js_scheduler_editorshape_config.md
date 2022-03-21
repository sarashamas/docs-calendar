---
sidebar_label: editorShape+
title: editorShape Config
description: You can learn about the editorShape config in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# editorShape

### Description

@short: Optional. An array of objects containing settings for managing the appearance and functionality of the Scheduler editor

### Usage

~~~jsx {}
editorShape?: {
	type: string,
	key: string,
	label?: string,
	options?: [
		{
			id: any,
			label: string
		},
		{...} // other options
	],
	time?: boolean,
	colors?: array,
	text?: string,
	config?: {
		readonly?: boolean,
		focus?: boolean,
		type?: string,
		placeholder?: string
	}
};
~~~

### Parameters

To configure the editor appearance and functionality, you can specify the following parameters (fields):

- `type` - (required) an editor field type. Here you can specify the following types: 
**text**, **date**, **checkbox**, **combo**, **color** and **textarea**
- `key` - (required) an editor field key. Here you need to use the value specified in the [data](../js_scheduler_data_config) property. See the example below:

~~~js {4-6,13,19,27}
// event data
const data = [
	{
		start_date: new Date("2021-05-24 00:00:00"),
		text: "Current event",
		type: "Work"
	}, {...}
];
// editor settings
const editorShape = { 
	{
		type: "date",
		key: "start_date",
		label: "Start date",
		time: true
	},
	{
		type: "text",
		key: "text",
		label: "Event name",
		config: {
			placeholder: "New event"
		}
	},
	{
		type: "combo",
		key: "type",
		label: "Type"
	}
};
~~~

- `label` - (optional) an editor field label
- `options` - (optional) an array of objects with the dropdown options (only for **combo** type). Here you can specify the following fields:
	- `id` - (required) an option **ID**
	- `label` - (required) an option label
- `time` - (optional) enables/disables a time selector (only for **date** type)
- `text` - (optional) text label (only for **checkbox** type)
- `colors` - (optional) an array with valid HEX codes (only for **color** type)
- `config` - (optional) an object with the additional configurations of the field. Here you can specify the following parameters:
	- `readonly` - (optional) enables/disables a readonly mode of the editor field
	- `focus` - (optional) enables/disables a focus on the field
	- `type` - (optional) a type of the field (only for **text** type). Here you can specify only the **password**, **number**, and **text** values
	- `placeholder` - (optional) a placeholder of the field (only for the **text** and **textarea** types)

:::info
Unless you specify the editor settings via the **editorShape** property, the widget will apply a **defaultEditorShape** set of parameters!
:::

### Default config

~~~jsx {}
const defaultEditorShape = [
	{
		key: "text",
		type: "text",
		label: "Event name",
		config: {
			placeholder: "New Event"
		}
	},
	{
		type: "date",
		key: "start_date",
		label: "Start date",
		time: true
	},
	{
		type: "date",
		key: "end_date",
		label: "End date",
		time: true
	},
	{
		type: "checkbox",
		key: "allDay",
		text: "All day"
	},
	{
		type: "combo",
		key: "type",
		label: "Type"
	},
	{
		key: "details",
		type: "textarea",
		label: "Description",
		config: {
			placeholder: "Add description"
		}
	}
];
~~~

:::info
To set the **editorShape** property dynamically, you can use the 
[**setConfig()**](api/methods/js_scheduler_setconfig_method.md) method
:::

### Example

~~~jsx {8-16,19}
// event priorities
const priorities = [
    { id: 1, label: "high" },
    { id: 2, label: "medium" },
    { id: 3, label: "low" }
];
// editor settings
const editorShape = [ 
	...scheduler.defaultEditorShape, // include the default settings
	{ // add custom field
		type: "combo",
		key: "priority",
		label: "Priority",
		options: priorities
	}
];
// create Scheduler
new scheduler.Scheduler("#root", {
	editorSchape
	// other configuration parameters
});
~~~

**Related articles:** [Configuration](../../../guides/configuration#editor)
