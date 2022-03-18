---
sidebar_label: parse()+
title: parse Method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# parse()

### Description

@short: Parses data into Scheduler

### Usage

~~~jsx {}
parse( data: array ): void;
~~~

### Parameters

- `data` - (required) an array of objects of the events data

:::info
For details, see the [**data**](../../config/js_scheduler_data_config) config of Scheduler
:::

### Example

~~~jsx {6-23,25}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});

const calendar_data = [
	{
		id: "1",
		type: "Work",
		start_date: new Date("2021-05-24 00:00:00"),
		end_date: new Date("2021-06-08 00:00:00"),
		text: "French Open",
		details: "Philippe-Chatrier Court\n Paris, FRA",
	},
	{
		id: "2",
		type: "Work",
		start_date: new Date("2021-06-07 00:00:00"),
		end_date: new Date("2021-06-13 00:00:00"),
		text: "French Open",
		details: "Philippe-Chatrier Court\n Paris, FRA",
	}, ...
];
// parse data into Scheduler
calendar.parse(calendar_data);
~~~

**Related articles:** [Working with Data](../../../guides/working_with_data#loading-data-from-local-source)
