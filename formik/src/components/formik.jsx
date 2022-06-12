import React from 'react';
import { useFormik } from 'formik'; //Form , Formik

const Basic = () => {
    const{ handleChange,handleSubmit} = useFormik({
        initialValues: {
          name: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name </label>
            <input name="name" placeholder="Your name" onChange={handleChange}/>&nbsp;

            <label htmlFor="email">E-mail </label>
            <input name="email" placeholder="Your E-mail" onChange={handleChange}/>

            <button type='submit'>submit</button>
            </form>
         </div>
        )
  
};

export default Basic;