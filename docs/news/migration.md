---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX eventcalendar.
---

# Migration to newer versions

## 2.0.2 -> 2.1

### Api

#### Properties

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the ***dateTitle***, ***eventVerticalSpace*** and ***eventHorizontalSpace*** parameters

~~~jsx {9} title="Before v2.1"
config: {
    ...,
    views: [
        ...,
        {
            ...,
            config: {
                ...,
                eventMerge: "10px",
            }
        }
    ]
}
~~~

~~~jsx {3-5,12-14} title="From v2.1"
config: {
    ...,
    dateTitle: (date, [start, end]) => 
        `${format(start, "do")} - ${format(end, "do")} ${format(date, "LLL")}`, // you can also specify this property for each view separately
    eventVerticalSpace: 8, // you can also specify this property for the "day" | "week" | "month" | "timeline" view modes separately
    views: [
        ...,
        {
            ...,
            config: {
                ...,
                // the "eventMerge" parameter was deprecated
                // use the "eventHorizontalSpace" parameter instead of "eventMerge" one
                eventHorizontalSpace: 10,
            }
        }
    ]
}
~~~

## 2.0.1 -> 2.0.2

### Api

#### Properties

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the ***dateClick*** parameter.

~~~jsx title="Before v2.0.2"
config: {
    ...,
    dimPastEvents: true,
}
~~~

~~~jsx {4} title="From v2.0.2"
config: {
    ...,
    dimPastEvents: true,
    dateClick: false, // or "day" | "week" | "month" | "year" | "agenda" | "timeline"
}
~~~

## 1.1 -> 2.0

### Api

#### Properties

- The [`mode`](../../api/config/js_eventcalendar_mode_config) property was extended by the new mode. Starting from v2.0, you can use the ***timeline*** mode.

~~~jsx title="Before v2.0"
mode: "day", // "week" | "month" | "year" | "agenda" 
~~~

~~~jsx title="From v2.0"
mode: "day", // "week" | "month" | "year" | "agenda" | "timeline" | custom_view_id
~~~

- The [`templates`](../../api/config/js_eventcalendar_templates_config) property was extended by the new template. Starting from v2.0, you can use the ***timelineSection*** template.

~~~jsx title="Before v2.0"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    yearEvent: ({ event, calendar }) => {...},
    agendaEvent: ({ event, calendar }) => {...},
    agendaDate: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...}
}
~~~

~~~jsx {10} title="From v2.0"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    yearEvent: ({ event, calendar }) => {...},
    agendaEvent: ({ event, calendar }) => {...},
    agendaDate: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...},
    timelineSection: (section) => {...},
}
~~~

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the new parameters. Starting from v2.0, you can use the ***viewControl*** and ***dimPastEvents*** parameters. The ***views*** parameter was fully updated.

~~~jsx title="Before v2.0"
config: {
    ...,
    views: { 
        day: {
            ...,
            cellCss: (date) => {
                ...,
                return string;
            },
        },
        week: { ... },
        month: { ... }
    }
}
~~~

~~~jsx {3-40} title="From v2.0"
config: {
    ...,
    dimPastEvents: true,
    viewControl: "auto", // "toggle" | "dropdown" | "none"
    views: [
        {
            id: "week",
            label: "Week",
            layout: "week",
            config: defaultWeekConfig
        },
        { 
            id: "day", 
            label: "Day",  
            layout: "day",
            config: defaultWeekConfig
        },
        { 
            id: "month",
            label: "Month",
            layout: "month",
            config: defaultMonthConfig
        },
        { 
            id: "year", 
            label: "Year", 
            layout: "year" 
        },
        { 
            id: "agenda", 
            label: "Agenda", 
            layout: "agenda" 
        },
        { 
            id: "timeline",
            label: "Timeline",
            layout: "timeline",
            config: defaultTimelineConfig
        }
    ]
}
~~~

- The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property was extended by the new editor type. Starting from v2.0, you can use the ***recurring*** editor type.

~~~jsx title="Before v2.0"
editorShape: [
    ...,
    {
        type: "combo", // "text" | "textarea" | "multiselect" | "color" | "checkbox" | "date" | "radio" | "files" 
        ...,
    },
]
~~~

~~~jsx {} title="From v2.0"
editorShape: [
    ...,
    {
        type: "combo", // "recurring" | "text" | "textarea" | "multiselect" | "color" | "checkbox" | "date" | "radio" | "files" 
        ...,
    },   
]      
~~~

- The [`events`](../../api/config/js_eventcalendar_events_config) property was extended by the new fields. Starting from v2.0, you can use the ***RRULE***, ***STDATE***, ***DTEND*** and ***recurring*** parameters (data fields).

~~~jsx title="Before v2.0"
events: [
    {
        id: "1",
        type: "work",
        // ...
    }, {...}
    // other events data
]
~~~

~~~jsx {6-9} title="From v2.0"
events: [
    {
        id: "1",
        type: "work",
        // ...
        RRULE: "FREQ=WEEKLY;INTERVAL=1;BYDAY=Mo,Tu,We,Th,Fr",
        recurring: true,
        STDATE: new Date("2023-01-27T15:00:00"),
        DTEND: new Date("2023-06-27T15:00:00"),
    }, {...}
    // other events data
]
~~~

#### Methods

- The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method was updated:

~~~jsx {} title="Before v2.0"
setMode({ value: "day" }); // value: "day" | "week" | "month" | "year" | "agenda"
~~~

~~~jsx {} title="From v2.0"
setMode({ value: "day" }); // value: "timeline" | "day" | "week" | "month" | "year" | "agenda" | custom_view_id
~~~

## 1.0 -> 1.1

### Api

#### Properties

- The [`mode`](../../api/config/js_eventcalendar_mode_config) property was extended by the new modes. Starting from v1.1, you can use the ***year*** and ***agenda*** modes.

~~~jsx title="Before v1.1"
mode: "day", // "week" | "month" 
~~~

~~~jsx title="From v1.1"
mode: "day", // "week" | "month" | "year" | "agenda"
~~~

- The [`templates`](../../api/config/js_eventcalendar_templates_config) property was extended by the new templates. Starting from v1.1, you can use the ***yearEvent***, ***agendaEvent*** and ***agendaDate*** templates.

~~~jsx title="Before v1.1"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...}
}
~~~

~~~jsx {4-6} title="From v1.1"
templates: {
    weekEvent: ({ event, calendar }) => {...},
    monthEvent: ({ event, calendar }) => {...},
    yearEvent: ({ event, calendar }) => {...},
    agendaEvent: ({ event, calendar }) => {...},
    agendaDate: ({ event, calendar }) => {...},
    multievent: ({ event, calendar }) => {...},
    header: ({ date, dateFormat }) => {...},
    popup: ({ event, calendar }) => {...}
}
~~~

- The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the new parameter. Starting from v1.1, you can use the ***cellCss*** parameter.

~~~jsx title="Before v1.1"
config: {
    ...,
    views: { 
        day: { ... },
        week: { ... },
        month: { ... }
    }
}
~~~

~~~jsx {6-9} title="From v1.1"
config: {
    ...,
    views: { 
        day: {
            ...,
            cellCss: (date) => {
                ...,
                return string;
            },
        },
        week: { ... },
        month: { ... }
    }
}
~~~

- The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property was extended by the new editor types. Starting from v1.1, you can use the ***multiselect*** and ***radio*** editor types. For ***multiselect*** and ***combo*** types you can also customize options using the *template* parameter.

~~~jsx title="Before v1.1"
editorShape: [
    ...,
    {
        type: "combo", 
        key: "priority_key",
        label: "Event priority",
        options: [
            { id: 1, label: "high" },
            { id: 2, label: "medium" },
            { id: 3, label: "low" }
        ],
        config: {
            disabled: false,
            placeholder: "Select priority"
        }
    }
]
~~~

~~~jsx {4,16-20,23-30} title="From v1.1"
editorShape: [
        ...,
        {
            type: "multiselect", // or "combo"
            key: "priority_key",
            label: "Event priority",
            options: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ],
            config: {
                disabled: false,
                placeholder: "Select priority"
            },
            template: (option) => {
                return `<div className="multiselect-wraper">
                    <img src=${option.avatar} alt="" className="multieselectOption-img" />
                    ${option.label} </div>`
            }
        },
        { 
            type: "radio",
            key: "priority",
            label: "Priority",
            options: [
                { id: 1, label: "High" },
                { id: 2, label: "Medium" },
                { id: 3, label: "Low" }
            ]
        }
~~~

#### Methods

- The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method was updated:

~~~jsx {} title="Before v1.1"
setMode({ value: "day" }); // value: "day" | "week" | "month" 
~~~

~~~jsx title="From v1.1"
setMode({ value: "day" }); // value: "day" | "week" | "month" | "year" | "agenda"
~~~