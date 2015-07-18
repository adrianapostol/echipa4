Schemas = {};

Template.registerHelper("Schemas", Schemas);


Schemas.planningSession= new SimpleSchema(
    {
        sessionName:{},
        sessionDescription:{},
        tasks:{
            type: Array,
            optional: false
        },
        participants:{
            type: Array,
            optional: false
        },
        creator:{
            type: String
        }
    }
);

var Collections = {};

Template.registerHelper("Collections", Collections);

planningSessions = Collections.planningSessions = new Mongo.Collection("PlanningSessions");
planningSessions.attachSchema(Schemas.planningSession);

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