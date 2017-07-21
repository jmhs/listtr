
const EventReducer = (state = [], action) =>{

 switch (action.type) {
   case 'CREATE_EVENTS':
   return [
     ...state,
     {
       events : action.events,


     }
   ]
   break;

   default:
     return state
 }
}

export default EventReducer;
