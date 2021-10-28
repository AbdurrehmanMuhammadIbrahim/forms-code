import React from "react";
import '../App.css'; 
import axios from 'axios';
// import {useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import { baseurl } from '../core';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from "@mui/material/Button";
import * as Yup from 'yup';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
const SignupSchema = Yup.object({
  name: Yup
  .string('Enter your First Name')
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter your name'),
 post: Yup
  .string()
    .min(3, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Enter your post'),
//   email: Yup

//   .string('Enter your Email')
//   .email('Enter a valid Email')
//   .min(6, 'Too Short!')
//   .max(50, 'Too Long!')
//   .required('Required'),
//   password:Yup
//   .string('Enter your Password')
// .required('Enter a password')
//   .min(6, 'password is weak!')
//   .required('Please enter password here'),
});






function Posts() {
  // let history = useHistory();


  const [posts, setPost] = useState([]);
  const [toggleGetUser, setToggleGetUser] = useState(false);


  const Submit= (values) =>{

    console.log("values: ", values)
    axios.post(`${baseurl}/api/v1/posts`,
    {
        name: values.name,
       post:values.posts,
    
    })

    .then(res=>{
      console.log(res.data);
      setToggleGetUser(!toggleGetUser)
    })
    // .catch((error) => {
    //     // here you will have access to error.response
    //     console.log(error.response)
    // });
   
  }
  

  useEffect(() => {
    
    axios.get(`${baseurl}/api/v1/posts`)
      .then(res => {
        console.log(res.data);
        setPost(res.data)
      })
      .catch(err => console.log("Error in getting data"))
      // return () => {
      //   console.log("cleanup");
        
      // };

      
    }, [toggleGetUser]
  
    );
    


  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
     name:'',
      post:'',
     
    },
   

    onSubmit: Submit

  });

    return (


<div className="form">

<h2>What's on your mind</h2>

 <form onSubmit={formik.handleSubmit}>
 <Stack spacing={2}>
 <TextField
     fullWidth
     className="text"
     color="secondary"

     id="name"
     name=""
     label="name"
     value={formik.values.name}
     onChange={formik.handleChange}
     error={formik.touched.name && Boolean(formik.errors.name)}
     helperText={formik.touched.name && formik.errors.name}
   />
 <TextField
     fullWidth
     className="text"
     color="secondary"
     id="post"
     name="post"
     label="Post"
     value={formik.values.post}
     onChange={formik.handleChange}
     error={formik.touched.post && Boolean(formik.errors.post)}
     helperText={formik.touched.post && formik.errors.post}
   />
  
   <Button color="secondary" variant="contained" fullWidth type="submit">
     Submit
   </Button>
   </Stack>
 </form>
 {/* <div id="posts">
                    {posts?.map(post => (


                        <div id="cont">
                            <h3 id="post-name">{post.name}</h3>
                            <hr/>
                            <p id="post-item">{post.posts}</p>
                            
                        </div>
                    )

                    )}
                </div> */}
                {/* {posts.map(eachUser => {
  return <>
    <h1>{eachUser.name}</h1>
    <h3>{eachUser.posts}</h3>
  
  </>
})} */}


 </div>



        );
      }
      export default Posts;
     