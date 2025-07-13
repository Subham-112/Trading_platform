import Benefits from "./benefits"
import Investment from "./investmentOpt"
import SignupHero from "./signupHero"
import SignupSec from "./signupSection"
import StepsToOpen from "./stepsToOpen"
import OpenAcc from '../OpenAcc'

export default function Signup() {
    return (
        <>
            <SignupHero />
            <SignupSec />
            <Investment />
            <StepsToOpen />
            <Benefits />
            <OpenAcc />
        </>
    )
}