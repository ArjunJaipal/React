import {FaPen, FaRegCircle, FaTimesCircle} from 'react-icons/fa';

function Icon({name}){
    if(name === "circle"){
       return <FaRegCircle/>
    }
    else if(name === "cross"){
       return <FaTimesCircle/>
    }
    else{
        return <FaPen />
    }

}

export default Icon;