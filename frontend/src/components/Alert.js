import { Alert, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { alertActions } from "../actions";


const AlertMessage = () => {
    const { message, type } = useSelector(state => state.alert);
    let dispatch = useDispatch()
    return(
        <div>
            {message && 
            <Collapse in={message!== ''}>
                <Alert 
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            dispatch(alertActions.clear())
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity={type}
                >
                    {message}
                </Alert>
            </Collapse>
            }
        </div>
    )
}

export default AlertMessage