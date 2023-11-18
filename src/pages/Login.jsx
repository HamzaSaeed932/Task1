import React,{useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import Alert from "../components/Alert";
export default function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [handleLogin,setHandleLogin]=useState(false);

    const Navigate = useNavigate();

    const handleChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        
        setPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email === 'hs8656932@gmail.com' && password === 'khan123'){
            Navigate('/otpscreen');
        }
        else
        {
            setHandleLogin(true);
        }
    }
    const close = (val)=>{
        setHandleLogin(val);
    }


  return (
    <section class="bg-gray-50 dark:bg-gray-900 ">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Login    
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CNIC Number</label>
                        <input type="number" name="cnic" id="cnic" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11111-2233445-6" required=""/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" placeholder="abc@gmail.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={email} onChange={handleChange} required="" />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password}  onChange={handlePassword}/>
                    </div>
                   
                    <button  class="w-full text-white bg-primary-600 border border-lime-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Login account</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        No account? <Link to="/SignUp" class="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp here</Link>
                    </p>
                </form>
            </div>
        </div>
       {handleLogin && <Alert  close={close}/>}
    </div>

  </section>
  );
}
