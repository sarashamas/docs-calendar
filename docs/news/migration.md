---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX eventcalendar.
---

# Migration to newer versions

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