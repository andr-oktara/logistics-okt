import { Package } from "@oktara-logistics-shared/types";

export const prepareDestinationAddress = (destination: Package["destination"]): string => {
    return `${destination.street} ${destination.number}, ${destination.city} ${destination.state}, ${destination.country}`;
}
