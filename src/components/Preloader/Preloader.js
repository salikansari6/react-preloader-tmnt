import  PropTypes  from 'prop-types';

export const Preloader = ({loading}) =>{
  
    if(loading){
        return (<div>
            {/* TODO : Add loading UI  */}
            Preloader...
        </div>)
    }
    else{
        return null
    }


    
}


Preloader.propTypes = {
    loading : PropTypes.bool
}