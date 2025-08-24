let songs = [
  {
    nameArtis: "The 1975",
    title: "About You",
    imgAlbum: "Cover-of-About-You-by-The-1975.jpg",
    imgBackground: "3a438da43eda8ad0e96f72b1927f51e5.jpg",
    audioSrc: "AboutYou-The1975.mp3",
    lyric: [
      {text: "I know a place", time: 45000},
      {text: "It's somewhere I go when I need to remember your face", time: 10000},
      {text: "We get married in our heads", time: 9800},
      {text: "Something to do while we try to recall how we met", time: 10000},
      {text: "Do you think I have forgotten?", time: 10000},
      {text: "Do you think I have forgotten?", time: 10000},
      ]
  },
  {
    nameArtis: "Aziz Hedra",
    title: "Somebody's Pleasure",
    imgAlbum: "Cover-of-Somebodys-Pleasure-by-Aziz-Hedra.jpg",
    imgBackground: "cd0d6541ebae99de8c5d6f000a6bcec0.jpg",
    audioSrc: "Somebody's-Pleasure-Aziz-Hedra.mp3",
    lyric: [
      {text: "I've been too busy, ignoring, and hiding", time: 7000},
      {text: "About what my heart actually say", time: 7000},
      {text: "Stay awake while I'm drowning on my thoughts", time: 10000},
      {text: "Sometimes a happiness is just a happiness", time: 6500},
      {text: "I've never been enjoyin' my serenity", time: 11000},
      {text: "Even if I've got a lot of company", time: 6000},
      {text: "That makes me happy", time: 5300},
      {text: "Soul try to figure it out", time: 3500},
      {text: "From where I've been escaping", time: 4000},
      {text: "Running to end all the sin", time: 4800},
      {text: "Get away from the pressure", time: 4300},
      {text: "Wondering to get a love that is so pure", time: 3600},
      {text: "Gotta have to always make sure", time: 8400},
      {text: "That I'm not just somebody's pleasure", time: 4000},
      ]
  },
  {
    nameArtis: "Rex Orange County",
    title: "Best Friend",
    imgAlbum: "Cover-of-Best-Friend-by-Rex-Orange-County.jpg",
    imgBackground: "background.jpg",
    audioSrc: "Best-Friend-Rex-Orange-County.mp3"
  },
];

let container = document.getElementById("container-box");
function loadAlbumList(songs) {
  container.innerHTML = "";
  songs.forEach(song => {
// Buat elemen utama
    let listAlbum = document.createElement("div");
    listAlbum.classList.add("listAlbum");
// Gambar album
    let imgAlbum = document.createElement("div");
    imgAlbum.classList.add("imgAlbum");
    imgAlbum.style.backgroundImage = `url(img/${song.imgAlbum})`;
// Info lagu
    let musicInfo = document.createElement("div");
    musicInfo.classList.add("musicInfo");
    let title = document.createElement("h1");
    title.textContent = song.title;
    let nameArtist = document.createElement("p");
    nameArtist.textContent = song.nameArtis;
// Susunan
    musicInfo.appendChild(title);
    musicInfo.appendChild(nameArtist);
    listAlbum.appendChild(imgAlbum);
    listAlbum.appendChild(musicInfo);
    container.appendChild(listAlbum);
// fungsi pindah halaman
listAlbum.addEventListener("click", ()=>{
  let ganti = document.getElementById("showMusic");
  ganti.style.backgroundImage=`url(img/${song.imgBackground})`;
  document.getElementById("judul").textContent= `- ${song.nameArtis} -`;
  // tampilan 2
    document.getElementById("albumDisplay").style.backgroundImage = `url(img/${song.imgAlbum})`;
    document.getElementById("nameArtist").textContent = `-${song.nameArtis}`;
    document.getElementById("title").textContent = `${song.title}`;
    // /tampilan 2
  ganti.classList.add("show");
  container.classList.add("hidden");
    let audio = new Audio(`audio/${song.audioSrc}`);
  setTimeout(()=>{
    audio.play();
    let totalTime = 0;
    document.getElementById("lyricDisplay").textContent= "...";
    song.lyric.forEach(line => {
      totalTime+=line.time;
      setTimeout(()=>{
        document.getElementById("lyricDisplay").textContent= `"${line.text}"`;
      },totalTime);
    });
  }, 1000); // delay
});
  });
}
loadAlbumList(songs);