// Lọc dự án theo trạng thái và tìm kiếm bài viết — không cần thư viện ngoài.
(function () {
  'use strict';

  // ---- Lọc dự án ----
  var filter = document.querySelector('[data-project-filter]');
  if (filter) {
    var buttons = filter.querySelectorAll('button[data-status]');
    var cards = document.querySelectorAll('[data-project-status]');
    filter.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-status]');
      if (!button) return;
      var status = button.getAttribute('data-status');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      cards.forEach(function (card) {
        var match = status === 'all' || card.getAttribute('data-project-status') === status;
        card.hidden = !match;
      });
    });
  }

  // ---- Tìm kiếm ----
  var results = document.querySelector('[data-search-results]');
  if (!results) return;

  var params = new URLSearchParams(window.location.search);
  var query = (params.get('q') || '').trim();
  var input = document.getElementById('tim-kiem-q');
  if (input) input.value = query;

  var status = document.querySelector('[data-search-status]');
  if (!query) {
    status.textContent = 'Nhập từ khóa để tìm bài viết.';
    return;
  }

  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd');
  }

  var terms = normalize(query).split(/\s+/).filter(Boolean);

  fetch(results.getAttribute('data-search-results'))
    .then(function (response) { return response.json(); })
    .then(function (posts) {
      var found = posts.filter(function (post) {
        var haystack = normalize(post.title + ' ' + post.text + ' ' + (post.tags || []).join(' '));
        return terms.every(function (term) { return haystack.indexOf(term) !== -1; });
      });

      status.textContent = found.length
        ? 'Tìm thấy ' + found.length + ' bài viết cho “' + query + '”.'
        : 'Không tìm thấy bài viết nào cho “' + query + '”. Thử từ khóa khác nhé.';

      found.forEach(function (post) {
        var li = document.createElement('li');
        li.className = 'bt-card bt-row';
        var body = document.createElement('div');
        body.className = 'bt-row__body';
        var h2 = document.createElement('h2');
        var a = document.createElement('a');
        a.href = post.url;
        a.textContent = post.title;
        h2.appendChild(a);
        var p = document.createElement('p');
        p.textContent = post.text.slice(0, 180) + (post.text.length > 180 ? '…' : '');
        var meta = document.createElement('span');
        meta.className = 'bt-meta';
        meta.textContent = post.date;
        body.appendChild(h2);
        body.appendChild(p);
        body.appendChild(meta);
        li.appendChild(body);
        results.appendChild(li);
      });
    })
    .catch(function () {
      status.textContent = 'Không tải được dữ liệu tìm kiếm. Vui lòng thử lại sau.';
    });
})();
