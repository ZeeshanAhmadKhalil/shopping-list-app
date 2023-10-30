import {
    Box,
    Checkbox,
    FormControlLabel,
    IconButton,
    Typography
} from "@mui/material";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function SingleItem({
    name,
    description,
    deletedAt,
}: any) {

    return (
        <Box
            sx={{
                border: '1px solid #DAE3EC',
                width: '80%',
                my: 1.5,
                p: 3,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <FormControlLabel
                control={<Checkbox />}
                label=""
            />
            <Box
                sx={{
                    flex: 1,
                }}
            >
                <Typography
                    variant="h6"
                >
                    {name}
                </Typography>
                <Typography
                    sx={{
                        color: '#7E7A7A'
                    }}
                >
                    {description}
                </Typography>
            </Box>
            <Box>
                <IconButton>
                    <DriveFileRenameOutlineIcon />
                </IconButton>
                <IconButton
                    sx={{
                        ml: 2,
                    }}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default SingleItem