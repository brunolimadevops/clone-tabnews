function status(request, response) {
  response
    .status(200)
    .json({
      Status: "Tudo funcionando perfeitamente. Bora tomar uma cerveja?",
    });
}

export default status;
