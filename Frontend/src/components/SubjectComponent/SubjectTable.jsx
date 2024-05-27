import SubjectRow from './SubjectRow'

function SubjectTable ({subjects, onEdit, onDelete}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>User ID</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {subjects.map((subject) => (
                    <SubjectRow key={subject.id} subject={subject} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}

export default SubjectTable