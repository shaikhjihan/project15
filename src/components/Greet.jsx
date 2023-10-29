import React from "react";
import { Grid, Button } from "@mui/material";
import {useDispatch} from "react-redux"

export const Greet =()=>{
    const dispatch = useDispatch()
    const handlegreet = (curr)=>{
        const type = "SELECTED_GREET"
        const payload = curr
        const action = {type, payload}
        dispatch(action)
    }
    return(
        <div>
            <h2>Greeting</h2>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Button onClick={()=>handlegreet("Good Morning")} variant="contained" fullWidth color="secondary"> Good Afternoon</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={()=>handlegreet("Good Evening")} variant="contained" fullWidth color="secondary" >Good Evening</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={()=>handlegreet("Good Night")} variant="contained" fullWidth color="secondary">Good Night</Button>
            </Grid>
        </Grid>
        </div>
    )
}