import Sidebar from "./Sidebar";

export interface MainLayoutProps {
    className?: string
    children: any,
}

export default function MainLayout(props: MainLayoutProps) {
    return (
        <div className={`flex h-full m-5 sm:m-10 rounded-[20px] border-[1px] border-[#C3C3C3] border-opacity-50 bg-[#EEEEEE] bg-opacity-10 ${props.className}`}>
            <Sidebar />
            { props.children }
        </div>
    );
}
