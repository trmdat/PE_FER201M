import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar, Button } from '@mui/material';
import '../App.css'

const Home = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch(`https://648fd2c81e6aa71680ca1f62.mockapi.io/user`)
         .then((response) => response.json())
         .then((data) => setUsers(data))
         .catch((error) => console.log(error));
   }, []);

   return (
      <div>
         <div className='container'>
            {users.map((staff) => (
               <div className='column'>
                  <div key={staff.id} className='card'>
                     <Avatar alt={staff.name} src={staff.avatar} className='img' />
                     <h3>{staff.name}</h3>
                     <p>{staff.address}</p>
                     <p>{staff.age}</p>
                     <Button component={Link} to={`/detail/${staff.id}`} variant="outlined">
                        View Details
                     </Button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Home;