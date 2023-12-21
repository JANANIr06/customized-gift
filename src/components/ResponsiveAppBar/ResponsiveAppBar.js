import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

import {CardActionArea, CardActions } from '@mui/material';
import "./ResponsiveAppBar.css";
import Footer from '../Footer/Footer';
import { BorderColor } from '@mui/icons-material';


const pages = ['Products', 'MyOrders', 'Cart'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='body'>
    <div>
    <AppBar position="fixed" style={{backgroundColor:"#ce93d8"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardGiftcardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'pink',
              textDecoration: 'none',
            }}
          >
            GIFIX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CardGiftcardIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'pink',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Button variant="text">LOGIN</Button>
                <Button variant="text">SIGNUP</Button>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="J" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div className='back'><br/><br/><br/>
     <img src='https://i.pinimg.com/736x/bd/a4/7c/bda47cbcd56c248efbe61b92f8788a66.jpg' alt='img'/>
      <h1>Step Into Our World</h1> <h1>Of Wit & Whimsy</h1><br/>
<p>Every Occasion, Every Emotion: Gifts for Life's Journey<br/>Unbox Joy, Share Love: Where Every Gift Tells a Tale of Thoughtfulness</p>
<br/><br/><br/><br/><br/>
    </div>
    <div>
    <div className="card1">
    <Card sx={{ 
        maxWidth:300,
        border:"2px solid #e0e0e0",
        borderRadius:"1px",
        borderColor:"black"
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/joyful-birthday-celebration-with-delicious-chocolate-cake-generative-ai_188544-9589.jpg?t=st=1695538437~exp=1695539037~hmac=26442d30f8822e8f635ea708210d28a44e6b8984de59118190ed27fc96d3ca36"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                  Birthday
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
            display:"flex",
            justifyContent:"center",
        }}
        >
       <Button size="small" color="primary" variant="contained">
          View
        </Button>
      </CardActions>
      </Card>
    </div>
    <div className="card2">
    <Card sx={{
         maxWidth: 300,
        border:"2px solid #e0e0e0",
        borderRadius:"1px",
        borderColor:"black"
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyu7n3aCxg-aJCM57D45ICgmsPFs0HEbdzeATFsLEHXUHclTDmR978VWNlHO3aGhDNTU&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Anniversary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
      sx={{
        display:"flex",
        justifyContent:"center",
    }}
    >
        <Button size="small" color="primary" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card3">
    <Card sx={{ 
        maxWidth: 300,
        border:"2px solid #e0e0e0",
        borderRadius:"1px",
        borderColor:"black"
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c4.wallpaperflare.com/wallpaper/447/515/729/christmas-tree-toy-train-christmas-blue-wallpaper-preview.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Christmas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
      sx={{
        display:"flex",
        justifyContent:"center",
    }}
    >
        <Button size="small" color="primary" variant="contained">
          view
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card4">
    <Card sx={{
         maxWidth: 300, 
         border:"2px solid #e0e0e0",
         borderRadius:"1px",
         borderColor:"black"
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/488182109/photo/chocolates.jpg?s=612x612&w=0&k=20&c=OAzD-G8GZZfzb5bgZ5CJd_PdSIJqdnInLmEeeiDGRe0="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gourmet
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
      sx={{
        display:"flex",
        justifyContent:"center",
    }}
    >
        <Button size="small" color="primary" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card5">
    <Card sx={{
         maxWidth:300,
         border:"2px solid #e0e0e0",
         borderRadius:"1px",
         borderColor:"black"
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://t4.ftcdn.net/jpg/01/62/11/95/360_F_162119540_hP8m0IfzyMG0zIiPSmtbB99F1vtrW8e3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fashion
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
      sx={{
        display:"flex",
        justifyContent:"center",
    }}
    >
        <Button size="small" color="primary" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    <br/>
    <div>
    <Stack direction="row" spacing={5} sx={{margin:'100px auto',marginBottom:'200px auto'}}>
        <div style={{textAlign:'center'}}>
      <Avatar alt="Mother" sx={{ width: 100, height: 100,textAlign:"center" }} src="https://cdn4.vectorstock.com/i/1000x1000/67/63/mother-and-baby-icon-stylized-symbol-vector-22656763.jpg" />
      <p>Mother</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Father" sx={{ width: 100, height: 100 }}src="https://www.creativefabrica.com/wp-content/uploads/2022/06/28/Father-child-baby-kid-icon-Graphics-33172549-1.jpg" />
      <p>Father</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Grandmother" sx={{ width: 100, height: 100 }}src="https://cdn-icons-png.flaticon.com/512/4395/4395811.png" />
      <p>Grandma</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="GrandFather" sx={{ width: 100, height:100 }}src="https://cdn-icons-png.flaticon.com/512/4478/4478091.png"/>
      <p>Grandpa</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Girl-Friend"sx={{ width: 100, height: 100 }} src="https://cdn-icons-png.flaticon.com/512/4951/4951185.png"/>
      <p>Friend</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Boy-Friend" sx={{ width: 100, height: 100 }}src="https://cdn-icons-png.flaticon.com/512/4951/4951182.png"/>
      <p>Friend</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Brother" sx={{ width: 100, height: 100 }}src="https://cdn-icons-png.flaticon.com/512/920/920935.png"/>
      <p>Brother</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Sister" sx={{ width: 100, height: 100 }}src="https://static.thenounproject.com/png/4484930-200.png"/>
      <p>Sister</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Teens" sx={{ width: 100, height: 100 }}src="https://cdn-icons-png.flaticon.com/512/7050/7050064.png"/>
      <p>Teens</p>
      </div>
      <div style={{textAlign:'center'}}>
      <Avatar alt="Babies" sx={{ width: 100, height: 100 }}src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"/>
      <p>Babies</p>
      </div>
      </Stack>
      </div>
      <Footer/>
    </div>
    </div>
  );
}
export default ResponsiveAppBar;