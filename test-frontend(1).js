function App() {
  // Problem Statement
  // Time taken 1 hour 
  // Given an Array of object for Doctors called doctorData, I want to be able to
  // select as much of them as possible and specify the department which they belong
  // to in real time from an Array of objects containing all department called departmentData
  // then stringify your result and log it on a click of a button.

  // NB: Use the id to represent both the doctors and department
  // in the final answer and this test is mainly dependent on
  // functionality/architecture not so much on your design.
  const doctorData = [
    { id: 0, name: "Dr. Curtis" },
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Ben" },
    { id: 4, name: "Dr. Frank" },
    { id: 5, name: "Dr. Joe" },
    { id: 6, name: "Dr. Sheldon" },
    { id: 7, name: "Dr. Raji" },
  ];

  const departmentData = [
    { id: 0, name: "OBGYN Department" },
    { id: 1, name: "Emergency Department" },
    { id: 2, name: "Cardiology Department" },
    { id: 3, name: "Pediatrics Department" },
    { id: 4, name: "Surgery Department" },
  ];

  return <div></div>;
}

export default App;
