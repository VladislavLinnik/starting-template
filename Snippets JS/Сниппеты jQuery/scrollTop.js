// ПЛАВНЫЙ СКРОЛЛ К ВЕРХУ СТРАНИЦЫ!!!

// Эти 4 строки кода позволят вашим посетителям плавно проскролить страницу
// к верху простым нажатием ссылки (с id #top) расположенной внизу страницы.
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});