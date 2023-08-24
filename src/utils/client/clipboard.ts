export const copyToClipboard = (str: string): void => {
  navigator.clipboard.writeText(str).catch((err): void => {
    console.error("Failed to copy to clipboard");
    console.error(err);
  });
};
