const endpoint = import.meta.env.VITE_CONTACT_SERVICE_URL;

export async function submitContactRequest(payload) {
  if (!endpoint) {
    return {
      ok: false,
      prototype: true,
      message:
        'This form is currently in prototype mode. Live submission is not enabled on this site yet. Please use the approved email or phone method below.',
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || 'Unable to send your enquiry right now. Please try again later.');
  }

  return {
    ok: true,
    prototype: false,
    message: 'Thanks for your enquiry. Our team will review it and respond through the contact details you provided.',
  };
}
