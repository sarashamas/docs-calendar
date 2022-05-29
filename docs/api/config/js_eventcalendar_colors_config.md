---
sidebar_label: colors
title: colors Config
description: You can learn about the colors config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# colors

### Description

@short: Optional. An array of objects containing the parameters of colors used in colorpicker

### Usage

~~~jsx {}
colors?: [
    {
        backgroung: string, 
        border: string, 
        textColor?: string, 
        colorpicker?: string
    },
    {...}
]; 
~~~

### Parameters

For each set of colors you can specify the following parameters:

- `background` - (required) a HEX code of the event background color
- `border` - (required) a HEX code of the event border color
- `textColor` - (optional) a HEX code of the event text color
- `colorpicker` - (optional) a value (color) used in colorpicker. The possible values are *"background"* and *"border"*

### Default config

~~~jsx {}
const defaultColors = [
    { background: "#d0fefd", border: "#12FCF7" },
    { background: "#ccf5ff", border: "#00CDFF" },
    { background: "#cee8f8", border: "#098CDC" },
    { background: "#fbe5fa", border: "#EA7EE6" },
    { background: "#efdaee", border: "#AD44AB" },
    { background: "#ffdfde", border: "#FE6158" },
    { background: "#fef1d5", border: "#FCBA2E" },
    { background: "#fefee3", border: "#F9F871" },
    { background: "#f2f6dd", border: "#BED453" },
    { background: "#e4f6dd", border: "#77D257" },
    { background: "#cceeda", border: "#00AA48" },
    { background: "#eeeef1", border: "#ACA9BB" },
    { background: "#f0eef8", border: "#B6A8DE" },
    { background: "#e4e1fb", border: "#7A67EB" },
    { background: "#d7d6ef", border: "#3733AE" }
];
~~~

:::info
To set the colors dynamically, you can use the
[**setConfig()**](../../methods/js_eventcalendar_setconfig_method) method
:::

### Example

~~~jsx {3-22}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    colors: [
       {
            background: "#d62b31",
            border: "#32a852",
            textColor: "#e5f01d",
            colorpicker: "background"
        },
        {
            background: "#ccf5ff",
            border: "#00CDFF",
            textColor: "#e5f01d",
            colorpicker: "background"
        },
        {
            background: "#cee8f8",
            border: "#098CDC",
            textColor: "#e5f01d",
            colorpicker: "border"
        }
    ],
	// other configuration parameters
});
~~~
