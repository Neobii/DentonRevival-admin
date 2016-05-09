Projects = new Mongo.Collection("projects");

Projects.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Projects"
	},
	description: {
		type: String,
		label: "Description"
	},
	solutionId: {
		type: String,
		label: "Solution"
	}
}))