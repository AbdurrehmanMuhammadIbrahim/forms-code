import '../App.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';




const validationSchema = yup.object({
    caption: yup
        .string('Enter your password')
        .min(4, 'Name should be of minimum 4 characters length')
        .required('Name is required'),

});





function Profile() {

    const [toggleGetUser, setToggleGetUser] = useState(false);

    const [profile, setProfile] = useState([])
    // let history = useHistory();

    const submit = (values, { resetForm }) => {

        if (localStorage.getItem('name') && localStorage.getItem('email')) {
            console.log("values", values)
            axios.post(`${baseurl}/api/v1/signup`,
                {
                    firstName:values.firstName,
    lastName: values.lastName ,
    email:values.email,
    password: values.password,
                
                    // password: values.password
    
                })
                .then(res => {
                    console.log(res.data);
                    resetForm({})
                    setToggleGetUser(!toggleGetUser)
                })
        }
    
        // else {
        //     alert('You have to Login First')
        //     console.log('you need to login')
        //     history.push('/login')
        // }
    }
    

    

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/signup`)
            .then(response => {
                console.log(response)
                console.log(response.data)
                setProfile(response.data)
            })
            .catch(err => alert("Error in getting data"))
    }, [toggleGetUser])


    // console.log(profile)

    // const formik = useFormik({
    //     validationSchema: validationSchema,
    //     initialValues: {
    //         firstname: localStorage.getItem('firstname'),
    //         lastname: localStorage.getItem('lastname'),
    //         email: localStorage.getItem('email'),
    //        password: localStorage.getItem('password'),

    //     },
    //     onSubmit: submit
    // },
    // );


    return (
        <>
            <div className="container">
                {/* <div className="post-main">
                    <form id="post-form" onSubmit={formik.handleSubmit}>

                        <h3> What's on Your Mind </h3>


                        <TextField
                            id="outlined-basic"
                            name="caption"
                            label="post"
                            type="caption"
                            className="box"

                            value={formik.values.caption}
                            onChange={formik.handleChange}


                            error={formik.touched.caption && Boolean(formik.errors.caption)}
                            helperText={formik.touched.caption && formik.errors.caption}

                            variant="outlined" />


                        <Button id="btn" variant="contained" color="success" type="submit">
                            Post
                        </Button>
                    </form> */}
                {/* </div> */}

                {/* <div id="posts">
                    {profile?.map(profile => (
                        <div id="cont">
                            <h3 id="post-name">{profile.name}</h3>
                            <hr/>
                            <p id="post-item">{profile.caption}</p>
                            <p className="buttonbox">
                                <button className="btn">Like</button>
                                <button className="btn">Comment</button>
                                <button className="btn">Share</button>
                            </p>
                        </div>
                    )

                    )}
                </div> */}
            </div>



        </>
    );
}

export default Profile;