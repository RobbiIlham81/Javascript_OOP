import Table from "./home.js";

const table = new Table({
  columns: ["Name", "Email", "Alamat"],
  data: [
    ["Robbi", "robbi@gmail.com", "Aceh"],
    ["Amanda", "andika@gmail.com", "Yogyakarta"],
    ["Ilham", "ilham@gmail.com", "Medan"],
    ["Andika", "andika@gmail.com", "Tangerang"],
    ["Bima", "bima@gmail.com", "Palembang"],
  ],
});
const app = document.getElementById("app");
table.render(app);
