// Controlled element: one object in a state holding all the input fields value.

import { useEffect, useRef } from "react";

const RefForm = () => {
const nameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);

useEffect(()=>{
    nameRef.current.focus();
},[])

const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
}

    return (
        <div>
            <h1>Controlled element: one object in a state holding all the input fields value.</h1>
            <form onSubmit={handleSubmit} className="bg-lime-600 p-10 text-center space-y-4">
            <input ref={nameRef} type="text" name="name" />
            <br />
            <input ref={emailRef} defaultValue={'rahman@gmail.com'} type="email" name="email" id="" />
            <br />
            <input ref={passwordRef} type="password" name="password" id="" />
            <br />
            <input  className="mt-4 border bg-purple-400 py-1 px-3 rounded-lg text-white font-semibold" type="submit" value="submit" />
        </form>
        </div>
    );
};

export default RefForm;