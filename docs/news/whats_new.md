---
sidebar_label: What's new
title: What's new
description: You can explore what's new in DHTMLX Event Calendar and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# What's new

If you are updating Event Calendar from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 1.1

Released on November Day [TODO], 2022

[Review of release on the blog](https://dhtmlx.com/blog/meet-dhtmlx-event-calendar-v1-1/) [TODO]

### New functionality

- An ability to view events in the Year and Agenda modes ([Example](https://snippet.dhtmlx.com/6nl72051))
- An ability to highlight the grid cells via API ([Example](https://snippet.dhtmlx.com/z03jrdu4))
- An ability to use the **multiselet** and **radio** types of editor ([Example](https://snippet.dhtmlx.com/bxwdj1rt))

### Updates

- #### Methods

    - The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method of Event Calendar is updated

- #### Properties

    - The [`templates`](../../api/config/js_eventcalendar_templates_config) property of Event Calendat is extended by the ***yearEvent***, ***agendaEvent*** and ***agendaDate*** parameters ([Example](https://snippet.dhtmlx.com/6nl72051))

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendat is extended by the ***cellCss*** parameter ([Example](https://snippet.dhtmlx.com/z03jrdu4))

    - The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property is extended by the ***multiselect*** and ***radio*** types ([Example](https://snippet.dhtmlx.com/bxwdj1rt))

    - The [`mode`](../../api/config/js_eventcalendar_mode_config) property of Event Calendat is extended by the ***year*** and ***agenda*** parameters (view modes)

## Version 1.0

Released on September 1, 2022

[Review of release on the blog](https://dhtmlx.com/blog/meet-dhtmlx-event-calendar-v1-0/)

### Initial functionality

- The ability to work with events:
    - add new events in the following way:
        - by clicking on the **+ Create event** button
        - by double clicking on the empty space
        - by clicking on the empty space and dragging the cursor down
    - show an info popup window with brief information by clicking on the event
    - edit an event via an editor by double clicking on the event or using the popup window (to open editor)
    - reschedule events by dragging them to the desired position along a time scale (calendar cell/date)
    - reschedule events by resizing them
    - delete events via an info popup or an editor
    - group events using calendars

- The ability to work with calendars:
    - add new calendars
    - edit calendars
    - delete calendars

- The ability to view events through the "Day", "Week" and "Month" view modes

- [Localization](../../guides/localization)
- [Integration with backend](../../guides/working_with_server)
- Cross browser compatibility
- Touch support