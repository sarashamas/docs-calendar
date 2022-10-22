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

    eventInfoOnClick?: boolean, 
    editorOnDblClick?: boolean,
    createEventOnDbClick?: boolean,

    eventsOverlay?: boolean,
    autoSave?: boolean,
    readonly?: boolean,

    tableHeaderHeight?: number,
    eventHeight?: number,

    timeStep?: number,
    timeRange?: [number, number],
    defaultEventDuration?: number,

    // this property is used in any of view mode configuration objects 
    // to apply a custom style to the grid cell
    cellCss?: (date) => string, 

    views?: { 
       day?: object,
       week?: object,
       month?: object,
    }
};
~~~

### Parameters

In the **config** object you can specify the following parameters:

- `dragCreate` - (optional) enables/disables an ability to create new events via d-n-d
- `dragResize` - (optional) enables/disables an ability to resize events via d-n-d
- `dragMove` - (optional) enables/disables an ability to move events via d-n-d
- `eventInfoOnClick` - (optional) enables/disables an ability to show info popup by click
- `editorOnDblClick` - (optional) enables/disables an ability to open editor by double click
- `createEventOnDbClick` - (optional) enables/disables an ability to create an event by double click
- `eventsOverlay` - (optional) enables/disables an ability to overlay events
- `autoSave` - (optional) enables/disables an ability to auto save event data (via the editor)
- `readonly` - (optional) enables/disables an ability to perform operations on events
- `tableHeaderHeight` - (optional) a height of the Event Calendar header (px)
- `eventHeight` - (optional) a height of the Event Calendar multievents
- `timeStep` - (optional) a step of moving an event via d-n-d
- `timeRange` - (optional) an array with start and end time of day in the "day" and "week" modes (*0-24*)
- `defaultEventDuration` - (optional) a duration of the new created event by default (without taking into account creating an event via d-n-d)
- `cellCss` - (optional) a custom CSS selector to be applied to a grid cell. This property is used in any of view mode configuration objects to apply a custom style to the grid cell
- `views` - (optional) an object of configurations of the specific view modes. Here you can specify the following objects of settings:
    - `day` - (optional) an object of settings of the "Day" view mode
    - `week` - (optional) an object of settings of the "Week" view mode
    - `month` - (optional) an object of settings of the "Month" view mode

:::note
To configure the **Day**, **Week** and **Month** view modes separately, you can specify the following parameters:

<h4 style = {{color: "green"}}>Common settings</h4>

- `eventHeight?: number` - (optional) a height of the Event Calendar multievents
- `cellCss?: (date) => string` - (optional) a CSS selector to be applied to a grid cell

<h4 style = {{color: "green"}}>"Day" and "Week" view modes settings</h4>

- `eventsOverlay?: boolean` - (optional) enables/disables an ability to overlay events
- `timeStep?: number` - (optional) a step of moving an event via d-n-d
- `timeRange?: array` - (optional) an array with start and end time of day
- `eventMargin?: string` - (optional) a space between events (*px*). To use this parameter, you need to set ***eventsOverlay*** to ***false***
- `columnPadding?: string` - (optional) a right padding of the grid column (*px*)

<h4 style = {{color: "green"}}>"Month" view mode settings</h4>

- `maxEventsPerCell?: number` - (optional) a max number of events per cell
:::

### Default config

~~~jsx {}
const defaultWeekConfig = {
    eventMargin: "3px",
    columnPadding: "8px"
};

const defaultMonthConfig = {
    maxEventsPerCell: 4
};

const defaultConfig = {
    dragCreate: true,
    dragResize: true,
    dragMove: true,

    eventInfoOnClick: true,
    editorOnDblClick: true,
    createEventOnDbClick: true,

    eventsOverlay: false,
    autoSave: true,
    readonly: false,

    tableHeaderHeight: 32,
    eventHeight: 24,

    timeStep: 5,
    timeRange: [0, 24],
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
[`setConfig()`](api/methods/js_eventcalendar_setconfig_method.md) method
:::

### Example

~~~jsx {3-25}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    config: {
        autoSave: false,
        dragResize: false,
        readonly: true,
        dragMove: false,
        views: {
            day: {
                eventsOverlay: false,  
                timeStep: 20, 
                eventHeight: 30, 
                timeRange: [8, 18], 
                eventMargin: "10px", 
                columnPadding: "450px",
                cellCss: date => {
                    const hour = new Date(date).getHours();
                    if (hour === 12) {
                        return "custom-disabled-time";
                    }
                    return "";
                },
            }
        }
    },
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Event color](https://snippet.dhtmlx.com/qw45r367)

**Change log:** The ***cellCss*** parameter of view modes was added in v1.1