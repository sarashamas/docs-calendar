---
sidebar_label: API overview
title: API Overview
description: You can have an API overview of JavaScript Scheduler in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# API overview

## Scheduler constructor

~~~jsx {}
new scheduler.Scheduler("#root", {
	// initial configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#scheduler-properties))

## Scheduler methods

| Name                                                 | Description                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| [](api/methods/js_scheduler_addevent_method.md)      | @getshort(api/methods/js_scheduler_addevent_method.md)      |
| [](api/methods/js_scheduler_closeeditor_method.md)   | @getshort(api/methods/js_scheduler_closeeditor_method.md)   |
| [](api/methods/js_scheduler_createevent_method.md)   | @getshort(api/methods/js_scheduler_createevent_method.md)   |
| [](api/methods/js_scheduler_deleteevent_method.md)   | @getshort(api/methods/js_scheduler_deleteevent_method.md)   |
| [](api/methods/js_scheduler_destructor_method.md)    | @getshort(api/methods/js_scheduler_destructor_method.md)    |
| [](api/methods/js_scheduler_getevent_method.md)      | @getshort(api/methods/js_scheduler_getevent_method.md)      |
| [](api/methods/js_scheduler_hideeventinfo_method.md) | @getshort(api/methods/js_scheduler_hideeventinfo_method.md) |
| [](api/methods/js_scheduler_openeditor_method.md)    | @getshort(api/methods/js_scheduler_openeditor_method.md)    |
| [](api/methods/js_scheduler_parse_method.md)         | @getshort(api/methods/js_scheduler_parse_method.md)         |
| [](api/methods/js_scheduler_serialize_method.md)     | @getshort(api/methods/js_scheduler_serialize_method.md)     |
| [](api/methods/js_scheduler_setconfig_method.md)     | @getshort(api/methods/js_scheduler_setconfig_method.md)     |
| [](api/methods/js_scheduler_setdate_method.md)       | @getshort(api/methods/js_scheduler_setdate_method.md)       |
| [](api/methods/js_scheduler_setlocale_method.md)     | @getshort(api/methods/js_scheduler_setlocale_method.md)     |
| [](api/methods/js_scheduler_setmode_method.md)       | @getshort(api/methods/js_scheduler_setmode_method.md)       |
| [](api/methods/js_scheduler_showeventinfo_method.md) | @getshort(api/methods/js_scheduler_showeventinfo_method.md) |
| [](api/methods/js_scheduler_togglesidebar_method.md) | @getshort(api/methods/js_scheduler_togglesidebar_method.md) |
| [](api/methods/js_scheduler_updatecalendar_method.md)| @getshort(api/methods/js_scheduler_updatecalendar_method.md)|
| [](api/methods/js_scheduler_updateevent_method.md)   | @getshort(api/methods/js_scheduler_updateevent_method.md)   |

## Scheduler internal API

### Event Bus methods

| Name                                             | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| [](api/internal/js_scheduler_exec_method.md)     | @getshort(api/internal/js_scheduler_exec_method.md)      |
| [](api/internal/js_scheduler_intercept_method.md)| @getshort(api/internal/js_scheduler_intercept_method.md) |
| [](api/internal/js_scheduler_on_method.md)       | @getshort(api/internal/js_scheduler_on_method.md)        |
| [](api/internal/js_scheduler_setnext_method.md)  | @getshort(api/internal/js_scheduler_setnext_method.md)   |

### State methods

| Name                                                    | Description                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| [](api/internal/js_scheduler_getreactivestate_method.md)| @getshort(api/internal/js_scheduler_getreactivestate_method.md)|
| [](api/internal/js_scheduler_getstate_method.md)        | @getshort(api/internal/js_scheduler_getstate_method.md)        |
| [](api/internal/js_scheduler_getstores_method.md)       | @getshort(api/internal/js_scheduler_getstores_method.md)       |

### RestDataProvider methods

| Name                                                 | Description                                                 |
| -----------------------------------------------------| ----------------------------------------------------------- |
| [](api/internal/scheduler_innermethodname_method.md) | @getshort(api/internal/scheduler_innermethodname_method.md) |

## Scheduler events

| Name                                                 | Description                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| [](api/events/js_scheduler_addevent_event.md)        | @getshort(api/events/js_scheduler_addevent_event.md)        |
| [](api/events/js_scheduler_closeeventinfo_event.md)  | @getshort(api/events/js_scheduler_closeeventinfo_event.md)  |
| [](api/events/js_scheduler_deleteevent_event.md)     | @getshort(api/events/js_scheduler_deleteevent_event.md)     |
| [](api/events/js_scheduler_editevent_event.md)       | @getshort(api/events/js_scheduler_editevent_event.md)       |
| [](api/events/js_scheduler_selectevent_event.md)     | @getshort(api/events/js_scheduler_selectevent_event.md)     |
| [](api/events/js_scheduler_setbound_event.md)        | @getshort(api/events/js_scheduler_setbound_event.md)        |
| [](api/events/js_scheduler_setdate_event.md)         | @getshort(api/events/js_scheduler_setdate_event.md)         |
| [](api/events/js_scheduler_setmode_event.md)         | @getshort(api/events/js_scheduler_setmode_event.md)         |
| [](api/events/js_scheduler_togglesidebar_event.md)   | @getshort(api/events/js_scheduler_togglesidebar_event.md)   |
| [](api/events/js_scheduler_updatecalendar_event.md)  | @getshort(api/events/js_scheduler_updatecalendar_event.md)  |
| [](api/events/js_scheduler_updateevent_event.md)     | @getshort(api/events/js_scheduler_updateevent_event.md)     |


## Scheduler properties

| Name                                             | Description                                             |
| ------------------------------------------------ | ------------------------------------------------------- |
| [](api/config/js_scheduler_calendars_config.md)  | @getshort(api/config/js_scheduler_calendars_config.md)  |
| [](api/config/js_scheduler_config_config.md)     | @getshort(api/config/js_scheduler_config_config.md)     |
| [](api/config/js_scheduler_data_config.md)       | @getshort(api/config/js_scheduler_data_config.md)       |
| [](api/config/js_scheduler_date_config.md)       | @getshort(api/config/js_scheduler_date_config.md)       |
| [](api/config/js_scheduler_editorshape_config.md)| @getshort(api/config/js_scheduler_editorshape_config.md)|
| [](api/config/js_scheduler_locale_config.md)     | @getshort(api/config/js_scheduler_locale_config.md)     |
| [](api/config/js_scheduler_mode_config.md)       | @getshort(api/config/js_scheduler_mode_config.md)       |
| [](api/config/js_scheduler_sidebar_config.md)    | @getshort(api/config/js_scheduler_sidebar_config.md)    |