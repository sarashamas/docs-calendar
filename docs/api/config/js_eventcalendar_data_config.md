---
sidebar_label: data+
title: data Config
description: You can learn about the data config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# data

### Description

@short: Optional. An array of objects containing the events data

### Usage

~~~jsx {}
data?: [
    {
        start_date: Date,
        end_date: Date,
        id?: string | number,
        type?: string | number,
        text?: string,
        details?: string,
        background?: string,
        border?: string,
        color?: string,
        dragResize?: boolean,
        readonly?: boolean,
        dragMove?: boolean,
        [custom_key: string]?: any
    },
    {...} // other events data
];
~~~

### Parameters

For each event you can specify the following parameters (data):

- `start_date` - (required) a start date of the event
- `end_date` - (required) an end date of the event
- `id` - (optional) an ID of the event
- `type` - (optional) a type of the event
- `text` - (optional) a label of the event
- `details` - (optional) details of the event
- `background` - (optional) a background color of the event
- `border` - (optional) a border color of the event
- `color` - (optional) a font color of the event
- `dragResize` - (optional) an ability to block resizing the event via d-n-d
- `readonly` - (optional) an ability to block all the event operations
- `dragMove` - (optional) an ability to block moving the event via d-n-d
- `custom_key` - (optional) a custom key of the event

:::info
To set the Event Calendar data dynamically, you can use the 
[**parse()**](api/methods/js_eventcalendar_parse_method.md) and
[**setConfig()**](api/methods/js_eventcalendar_setconfig_method.md) methods. You can also update the event data using the [**updateEvent()**](api/methods/js_eventcalendar_updateevent_method.md) method.
:::

### Example

~~~jsx {3-20}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    data: [
        {
            start_date: new Date("2021-05-24 00:00:00"),
            end_date: new Date("2021-06-08 00:00:00"),
            id: "1",
            type: "Work",
            text: "Current event",
            details: "Philippe-Chatrier Court\n Paris, FRA",
            background: "red",
            border: "green",
            color: "orange",
            dragResize: true,
            readonly: false,
            dragMove: true,
            custom_key: "Custom key of the event"
        },
        // other events data
    ] 
	// other configuration parameters
});
~~~
