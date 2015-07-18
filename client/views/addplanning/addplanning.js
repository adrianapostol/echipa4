Template.addplanning.rendered = function () {
    if (!Session.get('selectedTasks')) {
        Router.go('tasklist');
    }

};
Template.addplanning.helpers({
    tasks: function () {
        return tasks.find();
    },
    users: function () {
        return Users.find();
    }
});


Template.addplanning.events({
    'click button.cancel': function () {
        Router.go('tasklist');
    }
});

AutoForm.addHooks('insertPlanningSession', {
    onSuccess: function (operation, result) {
        Router.go('planninglist');
    },
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        console.log(arguments);
        return false;
    },
    onError: function (insertDoc, updateDoc, currentDoc) {
        alert('A error has occured please try again later!');
        return false;
    }
});