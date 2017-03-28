//= __form/__form.js
cmt.showRegistrPage = () => {
  r.getRegistrPage().done(registrPage => {
    select.$main.html(registrPage);
    // Автофокус на первое поле
    $('#lastName').focus();
    // Добавляем маски
    addMasksAndStylesToFields();
  });
};