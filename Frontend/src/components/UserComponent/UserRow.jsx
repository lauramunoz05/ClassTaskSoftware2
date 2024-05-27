function UserRow ({user, onEdit, onDelete}) {

    const handleEdit = () => {
        onEdit(user)
    }

    const handleDelete = () => {
        onDelete(user.id)
    }

    return (
        <tr> 
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td><button onClick={handleEdit} > ✏️</button></td>
            <td><button onClick={handleDelete} > 🗑️</button></td>
        </tr>
    )
}

export default UserRow