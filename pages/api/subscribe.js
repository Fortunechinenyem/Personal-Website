export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "YOUR_BREVO_API_KEY",
      },
      body: JSON.stringify({
        email,
        listIds: [2],
      }),
    });

    if (!response.ok) {
      throw new Error("Subscription failed");
    }

    return res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error subscribing. Try again later." });
  }
}
