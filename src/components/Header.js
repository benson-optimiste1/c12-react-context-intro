import { useContext } from "react"
import { UserContext } from "../App"

export default function Header(){
    const {userState} = useContext(UserContext)

    console.log('userInfo ->', userState)

    return(
        <header>
            <h2> Welcome {userState.email}</h2>
        </header>
        
    )
}