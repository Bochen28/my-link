let links: any = [];

if (typeof window !== "undefined") {
  const storedLinks = localStorage.getItem("DB");

  if (storedLinks !== null) {
    links = JSON.parse(storedLinks) || [];
  }
}

export const setLinksDB = (updatedLinks: any) => {
  links = updatedLinks;
  localStorage.setItem("DB", JSON.stringify(links));
};

export default links;
