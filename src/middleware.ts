import { NextResponse, type NextRequest } from "next/server";
import { getLoggedInUser, logoutAccount } from "./lib/actions/user.actions";

export async function middleware(request: NextRequest) {
    const user = await getLoggedInUser();
    
    if (!user) {
        await logoutAccount(); 

        const response = NextResponse.redirect(new URL("/login", request.url));
        
        response.cookies.delete("appwrite-session");
        
        return response;
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/"], // Apply the middleware to the root path or adjust as necessary
};
