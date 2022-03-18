---
sidebar_label: setLocale()+
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript Scheduler library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Scheduler.
---

# setLocale()

### Description

@short: Applies a new locale to the Scheduler widget

### Usage

~~~jsx {}
setLocale(locale: object): void;
~~~

### Parameters

- `locale` - (required) a data object of the new locale 

:::info
Using this method, you can set a built-in locale (**en**, **ru**) as well as a custom one.
:::

### Example

~~~jsx {6}
// create Scheduler
const calendar = new scheduler.Scheduler("#root", {
	locale: scheduler.en // the "en" locale is set by default
});
// apply "ru" locale
calendar.setLocale(scheduler.ru);
~~~

**Related articles:** [Localization](guides/localization.md)
