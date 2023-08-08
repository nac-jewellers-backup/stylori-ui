import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './index.css'
export const SnackBar = (props) => {
  const handleClose = () => {
    props.handleClose(); // Call the provided handleClose function
  };

  return (
    <Snackbar
      anchorOrigin={props.anchorOrigin}
      className={props.classNames}
      open={props.open}
      autoHideDuration={5000}
      onClose={handleClose} // Use the handleClose function to close snackbar
      TransitionComponent={(props) => {
        return <Slide {...props} direction="up" />;
      }}
      message={props.message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            className={props.classNameCloseIcon}
            onClick={handleClose} // Use the handleClose function to close snackbar
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

// export const SnackBar = (props) =>{
//     return (
//         <Snackbar
//         anchorOrigin={props.anchorOrigin}
//         className={props.classNames}
//         open={props.open}
//         autoHideDuration={5000}
//         onClose={props.handleClose}
//         TransitionComponent={(props)=>{return <Slide {...props} direction="up" />}}
//         message={props.message}
//         action={
//           <React.Fragment>
//             <IconButton size="small" aria-label="close" className={props.classNameCloseIcon} onClick={props.handleClose}>
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </React.Fragment>
//         }
//       />
//     )
// }