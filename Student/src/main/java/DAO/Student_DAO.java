package DAO;

import java.util.List;

import Model.Student;

public interface Student_DAO {

	public boolean saveStudent(Student student);
	public List<Student> getStudents();
	
}
