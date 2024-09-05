import { useEffect, useRef, useState } from "react";

const FocusInput = () => {
    const [form, setForm] = useState({name:"", email:"",password:""});
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    },[])
    return(
        <>
        <input type="text" ref={inputRef} value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /><br/>
        <input type="email"   value={form.email} onChange={e=> setForm({...form, email:e.target.value})} /><br/>
        <input type="password"   value={form.password} onChange={e => setForm({...form, password:e.target.value})} /><br/>
        <h2>{JSON.stringify(form)}</h2>
        </>
    )

}
export default FocusInput;