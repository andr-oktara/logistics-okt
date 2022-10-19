export enum PackageStatus {
    draft = "draft",
    stored = "stored",
    shipped = "shipped",
    delivered = "delivered",
    returned = "returned",
}

export type PackageDestination = {
    id: string,
    recipientName: string,
    street: string,
    city: string,
    state: string,
    number: string,
    country: string
}

export type Package = {
    id: string;
    title: string,
    storageId: string,
    status: PackageStatus,
    destination: PackageDestination;
    actions: string[],
};

export type CreatePackageInput = Pick<Package, "title" | "storageId" > & {
    destination: Omit<Package["destination"], "id">;
};
