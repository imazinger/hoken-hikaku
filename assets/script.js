"use strict";
// 比較内容はHTMLに保持し、JavaScriptは表示切替だけに使用する。
const select = document.getElementById("product-select");
const table = document.querySelector(".comparison");
const status = document.getElementById("table-status");
if (select && table) {
  document.querySelector(".compare-controls").hidden = false;
  const apply = () => {
    const value = select.value;
    table.querySelectorAll("[data-product]").forEach(cell => {
      cell.hidden = value !== "all" && cell.dataset.product !== value;
    });
    table.classList.toggle("single", value !== "all");
    status.textContent = value === "all" ? "4商品を表示中" : select.selectedOptions[0].textContent + "を表示中";
  };
  if (window.matchMedia("(max-width: 700px)").matches) select.value = "aflac";
  select.addEventListener("change", apply);
  apply();
}
