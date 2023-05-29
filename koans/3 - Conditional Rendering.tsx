
/*
    TASK: Render the word `complete` next to each of the items that have been marked as completed
 */

const ToDoItem = ({name, isCompleted}) => {
    return <li>{name}</li>;
}

const ToDoList = () => {
    return <ul>
            <ToDoItem name={'Item 1'} isCompleted={true} />
            <ToDoItem name={'Item 2'} isCompleted={false} />
            <ToDoItem name={'Item 3'} isCompleted={true} />
            <ToDoItem name={'Item 4'} isCompleted={false} />
        </ul>

}

export default ToDoList;
