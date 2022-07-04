---
sidebar_label: Event Calendar overview
title: JavaScript Event Calendar overview
slug: /
description: You can have an overview of DHTMLX JavaScript Event Calendar library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# DHTMLX Event Calendar overview

JavaScript **Event Calendar** is a modern web tool for time-management and scheduling events. It perfectly works on both desktop and mobile platforms. This solution will help you to manage your schedule as well as plane new appointments by adding as much events as you need. It is also possible to reschedule all the events using drag-n-drop. The appropriate display modes will help to look through the events scheduled for a day, week or month.

## Event Calendar structure

### Toolbar

The **Toolbar** is the top part of Event Calendar. It consists of the controls for managing the Event Calendar functionality. Here you can perform the following operations:

- switch between the **Day**, **Week** and **Month** view modes of Event Calendar using the corresponding controls
- go to the current date of Event Calendar using a **Today** button
- switch to the needed date of Event Calendar using the special arrows in the middle part of a toolbar
- create new events, using a **+ Create event** button
- hide/show a sidebar using a "humburger" icon

!!! **TODO Toolbar picture here**

### Sidebar

The **Sidebar** is a modal panel of Event Calendar. It consists of the compact datepicker for managing dates and the predefined calendars. You can show/hide the sidebar using the "humburger" icon on the left part of the toolbar. Here you can perform the following operations:

- pick the desired date on the compact datepicker
- hide/show events used the predefined calendars

!!! **TODO Sidebar picture here**

### Grid

The **Grid** is the main part of Event Calendar. It consists of the ***events*** distributed into the corresponding *cells* of the grid depending on the set mode. You can flexibly configure the grid appearance. Read more in the [Configuration](./guides/configuration#grid) section.

On the **Grid** panel you can work with ***events*** in the following way:

- add new events by clicking on the empty space and dragging the cursor down
- show an info popup window by clicking on the event to look through the event data
- open a special editor by double clicking on the event to edit the event data
- reschedule events by dragging them to the desired place (calendar cell/date) 
- reschedule events by resizing them

!!! **TODO Grid picture here**

### Editor

The **Editor** is a modal panel that consists of the fields and controls for managing the selected event data. To display the editor, double click on the event you want to change or click on the "Edit event" button in the popup window. You can flexibly configure the editor structure by adding new fields and controls. Read more in the [Configuration](./guides/configuration#editor) section.

!!! **TODO Editor picture here**

### Popup window

The **Popup window** is a modal part of Event Calendar that displays the event data. To show the popup window, click on the event the data of which you want to look through. You can flexibly configure the popup structure by adding new fields. Read more in the [Configuration](./guides/configuration#popup-window) section.

!!! **TODO Popup window picture here**

## What's next

Now you can get down to using Event Calendar in your application. Follow the directions of the [How to start](./how_to_start) tutorial for guidance.