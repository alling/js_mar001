$(function (){
	$('#click-btn').on('click', function(event) {
		console.log('ボタンがクリックされた');
		console.log('クリックされたボタンのIDは ' + $(this).attr('id'));
		console.log('eventオブジェクトからもIDは取れる ' + $(event.target).attr('id'));
	});
});
