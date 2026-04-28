// fungsi navigasi
function showPage(id){
  document.querySelectorAll("li").forEach(el=>{
    el.classList.remove("active");
  });
document.getElementById(id).classList.add("active");
}
window.addEventListener("load", ()=>{
  showPage("beranda");
});
document.getElementById("beranda").addEventListener("click", ()=>{
  showPage("beranda");
});
document.getElementById("siswa").addEventListener("click", ()=>{
  showPage("siswa");
});
document.getElementById("jadwal").addEventListener("click", ()=>{
  showPage("jadwal");
});
document.getElementById("pengumuman").addEventListener("click", ()=>{
  showPage("pengumuman");
});
// ==========
function loadSiswa(){
  fetch("siswa.json")
  .then(res => res.json())
  .then(data =>{
    let container = document.getElementById("daftar");
    container.innerHTML= "";
    let noAbsen = 1;
    data.forEach(item =>{
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      let umur = document.createElement("p");
      let absen = document.createElement("p");
      let infoSiswa = document.createElement("div");
      div.classList.add("box-daftar");
      infoSiswa.classList.add("info-siswa");
      div.style.backgroundImage = `url(img/${item.img}`;
      h1.textContent= item.nama;
      umur.textContent= `Umur: ${item.umur}`;
      absen.textContent= "No Absen: " + noAbsen++;
      infoSiswa.appendChild(h1);
      infoSiswa.appendChild(umur);
      infoSiswa.appendChild(absen);
      div.appendChild(infoSiswa);
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Gagal Load siswa.json", err));
}
function loadGallery(){
  fetch("photo.json")
  .then(res => res.json())
  .then(data =>{
    let container = document.getElementById("gallery");
    container.innerHTML = "";
    data.forEach(item =>{
      let div = document.createElement("div");
      div.style.backgroundImage = `url(img/${item.img}`;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Gagal Load photo.json", err));
}
loadGallery();
loadSiswa();