import React, {useEffect} from 'react'

type AppProps = {
    value: Date;
};

const Events = ({value}:AppProps) => {

    return (
        <div className='events'> 
        {value.toString()}
        </div>
    )
}

export default Events
