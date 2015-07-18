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
    name: 'planningpoker'
});
Router.plugin('ensureSignedIn', {
    only: ['addtask']
});