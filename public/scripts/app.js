/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */
 

// hard-coded data
var sampleAlbums = [{
  artistName: 'Ladyhawke',
  name: 'Ladyhawke',
  releaseDate: '2008, November 18',
  genres: [ 'new wave', 'indie rock', 'synth pop' ]
}, {
  artistName: 'The Knife',
  name: 'Silent Shout',
  releaseDate: '2006, February 17',
  genres: [ 'synth pop', 'electronica', 'experimental' ]
}, {
  artistName: 'Juno Reactor',
  name: 'Shango',
  releaseDate: '2000, October 9',
  genres: [ 'electronic', 'goa trance', 'tribal house' ]
}, {
  artistName: 'Philip Wesley',
  name: 'Dark Night of the Soul',
  releaseDate: '2008, September 12',
  genres: [ 'piano' ]
}];



$(document).ready(function() {
  console.log('app.js loaded!');
  //renderAlbum(sampleAlbums[0]);
  $.ajax({
    method:'GET',
    url: '/api/albums',
    success: onSuccess
  });
});

function onSuccess(albums){
  for (i = 0; i < albums.length; i++) {
    renderAlbum(albums[i]);
  }
};


// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

  var listOfAlbums = (`
    <div class='row'>
      <div class="col-md-3 col-xs-12 thumbnail album-art">
        <img src="images/800x800.png" alt="album image">
      </div>

      <div class="col-md-9 col-xs-12">
        <ul class="list-group">
          <li class="list-group-item">
            <h4 class='inline-header'>Album Name:</h4>
            <span class='album-name'>${album.name}</span>
          </li>

          <li class="list-group-item">
            <h4 class='inline-header'>Artist Name:</h4>
            <span class='artist-name'>${album.artistName}</span>
          </li>

          <li class="list-group-item">
            <h4 class='inline-header'>Released date:</h4>
            <span class='album-releaseDate'>${album.releaseDate}</span>
          </li>
        </ul>
      </div>

    </div>
  `);

  $('#albums').prepend(listOfAlbums);
};

