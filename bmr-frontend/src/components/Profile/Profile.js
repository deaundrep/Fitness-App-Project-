import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from 'uuid';
import { getData, storeData, checkIsUserLoggedIn } from '../lib/helper';
import Info from "../lib/Info"

import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Button,
    Grid,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 350,
        },
    },
}));

function Profile() {
    const classes = useStyles();

    
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const initialState = () => getData('data') || [];
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    useEffect(() => {
        storeData('data', state);
        const date = state.map(obj => obj.date);
        const bmi = state.map(obj => obj.bmi);
        let newData = { date, bmi };
        setData(newData);
    }, [state]);

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const handleBmi = (e) => {
        e.preventDefault();
        let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(val);
        if (val < 18.5) {
            setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
        } else {
            setInfo("Obese");
        }
    };

    


    return (
        <div>
            <h1>BMI Calculator</h1>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "30vh" }}>
                <Grid item xs={12}>
                    <form
                        className={classes.root}
                        autoComplete="on"
                        onSubmit={handleBmi}>
                        <FormControl
                        >
                            <InputLabel htmlFor="component-height">
                                height
						</InputLabel>
                            <Input
                                id="component-height"
                                name="height "
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="height in cm"
                            />
                            <FormHelperText id="component-error-text">

                            </FormHelperText>
                        </FormControl>
                        <br />
                        <FormControl
                        >
                            <InputLabel htmlFor="component-weight">
                                weight
						</InputLabel>
                            <Input
                                id="component-weight"
                                name="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="weight in cm"
                            />
                            
                            <FormHelperText id="component-error-text">

                            </FormHelperText>
                        </FormControl>
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            >
                            Calculate
					</Button>
                        <h1>{bmi}</h1>
                        <h2>{info}</h2>
                    </form>
                    <h3>{setInfo}</h3>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile
