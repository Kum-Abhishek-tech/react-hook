import { useState } from "react"

const HookCounterThree = () => {
    const [name, setName] = useState({firstName: '', lastName:''});
    return(
        <form>
            <input type="text" id="firstName" placeholder="fname" value={name.firstName} onChange={e => setName({...name, firstName:e.target.value})} /><br/>
            <input type="text" id="lastName" placeholder="lname" value={name.lastName} onChange={e => setName({...name, lastName:e.target.value})} /><br/>
            <h2>Your First name : {name.firstName}</h2><br/>
            <h2>Your Last Name : {name.lastName}</h2><br/>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}
export default HookCounterThree;