Problems = new Meteor.Collection("problems");

Problems.friendlySlugs("title");

Problems.after.update(function(userId, doc) {
	if(doc.score < -5){
		Problems.remove({_id: doc._id});
		Comments.remove({problemId: doc._id});
	}
})

Problems.helpers({
	solutions() {
		return Solutions.find({problemId: this._id}, {sort: {score: -1}});
	},
	comments() {
		return Comments.find({problemId: this._id}, {sort: {date: -1}})
	},
	targetGroup(){
		return TargetGroups.findOne({_id: this.targetGroupId});
	},
	metrics(){
		return Metrics.find({problemId: this._id});
	}
})

Problems.attachSchema({
	title: {
		type: String,
		label: "What's your problem?"
	},
	score: {
		type: Number,
		defaultValue: 0,
		label: "Score"
	},
	description: {
		type: String,
		label: "Description, optional (don't offer solutions just yet!)",
		optional: true
	},
	slug: {
		type: String,
		label: "Slug",
		optional: true
	},
	fake: {
		type: String,
		optional: true
	},
	targetGroupId: {
		type: String,
		label: "Target group",
		autoform: {
			options() {
				var tg = [];
				TargetGroups.find().fetch().forEach(function(tarG){
					tg.push({label: tarG.name, value: tarG._id});
				});
				return tg;
			}
		}
	}
})
