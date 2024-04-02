import { Popover, PopoverContent, Button } from "@nextui-org/react";

interface SubmissionConfirmationPopupProps {
    isSuccess: boolean;
    handleSubmit: () => void;
}

export function SubmissionConfirmationPopup({
    isSuccess,
    handleSubmit,
}: SubmissionConfirmationPopupProps) {
    return (
        <>
            <Button
                variant="shadow"
                color="primary"
                radius="full"
                size="md"
                onClick={handleSubmit}
                className="">
                Submit
            </Button>

            {isSuccess && (
                <Popover showArrow placement="bottom">
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">
                                Popover Content
                            </div>
                            <div className="text-tiny">
                                This is the popover content
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            )}
        </>
    );
}
