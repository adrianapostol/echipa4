/**
 * Check if the item is created by the current user
 *
 * @param Collection
 * @param itemId
 * @returns {*|boolean}
 */
isOwner = function (Collection, itemId) {
    return Collection.findOne(itemId) && Meteor.userId() === Collection.findOne(itemId).userId;
};



pokerSessions.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.userId = Meteor.userId();
});

planningSessions.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.userId = Meteor.userId();
});

tasks.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.userId = Meteor.userId();
});
