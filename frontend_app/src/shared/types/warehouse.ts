export type WarehouseSlot = {
    id: string;
    warehouseId: string;
    name: string;
}

export type Warehouse = {
    id: string;
    title: string;
    address: string;
    storageLocations: WarehouseSlot[];
};
