import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch'

const AntSwitch = withStyles(theme => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);



const SwitchButton = (props) => {
    const { handleSwitch, switchIsChecked } = props

    return (
        <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>|
                <Grid item style={{padding: '0 0 0 20px'}}>PT</Grid>
                <Grid item>
                <AntSwitch
                    checked={switchIsChecked}
                    onChange={() => handleSwitch()}
                    value="checkedC"
                />
                </Grid>
                <Grid item>EN</Grid>
            </Grid>
        </Typography>
    );
};

export default SwitchButton;