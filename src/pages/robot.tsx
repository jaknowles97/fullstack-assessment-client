import React, { useEffect, useState } from 'react'
import IPage from '../interface/page';
import logging from '../config/logging';
import API from '../utils/API';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MForm from './newRobot';

const RobotPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (props: any) => {
    const [robot, setRobot] = useState<any>();
    

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        let id = props.match.params.id;
        API.getRobot(id)
        //@ts-ignore
            .then(response => setRobot(response.data.robot))
       
        
    }, [props])
  
    return (
        <div>
            {robot ? 
                // @ts-ignore
                <MForm id={robot._id} name={robot.name} color={robot.color} attack={robot.attack} defense={robot.defense}/>
                : <p>loading..</p>
            }
        </div>
    )
}

export default withRouter(RobotPage);