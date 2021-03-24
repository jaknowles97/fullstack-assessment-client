import React, { useEffect, useState } from 'react'
import IPage from '../interface/page';
import logging from '../config/logging';
import API from '../utils/API';
import { Button } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import FightForm from '../components/fightForm';


const BattlesPage: React.FunctionComponent<IPage & RouteComponentProps> = props => {
    const [battles, setBattles] = useState<any>();

    const handleChange = () => props.history.push('/new')

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        API.getAllBattles()
        //@ts-ignore
            .then(response => setBattles(response.data.battles))
        
    }, [props])
  
    return (
        <div>
             <Button onClick={handleChange}>create a robot</Button>
             {/* @ts-ignore */}
             <FightForm />
             <ul>
            {battles ? battles.map((battle: any, idx: string) => {
               return (
                   <li id={idx}> 
                       <h3>robot1: {battle.robots[0]}</h3>
                       <h3>robot2: {battle.robots[1]}</h3>
                       <h4>winner: {battle.winner}</h4>
                    </li>
                    
               )
            }) : <p>loading..</p>}
            </ul>

            <Link to='/'> go home</Link>
        </div>
    )
}

export default withRouter(BattlesPage);