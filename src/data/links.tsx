let links: any = [];

if (typeof window !== "undefined") {
  const storedLinks = localStorage.getItem("DB");

  if (storedLinks !== null) {
    links = JSON.parse(storedLinks) || [];
  }
}

export const setLinksDB = () => {
  localStorage.setItem("DB", JSON.stringify(links));
};

export default links;
