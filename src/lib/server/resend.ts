const defaultFromEmail = "Love Long Eaton <website@midasweb.org>";

/**
 * Resend's resend.dev senders are restricted to the account owner's address.
 * Use the project's verified domain unless another production sender is set.
 */
export function getResendFromEmail(configuredFromEmail?: string) {
  const fromEmail = configuredFromEmail?.trim();
  return fromEmail && !fromEmail.toLowerCase().includes("@resend.dev")
    ? fromEmail
    : defaultFromEmail;
}
