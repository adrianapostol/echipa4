Template.dashboard.rendered = function() {

};
Template.dashboard.helpers({
    tasks : function(){
        return tasks.find();
    },
    users : function()
    {
        return Meteor.users();
    }
});