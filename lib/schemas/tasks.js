Schemas = {};
if (Meteor.isClient) {
    Template.registerHelper("Schemas", Schemas);
}

Schemas.Task = new SimpleSchema(
    {
        taskId: {
            type: String,
            index: 1,
            unique: true
        },
        taskName: {
            type: String,
            optional: false
        },
        taskDescription: {
            type: String,
            optional: true
        },
        createdAt: {
            type: Date,
            autoform: {
                value: new Date()
            }
        },
        userId: {
            type: Object
        },
        participant: {
            type: Boolean,
            defaultValue: true,
            label: "Do you estimate in the Poker Planning?",
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
if (Meteor.isServer) {
    Meteor.publish("Tasks", function () {
        return tasks.find();
    });
}
if (Meteor.isClient) {
    Meteor.subscribe("Tasks");
}

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
