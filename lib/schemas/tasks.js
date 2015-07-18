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
            type: Date,
            autoform: {
                value: new Date()
            }
        },
        createdBy:{
            type: Object
        },
        participant:{
            type: String,
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
tasks = Collections.Tasks = new Mongo.Collection("Tasks");
tasks.attachSchema(Schemas.Task);

Meteor.publish("Tasks", function () {
    return tasks.find();
});

tasks.allow({
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