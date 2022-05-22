import React from "react";
import Create__account from "./create_an_account";
import Chart__image from "./chart__image";

export default function Home_page(){
    return(
        <div>
 <div className="chart-image__css">
     <Chart__image />
     </div>
     <div className="create-account__css">
     <Create__account />  
     </div>
        </div>
       
    );
}