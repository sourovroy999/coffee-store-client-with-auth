import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers)

    const handleUserDelete=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    

    //delete from database
    fetch(`https://coffee-store-server-8vlfvm9ux-arkos-projects-d3fcd0dd.vercel.app/users/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('delete is done', data);
        if(data.deletedCount){
            Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      const remaingUsers=users.filter(user=>user._id !== id)
      setUsers(remaingUsers)
        }
    })
  }
});
    }
    return (
        <div className='px-20 mt-10'>
            <h2 className='text-3xl'>Users: {users.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {/* row 1 */}
     {
        users.map(user=>  <tr key={user._id} className="hover:bg-base-300">
   
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastSignInTime}</td>
        <td className='flex gap-4'>
            <button onClick={()=>handleUserDelete(user._id)} className='btn'>X</button>
            <button className='btn'>Edit</button>
        </td>
      </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;