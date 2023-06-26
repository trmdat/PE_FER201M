import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar, Button } from '@mui/material';

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
         <Typography variant="h5" component="h2">
            Staff List
         </Typography>
         {users.map((staff) => (
            <div key={staff.id}>
               <Avatar alt={staff.name} src={staff.avatar} />
               <Typography>{staff.name}</Typography>
               <Typography>{staff.address}</Typography>
               <Typography>{staff.age}</Typography>
               <Button component={Link} to={`/detail/${staff.id}`} variant="outlined">
                  View Details
               </Button>
            </div>
         ))}
      </div>
   );
};

export default Home;