import React, { useEffect, useState } from 'react'
import apiRequest from '../data/request';
import Loading from './Loading';

function Users() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        try {
            setLoading(true)
            apiRequest.get("/users/get_users").then((res)=>{
                setLoading(false);
                setUsers(res.data);
            }).catch((error)=>{
                setLoading(false)
                console.log("server error: ",error?.response?.data?.message);
            })
            
            
        } catch (error) {
            setLoading(false);
            console.log("error: ",error?.message);
            
        }
    },[])
  return (
    loading ? <Loading /> :
    <table className="w-[90%] mx-auto divide-y divide-gray-200">
    <thead className="bg-[#0C73B8]  whitespace-nowrap">
      <tr className="text-[14px]  max-lg2:text-[12px]">
        <th
          scope="col"
          className="px-6 py-4 text-center  font-bold text-white  tracking-wider"
        >
          #
        </th>
     
        <th
          scope="col"
          className="px-6 py-4 text-center  font-bold text-white   tracking-wider"
        >Full Name
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-center  font-bold text-white   tracking-wider"
        >
 Username
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-center  font-bold text-white   tracking-wider"
        >
        Email
        </th>

        <th
          scope="col"
          className="px-6 py-4 text-center  font-bold text-white   tracking-wider"
        >
        Phone Number
        </th>

      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users?.map((user, index) => {
        return (
          <tr
            key={index}
            className="text-center text-[12px] cursor-pointer"
        
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex justify-center items-center">
                <div>
                  <div className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </div>
                </div>
              </div>
            </td>
          
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex justify-center items-center">
                <div>
                  <div className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                    {user?.firstname} {user?.middlename} {user?.lastname}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex justify-center items-center">
                <div>
                  <div className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                    {user?.username}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex justify-center items-center">
                <div>
                  <div className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                    {user?.email}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex justify-center items-center">
                <div>
                  <div className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                    {user?.phone}
                  </div>
                </div>
              </div>
            </td>

          
          
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default Users