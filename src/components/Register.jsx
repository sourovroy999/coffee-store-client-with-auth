import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const Register = () => {

    const{createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        
        console.log(email,password);
        

        createUser(email,password)
        .then(result=>{
            console.log(result.user);

            const createdAt=result?.user?.metadata?.creationTime

            const userInfo={name, email, createdAt}

            alert('registration successfull')
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userInfo)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    console.log('user created at database');
                    
                }
                
            })
            
        })
        .catch(error=>{
            console.log('error', error);
            
        })

    }

    return (
        <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col -mt-11 ">
    <div className="text-center mb-16 ">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <form onSubmit={handleRegister} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input autoFocus type="text" className="input" name='name' placeholder="Name" />
          <label className="label">Email</label>
          <input autoFocus type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <button  className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </form>
  </div>
</div>
    );
};

export default Register;