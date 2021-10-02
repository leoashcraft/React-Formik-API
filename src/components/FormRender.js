import React, { useRef } from 'react'
import { useFormik } from 'formik';
import GetData from './GetData';


function FormRender() {
    const [output, setOutput] = React.useState(null);
 
    const componentRef = useRef({});

    const formik = useFormik({
        initialValues : {
            name : "",
        },
        onSubmit: values => {
            componentRef.current = values.name
            setOutput(true)
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

                <button type="submit">Submit</button>

            </form>

            {output ? <GetData name={componentRef.current} /> : null}
        </div>
    )
}

export default FormRender;
