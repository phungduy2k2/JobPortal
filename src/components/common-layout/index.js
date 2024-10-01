import { currentUser } from "@clerk/nextjs/server"
import Header from "../header"

async function CommonLayout({children}) {
    
    const user = await currentUser();
    
    return <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/*Header Component*/}
        <Header user={JSON.parse(JSON.stringify(user))}/>
        
        {/*Header Component*/}

        {/*Main Content*/}
        <main>{children}</main>

        {/*Header Component*/}
    </div>
}

export default CommonLayout