import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import IPage from "../interface/page";
import { RouteComponentProps, withRouter } from "react-router-dom";
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const BattleForm: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props: any
) => {
  const classes = useStyles();

  const [firstID, setFirstID] = useState('')
  const [secondID, setSecondID] = useState('')


    const handleBattle = () => {
        
        API.createBattle(firstID, secondID)
            .then(results => {
              alert(`the winner's ID is: ${results.data.battle.winner}`)
            })
    }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="standard-required"
          label="robot 1 ID"
          defaultValue='paste robot id here'
          onChange={e => setFirstID(e.target.value)}
        />
        <TextField
          required
          id="standard-required"
          label="robot 2 ID"
          defaultValue='paste robot id here'
          onChange={e => setSecondID(e.target.value)}
        />

      </div>
      {/* @ts-ignore */}
      <Button onClick={handleBattle}>create battle</Button>
    </form>
  );
};

export default withRouter(BattleForm);
