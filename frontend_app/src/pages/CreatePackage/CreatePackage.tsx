import NavBar from "../../components/NavBar";
import PageTitle from "../../components/PageTitle";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { CreatePackageInput } from "@oktara-logistics-shared/types";
import { CreatePackageLoaderData } from "./createPackage.loader";
import { useLoaderData } from "react-router-dom";
import PackageClientService from "../../clients/packageAPI/package.client";
import { ROUTE_PATHS } from "../AppRoutes";

export default function CreatePackage() {
    const service = new PackageClientService();
    const [title, setTitle] = useState("");
    const [storageId, setStorageId] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [street, setStreetAddress] = useState("");
    const [number, setStreetNumber] = useState("");
    const [city, setCity] = useState("");
    const [destinationState, setDestinationState] = useState("");
    const [country, setDestinationCountry] = useState("");
    const { freeSlots } = useLoaderData() as CreatePackageLoaderData;

    const packageProps: CreatePackageInput = {
        title,
        storageId,
        destination: {
            recipientName,
            street,
            number,
            city,
            state: destinationState,
            country
        },
    };

    const handleSubmit = async () => {
        const redirectToPackages = () => window.location.href = ROUTE_PATHS.LIST_PACKAGES;

        service.createPackage(packageProps).then((response) => {
            if(response && response.id) {
                redirectToPackages();
            }
        });
    }

    return (
        <>
            <NavBar />
            <PageTitle title="Create Package" />
            <Box
                component="form"
                autoComplete="off"
                onSubmit={(e: any) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <Grid container>
                    <Grid xs={12} paddingBottom={1}>
                        <TextField required id="title" label="Title" onChange={(event) => setTitle(event.target.value)} fullWidth/>
                    </Grid>
                    <Grid xs={12} paddingBottom={1}>
                        <InputLabel id="storage-id-select-label">Storage</InputLabel>
                        <Select
                            labelId="storage-id-select-label"
                            id="storageId"
                            value={storageId}
                            label="Age"
                            onChange={(event) => setStorageId(event.target.value)}
                            required
                            fullWidth
                        >
                            {freeSlots.map((slot) => (
                                <MenuItem value={slot.id}>{slot.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Typography color="text.secondary" variant="h5" paddingTop={2} paddingBottom={2}>
                        Package Destination Info
                    </Typography>
                    <Grid xs={12} paddingBottom={1}>
                        <TextField fullWidth required id="recipientName" label="Recipient Name" onChange={(event) => setRecipientName(event.target.value)} />
                    </Grid>
                    <Grid xs={8} paddingBottom={1}>
                        <TextField fullWidth required id="street" label="Street Address" onChange={(event) => setStreetAddress(event.target.value)} />
                    </Grid>
                    <Grid xs={4} paddingBottom={1} paddingLeft={2}>
                        <TextField fullWidth required id="number" label="Street Number" onChange={(event) => setStreetNumber(event.target.value)} />
                    </Grid>
                    <Grid xs={12} paddingBottom={1}>
                        <TextField fullWidth required id="city" label="City" onChange={(event) => setCity(event.target.value)} />
                    </Grid>
                    <Grid xs={12} paddingBottom={1}>
                        <TextField fullWidth required id="state" label="State" onChange={(event) => setDestinationState(event.target.value)} />
                    </Grid>
                    <Grid xs={12} paddingBottom={1}>
                        <TextField fullWidth required id="country" label="Country" onChange={(event) => setDestinationCountry(event.target.value)} />
                    </Grid>
                    <Grid xs={12} paddingBottom={1}>
                        <input type="submit" value="submit"/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
