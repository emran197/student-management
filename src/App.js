import { useState } from "react";
import './App.css'
import StudentFrom from "./StudentForm";
import StudentSection from "./StudentSection";

function Add() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);


  return (
    <div className="student-app">
      <StudentFrom
        students={students}
        setStudents={setStudents}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        setEditableStudent={setEditableStudent}
        studentName={studentName}
        setStudentName={setStudentName}
        editableStudent={editableStudent}
      />
      <StudentSection
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        setEditableStudent={setEditableStudent}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
      />
    </div>
  )

}
export default Add;