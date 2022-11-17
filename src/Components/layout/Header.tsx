import {Button, FormControlLabel, Grid, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuBar from "./MenuBar";
import { useState } from "react";
import SwitchDarkMode from "./SwitchDarkMode";

const Header = (): JSX.Element => {
    const  [state, setState] = useState<boolean>(false)
    const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState( open );
    };
    return (
        <Grid container item xs={12} alignItems={'center'} bgcolor={'primary.main'} p={1} borderRadius={2}
              color={'common.white'}>
            <Grid item xs={6}>
                <Typography fontWeight={'bold'}>
                    دخل و خرج
                </Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                {/* <Link to={'/addMoney'}>
                    <Button variant={'contained'} sx={{
                        bgcolor: 'common.white',
                        color: 'primary.main',
                        '&:hover': {bgcolor: 'primary.main', color: 'common.white', border:'1px solid #fff'}
                    }}>
                        <Typography fontSize={10}>
                            دخل و خرج جدید
                        </Typography>
                    </Button>
                </Link> */}
                {/* <Link to={'/charts'}>
                    <Button variant={'contained'} sx={{
                        bgcolor: 'common.white',
                        color: 'primary.main',
                        '&:hover': {bgcolor: 'primary.main', color: 'common.white', border:'1px solid #fff'}
                    }}>
                        <Typography fontSize={10}>
                            نمودارها
                        </Typography>
                    </Button>
                </Link> */}
                <SwitchDarkMode/>
                <IconButton onClick={toggleDrawer(true)} sx={{color:'common.white'}}>
                    <MenuIcon/>
                </IconButton>
                <MenuBar state={state} toggleDrawer={toggleDrawer}  />
            </Grid>
        </Grid>
    )
}

export default Header