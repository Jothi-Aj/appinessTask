import validator from 'validator';
import {isEmpty} from 'lodash';

const reg = /^[0-9]+$/;
const emailpregMatch=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;

export default function validateLoginScreen(data) {
    const errors = {};
    
    if (validator.isEmpty(data.password)) {
        errors.password = 'Please enter the Password';
    }
    if(!validator.isEmpty(data.email) && emailpregMatch.test(data.email)!==true){
        errors.email = 'Please enter valid Email';
    }
    if(validator.isEmpty(data.email)) {
        errors.email = 'Please enter the Email'
    }
    if(!validator.isEmpty(data.email) && !validator.equals(data.email, 'prashant@gmail.com')){
        errors.email = 'Please enter valid email'
    }
    if(!validator.isEmpty(data.password) && !validator.equals(data.password, 'prashant123')){
        errors.password = 'Please enter valid password'
    }
     
    return {
        errors,
        isValid: isEmpty(errors),
    };
}