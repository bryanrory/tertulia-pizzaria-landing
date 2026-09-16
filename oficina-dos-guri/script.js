/* =========================================================
   Oficina Dos Guri — script.js (JS puro, sem dependências)
   ========================================================= */
(function () {
  'use strict';

  /* ------------------------------------------------------
     CONFIGURAÇÃO
     ------------------------------------------------------
     O contato acontece todo pelo direct do Instagram.
     Os links ficam escritos direto no index.html; para trocar
     o @, faça um localizar/substituir por:
     https://www.instagram.com/oficinadosguri.oficial/
  ------------------------------------------------------ */

  var $  = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  /* ---------- 1. Menu mobile ---------- */
  function menu() {
    var burger = $('#burger');
    var nav = $('#nav');
    if (!burger || !nav) return;

    function fechar() {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menu');
      document.body.classList.remove('is-locked');
    }
    function abrir() {
      nav.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Fechar menu');
      document.body.classList.add('is-locked');
    }

    burger.addEventListener('click', function () {
      nav.classList.contains('is-open') ? fechar() : abrir();
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fechar();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fechar();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) fechar();
    });
  }

  /* ---------- 2. Header ao rolar + link ativo ---------- */
  function header() {
    var head = $('.header');
    if (head) {
      var onScroll = function () {
        head.classList.toggle('is-stuck', window.scrollY > 8);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    var links = $$('.nav > a[href^="#"]');
    var secoes = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);
    if (!secoes.length || !('IntersectionObserver' in window)) return;

    var spy = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (ent) {
        if (!ent.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + ent.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    secoes.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 3. FAQ sanfona ---------- */
  function faq() {
    var itens = $$('.faq__item');
    if (!itens.length) return;

    function fechar(item) {
      item.classList.remove('is-open');
      $('.faq__q', item).setAttribute('aria-expanded', 'false');
      $('.faq__a', item).style.maxHeight = '';
    }
    function abrir(item) {
      var painel = $('.faq__a', item);
      item.classList.add('is-open');
      $('.faq__q', item).setAttribute('aria-expanded', 'true');
      painel.style.maxHeight = painel.scrollHeight + 'px';
    }

    itens.forEach(function (item) {
      $('.faq__q', item).addEventListener('click', function () {
        var aberto = item.classList.contains('is-open');
        itens.forEach(fechar);
        if (!aberto) abrir(item);
      });
    });

    window.addEventListener('resize', function () {
      itens.forEach(function (item) {
        if (item.classList.contains('is-open')) abrir(item);
      });
    });
  }

  /* ---------- 4. Filtro da galeria ---------- */
  function galeria() {
    var chips = $$('.filters .chip');
    var itens = $$('#gallery .shot');
    if (!chips.length || !itens.length) return;

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var alvo = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle('is-on', on);
          c.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        itens.forEach(function (item) {
          var mostra = alvo === 'tudo' || item.getAttribute('data-cat') === alvo;
          item.classList.toggle('is-hidden', !mostra);
        });
      });
    });
  }

  /* ---------- 5. Scroll reveal ---------- */
  function reveal() {
    var alvos = $$('[data-reveal]');
    if (!alvos.length) return;

    var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (semMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var mostrarTudo = function () {
      alvos.forEach(function (el) { el.classList.add('is-in'); });
    };

    try {
      var obs = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (ent, i) {
          if (!ent.isIntersecting) return;
          var el = ent.target;
          setTimeout(function () { el.classList.add('is-in'); }, i * 70);
          obs.unobserve(el);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      alvos.forEach(function (el) { obs.observe(el); });
    } catch (e) {
      mostrarTudo();
    }
  }

  /* ---------- 6. Ano no rodapé ---------- */
  function ano() {
    var el = $('#ano');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Boot ---------- */
  function init() {
    menu();
    header();
    faq();
    galeria();
    reveal();
    ano();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
