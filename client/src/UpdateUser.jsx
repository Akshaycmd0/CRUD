import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const UpdateUser = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://licalhost:3001/getUser'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-5'>
        <form>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' />
          </div>
          <button className='btn btn-sucess'>Update</button>
        </form>

      </div>
    </div>
  )
}

export default UpdateUser
