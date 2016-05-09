if(Meteor.isClient){
	Meteor.users.helpers({
		hasVoted(type, targetId){
			return UsersVotes.findOne({targetId: targetId, voteType: type});
		}
	})
}