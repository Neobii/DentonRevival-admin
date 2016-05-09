Solutions = new Mongo.Collection("solutions");

Solutions.friendlySlugs("title");

Solutions.helpers({
	todos() {
		return SolutionsTodos.find({solutionId: this._id});
	},
	problem() {
		return Problems.findOne({_id: this.problemId})
	}
})

Solutions.after.update(function(userId, doc) {
	if(doc.score < -5){
		Solutions.remove({_id: doc._id})
		Comments.remove({solutionId: doc._id})
	}
})

Solutions.attachSchema(new SimpleSchema({
	problemId: {
		type: String,
		label: "Problem Id",
		autoValue() {
			if(this.isInsert && Meteor.isClient){
				var p = Problems.findOne({slug: FlowRouter.getParam("slug")});
				return p._id;
			}
		}
	},
	score: {
		type: Number,
		label: "Score",
		defaultValue: 0
	},
	title: {
		type: String,
		label: "Solution",
	},
	description: {
		type: String,
		label: "Description",
		optional: true
	},
	slug: {
		type: String,
		label: "Slug",
		optional: true
	},
	fake: {
		type: String,
		label: "fake",
		optional: true
	}
	/*difficulty: {
		type: Number,
		label: "Difficulty 0 - 10",
		min: 0,
		max: 10
	}*/
}))