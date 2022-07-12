---
sidebar_label: API overview
title: API Overview
description: You can explore an API overview in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# API overview

## Event Calendar constructor

~~~jsx {}
new eventCalendar.EventCalendar("#root", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#event-calendar-properties))

## Event Calendar methods

| Name                                                     | Description                                                     |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| [](api/methods/js_eventcalendar_addcalendar_method.md)   | @getshort(api/methods/js_eventcalendar_addcalendar_method.md)   |
| [](api/methods/js_eventcalendar_addevent_method.md)      | @getshort(api/methods/js_eventcalendar_addevent_method.md)      |
| [](api/methods/js_eventcalendar_closeeditor_method.md)   | @getshort(api/methods/js_eventcalendar_closeeditor_method.md)   |
| [](api/methods/js_eventcalendar_createevent_method.md)   | @getshort(api/methods/js_eventcalendar_createevent_method.md)   |
| [](api/methods/js_eventcalendar_deletecalendar_method.md)| @getshort(api/methods/js_eventcalendar_deletecalendar_method.md)|
| [](api/methods/js_eventcalendar_deleteevent_method.md)   | @getshort(api/methods/js_eventcalendar_deleteevent_method.md)   |
| [](api/methods/js_eventcalendar_destructor_method.md)    | @getshort(api/methods/js_eventcalendar_destructor_method.md)    |
| [](api/methods/js_eventcalendar_getevent_method.md)      | @getshort(api/methods/js_eventcalendar_getevent_method.md)      |
| [](api/methods/js_eventcalendar_hideeventinfo_method.md) | @getshort(api/methods/js_eventcalendar_hideeventinfo_method.md) |
| [](api/methods/js_eventcalendar_openeditor_method.md)    | @getshort(api/methods/js_eventcalendar_openeditor_method.md)    |
| [](api/methods/js_eventcalendar_parse_method.md)         | @getshort(api/methods/js_eventcalendar_parse_method.md)         |
| [](api/methods/js_eventcalendar_serialize_method.md)     | @getshort(api/methods/js_eventcalendar_serialize_method.md)     |
| [](api/methods/js_eventcalendar_setconfig_method.md)     | @getshort(api/methods/js_eventcalendar_setconfig_method.md)     |
| [](api/methods/js_eventcalendar_setdate_method.md)       | @getshort(api/methods/js_eventcalendar_setdate_method.md)       |
| [](api/methods/js_eventcalendar_setlocale_method.md)     | @getshort(api/methods/js_eventcalendar_setlocale_method.md)     |
| [](api/methods/js_eventcalendar_setmode_method.md)       | @getshort(api/methods/js_eventcalendar_setmode_method.md)       |
| [](api/methods/js_eventcalendar_showeventinfo_method.md) | @getshort(api/methods/js_eventcalendar_showeventinfo_method.md) |
| [](api/methods/js_eventcalendar_togglesidebar_method.md) | @getshort(api/methods/js_eventcalendar_togglesidebar_method.md) |
| [](api/methods/js_eventcalendar_updatecalendar_method.md)| @getshort(api/methods/js_eventcalendar_updatecalendar_method.md)|
| [](api/methods/js_eventcalendar_updateevent_method.md)   | @getshort(api/methods/js_eventcalendar_updateevent_method.md)   |

## Event Calendar internal API

### Event Bus methods

| Name                                                 | Description                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| [](api/internal/js_eventcalendar_exec_method.md)     | @getshort(api/internal/js_eventcalendar_exec_method.md)      |
| [](api/internal/js_eventcalendar_intercept_method.md)| @getshort(api/internal/js_eventcalendar_intercept_method.md) |
| [](api/internal/js_eventcalendar_on_method.md)       | @getshort(api/internal/js_eventcalendar_on_method.md)        |
| [](api/internal/js_eventcalendar_setnext_method.md)  | @getshort(api/internal/js_eventcalendar_setnext_method.md)   |

### State methods

| Name                                                        | Description                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------ |
| [](api/internal/js_eventcalendar_getreactivestate_method.md)| @getshort(api/internal/js_eventcalendar_getreactivestate_method.md)|
| [](api/internal/js_eventcalendar_getstate_method.md)        | @getshort(api/internal/js_eventcalendar_getstate_method.md)        |
| [](api/internal/js_eventcalendar_getstores_method.md)       | @getshort(api/internal/js_eventcalendar_getstores_method.md)       |

### RestDataProvider methods

| Name                                                     | Description                                                     |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| [](api/provider/js_eventcalendar_getcalendars_method.md) | @getshort(api/provider/js_eventcalendar_getcalendars_method.md) |
| [](api/provider/js_eventcalendar_getevents_method.md)    | @getshort(api/provider/js_eventcalendar_getevents_method.md)    |

## Event Calendar events

| Name                                                     | Description                                                     |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| [](api/events/js_eventcalendar_addcalendar_event.md)     | @getshort(api/events/js_eventcalendar_addcalendar_event.md)     |
| [](api/events/js_eventcalendar_addevent_event.md)        | @getshort(api/events/js_eventcalendar_addevent_event.md)        |
| [](api/events/js_eventcalendar_closeeventinfo_event.md)  | @getshort(api/events/js_eventcalendar_closeeventinfo_event.md)  |
| [](api/events/js_eventcalendar_deletecalendar_event.md)  | @getshort(api/events/js_eventcalendar_deletecalendar_event.md)  |
| [](api/events/js_eventcalendar_deleteevent_event.md)     | @getshort(api/events/js_eventcalendar_deleteevent_event.md)     |
| [](api/events/js_eventcalendar_editevent_event.md)       | @getshort(api/events/js_eventcalendar_editevent_event.md)       |
| [](api/events/js_eventcalendar_selectevent_event.md)     | @getshort(api/events/js_eventcalendar_selectevent_event.md)     |
| [](api/events/js_eventcalendar_setbound_event.md)        | @getshort(api/events/js_eventcalendar_setbound_event.md)        |
| [](api/events/js_eventcalendar_setdate_event.md)         | @getshort(api/events/js_eventcalendar_setdate_event.md)         |
| [](api/events/js_eventcalendar_setmode_event.md)         | @getshort(api/events/js_eventcalendar_setmode_event.md)         |
| [](api/events/js_eventcalendar_togglesidebar_event.md)   | @getshort(api/events/js_eventcalendar_togglesidebar_event.md)   |
| [](api/events/js_eventcalendar_updatecalendar_event.md)  | @getshort(api/events/js_eventcalendar_updatecalendar_event.md)  |
| [](api/events/js_eventcalendar_updateevent_event.md)     | @getshort(api/events/js_eventcalendar_updateevent_event.md)     |

## Event Calendar properties

| Name                                                 | Description                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| [](api/config/js_eventcalendar_calendars_config.md)  | @getshort(api/config/js_eventcalendar_calendars_config.md)  |
| [](api/config/js_eventcalendar_colors_config.md)     | @getshort(api/config/js_eventcalendar_colors_config.md)     |
| [](api/config/js_eventcalendar_config_config.md)     | @getshort(api/config/js_eventcalendar_config_config.md)     |
| [](api/config/js_eventcalendar_data_config.md)       | @getshort(api/config/js_eventcalendar_data_config.md)       |
| [](api/config/js_eventcalendar_date_config.md)       | @getshort(api/config/js_eventcalendar_date_config.md)       |
| [](api/config/js_eventcalendar_editorshape_config.md)| @getshort(api/config/js_eventcalendar_editorshape_config.md)|
| [](api/config/js_eventcalendar_locale_config.md)     | @getshort(api/config/js_eventcalendar_locale_config.md)     |
| [](api/config/js_eventcalendar_mode_config.md)       | @getshort(api/config/js_eventcalendar_mode_config.md)       |
| [](api/config/js_eventcalendar_sidebar_config.md)    | @getshort(api/config/js_eventcalendar_sidebar_config.md)    |
| [](api/config/js_eventcalendar_templates_config.md)  | @getshort(api/config/js_eventcalendar_templates_config.md)  |