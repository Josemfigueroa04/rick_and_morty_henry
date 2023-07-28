import { useState } from 'react';
import validation from './validation';


const Form = ({login}) => {

    const [userData, setUserData] = useState({email:'',password:''});
    const [errors, setErrors] = useState({});

    const hangleChange = (event) => {
        setUserData({...userData,[event.target.name]:event.target.value})

        setErrors(validation({...userData,[event.target.name]:event.target.value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };


    return (
        <div>
            <h1>Form</h1>
            
            <form >
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={userData.email} onChange={hangleChange} />
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={userData.password} onChange={hangleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
        
    );
}

export default Form;
