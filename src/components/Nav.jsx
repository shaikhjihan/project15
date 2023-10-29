import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import {dataNav} from "./Data"
import { Link } from "react-router-dom";
export const Nav=()=>{
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                   {
                    dataNav.map((item)=>
                      <Grid item xs={2}>
                        <Link to={item.path}>
                         <Button variant="contained" fullWidth color="warning">
                            {item.title}
                         </Button>
                        </Link>
                      </Grid>
                    )
                   }
                </Grid>
            </CardContent>
        </Card>
    )
}