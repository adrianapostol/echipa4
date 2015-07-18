currentRouteId = function () {
    return FlowRouter.getParam('_id');
};

/**
 * Removes the first character of a string and returns the result
 * @returns {string} The currentChannelSlug with the first character removed
 */
isSubReady = function (subName) {
    return FlowRouter.subsReady(subName);
};

isEnter = function (e) {
    return e.keyCode === 13;
};

displayUnauthorizedError = function() {
    swal({
        title: 'Yikes! Something went wrong',
        text: "We can't complete your request at the moment, are you still online?",
        type: 'error'
    });
};