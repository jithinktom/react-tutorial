var $ = require("jquery");

var api = {
    fetchTodo() {
        var result = [];
        $.ajax({
            url: '../todo.json',
            dataType: 'json',
            async: false,
            success: function (data) {
                result = data;
            },
            error: function () {
                console.log("An error has occurred");
            }
        });
        return result;
    },
    fetchTodone() {
        var result = [];
        $.ajax({
            url: '../todone.json',
            dataType: 'json',
            async: false,
            success: function (data) {
                result = data;
            },
            error: function () {
                console.log("An error has occurred");
            }
        });
        return result;
     }
    // removeTodo(id) {    
    //     console.log("ASDDDDDDDDDDDDDDDDDDDDDDD")
    //     $.ajax({
    //         url: '../todo.json',
    //         dataType: 'json',
    //         async: false,
    //         success: function (data) {
    //             var dump = data;
    //             $.each(dump.todos, function(i, val) {
    //             if(val.id == id)
    //             {
    //                 dump.todos.splice(i,1);
    //             }
    //             console.log(dump)
    //             $.ajax({
    //                 url: '../todo.json',
    //                 dataType: 'json',
    //                 async: false,
    //                 data: dump,
    //                 success: function (data) {
    //                     console.log("deleted");
    //                 },
    //                 error: function () {
    //                     console.log("An error has occurred");
    //                 }
    //             });
    //         });
    //         },
    //         error: function () {
    //             console.log("An error has occurred");
    //         }
    //     });
    // }
}

module.exports = api;