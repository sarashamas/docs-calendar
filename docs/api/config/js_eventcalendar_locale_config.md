---
sidebar_label: locale+
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# locale

### Description

@short: Optional. An object of the built-in or custom locale

:::info
The **locale** object includes all labels of Event Calendar with the corresponding translations and other parameters
:::

### Usage

~~~jsx {}
locale?: {
	lang?: string, // "en", "ru" or custom
	dateFnsLocale?: ..., // ???
	scheduler?: {
		[control_name: string]?: string,
		timeFormat?: string,
		monthFormat?: string,
		dateFormat?: string
	},
	core?: {
		[control_name: string]?: string,
		[control_set: string]?: array,
		weekStart?: number
	}
};
~~~

### Parameters

In the **locale** object you can specify the following parameters:

- `lang` - (optional) a locale name
- `dateFnsLocale` - (optional) **TODO** ???
- `scheduler` - (optional) an object of translations of the "Event Calendar" labels
	- `control_name` - (optional) a label translation
	- `timeFormat` - (optional) a time format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
	- `monthFormat` - (optional) a month format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
	- `dateFormat` - (optional) a date format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
- `core` - (optional) an object of translations of the core elements 
	- `control_name` - (optional) a label translation
	- `control_set` - (optional) an array of the label translations
	- `weekStart` - (optional) a start day of week. Here you can specify values from 1 (Monday) to 7 (Sunday)

### Default config

By default, the **locale** parameter is set to the built-in **en** locale

~~~jsx {
const en = {
	lang: "en",
    dateFnsLocale: dateFnsLocaleEn, // TODO
    scheduler: {
        "Create event": "Create event",
        "Edit event": "Edit event",
        "Delete event": "Delete event",
        "Event name": "Event name",
        "Start date": "Start date",
        "End date": "End date",
        "All day": "All day",
        Type: "Type",
        Description: "Description",
        Today: "Today",
        Day: "Day",
        Week: "Week",
        Month: "Month",
        Calendars: "Calendars",
        timeFormat: "h a",
        monthFormat: "EEE",
        dateFormat: "EEE, d"
    },
    core: { // TODO
		...
		weekStart: 7
	}
};
~~~

:::info
You can set the **locale** parameter to the **ru** or custom locale as well. To apply new locale dynamically, you can use the
[**setLocale()**](../../methods/js_eventcalendar_setlocale_method) and 
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
	locale: eventСalendar.ru // apply the "ru" locale by default
	// other configuration parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)