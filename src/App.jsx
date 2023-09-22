import './App.css'
import ReusableForm2 from './Components/ReusableForm2/ReusableForm2'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import CustmHookForm from './Components/CustomHookForm/CustmHookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateForm from './Components/StateForm/StateForm'

function App() {

/**নিচের ‍দুটি হ্যান্ডেল Reusable Form এর জন্য */
// const handleSignUpSubmit = data => {
//   console.log('sign up data',data);
// }

// const handleUpdateProfile = data => {
//   console.log('update profiel data',data);
// }

/**নিচের দুটি হ্যান্ডেল Reusable Form 2 এর জন্য */
const handleSignUpSubmit2 = data => {
  console.log('sign up data',data);
}

const handleUpdateProfile2 = data => {
  console.log('update profiel data',data);
}

  return (
    <>
    <h1 className='text-center font-extrabold m-2 text-3xl'>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}

      {/* <StateForm></StateForm> */}

      {/* <RefForm></RefForm> */}

      {/* <CustmHookForm></CustmHookForm> */}

      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}></ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      submitBtnText='Update' 
      handleSubmit={handleUpdateProfile}></ReusableForm> */}

      <ReusableForm2 handleSubmit = {handleSignUpSubmit2}>
        <div className='bg-white text-blue-600 w-12 h-12 rounded-full'>
          <h1>B</h1>
        </div>
      </ReusableForm2>
      <ReusableForm2 handleSubmit = {handleUpdateProfile2} submitBtnText='Update'>Update profile</ReusableForm2>
    </>
  )
}

export default App
