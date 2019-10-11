import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAxios() {
  const [value, setValue] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => setValue(res.data))
      .catch(err => console.log(err));
  }, []);

  return [value, setValue]
}