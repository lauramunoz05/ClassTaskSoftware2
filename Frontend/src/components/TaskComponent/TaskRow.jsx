function TaskRow ({task, onEdit, onDelete}) {

    const handleEdit = () => {
        onEdit(task)
    }

    const handleDelete = () => {
        onDelete(task.id)
    }

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('es-ES', options);
    }

    return (
        <tr> 
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{formatDate(task.dueDate)}</td>
            <td>{task.completed ? 'Sí' : 'No'}</td>
            <td>{task.subjectId}</td>
            <td><button onClick={handleEdit} > ✏️</button></td>
            <td><button onClick={handleDelete} > 🗑️</button></td>
        </tr>
    )
}

export default TaskRow