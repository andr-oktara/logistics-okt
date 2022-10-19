import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatePackage from "./CreatePackage/CreatePackage";
import { createPackageLoader } from "./CreatePackage/createPackage.loader";
import DeliveryMap from "./DeliveryMap/DeliveryMap";
import { deliveryMapLoader } from "./DeliveryMap/deliveryMap.loader";
import ErrorPage from "./Error/ErrorPage";
import PackageList from "./ListPackages";
import { allPackagesLoader } from "./ListPackages/package.loader";
import ManageWarehouse from "./Warehouse/ManageWarehouse";
import { warehouseLoader } from "./Warehouse/warehouse.loader";

export const ROUTE_PATHS = {
  CREATE_PACKAGE: "/packages/create",
  LIST_PACKAGES: "/packages",
  DELIVERY_MAP: "/packages/delivery-map",
  MANAGE_WAREHOUSE: "/warehouse",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PackageList />,
    errorElement: <ErrorPage />,
    loader: allPackagesLoader,
    children: [
      {
        path: ROUTE_PATHS.LIST_PACKAGES,
        element: <PackageList />,
      },
    ],
    shouldRevalidate: () => true
  },
  {
    path: ROUTE_PATHS.CREATE_PACKAGE,
    element: <CreatePackage />,
    loader: createPackageLoader,
  },
  {
    path: ROUTE_PATHS.DELIVERY_MAP,
    element: <DeliveryMap />,
    loader: deliveryMapLoader,
  },
  {
    path: ROUTE_PATHS.MANAGE_WAREHOUSE,
    element: <ManageWarehouse />,
    loader: warehouseLoader,
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />
}
