const check = (state = '', { type, payload }) => {
   switch (type) {
     case 'CHECK_BY_DATE':
       return payload;
     default:
       return state;
   };
 };
 
 export default check;