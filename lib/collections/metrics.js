Metrics = new Mongo.Collection("metrics");

Metrics.helpers({
	getRatio() {
		return Math.floor((this.votesYes * 10000) / ((this.votesNo + this.votesYes)* 100)) || 0;
	},
})

if(Meteor.isClient){
	Metrics.helpers({
		currentUserHasVoted() {
			return UsersMetrics.findOne({userId: Meteor.userId(), metricId: this._id});
		}
	})
}

Metrics.attachSchema({
	problemId: {
		type: String,
		label: "Metric Target"
	},
	question: {
		type: String,
		label: "Yes or no question. (ie Do you feel like there is adequate practice space at an affordable rate?)"
	},
	successRatio: {
		type: Number,
		label: "What percent of target segment surveyed needs to answer yes for success (ie 75% of musicians surveyed feel like they have adequate practice space at an affordable rate.)"
	},
	votesYes: {
		type: Number,
		label: "Votes Yes",
		defaultValue: 0
	},
	votesNo: {
		type: Number,
		label: "Votes No",
		defaultValue: 0
	}
})