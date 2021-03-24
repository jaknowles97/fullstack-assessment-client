import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import IPage from "../interface/page";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const NewRobotPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props: any
) => {
  const classes = useStyles();

  const [name, setName] = useState(props.name)
  const [color, setColor] = useState(props.color)
  const [attack, setAttack] = useState(parseInt(props.attack))
  const [defense, setDefense] = useState(parseInt(props.defense))

    const handleCreate = () => {
        const newRobot = { name, color, attack, defense}
        API.createRobot(newRobot)
            .then(savedbot => {
              alert('robot created!')
              props.history.push('/')
            })
    }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue='name'
          onChange={e => setName(e.target.value)}
        />
        <TextField
          required
          id="standard-disabled"
          label="Color"
          defaultValue='color'
          onChange={e => setColor(e.target.value)}
        />
        <TextField
          id="standard-number"
          label="Attack"
          defaultValue='10'
          type="10"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => setAttack(parseInt(e.target.value))}
        />
        <TextField
          id="standard-number"
          label="Defense"
          defaultValue='10'
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => setDefense(parseInt(e.target.value))}
        />
      </div>
      {/* @ts-ignore */}
      <Button onClick={handleCreate}>create robot</Button>
      <br/>
      <Link to="/">Go back</Link>
    </form>
  );
};

export default withRouter(NewRobotPage);
