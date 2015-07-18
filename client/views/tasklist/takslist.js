Template.tasklist.rendered = function() {
};
Template.tasklist.helpers({
    tasks: function(){
        return tasks.find();
    }
});