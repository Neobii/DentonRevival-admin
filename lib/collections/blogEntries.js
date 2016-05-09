BlogEntries = new Mongo.Collection("blogEntries");

BlogEntries.helpers({
	timestamp() {
		return moment(this.date).format("ddd, hA");   
	}
})

BlogEntries.attachSchema({
	title: {
		type: String,
		label: "title"
	},
	body: {
		type: String,
		label: "body",
		autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
      }
    }
	},
	date: {
		type: Date,
		label: "Date",
		autoValue() {
			if(this.isInsert){
				return new Date();
			}
		}
	}
})