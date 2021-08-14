import React from 'react'
import ReactDOM from 'react-dom'

import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button, IconButton, Fab, Container, Paper, Box} from '@material-ui/core'
import { Menu as MenuIcon, Add as AddIcon } from '@material-ui/icons'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
      },
    //   menuButton: {
    //     marginRight: theme.spacing(2)
    //   },
      title: {
        flexGrow: 1,
        marginRight: theme.spacing(4)
      },
}))

export default function Navbar({}) {
    const stlyes = useStyles()

    return (

            <div className = {stlyes.root}>
                <AppBar position = 'fix'>
                    <Toolbar>
                        {/* <IconButton
                            edge = 'start'
                            className = {stlyes.menuButton}
                            color = 'inherit'
                            aria-label = 'menu'
                        >
                            <MenuIcon /> */}
                        {/* </IconButton> */}
                        <Typography variant="h6" className={stlyes.title}>
                            CS360
                        </Typography>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Page 1</Button>
                        <Button color="inherit">Page 2</Button>
                    </Toolbar>
                </AppBar>
            </div>
    )
}