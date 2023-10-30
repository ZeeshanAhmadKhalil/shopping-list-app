import {
    Button as MuiButton
} from '@mui/material';

function Button({
    onClick,
    title,
}: any) {

    return (
        <MuiButton
            variant="contained"
            onClick={onClick}
        >
            {title}
        </MuiButton>
    )
}

export default Button