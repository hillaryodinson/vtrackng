export function generateOTP(): string {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

export async function sendSMS(phone: string, message: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.ebulksms.com/sendsms?` + 
      new URLSearchParams({
        username: process.env.EBULKSMS_USERNAME || '',
        apikey: process.env.EBULKSMS_API_KEY || '',
        sender: process.env.EBULKSMS_SENDER || 'echoes',
        messagetext: message,
        flash: '0',
        recipients: phone
      })
    );

    if (!response.ok) {
      console.error('SMS API error:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('SMS sending error:', error);
    return false;
  }
}

export async function sendOTP(phone: string, otp: string): Promise<boolean> {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] Sending OTP ${otp} to ${phone}`);
      return true;
    }

    const message = `Your verification code is: ${otp}`;
    return await sendSMS(phone, message);
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
} 