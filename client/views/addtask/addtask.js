Template.addtask.events ({
    'click btn.submit': function () {
        var form = document.getElementById("formID").value;
        tasks.insert(form);
    }
});