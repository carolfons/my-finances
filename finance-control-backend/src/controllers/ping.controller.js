// Controller function to handle /ping route
function ping(req, res) {
    res.status(200).json({ message: 'pong' });
  }
  
  // Exporting the controller function
  module.exports = { ping };