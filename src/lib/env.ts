export const env = {
  whatsappNumber:
    process.env.WHATSAPP_NUMBER ??
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ??
    "",
  googleMapsUrl:
    process.env.GOOGLE_MAPS_URL ??
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
    "#",
};
