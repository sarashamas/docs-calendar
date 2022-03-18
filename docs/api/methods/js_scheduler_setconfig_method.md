---
sidebar_label: setConfig()+
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# setConfig()

### Description

@short: Sets the config parameters of the Scheduler widget

### Usage

~~~jsx {}
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) the object of the Scheduler configuration. See the full list of the parameters [here](api/overview/properties_overview.md)

:::tip
Using this method, you can set the configuration parameters of the Scheduler widget as well as events data. The method changes only the parameters you passed.
:::

### Example

~~~jsx {6-17}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	// configuration parameters
});
// set the configuration parameters of Scheduler
calendar.setConfig({
	config: {
		dragCreate: true,
		eventInfoOnClick: true,
		eventsOverlay: true,
		autoSave: true,
		dragResize: true,
		dragMove: true
	},
	locale: scheduler.ru,
	mode: "month"
});
~~~
