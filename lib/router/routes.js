Router.route('/', {
    name: 'home'
});

Router.route('/tasklist', {
    name: 'tasklist'
});

Router.route('/addtask', {
    name: 'addtask'
});

Router.route('/planninglist', {
    name: 'planninglist'
});

Router.plugin('ensureSignedIn', {
    only: ['addtask']
});