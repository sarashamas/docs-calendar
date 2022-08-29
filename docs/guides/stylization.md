---
sidebar_label: Stylization
title: Stylization
description: You can learn about the stylization in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Stylization

You can stylize any part of the JavaScript Event Calendar interface to meet your project requirements. For this, the library provides a wide range of CSS variables and 3 built-in themes. Note, that Event Calendar includes two types of variables:
- CSS variables related to the **Event Calendar** style
- CSS variables related to the **WX** library style (*controls, calendars etc*)

:::info
Note, that **WX** library is used for inner processes only. It provides some small elements used in Event Calendar and other widgets (*controls, calendars etc*)
:::

## Default style

~~~css
.wx-material-theme,
.wx-portal {
/* Event Calendar css variables */

    --wx-event-calendar_hour-scale-width: 70px;
    --wx-event-calendar_hour-cell-height: 42px;
    --wx-event-calendar_month-cell-min-height: 200px;

/* end of Event Calendar css variables */

/* WX library css variables */

    /* font style */
    --wx-font-size-md: 16px;
    --wx-font-weight-md: 500;
    --wx-line-height-md: 24px;
    --wx-font-weight-b: 700;
    --wx-color-font-disabled: rgba(0, 0, 0, 0.3);
    --wx-line-height: 20px;
    --wx-color-font: rgba(0, 0, 0, 0.7);
    --wx-font-family: Roboto, Arial, Helvetica, sans-serif;
    --wx-color-font-alt: rgba(0, 0, 0, 0.5);
    /* end of font style */

    /* icon style */
    --wx-icon-color: rgba(0, 0, 0, 0.5);
    --wx-icon-size: 20px;
    /* end of icon style */

    --wx-border:  1px solid #dfdfdf;
    
    /* calendar style */
    --wx-calendar-padding: 20px 10px !important;
    --wx-calendar-cell-gap: 5px !important;
    /* end of calendar style */

    /* color style */
    --wx-background-alt-hover: linear-gradient(
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
    );
    --wx-color-danger: #ff5252;
    --wx-background: #fff;
    --wx-background-hover: linear-gradient(
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
    );
    --wx-popup-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    --wx-background-alt: #f7f7f7;
    --wx-color-primary: #2f77e3;
    /* end of color style */

/* end of WX library css variables */
}
~~~

:::tip Note
Next versions of Event Calendar can bring some changes for the variables and their names. Please, do not forget to check the names after updating to the newer versions and modify them in your code to avoid problems with display of the component.
:::

## Themes

Event Calendar allows styling its interface by applying any of 3 built-in themes, namely:

- "material"
- "willow"
- "willowDark".

For details, refer to the [`theme`](api/config/js_eventcalendar_theme_config.md) config.

In this snippet you can see how to apply a new theme to Event Calendar

<iframe src="https://snippet.dhtmlx.com/nh2g0j2o?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Custom style

In this snippet you can see how to apply a custom style to Event Calendar

<iframe src="https://snippet.dhtmlx.com/w0qhtloa?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](../customization/#custom-styles)
