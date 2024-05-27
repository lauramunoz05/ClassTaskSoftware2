function SubjectRow ({subject, onEdit, onDelete}) {

    const handleEdit = () => {
        onEdit(subject)
    }

    const handleDelete = () => {
        onDelete(subject.id)
    }

    return (
        <tr> 
            <td>{subject.id}</td>
            <td>{subject.name}</td>
            <td>{subject.description}</td>
            <td>{subject.userId}</td>
            <td><button onClick={handleEdit} > ✏️</button></td>
            <td><button onClick={handleDelete} > 🗑️</button></td>
        </tr>
    )
}

export default SubjectRow