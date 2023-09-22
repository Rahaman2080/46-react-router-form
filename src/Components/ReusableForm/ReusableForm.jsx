

const ReusableForm = ({formTitle, handleSubmit,submitBtnText = "Submit"}) => {
    
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            
            <form onSubmit={handleLocalSubmit} className="bg-blue-500 p-10 text-center space-y-4">
                <h1 className="font-bold text-white text-3xl">{formTitle}</h1> {/**App.jsx e component er vitor form title use kora hoyece. */}
            <input type="text" name="name" placeholder="Name" />
            <br />
            <input type="email" name="email" id="" placeholder="email" />
            <br />
            <input type="password" name="password" id=""  placeholder="password" required/>
            <br />
            <input  className="mt-4 border py-1 px-3 rounded-lg text-white bg-sky-400 font-semibold" type="submit" value={submitBtnText} />
        </form>
        </div>
    );
};

export default ReusableForm;