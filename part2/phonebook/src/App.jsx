import { useEffect, useState } from "react";
import ListPerson from "./components/listPerson/ListPerson";
import AddPerson from "./components/addPerson/AddPerson";
import Filter from "./components/filter/Filter";

import PersonService from "./services/persons";

const App = () => {
    // State
    const [persons, setPersons] = useState([]);
    const [filtered, setFiltered] = useState([...persons]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    // Custom Hooks
    useEffect(() => {
        const getData = async () => {
            const response = await PersonService.getAll();
            setPersons(response);
            setFiltered(response);
        };
        getData();
    }, []);
    // Event Handlers
    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber,
        };
        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        setPersons(persons.concat(personObject));
        setFiltered(persons.concat(personObject));
        setNewName("");
        const postData = async () => {
            const response = await PersonService.create(personObject);
        };
        postData();
    };
    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };
    const handleFilterChange = (event) => {
        setFiltered(
            persons.filter((person) =>
                person.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            )
        );
    };

    // The actual component
    return (
        <div>
            <h1>Phonebook</h1>
            <Filter handleFilterChange={handleFilterChange} />
            <AddPerson
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                addPerson={addPerson}
            />
            <ListPerson persons={filtered} />
        </div>
    );
};

export default App;
