---
sidebar_label: locale
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
	dateFnsLocale?: ..., // ??? TODO
	scheduler?: {
		// UI controls translations
		[control_name: string]?: string,
		// time and date settings
		timeFormat?: number, // 12 | 24
		hourFormat?: string,
		minuteFormat?: string,
		monthFormat?: string,
		dateFormat?: string
	},
	core?: {
		// UI controls translations
		[control_name: string]?: string,
		// months and days translations 
		months?: array,
		monthsShort?: array,
		days?: array,
		// start day of week
		weekStart?: number
	}
};
~~~

### Parameters

In the **locale** object you can specify the following parameters:

- `dateFnsLocale` - (optional) **TODO** ???
- `scheduler` - (optional) an object with translations, date and time settings of Event Calendar
	- `control_name` - (optional) a label translation
	- `timeFormat` -  (optional) a time format of Event Calendar. The available values are **12** and **24**
	- `hourFormat` - (optional) an hour format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
	- `minuteFormat` - (optional) a minute format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
	- `monthFormat` - (optional) a month format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
	- `dateFormat` - (optional) a date format of Event Calendar. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
- `core` - (optional) an object of translations of the core elements
	- `control_name` - (optional) a label translation
	- `months` - (optional) an array with full names of months
	- `monthsShort` - (optional) an array with short names of months
	- `days` - (optional) an array with short names of days
	- `weekStart` - (optional) a start day of week. Here you can specify values from 1 (Monday) to 7 (Sunday)

### Default config

By default, the **locale** config is set to the built-in **en** locale

~~~jsx {
const en = {
    dateFnsLocale: dateFnsLocaleEn, // ??? TODO
    scheduler: { // ??? TODO
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
        // time and date settings
        timeFormat: 12,
        hourFormat: "h",
        minuteFormat: "mm",
        monthFormat: "EEE",
        dateFormat: "EEE, d"
    },
    core: {
        // UI controls translations here (TODO !!!)
        ..., 
        // months and days translations  
        months: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        monthsShort: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        days: [ 
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" 
        ],
        // start of week
        weekStart: 7
    }
};
~~~

:::info
You can set the **locale** config to the **ru** or custom locale as well. To apply new locale dynamically, you can use the
[**setLocale()**](../../methods/js_eventcalendar_setlocale_method) and 
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
	locale: eventСalendar.ru // apply the "ru" locale
	// other configuration parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)