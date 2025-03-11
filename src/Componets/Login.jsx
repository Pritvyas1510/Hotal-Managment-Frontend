import React from 'react'
import Slider from './Slider'

const Login = () => {
  return (
  <div className='grid grid-cols-2  mx-10 p-1 py-5'>
    <div>
        <Slider/>
    </div>
  <div className='' >
    <div className='w-[350px] h-[480px] bg-blue-100 rounded-4xl content-center justify-self-center mx-10 shadow-2xl shadow-gray-200 border-2 border-gray-400'>
        <div className='text-5xl p-2 text-gray-600 font-bold font-serif justify-self-center'>Login</div>
    <form className="max-w-sm mx-7">
  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
    >
      Your email
    </label>
    <input
      type="email"
      id="email"
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
      placeholder="name@flowbite.com"
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
    >
      Your password
    </label>
    <input
      type="password"
      id="password"
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="repeat-password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
    >
      Repeat password
    </label>
    <input
      type="password"
      id="repeat-password"
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
      required=""
    />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
        id="terms"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="terms"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
    >
      I agree with the{" "}
      <p className="text-blue-600 hover:underline dark:text-blue-500">
        terms and conditions
      </p>
    </label>
  </div>
  <div className='justify-self-center'>
  <button
    type="submit"
    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 w-24 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Login
  </button>
  </div>
</form>
</div>
</div>
  </div>
  )
}

export default Login