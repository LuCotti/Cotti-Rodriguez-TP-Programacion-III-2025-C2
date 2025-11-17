export const Pagination = ({
  limit = 10,
  baseURL,
  containerId,
  renderItem
}) => {

  const params = new URLSearchParams(window.location.search);
  let category = params.get("category");
  let offset = parseInt(params.get("offset")) || 0;
  limit = parseInt(params.get("limit")) || limit;

  const container = document.getElementById(containerId);


  function updateURL() {
    const newParams = new URLSearchParams();
    newParams.set("category", offset);
    newParams.set("offset", offset);
    newParams.set("limit", limit);

    const newURL = `${window.location.pathname}?${newParams.toString()}`;
    history.replaceState({}, "", newURL);
  }


  async function fetchPage() {
    const res = await fetch(`${baseURL}?offset=${offset}&limit=${limit}`);
    //const res = await window.location.search = `?offset=${offset}&limit=${limit}`
    const data = await res.json();
    return data;
  }

  async function render() {
    updateURL();
    const data = await fetchPage();
    container.innerHTML = "";

    data.products.forEach(item => {
      container.appendChild(renderItem(item));
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

  return { render, next, prev };
};
