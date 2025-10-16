 const me = async (req, res) => {
  try {
    // Fetch cat fact
    const response = await fetch("https://catfact.ninja/fact", { timeout: 5000 });
    const data = await response.json();

    const result = {
      status: "success",
      user: {
        email: "Obpeterapp@gmail.com",
        name: "Oluyemi Boluwatife Peter",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(), // current UTC time
      fact: data.fact || "Cats are amazing animals!", // fallback fact
    };

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching cat fact:", error);

    res.status(500).json({
      status: "error",
      message: "Unable to fetch cat fact at the moment.",
      timestamp: new Date().toISOString(),
    });
  }
};

export default me;