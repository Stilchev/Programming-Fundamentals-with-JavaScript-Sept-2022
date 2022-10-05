function gramophone(band, album, song) {
    let rotations = Math.ceil(((Number(band.length) * Number(album.length)) * Number(song.length) / 2)/2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')