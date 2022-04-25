---
sidebar_label: config
title: config Config
description: You can learn about the config config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# config

### Description

@short: Optional. An object of the Event Calendar configuration

### Usage

~~~jsx {}
config?: {
    dragCreate?: boolean, 
    dragResize?: boolean,
    dragMove?: boolean,

    tableHeaderHeight?: number,
    eventHeight?: number,

    timeStep?: number,
    timeRange?: [number, number],
    defaultEventDuration?: number,

    eventInfoOnClick?: boolean, 
    editorOnDblClick?: boolean,
    createEventOnDbClick?: boolean,

    eventsOverlay?: boolean,
    autoSave?: boolean,
    readonly?: boolean,

    views?: { 
       day?: object,
       week?: object,
       month?: object
    }
};
~~~

### Parameters

In the **config** object you can specify the following parameters:

- `dragCreate` - (optional) enables/disables an ability to create new events via d-n-d
- `dragResize` - (optional) enables/disables an ability to resize events via d-n-d
- `dragMove` - (optional) enables/disables an ability to move events via d-n-d
- `tableHeaderHeight` - (optional) a height of the Event Calendar header (px)
- `eventHeight` - (optional) a height of the Event Calendar events
- `timeStep` - (optional) a step of moving an event via d-n-d
- `timeRange` - (optional) an array with start and end time of day in the "day" and "week" modes
- `defaultEventDuration` - (optional) a duration of the new created event by default (without taking into account creating an event via d-n-d)
- `eventInfoOnClick` - (optional) enables/disables an ability to show info popup by click
- `editorOnDblClick` - (optional) enables/disables an ability to open editor by double click
- `createEventOnDbClick` - (optional) enables/disables an ability to create an event by double click
- `eventsOverlay` - (optional) enables/disables an ability to overlay events
- `autoSave` - (optional) enables/disables an ability to auto save event data (via the editor)
- `readonly` - (optional) enables/disables an ability to perform operations on events
- `views` - (optional) an object of configurations of the specific view modes. Here you can specify the following objects of settings:
    - `day` - (optional) an object of settings of the "Day" view mode
    - `week` - (optional) an object of settings of the "Week" view mode
    - `month` - (optional) an object of settings of the "Month" view mode

:::info
To configure the **Day**, **Week** and **Month** view modes separately, you can specify the following parameters:
- `eventsOverlay` - (optional) enables/disables an ability to overlay events (for **Day** and **Week** modes only)
- `timeStep` - (optional) a step of moving an event via d-n-d (for **Day** and **Week** modes only)
- `eventHeight` - (optional) a height of the Event Calendar events (for all view modes)
- `timeRange` - (optional) an array with start and end time of day (for **Day** and **Week** modes only)
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
    hourScaleWidth: 70,
    hourHeight: 42,
    eventMargin: "3px",
    columnPadding: "8px"
};

const defaultMonthConfig = {
    dayHeight: 200,
    maxEventsPerCell: 4
};

const defaultConfig = {
    dragCreate: true,
    dragResize: true,
    dragMove: true,
    tableHeaderHeight: 32,
    eventHeight: 24,
    timeStep: 5,
    timeRange: [0, 24],
    defaultEventDuration: 60,
    eventInfoOnClick: true,
    editorOnDblClick: true,
    createEventOnDbClick: true,
    eventsOverlay: false,
    autoSave: true,
    readonly: false,
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
                eventMargin: "10px", 
                columnPadding: "450px", 
                timeRange: [8, 18] 
            }
        }
    },
    // other configuration parameters
});
~~~
