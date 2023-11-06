export let links: any = [];
export let color: any = "#330033";

if (typeof window !== "undefined") {
  const storedLinks = localStorage.getItem("DB");
  const storedColor = localStorage.getItem("Colors");

  if (storedLinks !== null) {
    links = JSON.parse(storedLinks) || [];
  }
  if (storedColor !== null) {
    color = storedColor;
  }
}

export const setLinksDB = (updatedLinks: any) => {
  links = updatedLinks;
  localStorage.setItem("DB", JSON.stringify(links));
};

export const setWebsiteColor = (newColor: string) => {
  color = newColor;
  localStorage.setItem("Colors", newColor);
};