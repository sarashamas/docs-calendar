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

### Example

In this snippet you can see how to connect **RestDataProvider** to the **Go** backend and load server data dynamically:

<iframe src="https://snippet.dhtmlx.com/b3iubgj8?mode=js&tag=event_calendar" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Multiuser backend

Event Calendar is a modern web tool for efficient time-management and scheduling events for both one user and multiple users. Considering this, it is important to provide a seamless user experience for multiple users. The new multiuser backend feature allows users to efficiently manage the same events in a real-time, without the need for page reloads. As a result, end-users can collaborate and stay up-to-date with one another's actions, enhancing productivity and overall satisfaction.

To implement a multiuser backend, you need to get authorization on the server before the Event Calendar initialization. For this, you can create the `login(url: string)` function:

~~~js {}
const login = (url) => {
    var token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }

    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
};
~~~

This function only simulates authorization, and all users will be authorized with an ID of 1. After successful authorization, the server sends a token that needs to be used in every subsequent request to the server. To automate the token sending, the `RestDataProvider.setHeaders()` function is used. This function adds custom headers to the requests. By default, our server stores the token in the `"Remote-Token":<value>` header:

~~~js {}
login(url).then(token => {
    // rest provider initialization
    const restProvider = new eventCalendar.RestDataProvider(url);
    // set token as the custom header
    restProvder.setHeaders({
        "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
    });
    
    // widget initialization...
});
~~~

After receiving the token, you should initialize the widget. It can be done in the following way:

~~~js {}
// widget initialization...
Promise.all([
    restProvider.getEvents(),
    restProvider.getCalendars()
]).then(([events, calendars]) => {
    const calendar = new eventCalendar("#root", {
        events,
        calendars
    });

    // save data from client to server
    calendar.api.setNext(restProvider);
    
    // multiuser initialization...
});
~~~

After the widget initialization, you need to add WebSocket aimed to listen for events from the server. It can be done in the following way:

~~~js {}
// multiuser initialization...

// connect to server events
const remoteEvents = new RemoteEvents(
    url + "/api/v1",
    token
);
remoteEvents.on(
    remoteUpdates(calendar.api, restProvider.getIDResolver())
);
~~~

- `remoteEvents` - the object that connects to the server and listens for all incoming events
- `remoteUpdates.on(calendar.api, restProvider.getIDResolver())` - applies client handlers to server events

After integrating the multiuser backend into your app, you can simplify collaboration between users and enable them to keep track of any changes via the UI in a real time.

### Example

The snippet below shows how to configure the multiuser backend to track changes of other users in a real time:

<iframe src="https://snippet.dhtmlx.com/ga85sc0x?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
