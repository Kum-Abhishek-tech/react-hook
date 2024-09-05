import { useEffect, useState } from "react";

const HookEffectOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('USEFFECT updating documnet title')
        document.title=`You clicked ${count} times`
    },[count])
    return(
        <div>
            <input value={name} onChange={e => setName(e.target.value)} type="text"/>
            <button onClick={() => setCount(count + 1)}>UseEffect CLick : {count} times</button>
            <>{name}</><br/>
            {document.title}
        </div>
    )
}
export default HookEffectOne;