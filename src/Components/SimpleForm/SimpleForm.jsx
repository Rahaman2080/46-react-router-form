/**
 * using form tag and onSubmit handler with event (e)
 * From e access e.target.[name of the input field].value
 * 
 */

const SimpleForm = () => {

const handleSubmit = e => {
    e.preventDefault();
    console.log('input button submited');
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);

}

    return (
        <div>
            <h1>This is Simple form using form tag and onSubmit handler with event (e)
 From e access e.target.[name of the input field].value</h1>
            <form onSubmit={handleSubmit} className="bg-lime-600 p-10 text-center space-y-4">
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="password" name="password" id="" />
            <br />
            <input  className="mt-4 border bg-purple-400 py-1 px-3 rounded-lg text-white font-semibold" type="submit" value="submit" />
        </form>
        </div>
    );
};

export default SimpleForm;