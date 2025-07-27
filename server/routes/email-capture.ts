import express from "express";

const router = express.Router();

// In-memory storage (replace with database in production)
interface EmailEntry {
  id: number;
  email: string;
  timestamp: string;
}

let emails: EmailEntry[] = [];
let nextId = 1;

// Capture email endpoint
router.post("/capture-email", (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  // Check if email already exists
  const existingEmail = emails.find((entry) => entry.email === email);
  if (existingEmail) {
    return res
      .status(200)
      .json({ message: "Email already captured", existing: true });
  }

  // Add new email
  const newEntry: EmailEntry = {
    id: nextId++,
    email,
    timestamp: new Date().toISOString(),
  };

  emails.push(newEntry);

  console.log(`📧 New email captured: ${email}`);

  res.status(200).json({ message: "Email captured successfully" });
});

// Admin endpoints
router.get("/admin/emails", (req, res) => {
  // In production, add authentication/authorization here
  res.json(
    emails.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    ),
  );
});

router.delete("/admin/emails", (req, res) => {
  // In production, add authentication/authorization here
  emails = [];
  nextId = 1;
  res.json({ message: "All emails cleared" });
});

// Get email count
router.get("/admin/stats", (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayCount = emails.filter(
    (entry) => new Date(entry.timestamp) >= today,
  ).length;

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const weekCount = emails.filter(
    (entry) => new Date(entry.timestamp) >= weekAgo,
  ).length;

  res.json({
    total: emails.length,
    today: todayCount,
    thisWeek: weekCount,
  });
});

export default router;
