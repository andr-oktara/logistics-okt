import { GridValueGetterParams } from "@mui/x-data-grid";
import { Package } from "@oktara-logistics-shared/types";
import { useLoaderData } from "react-router-dom";
import DataTable from "../../components/DataTable/DataTable";
import NavBar from "../../components/NavBar";
import PageTitle from "../../components/PageTitle";
import { PackageLoaderData } from "./package.loader";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { SxProps } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import PackageClientService from "../../clients/packageAPI/package.client";
import { ROUTE_PATHS } from "../AppRoutes";

const fabStyle = {
    marginTop: 10,
    marginBottom: 5,
};

const fab = {
    color: 'primary' as 'primary',
    sx: fabStyle as SxProps,
    icon: <AddIcon />,
    label: 'Add',
}

export default function PackageList() {
    const packageClient = new PackageClientService();
    const { packages } = useLoaderData() as PackageLoaderData;

    const doAction = async (action: string, item: Package): Promise<void> => {
        const reload = () => window.location.href = ROUTE_PATHS.LIST_PACKAGES;

        switch(action) {
            case "ship":
                return packageClient.ship(item.id).then(() => { reload() });
            case "deliver":
                return packageClient.deliver(item.id).then(() => { reload() });
            case "return":
                return packageClient.returnToSeller(item.id).then(() => { reload() });
        }

        return;
    };

    return (
        <>
            <NavBar />
            <Grid container>
                <Grid xs={10}>
                    <PageTitle title="Packages" />
                </Grid>
                <Grid xs={2} textAlign="right">
                    <Link to={ROUTE_PATHS.CREATE_PACKAGE} style={{ color: "white" }}>
                        <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                            {fab.icon}
                        </Fab>
                    </Link>
                </Grid>
                <Grid xs={12}>
                    <DataTable
                        columns={[
                            { field: "title", headerName: "Title", sortable: true, width: 350 },
                            { field: "status", headerName: "Status", sortable: true  },
                            { 
                                field: "destination.recipientName",
                                headerName: "Recipient name",
                                sortable: true,
                                width: 200,
                                valueGetter: ({ row: { destination }}: GridValueGetterParams) => destination.recipientName,
                            },
                            { 
                                field: "destination",
                                headerName: "Destination",
                                width: 360,
                                sortable: true,
                                valueGetter: ({ row: { destination }}: GridValueGetterParams<Package>) =>
                                    `${destination.street} ${destination.number}, ${destination.city} ${destination.state}, ${destination.country}`, 
                            },
                            { field: "edit", headerName: "Action", width: 360,  sortable: false, renderCell: (params) => {
                                const item = params.row as Package;
                                return (
                                    <>
                                        {item.actions.map((action) => (
                                            <strong key={action}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    style={{ marginLeft: 16 }}
                                                    tabIndex={params.hasFocus ? 0 : -1}
                                                    onClick={() => doAction(action, params.row as Package)}
                                                >
                                                    {action}
                                                </Button>
                                            </strong>
                                        ))}
                                    </>
                                  )
                            }},
                        ]}
                        rows={packages.map((item) => ({ ...item, edit: true })) }
                    />
                </Grid>        
            </Grid>
        </>
    )
}
