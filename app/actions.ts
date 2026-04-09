"use server";

type State = { success: boolean; error?: string } | null;

export async function submitWaitlist(_prevState: State, formData: FormData): Promise<State> {
  const email = formData.get("email");
  const vendorType = formData.get("vendorType");
  const painPoint = formData.get("painPoint");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;

  const res = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        fields: {
          VendorType: vendorType || "",
          PainPoint: painPoint || "",
        },
        tags: ["Waitlist"],
        status: "SUBSCRIBED",
      }),
    }
  );

  if (res.status === 409) {
    // Already subscribed — treat as success
    return { success: true };
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message = body?.error?.message ?? "Something went wrong. Please try again.";
    return { success: false, error: message };
  }

  return { success: true };
}
