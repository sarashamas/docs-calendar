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
				// Scheduler methods
				{
					type: "category",
					label: "Scheduler methods",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/methods_overview"
					},
					items: [
						"api/methods/js_scheduler_addevent_method",
						"api/methods/js_scheduler_closeeditor_method",
						"api/methods/js_scheduler_createevent_method",
						"api/methods/js_scheduler_deleteevent_method",
						"api/methods/js_scheduler_destructor_method",
						"api/methods/js_scheduler_getevent_method",
						"api/methods/js_scheduler_hideeventinfo_method",
						"api/methods/js_scheduler_openeditor_method",
						"api/methods/js_scheduler_parse_method",
						"api/methods/js_scheduler_serialize_method",
						"api/methods/js_scheduler_setconfig_method",
						"api/methods/js_scheduler_setdate_method",
						"api/methods/js_scheduler_setlocale_method",
						"api/methods/js_scheduler_setmode_method",
						"api/methods/js_scheduler_showeventinfo_method",
						"api/methods/js_scheduler_togglesidebar_method",
						"api/methods/js_scheduler_updatecalendar_method",
						"api/methods/js_scheduler_updateevent_method",
						// other methods
					]
				},
				// Scheduler internal methods
				{
					type: "category",
					label: "Scheduler internal API",
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
								"api/internal/js_scheduler_exec_method",
								"api/internal/js_scheduler_intercept_method",
								"api/internal/js_scheduler_on_method",
								"api/internal/js_scheduler_setnext_method"
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
								"api/internal/js_scheduler_getreactivestate_method",
								"api/internal/js_scheduler_getstate_method",
								"api/internal/js_scheduler_getstores_method"
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
								"api/internal/scheduler_innermethodname_method",
							]
						}
					]
				},
				{
					type: "category",
					label: "Scheduler events",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/events_overview"
					},
					items: [
						// Scheduler events
						"api/events/js_scheduler_addevent_event",
						"api/events/js_scheduler_closeeventinfo_event",
						"api/events/js_scheduler_deleteevent_event",
						"api/events/js_scheduler_editevent_event",
						"api/events/js_scheduler_selectevent_event",
						"api/events/js_scheduler_setbound_event",
						"api/events/js_scheduler_setdate_event",
						"api/events/js_scheduler_setmode_event",
						"api/events/js_scheduler_togglesidebar_event",
						"api/events/js_scheduler_updatecalendar_event",
						"api/events/js_scheduler_updateevent_event",
						
					]
				},
				{
					type: "category",
					label: "Scheduler properties",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: "api/overview/properties_overview"
					},
					items: [
						// Scheduler properties
						"api/config/js_scheduler_calendars_config",
						"api/config/js_scheduler_config_config",
						"api/config/js_scheduler_data_config",
						"api/config/js_scheduler_date_config",
						"api/config/js_scheduler_editorshape_config",
						"api/config/js_scheduler_locale_config",
						"api/config/js_scheduler_mode_config",
						"api/config/js_scheduler_sidebar_config"
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
				"guides/customization",
				"guides/localization",
				"guides/working_with_data",
				"guides/working_with_server"
			]
		}
	]
};
