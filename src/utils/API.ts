import axios from 'axios';
import IRobot from '../interface/robot';

export default {
    // Gets all users
    getAllRobots: function() {
      return  axios.get<IRobot[]>("https://limitless-wildwood-13460.herokuapp.com/api/robots/get/all");
    },
    getRobot: function(id: string) {
        return axios.get<IRobot>(`https://limitless-wildwood-13460.herokuapp.com/api/robots/get/${id}`)
    },
    updateRobot: function(robot: any) {
        return axios.put("https://limitless-wildwood-13460.herokuapp.com/api/robots/update", robot);
    },
    deleteRobot: function(id: string) {
        return axios.delete(`https://limitless-wildwood-13460.herokuapp.com/api/robots/delete/${id}`);
    },
    createRobot: function(robot: any) {
        return axios.post(`https://limitless-wildwood-13460.herokuapp.com/api/robots/create`, robot);
    },
    createBattle: function (id1: any, id2: any) {
        // @ts-ignore
        return axios.post('https://limitless-wildwood-13460.herokuapp.com/api/battles/create', {robot1: id1, robot2: id2})
    },
    getAllBattles: function() {
        return  axios.get<IRobot[]>("https://limitless-wildwood-13460.herokuapp.com/api/battles/get/all");
      },
  };