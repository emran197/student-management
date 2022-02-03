import './App.css'
import AllStudent from "./AllStudent";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";

function studentSection(props) {
    const toggleHandler = (studentId) => {
        const student = props.students.find((item) => item.id === studentId);
        student.isPresent = !student.isPresent;
        props.setStudents([...props.students])
    }
    return (
        <div className="students">
            <AllStudent
                students={props.students}
                setStudents={props.setStudents}
                isEditable={props.isEditable}
                setIsEditable={props.setIsEditable}
                setEditableStudent={props.setEditableStudent}
                setStudentName={props.setStudentName}
            />
            <PresentStudent
                toggleHandler={toggleHandler}
                students={props.students}
            />

            <AbsentStudent
                toggleHandler={toggleHandler}
                students={props.students}
            />
        </div>
    );
}

export default studentSection;