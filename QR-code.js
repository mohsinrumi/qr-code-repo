// Instagram Link
const instagramLink = "https://www.instagram.com/northlevis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

// Generate QR Code
const qrcodeContainer = document.getElementById("qrcode");

// Create a new QR Code instance
const qrCode = new QRCode(qrcodeContainer, {
  text: instagramLink,
  width: 180,   // Width of the QR Code
  height: 180,  // Height of the QR Code
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
