---
sidebar_label: data
title: data Config
description: You can learn about the data config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# data

### Description

@short: Optional. An array of objects containing the event data

### Usage

~~~jsx {}
data?: [
    {
        start_date: Date,
        end_date: Date,
        allDay?: boolean, 
        id?: string | number,
        type?: string | number,
        text?: string,
        details?: string,
        dragResize?: boolean,
        readonly?: boolean,
        dragMove?: boolean,
        color?: {
            background?: string,
            border?: string,
            textColor?: string
        },
        [custom_key: string]?: any
    },
    {...} // other events data
];
~~~

### Parameters

For each *event* you can specify the following parameters (data):

- `start_date` - (required) a start date of the event
- `end_date` - (required) an end date of the event
- `allDay` - (optional) enables/disables the event duration throughout the day

:::note
If the **allDay** parameter is set to *true*, the **start_date** and **end_date** parameters of the event will be ignored!
:::

- `id` - (optional) an ID of the event
- `type` - (optional) a type (calendar) of the event
- `text` - (optional) a label of the event
- `details` - (optional) details of the event
- `dragResize` - (optional) enables/disables an ability to resize the event via d-n-d
- `readonly` - (optional) enables/disables an ability to perform all the event's operations
- `dragMove` - (optional) enables/disables an ability to move the event via d-n-d
- `color` - (optional) an object with the style parameters of the event. Here you can specify the following parameters (styles):
    - `background` - (optional) a HEX code of the event background color
    - `border` - (optional) a HEX code of the event border color
    - `textColor` - (optional) a HEX code of the event text color
- `custom_key` - (optional) a custom key of the event

:::info
To set the Event Calendar data dynamically, you can use the 
[**parse()**](api/methods/js_eventcalendar_parse_method.md) and
[**setConfig()**](api/methods/js_eventcalendar_setconfig_method.md) methods. You can also update the event data using the [**updateEvent()**](api/methods/js_eventcalendar_updateevent_method.md) method.
:::

### Example

~~~jsx {3-23}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    data: [
        {
            start_date: new Date("2021-05-24 00:00:00"),
            end_date: new Date("2021-06-08 00:00:00"),
            allDay: false,
            id: "1",
            type: "work",
            text: "Current event",
            details: "Philippe-Chatrier Court\n Paris, FRA",
            dragResize: true,
            readonly: false,
            dragMove: true,
            color: {
                background: "#EDD1EC",
                border: "#AD44AB",
                textColor: "#3e98db"
            },
            custom_key: "Custom key of the event"
        },
        // other events data
    ] 
	// other configuration parameters
});
~~~
