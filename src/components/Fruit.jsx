import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


export const Fruit = ()=>{
    const dispatch = useDispatch()
    const fruitSelect = useSelector((state)=>state.greetReducer.fruit)

    console.log('Redux Data', fruitSelect)
    const fruit = ["orange", "kiwi", "banana", "mango", "GreenApple", "Cherry", "Strawberry", "BlueBerry" ]

    const handleFruit=(str)=>{
       const type = "ADDFRUIT"
       const payload= str;
       const action = {type, payload};
       dispatch(action)
    }

    return(   
       <div>
                <h1>Fruits</h1>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{textAlign:"center"}}>
                    <CardContent>
                        <h1>{fruitSelect.toUpperCase()}</h1>
                    </CardContent>
                </Card>
            </Grid>
            {
                fruit.map((item)=>
                 <Grid item xs={3}>
                    <Card sx={{height:200, bgcolor:"lightblue", textAlign:"center"}}>
                        <CardContent>
                            <h1>{item.toUpperCase()}</h1>
                            <Button variant="contained" color="success" onClick={()=>handleFruit(item)}>Add to Cart</Button>
                        </CardContent>
                    </Card>
                 </Grid>
                )
            }
        </Grid>
       </div>
    )
}