import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Avatar } from '@mui/material';
import moment from 'moment';

const Detail = () => {
   const { id } = useParams();
   const [user, setUser] = useState(null);

   useEffect(() => {
      fetch(`https://648fd2c81e6aa71680ca1f62.mockapi.io/user/${id}`)
         .then((response) => response.json())
         .then((data) => setUser(data))
         .catch((error) => console.log(error));
   }, [id]);

   if (!user) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <Avatar alt={user.name} src={user.avatar} />
         <Typography variant="h5" component="h2">
            {user.name}
         </Typography>
         <Typography>Address: {user.address}</Typography>
         <Typography>Age: {user.age}</Typography>
         <Typography>Create at: {user.createdAt}</Typography>

      </div>
   );
};

export default Detail;