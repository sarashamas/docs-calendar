module.exports = {
	docs: [
		{
			type: "doc",
			id: "index"
		},
		{
			type: "doc",
			id: "how_to_start"
		},
		{
			type: "doc",
			id: "news/whats_new"
		},
		{
			type: "category",
			label: "API",
			collapsible: true,
			collapsed: false,
			link: {
				type: 'doc',
				id: "api/api_overview"
			},
			items: [
				//"api/api_overview",
				// Event Calendar methods
				{
					type: "category",
					label: "Event Calendar methods",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/methods_overview"
					},
					items: [
						"api/methods/js_eventcalendar_addevent_method",
						"api/methods/js_eventcalendar_closeeditor_method",
						"api/methods/js_eventcalendar_createevent_method",
						"api/methods/js_eventcalendar_deleteevent_method",
						"api/methods/js_eventcalendar_destructor_method",
						"api/methods/js_eventcalendar_getevent_method",
						"api/methods/js_eventcalendar_hideeventinfo_method",
						"api/methods/js_eventcalendar_openeditor_method",
						"api/methods/js_eventcalendar_parse_method",
						"api/methods/js_eventcalendar_serialize_method",
						"api/methods/js_eventcalendar_setconfig_method",
						"api/methods/js_eventcalendar_setdate_method",
						"api/methods/js_eventcalendar_setlocale_method",
						"api/methods/js_eventcalendar_setmode_method",
						"api/methods/js_eventcalendar_showeventinfo_method",
						"api/methods/js_eventcalendar_togglesidebar_method",
						"api/methods/js_eventcalendar_updatecalendar_method",
						"api/methods/js_eventcalendar_updateevent_method",
						// other methods
					]
				},
				// Event Calendar internal methods
				{
					type: "category",
					label: "Event Calendar internal API",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Internal API overview',
						keywords: ['internal api'],
						image: '/img/docusaurus.png'
					},
					items: [
						{
							type: "category",
							label: "Event Bus methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: "api/overview/eventbus_overview"
							},
							items: [
								"api/internal/js_eventcalendar_exec_method",
								"api/internal/js_eventcalendar_intercept_method",
								"api/internal/js_eventcalendar_on_method",
								"api/internal/js_eventcalendar_setnext_method"
							]
						},
						{
							type: "category",
							label: "State methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: "api/overview/state_overview"
							},
							items: [
								"api/internal/js_eventcalendar_getreactivestate_method",
								"api/internal/js_eventcalendar_getstate_method",
								"api/internal/js_eventcalendar_getstores_method"
							]
						},
						{
							type: "category",
							label: "REST methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: "api/overview/rest_overview"
							},
							items: [
								"api/internal/eventcalendar_innermethodname_method",
							]
						}
					]
				},
				{
					type: "category",
					label: "Event Calendar events",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/events_overview"
					},
					items: [
						// Event Calendar events
						"api/events/js_eventcalendar_addevent_event",
						"api/events/js_eventcalendar_closeeventinfo_event",
						"api/events/js_eventcalendar_deleteevent_event",
						"api/events/js_eventcalendar_editevent_event",
						"api/events/js_eventcalendar_selectevent_event",
						"api/events/js_eventcalendar_setbound_event",
						"api/events/js_eventcalendar_setdate_event",
						"api/events/js_eventcalendar_setmode_event",
						"api/events/js_eventcalendar_togglesidebar_event",
						"api/events/js_eventcalendar_updatecalendar_event",
						"api/events/js_eventcalendar_updateevent_event",
						
					]
				},
				{
					type: "category",
					label: "Event Calendar properties",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/properties_overview"
					},
					items: [
						// Event Calendar properties
						"api/config/js_eventcalendar_calendars_config",
						"api/config/js_eventcalendar_config_config",
						"api/config/js_eventcalendar_data_config",
						"api/config/js_eventcalendar_date_config",
						"api/config/js_eventcalendar_editorshape_config",
						"api/config/js_eventcalendar_locale_config",
						"api/config/js_eventcalendar_mode_config",
						"api/config/js_eventcalendar_sidebar_config",
						"api/config/js_eventcalendar_templates_config"
					]
				}
			]
		},
		{
			type: "category",
			label: "Guides",
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'Guides',
				keywords: ['guides'],
				image: '/img/docusaurus.png',
			},
			items: [
				"guides/initialization",
				"guides/configuration",
				//"guides/customization",
				"guides/localization",
				//"guides/working_with_data",
				//"guides/working_with_server"
			]
		}
	]
};
