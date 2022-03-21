---
sidebar_label: config+
title: config Config
description: You can learn about the config config in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# config

### Description

@short: Optional. An object of the Scheduler configuration

### Usage

~~~jsx {}
config?: {
    timeFormat?: string, 
    dateFormat?: string,
    tableHeaderHeight?: number,
    weekStartsOn?: number,
    timeStep?: number,
    dragCreate?: boolean, 
    eventInfoOnClick?: boolean, 
    timeRange?: [number, number],
    eventsOverlay?: boolean,
    eventHeight?: number,
    autoSave?: boolean,
    dragResize?: boolean,
    readonly?: boolean,
    dragMove?: boolean,
    editorOnDblClick?: boolean,

    // пока не описывал
    views?: { 
        [key: string]: object,
    },
    eventInfo?: object // ???
};
~~~

### Parameters

In the **config** object you can specify the following parameters:

- `timeFormat` - (optional) a time format of Scheduler. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
- `dateFormat` - (optional) a date format of Scheduler. See the available formats [here](https://date-fns.org/v2.27.0/docs/format)
- `tableHeaderHeight` - (optional) a height of the Scheduler header (px)
- `weekStartsOn` - (optional) a start day of week. Here you can specify values from 0 (Sunday) to 6 (Saturday)
- `timeStep` - (optional) a step of moving an event
- `dragCreate` - (optional) enables/disables an ability to create new events via d-n-d
- `eventInfoOnClick` - (optional) enables/disables an ability to show info popup by click
- `timeRange` - (optional) an array with start time and end time of the day/week mode
- `eventsOverlay` - (optional) enables/disables an ability to overlay events
- `eventHeight` - (optional) a height of the Scheduler events
- `autoSave` - (optional) enables/disables an ability to auto save event data (via the editor)
- `dragResize` - (optional) enables/disables an ability to resize events via d-n-d
- `readonly` - (optional) enables/disables an ability to perform operations on events
- `dragMove` - (optional) enables/disables an ability to move events via d-n-d
- `editorOnDblClick` - (optional) enables/disables an ability to open editor by double click

Пока не описывал
- `views` - (optional) 
    - `key` - (optional)

- `eventInfo` - (optional) ???

### Default config

~~~jsx {}
const defaultWeekConfig = {
	hourScaleWidth: 50,
	hourHeight: 42,
	eventMargin: "3px",
	columnPadding: "8px"
};

const defaultMonthConfig = {
	dateHeight: 30,
	dayHeight: 200,
	maxEventsPerCell: 4,
	dateFormat: "E"
};

const defaultSchedulerConfig = {
    timeFormat: "HH:mm", 
    dateFormat: "EEEE, d", 
    tableHeaderHeight: 32, 
    weekStartsOn: 1, // Monday
    timeStep: 5, 
    dragCreate: true,
    eventInfoOnClick: true, 
    timeRange: [0, 24],
    eventsOverlay: false,
    eventHeight: 24,
    autoSave: true,
    dragResize: true,
    readonly: false,
    dragMove: true,
    editorOnDblClick: true,

    // Пока не описывал
    views: {
        week: defaultWeekConfig,
        day: defaultWeekConfig,
        month: defaultMonthConfig
    },
    eventInfo?: {} // ???
};
~~~

:::info
To set the **config** property dynamically, you can use the 
[**setConfig()**](api/methods/js_scheduler_setconfig_method.md) method
:::

### Example

~~~jsx {3-8}
// create Scheduler
new scheduler.Scheduler("#root", {
    config: {
        autoSave: false,
        dragResize: false,
        readonly: true,
        dragMove: false
    },
    // other configuration parameters
});
~~~
