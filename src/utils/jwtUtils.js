import jwtDecode from 'jwt-decode';
import moment from 'moment';

export const isExpired = token => {
    const decoded = jwtDecode(token);
    const now = moment().format();

    if (moment(decoded.exp).isAfter(now, 'day')) {
        // token is still valid
        return false;
    }

    return true;
};