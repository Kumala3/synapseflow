import { Spinner } from "@nextui-org/react";

export function LoadingData() {
    return (
        <div className="flex justify-center items-center">
            <Spinner label="Loading..." size="lg" color="secondary" labelColor="secondary" />            
        </div>
    );
}
