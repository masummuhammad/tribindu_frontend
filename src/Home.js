import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {teal} from '@mui/material/colors';
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NotFound from './NotFound';
import About from './About';
import Homepage from './Homepage'
import ResultByRoll from './ResultByRoll';
import InstitutionalResult from './InstitutionalResult';
import axios from 'axios';
const drawerWidth = 240;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [available,setAvailable]=React.useState(false);
  React.useEffect(()=>{
    axios.get('https://sheltered-springs-54896.herokuapp.com/resultStatus').then(res=>{
      setAvailable(res.data.result_status.updated);
    }).catch(err=>console.log('err'));
  },[])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{bgcolor:teal['A700']}}>
        <img alt='tribindu' src='bitmap.png' style={{height:'65px'}}/>
      
        </Toolbar>
      <Divider />
      <List sx={{backgroundColor:teal[50],height:'100vh'}}>
        
          <Link style={{textDecoration:'none',color:'black'}} to='/about-us'>
          <ListItem  button key={'about'}>
            
            <ListItemText primary={'About this project'} />
          
          </ListItem>
          </Link>
          <Link style={{textDecoration:'none',color:'black'}} to='/'>
          <ListItem button key={'Homepage'}>
            
            <ListItemText primary={'Home'} />
          
          </ListItem>
          </Link>
          <Link style={{textDecoration:'none',color:'black'}} to='/get_result_by_roll'>
          <ListItem button key={'result'}>
            
            <ListItemText primary={'Get your result now!'} />
          
          </ListItem>
          </Link>
          <Link style={{textDecoration:'none',color:'black'}}  to='/institutionalResult'>
          <ListItem button key={'institutionalresult'}>
            
            <ListItemText primary={'Institution-wise-results'} />
          
          </ListItem>
          </Link>
          <a style={{textDecoration:'none',color:'black'}}  href='http://www.bteb.gov.bd'>
          <ListItem button key={'bteb'}>
            
            <ListItemText primary={'BTEB'} />
          
          </ListItem>
          </a>
          <Divider/>
          <ListItem component='div' key={'footer'} style={{marginBottom:'0px'}}>
            <Typography variant='caption'>Developed by  <Link style={{textDecoration:'none',}} to='#'>Masum</Link></Typography>
           
          </ListItem>
      </List>
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:teal.A700,
          flexGrow:1
        }}
      >
        
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img alt='responsive drawer' src='tribindu.png' style={{height:'50px'}}/>
          {available?<div style={{width:'12px',height:'12px',backgroundColor:'#69f85d',border:'1px solid black',borderRadius:'15px'}}/>:<div style={{width:'12px',height:'12px',backgroundColor:'#fd182b',border:'1px solid black',borderRadius:'15px'}}/>}
          
          </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },bgcolor:teal[50]}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,marginTop:'80px' }, }}
      >
      
        
      <Switch>
           <Route path='/about-us' component={About}/>
           <Route exact path='/' component={Homepage}/>
           <Route path='/get_result_by_roll' component={ResultByRoll}/>
           <Route path='/institutionalResult' component={InstitutionalResult}/>
           <NotFound/>
       </Switch>
        
        
      </Box>
    </Box>
    </Router>
  );
}



export default Home;
