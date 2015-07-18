Schemas = {};
if (Meteor.isClient) {
    Template.registerHelper("Schemas", Schemas);
}

Schemas.planningSession= new SimpleSchema(
    {
        sessionName:{  type: String},
        sessionDescription:{  type: String},
        tasks:{
            type: [String],
            optional: true
        },
        participants:{
            type: [String],
            optional: true
        },
        createdBy:{
            type: String
        },
        scheduledOn: {
            type: Date,
            autoform: {
                value: new Date()
            }
        },
        emailNotify: {
            type: Boolean,
            defaultValue: true,
            label: "Notify all participants via email!",
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


planningSessions = Collections.planningSessions = new Mongo.Collection("PlanningSessions");
planningSessions.attachSchema(Schemas.planningSession);

if (Meteor.isClient) {
    Meteor.subscribe("PlanningSessions");
}
if (Meteor.isServer) {

    Meteor.publish("PlanningSessions", function () {
        return planningSessions.find();
    });

    planningSessions.allow({
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
}