Template.dashboard.rendered = function() {

};

Template.planningpoker.helpers({
    chatMessages: function(){
        return chatSessions.find({}, {sort: {createdAt: -1}});
    },

    moreThanZero: function(messages) {

        if (messages.length > 0) {
            return true;
        } else {
            return false;
        }
    }

});




Template.planningpoker.events({
    'submit #chatSubmit':function(e){
        e.preventDefault();
        var a = {
            name: 'Alex',
            message: $('#enterMessage').val(),
            planningSessionId: Session.get('planningSessionId') || "0",
            taskId :Session.get('taskId') || "0",
            createdAt: new Date()

        };
        $('#enterMessage').val("");
        chatSessions.insert(a);
        return false;
    }

});