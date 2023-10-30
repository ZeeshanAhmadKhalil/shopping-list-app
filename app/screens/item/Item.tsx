import { Box, Typography } from "@mui/material"
import SingleItem from "./components/single-item"
import { useItemQuery } from "./services/itemApi"
import Button from "~components/button"

function Item() {

    const {
        data = [],
        isLoading,
    } = useItemQuery({
        page: 0,
    })

    const renderItems
        = data.map(({
            id,
            ...item
        }: any) => (
            <SingleItem
                key={id}
                {...item}
            />
        ))

    return (
        <Box
            sx={{
                border: '0px solid red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '0px solid red',
                    width: '82.5%',
                    mt: 6,
                    mb: 2,
                }}
            >
                <Typography
                    variant="h5"
                >
                    Your Items
                </Typography>
                <Button
                    onClick={null}
                    title="Add Item"
                />
            </Box>
            {renderItems}
        </Box>
    )
}

export default Item