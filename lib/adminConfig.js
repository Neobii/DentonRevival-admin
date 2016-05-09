AdminConfig = {
  adminEmails: ["admin@dentonrevival.com"],
  collections: {
    Problems: {
    	tableColumns: [
	   		{ label: 'Title', name: 'title' },
  		]
  	},
    Solutions: {
    	tableColumns: [
	   		{ label: 'Title', name: 'title' },
  		]
    },
    TargetGroups: {
    	tableColumns: [
    		{label: "name", name: "name"}
    	]
    },
    BlogEntries: {
    	tableColumns: [
    		{ label: "title", name: "title" }
    	]
    },
    Comments: {
      tableColumns: [
        {label: "title", name: "title"}
      ]
    },
    Metrics: {
      tableColumns: [
      {label: "question" , name: "question"}]
    }
  }
};