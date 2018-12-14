var loadApi = {
	init: function() {
		this.load();
	},

	load: function() {
		var $wrapper = $('.wrapper');
		var $button = $('.button');
		var $input = $('.input');
		var $pages = ['https://rickandmortyapi.com/api/character',
		'https://rickandmortyapi.com/api/character/?page=2',
		'https://rickandmortyapi.com/api/character/?page=3',
		'https://rickandmortyapi.com/api/character/?page=4',
		'https://rickandmortyapi.com/api/character/?page=5',
		'https://rickandmortyapi.com/api/character/?page=6',
		'https://rickandmortyapi.com/api/character/?page=7',
		'https://rickandmortyapi.com/api/character/?page=8',
		'https://rickandmortyapi.com/api/character/?page=9',
		'https://rickandmortyapi.com/api/character/?page=10',
		'https://rickandmortyapi.com/api/character/?page=11',
		'https://rickandmortyapi.com/api/character/?page=12',
		'https://rickandmortyapi.com/api/character/?page=13',
		'https://rickandmortyapi.com/api/character/?page=14',
		'https://rickandmortyapi.com/api/character/?page=15',
		'https://rickandmortyapi.com/api/character/?page=16',
		'https://rickandmortyapi.com/api/character/?page=17',
		'https://rickandmortyapi.com/api/character/?page=18',
		'https://rickandmortyapi.com/api/character/?page=19',
		'https://rickandmortyapi.com/api/character/?page=20',
		'https://rickandmortyapi.com/api/character/?page=21',
		'https://rickandmortyapi.com/api/character/?page=22',
		'https://rickandmortyapi.com/api/character/?page=23'];
		for(x = 0; x < $pages.length; x++) {
			$.ajax($pages[x], {
				dataType: 'json',
				context: loadApi,

				success: function(result) {
					
					$button.on('click', function(){

						for(i = 0;i < result.results.length; i++) {

							if($input.val() === result.results[i].name) {

								var $character = $('<div>'+ result.results[i].name +'</div>');
								var $characterImg = $('<img></img>');

								$characterImg.attr('src', result.results[i].image);
								$characterImg.addClass('characterImg');
								$character.addClass('character');
								$character.append($characterImg);
								$wrapper.prepend($character);

								var $characterInfo = {
									status: result.results[i].status,
									species: result.results[i].species,
									type: result.results[i].type,
									gender: result.results[i].gender,
									location: result.results[i].location.name,
									created: result.results[i].created
								}
								$.each($characterInfo, function(i, v){
									var $characterInfoItem = $('<div>' + i + ' : ' + v + '<div>');
									$characterInfoItem.addClass('characterInfoItem')
									$character.append($characterInfoItem);
								})
							} else if($input.val() === 'name list') {
								var $characterName = ('<div>' + result.results[i].name + ' | ' + '</div>');
								$wrapper.prepend($characterName)
							}
						}
					})		
				}
			})
		}
	}	
};

loadApi.init();
