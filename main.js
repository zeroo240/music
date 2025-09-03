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
    imgBackground: "55c599214e84147e26a9b61759f2b373.jpg",
    audioSrc: "Somebody's-Pleasure-Aziz-Hedra.mp3",
    lyric: [
      {text: "I've been too busy, ignoring, and hiding", time: 7000},
      {text: "About what my heart actually say", time: 7001},
      {text: "Stay awake while I'm drowning on my thoughts", time: 9700},
      {text: "Sometimes a happiness is just a happiness", time: 6500},
      {text: "I've never been enjoyin' my serenity", time: 11500},
      {text: "Even if I've got a lot of company", time: 5300},
      {text: "That makes me happy", time: 5300},
      {text: "Soul try to figure it out", time: 3700},
      {text: "From where I've been escaping", time: 4000},
      {text: "Running to end all the sin", time: 4800},
      {text: "Get away from the pressure", time: 4300},
      {text: "Wondering to get a love that is so pure", time: 3600},
      {text: "Gotta have to always make sure", time: 8400},
      {text: "That I'm not just somebody's pleasure", time: 4000},
      {text: "I always pretending and lying", time: 4700},
      {text: "Like I'm used to feel empty", time: 6000},
      ]
  },
  {
    nameArtis: "Rex Orange County",
    title: "Best Friend",
    imgAlbum: "Cover-of-Best-Friend-by-Rex-Orange-County.jpg",
    imgBackground: "background.jpg",
    audioSrc: "Best-Friend-Rex-Orange-County.mp3"
  },
  {
    nameArtis: "Radiohead",
    title: "Let Down",
    imgAlbum: "Cover-of-Let-Down-by-Radiohead.jpg",
    imgBackground: "background.jpg",
    audioSrc: "Let-Down-Radiohead.mp3"
  },
];

let container = document.getElementById("container-box");
let ganti = document.getElementById("showMusic2");
let albumDisplay = document.getElementById("albumDisplay");
let nameArtistDisplay = document.getElementById("nameArtist");
let box = document.getElementById("lyricDisplay");
let titleDisplay = document.getElementById("title");
let backToHome = document.getElementById("back");

function loadAlbumList(songs) {
  container.innerHTML = "";
  songs.forEach(song => {
// Membuat element baru
    let listAlbum = document.createElement("div");
    let imgAlbum = document.createElement("div");
    let musicInfo = document.createElement("div");
    let title = document.createElement("h1");
    let nameArtist = document.createElement("p");
    
    listAlbum.classList.add("listAlbum");
    imgAlbum.classList.add("imgAlbum");
    imgAlbum.style.backgroundImage = `url(img/${song.imgAlbum})`;
    musicInfo.classList.add("musicInfo");
    title.textContent = song.title;
    nameArtist.textContent = song.nameArtis;
    
// Susunan
    musicInfo.appendChild(title);
    musicInfo.appendChild(nameArtist);
    listAlbum.appendChild(imgAlbum);
    listAlbum.appendChild(musicInfo);
    container.appendChild(listAlbum);
    
// fungsi pindah halaman
listAlbum.addEventListener("click", ()=>{
    albumDisplay.style.backgroundImage = `url(img/${song.imgAlbum})`;
    nameArtistDisplay.textContent = song.nameArtis;
    titleDisplay.textContent = song.title;
    // tampilan 2
  ganti.classList.add("show");
  container.classList.add("hidden");
  let audio = new Audio(`audio/${song.audioSrc}`);
  box.innerHTML="";
  ganti.style.backgroundImage = `url(img/${song.imgBackground})`;
  
      // main music
  setTimeout(()=>{
    audio.play();
    let totalTime = 0;
    song.lyric.forEach(line => {
      totalTime += line.time;
      let lyricDisplay = document.createElement("h1");
      box.appendChild(lyricDisplay);
      lyricDisplay.textContent = line.text;
      
      // ganti warna lirik
      setTimeout(()=>{
        lyricDisplay.style.color="#fff";
      },totalTime);
    });
  }, 100); // delay
  
  // fungsi tombol kembali
  backToHome.addEventListener("click", ()=>{
    audio.pause();
    box.innerHTML="";
    ganti.classList.remove("show");
    container.classList.remove("hidden");
  });
});
  });
}
loadAlbumList(songs);