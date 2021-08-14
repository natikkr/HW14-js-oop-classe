class ToDoList {
    constructor() {
        this.todos = []
    }
    addTodo(task){
        this.todos.push(task)
    }
    removeTodo(id){
        this.todos = this.todos.filter(function(listItem){
           return listItem.id !== id;
        })
    }
    showCompletedTasks () {
      return this.todos.filter(function(listItem){
        return listItem.status === true;
     })
    }
    showInProgressTask () {
      return this.todos.filter(function(listItem){
        return listItem.status === false;
     })
    }

    findTasks (searchString){
        return this.todos.filter(function(listItem){
          return listItem.task.includes(searchString)      
        })
        
    }

    changeStatus (taskobj) {
        return this.todos.filter(function(listItem){
            if (listItem.id === taskobj.id){
                listItem.status = (!taskobj.status)
                return listItem
            }
        })
        
     
    }
}
  
  let toDoList = new ToDoList()

  class Task {
      constructor(task, status, id){
          this.task = task
          this.status = status
          this.id = id
      }
  }
  let task1 = new Task('to buy milk', true, 'task1')
  let task2 = new Task('to buy bread', true, 'task2')
  let task3 = new Task('to buy salt', false, 'task3')
  let task4 = new Task('to buy sugar', false, 'task4')
        
  
  toDoList.addTodo(task1)
  toDoList.addTodo(task2)
  toDoList.addTodo(task3)
  toDoList.addTodo(task4)
  toDoList.removeTodo(task2.id)
  console.log(toDoList.todos)
  console.log(toDoList.showCompletedTasks());
  console.log(toDoList.showInProgressTask());
  console.log(toDoList.changeStatus(task3));
  console.log(toDoList.todos)
  console.log(toDoList.findTasks('y s'));
  

