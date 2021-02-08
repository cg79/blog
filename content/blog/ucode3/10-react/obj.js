



var events = {
    publish: function (eventName, obiect) {
        console.log(eventName, obiect);
    }
}

class events1 {

    age = 0;
    constructor(data) {
        var {age} = data;
        // var age = data.age;   
        this.age = age; 
        debugger;
    }
    publish(eventName, obiect) {
        console.log(eventName, obiect);
    }
}

var helpers = {
    guid: function() {
         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }
}


class ToDo {

    id = 0;
    guid = '';

    userId = '';

    selected = false;
    constructor(data) {
        var {id,guid, userId} = data;
        // var age = data.age;   
        this.id = id; 
        this.guid = guid || helpers.guid;
        this.userId = userId;
        debugger;
    }
    publish(eventName, obiect) {
        console.log(eventName, obiect);
    }

    select() {
        this.selected = !this.selected;
        // a=1-a

    }
}

class ToDos {

    list = [];
   
       
    add(data) {
        this.list.push(new ToDo(data));
    }

    remove(fct) {
        this.list = this.list.filter(fct)

    }

    update(todo) {
        var existingTodo = this.list.find(el => el.guid === todo.guid);
        if(!existingTodo){
            return;
        }

        existingTodo.id = todo.id;

    }

    removeSelected() {
        this.list = this.list.filter(el.selected)
    }
    find(fct) {
       return  this.list.find(fct);
    }

}