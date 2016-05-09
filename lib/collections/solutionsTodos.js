SolutionsTodos = new Mongo.Collection("solutionsTodos");

SolutionsTodos.attachSchema({
	solutionId: {
		type: String,
		label: "Solution",
		autoValue() {
			if(this.isInsert && Meteor.isClient){
				var s = Solutions.findOne({slug: FlowRouter.getParam("solutionSlug")});
				return s._id;
			}
		}
	},
	title: {
		type: String,
		label: "Title"
	},
	isFinished: {
		type: Boolean,
		label: " ",
		defaultValue: false
	},
	date: {
		type: Date,
		label: "Date",
		autoValue(){
			if(this.isInsert){
				return new Date();
			}
		}
	},
	score: {
		type: Number,
		label: "Score",
		defaultValue: 0
	}
})