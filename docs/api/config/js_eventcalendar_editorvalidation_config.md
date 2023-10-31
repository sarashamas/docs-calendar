---
sidebar_label: editorValidation
title: mode Config
description: You can learn about the editorValidation config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# mode

### Description

@short: Optional. A callback that returns and applies validation rules to editor fields

### Usage

~~~jsx {}
editorValidation?: (event: object) => string | false; 
~~~

### Parameters

The callback function takes an object with the event data:

- `event` - the event data object

### Example

~~~jsx {3-5}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    editorValidation: event => {
        if (!event.Text) return "Text is required";
    }
	// other configuration parameters
});
~~~

**Change log:** The ***editorValidation*** property was added in v2.2
