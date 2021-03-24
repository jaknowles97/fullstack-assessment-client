import React, { useEffect, useState } from 'react'
import IPage from '../interface/page';
import logging from '../config/logging';


const HomePage: React.FunctionComponent<IPage> = props => {



    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        
    }, [props])

    return <p>dis da home page</p>
}

export default HomePage;