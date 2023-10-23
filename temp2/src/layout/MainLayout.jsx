import { Outlet} from "@solidjs/router";
import { onMount } from "solid-js";

import Header from './partials/HeaderPre'
import Footer from './partials/Footer'


export default function MainLayout () {
    return (
        <>
            <Header />
            {/* <Menu /> */}
            <div class="container">
                <Outlet />  
            </div>
            
            <Footer />
            
        </>
    )
}