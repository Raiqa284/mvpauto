import { useState } from "react";

const SellCarForm = () => {
  const [step, setStep] = useState(1);

  const [carData, setCarData] = useState({
    make: "",
    model: "",
    year: "",
    fuelType: "",
    transmission: "",
    odometer: "",
    condition: "",
    additionalInfo: "",
  });

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    location: "",
  });

  const handleCarChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const message = `
🚗 *Car for Sale*

*Car Details*
Make: ${carData.make}
Model: ${carData.model}
Year: ${carData.year}
Fuel Type: ${carData.fuelType}
Transmission: ${carData.transmission}
Odometer: ${carData.odometer}
Condition: ${carData.condition}

Additional Info:
${carData.additionalInfo || "None"}

👤 *Seller Details*
Name: ${userData.name} ${userData.surname}
Phone: ${userData.phone}
Location: ${userData.location}
    `;

    const phoneNumber = "27XXXXXXXXX"; // <-- replace with YOUR WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="sell-form">
      {step === 1 && (
        <>
          <h2>Car Details</h2>

          <input name="make" placeholder="Car Make" onChange={handleCarChange} />
          <input name="model" placeholder="Model" onChange={handleCarChange} />
          <input name="year" placeholder="Year" onChange={handleCarChange} />

          <select name="fuelType" onChange={handleCarChange}>
            <option value="">Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>

          <select name="transmission" onChange={handleCarChange}>
            <option value="">Transmission</option>
            <option>Manual</option>
            <option>Automatic</option>
          </select>

          <input
            name="odometer"
            placeholder="Odometer (km)"
            onChange={handleCarChange}
          />

          <select name="condition" onChange={handleCarChange}>
            <option value="">Condition</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Average</option>
            <option>Below Average</option>
            <option>Poor</option>
          </select>

          <textarea
            name="additionalInfo"
            placeholder="Anything we need to know about your vehicle? (Optional)"
            onChange={handleCarChange}
          />

          <button onClick={() => setStep(2)}>Continue</button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>About You</h2>

          <input name="name" placeholder="Name" onChange={handleUserChange} />
          <input name="surname" placeholder="Surname" onChange={handleUserChange} />
          <input name="phone" placeholder="Cell Number" onChange={handleUserChange} />
          <input name="location" placeholder="Location" onChange={handleUserChange} />

          <button onClick={sendToWhatsApp}>Send to WhatsApp</button>
        </>
      )}
    </div>
  );
};

export default SellCarForm;
