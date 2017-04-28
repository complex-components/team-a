export function updateLogin(name) {
    return {
        type: 'UPDATE_LOGINFORM',
        payload: {
            name: name
        }
    };
}