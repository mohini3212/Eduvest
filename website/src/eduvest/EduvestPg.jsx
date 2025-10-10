import { Contact } from "./Contact"
import { Education } from "./Education"
import { EducationInfo } from "./EducationInfo"

import { Helping } from "./Helping"
import { Powerful } from "./Powerful"
import { Works } from "./Works"



export const EduvestPg = () => {
    return (
        <>
          
            <Helping />
            <Powerful />
          
            <Education />
            <EducationInfo />
            <Works />
            <Contact />
        
        </>
    )
}