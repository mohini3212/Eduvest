import { Calculate } from "./Calculate"
import { HeroSection } from "./HeroSection"
import { Journey } from "./Journey"
import { Navbar } from "./Navbar"
import { Smart } from "./Smart"

export const FrontPg=()=>{
    return(
       <>
        <Navbar/>
        <HeroSection/>
        <Journey/>
        <Calculate/>
        <Smart/>
       </>
    )
}