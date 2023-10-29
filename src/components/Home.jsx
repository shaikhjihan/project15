import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button,Grid, Card, CardContent } from "@mui/material";

export const Home =()=>{
     const dispatch = useDispatch();
     const fruitSelect = useSelector((state)=>state.greetReducer.fruit)


    const handleCat = (curr)=>{
        const type = "SELECTED_CAT";
        const payload = curr;
        const action = {type, payload};
        dispatch(action);

    }
    return(
        
        <div>
        
        <Grid container spacing={2}>
        <Grid item xs={12}>
                <Card sx={{textAlign:"center"}}>
                    <CardContent>
                        <h1>{fruitSelect.toUpperCase()}</h1>
                    </CardContent>
                </Card>
            </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>handleCat("Womens")} variant="contained" color="secondary" fullWidth>Womens</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>handleCat("Mens")} variant="contained" color="secondary" fullWidth>Mens</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>handleCat("Fashion")} variant="contained" color="secondary" fullWidth>Fashion</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>handleCat("Cosmatics")} variant="contained" color="secondary" fullWidth>Cosmatics</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>handleCat("Electronics")} variant="contained" color="secondary" fullWidth>Electronics</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>handleCat("SunGlasses")} variant="contained" color="secondary" fullWidth>SunGlasses</Button>
          </Grid>
        </Grid>
        </div>
    )
}