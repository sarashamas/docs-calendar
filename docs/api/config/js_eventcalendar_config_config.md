---
sidebar_label: config+
title: config Config
description: You can learn about the config config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# config

### Description

@short: Optional. An object of the Event Calendar configuration

### Usage

~~~jsx {}
config?: {
    tableHeaderHeight?: number,
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
    defaultEventDuration?: number,
    views?: { 
       day?: object,
       week?: object,
       month?: object
    }
};
~~~

### Parameters

In the **config** object you can specify the following parameters:

- `tableHeaderHeight` - (optional) a height of the Event Calendar header (px)
- `timeStep` - (optional) a step of moving an event
- `dragCreate` - (optional) enables/disables an ability to create new events via d-n-d
- `eventInfoOnClick` - (optional) enables/disables an ability to show info popup by click
- `timeRange` - (optional) an array with start time and end time of the day/week mode
- `eventsOverlay` - (optional) enables/disables an ability to overlay events
- `eventHeight` - (optional) a height of the Event Calendar events
- `autoSave` - (optional) enables/disables an ability to auto save event data (via the editor)
- `dragResize` - (optional) enables/disables an ability to resize events via d-n-d
- `readonly` - (optional) enables/disables an ability to perform operations on events
- `dragMove` - (optional) enables/disables an ability to move events via d-n-d
- `editorOnDblClick` - (optional) enables/disables an ability to open editor by double click
- `defaultEventDuration` - (optional) a duration of the new created event by default (without taking into account creating an event via d-n-d)
- `views` - (optional) an object of view modes configuration. Here you can specify the following objects of parameters:
    - `day` - (optional) an object of the "Day" view mode configuration
    - `week` - (optional) an object of the "Week" view mode configuration
    - `month` - (optional) an object of the "Month" view mode configuration

:::info
To configure the **Day**, **Week** and **Month** view modes separately, you can specify the following parameters:
- `eventsOverlay` - (optional) enables/disables an ability to overlay events (for **Day** and **Week** modes only)
- `timeStep` - (optional) a step of moving an event (for **Day** and **Week** modes only)
- `eventHeight` - (optional) enables/disables an ability to overlay events (for all view modes)
- `timeRange` - (optional) an array with start time and end time of the day/week mode (for **Day** and **Week** modes only)
- `maxEventsPerCell` - (optional) a max mumber of events per cell (for the **Month** mode only)
- `dayHeight` - (optional) a min height of a grid cell (for the **Month** mode only)
- `hourScaleWidth` - (optional) a column width of the "hour" scale of the grid (for **Day** and **Week** modes only)
- `hourHeight` - (optional) a row height of the "hour" scale (for **Day** and **Week** modes only)
- `eventMargin` - (optional) a space between events when **eventsOverlay** is set to *false* (for **Day** and **Week** modes only)
- `columnPadding` - (optional) a right padding of the grid column (for **Day** and **Week** modes only)
:::

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
	maxEventsPerCell: 4
};

const defaultConfig = {
    tableHeaderHeight: 32,
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
    defaultEventDuration: 60,
	views: {
		week: defaultWeekConfig,
		day: defaultWeekConfig,
		month: defaultMonthConfig
	}
};
~~~

:::info
To set the **config** property dynamically, you can use the 
[**setConfig()**](api/methods/js_eventcalendar_setconfig_method.md) method
:::

### Example

~~~jsx {3-20}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    config: {
        autoSave: false,
        dragResize: false,
        readonly: true,
        dragMove: false,
        views: {
            day: {
                hourScaleWidth: 60,
                hourHeight: 50, 
                eventsOverlay: false, 
                timeStep: 20, 
                eventHeight: 30,
                eventMargin:"10px",
                columnPadding: "450px", 
                timeRange: [8, 18]
            }
        }
    },
    // other configuration parameters
});
~~~
