// import React from "react";
// import { useState, useRef } from "react";

// import { CreateProfileStyled } from "./profile-style";
// import { useNavigate } from "react-router-dom";
// import AxiosInstance from "../axios";
// import { statesOfAus } from "../states-in-aus/states";

// const CreateProfile = () => {
//   const [firstName, setName] = useState("");
//   const [phone, setPhone] = useState(null);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [state, setState] = useState("");
//   const [noOfProperty, setNoOfProperty] = useState(null);
//   const [portfolio, setPortfolio] = use;
//   const inputRefs = useRef([]);

//   const navigate = useNavigate();

//   const email = localStorage.getItem("email");

//   const handleInputChange = (index, event) => {
//     const input = event.target.value;
//     if (/^\d?$/.test(input)) {
//       const updatedPostcodes = [...postcodes];
//       updatedPostcodes[index] = input;

//       if (input && index < 5 && inputRefs.current[index + 1]) {
//         inputRefs.current[index + 1].focus();
//       }

//       setPostcodes(updatedPostcodes);
//     }
//   };
//   //updating the postcodes as an array

//   const handleKeyDown = (index, event) => {
//     if (event.key === "Backspace" && postcodes[index] === "") {
//       const updatedPostcodes = [...postcodes];
//       updatedPostcodes[index - 1] = "";

//       setPostcodes(updatedPostcodes);

//       if (index > 0 && inputRefs.current[index - 1]) {
//         inputRefs.current[index - 1].focus();
//       }
//     } else if (
//       event.key === "ArrowRight" &&
//       index < 5 &&
//       postcodes[index] !== ""
//     ) {
//       if (inputRefs.current[index + 1]) {
//         inputRefs.current[index + 1].focus();
//       }
//     } else if (event.key === "ArrowLeft" && index > 0) {
//       if (inputRefs.current[index - 1]) {
//         inputRefs.current[index - 1].focus();
//       }
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const joinedPostcode = postcodes.join("");

//     console.log(joinedPostcode);

//     const formData = new FormData();
//     formData.append("first_name", firstName);
//     formData.append("phone", phone);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("post_code", joinedPostcode);

//     AxiosInstance.post("/api/user/signup", formData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (response) => {
//         const data = await response.data;
//         console.log(data);
//         navigate("/home");
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <CreateProfileStyled>
//         <div className="form-container">
//           <form on onSubmit={handleSubmit}>
//             <h2>Your personal details</h2>
//             <div className="detail-input">
//               <label>Name :</label>
//               <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 required
//               />
//             </div>

//             <div className="detail-input">
//               <label>Phone Number :</label>
//               <input
//                 type="number"
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Phone Number"
//                 required
//               />
//             </div>

//             <div className="detail-input">
//               <label>State :</label>
//               <select onChange={(e) => setState(e.target.value)} required>
//                 <option value="">select</option>
//                 {statesOfAus.map((state) => {
//                   return <options value={state.value}>{state.label}</options>;
//                 })}
//               </select>
//             </div>

//             <div className="detail-input">
//               <label>Password :</label>
//               <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div className="detail-input">
//               <label>Confirm password :</label>
//               <input
//                 type="password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <h2>Your property investing goals</h2>
//             <div className="detail-input">
//               <label>How many properties do you currently have</label>
//               <input
//                 type="number"
//                 onChange={(e) => setNoOfProperty(e.target.value)}
//                 placeholder="Enter"
//                 required
//               />
//             </div>
//             <div className="detail-input">
//               <label>
//                 What is the current value of all of your property portfolio
//               </label>
//               <input
//                 type="number"
//                 onChange={(e) => setPortfolio(e.target.value)}
//                 placeholder="Enter"
//                 required
//               />
//             </div>
//             <div className="detail-input">
//               <label>
//                 What is the current value of all of your property portfolio
//               </label>
//               <select onChange={(e) => setPortfolio(e.target.value)} required>
//                 <options value="">Select</options>
//                 <options value="1 month">1 month</options>
//                 <options value="3 months">3 months</options>
//                 <options value="6 months">6 month</options>
//                 <options value="1 year">1 year</options>
//                 <options value="unsure">1 year</options>
//               </select>
//             </div>

//             <button type="submit">Sign Up</button>
//           </form>
//         </div>
//       </CreateProfileStyled>
//     </div>
//   );
// };

// export default CreateProfile;
