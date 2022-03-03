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
			id: "whats_new"
		},
		{
			type: "category",
			label: "API",
			collapsible: true,
			collapsed: false,
			items: [
				"api/api_overview",
				// Scheduler methods
				{
					type: "category",
					label: "Scheduler methods",
					collapsible: true,
					collapsed: true,
					items: [
						"api/methods/scheduler_methodname_method",
					]
				},
				// Scheduler internal methods
				{
					type: "category",
					label: "Scheduler internal API",
					collapsible: true,
					collapsed: true,
					items: [
						{
							type: "category",
							label: "Event Bus methods",
							collapsible: true,
							collapsed: true,
							items: [
								"api/internal/scheduler_innermethodname_method",
							]
						},
						{
							type: "category",
							label: "State methods",
							collapsible: true,
							collapsed: true,
							items: [
								"api/internal/scheduler_innermethodname_method",
							]
						},
						{
							type: "category",
							label: "REST methods",
							collapsible: true,
							collapsed: true,
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
					items: [
						// Scheduler events
						"api/events/scheduler_eventname_event",
					]
				},
				{
					type: "category",
					label: "Scheduler properties",
					collapsible: true,
					collapsed: true,
					items: [
						// Scheduler properties
						"api/config/scheduler_configname_config",
					]
				}
			]
		},
		{
			type: "category",
			label: "Guides",
			collapsible: true,
			collapsed: true,
			items: [
				"guides/initialization",
				"guides/configuration",
				"guides/customization",
				"guides/localization",
				"guides/working_with_data",
				"guides/working_with_server",
				"guides/working_with_hotkeys"
			]
		}
	]
};
