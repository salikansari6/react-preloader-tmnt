import {PropTypes} from 'prop-types';
import './Preloader.css'

export const Preloader = ({loading,image,spinnerColor,spinnerSize}) =>{
  
    if(loading){
        return (
        <div className="preloader">
            {image ? <img src={image} alt="" /> : 
            ( 
            <div class="loader-indicator" 
                style={{borderTopColor:spinnerColor,height:`${spinnerSize}px`,width:`${spinnerSize}px`}}>
            </div>
            ) 
            }
            {/* TODO : Add loading UI  */}
        </div>)
    }
    else{
        return null
    }


    
}


Preloader.propTypes = {
    loading : PropTypes.bool,
    image : PropTypes.String,
    spinnerColor: PropTypes.Color,
    spinnerSize : PropTypes.Number,
}