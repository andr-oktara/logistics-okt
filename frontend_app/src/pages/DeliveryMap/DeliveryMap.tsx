import NavBar from "../../components/NavBar";
import PageTitle from "../../components/PageTitle";
import Map from '../../components/Map';
import { Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { DeliveryMapLoaderData } from "./deliveryMap.loader";

export default function DeliveryMap() {
    const { shippedPackages } = useLoaderData() as DeliveryMapLoaderData;

    const waypoints = shippedPackages.map((shippedPackage) => {
        const { destination } = shippedPackage;
        return `${destination.street} ${destination.number}, ${destination.city} ${destination.state}, ${destination.country}`;
    });

    const origin = waypoints[0];
    const destination = origin;

    return (
        <>
            <NavBar />
            <PageTitle title={`Delivery Route (Total Packages: ${waypoints.length})`} />
                <Grid container >
                    <Grid xs={6}>
                        <Typography color="text.secondary" variant="h6" paddingTop={2} paddingBottom={2}>
                            Route Start At: {origin}
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography color="text.secondary" variant="h6" paddingTop={2} paddingBottom={2}>
                            Route Ends At: {destination}
                        </Typography>
                    </Grid>
                </Grid>
            <Map
                mapType={google.maps.MapTypeId.ROADMAP}
                mapTypeControl={true}
                route={{
                    origin,
                    waypoints,
                    destination
                }}
            />
        </>
    )
}
