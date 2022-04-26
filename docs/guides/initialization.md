---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# Initialization

This guide will give you detailed instructions on how to create Event Calendar on a page to enrich your application with rich features of this tool. Take the following steps to get a ready-to-use component:

1. [Include the Event Calendar source files on a page](#including-source-files)
2. [Create a container for Event Calendar](#creating-container)
3. [Initialize Event Calendar with a constructor](#initializing-event-calendar)

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxEventCalendar/download.shtml) and unpack it into a folder of your project.

To create Event Calendar, you need to include 2 source files on your page:

- *eventCalendar.js*
- *eventCalendar.css*

Make sure that you set the correct paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="./dist/eventCalendar.js"></script>  
<link rel="stylesheet" href="./dist/eventCalendar.css">
~~~

## Creating container

Add a container for Event Calendar and give it an ID, for example *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initializing Event Calendar

Initialize Event Calendar using the **eventCalendar.EventCalendar()** constructor. It takes two parameters:

- an HTML container (the ID of the HTML container)
- an object with configuration properties

~~~jsx title="index.html"
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    // configuration properties
});
~~~

:::tip
The list of the Event Calendar configuration properties can be found [**here**](../../api/overview/properties_overview).
:::
## Example

In this snippet you can see how to initialize **JavaScript Event Calendar** with the initial settings:

**[TODO]!!! Заменить ссылку на сниппет с инициализацией**
<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>