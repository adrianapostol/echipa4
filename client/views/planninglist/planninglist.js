Template.planninglist.rendered = function() {
};
Template.planninglist.helpers({
    planninglist: function(){
        return planningSessions.find();
    }
});