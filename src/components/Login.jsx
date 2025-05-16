import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Link } from 'react-router';

const Login = () => {

    const{signInUser}=useContext(AuthContext)

    const handleSignIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
            console.log(result.user);

            //update last login time
            const lastSignInTime= result?.user?.metadata?.lastSignInTime;
            const loginInfo={
                email,
                lastSignInTime
            }

            fetch(`http://localhost:3000/users`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('Sign in updated in db',data);
                
            })
             
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    return (
                <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col -mt-11 ">
    <div className="text-center mb-16 ">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
     
    </div>
    <form onSubmit={handleSignIn} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          
          <label className="label">Email</label>
          <input autoFocus type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />

          <p>Don't have an account? <Link className='text-blue-500' to={'/signUp'}>Register</Link></p>
          <button  className="btn btn-neutral mt-4">Log In</button>
        </fieldset>
      </div>
    </form>
  </div>
</div>
    );
};

export default Login;