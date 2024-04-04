import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    Button,
} from "@nextui-org/react";

interface SubmissionConfirmationPopupProps {
    showPopup: boolean;
    handleSubmit: () => void;
}

export function SubmissionConfirmationPopup({
    showPopup,
    handleSubmit,
}: SubmissionConfirmationPopupProps) {
    return (
        <Popover
            showArrow
            offset={10}
            size="md"
            placement="bottom"
            className="max-w-[100%]"
            isOpen={showPopup}>
            <PopoverTrigger>
                <Button
                    variant="shadow"
                    color="primary"
                    radius="full"
                    size="md"
                    onClick={handleSubmit}
                    className="">
                    Submit
                </Button>
            </PopoverTrigger>

            <PopoverContent className="">
                <div className="p-2">
                    <div className=" font-bold">
                        Thank you!<br />
                        Your question has been received and is
                        under review.<br />
                        We&apos;ll get back to you with an answer
                        soon.
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
