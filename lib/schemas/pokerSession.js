Schemas = {};

Template.registerHelper("Schemas", Schemas);


Schemas.pokerSession= new SimpleSchema(
    {
        sessionName:{},
        sessionDescription:{},
        tasks:{
            type: Array,
            optional: false
        },
        players:{
            type: Array,
            optional: false
        },
        cards: {
            type: Object,
            optional: false
        },

        "cards.player":{
            type: String
        },
        "cards.value":{
            type: Number
        }
    }
);





var Collections = {};

Template.registerHelper("Collections", Collections);

pokerSessions = Collections.pokerSessions = new Mongo.Collection("PokerSessions");
pokerSessions.attachSchema(Schemas.pokerSession);

Meteor.publish("PokerSessions", function () {
    return pokerSessions.find();
});

pokerSessions.allow({
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

