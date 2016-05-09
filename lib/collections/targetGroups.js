TargetGroups = new Mongo.Collection("targetGroups");

TargetGroups.friendlySlugs();

TargetGroups.helpers({
	problems() {
		return Problems.find({targetGroupId: this._id})
	},
	solutions() {
		return Solutions.find({targetGroupId: this._id})
	}
})

TargetGroups.attachSchema({
	name: {
		type: String,
		label: "Target Group"
	},
	description: {
		type: String,
		label: "Description",
		optional: true
	},
	slug: {
		type: String,
		label: "Slug"
	}
});