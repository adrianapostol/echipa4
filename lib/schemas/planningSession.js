Schemas = {};
if (Meteor.isClient) {
    Template.registerHelper("Schemas", Schemas);
}

Schemas.planningSession= new SimpleSchema(
    {
        sessionName:{  type: String},
        sessionDescription:{  type: String},
        //tasks:{
        //    type: Array,
        //    optional: false
        //},
        //participants:{
        //    type: Array,
        //    optional: false
        //},
        creator:{
            type: String
        }
    }
);

var Collections = {};
if (Meteor.isClient) {
    Template.registerHelper("Collections", Collections);
}
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