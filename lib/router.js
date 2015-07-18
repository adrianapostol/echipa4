FlowRouter.route('/', {
    name: 'home',
    //subscriptions: function() {
    //    this.register('teams', Meteor.subscribe('myTeams'));
    //},
    action: function () {
        FlowLayout.render('defaultLayout', {
            main: 'home'
        });
    }
});

FlowRouter.notFound = {
    action: function () {
        FlowLayout.render('teamLayout', {
            main: 'notFound'
        });
    }
};

Router.route('/', function () {
    FlowRouter.go('home');
});