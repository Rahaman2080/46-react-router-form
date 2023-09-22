// controlled element: using individual field state for each input field

import { useState } from "react";


const StateForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    


    const handleSubmit = e => {
        e.preventDefault();
        password.length < 6 ? 
        setError('Password 6 ta lagbe') 
        : setError('');
        console.log(name,email, password);
    };

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>controlled element: using individual field state for each input field</h1>
            <form onSubmit={handleSubmit} className="bg-lime-600 p-10 text-center space-y-4">
            <input onChange={handleNameChange} type="text" name="name" placeholder="Name"/>
            <br />
            <input onChange={handleEmailChange} type="email" name="email" id="" placeholder="email" />
            <br />
            <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="Password" required />
            <br />
            {
                error && <p>{error}</p>
            }
            <input  className="mt-4 border bg-purple-400 py-1 px-3 rounded-lg text-white font-semibold" type="submit" value="submit" /> 
        </form>
        </div>
    );
};

export default StateForm;