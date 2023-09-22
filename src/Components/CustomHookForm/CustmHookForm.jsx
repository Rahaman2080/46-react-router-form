import useInputState from "../../CustomHooks/CustomHooks";


const CustmHookForm = () => {
// const [name, handleNameChange] = useInputState(''); // if customHook return an array
const email = useInputState(''); // if customHook return an object
const name = useInputState('Abdur');
const password = useInputState('');

const handleSubmit = e => {
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);
    e.preventDefault();
}

    return (
        <div>
            <h1>Uncontrolled element: using custom hook which is created in customHook.js file</h1>
            <form onSubmit={handleSubmit} className="bg-lime-600 p-10 text-center space-y-4">
            {/* <input value={name} onChange={handleNameChange} type="text" name="name" />  */}
            <input {...name} type="text" name="name" id="" />
            <br />
            <input {...email} type="email" name="email" id="" />
            <br />
            <input {...password} type="password" name="password" id="" />
            <br />
            <input  className="mt-4 border bg-purple-400 py-1 px-3 rounded-lg text-white font-semibold" type="submit" value="submit" />
        </form>
        </div>
    );
};

export default CustmHookForm;