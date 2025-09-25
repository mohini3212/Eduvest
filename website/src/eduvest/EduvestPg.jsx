import { Education } from "./Education"
import { EducationInfo } from "./EducationInfo"
import { Helping } from "./Helping"
import { NavbarEd } from "./NavbarEd"
import { RightPlan } from "./RightPlan"



export const EduvestPg = () => {
    return (
        <>
            <NavbarEd />
            <Helping />
            <Education />
            <EducationInfo />
            <RightPlan />
        </>
    )
}