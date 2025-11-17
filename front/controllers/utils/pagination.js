//import { off } from "pdfkit";

export const Pagination = ({
  limit = 10,
  baseURL,
  containerId,
  renderItem
}) => {

  const params = new URLSearchParams(window.location.search);
  let category = params.get("category") || null;
  let offset = parseInt(params.get("offset")) || 0;
  limit = parseInt(params.get("limit")) || limit;

  const container = document.getElementById(containerId);


  function updateURL() {
    const newParams = new URLSearchParams();
    newParams.set("category", category)
    newParams.set("offset", offset);
    newParams.set("limit", limit);

    const newURL = `${window.location.pathname}?${newParams.toString()}`;
    history.replaceState({}, "", newURL);
  }


  async function fetchPage() {
    const res = await fetch(`${baseURL}?category=${category}&offset=${offset}&limit=${limit}`);

    const data = await res.json();
    return data;
  }

  async function render() {
    updateURL();
    const data = await fetchPage();
    container.innerHTML = "";

    data.products.forEach(item => {
      if(item.activo === true)
      {
        container.appendChild(renderItem(item));
      }
    });

    document.getElementById("pageInfo").textContent =
      `Página ${(offset / limit) + 1}`;

    return data;
  }

  function next() {
    offset += limit;
    render();
  }

  function prev() {
    if (offset >= limit) {
      offset -= limit;
      render();
    }
  }

  function setCategory(cat){
    category = cat;
    offset = 0;
    render();
  }
  return { render, next, prev, setCategory };
};
