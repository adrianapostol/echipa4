Template.task_item.rendered = function() {

};


Template.task_item.events({
    'click button.delete': function(){
        tasks.remove(this._id);
    }

});