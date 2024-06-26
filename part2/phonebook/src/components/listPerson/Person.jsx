const Person = (props) => {
    const { id, name, number, handleDelete } = props;
    return (
        <div>
            <p>
                {id} {name} {number} {" "}
                <button onClick={() => handleDelete(id)}>Delete</button>
            </p>
        </div>
    );
};

export default Person;
