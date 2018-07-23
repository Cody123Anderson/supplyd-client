export const getOptions = () => {
    const token = localStorage.getItem('token');
    
    return { 
        headers: {
            'Content-Type': 'application/json',
            Authorization: token 
        } 
    };
}