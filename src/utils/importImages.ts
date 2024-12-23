export const importAllImages = (
  requireContext: __WebpackModuleApi.RequireContext
) => {
  return requireContext.keys().map((filename: string) => ({
    src: requireContext(filename),
    title: filename.replace("./", "").replace(/\.[^/.]+$/, ""), // Extract title from filename
  }));
};
