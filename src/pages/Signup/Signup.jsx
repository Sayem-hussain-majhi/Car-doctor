import React, { Suspense, lazy, useContext } from 'react';
import { Icon } from '@iconify/react';
import { images } from '../../Shared/Images';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Loading = lazy(() => import('../../Shared/Loading'))

const Signup = () => {
    const {signup} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignup =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        signup(email, password)
        .then(res => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signup Successfull",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/login')
        })
        .catch(err => console.log(err))
        
    }




    return (
        <Suspense fallback={<Loading />}>
            <main className='flex flex-row-reverse mx-auto w-full '>
                <div className="hero  bg-base-100">
                    <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-2xl font-bold text-center pt-8">Sign Up</h1>
                            <form onSubmit={handleSignup} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" 
                                    name='name'
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" 
                                    name='email'
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" 
                                    name='password'
                                    className="input input-bordered" required />
                                  
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white">Signup</button>
                                </div>

                                <div className="divider">OR</div>

                                {/* icons */}
                                <div className='text-3xl flex justify-evenly p-5'>
                                    <Icon 
                                    icon="logos:facebook" className='cursor-pointer'/>
                                    <Icon icon="devicon:linkedin" className='cursor-pointer'/>
                                    <Icon 
                                    icon="devicon:google" className='cursor-pointer'/>
                                </div>

                                <article>
                                    <p>All ready have an account  <Link to={'/login'}><span className='text-[#FF3811]'>Login</span></Link> </p>
                                </article>
                            </form>
                        </div>
                        <div className="text-center lg:text-left">
                            <img src={images.login} alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </Suspense>
    );
};

export default Signup;