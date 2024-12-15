
import axios from 'axios';

const SendMail = async(ttitle,Usermail,agentRespose) => {
  const email=Usermail;
  const subject=ttitle;
  const body =agentRespose;
    try {
      const response = await axios.post('https://shipshop-e-commerce-backend.onrender.com/sendMail', {
        email,
        subject,
        body,
      });

      // Handle the response if needed
    //   console.log('Mail sent successfully:', response.data);
    } catch (error) {
      // console.error('Error sending mail:', error);
    }
  };



export default SendMail;
