import Link from "next/link";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  GitBranch,
} from "lucide-react";


export default function Footer() {

  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-100 ">


      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">


       

        <div>

          <div className="flex items-center gap-3">


            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">

              <GraduationCap size={28}/>

            </div>


            <div>

              <h2 className="text-xl font-bold ">
                Student
                <span className="text-blue-600">
                  Attendance
                </span>
              </h2>


              <p className="text-sm ">
                Smart Management System
              </p>

            </div>


          </div>


          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-800">
            A modern student attendance management system
            built with Next.js, TypeScript and Tailwind CSS.
          </p>


        </div>





      

        <div>

          <h3 className="mb-5 text-lg font-semibold ">
            Quick Links
          </h3>


          <ul className="space-y-3 text-sm">


            <li>
              <Link 
                href="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>


            <li>
              <Link 
                href="/students"
                className="hover:text-blue-400 transition"
              >
                Students
              </Link>
            </li>


            <li>
              <Link 
                href="/attendance"
                className="hover:text-blue-400 transition"
              >
                Attendance
              </Link>
            </li>


          </ul>


        </div>





       
        <div>


          <h3 className="mb-5 text-lg font-semibold ">
            Contact
          </h3>


          <div className="space-y-4 text-sm">


            <p className="flex items-center gap-3">

              <Mail 
                size={18}
                className="text-blue-400"
              />

              support@studentattendance.com

            </p>



            <p className="flex items-center gap-3">

              <Phone
                size={18}
                className="text-blue-400"
              />

              +880 1234-567890

            </p>




            <p className="flex items-center gap-3">

              <MapPin
                size={18}
                className="text-blue-400"
              />

              Dhaka, Bangladesh

            </p>



          </div>


        </div>



      </div>





    

      <div className="border-t border-slate-800">


        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-sm md:flex-row">


          <p className="text-slate-600">
            © {new Date().getFullYear()} Student Attendance.
            All rights reserved.
          </p>



          <Link
            href="https://github.com/"
            target="_blank"
            className="flex items-center gap-2 hover:text-white transition"
          >

            <GitBranch size={18}/>

            GitHub

          </Link>


        </div>


      </div>



    </footer>
  );
}