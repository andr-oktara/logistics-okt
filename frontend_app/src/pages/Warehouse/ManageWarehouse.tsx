import NavBar from "../../components/NavBar";
import PageTitle from "../../components/PageTitle";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useLoaderData } from "react-router-dom";
import { WarehouseLoaderData } from "./warehouse.loader";

export default function ManageWarehouse() {
    const { warehouse } = useLoaderData() as WarehouseLoaderData;

    return (
        <>
            <NavBar />
            <PageTitle title="Warehouse" />
            <Box
                component="form"
                autoComplete="off"
            >
                <Grid container>
                    <Grid xs={12} paddingBottom={1}>
                        <TextField
                            required
                            disabled
                            InputProps={{ readOnly: true }}
                            id="title" label="Title" fullWidth value={warehouse.title}
                        />
                    </Grid>
                    <Grid xs={12} paddingBottom={1}>
                        <Typography color="text.secondary" variant="h5" paddingTop={2} paddingBottom={2}>
                            Slots (Total: {warehouse.storageLocations.length})
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
