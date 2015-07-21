Template.chat_item.rendered = function () {

};
Template.vote_item.helpers({
    myVoteCard : function(){
        return this.createdBy == Meteor.userId() ? "my":"they"
    },
    showVote: function(){
        return this.createdBy == Meteor.userId() || Session.get('ShowCards');
    }
})

