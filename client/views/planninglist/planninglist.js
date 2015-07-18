Template.planninglist.rendered = function() {
};
Template.planninglist.helpers({
    planninglist: function(){
        return planningSessions.find();
    }
});
Template.planning_item.events({
    'click button': function(){
        Session.set('planningSessionId',this._id);
        Session.set('taskId',this.tasks[0]);
        Session.set('tasksIds',this.tasks);

        Router.go('planningpoker', this._id, this.tasks[0]);
    }

});