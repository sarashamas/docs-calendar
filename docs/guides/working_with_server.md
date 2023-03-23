---
sidebar_label: Working with server
title: Working with server
description: You can learn about working with sever in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Working with server

JavaScript Event Calendar allows working both with the client and server data. The widget doesn't have any special requirements for the backend. It can be easily connected with any backend platform which supports the REST API (RESTful API).

:::info
By default, the widget is shipped with the built-in **Go** and **Node** backend. But you can use your custom server scripts as well
:::

## RestDataProvider

:::important
JavaScript Event Calendar has the **RestDataProvider** service that completely supports REST API for dealing with the backend. It allows interacting with the server and save all the performed operations with data.
:::

## REST methods

The **RestDataProvider** service includes the special REST methods for dynamic data loading:

- [`getCalendars()`](api/provider/rest_methods/js_eventcalendar_getcalendars_method.md) - gets a promise with the ***calendars data***
- [`getEvents()`](api/provider/rest_methods/js_eventcalendar_getevents_method.md) - gets a promise with the ***events data***

## Interacting with backend  

To interact with the server, you need to connect **RestDataProvider** to the corresponding server scripts. If you want to use the built-in backend, you can find the needed scripts in the following repositories:

- [**Go**](https://github.com/web-widgets/event-calendar-go) backend 
- [**Node**](https://github.com/web-widgets/event-calendar-node) backend 

or you can create a custom one.

To connect **RestDataProvider** to the backend, you need to call the `eventCalendar.RestDataProvider()` constructor by passing the corresponding **URL** as a parameter.

~~~js {1-2,12}
const url = "https://some_backend_url";
const restProvider = new eventCalendar.RestDataProvider(url);

Promise.all([
    restProvider.getEvents(),
    restProvider.getCalendars()
]).then(([events, calendars]) => {
    const calendar = new eventCalendar("#root", {
        events,
        calendars,
    });
    calendar.api.setNext(restProvider);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order via the [`api.setNext()`](api/internal/js_eventcalendar_setnext_method.md) method to perform all the operations with data (*adding*, *editing*, *deleting* etc) and send the corresponding requests to the server
:::

## Example

In this snippet you can see how to connect **RestDataProvider** to the **Go** backend and load server data dynamically:

<iframe src="https://snippet.dhtmlx.com/b3iubgj8?mode=js&tag=event_calendar" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>