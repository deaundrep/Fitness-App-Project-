import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";


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

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
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

    // useEffect(() => {
    //     if (height === false && weight === false) {
    //         setIsButtonDisabled(false);
    //     } else {
    //         setIsButtonDisabled(true);
    //         return;
    //     }
    
    //     if (height.length == 0 || weight.length == 0) {
    //         setIsButtonDisabled(true);
    //     } else {
    //         setIsButtonDisabled(false);
    //     }
    // }, [height, weight]);

    

    return (
        <div>
            <h1>BMI Calculator</h1>
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
                    <Button
						variant="contained"
						color="primary"
						type="submit"
						onClick={handleBmi}>
						Calculate
					</Button>
                    <h1>{bmi}</h1>
                    <h2>{info}</h2>
                </form>
            </Grid>
        </div>
    );
};

export default Profile
