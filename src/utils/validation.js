export function validateRequired(value, fieldName) {
  if (!value || !value.toString().trim()) {
    return `${fieldName} is required.`;
  }
  return '';
}

export function validateEmail(value) {
  if (!value) return 'Work email or phone number is required.';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(value.trim())) {
    return '';
  }
  return 'Enter a valid work email address.';
}

export function validatePhone(value) {
  if (!value) return 'Work email or phone number is required.';
  const normalized = value.replace(/\s+/g, '');
  if (/^\+?[0-9]{8,15}$/.test(normalized)) {
    return '';
  }
  return 'Enter a valid phone number with 8 to 15 digits.';
}

export function validateContactForm(formValues) {
  const errors = {};

  const nameError = validateRequired(formValues.name, 'Full name');
  if (nameError) errors.name = nameError;

  const companyError = validateRequired(formValues.company, 'School or organisation');
  if (companyError) errors.company = companyError;

  const roleError = validateRequired(formValues.role, 'Role');
  if (roleError) errors.role = roleError;

  const contactValue = (formValues.contact || '').trim();
  if (!contactValue) {
    errors.contact = 'Work email or phone number is required.';
  } else if (contactValue.includes('@')) {
    const emailError = validateEmail(contactValue);
    if (emailError) errors.contact = emailError;
  } else {
    const phoneError = validatePhone(contactValue);
    if (phoneError) errors.contact = phoneError;
  }

  const enquiryTypeError = validateRequired(formValues.enquiryType, 'Enquiry type');
  if (enquiryTypeError) errors.enquiryType = enquiryTypeError;

  if (!formValues.message || formValues.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters long.';
  }

  if (!formValues.acknowledged) {
    errors.acknowledged = 'Please confirm the privacy notice before submitting.';
  }

  return errors;
}

export function sanitizeText(value) {
  return value.replace(/[<>]/g, '').trim();
}
