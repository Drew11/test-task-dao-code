import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './Slider.css';

const useStyles = makeStyles({
    root: {
        width: 300,
        marginRight: 100,
        marginTop: 20
    },
});

const marks = [
    {
        value: -100,
        label: '-100°C',
    },
    {
        value: -50,
        label: '-50°C',
    },
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 50,
        label: '50°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

export default function DiscreteSlider({ temperature, setTemperature }) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTemperature(newValue);
    };

    return (
        <div className="slider-view">
            <div className={classes.root}>
                <Typography id="discrete-slider-restrict" gutterBottom>
                    Temperature
                </Typography>
                <Slider
                    value={temperature}
                    min={-100}
                    max={100}
                    marks={marks}
                    step={1}
                    scale={(x) => x ** 10}
                    valueLabelFormat={temperature.toLocaleString()}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                />
            </div>
        </div>
    );
}