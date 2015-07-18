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

