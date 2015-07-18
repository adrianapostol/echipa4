Schemas = {};
if (Meteor.isClient) {
    Template.registerHelper("Schemas", Schemas);
}

Schemas.chatSession= new SimpleSchema(
    {
        items:{
            type: Array,
            optional: true
        },

        "items.$":{
            type: Object,
            optional: true
        },
        "items.$.name":{
            type: String
        },
        "items.$.message":{
            type: String
        },
        "items.$.createdAt":{
            type: Date
        }
    }
);




var Collections = {};
if (Meteor.isClient) {
    Template.registerHelper("Collections", Collections);
}
chatSessions = Collections.chatSessions = new Mongo.Collection("chatSessions");
chatSessions.attachSchema(Schemas.chatSession);

Meteor.publish("chatSessions", function () {
    return chatSessions.find();
});

chatSessions.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return false;
    },
    update: function () {
        return false;
    }
});


