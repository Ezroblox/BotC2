document.getElementById("loveIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";ftAwal.style="opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(initengahan,300);setTimeout(inipesan,400)}}

  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:2vh";
    bodyblur.style="opacity:.6";
    wallpaper.style="transform: scale(1.5);";
  }
  
  async function mulainama() {
    bodyblur.style="opacity:.6";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,100);
    setTimeout(bqmuncul,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:10px";setTimeout(kethalo,200);}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function kethalo(){new TypeIt("#halo", {strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function(){halo.innerHTML = vketikhalo;setTimeout(mulaiketik1,200);},}).go();}

  function tombol(){Tombol.style="opacity:1;transform: scale(1);";Bn.style="";if(fungsi==2){Bn.style="display:none";By.innerHTML="&#128140; Click"}}
  
  document.getElementById("By").onclick = function() {
    if(fungsi==1){Tombol.style="";otomatis();setTimeout(aktipesan6,400);fungsi=0;} 
    if(fungsi==2){Tombol.style="";menuju();}
  }
  document.getElementById("Bn").onclick = async function() {
    if(fungsi==1){Tombol.style="";fthilang();await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});ftmuncul();tombol();}
  }
  
  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";}
  else{ucapan = "Selamat Malam, ";}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 100, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    aktiopsL();
  },}).go();
  }
  vketik1b=pesan0.innerHTML;
  function mulaiketik2(){
  halo.style="display:none";kalimat.innerHTML="";
  kalimat.classList.add("gaya3");
  new TypeIt("#kalimat", {
  strings: ["" + vketik1b], startDelay: 20, speed: 30, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    setTimeout(otomatis,500);setTimeout(aktipesan1,900);setTimeout(fthilang,500);ftganti=1;setTimeout(ftmuncul,800);
  },}).go();
  }
  
  opsLclick=0;opsLcheck=0;defopsL=opsL.innerHTML;
  document.getElementById("bq").onclick = function() {
    if(opsLclick==1){
      if(opsLcheck==1){halo.style="opacity:0";setTimeout(mulaiketik2,400);}
      if(opsLcheck==2){setTimeout(aktipesan4,400);}
      otomatis();opsL.style.opacity="0";opsLclick=0;
    }
  }
  function aktiopsL(){opsL.innerHTML=defopsL;opsL.style.opacity=".8";opsLclick=1;opsLcheck+=1;}
  function otomatis(){
    pesan3.style="transition:none";
    kalimat.style="opacity:0";
    setTimeout(otolanj,400)
  }
  function otolanj(){kalimat.style="opacity:1";}

  function aktipesan1(){
    kalimat.innerHTML=pesan1.innerHTML
      ;setTimeout(otomatis,1000);setTimeout(aktipesan2,1400);
  }
  
  vketik2=pesan2.innerHTML;
  function aktipesan2(){
  wallpaper.style="transform: scale(1.5);";
  kalimat.innerHTML="";kalimat.classList.remove("gaya3");
  new TypeIt("#kalimat", {
  strings: ["" + vketik2], startDelay: 20, speed: 40, cursor: true, deleteSpeed: 50, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    kalimat.innerHTML=vketik2;setTimeout(aktipesan3,400);
  },}).go();
  }
  vketik3=pesan3.innerHTML;pesan3.innerHTML="";
  function aktipesan3(){
  pesan3.style="position:relative;opacity:1;transform: scale(1)";
  wallpaper.style="transform: scale(1)";
  fthilang();ftganti=2;setTimeout(ftmuncul,250);
  new TypeIt("#pesan3", {
  strings: ["" + vketik3], startDelay: 100, speed: 40, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan3.innerHTML=vketik3;aktiopsL();
  },}).go();
  }
  
  function aktipesan4(){
    kalimat.classList.add("gaya3");
    wallpaper.style="transform: scale(1.5);";kalimat.innerHTML="Oh iya..";
    setTimeout(otomatis,800);setTimeout(aktipesan4l,1100);
  }
  function aktipesan4l(){
    wallpaper.style="transform: scale(1);";
    fthilang();ftganti=3;setTimeout(ftmuncul,250);kalimat.innerHTML=pesan4.innerHTML;
    kolombaru.style="position:relative;opacity:1;transform:scale(1);";
  }
  
  function aktipesan5(){
    fthilang();ftganti=4;setTimeout(ftmuncul,250);
    kolombaru.style="";
    wallpaper.style="transform: scale(1.5);";
    kalimat.innerHTML=pesan5.innerHTML;
    fungsi=1;setTimeout(tombol,400);
  }
  //Pemisah
  vketik6=pesan6.innerHTML;
  vketik7=pesan7.innerHTML;pesan7.innerHTML="";
  function aktipesan6(){
    wallpaper.style="transform: scale(1);";
    fthilang();ftganti=5;setTimeout(ftmuncul,250);
    setInterval(berjatuhan,200);
    kalimat.innerHTML=pesan6.innerHTML;
    setTimeout(aktipesan7,1000);
  }
  function aktipesan7(){
    wallpaper.style="transform: scale(1.5);";
    new TypeIt("#pesan7", {
      strings: ["" + vketik7], startDelay: 20, speed: 40, cursor: false, waitUntilVisible: true,
      afterComplete: function(){
        fungsi=2;setTimeout(tombol,100);
      },}).go();
  }

  document.getElementById("lv1").onclick = function() {lv1.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv2").onclick = function() {lv2.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv3").onclick = function() {lv3.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  
  var slov=0;function checkslov() {
    if(slov==3){
      kolombaru.style="position:relative;transform:scale(1)";
      otomatis();setTimeout(befaktipesan5,200);setTimeout(aktipesan5,400);
    }
  }
  function befaktipesan5(){kalimat.classList.remove("gaya3");kalimat.classList.add("gaya4");}