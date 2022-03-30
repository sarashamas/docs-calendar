---
sidebar_label: How to start
title: SEO data
description: SEO data
---

# How to start

This clear and comprehensive tutorial will guide your through the steps you need to take in order to get a full-functional Event Calendar on a page.

## Step 1. Including source files

Start from creating an HTML file and call it *index.html*. Then proceed to include Event Calendar source files into the created file.

There are two necessary files:

- the JS file of Event Calendar
- the CSS file of Event Calendar

and

- the link to the Google Fonts source file for the correct rendering of fonts

~~~html {5,7-9} title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with Event Calendar</title>
		<script src="./dist/eventCalendar.js"></script>   

		<link href="./dist/eventCalendar.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500"
		rel="stylesheet">
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
- initialize component using the **eventCalendar.EventCalendar()** constructor

The constructor takes an HTML container where the Event Calendar will be placed into and the corresponding configuration object. See an example below:

~~~html {12,14-18} title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with Event Calendar</title>
		<script src="./dist/eventCalendar.js"></script>   

		<link href="./dist/eventCalendar.css" rel="stylesheet">  
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500"
		rel="stylesheet">
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

Next you can specify configuration properties you want the Event Calendar component to have when initialized.

~~~jsx {2-10}
new eventCalendar.EventCalendar("#root", {
	calendars,
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
