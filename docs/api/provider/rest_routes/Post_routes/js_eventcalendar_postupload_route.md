---
sidebar_label: Post /uploads
title: Post /uploads
description: You can learn about the Post /uploads route in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Post /uploads

### Description

@short: Uploads a binary file to the server and returns a json object with the file id, name, and url

The route handles the POST request made to the **'/uploads'** path.

<table style="border: 1px solid white; border-collapse: collapse; width:50%">
<thead style="border: 1px solid white; border-collapse: collapse;">
<th style="width:25%">HTTP method</th>
<th style="width:25%">Route</th>
</thead>
<tbody style="border: 1px solid white; border-collapse: collapse">
<tr>
<td>Post</td>
<td>/uploads</td>
</tr>
</tbody>
</table>

### Payload

The server needs to receive a binary file.


### Response

The route returns a json object with the file id, name, and url.

Example:


~~~ json

{
    "id": 4,
    "name": "cat.png",
    "url": "https://server.com/uploads/4/cat.png"
}

~~~


The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: 
- [Working with server](guides/working_with_server.md)
- [send()](api/provider/rest_methods/js_eventcalendar_send_method.md)