import React, { useState } from 'react'
import Loading from './Loading';
import apiRequest from '../data/request';

function CreateUser() {
    const [firstname,setFirstname] = useState("");
    const [middlename,setMiddlename] = useState("");
    const [lastname,setLastname] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [loading,setLoading] = useState(false);

    const handleCreateUser = async ()=>{
        try {
            setLoading(true);
            apiRequest.post("/users/create",{
                firstname,
                middlename,
                lastname,email,
                username,
                phone:phoneNumber
            }).then((res)=>{
                setLoading(false);
                window.location.href = "/"
            }).catch((error)=>{
                setLoading(false)
                console.log("server error: ",error?.response?.data);
            })
        } catch (error) {
            setLoading(false);
            console.log("error: ",error.message)
            
        }
    }
  return (
    <div className="w-[100%]">
    
     <div className="w-[90%] my-[50px] mx-auto max-lg2:my-[30px]">
       <div className="flex flex-col  font-bold text-[#0C73B8] gap-[5px]">
        
         <span className='text-[20px] font-bold'>Create user</span>
         <div className='w-[100%] border-b border-gray-300'/>
       </div>
    
       <div className="w-[100%] my-[20px] grid grid-cols-3 gap-[10px]">
         <div className="w-[100%] col-span-1">
           <label className="block text-sm font-bold p-2 leading-6 text-[#0C73B8] max-lg2:text-[12px]">
             First Name <span className="text-red-700">*</span>
           </label>
           <div className="mt-2">
             <input
               required
               type="text"
               onChange={(e)=>setFirstname(e.target.value)}
               className="block w-full p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FBB042] outline-none sm:text-sm sm:leading-6 max-lg2:p-2 max-lg2:text-[12px]"
             />
           </div>
         </div>
         <div className="w-[100%] col-span-1">
           <label className="block text-sm font-bold p-2 leading-6 text-[#0C73B8] max-lg2:text-[12px]">
             Middle Name <span className="text-red-700">*</span>
           </label>
           <div className="mt-2">
             <input
               required
               type="text"
          
               onChange={(e)=>setMiddlename(e.target.value)}
               className="block w-full p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FBB042] outline-none sm:text-sm sm:leading-6 max-lg2:p-2 max-lg2:text-[12px]"
             />
           </div>
         </div>
         <div className="w-[100%] col-span-1">
           <label className="block text-sm font-bold p-2 leading-6 text-[#0C73B8] max-lg2:text-[12px]">
             Last Name <span className="text-red-700">*</span>
           </label>
           <div className="mt-2">
             <input
               required
               type="text"
           
               onChange={(e)=>setLastname(e.target.value)}
               className="block w-full p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FBB042] outline-none sm:text-sm sm:leading-6 max-lg2:p-2 max-lg2:text-[12px]"
             />
           </div>
         </div>
         <div className="w-[100%] col-span-1">
           <label className="block text-sm font-bold p-2 leading-6 text-[#0C73B8] max-lg2:text-[12px]">
            Username <span className="text-red-700">*</span>
           </label>
           <div className="mt-2">
             <input
               required
               type="text"
              
               onChange={(e)=>setUsername(e.target.value)}
               className="block w-full p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FBB042] outline-none sm:text-sm sm:leading-6 max-lg2:p-2 max-lg2:text-[12px]"
             />
           </div>
         </div>
         <div className="w-[100%] col-span-1">
           <label className="block text-sm font-bold p-2 leading-6 text-[#0C73B8] max-lg2:text-[12px]">
            email <span className="text-red-700">*</span>
           </label>
           <div className="mt-2">
             <input
               required
               type="email"
              
               onChange={(e)=>setEmail(e.target.value)}
               className="block w-full p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FBB042] outline-none sm:text-sm sm:leading-6 max-lg2:p-2 max-lg2:text-[12px]"
             />
           </div>
         </div>
        
        
       
         <div className="w-[100%] col-span-1">
           <label className="block text-sm font-bold p-2 leading-6 text-[#0C73B8] max-lg2:text-[12px]">
             Phone (mobile) Number <span className="text-red-700">*</span>
           </label>
           <div className="mt-2">
             <input
               required
               type="text"
               value={phoneNumber}
               onChange={(e)=>setPhoneNumber(e.target.value)}
               className="block w-full p-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FBB042] outline-none sm:text-sm sm:leading-6 max-lg2:p-2 max-lg2:text-[12px]"
             />
           </div>
         </div>
       
        
       </div>
    
       <div className="w-[100%] h-[1px] bg-gray-300 mt-[30px]" />
 
          
          
    
           {loading ? <Loading addtionalStyle={"flex justify-end items-center my-[20px]"}/>: <div className="w-[100%] mx-auto my-6 py-5 flex items-center justify-end gap-x-6">
       
         <button
           onClick={handleCreateUser}
           className={
            
            "rounded-md bg-[#FBB042] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 max-lg2:text-[12px]"
           }
         >
           Create
         </button>
       </div>}
    
     </div>
    </div>
  )
}

export default CreateUser