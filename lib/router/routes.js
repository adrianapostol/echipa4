Router.route('/', {
    name: 'home'
});

Router.route('/tasklist', {
    name: 'tasklist',
    waitOn: function () {
        return Meteor.subscribe("Tasks");
    }

});

Router.route('/addtask', {
    name: 'addtask',
    waitOn: function () {
        return Meteor.subscribe("Tasks");
    }
});

Router.route('/planninglist', {
    name: 'planninglist'
});


Router.route('/addplanning', {
    name: 'addplanning',
    waitOn: function () {
        var selectedTasks = Session.get('selectedTasks') || {},
            sKey,
            aReturnKeys = [];
        for (sKey in selectedTasks)
            if (selectedTasks.hasOwnProperty(sKey) && selectedTasks[sKey]) {
                aReturnKeys.push(sKey);
            }
        return Meteor.subscribe('onlytasks', aReturnKeys);
    }

});

Router.route('/planningpoker', {
    name: 'planningpoker',
    waitOn: function () {
        var planningSessionId =Session.get('planningSessionId') || "0";
        var taskId = Session.get('taskId') || "0";


        return [
            Meteor.subscribe('chatSessions', planningSessionId,  taskId),
            Meteor.subscribe('voteSessions', planningSessionId,  taskId)
        ];
    }
});
Router.plugin('ensureSignedIn', {
    only: ['addtask','tasklist','planninglist','planningpoker']
});