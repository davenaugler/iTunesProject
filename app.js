//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}
function drawSongs(songList) {
    console.log(songList);
    var template = '';
    var iTuneSongs = document.getElementById('songs')
    for (var i = 0; i < songList.length; i++) {
        var songs = songList[i]

        template +=   
        
        `<div class="container-fluid">
            <div class="row songCard">
                <div class="col-md-1">
                    <div class="songs">
                        <div class="img-container">

                            <img src="${songs.albumArt}" class = "img-responsive"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 artistSong">
                    <h3>${songs.artist}</h3>
                    <h4>${songs.title}</h4>
                </div>
                
                <div class="col-md-2 collectionSong">
                    <h3>${songs.collection}</h3>
                </div>
                <div class="col-md-1 priceSong">
                    <h3>$${songs.price}</h3>
                </div>
                <div class="col-md-4 myAudio">
                    <audio id="myAudio" controls>
                        <source src=${songs.preview} type="audio/mpeg">
                        <source src=${songs.preview} type="audio/m4a">
                    </audio>
                </div>
            </div>
        </div>`
                    
    }
    window.addEventListener("play", function(evt)
    {
         if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
    {
         window.$_currentlyPlaying.pause();
    } 
         window.$_currentlyPlaying = evt.target;
    }, true);
    iTuneSongs.innerHTML = template
    console.log(songList);
}

