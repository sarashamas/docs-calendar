---
sidebar_label: How to start
title: How to Start
description: You can explore how to start working with DHTMLX Event Calendar in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# How to start

This clear and comprehensive tutorial will guide your through the steps you need to take in order to get a full-functional Event Calendar on a page.

## Step 1. Including source files

Start from creating an HTML file and call it *index.html*. Then proceed to include Event Calendar source files into the created file.

There are two necessary files:

- the *JS* file of Event Calendar
- the *CSS* file of Event Calendar

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with Event Calendar</title>
		<script src="./dist/eventCalendar.js"></script>   
		<link href="./dist/eventCalendar.css" rel="stylesheet">
	</head>
	<body>
		<script>
		// your code will be here
		</script>
	</body>
</html>
~~~

## Step 2. Creating Event Calendar

Now you are ready to add Event Calendar to the page. For this you need to take the following steps:

- specify a DIV container in the *index.html* file
- initialize component using the `eventCalendar.EventCalendar()` constructor

The constructor takes an ID of HTML container where Event Calendar will be placed into and an object with the corresponding configuration properties. See an example below:

~~~html {9,11-13} title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with Event Calendar</title>
		<script src="./dist/eventCalendar.js"></script>   
		<link href="./dist/eventCalendar.css" rel="stylesheet">  
	</head>
	<body>
		<div id="root"></div>
		<script>
			new eventCalendar.EventCalendar("#root", {
				// configuration properties
			});
		</script>
	</body>
</html>
~~~

## Step 3. Configuring Event Calendar

Next you can specify the configuration properties you want the Event Calendar component to have when initialized.

~~~jsx {2-11}
new eventCalendar.EventCalendar("#root", {
	calendars,
	colors,
	config,
	data,
	date,
	editorShape,
	locale,
	mode,
	sidebar,
	templates
});
~~~

## What's next

That's all. Just three simple steps and you have a handy tool for scheduling and managing your daily events. Now you can start working with your tasks or keep exploring the inner world of JavaScript Event Calendar.
