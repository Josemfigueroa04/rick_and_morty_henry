const validation = (userData) => {
    const errors = {};
    
    if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userData.email)){
        errors.email = 'El email no es valido';
    }if(!userData.email){
        errors.email = 'El email es obligatorio';
    }if(userData.email.length > 35){
        errors.email = 'El email es muy largo';
    }if(!userData.password){
        errors.password = 'La contraseña es obligatoria';
    }if(!/.\d+./.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos 1 numero';
    }if(userData.password.length <6 || userData.password.length>10){
        errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres';
    }
        return errors
    }

export default validation;