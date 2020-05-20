import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';

const Certificate = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    textChange: 'Verify'
  });

  useEffect(() => {
    loadCert();
  }, []);

  const loadCert = () => {
    const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const { role, name, email } = res.data;
        setFormData({ ...formData, role, name, email });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push('/login');
          });
        }
      });
  };
  const { textChange } = formData;
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
        `${process.env.REACT_APP_API_URL}/user/update`,
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
          toast.success('Profile Updated Successfully');
          setFormData({ ...formData, textChange: 'Update' });
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className='min-h-full bg-gray-100 text-gray-900 md:flex justify-center'>
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-col flex-1'>
            <div className="border-b-2 border-indigo-500">    
                <div className="m-5 justify-center item-center flex flex-row">
                    <div className="w-26">
                      <img className="w-1/7 h-16 ml-4" src="/static/media/logo.38240f3b.svg" alt="Logo"/>
                    </div>
                    <div className="flex flex-col w-full"><span class="flex-1 text-2xl xl:text-3xl font-extrabold text-center">SADG University</span>
                      <span className="flex-1 text-1xl xl:text-1xl text-center">Blockchain Certificate Authentication System</span>
                    </div>
                    </div>
                  </div>
                <div>
            </div>
            
            
            <div className="md:flex max-w-full my-4">
              <div className="flex flex-col px-4 w-full justify-center items-center text-sm">
                <div className="flex flex-1 w-full my-1">
                  <div className="flex-1 mx-8">
                    <span>
                      Student Name : Name
                    </span>
                  </div>
                  <div className="flex-1">
                  <div className="flex-1">
                    <span>
                      USN : 1KG16CS000
                    </span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-1 w-full my-1">
                  <div className="flex-1 mx-8">
                    <span>
                      Father Name : Name
                    </span>
                  </div>
                  <div className="flex-1">
                    <span>
                      Department : Computer Science
                    </span>
                  </div>
                </div>  
              </div>
            </div>

            <div className="max-w-screen mx-16">
              <table class="table-fixed w-full">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Semester</th>
                    <th class="px-4 py-2">Total SGPA</th>
                    <th class="px-4 py-2">Obtained SGPA</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td class="border px-4 py-1">1</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">2</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">3</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">4</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">5</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">6</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">7</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-1">8</td>
                    <td class="border px-4 py-1">10</td>
                    <td class="border px-4 py-1">5</td>
                  </tr>
                </tbody>
              </table>
              <div class="grid grid-cols-3">
                  <div class="border-l border-b border-r px-4 py-1 col-span-2">Total CGPA</div>
                  <div class="border-b border-r px-4 py-1 col-span-1 text-center">7</div>
                  <div class="border-l border-b border-r px-4 py-1 col-span-2">Rank Obtained</div>
                  <div class="border-r border-b px-4 py-1 col-span-1 text-center">First Classs</div>
              </div>
            </div>

            <div className="md:flex justify-center text-center mt-20 mb-4 mr-8">
                <div class="flex-1">Director/Principal</div>
                <div class="flex-1">Seal</div>
                <div class="flex-1">Rank Obtained</div>
            </div>

            <div className="max-w-full my-4 text-center mb-4">
                <span className="font-light py-2">Certifies that</span>
                <h1 className="font-bold py-2">STUDENT NAME</h1>
                <span className="font-light py-2">has been duly admitted to the degree of</span> 
                <h1 className="font-bold py-2">BACHELOR OF ENGINEERING</h1> 
                <span className="font-light py-2">for recognition of the fulfillment of requirements for the said degree.</span>
            </div>

          <div>

      </div>
    </div>      

      <div className='m-0 bg-white shadow flex flex-col justify-center flex-1'>
        <div className='lg p-6 sm:p-12'>
          <div className='mt-0 flex flex-col items-center'>
          <h1 className='text-2xl xl:text-3xl font-extrabold text-center'>
                    Verify Certificate in Blockchain Network
                </h1>

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative'> 
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='far fa-check-circle fa 1x w-6  -ml-2' />
                  <span className='ml-2'>{textChange}</span>
                </button>
              </div>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Go To Home
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/private'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                  <span className='ml-2'>Back to Home</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
