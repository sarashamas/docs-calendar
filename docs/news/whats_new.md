---
sidebar_label: What's new
title: What's new
description: You can explore what's new in DHTMLX Event Calendar and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# What's new

If you are updating Event Calendar from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 2.1.5

Released on November 15, 2023

### Fixes

- Script error occurs on double click in **Unassigned** section of Timeline
- Deleting symbols from search input doesn't update search result
- Deleting instances of recurring series doesn't work
- Regression in the [`setConfig()`](../../api/methods/js_eventcalendar_setconfig_method) method introduced in v2.1.4
- The [`setConfig()`](../../api/methods/js_eventcalendar_setconfig_method) method doesn't store the previous state
- Buttons on the Editor panel now have fixed position instead of static
- Style improvements

## Version 2.1.4

Released on November 3, 2023

### Fixes

- A click on the navigation panel doesn't close the datepicker
- The edit form doesn't work correctly for recurring events
- Optimize calls of subscribe callback functions

## Version 2.1.3

Released on October 31, 2023

### New functionality

- An ability to validate data entered in the edit panel fields

### New API

- #### Properties

	- [`editorValidation`](../../api/config/js_eventcalendar_editorvalidation_config)

### Fixes

- Incorrect display of events with duplicated ids. Duplicating id is not allowed
- Content of the Timeline label stretches the column and causes incorrect position of events
- The `setLocale()` method doesn't work
- Timeline shows events that end before min-date of the time scale
- The **Today** line in **Agenda** view is displayed on top of datepicker calendar
- The wrong key for the **Assignees** label in the locale object
- The `dateTitle` template doesn't work in **Agenda** and **Year** views

## Version 2.1.2

Released on September 15, 2023

### Updates

- The [`createEvent()`](../../api/methods/js_eventcalendar_createevent_method) method was extended by the **event** object argument

### Fixes

- Script error when calling the `setConfig()` or `setLocale()` method if the Event Calendar configuration includes templates
- Rebuilding Event Calendar when calling the `setConfig()` method
- Regression from v2.1.0 causing a script error at the Event Calendar startup if the *Day/Week* views in the views array lack their own configuration options
- Event positioning issues occurs after dragging and dropping multiday events
- Incorrect format of event ID arguments in various event handlers
- UI animations

## Version 2.1.1

Released on September 5, 2023

### Updates

- Support of server-side updates and [Multiuser backend](../../guides/working_with_server/#multiuser-backend) ([Example](https://snippet.dhtmlx.com/ga85sc0x?tag=event_calendar))
- An ability to import Event Calendar package as ES module

## Version 2.1

Released on August 30, 2023

### Updates
- #### Properties

    - The [`config`](../../api/config/js_eventcalendar_config_config) property was extended by the ***dateTitle***, ***eventVerticalSpace*** and ***eventHorizontalSpace*** parameters
- #### Style

    - New CSS animations and transitions when working with UI

### Deprecated API

The ***eventMargin*** parameter of the [`config`](../../api/config/js_eventcalendar_config_config) property was deprecated. Use the ***eventHorizontalSpace*** parameter instead

### Fixes​

- The info popup does not show in the **readonly** mode
- The event can be created via an editor in the **readonly** mode
- *Script error* occurs when a date is clicked in the **Year** view
- The view selector width on Toolbar is 100% on any screen

## Version 2.0.3

Released on March 13, 2023

### Fixes​

- The **Agenda** view issues cause script errors on the page
- The `cellCss` template in the **Week** view works incorrectly

## Version 2.0.2

Released on March 7, 2023

### Updates

- #### Properties

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is extended by the ***dateClick*** property

### Fixes​

- An event is out of the month cell if the `eventHeight` property is set to **50** or more

## Version 2.0.1

Released on February 23, 2023

### Fixes​

- The **Repeat event** control resets week days when the **End by** part of new event is changed
- The **Popup window** of **Recurring events** sometimes has an incorrect position in the **Agenda** view
- *TypeError*  when the **Create event** button is doubleclicked

## Version 2.0

Released on February 14, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-event-calendar-2-0/)

### New functionality

- Timeline view
- Recurring events
- Custom view modes ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))
- Section for unassigned events in the Timeline view 
- Switching through the view modes via the toggle or dropdown controls ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))
- Dim past events ([Example](https://snippet.dhtmlx.com/teaka0o8?tag=event_calendar))
- Highlight the current time using red line in the **Day**, **Week**, **Agenda** and **Timeline** view modes

### Updates

- #### Methods

    - The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method of Event Calendar is updated

- #### Properties

    - The [`templates`](../../api/config/js_eventcalendar_templates_config) property of Event Calendar is extended by the ***timelineSection*** parameter (*template*) ([Example](https://snippet.dhtmlx.com/rmgc73n6?tag=event_calendar))

    - The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property is extended by the ***recurring*** type (*editor field*) ([Example](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar))

    - The [`events`](../../api/config/js_eventcalendar_events_config) property of Event Calendar is extended by the ***RRULE***, ***STDATE***, ***DTEND*** and ***recurring*** parameters (*data fields*). These parameters are bound to the **recurring** type of editor

    - The [`mode`](../../api/config/js_eventcalendar_mode_config) property of Event Calendar is extended by the ***timeline*** parameter (*view mode*). The **Timeline** view mode is optional and can be configured in the `config.views` property ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is extended by the ***viewControl*** and ***dimPastEvents*** parameters ([Example](https://snippet.dhtmlx.com/qw45r367?tag=event_calendar))

    - The [`config.view`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is fully updated. See the [Migration to newer versions](news/migration.md/#11---20) for details. ([Example](https://snippet.dhtmlx.com/dmoijc47?tag=event_calendar))

## Version 1.1

Released on November 10, 2022

[Review of release on the blog](https://dhtmlx.com/blog/meet-dhtmlx-event-calendar-v1-1/)

### New functionality

- An ability to view events in the Year and Agenda modes ([Example](https://snippet.dhtmlx.com/6nl72051?tag=event_calendar))
- An ability to highlight the grid cells via API ([Example](https://snippet.dhtmlx.com/z03jrdu4?tag=event_calendar))
- An ability to use the **multiselet** and **radio** types of editor ([Example](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar))

### Updates

- #### Methods

    - The [`setMode()`](../../api/methods/js_eventcalendar_setmode_method) method of Event Calendar is updated

- #### Properties

    - The [`templates`](../../api/config/js_eventcalendar_templates_config) property of Event Calendar is extended by the ***yearEvent***, ***agendaEvent*** and ***agendaDate*** parameters ([Example](https://snippet.dhtmlx.com/6nl72051?tag=event_calendar))

    - The [`config`](../../api/config/js_eventcalendar_config_config) property of Event Calendar is extended by the ***cellCss*** parameter ([Example](https://snippet.dhtmlx.com/z03jrdu4?tag=event_calendar))

    - The [`editorShape`](../../api/config/js_eventcalendar_editorshape_config) property is extended by the ***multiselect*** and ***radio*** types ([Example](https://snippet.dhtmlx.com/bxwdj1rt?tag=event_calendar))

    - The [`mode`](../../api/config/js_eventcalendar_mode_config) property of Event Calendar is extended by the ***year*** and ***agenda*** parameters (view modes)

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