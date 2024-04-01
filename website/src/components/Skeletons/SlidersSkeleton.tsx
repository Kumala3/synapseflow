import { Skeleton } from "@nextui-org/react";

export function SlidersSkeleton() {
    return (
        <div className="relative lg:max-w-[900px] max-w-[1000px] md:max-w-[650px] overflow-hidden h-[150px] mx-auto flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex flex-col gap-5">
                <ul className="w-full flex gap-10 animate-infinite-scroll-left">
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                </ul>

                <ul className="w-full flex gap-10 animate-infinite-scroll-left">
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                    <Skeleton className="h-[60px] w-[180px] rounded-md" disableAnimation={true}/>
                </ul>
            </div>
        </div>
    );
}
