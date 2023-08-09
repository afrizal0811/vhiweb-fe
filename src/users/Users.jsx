import React, { useEffect, useState } from 'react';
import { baseUrl } from '../constant/baseUrl';
import { getApi } from '../utility/getApi';

const Users = () => {
  const [listing, setListing] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi(`${baseUrl}/users?page=1`);
      setListing(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      {listing.map((data) => (
        <div id={data.id}>
          <img src={data.avatar} alt='avatar'/>
          <h4>{`${data.first_name} ${data.last_name}`}</h4>
          <p>{data.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
