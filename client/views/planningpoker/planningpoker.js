Template.dashboard.rendered = function () {

};

Template.planningpoker.helpers({
    chatMessages: function () {
        return chatSessions.find({}, {sort: {createdAt: -1}});
    },
   voteMessages: function () {
        return voteSessions.find({}, {sort: {createdAt: -1}});
    },
    storyNumbers: function () {
        var tasks = Session.get('tasksIds') || [],
            currentTask = Session.get('currentSite') || 1;
        return currentTask + '/' + tasks.length;
    },

    moreThanZero: function (messages) {

        if (messages.length > 0) {
            return true;
        } else {
            return false;
        }
    }

});


Template.planningpoker.events({
    'submit #chatSubmit': function (e) {
        e.preventDefault();
        var a = {
            name: Meteor.user().emails[0].address,
            message: $('#enterMessage').val(),
            planningSessionId: Session.get('planningSessionId') || "0",
            taskId: Session.get('taskId') || "0",
            createdAt: new Date()

        };
        $('#enterMessage').val("");
        chatSessions.insert(a);
        return false;
    },
    'click .card2': function (e) {
        e.preventDefault();
        var a = {
            name: Meteor.user().emails[0].address,
            value: $(e.target).data('value'),
            planningSessionId: Session.get('planningSessionId') || "0",
            taskId: Session.get('taskId') || "0",
            createdAt: new Date()

        };
        voteSessions.insert(a);
        return false;
    },

});