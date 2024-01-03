const Total = (props) => {
    const { parts } = props;
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <p style={{fontWeight: "bold"}}>Total of {total} exercises</p>
    );
};

export default Total;