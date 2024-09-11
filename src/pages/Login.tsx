import Layout from '../components/Layout';
import Form from '../components/Form';
// import {handleFormSubmit} from '../Components/Form'
import '../style/Login.css'

interface FormValues{
    email:string;
    password:string;
}

export default function Login(){
    function onsubmit(data: FormValues) {
        // e.preventDefault()
        console.log("lazy", data)
    }
    return(
        <div className="login-container">
            <Layout/>
            <div className="login-inner-container">
            <Form
            className='login-form'
             fields={[
                { name: 'email', type: 'email', placeholder: 'Enter Email ...', required: true },
                { name: 'password', type: 'password', placeholder: 'Password', required: true },
              ]} 
              submitText='LOGIN'
              onSubmit={onsubmit}
            /> 
            </div>
        </div>
    )

}