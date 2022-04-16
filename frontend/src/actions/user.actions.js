import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from '.';

export const userActions = {
    updateProfile,
};

function updateProfile(data) {
    return dispatch => {
        dispatch(request());

        userService.updateProfile(data)
            .then(
                users => {
                    dispatch(success(users))
                    dispatch(alertActions.success('Perfil actualizado exitosamente'));
                },
                error => {
                    const message =
                    (error.response && error.response.data.message && error.response.data.message.message) ||
                    error.message ||
                    error.toString();
                    dispatch(failure(message));
                    dispatch(alertActions.error(message));
                }
            );
    };

    function request() { return { type: userConstants.UPDATE_PROFILE_REQUEST } }
    function success(users) { return { type: userConstants.UPDATE_PROFILE_SUCCESS, users } }
    function failure(error) { return { type: userConstants.UPDATE_PROFILE_FAILURE, error } }
}

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         userService.delete(id)
//             .then(
//                 user => { 
//                     dispatch(success(id));
//                 },
//                 error => {
//                     dispatch(failure(id, error));
//                 }
//             );
//     };

//     function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
//     function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
// }