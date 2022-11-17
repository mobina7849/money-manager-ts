import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { menuData } from '../../data/menuData';
import {Link} from 'react-router-dom'
interface MenuBarProps {
    state:boolean,
   // toggleDrawer:(arg0: boolean)=>void
   toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void

}

const MenuBar = ({state,toggleDrawer}:MenuBarProps) => {

    return ( 
    <SwipeableDrawer
        // anchor={anchor}
         open={state}
         onClose={toggleDrawer(false)}
         onOpen={toggleDrawer(true)}
       >
         
     
        <Box
        sx={{ width:250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
      <List>
        {menuData.map((item,index) => (
        <Link to={item.href}>
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        </Link>
        ))}
      </List>
      </Box>
    </SwipeableDrawer>
     );
}
 
export default MenuBar;

// export default function SwipeableTemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer =
//     ( open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event &&
//         event.type === 'keydown' &&
//         ((event as React.KeyboardEvent).key === 'Tab' ||
//           (event as React.KeyboardEvent).key === 'Shift')
//       ) {
//         return;
//       }

//       setState( open );
//     };

//   const list = (anchor: Anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer( true)}>{anchor}</Button>

//         </React.Fragment>
//       ))}
//     </div>
//   );
// }