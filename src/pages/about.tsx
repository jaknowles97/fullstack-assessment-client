import React, { useEffect, useState } from 'react'
import IPage from '../interface/page';
import logging from '../config/logging';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('')
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        let number = props.match.params.number;

        number ? setMessage(`The number is ${number}`) : setMessage('No number provided!');
    }, [props])

    return(
        <div>
            <p>{message}</p>
            <Link to="/">take me home</Link>
        </div>
    ) 
}

export default withRouter(AboutPage);