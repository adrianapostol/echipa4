'use strict';

// http://docs.webix.com/api__refs__ui.datatable.html
    var dataTable = {
        view: 'datatable',
        id: 'datatable',
        // Columns can usually be omitted and they can be automatically detected with autoconfig: true
        // But since we don't know what data in the DB might confused the autodetection, we'll specify:
        columns: [
            // http://docs.webix.com/api__ui.datatable_columns_config.html
            {id: 'taskId', header: 'taskId', editor: 'text', fillspace: true}, // fill remaining width in the table
            {id: 'taskName', header: 'taskName', editor: 'text', adjust: true},  // automatically adjust to content size
            {id: 'taskDescription', header: 'taskDescription', editor: 'text', adjust: true}
        ],
        select: true,
        sortable: true,
        editable: true,  // redundant, but see http://forum.webix.com/discussion/4328/editable-true-doesn-t-do-anything-if-columns-don-t-have-editor-specified
        editaction: 'dblclick',
        resizeColumn: true,
        url: webix.proxy('meteor', Tasks.find()),  // <-- this is it!
        save: webix.proxy('meteor', Tasks)   // Mongo.Collection
    };

    var toolbar = {
        view: 'toolbar',
        elements: [
            {view: 'label', label: 'Double-click a row to edit. Click on columns to sort.'},
            {
                view: 'button', value: 'Add', width: 100,
                click: function () {
                    var row = $$('datatable').add({});
                    $$('datatable').editCell(row, 'taskId');
                }
            },
            {
                view: 'button', value: 'Remove', width: 100,
                click: function () {
                    var id = $$('datatable').getSelectedId();
                    if (id)
                        $$('datatable').remove(id);
                    else
                        webix.message('Please select a row to delete');
                }
            }
        ]
    };

    var detailForm = {
        view: 'form',
        id: 'detail-form',
        elements: [
            {view: 'text', name: 'taskId', label: 'Task Id'},
            {view: 'text', name: 'taskName', label: 'Task Name'},
            {view: 'text', name: 'taskDescription', label: 'Task Description'},
            {
                view: 'button', label: 'Save',
                type: 'form',  // a Submit button; 'form' is an odd type name for buttons - http://docs.webix.com/api__ui.button_type_config.html#comment-1863007844
                click: function () {
                    this.getFormView().save();
                    this.getFormView().clear();
                }
            }
        ]
    };

Meteor.startup(function () {

    var webixContainer = webix.ui({
        container: 'webix-playground',
        view: 'layout',
        rows: [
            {
                // view: 'layout',  -- inferred automatically when the keys are 'rows' and/or 'cols'
                cols: [
                    {
                        // the first column is the table
                        rows: [
                            toolbar,
                            dataTable
                        ],
                        gravity: 2  // make this column 2x the width of the other one
                    }
                ]
            },
            {view: 'resizer'},
            detailForm
        ]
    });

    // The problem with mixing Webix components and non-Webix HTML markup is that Webix UI components won't resize
    // automatically if you place them in an HTML container. You have to resize them manually, like below.
    // Read more at http://forum.webix.com/discussion/comment/3650/#Comment_3650.
    webix.event(window, 'resize', function () {
        webixContainer.resize();
    });

    // http://docs.webix.com/desktop__data_binding.html
    $$('detail-form').bind($$('datatable'));

    console.log('The DataTable is reactive. Try `Tasks.insert({title: "Star Wars"})`');

});