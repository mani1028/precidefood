// Specify the configuration for barcode scanning
const config = {
  inputStream: {
    name: "Live",
    type: "LiveStream",
    target: document.querySelector("#camera"),
  },
  decoder: {
    readers: ["ean_reader", "upc_reader"], // Barcode types to recognize
  },
};

// Initialize and start the scanner
Quagga.init(config, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  Quagga.start();
});

// Listen for successful scans
Quagga.onDetected(function (result) {
  const barcode = result.codeResult.code;
  document.querySelector("#result").textContent = `Scanned Barcode: ${barcode}`;
});
