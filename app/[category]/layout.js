import Breadcumb from "./Breadcumb";

export default function CategoryLayout({children}) {
    return(
        <div className="p-20 w-full">
            <Breadcumb>{`\<- back`}</Breadcumb>
            {children}
        </div>
    )
}