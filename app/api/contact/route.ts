import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Resend } from "resend";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "requests.json");

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name: string;
  contact: string;
  nailShape: string;
  details: string;
  submittedAt: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, contact, nailShape, details } = body ?? {};

  if (
    typeof name !== "string" ||
    typeof contact !== "string" ||
    !name.trim() ||
    !contact.trim()
  ) {
    return NextResponse.json(
      { error: "Name and a way to reach you are required." },
      { status: 400 }
    );
  }

  const entry: ContactRequest = {
    name: name.trim(),
    contact: contact.trim(),
    nailShape: typeof nailShape === "string" ? nailShape.trim() : "",
    details: typeof details === "string" ? details.trim() : "",
    submittedAt: new Date().toISOString(),
  };

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    let existing: ContactRequest[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }

    existing.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    // Serverless platforms (e.g. Vercel) have a read-only filesystem,
    // so this is expected to fail there — email is the reliable channel.
    console.error("Failed to write local request log:", err);
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (toEmail && process.env.RESEND_API_KEY) {
    try {
      const result = await resend.emails.send({
        from: "Floss & Gloss <onboarding@resend.dev>",
        to: toEmail,
        replyTo: entry.contact.includes("@") ? entry.contact : undefined,
        subject: `New custom set request from ${entry.name}`,
        html: `
          <h2>New request from the Floss &amp; Gloss site</h2>
          <p><strong>Name:</strong> ${escapeHtml(entry.name)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(entry.contact)}</p>
          <p><strong>Nail shape &amp; length:</strong> ${escapeHtml(entry.nailShape) || "—"}</p>
          <p><strong>Design details:</strong> ${escapeHtml(entry.details) || "—"}</p>
          <p style="color:#6b6480;font-size:12px;">Submitted ${entry.submittedAt}</p>
        `,
      });
      if (result.error) {
        console.error("Resend API error:", JSON.stringify(result.error));
      } else {
        console.log("Resend email sent:", JSON.stringify(result.data));
      }
    } catch (err) {
      console.error("Failed to send contact email:", err);
    }
  }

  return NextResponse.json({ success: true });
}
