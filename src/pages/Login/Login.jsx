import React, { Suspense, lazy } from 'react';
import { Icon } from '@iconify/react';
import { images } from '../../Shared/Images';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Loading = lazy(() => import('../../Shared/Loading'))

const Login = () => {
    const { googleLogin, user, login } = useContext(AuthContext)
    const navigate = useNavigate()

    const togglePassword = ()=> {
              var passwordField = document.getElementById("password");
              var toggleBtn = document.querySelector(".toggle-password");

              if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleBtn.textContent = "Hide";
              } else {
                passwordField.type = "password";
                toggleBtn.textContent = "Show";
              }
            }

        // google Login
        const handleGoole = () => {
            googleLogin()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signup Successfull",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        }

        // local login
        const handleLogin = (event) => {
            event.preventDefault()
            const form = event.target
            const email = form.email.value
            const password = form.password.value
            console.log('clicked', email, password)

            login(email, password)
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "login Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }).catch(error => console.log(error))
        }


        return (
            <Suspense fallback={<Loading />}>
                <main className='flex flex-row-reverse mx-auto w-full '>
                    <div className="hero  bg-base-100">
                        <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <h1 className="text-2xl font-bold text-center pt-8">Login</h1>
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email" placeholder="email"
                                            name='email'
                                            className="input 
                                    input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            id='password'
                                            placeholder="password"
                                            name='password'
                                            className="input input-bordered " required />
                                            <button
                                            className='toggle-password'
                                            onClick={togglePassword}>Hide</button>
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#FF3811] text-white">Login</button>
                                    </div>

                                    <div className="divider">OR</div>

                                    {/* icons */}
                                    <div className='text-3xl flex justify-evenly p-5'>
                                        <Icon
                                            icon="logos:facebook" className='cursor-pointer' />
                                        <Icon icon="devicon:linkedin" className='cursor-pointer' />
                                        <Icon
                                            onClick={handleGoole}
                                            icon="devicon:google" className='cursor-pointer' />
                                    </div>

                                    <article>
                                        <p>Don't have an account <Link to={'/signup'}><span className='text-[#FF3811]'>Signup</span></Link> </p>
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

    export default Login;





// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Show/Hide Password</title>
//   <style>
//     .password-container {
//       position: relative;
//     }

//     .toggle-password {
//       position: absolute;
//       right: 10px;
//       top: 50%;
//       transform: translateY(-50%);
//       cursor: pointer;
//     }
//   </style>
// </head>
// <body>

//   <div class="password-container">
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password">
//     <span class="toggle-password" onclick="togglePassword()">Show</span>
//   </div>

//   <script>
//     function togglePassword() {
//       var passwordField = document.getElementById("password");
//       var toggleBtn = document.querySelector(".toggle-password");

//       if (passwordField.type === "password") {
//         passwordField.type = "text";
//         toggleBtn.textContent = "Hide";
//       } else {
//         passwordField.type = "password";
//         toggleBtn.textContent = "Show";
//       }
//     }
//   </script>

// </body>
// </html>
