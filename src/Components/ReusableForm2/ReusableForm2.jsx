

const ReusableForm2 = ({handleSubmit, submitBtnText=' Log in', children }) => {

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
                <h1 className="font-bold text-white text-4xl flex items-center justify-center">{children}</h1> {/**App.jsx e component er vitor form title use kora hoyece. */}
                <h1 className="text-center font-bold text-2xl text-white">Lite</h1>
            {/* <input type="text" name="name" placeholder="Name" /> */}
            {/* <br /> */}
            <input type="email" name="email" id="" placeholder="email" />
            <br />
            <input type="password" name="password" id=""  placeholder="password" required/>
            <br />
            <input  className="mt-4 border  px-16 text-blue-600 bg-white font-bold text-1xl" type="submit" value={submitBtnText} />
            <br />
            <input  className="mt-4 px-6 text-black bg-white font-semibold" type="submit" value="forgote password?" />
            <br />
            <input  className="mt-4  px-4 rounded-lg  text-white bg-green-500 font-semibold" type="submit" value="Creat a New Account" />
        </form>
        </div>
    );
};

export default ReusableForm2;