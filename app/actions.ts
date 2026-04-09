"use server";

type State = { success: boolean; error?: string } | null;

export async function submitWaitlist(_prevState: State, formData: FormData): Promise<State> {
  const email = formData.get("email");
  const vendorType = formData.get("vendorType");
  const painPoint = formData.get("painPoint");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Log the submission (replace with your DB/email service in production)
  console.log("Waitlist submission:", { email, vendorType, painPoint });

  return { success: true };
}
