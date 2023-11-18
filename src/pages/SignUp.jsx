import { Link } from "react-router-dom";
function SignUp() {

  return (
    <>
    <div className="container mx-auto">
      <h1 className="font-mono font-bold text-center text-5xl text-rose-900 mb-4">
        Sign Up
      </h1>
      
      <form className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Enter Your First Name" className="border border-gray-300 shadow rounded h-10 px-2"/>
        <input type="text" placeholder="Enter Your Last Name" className="border border-gray-300 shadow rounded h-10 px-2"/>
        <input type="email" placeholder="Enter Your Email" className="border border-gray-300 shadow rounded h-10 px-2"/>
        <input type="number" placeholder="Enter Your Mobile No" className="border border-gray-300 shadow rounded h-10 px-2"/>
        <input type="text" placeholder="Enter Your User Name" className="border border-gray-300 shadow rounded h-10 px-2"/>
        <input type="password" placeholder="Enter Your Password" className="border border-gray-300 shadow rounded h-10 px-2"/>
        <input type="number" placeholder="Enter Your CNIC No" className="border border-gray-300 shadow rounded h-10 px-2 col-span-2"/>
        <div>
        <input type="file"/>
        <label htmlFor="">Front of CNIC</label>
        </div>
        <div>
        <input type="file"/>
        <label htmlFor="">Back of CNIC</label>
        </div>

     
        

        <Link className="border rounded  h-8 bg-red-300 shadow text-xl mt-2 col-span-2 w-2/4 mx-auto hover:cursor-pointer text-center" to={'/login'}>Submit</Link>
      
      </form>
    </div>
    </>
  );
}

export default SignUp;
