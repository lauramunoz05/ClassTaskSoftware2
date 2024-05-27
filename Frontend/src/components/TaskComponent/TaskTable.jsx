import TaskRow from './TaskRow'

function TaskTable ({tasks, onEdit, onDelete}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>State</th>
                    <th>Subject ID</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {tasks.map((task) => (
                    <TaskRow key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}

export default TaskTable