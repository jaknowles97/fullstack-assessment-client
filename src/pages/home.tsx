import React, { useEffect, useState } from 'react'
import IPage from '../interface/page';
import logging from '../config/logging';
import API from '../utils/API';
import MCard from '../components/mcard';
import { Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import FightForm from '../components/fightForm';


const HomePage: React.FunctionComponent<IPage & RouteComponentProps> = props => {
    const [robots, setRobots] = useState<any>();

    const handleChange = () => props.history.push('/new')
    const goToBattles = () => props.history.push('/battles')

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        API.getAllRobots()
        //@ts-ignore
            .then(response => setRobots(response.data.robots))
        
    }, [props])
  
    return (
        <div>
             <Button onClick={handleChange}>create a robot</Button>
             <Button onClick={goToBattles}>go to battle page</Button>
             {/* @ts-ignore */}
             <FightForm />
            {robots ? robots.map((robot: any) => {
                //@ts-ignore
                return <MCard  name={robot.name} id={robot._id} color={robot.color} attack={robot.attack} defense={robot.defense} />
            }) : <p>loading..</p>}
        </div>
    )
}

export default withRouter(HomePage);