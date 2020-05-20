import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';

const Admin = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    textChange: 'Submit',
    role: ''
  });


  //Load the profile details from database
  // useEffect(() => {
  //   loadProfile();
  // }, []);

  // const loadProfile = () => {
  //   const token = getCookie('token');
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then(res => {
  //       const { role, name, email } = res.data;
  //       setFormData({ ...formData, role, name, email });
  //     })
  //     .catch(err => {
  //       toast.error(`Error To Your Information ${err.response.statusText}`);
  //       if (err.response.status === 401) {
  //         signout(() => {
  //           history.push('/login');
  //         });
  //       }
  //     });
  // };


  //Handles submit
  const { name,
          usn,
          dob,
          gender,
          yoj,
          yop,
          email,
          fathername,
          department,
          contact,
          sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8,
          cgpa,
          textChange } = formData;

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    const token = getCookie('token');
    console.log(token);
    e.preventDefault();
    setFormData({ ...formData, textChange: 'Submitting' });
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/update`,
        {
          
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        updateUser(res, () => {
          toast.success('Successfully Uploaded');
          setFormData({ ...formData, textChange: 'Submit' }); 
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };


  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='max-h-full max-w-full'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Academic Certificate
            </h1>

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div>
              <div className='mh:flex max-w-4xl'>
                <div className='flex-1'>
                <div className='my-8 border-b text-left px-8 font-bold'>
                  <span>Personal Details</span>
                  <div className='leading-none px-8 tracking-wide font-bold font-medium bg-white transform translate-y-1/2'></div>
                </div>
                <div className="md:flex">
                  <div className="flex-1 mx-8">
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0'
                        type='text'
                        placeholder='Name'
                        value={name}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='date'
                        placeholder='DOB'
                        value={dob}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='date-year'
                        placeholder='Year Of Joining'
                        value={yoj}
                      />

                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='email'
                        placeholder='Email'
                        value={email}
                      />

                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='text'
                        placeholder='Department'
                        value={department}
                      />
                      
                    </div>
                    <div className="flex-1">
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0'
                        type='String'
                        placeholder='USN'
                        value={usn}
                      />

                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='text'
                        placeholder='Gender'
                        value={gender}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='Year'
                        placeholder='Year Of Passing'
                        value={yop}
                      />

                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='text'
                        placeholder='Phone Number'
                        value={contact}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='text'
                        placeholder='Father Name'
                        value={fathername}
                      />

                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                <div className='my-8 border-b text-left px-8 font-bold'>
                  <span>Marks Obtained</span>
                  <div className='leading-none px-8 tracking-wide font-bold font-medium bg-white transform translate-y-1/2'></div>
                </div>
                <div className="md:flex">
                  <div className="flex-1 mx-8">

                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0'
                        type='number'
                        placeholder='Semester 1 SGPA'
                        value={sem1}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='number'
                        placeholder='Semester 3 SGPA'
                        value={sem3}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='number'
                        placeholder='Semester 5 SGPA'
                        value={sem5}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='number'
                        placeholder='Semester 7 SGPA'
                        value={sem7}
                      />
                    </div>
                    <div className="flex-1 mx-8">
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-0'
                        type='number'
                        placeholder='Semester 2 SGPA'
                        value={sem2}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='number'
                        placeholder='Semester 4 SGPA'
                        value={sem4}
                      />
                      
                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='number'
                        placeholder='Semester 6 SGPA'
                        value={sem6}
                      />

                      <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                        type='text'
                        placeholder='Semester 8 SGPA'
                        value={sem8}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mx-auto max-w-xs relative mt-6">
                      <input
                          className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                          type='number'
                          placeholder='Final CGPA'
                          value={cgpa}
                        />
                    </div>
              </div>
              
              <div className="py-4 m-2">
                <div className="mx-auto max-w-xs relative">
                <button
                  type='submit'
                  className='mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <span className='ml-3'>{textChange}</span>
                </button>
                </div>
                <div className='my-8 border-b text-center '>
                  <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-bold font-medium bg-white transform translate-y-1/2'>
                    Note
                  </div>
                </div>
                <div className='text-sm text-gray-600 font-medium bg-white text-center'>
                  <span>Cannot modify any details once submitted.</span>
                  </div>
                </div>
                {/* Redirect to Home 
                <div className='flex flex-col items-center'>
                  <a
                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
                  bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                    href='/'
                    target='_self'
                  >
                    <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                    <span className='ml-4'>Home</span>
                  </a>
                </div> */}

            </div>
              
            <div className="mx-auto max-w-xs relative pb-8">
            <button
                  onClick={() => {
                    signout(() => {
                      
                      //Timeout to display signoout successfull on the redirected page
                      setTimeout(function(){
                        toast.error('Signout Successfull');
                      },250);

                      history.push('/');
                    });
                  }}
                  className='mt-5 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-out-alt  w-6  -ml-2' />
                  <span className='ml-3'>Signout</span>
                </button>
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
