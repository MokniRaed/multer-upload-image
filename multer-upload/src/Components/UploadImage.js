import axios from "axios";
import React, { useState } from "react";

const UploadImage =()=> {


    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');
    const [name,setName]=useState('')

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        setPreview(URL.createObjectURL(file));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        
        formData.append('name',name)
        try {
          const response = await axios.post('http://localhost:3000/addUser', formData);
          if (response.status === 200) {
            setMessage(`Image uploaded `);

          }
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleFileChange} />
        <input type="text" onChange={(e)=> setName(e.target.value)} multiple />

        <button onClick={handleSubmit} type="submit">Upload</button>

      </form>
      {/* {preview && <img src={preview} alt="Preview" />} */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadImage;
