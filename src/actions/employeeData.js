import { EMPLOYEE_LIST } from './types';

export const setEmployeeList = EmployeeList => ({
		type: EMPLOYEE_LIST,
		EmployeeList
});


export const getEmployeeList = (detail) => dispatch => {
    dispatch(setEmployeeList(detail))
};