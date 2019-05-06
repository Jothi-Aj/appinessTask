import { EMPLOYEE_LIST } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
    case EMPLOYEE_LIST:
        return action.EmployeeList;
    default:
        return state;
    }
};