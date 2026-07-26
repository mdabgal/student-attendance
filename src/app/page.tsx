"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchFilter from "@/components/home/SearchFilter";
import SummaryCards from "@/components/home/SummaryCards";

import StudentTable from "@/components/attendance/StudentTable";
import StudentSkeleton from "@/components/attendance/StudentSkeleton";
import AttendanceModal from "@/components/attendance/AttendanceModal";
import toast from "react-hot-toast";
import { Student, AttendanceStatus } from "@/types/student";

import Footer from "@/components/layout/Footer";


export default function Home() {


  // Student List
  const [studentList, setStudentList] = useState<Student[]>([]);



  // Loading
  const [loading, setLoading] = useState(true);



  // Error
  const [error, setError] = useState("");



  // Search
  const [search, setSearch] = useState("");



  // Class Filter
  const [selectedClass, setSelectedClass] = useState("All");



  // Selected Student
  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);



  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);




  // Fetch Students API
  useEffect(() => {


    const fetchStudents = async () => {


      try {


        const res = await fetch(
          "http://localhost:4000/students"
        );


        if (!res.ok) {

          throw new Error(
            "Failed to fetch students"
          );

        }



        const data = await res.json();


        setStudentList(data);



      } catch (error) {


        setError(
          "Something went wrong while loading students"
        );


      } finally {


        setLoading(false);


      }


    };



    fetchStudents();



  }, []);







  // Open Modal
  const handleEdit = (student: Student) => {


    setSelectedStudent(student);


    setIsModalOpen(true);


  };







  // Save Attendance
// Save Attendance + Update API
const handleSave = async (
  status: AttendanceStatus
) => {

  if (!selectedStudent) return;


  try {


   const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/students/${selectedStudent.id}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          status,
        }),

      }
    );



    if (!res.ok) {

      throw new Error(
        "Failed to update attendance"
      );

    }



    const updatedStudent = await res.json();



    // Update UI instantly
    setStudentList((prev) =>

      prev.map((student) =>

        student.id === updatedStudent.id

          ? updatedStudent

          : student

      )

    );

toast.success(
  "Attendance updated successfully"
);

    setIsModalOpen(false);

    setSelectedStudent(null);



  } catch (error) {


     setError(
    "Something went wrong while loading students"
  );

   toast.error(
  "Failed to update attendance"
);

  }

};









  // Search + Filter
  const filteredStudents = studentList.filter(
    (student) => {


      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );



      const matchesClass =
        selectedClass === "All" ||
        student.class === selectedClass;



      return (
        matchesSearch &&
        matchesClass
      );


    }
  );








  return (

    <main className="min-h-screen bg-slate-50">


      <Navbar />



      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">



        <Hero />




        <SearchFilter

          search={search}

          setSearch={setSearch}

          selectedClass={selectedClass}

          setSelectedClass={setSelectedClass}

        />





        <SummaryCards

          students={studentList}

        />








        {
          error && (

            <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center text-red-600">

              {error}

            </div>

          )
        }







        {
          loading ? (

            <StudentSkeleton />

          ) : filteredStudents.length === 0 ? (


            <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">


              <h2 className="text-xl font-semibold text-slate-700">

                No students found

              </h2>


              <p className="mt-2 text-slate-500">

                Try changing your search or filter

              </p>


            </div>



          ) : (


            <StudentTable

              students={filteredStudents}

              onEdit={handleEdit}

            />


          )
        }








        <AttendanceModal


          isOpen={isModalOpen}


          student={selectedStudent}



          onClose={() => {


            setIsModalOpen(false);


            setSelectedStudent(null);


          }}



          onSave={handleSave}


        />



      </div>





      <Footer />


    </main>

  );

}