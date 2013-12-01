$(function (){
	// ここはドキュメントの準備(ロード)が完了した時に呼ばれる

	// #regist-btn がクリックされた時に呼ばれる
	$('#regist-btn').on('click', function(event) {
		console.log('#click-btnのon clickイベントを登録');
		registClickEvent();
	});

	// #cancel-btn がクリックされた時に呼ばれる
	$('#cancel-btn').on('click', function(event) {
		console.log('#click-btnのon clickイベントをキャンセル');
		cancelClickEvent();
	});
});

// #click-btn をクリックした時の動作
function registClickEvent() {
	$('#click-btn').on('click', function(event) {
		console.log('ボタンがクリックされた');
		console.log('クリックされたボタンのIDは ' + $(this).attr('id'));
		console.log('eventオブジェクトからもIDは取れる ' + $(event.target).attr('id'));
	});
}

// #click-btn をクリックした時の動作の解除
function cancelClickEvent() {
	$('#click-btn').off('click');
}
