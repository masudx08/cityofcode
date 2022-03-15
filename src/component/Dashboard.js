import React from 'react'
import BalanceGraph from "./Visualisations/BalanceGraph";
import EnergyGraph from "./Visualisations/EnergyGraph";
import ActionButtons from "./Visualisations/ActionButtons";
import EnergyMixChart from "./Visualisations/EnergyMixChart";
import About from "./Visualisations/About";
import News from "./Visualisations/News";
import Transactions from "./Visualisations/Transactions";
import "./dashboard.css";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
} from "chart.js";
import { Card, CardContent, Container, Grid } from '@mui/material';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement
);




function Dashboard() {
  return (

    <Grid container spacing={30} sx={{bgcolor: "#c0e8f9"}}>


      <Grid item xs>
        <Card sx={{ minWidth: 300}}>
          <CardContent>
            <BalanceGraph />
            <EnergyGraph />
          </CardContent>
        </Card>
      </Grid>


      <Grid item xs>
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <ActionButtons />
            <EnergyMixChart />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs>
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <About />
            <News />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs>
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <Transactions />
          </CardContent>
        </Card>
      </Grid>



    </Grid>


    //   <div className="dashboard">
    //   {/* <Sidebar /> */}
    //   <div className="dashboardContainer">
    //     <div className="dashboardTop">
    //       <div className="dashboardTopContainer">

    //         <div className="dashboardTop__left">
    // <BalanceGraph />
    // <EnergyGraph />
    //         </div>

    // <div className="dashboardTop__center">
    //   <ActionButtons />
    //   <EnergyMixChart />
    // </div>


    // <div className="dashboardTop__right">
    //   <About />


    //   <News />
    // </div>


    //       </div>

    //       <Transactions/>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Dashboard