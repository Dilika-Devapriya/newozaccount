// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contac.css'



const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c013bd5a-2d8c-47f3-88cd-ee56ea01e892");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='container'>
      <div className='contact'>
        <div className='contact-col'>
          <h2>Send us a message</h2>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and
            suggestions are important to us as we strive to provide exceptional service to our Finacial partner.</p>
          <ul>
            <li><b>Contact us</b> - 0404281000</li>
            <li><b>Emial </b> - info@ozaccountants.com.au</li>
            <li><b>Postal address </b> - PO Box 3440 Parramatta NSW 2124</li>
            <li><b>Office address </b> - 2/164-170 Great western Highway Westmead NSW 2145</li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile' required />
            <label>Your Email</label>
            <input type='email' name='email' placeholder='Enter your email' required />
            <label>Write your messages here</label>
            <input type='message' rows='6' placeholder='Enter your message' required />
            <button type='submit' className='tn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
