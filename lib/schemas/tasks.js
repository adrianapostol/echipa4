Schemas = {};
if (Meteor.isClient) {
    Template.registerHelper("Schemas", Schemas);
}

Schemas.Task = new SimpleSchema(
    {
        taskId:{
            type: String,
            index: 1,
            unique: true
        },
        taskName:{
            type: String,
            optional: false
        },
        taskDescription: {
            type: String,
            optional: true
        },
        createdAt:{
            autoform: {
                value: new Date()
            }
        },
        createdBy:{
            type: Object
        },
        participant:{
            autoform: {
                value: false
            }
        }
    }


);

var Collections = {};
if (Meteor.isClient) {
    Template.registerHelper("Collections", Collections);
}
Tasks = Collections.Tasks = new Mongo.Collection("Tasks");
Tasks.attachSchema(Schemas.Task);

Meteor.publish("Tasks", function () {
    return Tasks.find();
});

Tasks.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    update: function () {
        return true;
    }
});