webpackJsonp(
    [0],
    [
      ,
      ,
      ,
      function (e, t, n) {
        var r = n(0),
          o = n(5);
        n(6);
        var i, a, s;
        o.Dispatcher.on("newPageReady", function (e, t, n, r) {
          s = r;
        });
        var l = {
          closeOverlays: function () {
            var e = this,
              t = o.Utils.deferred();
            return (
              Promise.all([e.closeModals()]).then(function () {
                Promise.all([e.closeFancybox()]).then(function () {
                  t.resolve();
                });
              }),
              t.promise
            );
          },
          closeFancybox: function () {
            var e = o.Utils.deferred();
            return (
              r.fancybox.getInstance()
                ? (r(document).one("afterClose.fb", function (t, n, r) {
                    e.resolve();
                  }),
                  r.fancybox.close(!0))
                : e.resolve(),
              e.promise
            );
          },
          closeModals: function () {
            var e = o.Utils.deferred();
            return (
              r(".modal.show").length
                ? ((hasFinished = !1),
                  r(".modal.show")
                    .one("hidden.bs.modal", function () {
                      e.resolve();
                    })
                    .modal("hide"))
                : e.resolve(),
              e.promise
            );
          },
          device: function () {
            if (!i) {
              this.customDetectDevice();
              var e = r("html").hasClass("mobile"),
                t = r("html").hasClass("tablet");
              i = { isMobile: e, isTablet: t, isDesktop: !e && !t };
            }
            return i;
          },
          customDetectDevice: function () {
            r("html").hasClass("desktop") &&
              "MacIntel" === navigator.platform &&
              navigator.maxTouchPoints > 1 &&
              r("html").removeClass("desktop").addClass("tablet");
          },
          canPlayVideo: function () {
            if (void 0 == a) {
              var e = document.createElement("video");
              a = !(
                !e.canPlayType || !e.canPlayType("video/mp4").replace(/no/, "")
              );
            }
            return a;
          },
          updateHeader: function () {
            var e = r(s);
            r(".MenuSimple-nav").html(e.find(".MenuSimple-nav").html()),
              (e = null);
          },
          updateBodyClass: function () {
            var e = s.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", s),
              t = r(e).filter("notbody").attr("class");
            r("body").attr("class", t);
          },
          setupNoBarbaLinks: function (e) {
            e.find('.js-openOverlay, .js-openMedia, a[href*=".pdf"]').addClass(
              "no-barba"
            );
          },
          fixVh: function () {
            function e(e) {
              var t = 0.01 * e;
              document.documentElement.style.setProperty("--vh", t + "px");
            }
            this.device().isDesktop ||
              (window.addEventListener("orientationchange", function () {
                setTimeout(function () {
                  e(window.innerHeight);
                }, 100);
              }),
              r(document).on("page-transitioning-out", function () {
                e(window.innerHeight);
              }),
              e(window.innerHeight));
          },
        };
        e.exports = l;
      },
      function (e, t, n) {
        var r, o;
        (r = [n(0)]),
          void 0 !==
            (o = function (e) {
              var t = [],
                r = function (n) {
                  e.each(t, function (t, r) {
                    var o = "js-" + r;
                    ($found = n.find("." + o)),
                      n.hasClass(o) && ($found = $found.add(n)),
                      $found.each(function () {
                        e(this)["js" + r]();
                      });
                  });
                },
                o = function (n) {
                  e.each(t, function (t, r) {
                    var o = "js-" + r;
                    ($found = n.find("." + o)),
                      n.hasClass(o) && ($found = $found.add(n)),
                      $found.each(function () {
                        var t = e(this).data(o);
                        t && t.destroy && t.destroy();
                      });
                  });
                };
              !(function (r) {
                var o = {},
                  i = {};
                e.each(r.keys(), function (e, t) {
                  var n = t.split("/"),
                    r = n.pop().replace(".js", "");
                  "theme" != n.pop() ? (o[r] = t) : (i[r] = t);
                }),
                  e.each(i, function (e, t) {
                    o[e] = t;
                  }),
                  e.each(o, function (r, o) {
                    if ("./index.js" != o) {
                      var i = n(46)("" + o),
                        a = "js" + i.name;
                      t.push(i.name), e.isFunction(e.fn[a]) || (e.fn[a] = i.fn);
                    }
                  });
              })(n(58)),
                (e.fn.initPlugins = function () {
                  return r(this), this;
                }),
                (e.fn.destroyPlugins = function () {
                  return o(this), this;
                }),
                e(document).ready(function () {
                  e("html").initPlugins();
                });
            }.apply(t, r)) && (e.exports = o);
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function (e, t, n) {
        var r = n(0),
          o = n(5);
        n(6);
        var i, a, s;
        o.Dispatcher.on("newPageReady", function (e, t, n, r) {
          s = r;
        });
        var l = {
          closeOverlays: function () {
            var e = this,
              t = o.Utils.deferred();
            return (
              Promise.all([e.closeModals()]).then(function () {
                Promise.all([e.closeFancybox()]).then(function () {
                  t.resolve();
                });
              }),
              t.promise
            );
          },
          closeFancybox: function () {
            var e = o.Utils.deferred();
            return (
              r.fancybox.getInstance()
                ? (r(document).one("afterClose.fb", function (t, n, r) {
                    e.resolve();
                  }),
                  r.fancybox.close(!0))
                : e.resolve(),
              e.promise
            );
          },
          closeModals: function () {
            var e = o.Utils.deferred();
            return (
              r(".modal.show").length
                ? ((hasFinished = !1),
                  r(".modal.show")
                    .one("hidden.bs.modal", function () {
                      e.resolve();
                    })
                    .modal("hide"))
                : e.resolve(),
              e.promise
            );
          },
          device: function () {
            if (!i) {
              this.customDetectDevice();
              var e = r("html").hasClass("mobile"),
                t = r("html").hasClass("tablet");
              i = { isMobile: e, isTablet: t, isDesktop: !e && !t };
            }
            return i;
          },
          customDetectDevice: function () {
            r("html").hasClass("desktop") &&
              "MacIntel" === navigator.platform &&
              navigator.maxTouchPoints > 1 &&
              r("html").removeClass("desktop").addClass("tablet");
          },
          canPlayVideo: function () {
            if (void 0 == a) {
              var e = document.createElement("video");
              a = !(
                !e.canPlayType || !e.canPlayType("video/mp4").replace(/no/, "")
              );
            }
            return a;
          },
          updateHeader: function () {
            var e = r(s);
            r(".MenuSimple-nav").html(e.find(".MenuSimple-nav").html()),
              (e = null);
          },
          updateBodyClass: function () {
            var e = s.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", s),
              t = r(e).filter("notbody").attr("class");
            r("body").attr("class", t);
          },
          setupNoBarbaLinks: function (e) {
            e.find('.js-openOverlay, .js-openMedia, a[href*=".pdf"]').addClass(
              "no-barba"
            );
          },
          fixVh: function () {
            function e(e) {
              var t = 0.01 * e;
              document.documentElement.style.setProperty("--vh", t + "px");
            }
            this.device().isDesktop ||
              (window.addEventListener("orientationchange", function () {
                setTimeout(function () {
                  e(window.innerHeight);
                }, 100);
              }),
              r(document).on("page-transitioning-out", function () {
                e(window.innerHeight);
              }),
              e(window.innerHeight));
          },
        };
        e.exports = l;
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(11), n(38);
              var r = "accordion";
              return {
                name: r,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e),
                      s.find("[data-accordion-toggle]").on("click", o),
                      s.find("[data-accordion-toggle]").on("keypress", n),
                      s
                        .find("[data-accordion-content]")
                        .on("shown.bs.collapse hidden.bs.collapse", function () {
                          window.scrollbars && window.scrollbars.update();
                        });
                  }
                  function n(e) {
                    13 == e.which && (e.preventDefault(), i(t(this)));
                  }
                  function o(e) {
                    e.preventDefault(), i(t(this));
                  }
                  function i(e) {
                    var t = e
                      .closest("[data-accordion-container]")
                      .find("[data-accordion-content]");
                    t.hasClass("collapsing") ||
                      (e.toggleClass("is-open"),
                      t.collapse("toggle"),
                      (t = null));
                  }
                  function a() {
                    t(document).off("page-transitioning-end page-ready", e),
                      s.find("[data-accordion-toggle]").off("click keypress", o),
                      s
                        .find("[data-accordion-content]")
                        .off("shown.bs.collapse hidden.bs.collapse"),
                      s.find("[data-accordion-content]").each(function () {
                        void 0 != t(this).data("bs.collapse") &&
                          t(this).collapse("dispose");
                      });
                  }
                  var s = t(this);
                  return (
                    (s.destroy = function () {
                      a();
                    }),
                    (function () {
                      s.data("__" + r) ||
                        (s.data("__" + r, !0),
                        s.data("js-" + r, s),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = "actionBar";
              return {
                name: r,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e),
                      t(document).on("scrollbar-call", n);
                  }
                  function n(e, t) {
                    "PageHeaderEventSplit" == t.value && o("exit" == t.way),
                      "SiteFooter" == t.value && o("exit" == t.way);
                  }
                  function o(e) {
                    e ? a.addClass("is-active") : a.removeClass("is-active");
                  }
                  function i() {
                    t(document).off("page-transitioning-end page-ready", e),
                      t(document).off("scrollbar-call", n);
                  }
                  var a = t(this);
                  t("html");
                  return (
                    (a.destroy = function () {
                      i();
                    }),
                    (function () {
                      a.data("__" + r) ||
                        (a.data("__" + r, !0),
                        a.data("js-" + r, a),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(7),
                o = "bannerSlides";
              return {
                name: o,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e),
                      (s.$dom = {
                        link: s.find("[data-banner-slides-link]"),
                        figure: s.find("[data-banner-slides-figure]"),
                      }),
                      s.$dom.figure.first().addClass("is-active"),
                      s.$dom.link.on("mouseenter", n).on("mouseleave", i),
                      (s.imagesSwiper = new r(
                        s.find("[data-bannerSlides-images]").get(0),
                        { slidesPerView: "auto" }
                      ));
                  }
                  function n(e) {
                    s.$dom.figure.eq(t(this).index()).addClass("is-active");
                  }
                  function i(e) {
                    s.$dom.figure.removeClass("is-active"),
                      s.$dom.figure.first().addClass("is-active");
                  }
                  function a() {
                    t(document).off("page-transitioning-end page-ready", e),
                      s.$dom &&
                        (s.$dom.link.off("mouseenter", n).off("mouseleave", i),
                        (s.$dom = null)),
                      s.imagesSwiper && s.imagesSwiper.destroy();
                  }
                  var s = t(this);
                  return (
                    (s.destroy = function () {
                      a();
                    }),
                    (function () {
                      s.data("__" + o) ||
                        (s.data("__" + o, !0),
                        s.data("js-" + o, s),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // CALENDAR
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(47);
              var r = "calendar";
              return {
                name: r,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e);
                    var n = o.get(0);
                    (o.calendar = new FullCalendar.Calendar(n, {
                      displayEventTime: !1,
                      eventDisplay: "block",
                      // EVENTS LIST
                      events: [
                        {
                          title: "Explore Mushroom Dye 1PM-3PM",
                          start: "2022-12-11T13:00:00",
                          end: "2022-12-11T15:00:00",
                          url: 'https://cascademyco.org/2022/10/mountain-rose-sunday-series-mushroom-dye/',
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "Clay Mushroom Class 1PM-3PM",
                          start: "2022-11-20T13:00:00",
                          end: "2022-11-20T15:00:00",
                          url: 'https://cascademyco.org/2022/09/mountain-rose-sunday-series-clay-mushroom-class/',
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "Topical Herbcrafting: The Art of Making Herbal Infused Creams 1PM-3PM",
                          start: "2022-11-13T13:00:00",
                          end: "2022-11-13T15:00:00",
                          url: 'https://events.scenethink.com/topical-herbcrafting-the-art-of-making-herbal-infused-creams-nov-13-2022',
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "Wreath Making with Non-timber Forest Products 1PM-3PM",
                          start: "2022-11-06T13:00:00",
                          end: "2022-11-06T15:00:00",
                          url: 'https://extension.oregonstate.edu/lane/events/wreath-making-non-timber-forest-products',
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "HWBEugene Presemts: Fire Cider! 1PM-3PM",
                          start: "2022-10-30T13:00:00",
                          end: "2022-10-30T15:00:00",
                          url: 'https://events.scenethink.com/fire-cider-oct-30-2022',
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "1PM Organic Marketing 101",
                          start: "2022-10-23T13:00:00",
                          end: "2022-10-23T15:00:00",
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-10-19T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-10-26T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-11-02T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-11-09T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-11-16T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-11-30T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          groupId: '999',
                          title: '3PM Native Plant Immersion Program',
                          start: '2022-12-07T14:00:00',
                          color: "rgba(48, 61, 70, 0.7)"
                        },
                        {
                          title: "1PM Intro to Plant Meditation & Plant Spirit Meditation",
                          start: "2022-10-16T13:00:00",
                          end: "2022-10-16T15:00:00",
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "1PM Discover Fungi with The Cascade Mycological Society",
                          start: "2022-10-09T13:00:00",
                          end: "2022-10-09T15:00:00",
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "1PM Botanical Selfcare Workshop",
                          start: "2022-10-02T13:00:00",
                          end: "2022-02-09T15:00:00",
                          color: "rgba(136, 105, 48, 0.7)"
                        },
                        {
                          title: "1PM Moon Magic for Earthlings",
                          start: "2022-10-01T13:00:00",
                          end: "2022-10-01T15:00:00",
                          url: 'https://www.facebook.com/events/1273919456733855',
                          color: "rgba(191, 175, 164, 0.7)"
                        },
                        {
                          title: "10AM-3PM Private Event",
                          start: "2022-11-17T10:00:00",
                          end: "2022-11-17T15:00:00",
                          color: "rgba(84, 38, 22, 0.7)"
                        }
                        // ,
                        // {
                        //   title: 'Click for Google',
                        //   url: 'http://google.com/',
                        //   start: '2022-08-28'
                        // }
                      ],
                      headerToolbar: {
                        start: "title",
                        center: "",
                        end: "today prev,next",
                      },
                      height: window.innerWidth < 768 ? "auto" : "80vh",
                      initialView:
                        window.innerWidth < 768 ? "listMonth" : "dayGridMonth",
                      locale: t("html").attr("lang"),
                      views: { listMonth: {} },
                      windowResize: function (e) {
                        window.innerWidth < 768
                          ? (this.setOption("height", "auto"),
                            this.changeView("listMonth"))
                          : (this.setOption("height", "80vh"),
                            this.changeView("dayGridMonth")),
                          window.scrollbar && window.scrollbar.update();
                      },
                    })),
                      o.calendar.render(),
                      window.scrollbar && window.scrollbar.update();
                  }
                  function n() {
                    t(document).off("page-transitioning-end page-ready", e),
                      o.calendar && o.calendar.destroy();
                  }
                  var o = t(this);
                  return (
                    (o.destroy = function () {
                      n();
                    }),
                    (function () {
                      o.data("__" + r) ||
                        (o.data("__" + r, !0),
                        o.data("js-" + r, o),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = "form";
              return {
                name: r,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-ending page-ready", e),
                      u
                        .find('input[type="text"], input[type="email"], textarea')
                        .on("focus", n),
                      u
                        .find('input[type="text"], input[type="email"], textarea')
                        .on("blur", o),
                      u
                        .find(
                          'input[type="text"], input[type="email"], textarea, select'
                        )
                        .on("change", i),
                      u.find(":input").trigger("change"),
                      u
                        .find("textarea")
                        .each(function () {
                          this.setAttribute(
                            "style",
                            "height:" +
                              this.scrollHeight +
                              "px;overflow-y:hidden;"
                          );
                        })
                        .on("input", a),
                      u.find(":input").on("invalid", s);
                  }
                  function n() {
                    t(this).addClass("has-focus");
                  }
                  function o() {
                    t(this).removeClass("has-focus");
                  }
                  function i() {
                    var e = t(this);
                    "" != e.val()
                      ? e.addClass("has-value")
                      : e.removeClass("has-value");
                  }
                  function a() {
                    var e = this.style.height;
                    (this.style.height = "auto"),
                      (this.style.height = this.scrollHeight + "px"),
                      this.style.height != e &&
                        window.scrollbar &&
                        window.scrollbar.update();
                  }
                  function s() {
                    t(this).addClass("has-validate");
                  }
                  function l() {
                    t(document).off("page-transitioning-ending page-ready", e),
                      u.find(":input").off();
                  }
                  var u = t(this);
                  return (
                    (u.initialized = !1),
                    (u.destroy = function () {
                      l();
                    }),
                    (function () {
                      u.data("__" + r) ||
                        (u.data("__" + r, !0),
                        t(document).one(
                          "page-transitioning-ending page-ready",
                          e
                        ));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // FORM BUILDER
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(39), n(40);
              var r = n(49),
                o = n(1),
                i = (n(50), n(12)),
                a = "formBuilder";
              return {
                name: a,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e), n();
                  }
                  function n() {
                    l(),
                      p(),
                      h(),
                      g(),
                      w.find("form").on("submit", m),
                      w.find("input, textarea, select").on("invalid", v);
                  }
                  function s() {
                    w.find("form").off("submit", m),
                      w.find(":input").off(),
                      w.find("select").selectpicker("destroy"),
                      r.destroy();
                  }
                  function l() {
                    w
                      .find('input[type="text"], input[type="email"], textarea')
                      .on("focus", u),
                      w
                        .find('input[type="text"], input[type="email"], textarea')
                        .on("blur", c),
                      w
                        .find(
                          'input[type="text"], input[type="email"], input[type="file"], textarea, select'
                        )
                        .on("change", d),
                      w.find(":input").trigger("change"),
                      w
                        .find("textarea")
                        .each(function () {
                          this.setAttribute(
                            "style",
                            "height:" +
                              this.scrollHeight +
                              "px;overflow-y:hidden;"
                          );
                        })
                        .on("input", f),
                      w.find(":input").on("invalid", v);
                  }
                  function u() {
                    t(this).closest(".Inputfield").addClass("has-focus");
                  }
                  function c() {
                    t(this).closest(".Inputfield").removeClass("has-focus");
                  }
                  function d() {
                    var e = t(this);
                    "" != e.val()
                      ? e.closest(".Inputfield").addClass("has-value")
                      : e.closest(".Inputfield").removeClass("has-value");
                  }
                  function f() {
                    var e = this.style.height;
                    (this.style.height = "auto"),
                      (this.style.height = this.scrollHeight + "px"),
                      this.style.height != e &&
                        window.scrollbar &&
                        window.scrollbar.update();
                  }
                  function p() {
                    w.find(
                      ".InputfieldCheckbox, .InputfieldCheckboxes, .InputfieldRadios"
                    ).each(function () {
                      t(this)
                        .find(".InputfieldContent label")
                        .each(function () {
                          var e = t(this),
                            n = e.find("input"),
                            r = n.attr("type"),
                            o = n.attr("id");
                          e
                            .wrap(
                              '<div class="custom-control custom-' +
                                r +
                                '"></div>'
                            )
                            .addClass("custom-control-label")
                            .attr("for", o),
                            n
                              .addClass("custom-control-input")
                              .prependTo(e.parent()),
                            (e = null),
                            (n = null),
                            (o = null);
                        });
                    });
                  }
                  function h() {
                    w.find('input[type="file"]').each(function () {
                      var e = t(this),
                        n = e.attr("id");
                      e.addClass("custom-file-input")
                        .after(
                          '<label class="custom-file-label" for="' +
                            n +
                            '"></label>'
                        )
                        .parent()
                        .wrapInner('<div class="custom-file"></div>');
                    }),
                      r.destroy(),
                      r.init();
                  }
                  function g() {
                    w.find("select").selectpicker({
                      mobile: !i.device().isDesktop,
                      noneSelectedText: "",
                    });
                  }
                  function v(e) {
                    var n = b(),
                      r = w.find(":invalid:not(fieldset)").first();
                    if (r.length > 0)
                      if (window.scrollbar)
                        window.scrollbar.scrollTo(r.get(0), {
                          offset: -n,
                          duration: 0,
                        });
                      else {
                        var o = r.offset().top - n,
                          i = window.pageYOffset - n;
                        if (o > i && o < i + window.innerHeight) return !0;
                        t("html,body").scrollTop(o);
                      }
                  }
                  function m(e) {
                    if ((e.preventDefault(), !w.loading)) {
                      (w.loading = !0),
                        w.find('button[type="submit"]').addClass("is-loading");
                      var n = w.find("form"),
                        r = n.find('button[type="submit"]').first();
                      n.append(
                        '<input type="hidden" name="' +
                          r.attr("name") +
                          '" value="' +
                          r.attr("value") +
                          '">'
                      );
                      var o = "multipart/form-data" == n.attr("enctype"),
                        i = o ? new FormData(n.get(0)) : n.serialize(),
                        a = {
                          url: n.attr("action"),
                          method: n.attr("method"),
                          data: i,
                          success: y,
                          withCredentials: !0,
                        };
                      o && ((a.processData = !1), (a.contentType = !1)),
                        t.ajax(a);
                    }
                  }
                  function y(e, r, i) {
                    s();
                    var a = w.find("form").attr("name"),
                      l = t(e).find(".FormBuilder-" + a);
                    if (
                      (w.find(".FormBuilder-" + a).html(l.html()),
                      n(),
                      window.scrollbar)
                    )
                      window.scrollbar.update(),
                        window.scrollbar.scrollTo(w.get(0), {
                          offset: -b(),
                          duration: 800,
                        });
                    else {
                      var u = w.offset().top - b();
                      window.pageYOffset > u &&
                        o.to(window, 0.8, {
                          scrollTo: { y: u, autoKill: !1 },
                          ease: Power2.easeInOut,
                        });
                    }
                    w.loading = !1;
                  }
                  function b() {
                    return t(".SiteHeader").height() + 50;
                  }
                  function C() {
                    t(document).off("page-transitioning-end page-ready", e), s();
                  }
                  var w = t(this);
                  return (
                    (w.destroy = function () {
                      C();
                    }),
                    (function () {
                      w.data("__" + a) ||
                        (w.data("__" + a, !0),
                        w.data("js-" + a, w),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(6);
              var r = (n(41), n(7)),
                o = (n(3), "gallery");
              return {
                name: o,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e);
                    s.find("[data-gallery-images] .swiper-slide").length;
                    (s.dom = {}),
                      (s.dom.$gallery = s.find("[data-gallery-images]")),
                      (s.imagesSwiper = new r(s.dom.$gallery.get(0), {
                        slidesPerView: "auto",
                        freeMode: !0,
                        shortSwipes: !1,
                        threshold: 5,
                        on: {
                          init: function () {
                            s.find("[data-gallery-image]").addClass("lazyload");
                          },
                          resize: function () {
                            i(), this.update();
                          },
                        },
                      })),
                      s.find("a").on("click", n);
                  }
                  function n(e) {
                    e.preventDefault();
                    var n = t(this).closest(".swiper-slide").index(),
                      r = [];
                    s.find("a").each(function () {
                      var e = t(this);
                      r.push({
                        src: e.attr("href"),
                        opts: {
                          caption: t.trim(e.parent().find("figcaption").html()),
                          width: e.data("width"),
                          height: e.data("height"),
                          srcset: e.data("srcset"),
                          transitionEffect: "slide",
                        },
                      });
                    }),
                      t.fancybox.open(
                        r,
                        {
                          beforeClose: function (e, t) {
                            s.imagesSwiper.slideTo(e.currIndex, 0);
                          },
                        },
                        n
                      );
                  }
                  function i() {
                    var e = window.innerWidth,
                      n = e * (e < 768 ? 0.45 : 0.25);
                    (maxTargetSize = 300 + 0.1 * e),
                      (n = n > maxTargetSize ? maxTargetSize : n),
                      s.find("[data-gallery-image-container]").each(function () {
                        var e,
                          r,
                          o = t(this),
                          i = o.data("width") / o.data("height");
                        i < 0.8
                          ? ((r = 1.4 * n), (e = r * i))
                          : ((r = n), (e = r * i)),
                          o.height(Math.round(r)).width(Math.round(e));
                      });
                  }
                  function a() {
                    t(document).off("page-transitioning-end page-ready", e),
                      s.find("a").off("click", n),
                      s.imagesSwiper && s.imagesSwiper.destroy(),
                      (s.dom = null);
                  }
                  var s = t(this);
                  t("html");
                  return (
                    (s.destroy = function () {
                      a();
                    }),
                    (function () {
                      s.data("__" + o) ||
                        (s.data("__" + o, !0),
                        s.data("js-" + o, s),
                        i(),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = (n(3), "headline");
              return {
                name: r,
                fn: function () {
                  function e() {
                    var e = "",
                      t = o
                        .find("[data-headline-content] h1")
                        .html()
                        .split("<br>"),
                      n = o
                        .find("[data-headline-content] p")
                        .html()
                        .split("<br>"),
                      r = Math.max(t.length, n.length);
                    e += '<div class="row" aria-hidden="true">';
                    for (var i = -1, a = 0; a < r; a++)
                      (e += '<div class="col-12" data-scroll>'),
                        t[a] &&
                          (e +=
                            '<h1 data-scroll data-scroll-speed="' +
                            i +
                            '" data-scroll-direction="horizontal" >' +
                            t[a] +
                            "</h1>"),
                        n[a] &&
                          (e +=
                            '<p data-scroll data-scroll-speed="' +
                            i +
                            '" data-scroll-direction="horizontal">' +
                            n[a] +
                            "</p>"),
                        (e += "</div>"),
                        (i *= -1);
                    (e += "</div>"), o.find("[data-headline-content]").append(e);
                  }
                  function n() {
                    t(document).off("before-scrollbar-init", e);
                  }
                  var o = t(this);
                  t("html");
                  return (
                    (o.destroy = function () {
                      n();
                    }),
                    (function () {
                      o.data("__" + r) ||
                        (o.data("__" + r, !0),
                        o.data("js-" + r, o),
                        t(document).on("before-scrollbar-init", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // HP SLIDER
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(6);
              var r = (n(41), n(7)),
                o = n(3),
                i = n(1),
                a = (n(8), n(9), "hpSlider");
              return {
                name: a,
                fn: function () {
                  function e() {
                    if (
                      (t(document).off("page-transitioning-end page-ready", e),
                      p.find("[data-hpslider-gallery] .swiper-slide").length < 2)
                    )
                      return (
                        p.find("[data-video-src]").addClass("js-videoBg"),
                        p.find("[data-bgset]").addClass("lazyload lazypreload"),
                        p.find(".swiper-slide").addClass("swiper-slide-active"),
                        void p.initPlugins()
                      );
                    p.addClass("has-slides"),
                      (p.autoplay = !0),
                      (p.swiper = new r(
                        p.find("[data-hpslider-gallery]").get(0),
                        {
                          spaceBetween: 0,
                          loop: !0,
                          simulateTouch: !1,
                          effect: o.device().isDesktop ? "fade" : "slide",
                          speed: o.device().isDesktop ? 1e3 : 600,
                          fadeEffect: { crossFade: !0 },
                          on: {
                            init: function () {
                              p
                                .find(".HpSlider-wrapperMedia")
                                .addClass("js-lazyload"),
                                p.find("[data-video-src]").addClass("js-videoBg"),
                                p.initPlugins(),
                                l(this);
                            },
                            slideChange: function (e) {
                              p.autoplay ? l(this) : d(this);
                            },
                            sliderMove: function () {
                              u();
                            },
                            touchEnd: function () {
                              d(this);
                            },
                          },
                        }
                      )),
                      t("[data-hpslider-nav]").on("click", n);
                  }
                  function n(e) {
                    var n = t(this).index();
                    u(), p.swiper.slideToLoop(n);
                  }
                  function s(e) {
                    var t = e.activeIndex,
                      n = e.slides.length;
                    return t >= n - 1 && (t = 1), 0 == t && (t = n - 2), t;
                  }
                  function l(e) {
                    var n = s(e);
                    c();
                    var r = t(
                      "[data-hpslider-nav]:nth-child(" +
                        n +
                        ") [data-hpslider-progress]"
                    );
                    i.set(r, { transformOrigin: "0 0" }),
                      new i.to(r, 6, {
                        scaleX: 1,
                        ease: Power0.easeNone,
                        onComplete: function () {
                          e.slideNext();
                        },
                      }),
                      (r = null);
                  }
                  function u() {
                    p.autoplay = !1;
                    var e = t("[data-hpslider-progress]");
                    i.killTweensOf(e), (e = null);
                  }
                  function c() {
                    var e = t("[data-hpslider-progress]");
                    i.set(e, { transformOrigin: "100% 0" }),
                      new i.to(e, 0.6, { scaleX: 0, ease: Power3.easeOut }),
                      (e = null);
                  }
                  function d(e) {
                    c();
                    var n = s(e),
                      r = t(
                        "[data-hpslider-nav]:nth-child(" +
                          n +
                          ") [data-hpslider-progress]"
                      );
                    i.set(r, { transformOrigin: "0 0" }),
                      new i.to(r, 0.6, { scaleX: 1, ease: Power2.easeOut }),
                      (r = null);
                  }
                  function f() {
                    t(document).off("page-transitioning-end page-ready", e),
                      p.swiper &&
                        (i.killTweensOf(t("[data-hpslider-progress]")),
                        t("[data-hpslider-nav]").off("click", n),
                        p.swiper.destroy()),
                      (p.dom = null);
                  }
                  var p = t(this);
                  t("html");
                  return (
                    (p.destroy = function () {
                      f();
                    }),
                    (function () {
                      p.data("__" + a) ||
                        (p.data("__" + a, !0),
                        p.data("js-" + a, p),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = "lazyload";
              return {
                name: r,
                fn: function () {
                  function e(e) {
                    i.loadedImages++,
                      i.totalImages == i.loadedImages && i.addClass("lazyloaded");
                  }
                  function n() {
                    (i.$lazyBackgrounds = i.find("[data-bgset]:not(.lazyload)")),
                      (i.$lazyImages = i
                        .find(
                          "[data-srcset]:not(.lazyload), [data-src]:not(.lazyload)"
                        )
                        .not("a[data-fancybox]")),
                      (i.totalImages =
                        i.$lazyBackgrounds.length + i.$lazyImages.length),
                      (i.loadedImages = 0),
                      i.$lazyBackgrounds
                        .on("_lazyloaded", e)
                        .addClass("lazyload"),
                      i.$lazyImages.on("lazyloaded", e).addClass("lazyload");
                  }
                  function o() {
                    t(document).off("page-transitioning-ending page-ready", n),
                      i.$lazyBackgrounds.off("_lazyloaded", e),
                      i.$lazyImages.off("lazyloaded", e);
                  }
                  var i = t(this);
                  return (
                    (i.destroy = function () {
                      o();
                    }),
                    (function () {
                      i.data("__" + r) ||
                        (i.data("__" + r, !0),
                        i.data("js-" + r, i),
                        i.data("load-immediate")
                          ? n()
                          : t(document).one(
                              "page-transitioning-ending page-ready",
                              n
                            ));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // SCROLL
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(12),
                o = n(51),
                i = (n(24), n(25)),
                a = "main";
              return {
                name: a,
                fn: function () {
                  function e() {
                    t(document).off("page-ready page-transitioning-ending", e),
                      t(document).trigger("before-scrollbar-init"),
                      (f.ls = new o({
                        el: f.get(0),
                        smooth:
                          r.device().isDesktop &&
                          -1 == navigator.userAgent.indexOf("Firefox"),
                        scrollFromAnywhere: !0,
                        getSpeed: !0,
                        getDirection: !0,
                        resetNativeScroll: !1,
                      })),
                      t(document).trigger("scrollbar-init", f.ls),
                      f.ls.on("scroll", n);
                    var a = i.releaseScroll();
                    a && 0 != a && f.ls.scrollTo(a, { duration: 1 }),
                      f.ls.on("call", function (e, n, r) {
                        t(document).trigger("scrollbar-call", {
                          way: n,
                          value: e,
                        });
                      }),
                      f.find("a").on("click", l),
                      t(window).on("resize orientationchange", s),
                      t(document).on("menu-is-opening story-open", u),
                      t(document).on("menu-is-closing story-close", c),
                      (window.scrollbar = f.ls),
                      n(f.ls.scroll.instance);
                  }
                  function n(e) {
                    f.raf = window.requestAnimationFrame(function () {
                      var n = e,
                        r = n.limit - n.scroll.y;
                      (r -= n.delta ? 0 : scroll.windowHeight),
                        n.scroll.y > 20
                          ? t("html").addClass("has-scrolled")
                          : t("html").removeClass("has-scrolled"),
                        r < 30
                          ? t("html").addClass("has-scrolled-bottom")
                          : t("html").removeClass("has-scrolled-bottom"),
                        "up" == n.direction
                          ? t("html").removeClass("is-scrolling-down")
                          : t("html").addClass("is-scrolling-down");
                    });
                  }
                  function s() {
                    void 0 == f.resizeTimeout &&
                      (f.resizeTimeout = setTimeout(function () {
                        f.ls.update(),
                          n(f.ls.scroll.instance),
                          clearTimeout(f.resizeTimeout),
                          (f.resizeTimeout = void 0);
                      }, 1e3));
                  }
                  function l(e) {
                    if (void 0 == t(this).attr("data-fancybox")) {
                      var n = t(this).attr("href");
                      if (
                        0 == n.indexOf("#") &&
                        n.length > 1 &&
                        t(n).length > 0
                      ) {
                        e.preventDefault();
                        var r = -1 * t(".SiteHeader-container").height();
                        f.ls.scrollTo(t(n).get(0), { offset: r });
                      }
                    }
                  }
                  function u() {
                    f.ls.stop();
                  }
                  function c() {
                    f.ls.start();
                  }
                  function d() {
                    t(document).off("page-ready page-transitioning-ending", e),
                      t(window).off("resize orientationchange", s),
                      t(document).off("menu-is-opening", u),
                      t(document).off("menu-is-closing", c),
                      f.find("a").off("click", l),
                      void 0 != f.ls &&
                        (t(document).trigger("scrollbar-destroy", f.ls),
                        f.ls.destroy()),
                      (window.scrollbar = null),
                      void 0 != f.resizeTimeout && clearTimeout(f.resizeTimeout),
                      void 0 != f.raf && window.cancelAnimationFrame(f.raf);
                  }
                  var f = t(this);
                  return (
                    (f.destroy = function () {
                      d();
                    }),
                    (function () {
                      f.data("__" + a) ||
                        (f.data("__" + a, !0),
                        f.data("js-" + a, f),
                        t(document).on(
                          "page-ready page-transitioning-ending",
                          e
                        ));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      ,
      function (e, t, n) {
        var r = n(5);
        window.scroller = { popstate: !1, last: 0, prevent: !1, history: [] };
        var o = {
          init: function () {
            "scrollRestoration" in history &&
              (history.scrollRestoration = "manual"),
              this.bindEvents();
          },
          bindEvents: function () {
            window.addEventListener("popstate", this.onStateChange.bind(this)),
              window.addEventListener("scroll", this.onScroll.bind(this)),
              r.Dispatcher.on(
                "transitionCompleted",
                this.onTransitionCompleted.bind(this)
              ),
              r.Dispatcher.on("linkClicked", this.onLinkClicked.bind(this));
          },
          onStateChange: function () {
            window.scroller.popstate = !0;
          },
          onTransitionCompleted: function () {
            window.scroller.popstate = !1;
          },
          onLinkClicked: function () {
            var e = r.Utils.getCurrentUrl();
            window.scroller.history[e] = this.getScrollY();
          },
          onScroll: function (e) {
            "manual" != history.scrollRestoration &&
              window.scroller.prevent &&
              (e.preventDefault(),
              e.stopPropagation(),
              window.scrollTo(0, window.scroller.last));
          },
          holdScroll: function () {
            "manual" != history.scrollRestoration &&
              ((window.scroller.prevent = !0),
              (window.scroller.last = this.getScrollY()));
          },
          releaseScroll: function () {
            var e = window.scroller.popstate
              ? window.scroller.history[r.Utils.getCurrentUrl()]
              : 0;
            return (
              (window.scroller.prevent = !1),
              (window.scroller.last = !1),
              (window.scroller.popstate = !1),
              e
            );
          },
          getScrollY: function () {
            var e = window.scrollY;
            return (
              window.scrollbar && (e = window.scrollbar.scroll.instance.scroll.y),
              e
            );
          },
        };
        e.exports = o;
      },
      // GOOGLE MAPS
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = "map";
              return {
                name: r,
                fn: function () {
                  function e() {
                    window.gMapsLoaded
                      ? n()
                      : ((window.initMap = function () {
                          (window.gMapsLoaded = !0), n();
                        }),
                        setTimeout(function () {
                          o(
                            "//maps.googleapis.com/maps/api/js?v=3&callback=initMap&key=AIzaSyC193RnAxFrHcI0oVnEWoXC6GxoJ3dYSBk"
                          );
                        }, 100));
                  }
                  function n() {
                    var e = a.data("latlng");
                    if (e) {
                      var t = {
                          lat: Number(e.split(",")[0]),
                          lng: Number(e.split(",")[1]),
                        },
                        n = new google.maps.Map(a[0], {
                          center: t,
                          zoom: 10.1,
                          scrollwheel: !1,
                          disableDefaultUI: !0,
                          zoomControl: !0,
                        }),
                        r = new google.maps.StyledMapType([
                          {
                            featureType: "all",
                            elementType: "all",
                            stylers: [{ saturation: -100 }],
                          },
                          {
                            elementType: "geometry",
                            stylers: [{ color: "#f5f5f5" }],
                          },
                          {
                            elementType: "labels.icon",
                            stylers: [{ visibility: "off" }],
                          },
                          {
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#616161" }],
                          },
                          {
                            elementType: "labels.text.stroke",
                            stylers: [{ color: "#f5f5f5" }],
                          },
                          {
                            featureType: "administrative.land_parcel",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#bdbdbd" }],
                          },
                          {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{ color: "#eeeeee" }],
                          },
                          {
                            featureType: "poi",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#757575" }],
                          },
                          {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{ color: "#e5e5e5" }],
                          },
                          {
                            featureType: "poi.park",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#9e9e9e" }],
                          },
                          {
                            featureType: "road",
                            stylers: [{ visibility: "on" }],
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{ color: "#ffffff" }],
                          },
                          {
                            featureType: "road.arterial",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#757575" }],
                          },
                          {
                            featureType: "road.highway",
                            elementType: "geometry",
                            stylers: [{ color: "#dadada" }],
                          },
                          {
                            featureType: "road.highway",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#616161" }],
                          },
                          {
                            featureType: "road.local",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#9e9e9e" }],
                          },
                          {
                            featureType: "transit.line",
                            elementType: "geometry",
                            stylers: [{ color: "#e5e5e5" }],
                          },
                          {
                            featureType: "transit.station",
                            elementType: "geometry",
                            stylers: [{ color: "#eeeeee" }],
                          },
                          {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{ color: "#c9c9c9" }],
                          },
                          {
                            featureType: "water",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#9e9e9e" }],
                          },
                        ]);
                      n.mapTypes.set("style", r), n.setMapTypeId("style");
                      var o = encodeURIComponent(
                          '<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.5 61C47.3447 61 61 47.3447 61 30.5C61 13.6553 47.3447 0 30.5 0C13.6553 0 0 13.6553 0 30.5C0 47.3447 13.6553 61 30.5 61Z" fill="black"/> <path d="M24.9122 16.9559H48.5061V15H24.9122V16.9559Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5152 38.9676C16.6041 38.9676 15.8008 38.8054 15.1056 38.482C14.4099 38.1584 13.8346 37.7166 13.3789 37.1581C12.9232 36.5988 12.5792 35.9394 12.3476 35.1779C12.1158 34.4167 12 33.6067 12 32.7484V27.5489C12 26.7069 12.0994 25.9088 12.2997 25.1557C12.4995 24.4025 12.823 23.7464 13.271 23.1876C13.7183 22.6288 14.29 22.1835 14.9855 21.8513C15.6807 21.5196 16.5239 21.3532 17.5152 21.3532C18.5063 21.3532 19.3498 21.5196 20.045 21.8513C20.7405 22.1835 21.312 22.6288 21.7597 23.1876C22.207 23.7464 22.531 24.4025 22.7308 25.1557C22.9306 25.9088 23.0308 26.7069 23.0308 27.5489V32.7484C23.0308 33.6067 22.9145 34.4167 22.6829 35.1779C22.4511 35.9394 22.1073 36.5988 21.6519 37.1581C21.1962 37.7166 20.6206 38.1584 19.9254 38.482C19.2299 38.8054 18.4266 38.9676 17.5152 38.9676ZM17.5152 23.2484C16.8598 23.2484 16.3042 23.354 15.849 23.5642C15.393 23.775 15.0213 24.0664 14.7337 24.4388C14.4458 24.8118 14.2378 25.2613 14.1102 25.7874C13.9819 26.314 13.9183 26.9011 13.9183 27.5489V32.7484C13.9183 34.0274 14.2098 35.0684 14.7936 35.8703C15.3769 36.6718 16.2842 37.0727 17.5152 37.0727C18.7461 37.0727 19.6531 36.6718 20.2371 35.8703C20.8204 35.0684 21.1124 34.0274 21.1124 32.7484V27.5489C21.1124 26.9011 21.0481 26.314 20.9206 25.7874C20.7922 25.2613 20.5847 24.8118 20.2971 24.4388C20.0092 24.0664 19.6377 23.775 19.182 23.5642C18.7263 23.354 18.1707 23.2484 17.5152 23.2484Z" fill="white"/> <path d="M35.5323 37.6116C35.5323 37.8631 35.4475 38.0751 35.2766 38.2477C35.1055 38.4208 34.8888 38.5067 34.6255 38.5067H26.9724C26.6927 38.5067 26.4639 38.4125 26.2862 38.2241C26.1076 38.0356 26.0185 37.8 26.0185 37.5166C26.0185 37.3601 26.0259 37.1989 26.0415 37.0341C26.0566 36.8685 26.0956 36.724 26.1578 36.5981C26.4678 35.8434 26.8712 35.1405 27.3676 34.4886C27.8633 33.8366 28.3987 33.2158 28.9725 32.6262C29.5462 32.0373 30.1274 31.4598 30.7176 30.8938C31.3063 30.3285 31.8493 29.7552 32.3457 29.1736C32.6864 28.7809 32.9854 28.3368 33.2413 27.8419C33.4969 27.347 33.6252 26.7929 33.6252 26.1801C33.6252 25.3164 33.3844 24.5936 32.9036 24.0119C32.4231 23.4308 31.7023 23.1399 30.7407 23.1399C30.2909 23.1399 29.8874 23.1791 29.5311 23.2577C29.1743 23.3364 28.8405 23.4461 28.5308 23.5876C28.236 23.7135 27.984 23.8549 27.7747 24.0119C27.5654 24.1692 27.3518 24.2473 27.1351 24.2473C26.9176 24.2473 26.716 24.1692 26.5298 24.0119C26.3438 23.8549 26.2508 23.6429 26.2508 23.3756C26.2508 23.1871 26.3013 23.0218 26.4025 22.8804C26.5029 22.7392 26.6537 22.6058 26.8561 22.4799C27.4606 22.0872 28.0769 21.8121 28.7048 21.6548C29.3331 21.4978 30.0193 21.4192 30.764 21.4192C31.5081 21.4192 32.1672 21.537 32.741 21.7727C33.3148 22.0086 33.803 22.3307 34.2064 22.7392C34.6099 23.1479 34.9157 23.6229 35.1258 24.1651C35.3351 24.7072 35.4393 25.2925 35.4393 25.9211C35.4393 26.8954 35.2802 27.7282 34.9629 28.4194C34.6445 29.111 34.2454 29.7316 33.7646 30.2813C33.2838 30.8315 32.7799 31.3573 32.2528 31.8603C31.7256 32.3633 31.2133 32.8701 30.7176 33.3806C30.2204 33.8914 29.7555 34.418 29.3213 34.9596C28.8869 35.5015 28.5226 36.0873 28.2286 36.7156H34.6255C34.8888 36.7156 35.1055 36.8023 35.2766 36.9749C35.4475 37.148 35.5323 37.3601 35.5323 37.6116Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M47.1758 35.832C47.4317 35.2426 47.5598 34.6025 47.5598 33.9111C47.5598 32.8429 47.2839 31.9628 46.734 31.2714C46.183 30.58 45.5044 30.0142 44.698 29.5743C45.4112 29.1188 45.9663 28.5842 46.3615 27.9714C46.7573 27.3587 46.9548 26.6517 46.9548 25.8502C46.9548 25.2375 46.8385 24.6758 46.6059 24.1651C46.3733 23.6546 46.051 23.2144 45.6407 22.8451C45.2296 22.4763 44.7452 22.1892 44.1865 21.985C43.6286 21.781 43.031 21.6785 42.3957 21.6785C41.7748 21.6785 41.1892 21.7768 40.6393 21.9733C40.088 22.17 39.6037 22.4527 39.1851 22.8215C38.7665 23.1908 38.4369 23.6346 38.1966 24.1531C37.9561 24.6717 37.8359 25.2533 37.8359 25.8975C37.8359 26.7929 38.0526 27.5512 38.4876 28.172C38.9213 28.7929 39.4643 29.3073 40.1157 29.7158C39.3088 30.1557 38.6303 30.7176 38.0803 31.4007C37.5293 32.0845 37.2547 32.9529 37.2547 34.0054C37.2547 34.6968 37.3823 35.3329 37.6379 35.9142C37.8943 36.4961 38.2545 36.9947 38.7202 37.411C39.1851 37.8275 39.7317 38.1535 40.3603 38.3889C40.9879 38.6246 41.6741 38.7424 42.4188 38.7424C43.1785 38.7424 43.8725 38.6207 44.5008 38.3775C45.1286 38.1338 45.6676 37.7961 46.1176 37.364C46.5669 36.9316 46.9202 36.4211 47.1758 35.832ZM45.4314 32.5911C45.6251 32.9683 45.7216 33.4006 45.7216 33.8875C45.7216 34.3274 45.6407 34.7401 45.478 35.1247C45.3146 35.5099 45.0859 35.8434 44.7918 36.1263C44.4964 36.4094 44.1476 36.6292 43.7449 36.7865C43.3414 36.9438 42.8991 37.0219 42.4188 37.0219C41.9534 37.0219 41.5153 36.9438 41.1042 36.7865C40.6933 36.6292 40.3401 36.4133 40.046 36.1382C39.7515 35.8631 39.5181 35.5371 39.348 35.1603C39.1769 34.7827 39.0921 34.3669 39.0921 33.9111C39.0921 33.4712 39.1769 33.0625 39.348 32.6856C39.5181 32.308 39.7515 31.9781 40.046 31.6955C40.3401 31.4129 40.6856 31.1733 41.0811 30.9766C41.4764 30.7799 41.8993 30.6348 42.3491 30.5406C42.7828 30.6195 43.2018 30.7487 43.6053 30.9296C44.0082 31.1102 44.365 31.3384 44.6747 31.6127C44.9852 31.8878 45.2372 32.2138 45.4314 32.5911ZM44.9545 24.8957C45.0941 25.218 45.1637 25.5674 45.1637 25.9445C45.1637 26.6987 44.8999 27.3275 44.3725 27.8302C43.8453 28.3332 43.2093 28.6709 42.4654 28.8437C42.0927 28.7809 41.7359 28.6667 41.3952 28.5019C41.054 28.3368 40.7556 28.1329 40.4997 27.8889C40.2435 27.6457 40.0378 27.3628 39.8834 27.0407C39.7281 26.7187 39.6503 26.3532 39.6503 25.9445C39.6503 25.5674 39.7205 25.218 39.8601 24.8957C39.9997 24.5739 40.1931 24.2987 40.4413 24.0709C40.6895 23.8433 40.9843 23.6665 41.3255 23.5404C41.6659 23.415 42.0305 23.352 42.4188 23.352C42.8061 23.352 43.1668 23.415 43.5003 23.5404C43.8335 23.6665 44.1243 23.8433 44.3725 24.0709C44.6207 24.2987 44.8148 24.5739 44.9545 24.8957Z" fill="white"/> <path d="M48.5061 45.86H24.9122V43.9041H48.5061V45.86Z" fill="white"/> </svg>'
                        ),
                        i = new google.maps.Marker({
                          position: t,
                          map: n,
                          icon: {
                            anchor: new google.maps.Point(13, 44),
                            url: "data:image/svg+xml;utf-8," + o,
                          },
                        });
                      a.data("url") &&
                        i.addListener("click", function () {
                          window.open(a.data("url"));
                        }),
                        (a.map = n),
                        (a.marker = i);
                    }
                  }
                  function o(e, t) {
                    var n = document.createElement("script");
                    (n.type = "text/javascript"),
                      document.getElementsByTagName("head")[0].appendChild(n),
                      (n.src = e);
                  }
                  function i() {
                    t(document).off("page-transitioning-end page-ready", e),
                      a.marker &&
                        (google.maps.event.clearInstanceListeners(a.marker),
                        (a.marker = null),
                        (a.map = null));
                  }
                  var a = t(this);
                  return (
                    (a.destroy = function () {
                      i();
                    }),
                    (function () {
                      a.data("__" + r) ||
                        (a.data("__" + r, !0),
                        a.data("js-" + r, a),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // MENU
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(7),
                o = "menuFull";
              return {
                name: o,
                fn: function () {
                  function e() {
                    c(), n(), i();
                  }
                  function n() {
                    f.find(".MenuFull-footer .container").html(
                      t(".SiteHeader-overlay-footer .container").html()
                    );
                    var e = t(t(".MenuSimple-nav").html()),
                      n = t("<ul></ul>"),
                      r = t(
                        '<div class="swiper-container"><div class="swiper-wrapper"></div></div>'
                      ),
                      o = r.clone();
                    e.find("> li").each(function () {
                      var e = t(this).clone(),
                        i = e.find("> a"),
                        a = '<div class="swiper-slide">';
                      e.find("ul").length > 0 &&
                        (e.find(".is-active").length > 0
                          ? (a += '<ul class="has-active">')
                          : (a += "<ul>"),
                        (a += e.find("ul").html() + "</ul>")),
                        (a += "</div>"),
                        r.find(".swiper-wrapper").append(a),
                        (a = '<div class="swiper-slide">'),
                        "" != i.data("video") &&
                          (a +=
                            '<div class="MenuFull-video js-videoBg" data-video-wait="true" data-video-src="' +
                            i.data("video") +
                            '"></div>'),
                        "" != i.data("image") &&
                          (a +=
                            '<div class="MenuFull-image" data-sizes="auto" data-bgset="' +
                            i.data("image") +
                            '" style="' +
                            i.data("focus") +
                            '"></div>'),
                        (a += "</div>"),
                        o.find(".swiper-wrapper").append(a),
                        e.find("ul").length > 0 &&
                          (i.addClass("has-children no-barba"),
                          e.find("ul").remove()),
                        n.append(e),
                        (e = null),
                        (i = null);
                    }),
                      n.appendTo(f.find(".MenuFull-1stLevel")),
                      r.appendTo(f.find(".MenuFull-2ndLevel")),
                      o.appendTo(f.find(".MenuFull-media")).initPlugins(),
                      (n = null),
                      (r = null),
                      (o = null),
                      (e = null);
                  }
                  function i() {
                    (f.swiperNav = new r(
                      f.find(".MenuFull-2ndLevel .swiper-container")[0],
                      {
                        allowTouchMove: !1,
                        effect: "fade",
                        speed: 0,
                        slidesPerView: 1,
                        fadeEffect: { crossFade: !0 },
                      }
                    )),
                      (f.swiperMedia = new r(
                        f.find(".MenuFull-media .swiper-container")[0],
                        {
                          allowTouchMove: !1,
                          speed: 0,
                          virtualTranslate: !0,
                          slidesPerView: "auto",
                        }
                      )),
                      f.find(".MenuFull-1stLevel a").on("click", u),
                      f.find("a").on("mouseenter", a),
                      f.find("a").on("mouseleave", s),
                      setTimeout(function () {
                        f.find(".MenuFull-2ndLevel .swiper-container").addClass(
                          "is-ready"
                        );
                      }, 800),
                      l(f.find(".MenuFull-1stLevel .is-active").index());
                  }
                  function a() {
                    t(this).closest("ul").addClass("is-hover");
                  }
                  function s() {
                    t(this).closest("ul").removeClass("is-hover");
                  }
                  function l(e) {
                    if (-1 != e) {
                      e > 0 &&
                        f.find(".MenuFull-1stLevel ul").addClass("has-active"),
                        f
                          .find(".MenuFull-1stLevel li")
                          .removeClass("is-active")
                          .eq(e)
                          .addClass("is-active"),
                        f.swiperNav.slideTo(e, 0),
                        f.swiperMedia.slideTo(e),
                        t(f.swiperMedia.slides)
                          .find("[data-video-src]")
                          .trigger("video-stop");
                      t(f.swiperMedia.slides[f.swiperMedia.activeIndex])
                        .find("[data-bgset]")
                        .addClass("lazyload lazypreload");
                      t(f.swiperMedia.slides[f.swiperMedia.activeIndex])
                        .find("[data-video-src]")
                        .trigger("video-start");
                    }
                  }
                  function u(e) {
                    var n = t(this);
                    if (n.hasClass("has-children")) {
                      e.preventDefault();
                      l(n.parent().index());
                    }
                  }
                  function c() {
                    f.swiperNav &&
                      (f.swiperNav.destroy(), f.swiperMedia.destroy()),
                      f.find("a").off(),
                      f
                        .find(
                          ".MenuFull-1stLevel, .MenuFull-2ndLevel, .MenuFull-media, .MenuFull-footer .container"
                        )
                        .destroyPlugins()
                        .empty();
                  }
                  function d() {
                    t(document).off("menu-is-opening", e), c();
                  }
                  var f = t(this);
                  return (
                    (f.destroy = function () {
                      d();
                    }),
                    (function () {
                      f.data("__" + o) ||
                        (f.data("__" + o, !0),
                        f.data("js-" + o, f),
                        t(document).on("menu-is-opening", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // MENU SIMPLE
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(38);
              var r = "menuSimple";
              return {
                name: r,
                fn: function () {
                  function e() {
                    a
                      .find("ul ul")
                      .collapse({ toggle: !1 })
                      .removeClass("show")
                      .addClass("collapse")
                      .parent()
                      .find("> a")
                      .addClass("is-toggle")
                      .on("click", o),
                      a.find("nav > ul > li.is-active ul").addClass("show");
                  }
                  function n() {
                    a.find("ul ul").collapse("dispose"),
                      a.find("is-toggle").off("click", o);
                  }
                  function o(e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      t(this).next().collapse("toggle");
                  }
                  function i() {
                    t(document).off("menu-is-opening", e),
                      t(document).off("menu-is-closed", n),
                      n();
                  }
                  var a = t(this);
                  return (
                    (a.destroy = function () {
                      i();
                    }),
                    (function () {
                      a.data("__" + r) ||
                        (a.data("__" + r, !0),
                        a.data("js-" + r, a),
                        t(document).on("menu-is-opening", e),
                        t(document).on("menu-is-closed", n));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // MENU TOGGLE
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(42),
                o = r.disableBodyScroll,
                i = r.enableBodyScroll,
                a = n(24),
                s = (n(52), n(1), n(8), n(9), "menuToggle");
              return {
                name: s,
                fn: function () {
                  function e(e) {
                    c.isOpen ? r() : l();
                  }
                  function n(e) {
                    27 == e.which && r();
                  }
                  function r() {
                    c.isOpen &&
                      (t(document).trigger("menu-is-closing"),
                      c.attr("aria-pressed", !1),
                      t("html").removeClass("show-menu"),
                      i(c.scrollWrapper),
                      (c.isOpen = !1));
                  }
                  function l() {
                    c.isOpen ||
                      (t(document).trigger("menu-is-opening"),
                      a.refresh(),
                      (c.scrollWrapper.scrollTop = 0),
                      o(c.scrollWrapper, { reserveScrollBarGap: !0 }),
                      c.attr("aria-pressed", !0),
                      t("html").addClass("show-menu"),
                      (c.isOpen = !0));
                  }
                  function u() {
                    i(c.scrollWrapper),
                      (c.scrollWrapper = null),
                      c.tl && (c.tl.kill(), (c.tl = null)),
                      c.off("click", e),
                      t(document).off(
                        "page-transitioning-ending search-is-opening",
                        r
                      ),
                      t(document).off("keyup", n),
                      t("html").removeClass("show-menu");
                  }
                  var c = t(this);
                  return (
                    (c.destroy = function () {
                      u();
                    }),
                    (function () {
                      c.data("__" + s) ||
                        (c.data("__" + s, !0),
                        c.data("js-" + s, c),
                        (c.isOpen = !1),
                        (c.scrollWrapper = t(".SiteHeader-overlay-wrapper")[0]),
                        c.on("click", e),
                        t(document).on("keyup", n),
                        t(document).on("page-transitioning-start", r));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // NEWSLETTER
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(53), n(54);
              var r = "newsletter";
              return {
                name: r,
                fn: function () {
                  function e(e) {
                    n.$alert.removeClass("alert-success alert-danger"),
                      "success" === e.result
                        ? (n.$alert.addClass("alert-success"),
                          n
                            .find(".Newsletter-formGroup, .Newsletter-note")
                            .hide())
                        : n.$alert.addClass("alert-danger"),
                      n.$alert.removeClass("d-none"),
                      window.scrollbar && window.scrollbar.update();
                  }
                  var n = t(this);
                  return (
                    (n.destroy = function () {}),
                    (function () {
                      if (!n.data("__" + r)) {
                        n.data("__" + r, !0),
                          n.data("js-" + r, n),
                          (n.$alert = n.find(".alert"));
                        var o = t("html").attr("lang")
                          ? t("html").attr("lang")
                          : "en";
                        n.ajaxChimp({ language: o, callback: e }),
                          n.removeAttr("novalidate");
                      }
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // OPEN STORY
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = (n(3), "openStory");
              return {
                name: r,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e),
                      i.on("click", n);
                  }
                  function n() {
                    t('[data-story-id="' + i.data("story-target") + '"]').trigger(
                      "show"
                    );
                  }
                  function o() {
                    t(document).off("page-transitioning-end page-ready", e),
                      i.off("click", n);
                  }
                  var i = t(this);
                  t("html");
                  return (
                    (i.destroy = function () {
                      o();
                    }),
                    (function () {
                      i.data("__" + r) ||
                        (i.data("__" + r, !0),
                        i.data("js-" + r, i),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(39), n(11), n(40);
              var r = n(12),
                o = "select";
              return {
                name: o,
                fn: function () {
                  function e() {
                    a.on("change", n),
                      a.selectpicker({
                        mobile: !r.device().isDesktop,
                        maxOptions: 4,
                      });
                  }
                  function n() {
                    a.data("select-change-location") &&
                      (document.location.href = a.val());
                  }
                  function i() {
                    a.off("change", n), a.selectpicker("destroy");
                  }
                  var a = t(this);
                  return (
                    (a.destroy = function () {
                      i();
                    }),
                    (function () {
                      a.data("__" + o) ||
                        (a.data("__" + o, !0), a.data("js-" + o, a), e());
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // HEADER SCROLL ANIMATION
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(55),
                o = n(1),
                i = (n(9), n(8), n(3)),
                a = "siteHeader";
              return {
                name: a,
                fn: function () {
                  function e() {
                    z.isDesktop && O.on("scroll", s).on("resize", l), n();
                  }
                  function n() {
                    (H.headroom = new r(H.get(0), {
                      offset: A.offset,
                      tolerance: A.tolerance,
                      classes: A.classes,
                      onPin: c,
                      onUnpin: d,
                      onTop: f,
                      onNotTop: p,
                      onBottom: h,
                    })),
                      H.headroom.init();
                  }
                  function s(e) {
                    (z.scrollY = O.scrollTop()),
                      z.ticking ||
                        (window.requestAnimationFrame(function () {
                          u(z.scrollY), (z.ticking = !1);
                        }),
                        (z.ticking = !0));
                  }
                  function l() {
                    (A.offset = H.height()),
                      H.headroom && (H.headroom.destroy(), n());
                  }
                  function u(e) {
                    e <= 0 &&
                      !z.isTop &&
                      ((z.isTop = !0), (z.isPinned = !1), z.isAnimating || y());
                  }
                  function c() {
                    t("html").addClass("site-header-pinned"), z.isDesktop && v();
                  }
                  function d() {
                    z.isDesktop && m();
                  }
                  function f() {}
                  function p() {}
                  function h() {}
                  function g() {}
                  function v() {
                    (z.isTop = !1), (z.isPinned = !0);
                    var e = A.duration;
                    t("html").hasClass("page-transitioning-out") && (e = 0),
                      o.set(H, { position: "fixed" }),
                      z.isAnimating || o.set(H, { y: "-100%", force3D: !1 }),
                      o.to(H, e, {
                        y: "0%",
                        force3D: !1,
                        ease: Power2.easeOut,
                        onStart: function () {
                          z.isAnimating = !0;
                        },
                        onComplete: function () {
                          (z.isAnimating = !1), z.isTop && y();
                        },
                      });
                  }
                  function m() {
                    if (!z.isTop && z.isPinned) {
                      var e = A.duration;
                      t("html").hasClass("page-transitioning-out") && (e = 0),
                        o.to(H, e, {
                          y: "-100%",
                          force3D: !1,
                          onStart: function () {
                            z.isAnimating = !0;
                          },
                          onComplete: function () {
                            (z.isAnimating = !1), y();
                          },
                        });
                    }
                  }
                  function y() {
                    (z.onTop = !0),
                      (z.isPinned = !1),
                      (z.isAnimating = !1),
                      z.isSmooth || o.set(H, { clearProps: "all" });
                  }
                  function b() {
                    t(document).on("scrollbar-init", C),
                      t(document).on("scrollbar-destroy", w),
                      void 0 != window.scrollbar && C(window.scrollbar);
                  }
                  function C(t, n) {
                    (z.isSmooth = n.smooth),
                      z.isSmooth
                        ? (I(n.scroll.instance),
                          n.on("scroll", function (e) {
                            I(e);
                          }))
                        : e();
                  }
                  function w(e, t) {}
                  function S(e) {
                    (L.y = e.scroll.y),
                      (L.top = e.scroll.y <= A.offset),
                      (L.bottom = e.scroll.y >= e.limit),
                      (L.direction = e.direction),
                      (L.toleranceExceeded =
                        Math.abs(e.speed) > A.smoothTolerace[e.direction]);
                  }
                  function E() {
                    H.hasClass(A.classes.top) ||
                      (H.addClass(A.classes.top),
                      H.removeClass(A.classes.notTop),
                      f());
                  }
                  function D() {
                    H.hasClass(A.classes.notTop) ||
                      (H.addClass(A.classes.notTop),
                      H.removeClass(A.classes.top),
                      p());
                  }
                  function T() {
                    H.hasClass(A.classes.bottom) ||
                      (H.addClass(A.classes.bottom),
                      H.removeClass(A.classes.notBottom),
                      h());
                  }
                  function R() {
                    H.hasClass(A.classes.notBottom) ||
                      (H.addClass(A.classes.notBottom),
                      H.removeClass(A.classes.bottom),
                      g());
                  }
                  function x() {
                    (!H.hasClass(A.classes.pinned) &&
                      H.hasClass(A.classes.unpinned)) ||
                      (H.addClass(A.classes.unpinned),
                      H.removeClass(A.classes.pinned),
                      d());
                  }
                  function k() {
                    H.hasClass(A.classes.unpinned) &&
                      (H.addClass(A.classes.pinned),
                      H.removeClass(A.classes.unpinned),
                      c());
                  }
                  function M() {
                    return (
                      "down" === L.direction && !L.top && L.toleranceExceeded
                    );
                  }
                  function _() {
                    return ("up" === L.direction && L.toleranceExceeded) || L.top;
                  }
                  function I(e) {
                    S(e),
                      u(L.y),
                      L.top ? E() : D(),
                      L.bottom ? T() : R(),
                      P(),
                      M() ? x() : _() && k();
                  }
                  function P() {
                    if (!z.isPinned) {
                      var e = L.y <= A.offset ? L.y : A.offset;
                      o.set(H, { y: -e, force3D: !1 });
                    }
                  }
                  function N() {
                    t(document).off("scrollbar-init", onSmoothInit),
                      t(document).off("scrollbar-destroy", w),
                      H.headroom && H.headroom.destroy(),
                      O.off("scroll", s),
                      O.off("resize", l),
                      (O = null);
                  }
                  var H = t(this),
                    O = t(window),
                    A = {
                      duration: 0.4,
                      offset: 0,
                      smoothScrollbar: !0,
                      tolerance: { down: 10, up: 5 },
                      smoothTolerace: { up: 1.5, down: 0.75 },
                      classes: {
                        initial: "SiteHeader--initialized",
                        pinned: "SiteHeader--pinned",
                        unpinned: "SiteHeader--unpinned",
                        top: "SiteHeader--top",
                        notTop: "SiteHeader--not-top",
                        bottom: "SiteHeader--bottom",
                        notBottom: "SiteHeader--not-bottom",
                      },
                    },
                    L = {},
                    z = {
                      isDesktop: i.device().isDesktop,
                      isSmooth: !1,
                      isAnimating: !1,
                      isPinned: !1,
                      isTop: !0,
                      scrollY: 0,
                      ticking: !1,
                    };
                  return (
                    (H.destroy = function () {
                      N();
                    }),
                    (function () {
                      H.data("__" + a) ||
                        (H.data("__" + a, !0),
                        H.data("js-" + a, H),
                        (A.offset = H.height()),
                        A.smoothScrollbar ? b() : e());
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(56),
                o = "splitLines";
              return {
                name: o,
                fn: function () {
                  function e() {
                    n(), t(window).on("resize", i);
                  }
                  function n() {
                    if (
                      ((l.split = new r(l, { type: "lines" })),
                      void 0 != l.data("split-parallax") && !l.firstRun)
                    ) {
                      var e = -1;
                      t.each(l.split.lines, function (n) {
                        t(this).wrapInner(
                          '<div data-scroll data-scroll-direction="horizontal" data-scroll-speed="' +
                            e +
                            '"></div>'
                        ),
                          (e *= -1);
                      });
                    }
                  }
                  function i() {
                    a(), n();
                  }
                  function a() {
                    l.split && (l.split.revert(), (l.split = null));
                  }
                  function s() {
                    t(document).off("before-scrollbar-init", e),
                      t(window).off("resize", i),
                      a();
                  }
                  var l = t(this);
                  return (
                    (l.destroy = function () {
                      s();
                    }),
                    (function () {
                      l.data("__" + o) ||
                        (l.data("__" + o, !0),
                        l.data("js-" + o, l),
                        t(document).on("before-scrollbar-init", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(42),
                o = r.disableBodyScroll,
                i = r.enableBodyScroll,
                a = n(7),
                s = "story";
              return {
                name: s,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e),
                      0 == h.closest("[data-scroll-container]").length
                        ? n()
                        : (h.on("show", n), h.on("hide", r));
                  }
                  function n() {
                    o(h.get(0)),
                      t(document).trigger("story-open"),
                      t(document).on("keyup", l),
                      h.find("[data-story-close]").on("click", r),
                      h.find("[data-bgset]").addClass("lazyload"),
                      h.find("[data-src]").each(function () {
                        t(this).html(
                          '<video autoplay loop preload="auto" playsinline><source src="' +
                            t(this).data("src") +
                            '" type="video/mp4"></video>'
                        );
                      }),
                      (h.storySwiper = new a(
                        h.find("[data-story-gallery]").get(0),
                        {
                          slidesPerView: "auto",
                          centeredSlides: !0,
                          grabCursor: !0,
                          threshold: 5,
                          slideToClickedSlide: !0,
                          pagination: {
                            el: ".swiper-pagination",
                            type: "bullets",
                            dynamicBullets: h.find(".swiper-slide").length > 5,
                          },
                          on: {
                            init: function () {
                              c(this.activeIndex, this.slides.length);
                            },
                            slideChange: function () {
                              c(this.activeIndex, this.slides.length);
                            },
                          },
                        }
                      )),
                      h.addClass("is-ready");
                  }
                  function r() {
                    t(document).trigger("story-close"),
                      i(h.get(0)),
                      t(document).off("keyup", l),
                      h.find("[data-story-close]").off("click", r),
                      u(),
                      h.storySwiper && h.storySwiper.destroy(),
                      h.removeClass("is-ready");
                  }
                  function l(e) {
                    27 == e.which && r();
                  }
                  function u() {
                    h.find("video").each(function () {
                      var e = t(this);
                      this.pause(),
                        e.find("source").remove(),
                        e.removeAttr("src"),
                        this.load(),
                        e.remove(),
                        (e = null);
                    });
                  }
                  function c(e, n) {
                    h.find(".swiper-slide").each(function () {
                      var n = t(this).find("video");
                      0 != n.length &&
                        (t(this).index() != e
                          ? n.get(0).pause()
                          : n.get(0).play()),
                        (n = null);
                    }),
                      f(e, n);
                  }
                  function d(e, t, n) {
                    var r = e.get(0).r.baseVal.value,
                      o = 2 * r * Math.PI;
                    e
                      .data("circumference", o)
                      .css("transition", "none")
                      .css("stroke-dasharray", o + " " + o)
                      .css("stroke-dashoffset", o),
                      (e = null),
                      (h.timeout = setTimeout(function () {
                        f(t, n);
                      }, 40));
                  }
                  function f(e, t) {
                    var n = h.find(".Story-progress circle");
                    if (n.length > 0)
                      if (void 0 == n.data("circumference"))
                        h.timeout = setTimeout(function () {
                          d(n, e, t);
                        }, 400);
                      else {
                        e += 1;
                        var r = (e / t) * 100,
                          o =
                            n.data("circumference") -
                            (r / 100) * n.data("circumference");
                        n.css("stroke-dashoffset", o).css("transition", ""),
                          (n = null);
                      }
                  }
                  function p() {
                    t(document).off("page-transitioning-end page-ready", e),
                      h.off("show"),
                      h.off("hide"),
                      r(),
                      h.timeout && clearTimeout(h.timeout);
                  }
                  var h = t(this);
                  t("html");
                  return (
                    (h.destroy = function () {
                      p();
                    }),
                    (function () {
                      h.data("__" + s) ||
                        (h.data("__" + s, !0),
                        h.data("js-" + s, h),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0);
              n(6);
              var r = "video";
              return {
                name: r,
                fn: function () {
                  function e() {
                    i.find("a").on("click", n);
                  }
                  function n(e) {
                    e.preventDefault();
                    var n = i.find("a").attr("href"),
                      r = { src: n };
                    -1 != n.indexOf("player.iwcast.it") && (r.type = "iframe"),
                      t.fancybox.open(r);
                  }
                  function o() {
                    t(document).off("page-transitioning-ending page-ready", e),
                      i.find("a").off("click", n);
                  }
                  var i = t(this);
                  return (
                    (i.initialized = !1),
                    (i.destroy = function () {
                      o();
                    }),
                    (function () {
                      i.data("__" + r) ||
                        (i.data("__" + r, !0),
                        t(document).one(
                          "page-transitioning-ending page-ready",
                          e
                        ));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // VIDEO BG
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(3),
                o = "videoBg";
              return {
                name: o,
                fn: function () {
                  function e() {
                    if (c.$video) {
                      c.$video.get(0).play();
                    } else
                      r.canPlayVideo() &&
                        (r.device().isDesktop ||
                          "playsInline" in document.createElement("video")) &&
                        a();
                  }
                  function n() {
                    if (c.$video) {
                      c.$video.get(0).pause();
                    }
                  }
                  function i() {
                    c.addClass("lazyloaded"),
                      c.$video.closest("[data-scroll]").addClass("lazyloaded");
                  }
                  function a() {
                    var e = c.data("video-src");
                    "" != e &&
                      "undefined" != e &&
                      ((c.$video = t(
                        '<video autoplay muted loop playsinline preload="auto"><source src="' +
                          e +
                          '" type="video/mp4"></video>'
                      )),
                      c.$video.one("loadedmetadata", s),
                      c.$video.one("play", i),
                      c.append(c.$video));
                  }
                  function s() {
                    var e = (c.$video[0], this.videoHeight),
                      n = this.videoWidth;
                    c.data("video-ratio", n + ":" + e),
                      l(),
                      t(window).on("resize viewport-units-buggyfill-style", l);
                  }
                  function l() {
                    var e = c,
                      t = e.width(),
                      n = e.height(),
                      r = t / n,
                      o = e.find("video"),
                      i = e.data("video-ratio").split(":"),
                      a = i[0] / i[1],
                      s = t,
                      l = n,
                      u = 0,
                      d = 0;
                    r > a
                      ? ((l = Math.round(s / a)), (u = -Math.round((l - n) / 2)))
                      : ((s = Math.round(l * a)), (d = -Math.round((s - t) / 2))),
                      o.css({
                        width: s + "px",
                        height: l + "px",
                        top: u + "px",
                        left: d + "px",
                      });
                  }
                  function u() {
                    if (
                      (t(document).off("page-transitioning-end page-ready", e),
                      t(window).off("resize", l),
                      c.off("video-start", e),
                      c.off("video-stop", n),
                      c.$video)
                    ) {
                      c.$video.off("play", i),
                        c.$video.off("loadedmetadata", s),
                        t(window).off("resize viewport-units-buggyfill-style", l);
                      var r = c.$video.get(0);
                      r.pause(),
                        c.$video.find("source").remove(),
                        c.$video.removeAttr("src"),
                        r.load(),
                        c.$video.remove(),
                        (r = null),
                        (c.$video = null);
                    }
                  }
                  var c = t(this);
                  t("html");
                  return (
                    (c.destroy = function () {
                      u();
                    }),
                    (function () {
                      c.data("__" + o) ||
                        (c.data("__" + o, !0),
                        c.data("js-" + o, c),
                        c.data("video-immediate")
                          ? e()
                          : c.data("video-wait")
                          ? c.on("video-start", function () {
                              e();
                            })
                          : t(document).one(
                              "page-transitioning-end page-ready",
                              e
                            ),
                        c.on("video-stop", n));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      ,
      ,
      ,
      ,
      ,
      function (e, t, n) {
        e.exports = n(44);
      },
      function (e, t, n) {
        (function (e) {
          function t() {
            (r.fancybox.defaults.protect = !0),
              (r.fancybox.defaults.idleTime = i.device().isDesktop ? 2 : 0),
              (r.fancybox.defaults.backFocus = !1),
              (r.fancybox.defaults.wheel = !1),
              (r.fancybox.defaults.infobar = !1),
              (r.fancybox.defaults.hash = !1),
              (r.fancybox.defaults.youtube = { showinfo: 0 }),
              (r.fancybox.defaults.buttons = ["close"]),
              (r.fancybox.defaults.btnTpl = {
                close:
                  '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><span class="Icon Icon--close"><svg class="Icon-svg"><use xlink:href="#icon-close"></use></svg></span></button>',
                arrowLeft:
                  '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><span class="Icon Icon--arrow"><svg class="Icon-svg"><use xlink:href="#icon-arrow"></use></svg></span></button>',
                arrowRight:
                  '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><span class="Icon Icon--arrow"><svg class="Icon-svg"><use xlink:href="#icon-arrow"></use></svg></span></button>',
                smallBtn:
                  '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><span class="Icon Icon--close"><svg class="Icon-svg"><use xlink:href="#icon-close"></use></svg></span></button>',
              });
          }
          n(45);
          var r = n(0);
          n(4);
          var o = n(59),
            i = n(12);
          i.device();
          var a = n(24);
          i.device().isDesktop || a.init({ force: !0 }),
            i.fixVh(),
            (window.lazySizesConfig = window.lazySizesConfig || {}),
            (window.lazySizesConfig.getOptimumX = function () {
              var e = window.devicePixelRatio || 1;
              return (
                e > 2.5 ? (e *= 0.5) : e > 1.9 ? (e *= 0.75) : (e -= 0.01),
                Math.min(Math.round(100 * e) / 100, 2)
              );
            }),
            (window.lazySizesConfig.constrainPixelDensity = !0),
            n(10),
            n(63),
            n(64),
            n(65),
            n(66),
            n(67);
          var r = n(0);
          (e.$ = e.jQuery = r),
            n(6),
            r(document).ready(function () {
              t(),
                o.init(),
                setTimeout(function () {
                  r(document).trigger("page-ready"),
                    window.requestAnimationFrame(function () {
                      r("html").addClass("is-first-run is-ready");
                    });
                }, 50);
            });
        }.call(t, n(2)));
      },
      function (e, t) {
        var n = navigator.userAgent.toLowerCase();
        if (/(chrome|firefox|safari)/.test(n)) {
          var r = [
            "font-family: sans-serif",
            "font-size: 14px",
            "border-radius:4px",
            "color:#fff",
            "padding:10px 22px",
            "background:#1a1a1a",
          ].join(";");
          n.indexOf("chrome") > -1 &&
            ((r += ";"),
            (r += [
              "background: #1a1a1a url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAYAAAAkjjtxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyMzA1ODg4NjI4OTExRThCQTEwRjIzQUY2NkNEMTlBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyMzA1ODg3NjI4OTExRThCQTEwRjIzQUY2NkNEMTlBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDo4ODcxYjZjMy1lZTFiLTQ2NDEtODIxZi1jZjE2ODU3MWNjOTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODNhNzdlZDYtZTgyZC00M2ViLWE4NzktZjNiYTY0MGJkMTM1Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+QXJ0Ym9hcmQgMSBjb3BpYTwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2svT0AAAA/lJREFUeNq8mHtoj1EYx9+f62zmurllcplobC4bNYZGSEqJIuayUqRWkn/8RWlWZHJLUSNZIZtRCsltM9IsDcl1y+ayMYvZzPXne/T88vR0zvs77/sbT33q13me53ue95z3Pef8TiAYDH5xHKcZNIAa8AhUEU9Bq/N/rRtIBClEEhgKBoBAAAV/w4/OmsSvoI4KLwM3wH1qb0/rAsaC6SCDihwCumpiP6qCP+FHrKV4NbgEikApaPNZZFcqbhGYA0ZY5tU7KLg2+NeaQB34FQxvL0AeGAUcS0aCXPDcQl/V8Ap8YG1PlEgFa7gAOoNksBzsA3dBm4vwV1AC5oKAodB0cJpiTab6qAQHQBZIAZ3AORZzU4kVsYb7oIPoTBUxFKwGxTQLOjsGOorcNHDepcgm0swGwwwPXMniTzo0rSFrBPFhpjWeir9OOc1ghYjpBw6BH5oif1JutkVfvUE9y811aOq5pXl4J6eAiaJtMXijKfQLOKqJd2Oc0MhSjRNILGTZHgQ5UeCgptDv4AhI9KG5jOmo2UpVjbHgGXMc9CE8CJRpilVtk3wOgGI303oJeoUcZ5mjwqOoWqoea774TeIDjqJ324t2uVjBnJBjM3O0guGWgiNoPeam1tjJIm4MfWh1HtbtBPqgQ7aFF5whOl1lIdgXVIm8m2CAiFsoYh5ajvRSkZfJC44BNcx5ykKwSAheAT00cXHk43bOQv84i1cz05MX7NCXHLL3oL+L2HpRQAWtmaZ49SC3Rc4Gl/g+YmksDPl40AIhmO3ybjWIhxttMWKJYhNopB003HKmbJGu4O6gWkyxTizf8sF0ZInc/Ya4CyxGHc566QpW7BSC6cI/ELyzeCg3LoqzRILwp9L2HbI93C/FksWJqlD414oHmu+j4NlCI0f4C8TuNsGtYIdWCL6tpjIfP+o9oKOo14LVie6e3BCIFHGULZH5pgMNtzPUHk3bo3aqPLKD6bxmy+EJ0fcMm4J1ifPo/eWvy4oICl4ipn0ImCX6LNblmgTVVtrCkqvoHwX/GGZGUHCGZkDuiqPoeC8FK7YK0XtihDMjKHgq0/km3mll20254c63d1z+3rTXKyGtko4K2twOLn+p1V/4deCzwZ8RwV2EKbeV+mwxZlqMxirDSLwNc94wEUeHGZ2tCZdv28lWQwf7fBScb9DKtcn30tEuQ0cbPWjkGDT22mp4HZ1thg4LaC015Q0Ghw25eV5q+HNx4dFWggOgu+aDuQXK6Q7OoVvHdDAFxGjic0CBp959Lkvq/Hs56N+ugiQ/fTsRrKUBOvSXWl4eBulf8EKXO7h/8kpIC9DdbhaYBhJANPnUZXkt3S8fB9fUpEbS2W8BBgBzx1btNZU08gAAAABJRU5ErkJggg==) 20px 11px no-repeat",
              "background-size: 22px 16px",
              "padding:10px 22px 10px 50px",
            ].join(";")));
          var o = ["background-color: transparent"].join(";");
          console.log("\n %c Mountain Rose Herbs %c \n\n", r, o);
        } else window.console && console.log("Mountain Rose Herbs");
      },
      // Section Class Numbers
      function (e, t, n) {
        function r(e) {
          return n(o(e));
        }
        function o(e) {
          var t = i[e];
          if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
          return t;
        }
        var i = {
          ".": 4,
          "./": 4,
          "./accordion": 13,
          "./accordion.js": 13,
          "./actionBar": 14,
          "./actionBar.js": 14,
          "./bannerSlides": 15,
          "./bannerSlides.js": 15,
          "./calendar": 16,
          "./calendar.js": 16,
          "./cardSlider": 68,
          "./cardSlider.js": 68,
          "./form": 17,
          "./form.js": 17,
          "./formBuilder": 18,
          "./formBuilder.js": 18,
          "./gallery": 19,
          "./gallery.js": 19,
          "./headline": 20,
          "./headline.js": 20,
          "./hpSlider": 21,
          "./hpSlider.js": 21,
          "./index": 4,
          "./index.js": 4,
          "./lazyload": 22,
          "./lazyload.js": 22,
          "./main": 23,
          "./main.js": 23,
          "./map": 26,
          "./map.js": 26,
          "./menuFull": 27,
          "./menuFull.js": 27,
          "./menuSimple": 28,
          "./menuSimple.js": 28,
          "./menuToggle": 29,
          "./menuToggle.js": 29,
          "./newsletter": 30,
          "./newsletter.js": 30,
          "./openStory": 31,
          "./openStory.js": 31,
          "./select": 32,
          "./select.js": 32,
          "./siteHeader": 33,
          "./siteHeader.js": 33,
          "./splitLines": 34,
          "./splitLines.js": 34,
          "./story": 35,
          "./story.js": 35,
          "./video": 36,
          "./video.js": 36,
          "./videoBg": 37,
          "./videoBg.js": 37,
        };
        (r.keys = function () {
          return Object.keys(i);
        }),
          (r.resolve = o),
          (e.exports = r),
          (r.id = 46);
      },
      // Full Calendar
      function (e, t) {
        (window.FullCalendar = (function (e) {
          "use strict";
          function t(e, t) {
            function n() {
              this.constructor = e;
            }
            gs(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }
          function n() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length;
            for (var r = Array(e), o = 0, t = 0; t < n; t++)
              for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
                r[o] = i[a];
            return r;
          }
          function r(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          }
          function o(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
          }
          function i(e, t, n) {
            var r,
              o,
              i,
              s = arguments,
              l = {};
            for (i in t)
              "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (l[i] = t[i]);
            if (arguments.length > 3)
              for (n = [n], i = 3; i < arguments.length; i++) n.push(s[i]);
            if (
              (null != n && (l.children = n),
              "function" == typeof e && null != e.defaultProps)
            )
              for (i in e.defaultProps)
                void 0 === l[i] && (l[i] = e.defaultProps[i]);
            return a(e, l, r, o, null);
          }
          function a(e, t, n, r, o) {
            var i = {
              type: e,
              props: t,
              key: n,
              ref: r,
              __k: null,
              __: null,
              __b: 0,
              __e: null,
              __d: void 0,
              __c: null,
              __h: null,
              constructor: void 0,
              __v: null == o ? ++us.__v : o,
            };
            return null != us.vnode && us.vnode(i), i;
          }
          function s() {
            return { current: null };
          }
          function l(e) {
            return e.children;
          }
          function u(e, t) {
            (this.props = e), (this.context = t);
          }
          function c(e, t) {
            if (null == t) return e.__ ? c(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? c(e) : null;
          }
          function d(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
              for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                  e.__e = e.__c.base = n.__e;
                  break;
                }
              return d(e);
            }
          }
          function f(e) {
            ((!e.__d && (e.__d = !0) && cs.push(e) && !p.__r++) ||
              fs !== us.debounceRendering) &&
              ((fs = us.debounceRendering) || ds)(p);
          }
          function p() {
            for (var e; (p.__r = cs.length); )
              (e = cs.sort(function (e, t) {
                return e.__v.__b - t.__v.__b;
              })),
                (cs = []),
                e.some(function (e) {
                  var t, n, o, i, a, s, l;
                  e.__d &&
                    ((s = (a = (t = e).__v).__e),
                    (l = t.__P) &&
                      ((n = []),
                      ((o = r({}, a)).__v = a.__v + 1),
                      (i = S(
                        l,
                        a,
                        o,
                        t.__n,
                        void 0 !== l.ownerSVGElement,
                        null != a.__h ? [s] : null,
                        n,
                        null == s ? c(a) : s,
                        a.__h
                      )),
                      E(n, a),
                      i != s && d(a)));
                });
          }
          function h(e, t, n, r, i, s, u, d, f, p) {
            var h,
              v,
              m,
              y,
              b,
              C,
              w,
              E = (r && r.__k) || ys,
              D = E.length;
            for (
              f == ms && (f = null != u ? u[0] : D ? c(r, 0) : null),
                n.__k = [],
                h = 0;
              h < t.length;
              h++
            )
              if (
                null !=
                (y = n.__k[h] =
                  null == (y = t[h]) || "boolean" == typeof y
                    ? null
                    : "string" == typeof y || "number" == typeof y
                    ? a(null, y, null, null, y)
                    : Array.isArray(y)
                    ? a(l, { children: y }, null, null, null)
                    : null != y.__e || null != y.__c
                    ? a(y.type, y.props, y.key, null, y.__v)
                    : y)
              ) {
                if (
                  ((y.__ = n),
                  (y.__b = n.__b + 1),
                  null === (m = E[h]) ||
                    (m && y.key == m.key && y.type === m.type))
                )
                  E[h] = void 0;
                else
                  for (v = 0; v < D; v++) {
                    if ((m = E[v]) && y.key == m.key && y.type === m.type) {
                      E[v] = void 0;
                      break;
                    }
                    m = null;
                  }
                (b = S(e, y, (m = m || ms), i, s, u, d, f, p)),
                  (v = y.ref) &&
                    m.ref != v &&
                    (w || (w = []),
                    m.ref && w.push(m.ref, null, y),
                    w.push(v, y.__c || b, y)),
                  null != b
                    ? (null == C && (C = b),
                      (f = g(e, y, m, E, u, b, f)),
                      p || "option" != n.type
                        ? "function" == typeof n.type && (n.__d = f)
                        : (e.value = ""))
                    : f && m.__e == f && f.parentNode != e && (f = c(m));
              }
            if (((n.__e = C), null != u && "function" != typeof n.type))
              for (h = u.length; h--; ) null != u[h] && o(u[h]);
            for (h = D; h--; ) null != E[h] && R(E[h], E[h]);
            if (w) for (h = 0; h < w.length; h++) T(w[h], w[++h], w[++h]);
          }
          function g(e, t, n, r, o, i, a) {
            var s, l, u;
            if (void 0 !== t.__d) (s = t.__d), (t.__d = void 0);
            else if (o == n || i != a || null == i.parentNode)
              e: if (null == a || a.parentNode !== e)
                e.appendChild(i), (s = null);
              else {
                for (l = a, u = 0; (l = l.nextSibling) && u < r.length; u += 2)
                  if (l == i) break e;
                e.insertBefore(i, a), (s = a);
              }
            return void 0 !== s ? s : i.nextSibling;
          }
          function v(e, t, n, r, o) {
            var i;
            for (i in n)
              "children" === i || "key" === i || i in t || y(e, i, null, n[i], r);
            for (i in t)
              (o && "function" != typeof t[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                n[i] === t[i] ||
                y(e, i, t[i], n[i], r);
          }
          function m(e, t, n) {
            "-" === t[0]
              ? e.setProperty(t, n)
              : (e[t] =
                  null == n
                    ? ""
                    : "number" != typeof n || bs.test(t)
                    ? n
                    : n + "px");
          }
          function y(e, t, n, r, o) {
            var i, a, s;
            if ((o && "className" == t && (t = "class"), "style" === t))
              if ("string" == typeof n) e.style.cssText = n;
              else {
                if (("string" == typeof r && (e.style.cssText = r = ""), r))
                  for (t in r) (n && t in n) || m(e.style, t, "");
                if (n) for (t in n) (r && n[t] === r[t]) || m(e.style, t, n[t]);
              }
            else
              "o" === t[0] && "n" === t[1]
                ? ((i = t !== (t = t.replace(/Capture$/, ""))),
                  (a = t.toLowerCase()) in e && (t = a),
                  (t = t.slice(2)),
                  e.l || (e.l = {}),
                  (e.l[t + i] = n),
                  (s = i ? C : b),
                  n
                    ? r || e.addEventListener(t, s, i)
                    : e.removeEventListener(t, s, i))
                : "list" !== t &&
                  "tagName" !== t &&
                  "form" !== t &&
                  "type" !== t &&
                  "size" !== t &&
                  "download" !== t &&
                  "href" !== t &&
                  !o &&
                  t in e
                ? (e[t] = null == n ? "" : n)
                : "function" != typeof n &&
                  "dangerouslySetInnerHTML" !== t &&
                  (t !== (t = t.replace(/xlink:?/, ""))
                    ? null == n || !1 === n
                      ? e.removeAttributeNS(
                          "http://www.w3.org/1999/xlink",
                          t.toLowerCase()
                        )
                      : e.setAttributeNS(
                          "http://www.w3.org/1999/xlink",
                          t.toLowerCase(),
                          n
                        )
                    : null == n || (!1 === n && !/^ar/.test(t))
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, n));
          }
          function b(e) {
            this.l[e.type + !1](us.event ? us.event(e) : e);
          }
          function C(e) {
            this.l[e.type + !0](us.event ? us.event(e) : e);
          }
          function w(e, t, n) {
            var r, o;
            for (r = 0; r < e.__k.length; r++)
              (o = e.__k[r]) &&
                ((o.__ = e),
                o.__e &&
                  ("function" == typeof o.type && o.__k.length > 1 && w(o, t, n),
                  (t = g(n, o, o, e.__k, null, o.__e, t)),
                  "function" == typeof e.type && (e.__d = t)));
          }
          function S(e, t, n, o, i, a, s, c, d) {
            var f,
              p,
              g,
              v,
              m,
              y,
              b,
              C,
              S,
              E,
              T,
              R = t.type;
            if (void 0 !== t.constructor) return null;
            null != n.__h &&
              ((d = n.__h), (c = t.__e = n.__e), (t.__h = null), (a = [c])),
              (f = us.__b) && f(t);
            try {
              e: if ("function" == typeof R) {
                if (
                  ((C = t.props),
                  (S = (f = R.contextType) && o[f.__c]),
                  (E = f ? (S ? S.props.value : f.__) : o),
                  n.__c
                    ? (b = (p = t.__c = n.__c).__ = p.__E)
                    : ("prototype" in R && R.prototype.render
                        ? (t.__c = p = new R(C, E))
                        : ((t.__c = p = new u(C, E)),
                          (p.constructor = R),
                          (p.render = x)),
                      S && S.sub(p),
                      (p.props = C),
                      p.state || (p.state = {}),
                      (p.context = E),
                      (p.__n = o),
                      (g = p.__d = !0),
                      (p.__h = [])),
                  null == p.__s && (p.__s = p.state),
                  null != R.getDerivedStateFromProps &&
                    (p.__s == p.state && (p.__s = r({}, p.__s)),
                    r(p.__s, R.getDerivedStateFromProps(C, p.__s))),
                  (v = p.props),
                  (m = p.state),
                  g)
                )
                  null == R.getDerivedStateFromProps &&
                    null != p.componentWillMount &&
                    p.componentWillMount(),
                    null != p.componentDidMount &&
                      p.__h.push(p.componentDidMount);
                else {
                  if (
                    (null == R.getDerivedStateFromProps &&
                      C !== v &&
                      null != p.componentWillReceiveProps &&
                      p.componentWillReceiveProps(C, E),
                    (!p.__e &&
                      null != p.shouldComponentUpdate &&
                      !1 === p.shouldComponentUpdate(C, p.__s, E)) ||
                      t.__v === n.__v)
                  ) {
                    (p.props = C),
                      (p.state = p.__s),
                      t.__v !== n.__v && (p.__d = !1),
                      (p.__v = t),
                      (t.__e = n.__e),
                      (t.__k = n.__k),
                      p.__h.length && s.push(p),
                      w(t, c, e);
                    break e;
                  }
                  null != p.componentWillUpdate &&
                    p.componentWillUpdate(C, p.__s, E),
                    null != p.componentDidUpdate &&
                      p.__h.push(function () {
                        p.componentDidUpdate(v, m, y);
                      });
                }
                (p.context = E),
                  (p.props = C),
                  (p.state = p.__s),
                  (f = us.__r) && f(t),
                  (p.__d = !1),
                  (p.__v = t),
                  (p.__P = e),
                  (f = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s),
                  null != p.getChildContext &&
                    (o = r(r({}, o), p.getChildContext())),
                  g ||
                    null == p.getSnapshotBeforeUpdate ||
                    (y = p.getSnapshotBeforeUpdate(v, m)),
                  (T =
                    null != f && f.type == l && null == f.key
                      ? f.props.children
                      : f),
                  h(e, Array.isArray(T) ? T : [T], t, n, o, i, a, s, c, d),
                  (p.base = t.__e),
                  (t.__h = null),
                  p.__h.length && s.push(p),
                  b && (p.__E = p.__ = null),
                  (p.__e = !1);
              } else
                null == a && t.__v === n.__v
                  ? ((t.__k = n.__k), (t.__e = n.__e))
                  : (t.__e = D(n.__e, t, n, o, i, a, s, d));
              (f = us.diffed) && f(t);
            } catch (e) {
              (t.__v = null),
                (d || null != a) &&
                  ((t.__e = c), (t.__h = !!d), (a[a.indexOf(c)] = null)),
                us.__e(e, t, n);
            }
            return t.__e;
          }
          function E(e, t) {
            us.__c && us.__c(t, e),
              e.some(function (t) {
                try {
                  (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                      e.call(t);
                    });
                } catch (e) {
                  us.__e(e, t.__v);
                }
              });
          }
          function D(e, t, n, r, o, i, a, s) {
            var l,
              u,
              c,
              d,
              f,
              p = n.props,
              g = t.props;
            if (((o = "svg" === t.type || o), null != i))
              for (l = 0; l < i.length; l++)
                if (
                  null != (u = i[l]) &&
                  ((null === t.type
                    ? 3 === u.nodeType
                    : u.localName === t.type) ||
                    e == u)
                ) {
                  (e = u), (i[l] = null);
                  break;
                }
            if (null == e) {
              if (null === t.type) return document.createTextNode(g);
              (e = o
                ? document.createElementNS("http://www.w3.org/2000/svg", t.type)
                : document.createElement(t.type, g.is && { is: g.is })),
                (i = null),
                (s = !1);
            }
            if (null === t.type) p === g || (s && e.data === g) || (e.data = g);
            else {
              if (
                (null != i && (i = ys.slice.call(e.childNodes)),
                (c = (p = n.props || ms).dangerouslySetInnerHTML),
                (d = g.dangerouslySetInnerHTML),
                !s)
              ) {
                if (null != i)
                  for (p = {}, f = 0; f < e.attributes.length; f++)
                    p[e.attributes[f].name] = e.attributes[f].value;
                (d || c) &&
                  ((d &&
                    ((c && d.__html == c.__html) || d.__html === e.innerHTML)) ||
                    (e.innerHTML = (d && d.__html) || ""));
              }
              v(e, g, p, o, s),
                d
                  ? (t.__k = [])
                  : ((l = t.props.children),
                    h(
                      e,
                      Array.isArray(l) ? l : [l],
                      t,
                      n,
                      r,
                      "foreignObject" !== t.type && o,
                      i,
                      a,
                      ms,
                      s
                    )),
                s ||
                  ("value" in g &&
                    void 0 !== (l = g.value) &&
                    (l !== e.value || ("progress" === t.type && !l)) &&
                    y(e, "value", l, p.value, !1),
                  "checked" in g &&
                    void 0 !== (l = g.checked) &&
                    l !== e.checked &&
                    y(e, "checked", l, p.checked, !1));
            }
            return e;
          }
          function T(e, t, n) {
            try {
              "function" == typeof e ? e(t) : (e.current = t);
            } catch (e) {
              us.__e(e, n);
            }
          }
          function R(e, t, n) {
            var r, i, a;
            if (
              (us.unmount && us.unmount(e),
              (r = e.ref) &&
                ((r.current && r.current !== e.__e) || T(r, null, t)),
              n || "function" == typeof e.type || (n = null != (i = e.__e)),
              (e.__e = e.__d = void 0),
              null != (r = e.__c))
            ) {
              if (r.componentWillUnmount)
                try {
                  r.componentWillUnmount();
                } catch (e) {
                  us.__e(e, t);
                }
              r.base = r.__P = null;
            }
            if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && R(r[a], t, n);
            null != i && o(i);
          }
          function x(e, t, n) {
            return this.constructor(e, n);
          }
          function k(e, t, n) {
            var r, o, a;
            us.__ && us.__(e, t),
              (o = (r = n === ps) ? null : (n && n.__k) || t.__k),
              (e = i(l, null, [e])),
              (a = []),
              S(
                t,
                ((r ? t : n || t).__k = e),
                o || ms,
                ms,
                void 0 !== t.ownerSVGElement,
                n && !r
                  ? [n]
                  : o
                  ? null
                  : t.childNodes.length
                  ? ys.slice.call(t.childNodes)
                  : null,
                a,
                n || ms,
                r
              ),
              E(a, e);
          }
          function M(e, t) {
            var n = {
              __c: (t = "__cC" + hs++),
              __: e,
              Consumer: function (e, t) {
                return e.children(t);
              },
              Provider: function (e, n, r) {
                return (
                  this.getChildContext ||
                    ((n = []),
                    ((r = {})[t] = this),
                    (this.getChildContext = function () {
                      return r;
                    }),
                    (this.shouldComponentUpdate = function (e) {
                      this.props.value !== e.value && n.some(f);
                    }),
                    (this.sub = function (e) {
                      n.push(e);
                      var t = e.componentWillUnmount;
                      e.componentWillUnmount = function () {
                        n.splice(n.indexOf(e), 1), t && t.call(e);
                      };
                    })),
                  e.children
                );
              },
            };
            return (n.Provider.__ = n.Consumer.contextType = n);
          }
          function _() {
            function e(e) {
              n.push(e);
            }
            var t = us.debounceRendering,
              n = [];
            for (
              us.debounceRendering = e,
                k(i(ws, {}), document.createElement("div"));
              n.length;
  
            )
              n.shift()();
            us.debounceRendering = t;
          }
          function I(e) {
            var t = M(e),
              n = t.Provider;
            return (
              (t.Provider = function () {
                var e = this,
                  t = !this.getChildContext,
                  r = n.apply(this, arguments);
                if (t) {
                  var o = [];
                  (this.shouldComponentUpdate = function (t) {
                    e.props.value !== t.value &&
                      o.forEach(function (e) {
                        (e.context = t.value), e.forceUpdate();
                      });
                  }),
                    (this.sub = function (e) {
                      o.push(e);
                      var t = e.componentWillUnmount;
                      e.componentWillUnmount = function () {
                        o.splice(o.indexOf(e), 1), t && t.call(e);
                      };
                    });
                }
                return r;
              }),
              t
            );
          }
          function P(e) {
            k(null, e);
          }
          function N(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }
          function H(e, t) {
            if (e.closest) return e.closest(t);
            if (!document.documentElement.contains(e)) return null;
            do {
              if (O(e, t)) return e;
              e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
          }
          function O(e, t) {
            return (e.matches || e.matchesSelector || e.msMatchesSelector).call(
              e,
              t
            );
          }
          function A(e, t) {
            for (
              var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
              o < n.length;
              o += 1
            )
              for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1)
                r.push(i[a]);
            return r;
          }
          function L(e, t) {
            for (
              var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
              o < n.length;
              o += 1
            )
              for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                var s = i[a];
                (t && !O(s, t)) || r.push(s);
              }
            return r;
          }
          function z(e, t) {
            for (var n in t) j(e, n, t[n]);
          }
          function j(e, t, n) {
            null == n
              ? (e.style[t] = "")
              : "number" == typeof n && Es.test(t)
              ? (e.style[t] = n + "px")
              : (e.style[t] = n);
          }
          function U(e) {
            e.preventDefault();
          }
          function B(e, t) {
            return function (n) {
              var r = H(n.target, e);
              r && t.call(r, n, r);
            };
          }
          function W(e, t, n, r) {
            var o = B(n, r);
            return (
              e.addEventListener(t, o),
              function () {
                e.removeEventListener(t, o);
              }
            );
          }
          function V(e, t, n, r) {
            var o;
            return W(e, "mouseover", t, function (e, t) {
              if (t !== o) {
                (o = t), n(e, t);
                var i = function (e) {
                  (o = null), r(e, t), t.removeEventListener("mouseleave", i);
                };
                t.addEventListener("mouseleave", i);
              }
            });
          }
          function F(e, t) {
            var n = function (r) {
              t(r),
                Ds.forEach(function (t) {
                  e.removeEventListener(t, n);
                });
            };
            Ds.forEach(function (t) {
              e.addEventListener(t, n);
            });
          }
          function G() {
            return (Ts += 1), String(Ts);
          }
          function Y() {
            document.body.classList.add("fc-not-allowed");
          }
          function Z() {
            document.body.classList.remove("fc-not-allowed");
          }
          function q(e) {
            e.classList.add("fc-unselectable"),
              e.addEventListener("selectstart", U);
          }
          function X(e) {
            e.classList.remove("fc-unselectable"),
              e.removeEventListener("selectstart", U);
          }
          function $(e) {
            e.addEventListener("contextmenu", U);
          }
          function J(e) {
            e.removeEventListener("contextmenu", U);
          }
          function K(e) {
            var t,
              n,
              r = [],
              o = [];
            for (
              "string" == typeof e
                ? (o = e.split(/\s*,\s*/))
                : "function" == typeof e
                ? (o = [e])
                : Array.isArray(e) && (o = e),
                t = 0;
              t < o.length;
              t += 1
            )
              (n = o[t]),
                "string" == typeof n
                  ? r.push(
                      "-" === n.charAt(0)
                        ? { field: n.substring(1), order: -1 }
                        : { field: n, order: 1 }
                    )
                  : "function" == typeof n && r.push({ func: n });
            return r;
          }
          function Q(e, t, n) {
            var r, o;
            for (r = 0; r < n.length; r += 1) if ((o = ee(e, t, n[r]))) return o;
            return 0;
          }
          function ee(e, t, n) {
            return n.func
              ? n.func(e, t)
              : te(e[n.field], t[n.field]) * (n.order || 1);
          }
          function te(e, t) {
            return e || t
              ? null == t
                ? -1
                : null == e
                ? 1
                : "string" == typeof e || "string" == typeof t
                ? String(e).localeCompare(String(t))
                : e - t
              : 0;
          }
          function ne(e, t) {
            var n = String(e);
            return "000".substr(0, t - n.length) + n;
          }
          function re(e, t) {
            return e - t;
          }
          function oe(e) {
            return e % 1 == 0;
          }
          function ie(e) {
            var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
              n = e.querySelector(".fc-scrollgrid-shrink-cushion");
            if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
            if (!n)
              throw new Error("needs fc-scrollgrid-shrink-cushion className");
            return (
              e.getBoundingClientRect().width -
              t.getBoundingClientRect().width +
              n.getBoundingClientRect().width
            );
          }
          function ae(e, t) {
            var n = Re(e);
            return (n[2] += 7 * t), xe(n);
          }
          function se(e, t) {
            var n = Re(e);
            return (n[2] += t), xe(n);
          }
          function le(e, t) {
            var n = Re(e);
            return (n[6] += t), xe(n);
          }
          function ue(e, t) {
            return ce(e, t) / 7;
          }
          function ce(e, t) {
            return (t.valueOf() - e.valueOf()) / 864e5;
          }
          function de(e, t) {
            return (t.valueOf() - e.valueOf()) / 36e5;
          }
          function fe(e, t) {
            return (t.valueOf() - e.valueOf()) / 6e4;
          }
          function pe(e, t) {
            return (t.valueOf() - e.valueOf()) / 1e3;
          }
          function he(e, t) {
            var n = me(e),
              r = me(t);
            return {
              years: 0,
              months: 0,
              days: Math.round(ce(n, r)),
              milliseconds:
                t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
            };
          }
          function ge(e, t) {
            var n = ve(e, t);
            return null !== n && n % 7 == 0 ? n / 7 : null;
          }
          function ve(e, t) {
            return Me(e) === Me(t) ? Math.round(ce(e, t)) : null;
          }
          function me(e) {
            return xe([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
          }
          function ye(e) {
            return xe([
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
            ]);
          }
          function be(e) {
            return xe([
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
            ]);
          }
          function Ce(e) {
            return xe([
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
            ]);
          }
          function we(e, t, n) {
            var r = e.getUTCFullYear(),
              o = Se(e, r, t, n);
            if (o < 1) return Se(e, r - 1, t, n);
            var i = Se(e, r + 1, t, n);
            return i >= 1 ? Math.min(o, i) : o;
          }
          function Se(e, t, n, r) {
            var o = xe([t, 0, 1 + Ee(t, n, r)]),
              i = me(e),
              a = Math.round(ce(o, i));
            return Math.floor(a / 7) + 1;
          }
          function Ee(e, t, n) {
            var r = 7 + t - n;
            return (-(7 + xe([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
          }
          function De(e) {
            return [
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
              e.getMilliseconds(),
            ];
          }
          function Te(e) {
            return new Date(
              e[0],
              e[1] || 0,
              null == e[2] ? 1 : e[2],
              e[3] || 0,
              e[4] || 0,
              e[5] || 0
            );
          }
          function Re(e) {
            return [
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds(),
            ];
          }
          function xe(e) {
            return (
              1 === e.length && (e = e.concat([0])),
              new Date(Date.UTC.apply(Date, e))
            );
          }
          function ke(e) {
            return !isNaN(e.valueOf());
          }
          function Me(e) {
            return (
              1e3 * e.getUTCHours() * 60 * 60 +
              1e3 * e.getUTCMinutes() * 60 +
              1e3 * e.getUTCSeconds() +
              e.getUTCMilliseconds()
            );
          }
          function _e(e, t, n, r) {
            return {
              instanceId: G(),
              defId: e,
              range: t,
              forcedStartTzo: null == n ? null : n,
              forcedEndTzo: null == r ? null : r,
            };
          }
          function Ie(e, t) {
            var n = {};
            if (t)
              for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                  var a = e[i][r];
                  if ("object" == typeof a && a) o.unshift(a);
                  else if (void 0 !== a) {
                    n[r] = a;
                    break;
                  }
                }
                o.length && (n[r] = Ie(o));
              }
            for (var i = e.length - 1; i >= 0; i -= 1) {
              var s = e[i];
              for (var l in s) l in n || (n[l] = s[l]);
            }
            return n;
          }
          function Pe(e, t) {
            var n = {};
            for (var r in e) t(e[r], r) && (n[r] = e[r]);
            return n;
          }
          function Ne(e, t) {
            var n = {};
            for (var r in e) n[r] = t(e[r], r);
            return n;
          }
          function He(e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
              t[r[n]] = !0;
            }
            return t;
          }
          function Oe(e, t) {
            for (var n = {}, r = 0; r < e.length; r += 1) {
              var o = t(e[r], r);
              n[o[0]] = o[1];
            }
            return n;
          }
          function Ae(e) {
            var t = [];
            for (var n in e) t.push(e[n]);
            return t;
          }
          function Le(e, t) {
            if (e === t) return !0;
            for (var n in e) if (xs.call(e, n) && !(n in t)) return !1;
            for (var n in t) if (xs.call(t, n) && e[n] !== t[n]) return !1;
            return !0;
          }
          function ze(e, t) {
            var n = [];
            for (var r in e) xs.call(e, r) && (r in t || n.push(r));
            for (var r in t) xs.call(t, r) && e[r] !== t[r] && n.push(r);
            return n;
          }
          function je(e, t, n) {
            if ((void 0 === n && (n = {}), e === t)) return !0;
            for (var r in t) if (!(r in e && Ue(e[r], t[r], n[r]))) return !1;
            for (var r in e) if (!(r in t)) return !1;
            return !0;
          }
          function Ue(e, t, n) {
            return e === t || !0 === n || (!!n && n(e, t));
          }
          function Be(e, t, n, r) {
            void 0 === t && (t = 0), void 0 === r && (r = 1);
            var o = [];
            null == n && (n = Object.keys(e).length);
            for (var i = t; i < n; i += r) {
              var a = e[i];
              void 0 !== a && o.push(a);
            }
            return o;
          }
          function We(e, t, n, r) {
            for (var o = 0; o < r.length; o += 1) {
              var i = r[o].parse(e, n);
              if (i) {
                var a = e.allDay;
                return (
                  null == a &&
                    null == (a = t) &&
                    null == (a = i.allDayGuess) &&
                    (a = !1),
                  {
                    allDay: a,
                    duration: i.duration,
                    typeData: i.typeData,
                    typeId: o,
                  }
                );
              }
            }
            return null;
          }
          function Ve(e, t, n) {
            var r = n.dateEnv,
              o = n.pluginHooks,
              i = n.options,
              a = e.defs,
              s = e.instances;
            s = Pe(s, function (e) {
              return !a[e.defId].recurringDef;
            });
            for (var l in a) {
              var u = a[l];
              if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c ||
                  (c = u.allDay
                    ? i.defaultAllDayEventDuration
                    : i.defaultTimedEventDuration);
                for (
                  var d = Fe(u, c, t, r, o.recurringTypes), f = 0, p = d;
                  f < p.length;
                  f++
                ) {
                  var h = p[f],
                    g = _e(l, { start: h, end: r.add(h, c) });
                  s[g.instanceId] = g;
                }
              }
            }
            return { defs: a, instances: s };
          }
          function Fe(e, t, n, r, o) {
            var i = o[e.recurringDef.typeId],
              a = i.expand(
                e.recurringDef.typeData,
                { start: r.subtract(n.start, t), end: n.end },
                r
              );
            return e.allDay && (a = a.map(me)), a;
          }
          function Ge(e, t) {
            var n;
            return "string" == typeof e
              ? Ye(e)
              : "object" == typeof e && e
              ? Ze(e)
              : "number" == typeof e
              ? Ze(((n = {}), (n[t || "milliseconds"] = e), n))
              : null;
          }
          function Ye(e) {
            var t = Ms.exec(e);
            if (t) {
              var n = t[1] ? -1 : 1;
              return {
                years: 0,
                months: 0,
                days: n * (t[2] ? parseInt(t[2], 10) : 0),
                milliseconds:
                  n *
                  (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                    60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                    1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                    (t[6] ? parseInt(t[6], 10) : 0)),
              };
            }
            return null;
          }
          function Ze(e) {
            var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds:
                  60 * (e.hours || e.hour || 0) * 60 * 1e3 +
                  60 * (e.minutes || e.minute || 0) * 1e3 +
                  1e3 * (e.seconds || e.second || 0) +
                  (e.milliseconds || e.millisecond || e.ms || 0),
              },
              n = e.weeks || e.week;
            return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
          }
          function qe(e, t) {
            return (
              e.years === t.years &&
              e.months === t.months &&
              e.days === t.days &&
              e.milliseconds === t.milliseconds
            );
          }
          function Xe(e) {
            return e.years || e.months || e.milliseconds ? 0 : e.days;
          }
          function $e(e, t) {
            return {
              years: e.years + t.years,
              months: e.months + t.months,
              days: e.days + t.days,
              milliseconds: e.milliseconds + t.milliseconds,
            };
          }
          function Je(e, t) {
            return {
              years: e.years - t.years,
              months: e.months - t.months,
              days: e.days - t.days,
              milliseconds: e.milliseconds - t.milliseconds,
            };
          }
          function Ke(e, t) {
            return {
              years: e.years * t,
              months: e.months * t,
              days: e.days * t,
              milliseconds: e.milliseconds * t,
            };
          }
          function Qe(e) {
            return tt(e) / 365;
          }
          function et(e) {
            return tt(e) / 30;
          }
          function tt(e) {
            return ot(e) / 864e5;
          }
          function nt(e) {
            return ot(e) / 6e4;
          }
          function rt(e) {
            return ot(e) / 1e3;
          }
          function ot(e) {
            return (
              31536e6 * e.years +
              2592e6 * e.months +
              864e5 * e.days +
              e.milliseconds
            );
          }
          function it(e, t) {
            for (var n = null, r = 0; r < ks.length; r += 1) {
              var o = ks[r];
              if (t[o]) {
                var i = e[o] / t[o];
                if (!oe(i) || (null !== n && n !== i)) return null;
                n = i;
              } else if (e[o]) return null;
            }
            return n;
          }
          function at(e) {
            var t = e.milliseconds;
            if (t) {
              if (t % 1e3 != 0) return { unit: "millisecond", value: t };
              if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
              if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
              if (t) return { unit: "hour", value: t / 36e5 };
            }
            return e.days
              ? e.specifiedWeeks && e.days % 7 == 0
                ? { unit: "week", value: e.days / 7 }
                : { unit: "day", value: e.days }
              : e.months
              ? { unit: "month", value: e.months }
              : e.years
              ? { unit: "year", value: e.years }
              : { unit: "millisecond", value: 0 };
          }
          function st(e, t, n) {
            void 0 === n && (n = !1);
            var r = e.toISOString();
            return (
              (r = r.replace(".000", "")),
              n && (r = r.replace("T00:00:00Z", "")),
              r.length > 10 &&
                (null == t
                  ? (r = r.replace("Z", ""))
                  : 0 !== t && (r = r.replace("Z", ct(t, !0)))),
              r
            );
          }
          function lt(e) {
            return e.toISOString().replace(/T.*$/, "");
          }
          function ut(e) {
            return (
              ne(e.getUTCHours(), 2) +
              ":" +
              ne(e.getUTCMinutes(), 2) +
              ":" +
              ne(e.getUTCSeconds(), 2)
            );
          }
          function ct(e, t) {
            void 0 === t && (t = !1);
            var n = e < 0 ? "-" : "+",
              r = Math.abs(e),
              o = Math.floor(r / 60),
              i = Math.round(r % 60);
            return t
              ? n + ne(o, 2) + ":" + ne(i, 2)
              : "GMT" + n + o + (i ? ":" + ne(i, 2) : "");
          }
          function dt(e, t) {
            for (var n = 0, r = 0; r < e.length; )
              e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
            return n;
          }
          function ft(e, t, n) {
            if (e === t) return !0;
            var r,
              o = e.length;
            if (o !== t.length) return !1;
            for (r = 0; r < o; r += 1)
              if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
            return !0;
          }
          function pt(e, t, n) {
            var r, o;
            return function () {
              for (var i = [], a = 0; a < arguments.length; a++)
                i[a] = arguments[a];
              if (r) {
                if (!ft(r, i)) {
                  n && n(o);
                  var s = e.apply(this, i);
                  (t && t(s, o)) || (o = s);
                }
              } else o = e.apply(this, i);
              return (r = i), o;
            };
          }
          function ht(e, t, n) {
            var r,
              o,
              i = this;
            return function (a) {
              if (r) {
                if (!Le(r, a)) {
                  n && n(o);
                  var s = e.call(i, a);
                  (t && t(s, o)) || (o = s);
                }
              } else o = e.call(i, a);
              return (r = a), o;
            };
          }
          function gt(e, t, n) {
            var r = this,
              o = [],
              i = [];
            return function (a) {
              for (var s = o.length, l = a.length, u = 0; u < s; u += 1)
                if (a[u]) {
                  if (!ft(o[u], a[u])) {
                    n && n(i[u]);
                    var c = e.apply(r, a[u]);
                    (t && t(c, i[u])) || (i[u] = c);
                  }
                } else n && n(i[u]);
              for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
              return (o = a), i.splice(l), i;
            };
          }
          function vt(e, t, n) {
            var r = this,
              o = {},
              i = {};
            return function (a) {
              var s = {};
              for (var l in a)
                if (i[l])
                  if (ft(o[l], a[l])) s[l] = i[l];
                  else {
                    n && n(i[l]);
                    var u = e.apply(r, a[l]);
                    s[l] = t && t(u, i[l]) ? i[l] : u;
                  }
                else s[l] = e.apply(r, a[l]);
              return (o = a), (i = s), s;
            };
          }
          function mt(e, t, n) {
            var r = Object.keys(e).length;
            return 1 === r && "short" === e.timeZoneName
              ? function (e) {
                  return ct(e.timeZoneOffset);
                }
              : 0 === r && t.week
              ? function (e) {
                  return St(
                    n.computeWeekNumber(e.marker),
                    n.weekText,
                    n.locale,
                    t.week
                  );
                }
              : yt(e, t, n);
          }
          function yt(e, t, n) {
            (e = vs({}, e)), (t = vs({}, t)), bt(e, t), (e.timeZone = "UTC");
            var r,
              o = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
              var i = vs({}, e);
              delete i.minute, (r = new Intl.DateTimeFormat(n.locale.codes, i));
            }
            return function (i) {
              var a,
                s = i.marker;
              return (
                (a = r && !s.getUTCMinutes() ? r : o), Ct(a.format(s), i, e, t, n)
              );
            };
          }
          function bt(e, t) {
            e.timeZoneName &&
              (e.hour || (e.hour = "2-digit"),
              e.minute || (e.minute = "2-digit")),
              "long" === e.timeZoneName && (e.timeZoneName = "short"),
              t.omitZeroMinute &&
                (e.second || e.millisecond) &&
                delete t.omitZeroMinute;
          }
          function Ct(e, t, n, r, o) {
            return (
              (e = e.replace(Os, "")),
              "short" === n.timeZoneName &&
                (e = wt(
                  e,
                  "UTC" === o.timeZone || null == t.timeZoneOffset
                    ? "UTC"
                    : ct(t.timeZoneOffset)
                )),
              r.omitCommas && (e = e.replace(Ns, "").trim()),
              r.omitZeroMinute && (e = e.replace(":00", "")),
              !1 === r.meridiem
                ? (e = e.replace(Ps, "").trim())
                : "narrow" === r.meridiem
                ? (e = e.replace(Ps, function (e, t) {
                    return t.toLocaleLowerCase();
                  }))
                : "short" === r.meridiem
                ? (e = e.replace(Ps, function (e, t) {
                    return t.toLocaleLowerCase() + "m";
                  }))
                : "lowercase" === r.meridiem &&
                  (e = e.replace(Ps, function (e) {
                    return e.toLocaleLowerCase();
                  })),
              (e = e.replace(Hs, " ")),
              (e = e.trim())
            );
          }
          function wt(e, t) {
            var n = !1;
            return (
              (e = e.replace(As, function () {
                return (n = !0), t;
              })),
              n || (e += " " + t),
              e
            );
          }
          function St(e, t, n, r) {
            var o = [];
            return (
              "narrow" === r ? o.push(t) : "short" === r && o.push(t, " "),
              o.push(n.simpleNumberFormat.format(e)),
              "rtl" === n.options.direction && o.reverse(),
              o.join("")
            );
          }
          function Et(e, t, n) {
            return n.getMarkerYear(e) !== n.getMarkerYear(t)
              ? 5
              : n.getMarkerMonth(e) !== n.getMarkerMonth(t)
              ? 4
              : n.getMarkerDay(e) !== n.getMarkerDay(t)
              ? 2
              : Me(e) !== Me(t)
              ? 1
              : 0;
          }
          function Dt(e, t) {
            var n = {};
            for (var r in e) (r in Is && !(Is[r] <= t)) || (n[r] = e[r]);
            return n;
          }
          function Tt(e, t, n, r) {
            for (var o = 0; o < e.length; ) {
              var i = e.indexOf(t, o);
              if (-1 === i) break;
              var a = e.substr(0, i);
              o = i + t.length;
              for (var s = e.substr(o), l = 0; l < n.length; ) {
                var u = n.indexOf(r, l);
                if (-1 === u) break;
                var c = n.substr(0, u);
                l = u + r.length;
                var d = n.substr(l);
                if (a === c && s === d) return { before: a, after: s };
              }
            }
            return null;
          }
          function Rt(e, t) {
            var n = t.markerToArray(e.marker);
            return {
              marker: e.marker,
              timeZoneOffset: e.timeZoneOffset,
              array: n,
              year: n[0],
              month: n[1],
              day: n[2],
              hour: n[3],
              minute: n[4],
              second: n[5],
              millisecond: n[6],
            };
          }
          function xt(e, t, n, r) {
            var o = Rt(e, n.calendarSystem);
            return {
              date: o,
              start: o,
              end: t ? Rt(t, n.calendarSystem) : null,
              timeZone: n.timeZone,
              localeCodes: n.locale.codes,
              defaultSeparator: r || n.defaultSeparator,
            };
          }
          function kt(e) {
            return "object" == typeof e && e
              ? new Ls(e)
              : "string" == typeof e
              ? new zs(e)
              : "function" == typeof e
              ? new js(e)
              : null;
          }
          function Mt(e, t) {
            return "object" == typeof e && "object" == typeof t && e && t
              ? Le(e, t)
              : e === t;
          }
          function _t(e) {
            return Ie(e, Fs);
          }
          function It(e, t) {
            var n = {},
              r = {};
            for (var o in t) o in e && (n[o] = t[o](e[o]));
            for (var o in e) o in t || (r[o] = e[o]);
            return { refined: n, extra: r };
          }
          function Pt(e) {
            return e;
          }
          function Nt(e, t, n, r) {
            for (var o = Lt(), i = qt(n), a = 0, s = e; a < s.length; a++) {
              var l = s[a],
                u = Yt(l, t, n, r, i);
              u && Ht(u, o);
            }
            return o;
          }
          function Ht(e, t) {
            return (
              void 0 === t && (t = Lt()),
              (t.defs[e.def.defId] = e.def),
              e.instance && (t.instances[e.instance.instanceId] = e.instance),
              t
            );
          }
          function Ot(e, t) {
            var n = e.instances[t];
            if (n) {
              var r = e.defs[n.defId],
                o = jt(e, function (e) {
                  return At(r, e);
                });
              return (o.defs[r.defId] = r), (o.instances[n.instanceId] = n), o;
            }
            return Lt();
          }
          function At(e, t) {
            return Boolean(e.groupId && e.groupId === t.groupId);
          }
          function Lt() {
            return { defs: {}, instances: {} };
          }
          function zt(e, t) {
            return {
              defs: vs(vs({}, e.defs), t.defs),
              instances: vs(vs({}, e.instances), t.instances),
            };
          }
          function jt(e, t) {
            var n = Pe(e.defs, t),
              r = Pe(e.instances, function (e) {
                return n[e.defId];
              });
            return { defs: n, instances: r };
          }
          function Ut(e, t) {
            var n = e.defs,
              r = e.instances,
              o = {},
              i = {};
            for (var a in n) t.defs[a] || (o[a] = n[a]);
            for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
            return { defs: o, instances: i };
          }
          function Bt(e, t) {
            return Array.isArray(e)
              ? Nt(e, null, t, !0)
              : "object" == typeof e && e
              ? Nt([e], null, t, !0)
              : null != e
              ? String(e)
              : null;
          }
          function Wt(e) {
            return Array.isArray(e)
              ? e
              : "string" == typeof e
              ? e.split(/\s+/)
              : [];
          }
          function Vt(e, t) {
            var n = Bt(e.constraint, t);
            return {
              display: e.display || null,
              startEditable:
                null != e.startEditable ? e.startEditable : e.editable,
              durationEditable:
                null != e.durationEditable ? e.durationEditable : e.editable,
              constraints: null != n ? [n] : [],
              overlap: null != e.overlap ? e.overlap : null,
              allows: null != e.allow ? [e.allow] : [],
              backgroundColor: e.backgroundColor || e.color || "",
              borderColor: e.borderColor || e.color || "",
              textColor: e.textColor || "",
              classNames: (e.className || []).concat(e.classNames || []),
            };
          }
          function Ft(e) {
            return e.reduce(Gt, Zs);
          }
          function Gt(e, t) {
            return {
              display: null != t.display ? t.display : e.display,
              startEditable:
                null != t.startEditable ? t.startEditable : e.startEditable,
              durationEditable:
                null != t.durationEditable
                  ? t.durationEditable
                  : e.durationEditable,
              constraints: e.constraints.concat(t.constraints),
              overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
              allows: e.allows.concat(t.allows),
              backgroundColor: t.backgroundColor || e.backgroundColor,
              borderColor: t.borderColor || e.borderColor,
              textColor: t.textColor || e.textColor,
              classNames: e.classNames.concat(t.classNames),
            };
          }
          function Yt(e, t, n, r, o) {
            void 0 === o && (o = qt(n));
            var i = Zt(e, n, o),
              a = i.refined,
              s = i.extra,
              l = Jt(t, n),
              u = We(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
            if (u) {
              var c = Xt(
                a,
                s,
                t ? t.sourceId : "",
                u.allDay,
                Boolean(u.duration),
                n
              );
              return (
                (c.recurringDef = {
                  typeId: u.typeId,
                  typeData: u.typeData,
                  duration: u.duration,
                }),
                { def: c, instance: null }
              );
            }
            var d = $t(a, l, n, r);
            if (d) {
              var c = Xt(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n);
              return {
                def: c,
                instance: _e(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo),
              };
            }
            return null;
          }
          function Zt(e, t, n) {
            return void 0 === n && (n = qt(t)), It(e, n);
          }
          function qt(e) {
            return vs(vs(vs({}, Ys), $s), e.pluginHooks.eventRefiners);
          }
          function Xt(e, t, n, r, o, i) {
            for (
              var a = {
                  title: e.title || "",
                  groupId: e.groupId || "",
                  publicId: e.id || "",
                  url: e.url || "",
                  recurringDef: null,
                  defId: G(),
                  sourceId: n,
                  allDay: r,
                  hasEnd: o,
                  ui: Vt(e, i),
                  extendedProps: vs(vs({}, e.extendedProps || {}), t),
                },
                s = 0,
                l = i.pluginHooks.eventDefMemberAdders;
              s < l.length;
              s++
            ) {
              var u = l[s];
              vs(a, u(e));
            }
            return (
              Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a
            );
          }
          function $t(e, t, n, r) {
            var o,
              i,
              a = e.allDay,
              s = null,
              l = !1,
              u = null,
              c = null != e.start ? e.start : e.date;
            if ((o = n.dateEnv.createMarkerMeta(c))) s = o.marker;
            else if (!r) return null;
            return (
              null != e.end && (i = n.dateEnv.createMarkerMeta(e.end)),
              null == a &&
                (a =
                  null != t
                    ? t
                    : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified)),
              a && s && (s = me(s)),
              i && ((u = i.marker), a && (u = me(u)), s && u <= s && (u = null)),
              u
                ? (l = !0)
                : r ||
                  ((l = n.options.forceEventDuration || !1),
                  (u = n.dateEnv.add(
                    s,
                    a
                      ? n.options.defaultAllDayEventDuration
                      : n.options.defaultTimedEventDuration
                  ))),
              {
                allDay: a,
                hasEnd: l,
                range: { start: s, end: u },
                forcedStartTzo: o ? o.forcedTzo : null,
                forcedEndTzo: i ? i.forcedTzo : null,
              }
            );
          }
          function Jt(e, t) {
            var n = null;
            return (
              e && (n = e.defaultAllDay),
              null == n && (n = t.options.defaultAllDay),
              n
            );
          }
          function Kt(e) {
            var t = Math.floor(ce(e.start, e.end)) || 1,
              n = me(e.start);
            return { start: n, end: se(n, t) };
          }
          function Qt(e, t) {
            void 0 === t && (t = Ge(0));
            var n = null,
              r = null;
            if (e.end) {
              r = me(e.end);
              var o = e.end.valueOf() - r.valueOf();
              o && o >= ot(t) && (r = se(r, 1));
            }
            return (
              e.start && ((n = me(e.start)), r && r <= n && (r = se(n, 1))),
              { start: n, end: r }
            );
          }
          function en(e) {
            var t = Qt(e);
            return ce(t.start, t.end) > 1;
          }
          function tn(e, t, n, r) {
            return "year" === r
              ? Ge(n.diffWholeYears(e, t), "year")
              : "month" === r
              ? Ge(n.diffWholeMonths(e, t), "month")
              : he(e, t);
          }
          function nn(e, t) {
            var n = null,
              r = null;
            return (
              e.start && (n = t.createMarker(e.start)),
              e.end && (r = t.createMarker(e.end)),
              n || r ? (n && r && r < n ? null : { start: n, end: r }) : null
            );
          }
          function rn(e, t) {
            var n,
              r,
              o = [],
              i = t.start;
            for (e.sort(on), n = 0; n < e.length; n += 1)
              (r = e[n]),
                r.start > i && o.push({ start: i, end: r.start }),
                r.end > i && (i = r.end);
            return i < t.end && o.push({ start: i, end: t.end }), o;
          }
          function on(e, t) {
            return e.start.valueOf() - t.start.valueOf();
          }
          function an(e, t) {
            var n = e.start,
              r = e.end,
              o = null;
            return (
              null !== t.start &&
                (n =
                  null === n
                    ? t.start
                    : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
              null != t.end &&
                (r =
                  null === r
                    ? t.end
                    : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
              (null === n || null === r || n < r) && (o = { start: n, end: r }),
              o
            );
          }
          function sn(e, t) {
            return (
              (null === e.start ? null : e.start.valueOf()) ===
                (null === t.start ? null : t.start.valueOf()) &&
              (null === e.end ? null : e.end.valueOf()) ===
                (null === t.end ? null : t.end.valueOf())
            );
          }
          function ln(e, t) {
            return (
              (null === e.end || null === t.start || e.end > t.start) &&
              (null === e.start || null === t.end || e.start < t.end)
            );
          }
          function un(e, t) {
            return (
              (null === e.start || (null !== t.start && t.start >= e.start)) &&
              (null === e.end || (null !== t.end && t.end <= e.end))
            );
          }
          function cn(e, t) {
            return (
              (null === e.start || t >= e.start) && (null === e.end || t < e.end)
            );
          }
          function dn(e, t) {
            return null != t.start && e < t.start
              ? t.start
              : null != t.end && e >= t.end
              ? new Date(t.end.valueOf() - 1)
              : e;
          }
          function fn(e, t, n, r) {
            var o = {},
              i = {},
              a = {},
              s = [],
              l = [],
              u = vn(e.defs, t);
            for (var c in e.defs) {
              var d = e.defs[c],
                f = u[d.defId];
              "inverse-background" === f.display &&
                (d.groupId
                  ? ((o[d.groupId] = []), a[d.groupId] || (a[d.groupId] = d))
                  : (i[c] = []));
            }
            for (var p in e.instances) {
              var h = e.instances[p],
                d = e.defs[h.defId],
                f = u[d.defId],
                g = h.range,
                v = !d.allDay && r ? Qt(g, r) : g,
                m = an(v, n);
              m &&
                ("inverse-background" === f.display
                  ? d.groupId
                    ? o[d.groupId].push(m)
                    : i[h.defId].push(m)
                  : "none" !== f.display &&
                    ("background" === f.display ? s : l).push({
                      def: d,
                      ui: f,
                      instance: h,
                      range: m,
                      isStart: v.start && v.start.valueOf() === m.start.valueOf(),
                      isEnd: v.end && v.end.valueOf() === m.end.valueOf(),
                    }));
            }
            for (var y in o)
              for (var b = o[y], C = rn(b, n), w = 0, S = C; w < S.length; w++) {
                var E = S[w],
                  d = a[y],
                  f = u[d.defId];
                s.push({
                  def: d,
                  ui: f,
                  instance: null,
                  range: E,
                  isStart: !1,
                  isEnd: !1,
                });
              }
            for (var c in i)
              for (var b = i[c], C = rn(b, n), D = 0, T = C; D < T.length; D++) {
                var E = T[D];
                s.push({
                  def: e.defs[c],
                  ui: u[c],
                  instance: null,
                  range: E,
                  isStart: !1,
                  isEnd: !1,
                });
              }
            return { bg: s, fg: l };
          }
          function pn(e) {
            return (
              "background" === e.ui.display ||
              "inverse-background" === e.ui.display
            );
          }
          function hn(e, t) {
            e.fcSeg = t;
          }
          function gn(e) {
            return e.fcSeg || e.parentNode.fcSeg || null;
          }
          function vn(e, t) {
            return Ne(e, function (e) {
              return mn(e, t);
            });
          }
          function mn(e, t) {
            var n = [];
            return (
              t[""] && n.push(t[""]),
              t[e.defId] && n.push(t[e.defId]),
              n.push(e.ui),
              Ft(n)
            );
          }
          function yn(e, t) {
            var n = e.map(bn);
            return (
              n.sort(function (e, n) {
                return Q(e, n, t);
              }),
              n.map(function (e) {
                return e._seg;
              })
            );
          }
          function bn(e) {
            var t = e.eventRange,
              n = t.def,
              r = t.instance ? t.instance.range : t.range,
              o = r.start ? r.start.valueOf() : 0,
              i = r.end ? r.end.valueOf() : 0;
            return vs(vs(vs({}, n.extendedProps), n), {
              id: n.publicId,
              start: o,
              end: i,
              duration: i - o,
              allDay: Number(n.allDay),
              _seg: e,
            });
          }
          function Cn(e, t) {
            for (
              var n = t.pluginHooks,
                r = n.isDraggableTransformers,
                o = e.eventRange,
                i = o.def,
                a = o.ui,
                s = a.startEditable,
                l = 0,
                u = r;
              l < u.length;
              l++
            ) {
              s = (0, u[l])(s, i, a, t);
            }
            return s;
          }
          function wn(e, t) {
            return (
              e.isStart &&
              e.eventRange.ui.durationEditable &&
              t.options.eventResizableFromStart
            );
          }
          function Sn(e, t) {
            return e.isEnd && e.eventRange.ui.durationEditable;
          }
          function En(e, t, n, r, o, i, a) {
            var s = n.dateEnv,
              l = n.options,
              u = l.displayEventTime,
              c = l.displayEventEnd,
              d = e.eventRange.def,
              f = e.eventRange.instance;
            null == u && (u = !1 !== r), null == c && (c = !1 !== o);
            var p = f.range.start,
              h = f.range.end,
              g = i || e.start || e.eventRange.range.start,
              v = a || e.end || e.eventRange.range.end,
              m = me(p).valueOf() === me(g).valueOf(),
              y = me(le(h, -1)).valueOf() === me(le(v, -1)).valueOf();
            return u && !d.allDay && (m || y)
              ? ((g = m ? p : g),
                (v = y ? h : v),
                c && d.hasEnd
                  ? s.formatRange(g, v, t, {
                      forcedStartTzo: i ? null : f.forcedStartTzo,
                      forcedEndTzo: a ? null : f.forcedEndTzo,
                    })
                  : s.format(g, t, { forcedTzo: i ? null : f.forcedStartTzo }))
              : "";
          }
          function Dn(e, t, n) {
            var r = e.eventRange.range;
            return {
              isPast: r.end < (n || t.start),
              isFuture: r.start >= (n || t.end),
              isToday: t && cn(t, r.start),
            };
          }
          function Tn(e) {
            var t = ["fc-event"];
            return (
              e.isMirror && t.push("fc-event-mirror"),
              e.isDraggable && t.push("fc-event-draggable"),
              (e.isStartResizable || e.isEndResizable) &&
                t.push("fc-event-resizable"),
              e.isDragging && t.push("fc-event-dragging"),
              e.isResizing && t.push("fc-event-resizing"),
              e.isSelected && t.push("fc-event-selected"),
              e.isStart && t.push("fc-event-start"),
              e.isEnd && t.push("fc-event-end"),
              e.isPast && t.push("fc-event-past"),
              e.isToday && t.push("fc-event-today"),
              e.isFuture && t.push("fc-event-future"),
              t
            );
          }
          function Rn(e) {
            return e.instance
              ? e.instance.instanceId
              : e.def.defId + ":" + e.range.start.toISOString();
          }
          function xn(e, t, n) {
            var r = kn(e, t),
              o = r.range;
            if (!o.start) return null;
            if (!o.end) {
              if (null == n) return null;
              o.end = t.add(o.start, n);
            }
            return r;
          }
          function kn(e, t) {
            var n = It(e, Js),
              r = n.refined,
              o = n.extra,
              i = r.start ? t.createMarkerMeta(r.start) : null,
              a = r.end ? t.createMarkerMeta(r.end) : null,
              s = r.allDay;
            return (
              null == s &&
                (s = i && i.isTimeUnspecified && (!a || a.isTimeUnspecified)),
              vs(
                {
                  range: { start: i ? i.marker : null, end: a ? a.marker : null },
                  allDay: s,
                },
                o
              )
            );
          }
          function Mn(e, t) {
            return sn(e.range, t.range) && e.allDay === t.allDay && _n(e, t);
          }
          function _n(e, t) {
            for (var n in t)
              if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e) if (!(n in t)) return !1;
            return !0;
          }
          function In(e, t) {
            return vs(vs({}, Nn(e.range, t, e.allDay)), { allDay: e.allDay });
          }
          function Pn(e, t, n) {
            return vs(vs({}, Nn(e, t, n)), { timeZone: t.timeZone });
          }
          function Nn(e, t, n) {
            return {
              start: t.toDate(e.start),
              end: t.toDate(e.end),
              startStr: t.formatIso(e.start, { omitTime: n }),
              endStr: t.formatIso(e.end, { omitTime: n }),
            };
          }
          function Hn(e, t, n) {
            var r = Zt({ editable: !1 }, n),
              o = Xt(r.refined, r.extra, "", e.allDay, !0, n);
            return {
              def: o,
              ui: mn(o, t),
              instance: _e(o.defId, e.range),
              range: e.range,
              isStart: !0,
              isEnd: !0,
            };
          }
          function On(e, t, n) {
            n.emitter.trigger(
              "select",
              vs(vs({}, Ln(e, n)), {
                jsEvent: t ? t.origEvent : null,
                view: n.viewApi || n.calendarApi.view,
              })
            );
          }
          function An(e, t) {
            t.emitter.trigger("unselect", {
              jsEvent: e ? e.origEvent : null,
              view: t.viewApi || t.calendarApi.view,
            });
          }
          function Ln(e, t) {
            for (
              var n = {}, r = 0, o = t.pluginHooks.dateSpanTransforms;
              r < o.length;
              r++
            ) {
              var i = o[r];
              vs(n, i(e, t));
            }
            return vs(n, In(e, t.dateEnv)), n;
          }
          function zn(e, t, n) {
            var r = n.dateEnv,
              o = n.options,
              i = t;
            return (
              e
                ? ((i = me(i)), (i = r.add(i, o.defaultAllDayEventDuration)))
                : (i = r.add(i, o.defaultTimedEventDuration)),
              i
            );
          }
          function jn(e, t, n, r) {
            var o = vn(e.defs, t),
              i = Lt();
            for (var a in e.defs) {
              var s = e.defs[a];
              i.defs[a] = Un(s, o[a], n, r);
            }
            for (var l in e.instances) {
              var u = e.instances[l],
                s = i.defs[u.defId];
              i.instances[l] = Bn(u, s, o[u.defId], n, r);
            }
            return i;
          }
          function Un(e, t, n, r) {
            var o = n.standardProps || {};
            null == o.hasEnd &&
              t.durationEditable &&
              (n.startDelta || n.endDelta) &&
              (o.hasEnd = !0);
            var i = vs(vs(vs({}, e), o), { ui: vs(vs({}, e.ui), o.ui) });
            n.extendedProps &&
              (i.extendedProps = vs(vs({}, i.extendedProps), n.extendedProps));
            for (
              var a = 0, s = r.pluginHooks.eventDefMutationAppliers;
              a < s.length;
              a++
            ) {
              (0, s[a])(i, n, r);
            }
            return (
              !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0), i
            );
          }
          function Bn(e, t, n, r, o) {
            var i = o.dateEnv,
              a = r.standardProps && !0 === r.standardProps.allDay,
              s = r.standardProps && !1 === r.standardProps.hasEnd,
              l = vs({}, e);
            return (
              a && (l.range = Kt(l.range)),
              r.datesDelta &&
                n.startEditable &&
                (l.range = {
                  start: i.add(l.range.start, r.datesDelta),
                  end: i.add(l.range.end, r.datesDelta),
                }),
              r.startDelta &&
                n.durationEditable &&
                (l.range = {
                  start: i.add(l.range.start, r.startDelta),
                  end: l.range.end,
                }),
              r.endDelta &&
                n.durationEditable &&
                (l.range = {
                  start: l.range.start,
                  end: i.add(l.range.end, r.endDelta),
                }),
              s &&
                (l.range = {
                  start: l.range.start,
                  end: zn(t.allDay, l.range.start, o),
                }),
              t.allDay &&
                (l.range = { start: me(l.range.start), end: me(l.range.end) }),
              l.range.end < l.range.start &&
                (l.range.end = zn(t.allDay, l.range.start, o)),
              l
            );
          }
          function Wn(e, t, n) {
            void 0 === n && (n = Vn(t));
            var r;
            if (
              ("string" == typeof e
                ? (r = { url: e })
                : "function" == typeof e || Array.isArray(e)
                ? (r = { events: e })
                : "object" == typeof e && e && (r = e),
              r)
            ) {
              var o = It(r, n),
                i = o.refined,
                a = o.extra,
                s = Fn(i, t);
              if (s)
                return {
                  _raw: e,
                  isFetching: !1,
                  latestFetchId: "",
                  fetchRange: null,
                  defaultAllDay: i.defaultAllDay,
                  eventDataTransform: i.eventDataTransform,
                  success: i.success,
                  failure: i.failure,
                  publicId: i.id || "",
                  sourceId: G(),
                  sourceDefId: s.sourceDefId,
                  meta: s.meta,
                  ui: Vt(i, t),
                  extendedProps: a,
                };
            }
            return null;
          }
          function Vn(e) {
            return vs(vs(vs({}, Ys), Qs), e.pluginHooks.eventSourceRefiners);
          }
          function Fn(e, t) {
            for (
              var n = t.pluginHooks.eventSourceDefs, r = n.length - 1;
              r >= 0;
              r -= 1
            ) {
              var o = n[r],
                i = o.parseMeta(e);
              if (i) return { sourceDefId: r, meta: i };
            }
            return null;
          }
          function Gn(e, t) {
            switch (t.type) {
              case "CHANGE_DATE":
                return t.dateMarker;
              default:
                return e;
            }
          }
          function Yn(e, t) {
            var n = e.initialDate;
            return null != n ? t.createMarker(n) : Zn(e.now, t);
          }
          function Zn(e, t) {
            return (
              "function" == typeof e && (e = e()),
              null == e ? t.createNowMarker() : t.createMarker(e)
            );
          }
          function qn(e) {
            var t,
              n,
              r = e._def,
              o = e._instance;
            return {
              defs: ((t = {}), (t[r.defId] = r), t),
              instances: o ? ((n = {}), (n[o.instanceId] = o), n) : {},
            };
          }
          function Xn(e, t, n) {
            var r = e.defs,
              o = e.instances,
              i = [],
              a = n ? n.instanceId : "";
            for (var s in o) {
              var l = o[s],
                u = r[l.defId];
              l.instanceId !== a && i.push(new tl(t, u, l));
            }
            return i;
          }
          function $n(e) {
            return new nl[e]();
          }
          function Jn(e) {
            var t = al.exec(e);
            if (t) {
              var n = new Date(
                Date.UTC(
                  Number(t[1]),
                  t[3] ? Number(t[3]) - 1 : 0,
                  Number(t[5] || 1),
                  Number(t[7] || 0),
                  Number(t[8] || 0),
                  Number(t[10] || 0),
                  t[12] ? 1e3 * Number("0." + t[12]) : 0
                )
              );
              if (ke(n)) {
                var r = null;
                return (
                  t[13] &&
                    (r =
                      ("-" === t[15] ? -1 : 1) *
                      (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                  { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r }
                );
              }
            }
            return null;
          }
          function Kn(e) {
            for (
              var t = e.length > 0 ? e[0].code : "en",
                n = ll.concat(e),
                r = { en: ul },
                o = 0,
                i = n;
              o < i.length;
              o++
            ) {
              var a = i[o];
              r[a.code] = a;
            }
            return { map: r, defaultCode: t };
          }
          function Qn(e, t) {
            return "object" != typeof e || Array.isArray(e)
              ? er(e, t)
              : nr(e.code, [e.code], e);
          }
          function er(e, t) {
            var n = [].concat(e || []);
            return nr(e, n, tr(n, t) || ul);
          }
          function tr(e, t) {
            for (var n = 0; n < e.length; n += 1)
              for (
                var r = e[n].toLocaleLowerCase().split("-"), o = r.length;
                o > 0;
                o -= 1
              ) {
                var i = r.slice(0, o).join("-");
                if (t[i]) return t[i];
              }
            return null;
          }
          function nr(e, t, n) {
            var r = Ie([ul, n], ["buttonText"]);
            delete r.code;
            var o = r.week;
            return (
              delete r.week,
              {
                codeArg: e,
                codes: t,
                week: o,
                simpleNumberFormat: new Intl.NumberFormat(e),
                options: r,
              }
            );
          }
          function rr(e, t) {
            void 0 === t && (t = {});
            var n = ir(t),
              r = kt(t),
              o = n.createMarkerMeta(e);
            return o ? n.format(o.marker, r, { forcedTzo: o.forcedTzo }) : "";
          }
          function or(e, t, n) {
            var r = ir("object" == typeof n && n ? n : {}),
              o = kt(n),
              i = r.createMarkerMeta(e),
              a = r.createMarkerMeta(t);
            return i && a
              ? r.formatRange(i.marker, a.marker, o, {
                  forcedStartTzo: i.forcedTzo,
                  forcedEndTzo: a.forcedTzo,
                  isEndExclusive: n.isEndExclusive,
                  defaultSeparator: Bs.defaultRangeSeparator,
                })
              : "";
          }
          function ir(e) {
            var t = Qn(e.locale || "en", Kn([]).map);
            return new sl(
              vs(vs({ timeZone: Bs.timeZone, calendarSystem: "gregory" }, e), {
                locale: t,
              })
            );
          }
          function ar(e, t) {
            return Nt(sr(e), null, t);
          }
          function sr(e) {
            var t;
            return (
              (t =
                !0 === e
                  ? [{}]
                  : Array.isArray(e)
                  ? e.filter(function (e) {
                      return e.daysOfWeek;
                    })
                  : "object" == typeof e && e
                  ? [e]
                  : []),
              (t = t.map(function (e) {
                return vs(vs({}, cl), e);
              }))
            );
          }
          function lr(e, t) {
            return (
              e.left >= t.left &&
              e.left < t.right &&
              e.top >= t.top &&
              e.top < t.bottom
            );
          }
          function ur(e, t) {
            var n = {
              left: Math.max(e.left, t.left),
              right: Math.min(e.right, t.right),
              top: Math.max(e.top, t.top),
              bottom: Math.min(e.bottom, t.bottom),
            };
            return n.left < n.right && n.top < n.bottom && n;
          }
          function cr(e, t, n) {
            return {
              left: e.left + t,
              right: e.right + t,
              top: e.top + n,
              bottom: e.bottom + n,
            };
          }
          function dr(e, t) {
            return {
              left: Math.min(Math.max(e.left, t.left), t.right),
              top: Math.min(Math.max(e.top, t.top), t.bottom),
            };
          }
          function fr(e) {
            return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
          }
          function pr(e, t) {
            return { left: e.left - t.left, top: e.top - t.top };
          }
          function hr() {
            return null == ol && (ol = gr()), ol;
          }
          function gr() {
            if ("undefined" == typeof document) return !0;
            var e = document.createElement("div");
            (e.style.position = "absolute"),
              (e.style.top = "0px"),
              (e.style.left = "0px"),
              (e.innerHTML = "<table><tr><td><div></div></td></tr></table>"),
              (e.querySelector("table").style.height = "100px"),
              (e.querySelector("div").style.height = "100%"),
              document.body.appendChild(e);
            var t = e.querySelector("div"),
              n = t.offsetHeight > 0;
            return document.body.removeChild(e), n;
          }
          function vr(e, t, n) {
            var r = [];
            e && r.push(e), t && r.push(t);
            var o = { "": Ft(r) };
            return n && vs(o, n), o;
          }
          function mr(e, t, n, r) {
            return {
              dow: e.getUTCDay(),
              isDisabled: Boolean(r && !cn(r.activeRange, e)),
              isOther: Boolean(r && !cn(r.currentRange, e)),
              isToday: Boolean(t && cn(t, e)),
              isPast: Boolean(n ? e < n : !!t && e < t.start),
              isFuture: Boolean(n ? e > n : !!t && e >= t.end),
            };
          }
          function yr(e, t) {
            var n = ["fc-day", "fc-day-" + Rs[e.dow]];
            return (
              e.isDisabled
                ? n.push("fc-day-disabled")
                : (e.isToday &&
                    (n.push("fc-day-today"), n.push(t.getClass("today"))),
                  e.isPast && n.push("fc-day-past"),
                  e.isFuture && n.push("fc-day-future"),
                  e.isOther && n.push("fc-day-other")),
              n
            );
          }
          function br(e, t) {
            var n = ["fc-slot", "fc-slot-" + Rs[e.dow]];
            return (
              e.isDisabled
                ? n.push("fc-slot-disabled")
                : (e.isToday &&
                    (n.push("fc-slot-today"), n.push(t.getClass("today"))),
                  e.isPast && n.push("fc-slot-past"),
                  e.isFuture && n.push("fc-slot-future")),
              n
            );
          }
          function Cr(e, t) {
            return (
              void 0 === t && (t = "day"),
              JSON.stringify({ date: lt(e), type: t })
            );
          }
          function wr() {
            return null === pl && (pl = Sr()), pl;
          }
          function Sr() {
            var e = document.createElement("div");
            z(e, {
              position: "absolute",
              top: -1e3,
              left: 0,
              border: 0,
              padding: 0,
              overflow: "scroll",
              direction: "rtl",
            }),
              (e.innerHTML = "<div></div>"),
              document.body.appendChild(e);
            var t = e.firstChild,
              n = t.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return N(e), n;
          }
          function Er() {
            return il || (il = Dr()), il;
          }
          function Dr() {
            var e = document.createElement("div");
            (e.style.overflow = "scroll"),
              (e.style.position = "absolute"),
              (e.style.top = "-9999px"),
              (e.style.left = "-9999px"),
              document.body.appendChild(e);
            var t = Tr(e);
            return document.body.removeChild(e), t;
          }
          function Tr(e) {
            return {
              x: e.offsetHeight - e.clientHeight,
              y: e.offsetWidth - e.clientWidth,
            };
          }
          function Rr(e, t) {
            void 0 === t && (t = !1);
            var n = window.getComputedStyle(e),
              r = parseInt(n.borderLeftWidth, 10) || 0,
              o = parseInt(n.borderRightWidth, 10) || 0,
              i = parseInt(n.borderTopWidth, 10) || 0,
              a = parseInt(n.borderBottomWidth, 10) || 0,
              s = Tr(e),
              l = s.y - r - o,
              u = s.x - i - a,
              c = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: u,
                scrollbarLeft: 0,
                scrollbarRight: 0,
              };
            return (
              wr() && "rtl" === n.direction
                ? (c.scrollbarLeft = l)
                : (c.scrollbarRight = l),
              t &&
                ((c.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
                (c.paddingRight = parseInt(n.paddingRight, 10) || 0),
                (c.paddingTop = parseInt(n.paddingTop, 10) || 0),
                (c.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
              c
            );
          }
          function xr(e, t, n) {
            void 0 === t && (t = !1);
            var r = n ? e.getBoundingClientRect() : kr(e),
              o = Rr(e, t),
              i = {
                left: r.left + o.borderLeft + o.scrollbarLeft,
                right: r.right - o.borderRight - o.scrollbarRight,
                top: r.top + o.borderTop,
                bottom: r.bottom - o.borderBottom - o.scrollbarBottom,
              };
            return (
              t &&
                ((i.left += o.paddingLeft),
                (i.right -= o.paddingRight),
                (i.top += o.paddingTop),
                (i.bottom -= o.paddingBottom)),
              i
            );
          }
          function kr(e) {
            var t = e.getBoundingClientRect();
            return {
              left: t.left + window.pageXOffset,
              top: t.top + window.pageYOffset,
              right: t.right + window.pageXOffset,
              bottom: t.bottom + window.pageYOffset,
            };
          }
          function Mr(e) {
            return e.getBoundingClientRect().height + _r(e);
          }
          function _r(e) {
            var t = window.getComputedStyle(e);
            return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10);
          }
          function Ir(e) {
            for (var t = []; e instanceof HTMLElement; ) {
              var n = window.getComputedStyle(e);
              if ("fixed" === n.position) break;
              /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) &&
                t.push(e),
                (e = e.parentNode);
            }
            return t;
          }
          function Pr(e, t, n) {
            var r = !1,
              o = function () {
                r || ((r = !0), t.apply(this, arguments));
              },
              i = function () {
                r || ((r = !0), n && n.apply(this, arguments));
              },
              a = e(o, i);
            a && "function" == typeof a.then && a.then(o, i);
          }
          function Nr(e, t, n) {
            (e[t] || (e[t] = [])).push(n);
          }
          function Hr(e, t, n) {
            n
              ? e[t] &&
                (e[t] = e[t].filter(function (e) {
                  return e !== n;
                }))
              : delete e[t];
          }
          function Or(e, t, n, r, o, i, a, s, l, u, c, d, f) {
            return {
              dateEnv: o,
              options: n,
              pluginHooks: a,
              emitter: u,
              dispatch: s,
              getCurrentData: l,
              calendarApi: c,
              viewSpec: e,
              viewApi: t,
              dateProfileGenerator: r,
              theme: i,
              isRtl: "rtl" === n.direction,
              addResizeHandler: function (e) {
                u.on("_resize", e);
              },
              removeResizeHandler: function (e) {
                u.off("_resize", e);
              },
              createScrollResponder: function (e) {
                return new kl(e, u, Ge(n.scrollTime));
              },
              registerInteractiveComponent: d,
              unregisterInteractiveComponent: f,
            };
          }
          function Ar(e) {
            var t = Object.create(this.prototype.propEquality);
            vs(t, e), (this.prototype.propEquality = t);
          }
          function Lr(e) {
            var t = Object.create(this.prototype.stateEquality);
            vs(t, e), (this.prototype.stateEquality = t);
          }
          function zr(e, t) {
            "function" == typeof e ? e(t) : e && (e.current = t);
          }
          function jr(e, t, n, r, o) {
            switch (t.type) {
              case "RECEIVE_EVENTS":
                return Ur(
                  e,
                  n[t.sourceId],
                  t.fetchId,
                  t.fetchRange,
                  t.rawEvents,
                  o
                );
              case "ADD_EVENTS":
                return Vr(e, t.eventStore, r ? r.activeRange : null, o);
              case "RESET_EVENTS":
                return t.eventStore;
              case "MERGE_EVENTS":
                return zt(e, t.eventStore);
              case "PREV":
              case "NEXT":
              case "CHANGE_DATE":
              case "CHANGE_VIEW_TYPE":
                return r ? Ve(e, r.activeRange, o) : e;
              case "REMOVE_EVENTS":
                return Ut(e, t.eventStore);
              case "REMOVE_EVENT_SOURCE":
                return Gr(e, t.sourceId);
              case "REMOVE_ALL_EVENT_SOURCES":
                return jt(e, function (e) {
                  return !e.sourceId;
                });
              case "REMOVE_ALL_EVENTS":
                return Lt();
              default:
                return e;
            }
          }
          function Ur(e, t, n, r, o, i) {
            if (t && n === t.latestFetchId) {
              var a = Nt(Br(o, t, i), t, i);
              return r && (a = Ve(a, r, i)), zt(Gr(e, t.sourceId), a);
            }
            return e;
          }
          function Br(e, t, n) {
            var r = n.options.eventDataTransform,
              o = t ? t.eventDataTransform : null;
            return o && (e = Wr(e, o)), r && (e = Wr(e, r)), e;
          }
          function Wr(e, t) {
            var n;
            if (t) {
              n = [];
              for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                  a = t(i);
                a ? n.push(a) : null == a && n.push(i);
              }
            } else n = e;
            return n;
          }
          function Vr(e, t, n, r) {
            return n && (t = Ve(t, n, r)), zt(e, t);
          }
          function Fr(e, t, n) {
            var r = e.defs,
              o = Ne(e.instances, function (e) {
                var o = r[e.defId];
                return o.allDay || o.recurringDef
                  ? e
                  : vs(vs({}, e), {
                      range: {
                        start: n.createMarker(
                          t.toDate(e.range.start, e.forcedStartTzo)
                        ),
                        end: n.createMarker(
                          t.toDate(e.range.end, e.forcedEndTzo)
                        ),
                      },
                      forcedStartTzo: n.canComputeOffset
                        ? null
                        : e.forcedStartTzo,
                      forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo,
                    });
              });
            return { defs: r, instances: o };
          }
          function Gr(e, t) {
            return jt(e, function (e) {
              return e.sourceId !== t;
            });
          }
          function Yr(e, t) {
            return {
              defs: e.defs,
              instances: Pe(e.instances, function (e) {
                return !t[e.instanceId];
              }),
            };
          }
          function Zr(e, t) {
            return Xr({ eventDrag: e }, t);
          }
          function qr(e, t) {
            return Xr({ dateSelection: e }, t);
          }
          function Xr(e, t) {
            var n = t.getCurrentData(),
              r = vs(
                {
                  businessHours: n.businessHours,
                  dateSelection: "",
                  eventStore: n.eventStore,
                  eventUiBases: n.eventUiBases,
                  eventSelection: "",
                  eventDrag: null,
                  eventResize: null,
                },
                e
              );
            return (t.pluginHooks.isPropsValid || $r)(r, t);
          }
          function $r(e, t, n, r) {
            return (
              void 0 === n && (n = {}),
              !(e.eventDrag && !Jr(e, t, n, r)) &&
                !(e.dateSelection && !Kr(e, t, n, r))
            );
          }
          function Jr(e, t, n, r) {
            var o = t.getCurrentData(),
              i = e.eventDrag,
              a = i.mutatedEvents,
              s = a.defs,
              l = a.instances,
              u = vn(s, i.isEvent ? e.eventUiBases : { "": o.selectionConfig });
            r && (u = Ne(u, r));
            var c = Yr(e.eventStore, i.affectedEvents.instances),
              d = c.defs,
              f = c.instances,
              p = vn(d, e.eventUiBases);
            for (var h in l) {
              var g = l[h],
                v = g.range,
                m = u[g.defId],
                y = s[g.defId];
              if (!Qr(m.constraints, v, c, e.businessHours, t)) return !1;
              var b = t.options.eventOverlap,
                C = "function" == typeof b ? b : null;
              for (var w in f) {
                var S = f[w];
                if (ln(v, S.range)) {
                  if (!1 === p[S.defId].overlap && i.isEvent) return !1;
                  if (!1 === m.overlap) return !1;
                  if (C && !C(new tl(t, d[S.defId], S), new tl(t, y, g)))
                    return !1;
                }
              }
              for (var E = o.eventStore, D = 0, T = m.allows; D < T.length; D++) {
                var R = T[D],
                  x = vs(vs({}, n), { range: g.range, allDay: y.allDay }),
                  k = E.defs[y.defId],
                  M = E.instances[h],
                  _ = void 0;
                if (((_ = k ? new tl(t, k, M) : new tl(t, y)), !R(Ln(x, t), _)))
                  return !1;
              }
            }
            return !0;
          }
          function Kr(e, t, n, r) {
            var o = e.eventStore,
              i = o.defs,
              a = o.instances,
              s = e.dateSelection,
              l = s.range,
              u = t.getCurrentData().selectionConfig;
            if ((r && (u = r(u)), !Qr(u.constraints, l, o, e.businessHours, t)))
              return !1;
            var c = t.options.selectOverlap,
              d = "function" == typeof c ? c : null;
            for (var f in a) {
              var p = a[f];
              if (ln(l, p.range)) {
                if (!1 === u.overlap) return !1;
                if (d && !d(new tl(t, i[p.defId], p), null)) return !1;
              }
            }
            for (var h = 0, g = u.allows; h < g.length; h++) {
              if (!(0, g[h])(Ln(vs(vs({}, n), s), t), null)) return !1;
            }
            return !0;
          }
          function Qr(e, t, n, r, o) {
            for (var i = 0, a = e; i < a.length; i++) {
              if (!no(eo(a[i], t, n, r, o), t)) return !1;
            }
            return !0;
          }
          function eo(e, t, n, r, o) {
            return "businessHours" === e
              ? to(Ve(r, t, o))
              : "string" == typeof e
              ? to(
                  jt(n, function (t) {
                    return t.groupId === e;
                  })
                )
              : "object" == typeof e && e
              ? to(Ve(e, t, o))
              : [];
          }
          function to(e) {
            var t = e.instances,
              n = [];
            for (var r in t) n.push(t[r].range);
            return n;
          }
          function no(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
              if (un(r[n], t)) return !0;
            }
            return !1;
          }
          function ro(e) {
            return {
              id: G(),
              deps: e.deps || [],
              reducers: e.reducers || [],
              isLoadingFuncs: e.isLoadingFuncs || [],
              contextInit: [].concat(e.contextInit || []),
              eventRefiners: e.eventRefiners || {},
              eventDefMemberAdders: e.eventDefMemberAdders || [],
              eventSourceRefiners: e.eventSourceRefiners || {},
              isDraggableTransformers: e.isDraggableTransformers || [],
              eventDragMutationMassagers: e.eventDragMutationMassagers || [],
              eventDefMutationAppliers: e.eventDefMutationAppliers || [],
              dateSelectionTransformers: e.dateSelectionTransformers || [],
              datePointTransforms: e.datePointTransforms || [],
              dateSpanTransforms: e.dateSpanTransforms || [],
              views: e.views || {},
              viewPropsTransformers: e.viewPropsTransformers || [],
              isPropsValid: e.isPropsValid || null,
              externalDefTransforms: e.externalDefTransforms || [],
              eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
              viewContainerAppends: e.viewContainerAppends || [],
              eventDropTransformers: e.eventDropTransformers || [],
              componentInteractions: e.componentInteractions || [],
              calendarInteractions: e.calendarInteractions || [],
              themeClasses: e.themeClasses || {},
              eventSourceDefs: e.eventSourceDefs || [],
              cmdFormatter: e.cmdFormatter,
              recurringTypes: e.recurringTypes || [],
              namedTimeZonedImpl: e.namedTimeZonedImpl,
              initialView: e.initialView || "",
              elementDraggingImpl: e.elementDraggingImpl,
              optionChangeHandlers: e.optionChangeHandlers || {},
              scrollGridImpl: e.scrollGridImpl || null,
              contentTypeHandlers: e.contentTypeHandlers || {},
              listenerRefiners: e.listenerRefiners || {},
              optionRefiners: e.optionRefiners || {},
              propSetHandlers: e.propSetHandlers || {},
            };
          }
          function oo(e, t) {
            function n(e) {
              for (var t = 0, i = e; t < i.length; t++) {
                var a = i[t];
                r[a.id] || ((r[a.id] = !0), n(a.deps), (o = ao(o, a)));
              }
            }
            var r = {},
              o = {
                reducers: [],
                isLoadingFuncs: [],
                contextInit: [],
                eventRefiners: {},
                eventDefMemberAdders: [],
                eventSourceRefiners: {},
                isDraggableTransformers: [],
                eventDragMutationMassagers: [],
                eventDefMutationAppliers: [],
                dateSelectionTransformers: [],
                datePointTransforms: [],
                dateSpanTransforms: [],
                views: {},
                viewPropsTransformers: [],
                isPropsValid: null,
                externalDefTransforms: [],
                eventResizeJoinTransforms: [],
                viewContainerAppends: [],
                eventDropTransformers: [],
                componentInteractions: [],
                calendarInteractions: [],
                themeClasses: {},
                eventSourceDefs: [],
                cmdFormatter: null,
                recurringTypes: [],
                namedTimeZonedImpl: null,
                initialView: "",
                elementDraggingImpl: null,
                optionChangeHandlers: {},
                scrollGridImpl: null,
                contentTypeHandlers: {},
                listenerRefiners: {},
                optionRefiners: {},
                propSetHandlers: {},
              };
            return e && n(e), n(t), o;
          }
          function io() {
            var e,
              t = [],
              n = [];
            return function (r, o) {
              return (
                (e && ft(r, t) && ft(o, n)) || (e = oo(r, o)), (t = r), (n = o), e
              );
            };
          }
          function ao(e, t) {
            return {
              reducers: e.reducers.concat(t.reducers),
              isLoadingFuncs: e.isLoadingFuncs.concat(t.isLoadingFuncs),
              contextInit: e.contextInit.concat(t.contextInit),
              eventRefiners: vs(vs({}, e.eventRefiners), t.eventRefiners),
              eventDefMemberAdders: e.eventDefMemberAdders.concat(
                t.eventDefMemberAdders
              ),
              eventSourceRefiners: vs(
                vs({}, e.eventSourceRefiners),
                t.eventSourceRefiners
              ),
              isDraggableTransformers: e.isDraggableTransformers.concat(
                t.isDraggableTransformers
              ),
              eventDragMutationMassagers: e.eventDragMutationMassagers.concat(
                t.eventDragMutationMassagers
              ),
              eventDefMutationAppliers: e.eventDefMutationAppliers.concat(
                t.eventDefMutationAppliers
              ),
              dateSelectionTransformers: e.dateSelectionTransformers.concat(
                t.dateSelectionTransformers
              ),
              datePointTransforms: e.datePointTransforms.concat(
                t.datePointTransforms
              ),
              dateSpanTransforms: e.dateSpanTransforms.concat(
                t.dateSpanTransforms
              ),
              views: vs(vs({}, e.views), t.views),
              viewPropsTransformers: e.viewPropsTransformers.concat(
                t.viewPropsTransformers
              ),
              isPropsValid: t.isPropsValid || e.isPropsValid,
              externalDefTransforms: e.externalDefTransforms.concat(
                t.externalDefTransforms
              ),
              eventResizeJoinTransforms: e.eventResizeJoinTransforms.concat(
                t.eventResizeJoinTransforms
              ),
              viewContainerAppends: e.viewContainerAppends.concat(
                t.viewContainerAppends
              ),
              eventDropTransformers: e.eventDropTransformers.concat(
                t.eventDropTransformers
              ),
              calendarInteractions: e.calendarInteractions.concat(
                t.calendarInteractions
              ),
              componentInteractions: e.componentInteractions.concat(
                t.componentInteractions
              ),
              themeClasses: vs(vs({}, e.themeClasses), t.themeClasses),
              eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs),
              cmdFormatter: t.cmdFormatter || e.cmdFormatter,
              recurringTypes: e.recurringTypes.concat(t.recurringTypes),
              namedTimeZonedImpl: t.namedTimeZonedImpl || e.namedTimeZonedImpl,
              initialView: e.initialView || t.initialView,
              elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl,
              optionChangeHandlers: vs(
                vs({}, e.optionChangeHandlers),
                t.optionChangeHandlers
              ),
              scrollGridImpl: t.scrollGridImpl || e.scrollGridImpl,
              contentTypeHandlers: vs(
                vs({}, e.contentTypeHandlers),
                t.contentTypeHandlers
              ),
              listenerRefiners: vs(
                vs({}, e.listenerRefiners),
                t.listenerRefiners
              ),
              optionRefiners: vs(vs({}, e.optionRefiners), t.optionRefiners),
              propSetHandlers: vs(vs({}, e.propSetHandlers), t.propSetHandlers),
            };
          }
          function so(e, t) {
            var n,
              r = {};
            for (n in e) lo(n, r, e, t);
            for (n in t) lo(n, r, e, t);
            return r;
          }
          function lo(e, t, n, r) {
            if (t[e]) return t[e];
            var o = uo(e, t, n, r);
            return o && (t[e] = o), o;
          }
          function uo(e, t, n, r) {
            var o = n[e],
              i = r[e],
              a = function (e) {
                return o && null !== o[e]
                  ? o[e]
                  : i && null !== i[e]
                  ? i[e]
                  : null;
              },
              s = a("component"),
              l = a("superType"),
              u = null;
            if (l) {
              if (l === e)
                throw new Error(
                  "Can't have a custom view type that references itself"
                );
              u = lo(l, t, n, r);
            }
            return (
              !s && u && (s = u.component),
              s
                ? {
                    type: e,
                    component: s,
                    defaults: vs(
                      vs({}, u ? u.defaults : {}),
                      o ? o.rawOptions : {}
                    ),
                    overrides: vs(
                      vs({}, u ? u.overrides : {}),
                      i ? i.rawOptions : {}
                    ),
                  }
                : null
            );
          }
          function co(e) {
            return wl(Ol.Consumer, null, function (t) {
              return wl(Al, vs({ renderId: t }, e));
            });
          }
          function fo() {
            var e,
              t,
              n = [];
            return function (r, o) {
              return (
                (t && Le(t, o) && r === e) || ((e = r), (t = o), (n = po(r, o))),
                n
              );
            };
          }
          function po(e, t) {
            return "function" == typeof e && (e = e(t)), Wt(e);
          }
          function ho(e, t) {
            return "function" == typeof e ? e(t, wl) : e;
          }
          function go(e) {
            return Ne(e, vo);
          }
          function vo(e) {
            var t = "function" == typeof e ? { component: e } : e,
              n = t.component;
            return (
              t.content && (n = mo(t)),
              { superType: t.type, component: n, rawOptions: t }
            );
          }
          function mo(e) {
            return function (t) {
              return wl(Ml.Consumer, null, function (n) {
                return wl(zl, { viewSpec: n.viewSpec }, function (r, o) {
                  var i = vs(vs({}, t), {
                    nextDayThreshold: n.options.nextDayThreshold,
                  });
                  return wl(
                    Hl,
                    {
                      hookProps: i,
                      classNames: e.classNames,
                      content: e.content,
                      didMount: e.didMount,
                      willUnmount: e.willUnmount,
                      elRef: r,
                    },
                    function (e, t, n, r) {
                      return wl(
                        "div",
                        { className: o.concat(t).join(" "), ref: e },
                        r
                      );
                    }
                  );
                });
              });
            };
          }
          function yo(e, t, n, r) {
            var o = go(e),
              i = go(t.views);
            return Ne(so(o, i), function (e) {
              return bo(e, i, t, n, r);
            });
          }
          function bo(e, t, n, r, o) {
            var i =
                e.overrides.duration ||
                e.defaults.duration ||
                r.duration ||
                n.duration,
              a = null,
              s = "",
              l = "",
              u = {};
            if (i && (a = Co(i))) {
              var c = at(a);
              (s = c.unit),
                1 === c.value && ((l = s), (u = t[s] ? t[s].rawOptions : {}));
            }
            var d = function (t) {
              var n = t.buttonText || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r]
                ? n[r]
                : null != n[e.type]
                ? n[e.type]
                : null != n[l]
                ? n[l]
                : null;
            };
            return {
              type: e.type,
              component: e.component,
              duration: a,
              durationUnit: s,
              singleUnit: l,
              optionDefaults: e.defaults,
              optionOverrides: vs(vs({}, u), e.overrides),
              buttonTextOverride: d(r) || d(n) || e.overrides.buttonText,
              buttonTextDefault: d(o) || e.defaults.buttonText || d(Bs) || e.type,
            };
          }
          function Co(e) {
            var t = JSON.stringify(e),
              n = jl[t];
            return void 0 === n && ((n = Ge(e)), (jl[t] = n)), n;
          }
          function wo(e, t) {
            switch (t.type) {
              case "CHANGE_VIEW_TYPE":
                e = t.viewType;
            }
            return e;
          }
          function So(e, t) {
            var n;
            switch (t.type) {
              case "SET_OPTION":
                return vs(
                  vs({}, e),
                  ((n = {}), (n[t.optionName] = t.rawOptionValue), n)
                );
              default:
                return e;
            }
          }
          function Eo(e, t, n, r) {
            var o;
            switch (t.type) {
              case "CHANGE_VIEW_TYPE":
                return r.build(t.dateMarker || n);
              case "CHANGE_DATE":
                if (!e.activeRange || !cn(e.currentRange, t.dateMarker))
                  return r.build(t.dateMarker);
                break;
              case "PREV":
                if (((o = r.buildPrev(e, n)), o.isValid)) return o;
                break;
              case "NEXT":
                if (((o = r.buildNext(e, n)), o.isValid)) return o;
            }
            return e;
          }
          function Do(e, t, n) {
            var r = t ? t.activeRange : null;
            return ko({}, Ao(e, n), r, n);
          }
          function To(e, t, n, r) {
            var o = n ? n.activeRange : null;
            switch (t.type) {
              case "ADD_EVENT_SOURCES":
                return ko(e, t.sources, o, r);
              case "REMOVE_EVENT_SOURCE":
                return Mo(e, t.sourceId);
              case "PREV":
              case "NEXT":
              case "CHANGE_DATE":
              case "CHANGE_VIEW_TYPE":
                return n ? _o(e, o, r) : e;
              case "FETCH_EVENT_SOURCES":
                return Po(
                  e,
                  t.sourceIds ? He(t.sourceIds) : Oo(e, r),
                  o,
                  t.isRefetch || !1,
                  r
                );
              case "RECEIVE_EVENTS":
              case "RECEIVE_EVENT_ERROR":
                return Ho(e, t.sourceId, t.fetchId, t.fetchRange);
              case "REMOVE_ALL_EVENT_SOURCES":
                return {};
              default:
                return e;
            }
          }
          function Ro(e, t, n) {
            var r = t ? t.activeRange : null;
            return Po(e, Oo(e, n), r, !0, n);
          }
          function xo(e) {
            for (var t in e) if (e[t].isFetching) return !0;
            return !1;
          }
          function ko(e, t, n, r) {
            for (var o = {}, i = 0, a = t; i < a.length; i++) {
              var s = a[i];
              o[s.sourceId] = s;
            }
            return n && (o = _o(o, n, r)), vs(vs({}, e), o);
          }
          function Mo(e, t) {
            return Pe(e, function (e) {
              return e.sourceId !== t;
            });
          }
          function _o(e, t, n) {
            return Po(
              e,
              Pe(e, function (e) {
                return Io(e, t, n);
              }),
              t,
              !1,
              n
            );
          }
          function Io(e, t, n) {
            return Lo(e, n)
              ? !n.options.lazyFetching ||
                  !e.fetchRange ||
                  e.isFetching ||
                  t.start < e.fetchRange.start ||
                  t.end > e.fetchRange.end
              : !e.latestFetchId;
          }
          function Po(e, t, n, r, o) {
            var i = {};
            for (var a in e) {
              var s = e[a];
              t[a] ? (i[a] = No(s, n, r, o)) : (i[a] = s);
            }
            return i;
          }
          function No(e, t, n, r) {
            var o = r.options,
              i = r.calendarApi,
              a = r.pluginHooks.eventSourceDefs[e.sourceDefId],
              s = G();
            return (
              a.fetch(
                { eventSource: e, range: t, isRefetch: n, context: r },
                function (n) {
                  var a = n.rawEvents;
                  o.eventSourceSuccess &&
                    (a = o.eventSourceSuccess.call(i, a, n.xhr) || a),
                    e.success && (a = e.success.call(i, a, n.xhr) || a),
                    r.dispatch({
                      type: "RECEIVE_EVENTS",
                      sourceId: e.sourceId,
                      fetchId: s,
                      fetchRange: t,
                      rawEvents: a,
                    });
                },
                function (n) {
                  console.warn(n.message, n),
                    o.eventSourceFailure && o.eventSourceFailure.call(i, n),
                    e.failure && e.failure(n),
                    r.dispatch({
                      type: "RECEIVE_EVENT_ERROR",
                      sourceId: e.sourceId,
                      fetchId: s,
                      fetchRange: t,
                      error: n,
                    });
                }
              ),
              vs(vs({}, e), { isFetching: !0, latestFetchId: s })
            );
          }
          function Ho(e, t, n, r) {
            var o,
              i = e[t];
            return i && n === i.latestFetchId
              ? vs(
                  vs({}, e),
                  ((o = {}),
                  (o[t] = vs(vs({}, i), { isFetching: !1, fetchRange: r })),
                  o)
                )
              : e;
          }
          function Oo(e, t) {
            return Pe(e, function (e) {
              return Lo(e, t);
            });
          }
          function Ao(e, t) {
            var n = Vn(t),
              r = [].concat(e.eventSources || []),
              o = [];
            e.initialEvents && r.unshift(e.initialEvents),
              e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
              var s = a[i],
                l = Wn(s, t, n);
              l && o.push(l);
            }
            return o;
          }
          function Lo(e, t) {
            return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
          }
          function zo(e, t) {
            switch (t.type) {
              case "UNSELECT_DATES":
                return null;
              case "SELECT_DATES":
                return t.selection;
              default:
                return e;
            }
          }
          function jo(e, t) {
            switch (t.type) {
              case "UNSELECT_EVENT":
                return "";
              case "SELECT_EVENT":
                return t.eventInstanceId;
              default:
                return e;
            }
          }
          function Uo(e, t) {
            var n;
            switch (t.type) {
              case "UNSET_EVENT_DRAG":
                return null;
              case "SET_EVENT_DRAG":
                return (
                  (n = t.state),
                  {
                    affectedEvents: n.affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent,
                  }
                );
              default:
                return e;
            }
          }
          function Bo(e, t) {
            var n;
            switch (t.type) {
              case "UNSET_EVENT_RESIZE":
                return null;
              case "SET_EVENT_RESIZE":
                return (
                  (n = t.state),
                  {
                    affectedEvents: n.affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent,
                  }
                );
              default:
                return e;
            }
          }
          function Wo(e, t, n, r, o) {
            var i = [];
            return {
              headerToolbar: e.headerToolbar
                ? Vo(e.headerToolbar, e, t, n, r, o, i)
                : null,
              footerToolbar: e.footerToolbar
                ? Vo(e.footerToolbar, e, t, n, r, o, i)
                : null,
              viewsWithButtons: i,
            };
          }
          function Vo(e, t, n, r, o, i, a) {
            return Ne(e, function (e) {
              return Fo(e, t, n, r, o, i, a);
            });
          }
          function Fo(e, t, n, r, o, i, a) {
            var s = "rtl" === t.direction,
              l = t.customButtons || {},
              u = n.buttonText || {},
              c = t.buttonText || {};
            return (e ? e.split(" ") : []).map(function (e) {
              return e.split(",").map(function (e) {
                if ("title" === e) return { buttonName: e };
                var t, n, d, f, p;
                return (
                  (t = l[e])
                    ? ((d = function (e) {
                        t.click && t.click.call(e.target, e, e.target);
                      }),
                      (f = r.getCustomButtonIconClass(t)) ||
                        (f = r.getIconClass(e, s)) ||
                        (p = t.text))
                    : (n = o[e])
                    ? (a.push(e),
                      (d = function () {
                        i.changeView(e);
                      }),
                      (p = n.buttonTextOverride) ||
                        (f = r.getIconClass(e, s)) ||
                        (p = n.buttonTextDefault))
                    : i[e] &&
                      ((d = function () {
                        i[e]();
                      }),
                      (p = u[e]) || (f = r.getIconClass(e, s)) || (p = c[e])),
                  { buttonName: e, buttonClick: d, buttonIcon: f, buttonText: p }
                );
              });
            });
          }
          function Go(e, t, n, r, o) {
            e = e.toUpperCase();
            var i = null;
            "GET" === e ? (t = Yo(t, n)) : (i = Zo(n));
            var a = new XMLHttpRequest();
            a.open(e, t, !0),
              "GET" !== e &&
                a.setRequestHeader(
                  "Content-Type",
                  "application/x-www-form-urlencoded"
                ),
              (a.onload = function () {
                if (a.status >= 200 && a.status < 400) {
                  var e = !1,
                    t = void 0;
                  try {
                    (t = JSON.parse(a.responseText)), (e = !0);
                  } catch (e) {}
                  e ? r(t, a) : o("Failure parsing JSON", a);
                } else o("Request failed", a);
              }),
              (a.onerror = function () {
                o("Request failed", a);
              }),
              a.send(i);
          }
          function Yo(e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + Zo(t);
          }
          function Zo(e) {
            var t = [];
            for (var n in e)
              t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.join("&");
          }
          function qo(e, t, n) {
            var r,
              o,
              i,
              a,
              s = n.dateEnv,
              l = n.options,
              u = {};
            return (
              (r = e.startParam),
              null == r && (r = l.startParam),
              (o = e.endParam),
              null == o && (o = l.endParam),
              (i = e.timeZoneParam),
              null == i && (i = l.timeZoneParam),
              (a =
                "function" == typeof e.extraParams
                  ? e.extraParams()
                  : e.extraParams || {}),
              vs(u, a),
              (u[r] = s.formatIso(t.start)),
              (u[o] = s.formatIso(t.end)),
              "local" !== s.timeZone && (u[i] = s.timeZone),
              u
            );
          }
          function Xo(e, t, n, r) {
            for (
              var o = e ? He(e) : null, i = me(n.start), a = n.end, s = [];
              i < a;
  
            ) {
              var l = void 0;
              (o && !o[i.getUTCDay()]) || ((l = t ? r.add(i, t) : i), s.push(l)),
                (i = se(i, 1));
            }
            return s;
          }
          function $o(e, t) {
            for (
              var n = Ae(t.getCurrentData().eventSources), r = [], o = 0, i = e;
              o < i.length;
              o++
            ) {
              for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                  n.splice(l, 1), (s = !0);
                  break;
                }
              s || r.push(a);
            }
            for (var u = 0, c = n; u < c.length; u++) {
              var d = c[u];
              t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId });
            }
            for (var f = 0, p = r; f < p.length; f++) {
              var h = p[f];
              t.calendarApi.addEventSource(h);
            }
          }
          function Jo(e, t) {
            t.emitter.trigger(
              "datesSet",
              vs(vs({}, Pn(e.activeRange, t.dateEnv)), { view: t.viewApi })
            );
          }
          function Ko(e, t) {
            var n = t.emitter;
            n.hasHandlers("eventsSet") && n.trigger("eventsSet", Xn(e, t));
          }
          function Qo(e, t) {
            e.innerHTML = t;
          }
          function ei(e, t) {
            var n = Array.prototype.slice.call(e.childNodes),
              r = Array.prototype.slice.call(t);
            if (!ft(n, r)) {
              for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a);
              }
              n.forEach(N);
            }
          }
          function ti(e, t, n) {
            var r;
            return (
              (r = /^(year|month)$/.test(e.currentRangeUnit)
                ? e.currentRange
                : e.activeRange),
              n.formatRange(r.start, r.end, kt(t.titleFormat || ni(e)), {
                isEndExclusive: e.isRangeAllDay,
                defaultSeparator: t.titleRangeSeparator,
              })
            );
          }
          function ni(e) {
            var t = e.currentRangeUnit;
            if ("year" === t) return { year: "numeric" };
            if ("month" === t) return { year: "numeric", month: "long" };
            var n = ve(e.currentRange.start, e.currentRange.end);
            return null !== n && n > 1
              ? { year: "numeric", month: "short", day: "numeric" }
              : { year: "numeric", month: "long", day: "numeric" };
          }
          function ri(e, t, n, r, o, i, a, s) {
            var l = Qn(t || a.defaultCode, a.map);
            return new sl({
              calendarSystem: "gregory",
              timeZone: e,
              namedTimeZoneImpl: i.namedTimeZonedImpl,
              locale: l,
              weekNumberCalculation: n,
              firstDay: r,
              weekText: o,
              cmdFormatter: i.cmdFormatter,
              defaultSeparator: s,
            });
          }
          function oi(e, t) {
            return new (t.themeClasses[e.themeSystem] || Nl)(e);
          }
          function ii(e) {
            return new (e.dateProfileGeneratorClass || Ul)(e);
          }
          function ai(e, t, n) {
            return new Ks(e, t, n);
          }
          function si(e) {
            return Ne(e, function (e) {
              return e.ui;
            });
          }
          function li(e, t, n) {
            var r = { "": t };
            for (var o in e) {
              var i = e[o];
              i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId]);
            }
            return r;
          }
          function ui(e) {
            var t = e.options;
            return {
              eventUiSingleBase: Vt(
                {
                  display: t.eventDisplay,
                  editable: t.editable,
                  startEditable: t.eventStartEditable,
                  durationEditable: t.eventDurationEditable,
                  constraint: t.eventConstraint,
                  overlap:
                    "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                  allow: t.eventAllow,
                  backgroundColor: t.eventBackgroundColor,
                  borderColor: t.eventBorderColor,
                  textColor: t.eventTextColor,
                  color: t.eventColor,
                },
                e
              ),
              selectionConfig: Vt(
                {
                  constraint: t.selectConstraint,
                  overlap:
                    "boolean" == typeof t.selectOverlap
                      ? t.selectOverlap
                      : void 0,
                  allow: t.selectAllow,
                },
                e
              ),
            };
          }
          function ci(e, t) {
            for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
              if ((0, r[n])(e)) return !0;
            }
            return !1;
          }
          function di(e) {
            return ar(e.options.businessHours, e);
          }
          function fi(e, t) {
            for (var n in e)
              console.warn(
                "Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : "")
              );
          }
          function pi(e, t) {
            return fn(
              e.eventStore,
              e.eventUiBases,
              e.dateProfile.activeRange,
              t ? e.nextDayThreshold : null
            ).fg;
          }
          function hi(e, t) {
            return {
              component: e,
              el: t.el,
              useEventCenter: null == t.useEventCenter || t.useEventCenter,
            };
          }
          function gi(e) {
            var t;
            return (t = {}), (t[e.component.uid] = e), t;
          }
          function vi(e) {
            var t = It(e, lu),
              n = t.refined,
              r = t.extra;
            return {
              startTime: n.startTime || null,
              duration: n.duration || null,
              create: null == n.create || n.create,
              sourceId: n.sourceId,
              leftoverProps: r,
            };
          }
          function mi(e, t, n, r, o, i) {
            var a = n.build(o, void 0, !1),
              s = n.buildPrev(t, r, !1),
              l = n.buildNext(t, r, !1);
            return {
              title: i,
              activeButton: e.type,
              isTodayEnabled: a.isValid && !cn(t.currentRange, o),
              isPrevEnabled: s.isValid,
              isNextEnabled: l.isValid,
            };
          }
          function yi(e) {
            return e.map(function (e) {
              return new e();
            });
          }
          function bi(e, t) {
            return kt(
              !e || t > 10
                ? { weekday: "short" }
                : t > 1
                ? {
                    weekday: "short",
                    month: "numeric",
                    day: "numeric",
                    omitCommas: !0,
                  }
                : { weekday: "long" }
            );
          }
          function Ci(e) {
            return e.text;
          }
          function wi(e) {
            var t = me(e);
            return { start: t, end: se(t, 1) };
          }
          function Si(e, t, n) {
            return e || bi(t, n);
          }
          function Ei(e, t) {
            var n = e.activeRange;
            return t
              ? n
              : {
                  start: le(n.start, e.slotMinTime.milliseconds),
                  end: le(n.end, e.slotMaxTime.milliseconds - 864e5),
                };
          }
          function Di(e) {
            for (
              var t = A(e, ".fc-scrollgrid-shrink"), n = 0, r = 0, o = t;
              r < o.length;
              r++
            ) {
              var i = o[r];
              n = Math.max(n, ie(i));
            }
            return Math.ceil(n);
          }
          function Ti(e, t) {
            return e.liquid && t.liquid;
          }
          function Ri(e, t) {
            return null != t.maxHeight || Ti(e, t);
          }
          function xi(e, t, n) {
            var r = n.expandRows;
            return "function" == typeof t.content
              ? t.content(n)
              : wl(
                  "table",
                  {
                    className: [
                      t.tableClassName,
                      e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
                    ].join(" "),
                    style: {
                      minWidth: n.tableMinWidth,
                      width: n.clientWidth,
                      height: r ? n.clientHeight : "",
                    },
                  },
                  n.tableColGroupNode,
                  wl(
                    "tbody",
                    {},
                    "function" == typeof t.rowContent
                      ? t.rowContent(n)
                      : t.rowContent
                  )
                );
          }
          function ki(e, t) {
            return ft(e, t, Le);
          }
          function Mi(e, t) {
            for (var r = [], o = 0, i = e; o < i.length; o++)
              for (var a = i[o], s = a.span || 1, l = 0; l < s; l += 1)
                r.push(
                  wl("col", {
                    style: {
                      width: "shrink" === a.width ? _i(t) : a.width || "",
                      minWidth: a.minWidth || "",
                    },
                  })
                );
            return wl.apply(void 0, n(["colgroup", {}], r));
          }
          function _i(e) {
            return null == e ? 4 : e;
          }
          function Ii(e) {
            for (var t = 0, n = e; t < n.length; t++) {
              if ("shrink" === n[t].width) return !0;
            }
            return !1;
          }
          function Pi(e, t) {
            var n = ["fc-scrollgrid", t.theme.getClass("table")];
            return e && n.push("fc-scrollgrid-liquid"), n;
          }
          function Ni(e, t) {
            var n = [
              "fc-scrollgrid-section",
              "fc-scrollgrid-section-" + e.type,
              e.className,
            ];
            return (
              t &&
                e.liquid &&
                null == e.maxHeight &&
                n.push("fc-scrollgrid-section-liquid"),
              e.isSticky && n.push("fc-scrollgrid-section-sticky"),
              n
            );
          }
          function Hi(e) {
            return wl("div", {
              className: "fc-scrollgrid-sticky-shim",
              style: { width: e.clientWidth, minWidth: e.tableMinWidth },
            });
          }
          function Oi(e) {
            var t = e.stickyHeaderDates;
            return (
              (null != t && "auto" !== t) ||
                (t = "auto" === e.height || "auto" === e.viewHeight),
              t
            );
          }
          function Ai(e) {
            var t = e.stickyFooterScrollbar;
            return (
              (null != t && "auto" !== t) ||
                (t = "auto" === e.height || "auto" === e.viewHeight),
              t
            );
          }
          function Li(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];
              if (o.key === t) return o;
            }
            return null;
          }
          function zi(e) {
            return wl(
              "div",
              { className: "fc-event-main-frame" },
              e.timeText && wl("div", { className: "fc-event-time" }, e.timeText),
              wl(
                "div",
                { className: "fc-event-title-container" },
                wl(
                  "div",
                  { className: "fc-event-title fc-sticky" },
                  e.event.title || wl(Dl, null, " ")
                )
              )
            );
          }
          function ji(e) {
            var t = e.eventRange.def.url;
            return t ? { href: t } : {};
          }
          function Ui(e) {
            var t = e.date,
              n = e.dateEnv,
              r = mr(t, e.todayRange, null, e.dateProfile);
            return vs(
              vs(vs({ date: n.toDate(t), view: e.viewApi }, r), {
                dayNumberText: e.showDayNumber ? n.format(t, _u) : "",
              }),
              e.extraProps
            );
          }
          function Bi(e) {
            return wl("div", { className: "fc-" + e });
          }
          function Wi(e) {
            return (
              e.event.title &&
              wl("div", { className: "fc-event-title" }, e.event.title)
            );
          }
          function Vi(e) {
            return e.text;
          }
          function Fi(e) {
            return 0 === e.button && !e.ctrlKey;
          }
          function Gi() {
            (Au += 1),
              setTimeout(function () {
                Au -= 1;
              }, su.touchMouseIgnoreWait);
          }
          function Yi() {
            1 === (Lu += 1) &&
              window.addEventListener("touchmove", qi, { passive: !1 });
          }
          function Zi() {
            (Lu -= 1) ||
              window.removeEventListener("touchmove", qi, { passive: !1 });
          }
          function qi(e) {
            zu && e.preventDefault();
          }
          function Xi(e) {
            var t = e.tagName;
            return "HTML" === t || "BODY" === t;
          }
          function $i(e, t) {
            return (
              (!e && !t) ||
              (Boolean(e) === Boolean(t) && Mn(e.dateSpan, t.dateSpan))
            );
          }
          function Ji(e, t) {
            for (
              var n = {}, r = 0, o = t.pluginHooks.datePointTransforms;
              r < o.length;
              r++
            ) {
              var i = o[r];
              vs(n, i(e, t));
            }
            return vs(n, Ki(e, t.dateEnv)), n;
          }
          function Ki(e, t) {
            return {
              date: t.toDate(e.range.start),
              dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
              allDay: e.allDay,
            };
          }
          function Qi(e) {
            var t = e.context.options,
              n = t.selectLongPressDelay;
            return null == n && (n = t.longPressDelay), n;
          }
          function ea(e, t, n) {
            var r = e.dateSpan,
              o = t.dateSpan,
              i = [r.range.start, r.range.end, o.range.start, o.range.end];
            i.sort(re);
            for (var a = {}, s = 0, l = n; s < l.length; s++) {
              var u = l[s],
                c = u(e, t);
              if (!1 === c) return null;
              c && vs(a, c);
            }
            return (
              (a.range = { start: i[0], end: i[3] }), (a.allDay = r.allDay), a
            );
          }
          function ta(e, t, n) {
            var r = e.dateSpan,
              o = t.dateSpan,
              i = r.range.start,
              a = o.range.start,
              s = {};
            r.allDay !== o.allDay &&
              ((s.allDay = o.allDay),
              (s.hasEnd = t.component.context.options.allDayMaintainDuration),
              o.allDay && (i = me(i)));
            var l = tn(
              i,
              a,
              e.component.context.dateEnv,
              e.component === t.component ? e.component.largeUnit : null
            );
            l.milliseconds && (s.allDay = !1);
            for (
              var u = { datesDelta: l, standardProps: s }, c = 0, d = n;
              c < d.length;
              c++
            ) {
              (0, d[c])(u, e, t);
            }
            return u;
          }
          function na(e) {
            var t = e.context.options,
              n = t.eventLongPressDelay;
            return null == n && (n = t.longPressDelay), n;
          }
          function ra(e, t, n, r, o) {
            for (
              var i = e.component.context.dateEnv,
                a = e.dateSpan.range.start,
                s = t.dateSpan.range.start,
                l = tn(a, s, i, e.component.largeUnit),
                u = {},
                c = 0,
                d = o;
              c < d.length;
              c++
            ) {
              var f = d[c],
                p = f(e, t);
              if (!1 === p) return null;
              p && vs(u, p);
            }
            if (n) {
              if (i.add(r.start, l) < r.end) return (u.startDelta = l), u;
            } else if (i.add(r.end, l) > r.start) return (u.endDelta = l), u;
            return null;
          }
          function oa(e, t, n) {
            for (
              var r = vs({}, t.leftoverProps),
                o = 0,
                i = n.pluginHooks.externalDefTransforms;
              o < i.length;
              o++
            ) {
              var a = i[o];
              vs(r, a(e, t));
            }
            var s = Zt(r, n),
              l = s.refined,
              u = s.extra,
              c = Xt(
                l,
                u,
                t.sourceId,
                e.allDay,
                n.options.forceEventDuration || Boolean(t.duration),
                n
              ),
              d = e.range.start;
            e.allDay && t.startTime && (d = n.dateEnv.add(d, t.startTime));
            var f = t.duration
              ? n.dateEnv.add(d, t.duration)
              : zn(e.allDay, d, n);
            return { def: c, instance: _e(c.defId, { start: d, end: f }) };
          }
          function ia(e) {
            var t = aa(e, "event");
            return vi(t ? JSON.parse(t) : { create: !1 });
          }
          function aa(e, t) {
            var n = su.dataAttrPrefix,
              r = (n ? n + "-" : "") + t;
            return e.getAttribute("data-" + r) || "";
          }
          function sa(e, t) {
            for (var n = [], r = 0; r < t; r += 1) n[r] = [];
            for (var o = 0, i = e; o < i.length; o++) {
              var a = i[o];
              n[a.row].push(a);
            }
            return n;
          }
          function la(e, t) {
            for (var n = [], r = 0; r < t; r += 1) n[r] = [];
            for (var o = 0, i = e; o < i.length; o++) {
              var a = i[o];
              n[a.firstCol].push(a);
            }
            return n;
          }
          function ua(e, t) {
            var n = [];
            if (e) {
              for (var r = 0; r < t; r += 1)
                n[r] = {
                  affectedInstances: e.affectedInstances,
                  isEvent: e.isEvent,
                  segs: [],
                };
              for (var o = 0, i = e.segs; o < i.length; o++) {
                var a = i[o];
                n[a.row].segs.push(a);
              }
            } else for (var r = 0; r < t; r += 1) n[r] = null;
            return n;
          }
          function ca(e) {
            return e.dayNumberText;
          }
          function da(e) {
            return e.text;
          }
          function fa(e) {
            var t = e.eventRange.ui.display;
            return (
              "list-item" === t ||
              ("auto" === t &&
                !e.eventRange.def.allDay &&
                e.firstCol === e.lastCol &&
                e.isStart &&
                e.isEnd)
            );
          }
          function pa(e) {
            return wl(
              Dl,
              null,
              wl("div", {
                className: "fc-daygrid-event-dot",
                style: { borderColor: e.borderColor || e.backgroundColor },
              }),
              e.timeText && wl("div", { className: "fc-event-time" }, e.timeText),
              wl(
                "div",
                { className: "fc-event-title" },
                e.event.title || wl(Dl, null, " ")
              )
            );
          }
          function ha(e) {
            var t = e.eventRange.def.url;
            return t ? { href: t } : {};
          }
          function ga(e, t, n, r, o, i, a, s) {
            function l(e, t, n) {
              if (u(e, t, n)) {
                for (var r = e.firstCol; r <= e.lastCol; r += 1) {
                  for (var o = c[r], i = 0; i < o.length && n >= o[i].top; )
                    i += 1;
                  o.splice(i, 0, { seg: e, top: n, bottom: n + t });
                }
                return !0;
              }
              return !1;
            }
            function u(e, t, n) {
              for (var r = e.firstCol; r <= e.lastCol; r += 1)
                for (var o = 0, i = c[r]; o < i.length; o++) {
                  var a = i[o];
                  if (n < a.bottom && n + t > a.top) return !1;
                }
              return !0;
            }
            for (
              var c = [], d = [], f = {}, p = {}, h = {}, g = {}, v = {}, m = 0;
              m < a;
              m += 1
            )
              c.push([]), d.push(0);
            t = yn(t, s);
            for (var y = 0, b = t; y < b.length; y++) {
              var C = b[y],
                w = C.eventRange.instance.instanceId,
                S = o[w + ":" + C.firstCol];
              !(function (e, t) {
                if (!l(e, t, 0))
                  for (var n = e.firstCol; n <= e.lastCol; n += 1)
                    for (var r = 0, o = c[n]; r < o.length; r++) {
                      var i = o[r];
                      if (l(e, t, i.bottom)) return;
                    }
              })(C, S || 0);
            }
            !0 === n || !0 === r
              ? ya(d, f, c, i)
              : "number" == typeof n
              ? ba(d, f, c, n)
              : "number" == typeof r && Ca(d, f, c, r);
            for (var E = 0; E < a; E += 1) {
              for (var D = c[E], T = 0, R = 0, x = 0, k = D; x < k.length; x++) {
                var M = k[x],
                  C = M.seg;
                f[C.eventRange.instance.instanceId] ||
                  ((p[C.eventRange.instance.instanceId] = M.top),
                  C.firstCol === C.lastCol && C.isStart && C.isEnd
                    ? ((h[C.eventRange.instance.instanceId] = M.top - T),
                      (R = 0),
                      (T = M.bottom))
                    : (R = M.bottom - T));
              }
              R && (d[E] ? (g[E] = R) : (v[E] = R));
            }
            for (var _ in o) o[_] || (f[_.split(":")[0]] = !0);
            return {
              segsByFirstCol: c.map(va),
              segsByEachCol: c.map(function (t, n) {
                var r = ma(t);
                return (r = Sa(r, e[n].date, n));
              }),
              segIsHidden: f,
              segTops: p,
              segMarginTops: h,
              moreCnts: d,
              moreTops: g,
              paddingBottoms: v,
            };
          }
          function va(e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
              var i = o[r];
              i.seg.firstCol === t && n.push(i.seg);
            }
            return n;
          }
          function ma(e) {
            for (var t = [], n = 0, r = e; n < r.length; n++) {
              var o = r[n];
              t.push(o.seg);
            }
            return t;
          }
          function ya(e, t, n, r) {
            wa(e, t, n, !0, function (e) {
              return e.bottom <= r;
            });
          }
          function ba(e, t, n, r) {
            wa(e, t, n, !1, function (e, t) {
              return t < r;
            });
          }
          function Ca(e, t, n, r) {
            wa(e, t, n, !0, function (e, t) {
              return t < r;
            });
          }
          function wa(e, t, n, r, o) {
            function i(n, r, o) {
              var a = n.seg,
                s = a.eventRange.instance.instanceId;
              if (!t[s]) {
                t[s] = !0;
                for (var u = a.firstCol; u <= a.lastCol; u += 1) {
                  e[u] += 1;
                  var c = e[u];
                  if (o && 1 === c && r > 0)
                    for (var d = r - 1; l[u].length > d; )
                      i(l[u].pop(), l[u].length, !1);
                }
              }
            }
            for (var a = e.length, s = {}, l = [], u = 0; u < a; u += 1)
              l.push([]);
            for (var u = 0; u < a; u += 1)
              for (var c = n[u], d = 0, f = 0, p = c; f < p.length; f++) {
                var h = p[f];
                o(h, d)
                  ? (function (e) {
                      var t = e.seg,
                        n = t.eventRange.instance.instanceId;
                      if (!s[n]) {
                        s[n] = !0;
                        for (var r = t.firstCol; r <= t.lastCol; r += 1) {
                          for (
                            var o = l[r], i = 0;
                            i < o.length && e.top >= o[i].top;
  
                          )
                            i += 1;
                          o.splice(i, 0, e);
                        }
                      }
                    })(h)
                  : i(h, d, r),
                  h.top !== h.bottom && (d += 1);
              }
          }
          function Sa(e, t, n) {
            for (
              var r = t,
                o = se(r, 1),
                i = { start: r, end: o },
                a = [],
                s = 0,
                l = e;
              s < l.length;
              s++
            ) {
              var u = l[s],
                c = u.eventRange,
                d = c.range,
                f = an(d, i);
              f &&
                a.push(
                  vs(vs({}, u), {
                    firstCol: n,
                    lastCol: n,
                    eventRange: {
                      def: c.def,
                      ui: vs(vs({}, c.ui), { durationEditable: !1 }),
                      instance: c.instance,
                      range: f,
                    },
                    isStart: u.isStart && f.start.valueOf() === d.start.valueOf(),
                    isEnd: u.isEnd && f.end.valueOf() === d.end.valueOf(),
                  })
                );
            }
            return a;
          }
          function Ea(e) {
            return "function" == typeof e
              ? e
              : function (t) {
                  return "+" + t + " " + e;
                };
          }
          function Da(e) {
            return e.eventRange.def.allDay;
          }
          function Ta(e, t) {
            var n = new Cu(e.renderRange, t);
            return new wu(n, /year|month|week/.test(e.currentRangeUnit));
          }
          function Ra(e) {
            var t = [
              "fc-timegrid-slot",
              "fc-timegrid-slot-label",
              e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor",
            ];
            return wl(Ml.Consumer, null, function (n) {
              if (!e.isLabeled)
                return wl("td", {
                  className: t.join(" "),
                  "data-time": e.isoTimeStr,
                });
              var r = n.dateEnv,
                o = n.options,
                i = n.viewApi,
                a =
                  null == o.slotLabelFormat
                    ? Rc
                    : kt(
                        Array.isArray(o.slotLabelFormat)
                          ? o.slotLabelFormat[0]
                          : o.slotLabelFormat
                      ),
                s = {
                  level: 0,
                  time: e.time,
                  date: r.toDate(e.date),
                  view: i,
                  text: r.format(e.date, a),
                };
              return wl(
                Hl,
                {
                  hookProps: s,
                  classNames: o.slotLabelClassNames,
                  content: o.slotLabelContent,
                  defaultContent: xa,
                  didMount: o.slotLabelDidMount,
                  willUnmount: o.slotLabelWillUnmount,
                },
                function (n, r, o, i) {
                  return wl(
                    "td",
                    {
                      ref: n,
                      className: t.concat(r).join(" "),
                      "data-time": e.isoTimeStr,
                    },
                    wl(
                      "div",
                      {
                        className:
                          "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame",
                      },
                      wl(
                        "div",
                        {
                          className:
                            "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                          ref: o,
                        },
                        i
                      )
                    )
                  );
                }
              );
            });
          }
          function xa(e) {
            return e.text;
          }
          function ka(e) {
            return e.text;
          }
          function Ma(e, t) {
            return t.map(function (t) {
              return e[t.key];
            });
          }
          function _a(e, t) {
            var n,
              r = [];
            for (n = 0; n < t; n += 1) r.push([]);
            if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
            return r;
          }
          function Ia(e, t) {
            var n = [];
            if (e) {
              for (var r = 0; r < t; r += 1)
                n[r] = {
                  affectedInstances: e.affectedInstances,
                  isEvent: e.isEvent,
                  segs: [],
                };
              for (var o = 0, i = e.segs; o < i.length; o++) {
                var a = i[o];
                n[a.col].segs.push(a);
              }
            } else for (var r = 0; r < t; r += 1) n[r] = null;
            return n;
          }
          function Pa(e, t, n, r, o) {
            return Na(e, t, n, r), Ha(e, o);
          }
          function Na(e, t, n, r) {
            for (var o = 0, i = e; o < i.length; o++) {
              var a = i[o];
              (a.top = n.computeDateTop(a.start, t)),
                (a.bottom = Math.max(
                  a.top + (r || 0),
                  n.computeDateTop(a.end, t)
                ));
            }
          }
          function Ha(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];
              (o.level = null),
                (o.forwardCoord = null),
                (o.backwardCoord = null),
                (o.forwardPressure = null);
            }
            e = yn(e, t);
            var i,
              a = Oa(e);
            if ((za(a), (i = a[0]))) {
              for (var s = 0, l = i; s < l.length; s++) {
                var o = l[s];
                ja(o);
              }
              for (var u = 0, c = i; u < c.length; u++) {
                var o = c[u];
                Ua(o, 0, 0, t);
              }
            }
            return e;
          }
          function Oa(e) {
            var t,
              n,
              r,
              o = [];
            for (t = 0; t < e.length; t += 1) {
              for (n = e[t], r = 0; r < o.length && Aa(n, o[r]).length; r += 1);
              (n.level = r), (o[r] || (o[r] = [])).push(n);
            }
            return o;
          }
          function Aa(e, t, n) {
            void 0 === n && (n = []);
            for (var r = 0; r < t.length; r += 1) La(e, t[r]) && n.push(t[r]);
            return n;
          }
          function La(e, t) {
            return e.bottom > t.top && e.top < t.bottom;
          }
          function za(e) {
            var t, n, r, o, i;
            for (t = 0; t < e.length; t += 1)
              for (n = e[t], r = 0; r < n.length; r += 1)
                for (
                  o = n[r], o.forwardSegs = [], i = t + 1;
                  i < e.length;
                  i += 1
                )
                  Aa(o, e[i], o.forwardSegs);
          }
          function ja(e) {
            var t,
              n,
              r = e.forwardSegs,
              o = 0;
            if (null == e.forwardPressure) {
              for (t = 0; t < r.length; t += 1)
                (n = r[t]), ja(n), (o = Math.max(o, 1 + n.forwardPressure));
              e.forwardPressure = o;
            }
          }
          function Ua(e, t, n, r) {
            var o,
              i = e.forwardSegs;
            if (null == e.forwardCoord)
              for (
                i.length
                  ? (Ba(i, r),
                    Ua(i[0], t + 1, n, r),
                    (e.forwardCoord = i[0].backwardCoord))
                  : (e.forwardCoord = 1),
                  e.backwardCoord =
                    e.forwardCoord - (e.forwardCoord - n) / (t + 1),
                  o = 0;
                o < i.length;
                o += 1
              )
                Ua(i[o], 0, e.forwardCoord, r);
          }
          function Ba(e, t) {
            var n = e.map(Wa),
              r = [
                { field: "forwardPressure", order: -1 },
                { field: "backwardCoord", order: 1 },
              ].concat(t);
            return (
              n.sort(function (e, t) {
                return Q(e, t, r);
              }),
              n.map(function (e) {
                return e._seg;
              })
            );
          }
          function Wa(e) {
            var t = bn(e);
            return (
              (t.forwardPressure = e.forwardPressure),
              (t.backwardCoord = e.backwardCoord),
              t
            );
          }
          function Va(e, t) {
            return t.map(function (t) {
              return e[t.key];
            });
          }
          function Fa(e, t) {
            var n = t || e,
              r = it(e, n);
            return (
              null === r && ((n = e), (r = 1)),
              { snapDuration: n, snapsPerSlot: r }
            );
          }
          function Ga(e, t, n) {
            for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
              var a = i[o];
              r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime),
              });
            }
            return r;
          }
          function Ya(e, t, n, r, o) {
            for (
              var i = new Date(0), a = e, s = Ge(0), l = n || Za(r), u = [];
              ot(a) < ot(t);
  
            ) {
              var c = o.add(i, a),
                d = null !== it(s, l);
              u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: ut(c),
                isLabeled: d,
              }),
                (a = $e(a, r)),
                (s = $e(s, r));
            }
            return u;
          }
          function Za(e) {
            var t, n, r;
            for (t = Bc.length - 1; t >= 0; t -= 1)
              if (((n = Ge(Bc[t])), null !== (r = it(n, e)) && r > 1)) return n;
            return e;
          }
          function qa(e, t) {
            var n = new Cu(e.renderRange, t);
            return new wu(n, !1);
          }
          function Xa(e) {
            var t = e.navLinkData
              ? { "data-navlink": e.navLinkData, tabIndex: 0 }
              : {};
            return wl(
              Dl,
              null,
              e.text && wl("a", vs({ className: "fc-list-day-text" }, t), e.text),
              e.sideText &&
                wl("a", vs({ className: "fc-list-day-side-text" }, t), e.sideText)
            );
          }
          function $a(e) {
            var t = e.event,
              n = t.url;
            return wl("a", vs({}, n ? { href: n } : {}), t.title);
          }
          function Ja(e, t, n) {
            var r = n.options;
            if (!1 !== r.displayEventTime) {
              var o = e.eventRange.def,
                i = e.eventRange.instance,
                a = !1,
                s = void 0;
              if (
                (o.allDay
                  ? (a = !0)
                  : en(e.eventRange.range)
                  ? e.isStart
                    ? (s = En(e, t, n, null, null, i.range.start, e.end))
                    : e.isEnd
                    ? (s = En(e, t, n, null, null, e.start, i.range.end))
                    : (a = !0)
                  : (s = En(e, t, n)),
                a)
              ) {
                var l = { text: n.options.allDayText, view: n.viewApi };
                return wl(
                  Hl,
                  {
                    hookProps: l,
                    classNames: r.allDayClassNames,
                    content: r.allDayContent,
                    defaultContent: Ka,
                    didMount: r.allDayDidMount,
                    willUnmount: r.allDayWillUnmount,
                  },
                  function (e, t, n, r) {
                    return wl(
                      "td",
                      {
                        className: ["fc-list-event-time"].concat(t).join(" "),
                        ref: e,
                      },
                      r
                    );
                  }
                );
              }
              return wl("td", { className: "fc-list-event-time" }, s);
            }
            return null;
          }
          function Ka(e) {
            return e.text;
          }
          function Qa(e) {
            return e.text;
          }
          function es(e) {
            for (
              var t = me(e.renderRange.start),
                n = e.renderRange.end,
                r = [],
                o = [];
              t < n;
  
            )
              r.push(t), o.push({ start: t, end: se(t, 1) }), (t = se(t, 1));
            return { dayDates: r, dayRanges: o };
          }
          function ts(e) {
            var t,
              n,
              r = [];
            for (t = 0; t < e.length; t += 1)
              (n = e[t]), (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
            return r;
          }
          function ns(e) {
            return !1 === e ? null : kt(e);
          }
          // GOOGLE CALENDAR
          function rs(e) {
            var t;
            return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)
              ? e
              : (t =
                  /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(
                    e
                  )) ||
                (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(
                  e
                ))
              ? decodeURIComponent(t[1])
              : null;
          }
          function os(e) {
            var t = e.googleCalendarApiBase;
            return (
              t || (t = td),
              t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
            );
          }
          function is(e, t, n, r) {
            var o, i, a;
            return (
              r.canComputeOffset
                ? ((i = r.formatIso(e.start)), (a = r.formatIso(e.end)))
                : ((i = se(e.start, -1).toISOString()),
                  (a = se(e.end, 1).toISOString())),
              (o = vs(vs({}, n || {}), {
                key: t,
                timeMin: i,
                timeMax: a,
                singleEvents: !0,
                maxResults: 9999,
              })),
              "local" !== r.timeZone && (o.timeZone = r.timeZone),
              o
            );
          }
          function as(e, t) {
            return e.map(function (e) {
              return ss(e, t);
            });
          }
          function ss(e, t) {
            var n = e.htmlLink || null;
            return (
              n && t && (n = ls(n, "ctz=" + t)),
              {
                id: e.id,
                title: e.summary,
                start: e.start.dateTime || e.start.date,
                end: e.end.dateTime || e.end.date,
                url: n,
                location: e.location,
                description: e.description,
                attachments: e.attachments || [],
                extendedProps: (e.extendedProperties || {}).shared || {},
              }
            );
          }
          function ls(e, t) {
            return e.replace(/(\?.*?)?(#|$)/, function (e, n, r) {
              return (n ? n + "&" : "?") + t + r;
            });
          }
          var us,
            cs,
            ds,
            fs,
            ps,
            hs,
            gs = function (e, t) {
              return (gs =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
            },
            vs = function () {
              return (
                (vs =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) {
                      t = arguments[n];
                      for (var o in t)
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    }
                    return e;
                  }),
                vs.apply(this, arguments)
              );
            },
            ms = {},
            ys = [],
            bs =
              /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
          (us = {
            __e: function (e, t) {
              for (var n, r, o, i = t.__h; (t = t.__); )
                if ((n = t.__c) && !n.__)
                  try {
                    if (
                      ((r = n.constructor) &&
                        null != r.getDerivedStateFromError &&
                        (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
                      null != n.componentDidCatch &&
                        (n.componentDidCatch(e), (o = n.__d)),
                      o)
                    )
                      return (t.__h = i), (n.__E = n);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
            __v: 0,
          }),
            (u.prototype.setState = function (e, t) {
              var n;
              (n =
                null != this.__s && this.__s !== this.state
                  ? this.__s
                  : (this.__s = r({}, this.state))),
                "function" == typeof e && (e = e(r({}, n), this.props)),
                e && r(n, e),
                null != e && this.__v && (t && this.__h.push(t), f(this));
            }),
            (u.prototype.forceUpdate = function (e) {
              this.__v && ((this.__e = !0), e && this.__h.push(e), f(this));
            }),
            (u.prototype.render = l),
            (cs = []),
            (ds =
              "function" == typeof Promise
                ? Promise.prototype.then.bind(Promise.resolve())
                : setTimeout),
            (p.__r = 0),
            (ps = ms),
            (hs = 0);
          var Cs = "undefined" != typeof globalThis ? globalThis : window;
          Cs.FullCalendarVDom
            ? console.warn("FullCalendar VDOM already loaded")
            : (Cs.FullCalendarVDom = {
                Component: u,
                createElement: i,
                render: k,
                createRef: s,
                Fragment: l,
                createContext: I,
                flushToDom: _,
                unmountComponentAtNode: P,
              });
          var ws = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  return i("div", {});
                }),
                (n.prototype.componentDidMount = function () {
                  this.setState({});
                }),
                n
              );
            })(u),
            Ss = (function () {
              function e(e, t) {
                (this.context = e), (this.internalEventSource = t);
              }
              return (
                (e.prototype.remove = function () {
                  this.context.dispatch({
                    type: "REMOVE_EVENT_SOURCE",
                    sourceId: this.internalEventSource.sourceId,
                  });
                }),
                (e.prototype.refetch = function () {
                  this.context.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    sourceIds: [this.internalEventSource.sourceId],
                    isRefetch: !0,
                  });
                }),
                Object.defineProperty(e.prototype, "id", {
                  get: function () {
                    return this.internalEventSource.publicId;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "url", {
                  get: function () {
                    return this.internalEventSource.meta.url;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "format", {
                  get: function () {
                    return this.internalEventSource.meta.format;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                e
              );
            })(),
            Es = /(top|left|right|bottom|width|height)$/i,
            Ds = [
              "webkitTransitionEnd",
              "otransitionend",
              "oTransitionEnd",
              "msTransitionEnd",
              "transitionend",
            ],
            Ts = 0,
            Rs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            xs = Object.prototype.hasOwnProperty,
            ks = ["years", "months", "days", "milliseconds"],
            Ms = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/,
            _s = {
              week: 3,
              separator: 0,
              omitZeroMinute: 0,
              meridiem: 0,
              omitCommas: 0,
            },
            Is = {
              timeZoneName: 7,
              era: 6,
              year: 5,
              month: 4,
              day: 2,
              weekday: 2,
              hour: 1,
              minute: 1,
              second: 1,
            },
            Ps = /\s*([ap])\.?m\.?/i,
            Ns = /,/g,
            Hs = /\s+/g,
            Os = /\u200e/g,
            As = /UTC|GMT/,
            Ls = (function () {
              function e(e) {
                var t = {},
                  n = {},
                  r = 0;
                for (var o in e)
                  o in _s
                    ? ((n[o] = e[o]), (r = Math.max(_s[o], r)))
                    : ((t[o] = e[o]), o in Is && (r = Math.max(Is[o], r)));
                (this.standardDateProps = t),
                  (this.extendedSettings = n),
                  (this.severity = r),
                  (this.buildFormattingFunc = pt(mt));
              }
              return (
                (e.prototype.format = function (e, t) {
                  return this.buildFormattingFunc(
                    this.standardDateProps,
                    this.extendedSettings,
                    t
                  )(e);
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                  var o = this,
                    i = o.standardDateProps,
                    a = o.extendedSettings,
                    s = Et(e.marker, t.marker, n.calendarSystem);
                  if (!s) return this.format(e, n);
                  var l = s;
                  !(l > 1) ||
                    ("numeric" !== i.year && "2-digit" !== i.year) ||
                    ("numeric" !== i.month && "2-digit" !== i.month) ||
                    ("numeric" !== i.day && "2-digit" !== i.day) ||
                    (l = 1);
                  var u = this.format(e, n),
                    c = this.format(t, n);
                  if (u === c) return u;
                  var d = Dt(i, l),
                    f = mt(d, a, n),
                    p = f(e),
                    h = f(t),
                    g = Tt(u, p, c, h),
                    v = a.separator || r || n.defaultSeparator || "";
                  return g ? g.before + p + v + h + g.after : u + v + c;
                }),
                (e.prototype.getLargestUnit = function () {
                  switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                      return "year";
                    case 4:
                      return "month";
                    case 3:
                      return "week";
                    case 2:
                      return "day";
                    default:
                      return "time";
                  }
                }),
                e
              );
            })(),
            zs = (function () {
              function e(e) {
                this.cmdStr = e;
              }
              return (
                (e.prototype.format = function (e, t, n) {
                  return t.cmdFormatter(this.cmdStr, xt(e, null, t, n));
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                  return n.cmdFormatter(this.cmdStr, xt(e, t, n, r));
                }),
                e
              );
            })(),
            js = (function () {
              function e(e) {
                this.func = e;
              }
              return (
                (e.prototype.format = function (e, t, n) {
                  return this.func(xt(e, null, t, n));
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                  return this.func(xt(e, t, n, r));
                }),
                e
              );
            })(),
            Us = {
              navLinkDayClick: Pt,
              navLinkWeekClick: Pt,
              duration: Ge,
              bootstrapFontAwesome: Pt,
              buttonIcons: Pt,
              customButtons: Pt,
              defaultAllDayEventDuration: Ge,
              defaultTimedEventDuration: Ge,
              nextDayThreshold: Ge,
              scrollTime: Ge,
              slotMinTime: Ge,
              slotMaxTime: Ge,
              dayPopoverFormat: kt,
              slotDuration: Ge,
              snapDuration: Ge,
              headerToolbar: Pt,
              footerToolbar: Pt,
              defaultRangeSeparator: String,
              titleRangeSeparator: String,
              forceEventDuration: Boolean,
              dayHeaders: Boolean,
              dayHeaderFormat: kt,
              dayHeaderClassNames: Pt,
              dayHeaderContent: Pt,
              dayHeaderDidMount: Pt,
              dayHeaderWillUnmount: Pt,
              dayCellClassNames: Pt,
              dayCellContent: Pt,
              dayCellDidMount: Pt,
              dayCellWillUnmount: Pt,
              initialView: String,
              aspectRatio: Number,
              weekends: Boolean,
              weekNumberCalculation: Pt,
              weekNumbers: Boolean,
              weekNumberClassNames: Pt,
              weekNumberContent: Pt,
              weekNumberDidMount: Pt,
              weekNumberWillUnmount: Pt,
              editable: Boolean,
              viewClassNames: Pt,
              viewDidMount: Pt,
              viewWillUnmount: Pt,
              nowIndicator: Boolean,
              nowIndicatorClassNames: Pt,
              nowIndicatorContent: Pt,
              nowIndicatorDidMount: Pt,
              nowIndicatorWillUnmount: Pt,
              showNonCurrentDates: Boolean,
              lazyFetching: Boolean,
              startParam: String,
              endParam: String,
              timeZoneParam: String,
              timeZone: String,
              locales: Pt,
              locale: Pt,
              themeSystem: String,
              dragRevertDuration: Number,
              dragScroll: Boolean,
              allDayMaintainDuration: Boolean,
              unselectAuto: Boolean,
              dropAccept: Pt,
              eventOrder: K,
              handleWindowResize: Boolean,
              windowResizeDelay: Number,
              longPressDelay: Number,
              eventDragMinDistance: Number,
              expandRows: Boolean,
              height: Pt,
              contentHeight: Pt,
              direction: String,
              weekNumberFormat: kt,
              eventResizableFromStart: Boolean,
              displayEventTime: Boolean,
              displayEventEnd: Boolean,
              weekText: String,
              progressiveEventRendering: Boolean,
              businessHours: Pt,
              initialDate: Pt,
              now: Pt,
              eventDataTransform: Pt,
              stickyHeaderDates: Pt,
              stickyFooterScrollbar: Pt,
              viewHeight: Pt,
              defaultAllDay: Boolean,
              eventSourceFailure: Pt,
              eventSourceSuccess: Pt,
              eventDisplay: String,
              eventStartEditable: Boolean,
              eventDurationEditable: Boolean,
              eventOverlap: Pt,
              eventConstraint: Pt,
              eventAllow: Pt,
              eventBackgroundColor: String,
              eventBorderColor: String,
              eventTextColor: String,
              eventColor: String,
              eventClassNames: Pt,
              eventContent: Pt,
              eventDidMount: Pt,
              eventWillUnmount: Pt,
              selectConstraint: Pt,
              selectOverlap: Pt,
              selectAllow: Pt,
              droppable: Boolean,
              unselectCancel: String,
              slotLabelFormat: Pt,
              slotLaneClassNames: Pt,
              slotLaneContent: Pt,
              slotLaneDidMount: Pt,
              slotLaneWillUnmount: Pt,
              slotLabelClassNames: Pt,
              slotLabelContent: Pt,
              slotLabelDidMount: Pt,
              slotLabelWillUnmount: Pt,
              dayMaxEvents: Pt,
              dayMaxEventRows: Pt,
              dayMinWidth: Number,
              slotLabelInterval: Ge,
              allDayText: String,
              allDayClassNames: Pt,
              allDayContent: Pt,
              allDayDidMount: Pt,
              allDayWillUnmount: Pt,
              slotMinWidth: Number,
              navLinks: Boolean,
              eventTimeFormat: kt,
              rerenderDelay: Number,
              moreLinkText: Pt,
              selectMinDistance: Number,
              selectable: Boolean,
              selectLongPressDelay: Number,
              eventLongPressDelay: Number,
              selectMirror: Boolean,
              eventMinHeight: Number,
              slotEventOverlap: Boolean,
              plugins: Pt,
              firstDay: Number,
              dayCount: Number,
              dateAlignment: String,
              dateIncrement: Ge,
              hiddenDays: Pt,
              monthMode: Boolean,
              fixedWeekCount: Boolean,
              validRange: Pt,
              visibleRange: Pt,
              titleFormat: Pt,
              noEventsText: String,
            },
            Bs = {
              eventDisplay: "auto",
              defaultRangeSeparator: " - ",
              titleRangeSeparator: " – ",
              defaultTimedEventDuration: "01:00:00",
              defaultAllDayEventDuration: { day: 1 },
              forceEventDuration: !1,
              nextDayThreshold: "00:00:00",
              dayHeaders: !0,
              initialView: "",
              aspectRatio: 1.35,
              headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next",
              },
              weekends: !0,
              weekNumbers: !1,
              weekNumberCalculation: "local",
              editable: !1,
              nowIndicator: !1,
              scrollTime: "06:00:00",
              slotMinTime: "00:00:00",
              slotMaxTime: "24:00:00",
              showNonCurrentDates: !0,
              lazyFetching: !0,
              startParam: "start",
              endParam: "end",
              timeZoneParam: "timeZone",
              timeZone: "local",
              locales: [],
              locale: "",
              themeSystem: "standard",
              dragRevertDuration: 500,
              dragScroll: !0,
              allDayMaintainDuration: !1,
              unselectAuto: !0,
              dropAccept: "*",
              eventOrder: "start,-duration,allDay,title",
              dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric",
              },
              handleWindowResize: !0,
              windowResizeDelay: 100,
              longPressDelay: 1e3,
              eventDragMinDistance: 5,
              expandRows: !1,
              navLinks: !1,
              selectable: !1,
            },
            Ws = {
              datesSet: Pt,
              eventsSet: Pt,
              eventAdd: Pt,
              eventChange: Pt,
              eventRemove: Pt,
              windowResize: Pt,
              eventClick: Pt,
              eventMouseEnter: Pt,
              eventMouseLeave: Pt,
              select: Pt,
              unselect: Pt,
              loading: Pt,
              _unmount: Pt,
              _beforeprint: Pt,
              _afterprint: Pt,
              _noEventDrop: Pt,
              _noEventResize: Pt,
              _resize: Pt,
              _scrollRequest: Pt,
            },
            Vs = {
              buttonText: Pt,
              views: Pt,
              plugins: Pt,
              initialEvents: Pt,
              events: Pt,
              eventSources: Pt,
            },
            Fs = {
              headerToolbar: Mt,
              footerToolbar: Mt,
              buttonText: Mt,
              buttonIcons: Mt,
            },
            Gs = {
              type: String,
              component: Pt,
              buttonText: String,
              buttonTextKey: String,
              dateProfileGeneratorClass: Pt,
              usesMinMaxTime: Boolean,
              classNames: Pt,
              content: Pt,
              didMount: Pt,
              willUnmount: Pt,
            },
            Ys = {
              display: String,
              editable: Boolean,
              startEditable: Boolean,
              durationEditable: Boolean,
              constraint: Pt,
              overlap: Pt,
              allow: Pt,
              className: Wt,
              classNames: Wt,
              color: String,
              backgroundColor: String,
              borderColor: String,
              textColor: String,
            },
            Zs = {
              display: null,
              startEditable: null,
              durationEditable: null,
              constraints: [],
              overlap: null,
              allows: [],
              backgroundColor: "",
              borderColor: "",
              textColor: "",
              classNames: [],
            },
            qs = { id: String, groupId: String, title: String, url: String },
            Xs = { start: Pt, end: Pt, date: Pt, allDay: Boolean },
            $s = vs(vs(vs({}, qs), Xs), { extendedProps: Pt }),
            Js = { start: Pt, end: Pt, allDay: Boolean },
            Ks = (function () {
              function e(e, t, n) {
                (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
              }
              return (
                Object.defineProperty(e.prototype, "calendar", {
                  get: function () {
                    return this.getCurrentData().calendarApi;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "title", {
                  get: function () {
                    return this.getCurrentData().viewTitle;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeStart", {
                  get: function () {
                    return this.dateEnv.toDate(
                      this.getCurrentData().dateProfile.activeRange.start
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeEnd", {
                  get: function () {
                    return this.dateEnv.toDate(
                      this.getCurrentData().dateProfile.activeRange.end
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "currentStart", {
                  get: function () {
                    return this.dateEnv.toDate(
                      this.getCurrentData().dateProfile.currentRange.start
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "currentEnd", {
                  get: function () {
                    return this.dateEnv.toDate(
                      this.getCurrentData().dateProfile.currentRange.end
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.getOption = function (e) {
                  return this.getCurrentData().options[e];
                }),
                e
              );
            })(),
            Qs = {
              id: String,
              defaultAllDay: Boolean,
              url: String,
              format: String,
              events: Pt,
              eventDataTransform: Pt,
              success: Pt,
              failure: Pt,
            },
            el = (function () {
              function e() {}
              return (
                (e.prototype.getCurrentData = function () {
                  return this.currentDataManager.getCurrentData();
                }),
                (e.prototype.dispatch = function (e) {
                  return this.currentDataManager.dispatch(e);
                }),
                Object.defineProperty(e.prototype, "view", {
                  get: function () {
                    return this.getCurrentData().viewApi;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.batchRendering = function (e) {
                  e();
                }),
                (e.prototype.updateSize = function () {
                  this.trigger("_resize", !0);
                }),
                (e.prototype.setOption = function (e, t) {
                  this.dispatch({
                    type: "SET_OPTION",
                    optionName: e,
                    rawOptionValue: t,
                  });
                }),
                (e.prototype.getOption = function (e) {
                  return this.currentDataManager.currentCalendarOptionsInput[e];
                }),
                (e.prototype.getAvailableLocaleCodes = function () {
                  return Object.keys(this.getCurrentData().availableRawLocales);
                }),
                (e.prototype.on = function (e, t) {
                  var n = this.currentDataManager;
                  n.currentCalendarOptionsRefiners[e]
                    ? n.emitter.on(e, t)
                    : console.warn("Unknown listener name '" + e + "'");
                }),
                (e.prototype.off = function (e, t) {
                  this.currentDataManager.emitter.off(e, t);
                }),
                (e.prototype.trigger = function (e) {
                  for (var t, r = [], o = 1; o < arguments.length; o++)
                    r[o - 1] = arguments[o];
                  (t = this.currentDataManager.emitter).trigger.apply(
                    t,
                    n([e], r)
                  );
                }),
                (e.prototype.changeView = function (e, t) {
                  var n = this;
                  this.batchRendering(function () {
                    if ((n.unselect(), t))
                      if (t.start && t.end)
                        n.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: e }),
                          n.dispatch({
                            type: "SET_OPTION",
                            optionName: "visibleRange",
                            rawOptionValue: t,
                          });
                      else {
                        var r = n.getCurrentData().dateEnv;
                        n.dispatch({
                          type: "CHANGE_VIEW_TYPE",
                          viewType: e,
                          dateMarker: r.createMarker(t),
                        });
                      }
                    else n.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: e });
                  });
                }),
                (e.prototype.zoomTo = function (e, t) {
                  var n,
                    r = this.getCurrentData();
                  (t = t || "day"),
                    (n = r.viewSpecs[t] || this.getUnitViewSpec(t)),
                    this.unselect(),
                    n
                      ? this.dispatch({
                          type: "CHANGE_VIEW_TYPE",
                          viewType: n.type,
                          dateMarker: e,
                        })
                      : this.dispatch({ type: "CHANGE_DATE", dateMarker: e });
                }),
                (e.prototype.getUnitViewSpec = function (e) {
                  var t,
                    n,
                    r = this.getCurrentData(),
                    o = r.viewSpecs,
                    i = r.toolbarConfig,
                    a = [].concat(i.viewsWithButtons);
                  for (var s in o) a.push(s);
                  for (t = 0; t < a.length; t += 1)
                    if ((n = o[a[t]]) && n.singleUnit === e) return n;
                  return null;
                }),
                (e.prototype.prev = function () {
                  this.unselect(), this.dispatch({ type: "PREV" });
                }),
                (e.prototype.next = function () {
                  this.unselect(), this.dispatch({ type: "NEXT" });
                }),
                (e.prototype.prevYear = function () {
                  var e = this.getCurrentData();
                  this.unselect(),
                    this.dispatch({
                      type: "CHANGE_DATE",
                      dateMarker: e.dateEnv.addYears(e.currentDate, -1),
                    });
                }),
                (e.prototype.nextYear = function () {
                  var e = this.getCurrentData();
                  this.unselect(),
                    this.dispatch({
                      type: "CHANGE_DATE",
                      dateMarker: e.dateEnv.addYears(e.currentDate, 1),
                    });
                }),
                (e.prototype.today = function () {
                  var e = this.getCurrentData();
                  this.unselect(),
                    this.dispatch({
                      type: "CHANGE_DATE",
                      dateMarker: Zn(e.calendarOptions.now, e.dateEnv),
                    });
                }),
                (e.prototype.gotoDate = function (e) {
                  var t = this.getCurrentData();
                  this.unselect(),
                    this.dispatch({
                      type: "CHANGE_DATE",
                      dateMarker: t.dateEnv.createMarker(e),
                    });
                }),
                (e.prototype.incrementDate = function (e) {
                  var t = this.getCurrentData(),
                    n = Ge(e);
                  n &&
                    (this.unselect(),
                    this.dispatch({
                      type: "CHANGE_DATE",
                      dateMarker: t.dateEnv.add(t.currentDate, n),
                    }));
                }),
                (e.prototype.getDate = function () {
                  var e = this.getCurrentData();
                  return e.dateEnv.toDate(e.currentDate);
                }),
                (e.prototype.formatDate = function (e, t) {
                  var n = this.getCurrentData().dateEnv;
                  return n.format(n.createMarker(e), kt(t));
                }),
                (e.prototype.formatRange = function (e, t, n) {
                  var r = this.getCurrentData().dateEnv;
                  return r.formatRange(
                    r.createMarker(e),
                    r.createMarker(t),
                    kt(n),
                    n
                  );
                }),
                (e.prototype.formatIso = function (e, t) {
                  var n = this.getCurrentData().dateEnv;
                  return n.formatIso(n.createMarker(e), { omitTime: t });
                }),
                (e.prototype.select = function (e, t) {
                  var n;
                  n =
                    null == t
                      ? null != e.start
                        ? e
                        : { start: e, end: null }
                      : { start: e, end: t };
                  var r = this.getCurrentData(),
                    o = xn(n, r.dateEnv, Ge({ days: 1 }));
                  o &&
                    (this.dispatch({ type: "SELECT_DATES", selection: o }),
                    On(o, null, r));
                }),
                (e.prototype.unselect = function (e) {
                  var t = this.getCurrentData();
                  t.dateSelection &&
                    (this.dispatch({ type: "UNSELECT_DATES" }), An(e, t));
                }),
                (e.prototype.addEvent = function (e, t) {
                  if (e instanceof tl) {
                    var n = e._def,
                      r = e._instance;
                    return (
                      this.getCurrentData().eventStore.defs[n.defId] ||
                        (this.dispatch({
                          type: "ADD_EVENTS",
                          eventStore: Ht({ def: n, instance: r }),
                        }),
                        this.triggerEventAdd(e)),
                      e
                    );
                  }
                  var o,
                    i = this.getCurrentData();
                  if (t instanceof Ss) o = t.internalEventSource;
                  else if ("boolean" == typeof t)
                    t && (o = Ae(i.eventSources)[0]);
                  else if (null != t) {
                    var a = this.getEventSourceById(t);
                    if (!a)
                      return (
                        console.warn(
                          'Could not find an event source with ID "' + t + '"'
                        ),
                        null
                      );
                    o = a.internalEventSource;
                  }
                  var s = Yt(e, o, i, !1);
                  if (s) {
                    var l = new tl(
                      i,
                      s.def,
                      s.def.recurringDef ? null : s.instance
                    );
                    return (
                      this.dispatch({ type: "ADD_EVENTS", eventStore: Ht(s) }),
                      this.triggerEventAdd(l),
                      l
                    );
                  }
                  return null;
                }),
                (e.prototype.triggerEventAdd = function (e) {
                  var t = this;
                  this.getCurrentData().emitter.trigger("eventAdd", {
                    event: e,
                    relatedEvents: [],
                    revert: function () {
                      t.dispatch({ type: "REMOVE_EVENTS", eventStore: qn(e) });
                    },
                  });
                }),
                (e.prototype.getEventById = function (e) {
                  var t = this.getCurrentData(),
                    n = t.eventStore,
                    r = n.defs,
                    o = n.instances;
                  e = String(e);
                  for (var i in r) {
                    var a = r[i];
                    if (a.publicId === e) {
                      if (a.recurringDef) return new tl(t, a, null);
                      for (var s in o) {
                        var l = o[s];
                        if (l.defId === a.defId) return new tl(t, a, l);
                      }
                    }
                  }
                  return null;
                }),
                (e.prototype.getEvents = function () {
                  var e = this.getCurrentData();
                  return Xn(e.eventStore, e);
                }),
                (e.prototype.removeAllEvents = function () {
                  this.dispatch({ type: "REMOVE_ALL_EVENTS" });
                }),
                (e.prototype.getEventSources = function () {
                  var e = this.getCurrentData(),
                    t = e.eventSources,
                    n = [];
                  for (var r in t) n.push(new Ss(e, t[r]));
                  return n;
                }),
                (e.prototype.getEventSourceById = function (e) {
                  var t = this.getCurrentData(),
                    n = t.eventSources;
                  e = String(e);
                  for (var r in n)
                    if (n[r].publicId === e) return new Ss(t, n[r]);
                  return null;
                }),
                (e.prototype.addEventSource = function (e) {
                  var t = this.getCurrentData();
                  if (e instanceof Ss)
                    return (
                      t.eventSources[e.internalEventSource.sourceId] ||
                        this.dispatch({
                          type: "ADD_EVENT_SOURCES",
                          sources: [e.internalEventSource],
                        }),
                      e
                    );
                  var n = Wn(e, t);
                  return n
                    ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }),
                      new Ss(t, n))
                    : null;
                }),
                (e.prototype.removeAllEventSources = function () {
                  this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
                }),
                (e.prototype.refetchEvents = function () {
                  this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
                }),
                (e.prototype.scrollToTime = function (e) {
                  var t = Ge(e);
                  t && this.trigger("_scrollRequest", { time: t });
                }),
                e
              );
            })(),
            tl = (function () {
              function e(e, t, n) {
                (this._context = e),
                  (this._def = t),
                  (this._instance = n || null);
              }
              return (
                (e.prototype.setProp = function (e, t) {
                  var n, r;
                  if (e in Xs)
                    console.warn(
                      "Could not set date-related prop 'name'. Use one of the date-related methods instead."
                    );
                  else if ("id" === e)
                    (t = qs[e](t)),
                      this.mutate({ standardProps: { publicId: t } });
                  else if (e in qs)
                    (t = qs[e](t)),
                      this.mutate({ standardProps: ((n = {}), (n[e] = t), n) });
                  else if (e in Ys) {
                    var o = Ys[e](t);
                    "color" === e
                      ? (o = { backgroundColor: t, borderColor: t })
                      : "editable" === e
                      ? (o = { startEditable: t, durationEditable: t })
                      : ((r = {}), (r[e] = t), (o = r)),
                      this.mutate({ standardProps: { ui: o } });
                  } else
                    console.warn(
                      "Could not set prop '" +
                        e +
                        "'. Use setExtendedProp instead."
                    );
                }),
                (e.prototype.setExtendedProp = function (e, t) {
                  var n;
                  this.mutate({ extendedProps: ((n = {}), (n[e] = t), n) });
                }),
                (e.prototype.setStart = function (e, t) {
                  void 0 === t && (t = {});
                  var n = this._context.dateEnv,
                    r = n.createMarker(e);
                  if (r && this._instance) {
                    var o = this._instance.range,
                      i = tn(o.start, r, n, t.granularity);
                    t.maintainDuration
                      ? this.mutate({ datesDelta: i })
                      : this.mutate({ startDelta: i });
                  }
                }),
                (e.prototype.setEnd = function (e, t) {
                  void 0 === t && (t = {});
                  var n,
                    r = this._context.dateEnv;
                  if ((null == e || (n = r.createMarker(e))) && this._instance)
                    if (n) {
                      var o = tn(this._instance.range.end, n, r, t.granularity);
                      this.mutate({ endDelta: o });
                    } else this.mutate({ standardProps: { hasEnd: !1 } });
                }),
                (e.prototype.setDates = function (e, t, n) {
                  void 0 === n && (n = {});
                  var r,
                    o = this._context.dateEnv,
                    i = { allDay: n.allDay },
                    a = o.createMarker(e);
                  if (
                    a &&
                    (null == t || (r = o.createMarker(t))) &&
                    this._instance
                  ) {
                    var s = this._instance.range;
                    !0 === n.allDay && (s = Kt(s));
                    var l = tn(s.start, a, o, n.granularity);
                    if (r) {
                      var u = tn(s.end, r, o, n.granularity);
                      qe(l, u)
                        ? this.mutate({ datesDelta: l, standardProps: i })
                        : this.mutate({
                            startDelta: l,
                            endDelta: u,
                            standardProps: i,
                          });
                    } else
                      (i.hasEnd = !1),
                        this.mutate({ datesDelta: l, standardProps: i });
                  }
                }),
                (e.prototype.moveStart = function (e) {
                  var t = Ge(e);
                  t && this.mutate({ startDelta: t });
                }),
                (e.prototype.moveEnd = function (e) {
                  var t = Ge(e);
                  t && this.mutate({ endDelta: t });
                }),
                (e.prototype.moveDates = function (e) {
                  var t = Ge(e);
                  t && this.mutate({ datesDelta: t });
                }),
                (e.prototype.setAllDay = function (e, t) {
                  void 0 === t && (t = {});
                  var n = { allDay: e },
                    r = t.maintainDuration;
                  null == r && (r = this._context.options.allDayMaintainDuration),
                    this._def.allDay !== e && (n.hasEnd = r),
                    this.mutate({ standardProps: n });
                }),
                (e.prototype.formatRange = function (e) {
                  var t = this._context.dateEnv,
                    n = this._instance,
                    r = kt(e);
                  return this._def.hasEnd
                    ? t.formatRange(n.range.start, n.range.end, r, {
                        forcedStartTzo: n.forcedStartTzo,
                        forcedEndTzo: n.forcedEndTzo,
                      })
                    : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo });
                }),
                (e.prototype.mutate = function (t) {
                  var n = this._instance;
                  if (n) {
                    var r = this._def,
                      o = this._context,
                      i = o.getCurrentData().eventStore,
                      a = Ot(i, n.instanceId);
                    a = jn(
                      a,
                      {
                        "": {
                          display: "",
                          startEditable: !0,
                          durationEditable: !0,
                          constraints: [],
                          overlap: null,
                          allows: [],
                          backgroundColor: "",
                          borderColor: "",
                          textColor: "",
                          classNames: [],
                        },
                      },
                      t,
                      o
                    );
                    var s = new e(o, r, n);
                    (this._def = a.defs[r.defId]),
                      (this._instance = a.instances[n.instanceId]),
                      o.dispatch({ type: "MERGE_EVENTS", eventStore: a }),
                      o.emitter.trigger("eventChange", {
                        oldEvent: s,
                        event: this,
                        relatedEvents: Xn(a, o, n),
                        revert: function () {
                          o.dispatch({ type: "RESET_EVENTS", eventStore: i });
                        },
                      });
                  }
                }),
                (e.prototype.remove = function () {
                  var e = this._context,
                    t = qn(this);
                  e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
                    e.emitter.trigger("eventRemove", {
                      event: this,
                      relatedEvents: [],
                      revert: function () {
                        e.dispatch({ type: "MERGE_EVENTS", eventStore: t });
                      },
                    });
                }),
                Object.defineProperty(e.prototype, "source", {
                  get: function () {
                    var e = this._def.sourceId;
                    return e
                      ? new Ss(
                          this._context,
                          this._context.getCurrentData().eventSources[e]
                        )
                      : null;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "start", {
                  get: function () {
                    return this._instance
                      ? this._context.dateEnv.toDate(this._instance.range.start)
                      : null;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "end", {
                  get: function () {
                    return this._instance && this._def.hasEnd
                      ? this._context.dateEnv.toDate(this._instance.range.end)
                      : null;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "startStr", {
                  get: function () {
                    var e = this._instance;
                    return e
                      ? this._context.dateEnv.formatIso(e.range.start, {
                          omitTime: this._def.allDay,
                          forcedTzo: e.forcedStartTzo,
                        })
                      : "";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "endStr", {
                  get: function () {
                    var e = this._instance;
                    return e && this._def.hasEnd
                      ? this._context.dateEnv.formatIso(e.range.end, {
                          omitTime: this._def.allDay,
                          forcedTzo: e.forcedEndTzo,
                        })
                      : "";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "id", {
                  get: function () {
                    return this._def.publicId;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "groupId", {
                  get: function () {
                    return this._def.groupId;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "allDay", {
                  get: function () {
                    return this._def.allDay;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "title", {
                  get: function () {
                    return this._def.title;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "url", {
                  get: function () {
                    return this._def.url;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "display", {
                  get: function () {
                    return this._def.ui.display || "auto";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "startEditable", {
                  get: function () {
                    return this._def.ui.startEditable;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "durationEditable", {
                  get: function () {
                    return this._def.ui.durationEditable;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "constraint", {
                  get: function () {
                    return this._def.ui.constraints[0] || null;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "overlap", {
                  get: function () {
                    return this._def.ui.overlap;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "allow", {
                  get: function () {
                    return this._def.ui.allows[0] || null;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "backgroundColor", {
                  get: function () {
                    return this._def.ui.backgroundColor;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "borderColor", {
                  get: function () {
                    return this._def.ui.borderColor;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "textColor", {
                  get: function () {
                    return this._def.ui.textColor;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "classNames", {
                  get: function () {
                    return this._def.ui.classNames;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e.prototype, "extendedProps", {
                  get: function () {
                    return this._def.extendedProps;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.toPlainObject = function (e) {
                  void 0 === e && (e = {});
                  var t = this._def,
                    n = t.ui,
                    r = this,
                    o = r.startStr,
                    i = r.endStr,
                    a = {};
                  return (
                    t.title && (a.title = t.title),
                    o && (a.start = o),
                    i && (a.end = i),
                    t.publicId && (a.id = t.publicId),
                    t.groupId && (a.groupId = t.groupId),
                    t.url && (a.url = t.url),
                    n.display && "auto" !== n.display && (a.display = n.display),
                    e.collapseColor &&
                    n.backgroundColor &&
                    n.backgroundColor === n.borderColor
                      ? (a.color = n.backgroundColor)
                      : (n.backgroundColor &&
                          (a.backgroundColor = n.backgroundColor),
                        n.borderColor && (a.borderColor = n.borderColor)),
                    n.textColor && (a.textColor = n.textColor),
                    n.classNames.length && (a.classNames = n.classNames),
                    Object.keys(t.extendedProps).length &&
                      (e.collapseExtendedProps
                        ? vs(a, t.extendedProps)
                        : (a.extendedProps = t.extendedProps)),
                    a
                  );
                }),
                (e.prototype.toJSON = function () {
                  return this.toPlainObject();
                }),
                e
              );
            })(),
            nl = {},
            rl = (function () {
              function e() {}
              return (
                (e.prototype.getMarkerYear = function (e) {
                  return e.getUTCFullYear();
                }),
                (e.prototype.getMarkerMonth = function (e) {
                  return e.getUTCMonth();
                }),
                (e.prototype.getMarkerDay = function (e) {
                  return e.getUTCDate();
                }),
                (e.prototype.arrayToMarker = function (e) {
                  return xe(e);
                }),
                (e.prototype.markerToArray = function (e) {
                  return Re(e);
                }),
                e
              );
            })();
          !(function (e, t) {
            nl[e] = t;
          })("gregory", rl);
          var ol,
            il,
            al =
              /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/,
            sl = (function () {
              function e(e) {
                var t = (this.timeZone = e.timeZone),
                  n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl &&
                  n &&
                  (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
                  (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
                  (this.calendarSystem = $n(e.calendarSystem)),
                  (this.locale = e.locale),
                  (this.weekDow = e.locale.week.dow),
                  (this.weekDoy = e.locale.week.doy),
                  "ISO" === e.weekNumberCalculation &&
                    ((this.weekDow = 1), (this.weekDoy = 4)),
                  "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
                  "function" == typeof e.weekNumberCalculation &&
                    (this.weekNumberFunc = e.weekNumberCalculation),
                  (this.weekText =
                    null != e.weekText ? e.weekText : e.locale.options.weekText),
                  (this.cmdFormatter = e.cmdFormatter),
                  (this.defaultSeparator = e.defaultSeparator);
              }
              return (
                (e.prototype.createMarker = function (e) {
                  var t = this.createMarkerMeta(e);
                  return null === t ? null : t.marker;
                }),
                (e.prototype.createNowMarker = function () {
                  return this.canComputeOffset
                    ? this.timestampToMarker(new Date().valueOf())
                    : xe(De(new Date()));
                }),
                (e.prototype.createMarkerMeta = function (e) {
                  if ("string" == typeof e) return this.parse(e);
                  var t = null;
                  return (
                    "number" == typeof e
                      ? (t = this.timestampToMarker(e))
                      : e instanceof Date
                      ? ((e = e.valueOf()),
                        isNaN(e) || (t = this.timestampToMarker(e)))
                      : Array.isArray(e) && (t = xe(e)),
                    null !== t && ke(t)
                      ? { marker: t, isTimeUnspecified: !1, forcedTzo: null }
                      : null
                  );
                }),
                (e.prototype.parse = function (e) {
                  var t = Jn(e);
                  if (null === t) return null;
                  var n = t.marker,
                    r = null;
                  return (
                    null !== t.timeZoneOffset &&
                      (this.canComputeOffset
                        ? (n = this.timestampToMarker(
                            n.valueOf() - 60 * t.timeZoneOffset * 1e3
                          ))
                        : (r = t.timeZoneOffset)),
                    {
                      marker: n,
                      isTimeUnspecified: t.isTimeUnspecified,
                      forcedTzo: r,
                    }
                  );
                }),
                (e.prototype.getYear = function (e) {
                  return this.calendarSystem.getMarkerYear(e);
                }),
                (e.prototype.getMonth = function (e) {
                  return this.calendarSystem.getMarkerMonth(e);
                }),
                (e.prototype.add = function (e, t) {
                  var n = this.calendarSystem.markerToArray(e);
                  return (
                    (n[0] += t.years),
                    (n[1] += t.months),
                    (n[2] += t.days),
                    (n[6] += t.milliseconds),
                    this.calendarSystem.arrayToMarker(n)
                  );
                }),
                (e.prototype.subtract = function (e, t) {
                  var n = this.calendarSystem.markerToArray(e);
                  return (
                    (n[0] -= t.years),
                    (n[1] -= t.months),
                    (n[2] -= t.days),
                    (n[6] -= t.milliseconds),
                    this.calendarSystem.arrayToMarker(n)
                  );
                }),
                (e.prototype.addYears = function (e, t) {
                  var n = this.calendarSystem.markerToArray(e);
                  return (n[0] += t), this.calendarSystem.arrayToMarker(n);
                }),
                (e.prototype.addMonths = function (e, t) {
                  var n = this.calendarSystem.markerToArray(e);
                  return (n[1] += t), this.calendarSystem.arrayToMarker(n);
                }),
                (e.prototype.diffWholeYears = function (e, t) {
                  var n = this.calendarSystem;
                  return Me(e) === Me(t) &&
                    n.getMarkerDay(e) === n.getMarkerDay(t) &&
                    n.getMarkerMonth(e) === n.getMarkerMonth(t)
                    ? n.getMarkerYear(t) - n.getMarkerYear(e)
                    : null;
                }),
                (e.prototype.diffWholeMonths = function (e, t) {
                  var n = this.calendarSystem;
                  return Me(e) === Me(t) &&
                    n.getMarkerDay(e) === n.getMarkerDay(t)
                    ? n.getMarkerMonth(t) -
                        n.getMarkerMonth(e) +
                        12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
                    : null;
                }),
                (e.prototype.greatestWholeUnit = function (e, t) {
                  var n = this.diffWholeYears(e, t);
                  return null !== n
                    ? { unit: "year", value: n }
                    : null !== (n = this.diffWholeMonths(e, t))
                    ? { unit: "month", value: n }
                    : null !== (n = ge(e, t))
                    ? { unit: "week", value: n }
                    : null !== (n = ve(e, t))
                    ? { unit: "day", value: n }
                    : ((n = de(e, t)),
                      oe(n)
                        ? { unit: "hour", value: n }
                        : ((n = fe(e, t)),
                          oe(n)
                            ? { unit: "minute", value: n }
                            : ((n = pe(e, t)),
                              oe(n)
                                ? { unit: "second", value: n }
                                : {
                                    unit: "millisecond",
                                    value: t.valueOf() - e.valueOf(),
                                  })));
                }),
                (e.prototype.countDurationsBetween = function (e, t, n) {
                  var r;
                  return n.years && null !== (r = this.diffWholeYears(e, t))
                    ? r / Qe(n)
                    : n.months && null !== (r = this.diffWholeMonths(e, t))
                    ? r / et(n)
                    : n.days && null !== (r = ve(e, t))
                    ? r / tt(n)
                    : (t.valueOf() - e.valueOf()) / ot(n);
                }),
                (e.prototype.startOf = function (e, t) {
                  return "year" === t
                    ? this.startOfYear(e)
                    : "month" === t
                    ? this.startOfMonth(e)
                    : "week" === t
                    ? this.startOfWeek(e)
                    : "day" === t
                    ? me(e)
                    : "hour" === t
                    ? ye(e)
                    : "minute" === t
                    ? be(e)
                    : "second" === t
                    ? Ce(e)
                    : null;
                }),
                (e.prototype.startOfYear = function (e) {
                  return this.calendarSystem.arrayToMarker([
                    this.calendarSystem.getMarkerYear(e),
                  ]);
                }),
                (e.prototype.startOfMonth = function (e) {
                  return this.calendarSystem.arrayToMarker([
                    this.calendarSystem.getMarkerYear(e),
                    this.calendarSystem.getMarkerMonth(e),
                  ]);
                }),
                (e.prototype.startOfWeek = function (e) {
                  return this.calendarSystem.arrayToMarker([
                    this.calendarSystem.getMarkerYear(e),
                    this.calendarSystem.getMarkerMonth(e),
                    e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7),
                  ]);
                }),
                (e.prototype.computeWeekNumber = function (e) {
                  return this.weekNumberFunc
                    ? this.weekNumberFunc(this.toDate(e))
                    : we(e, this.weekDow, this.weekDoy);
                }),
                (e.prototype.format = function (e, t, n) {
                  return (
                    void 0 === n && (n = {}),
                    t.format(
                      {
                        marker: e,
                        timeZoneOffset:
                          null != n.forcedTzo
                            ? n.forcedTzo
                            : this.offsetForMarker(e),
                      },
                      this
                    )
                  );
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                  return (
                    void 0 === r && (r = {}),
                    r.isEndExclusive && (t = le(t, -1)),
                    n.formatRange(
                      {
                        marker: e,
                        timeZoneOffset:
                          null != r.forcedStartTzo
                            ? r.forcedStartTzo
                            : this.offsetForMarker(e),
                      },
                      {
                        marker: t,
                        timeZoneOffset:
                          null != r.forcedEndTzo
                            ? r.forcedEndTzo
                            : this.offsetForMarker(t),
                      },
                      this,
                      r.defaultSeparator
                    )
                  );
                }),
                (e.prototype.formatIso = function (e, t) {
                  void 0 === t && (t = {});
                  var n = null;
                  return (
                    t.omitTimeZoneOffset ||
                      (n =
                        null != t.forcedTzo
                          ? t.forcedTzo
                          : this.offsetForMarker(e)),
                    st(e, n, t.omitTime)
                  );
                }),
                (e.prototype.timestampToMarker = function (e) {
                  return "local" === this.timeZone
                    ? xe(De(new Date(e)))
                    : "UTC" !== this.timeZone && this.namedTimeZoneImpl
                    ? xe(this.namedTimeZoneImpl.timestampToArray(e))
                    : new Date(e);
                }),
                (e.prototype.offsetForMarker = function (e) {
                  return "local" === this.timeZone
                    ? -Te(Re(e)).getTimezoneOffset()
                    : "UTC" === this.timeZone
                    ? 0
                    : this.namedTimeZoneImpl
                    ? this.namedTimeZoneImpl.offsetForArray(Re(e))
                    : null;
                }),
                (e.prototype.toDate = function (e, t) {
                  return "local" === this.timeZone
                    ? Te(Re(e))
                    : "UTC" === this.timeZone
                    ? new Date(e.valueOf())
                    : this.namedTimeZoneImpl
                    ? new Date(
                        e.valueOf() -
                          1e3 * this.namedTimeZoneImpl.offsetForArray(Re(e)) * 60
                      )
                    : new Date(e.valueOf() - (t || 0));
                }),
                e
              );
            })(),
            ll = [],
            ul = {
              code: "en",
              week: { dow: 0, doy: 4 },
              direction: "ltr",
              buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list",
              },
              weekText: "W",
              allDayText: "all-day",
              moreLinkText: "more",
              noEventsText: "No events to display",
            },
            cl = {
              startTime: "09:00",
              endTime: "17:00",
              daysOfWeek: [1, 2, 3, 4, 5],
              display: "inverse-background",
              classNames: "fc-non-business",
              groupId: "_businessHours",
            },
            dl = Lt(),
            fl = (function () {
              function e() {
                (this.getKeysForEventDefs = pt(this._getKeysForEventDefs)),
                  (this.splitDateSelection = pt(this._splitDateSpan)),
                  (this.splitEventStore = pt(this._splitEventStore)),
                  (this.splitIndividualUi = pt(this._splitIndividualUi)),
                  (this.splitEventDrag = pt(this._splitInteraction)),
                  (this.splitEventResize = pt(this._splitInteraction)),
                  (this.eventUiBuilders = {});
              }
              return (
                (e.prototype.splitProps = function (e) {
                  var t = this,
                    n = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    o = this.splitDateSelection(e.dateSelection),
                    i = this.splitIndividualUi(e.eventUiBases, r),
                    a = this.splitEventStore(e.eventStore, r),
                    s = this.splitEventDrag(e.eventDrag),
                    l = this.splitEventResize(e.eventResize),
                    u = {};
                  this.eventUiBuilders = Ne(n, function (e, n) {
                    return t.eventUiBuilders[n] || pt(vr);
                  });
                  for (var c in n) {
                    var d = n[c],
                      f = a[c] || dl,
                      p = this.eventUiBuilders[c];
                    u[c] = {
                      businessHours: d.businessHours || e.businessHours,
                      dateSelection: o[c] || null,
                      eventStore: f,
                      eventUiBases: p(e.eventUiBases[""], d.ui, i[c]),
                      eventSelection: f.instances[e.eventSelection]
                        ? e.eventSelection
                        : "",
                      eventDrag: s[c] || null,
                      eventResize: l[c] || null,
                    };
                  }
                  return u;
                }),
                (e.prototype._splitDateSpan = function (e) {
                  var t = {};
                  if (e)
                    for (
                      var n = this.getKeysForDateSpan(e), r = 0, o = n;
                      r < o.length;
                      r++
                    ) {
                      var i = o[r];
                      t[i] = e;
                    }
                  return t;
                }),
                (e.prototype._getKeysForEventDefs = function (e) {
                  var t = this;
                  return Ne(e.defs, function (e) {
                    return t.getKeysForEventDef(e);
                  });
                }),
                (e.prototype._splitEventStore = function (e, t) {
                  var n = e.defs,
                    r = e.instances,
                    o = {};
                  for (var i in n)
                    for (var a = 0, s = t[i]; a < s.length; a++) {
                      var l = s[a];
                      o[l] || (o[l] = Lt()), (o[l].defs[i] = n[i]);
                    }
                  for (var u in r)
                    for (var c = r[u], d = 0, f = t[c.defId]; d < f.length; d++) {
                      var l = f[d];
                      o[l] && (o[l].instances[u] = c);
                    }
                  return o;
                }),
                (e.prototype._splitIndividualUi = function (e, t) {
                  var n = {};
                  for (var r in e)
                    if (r)
                      for (var o = 0, i = t[r]; o < i.length; o++) {
                        var a = i[o];
                        n[a] || (n[a] = {}), (n[a][r] = e[r]);
                      }
                  return n;
                }),
                (e.prototype._splitInteraction = function (e) {
                  var t = {};
                  if (e) {
                    var n = this._splitEventStore(
                        e.affectedEvents,
                        this._getKeysForEventDefs(e.affectedEvents)
                      ),
                      r = this._getKeysForEventDefs(e.mutatedEvents),
                      o = this._splitEventStore(e.mutatedEvents, r),
                      i = function (r) {
                        t[r] ||
                          (t[r] = {
                            affectedEvents: n[r] || dl,
                            mutatedEvents: o[r] || dl,
                            isEvent: e.isEvent,
                          });
                      };
                    for (var a in n) i(a);
                    for (var a in o) i(a);
                  }
                  return t;
                }),
                e
              );
            })(),
            pl = null,
            hl = (function () {
              function e() {
                (this.handlers = {}), (this.thisContext = null);
              }
              return (
                (e.prototype.setThisContext = function (e) {
                  this.thisContext = e;
                }),
                (e.prototype.setOptions = function (e) {
                  this.options = e;
                }),
                (e.prototype.on = function (e, t) {
                  Nr(this.handlers, e, t);
                }),
                (e.prototype.off = function (e, t) {
                  Hr(this.handlers, e, t);
                }),
                (e.prototype.trigger = function (e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  for (
                    var r = this.handlers[e] || [],
                      o = this.options && this.options[e],
                      i = [].concat(o || [], r),
                      a = 0,
                      s = i;
                    a < s.length;
                    a++
                  ) {
                    s[a].apply(this.thisContext, t);
                  }
                }),
                (e.prototype.hasHandlers = function (e) {
                  return (
                    (this.handlers[e] && this.handlers[e].length) ||
                    (this.options && this.options[e])
                  );
                }),
                e
              );
            })(),
            gl = (function () {
              function e(e, t, n, r) {
                this.els = t;
                var o = (this.originClientRect = e.getBoundingClientRect());
                n && this.buildElHorizontals(o.left),
                  r && this.buildElVerticals(o.top);
              }
              return (
                (e.prototype.buildElHorizontals = function (e) {
                  for (
                    var t = [], n = [], r = 0, o = this.els;
                    r < o.length;
                    r++
                  ) {
                    var i = o[r],
                      a = i.getBoundingClientRect();
                    t.push(a.left - e), n.push(a.right - e);
                  }
                  (this.lefts = t), (this.rights = n);
                }),
                (e.prototype.buildElVerticals = function (e) {
                  for (
                    var t = [], n = [], r = 0, o = this.els;
                    r < o.length;
                    r++
                  ) {
                    var i = o[r],
                      a = i.getBoundingClientRect();
                    t.push(a.top - e), n.push(a.bottom - e);
                  }
                  (this.tops = t), (this.bottoms = n);
                }),
                (e.prototype.leftToIndex = function (e) {
                  var t,
                    n = this,
                    r = n.lefts,
                    o = n.rights,
                    i = r.length;
                  for (t = 0; t < i; t += 1) if (e >= r[t] && e < o[t]) return t;
                }),
                (e.prototype.topToIndex = function (e) {
                  var t,
                    n = this,
                    r = n.tops,
                    o = n.bottoms,
                    i = r.length;
                  for (t = 0; t < i; t += 1) if (e >= r[t] && e < o[t]) return t;
                }),
                (e.prototype.getWidth = function (e) {
                  return this.rights[e] - this.lefts[e];
                }),
                (e.prototype.getHeight = function (e) {
                  return this.bottoms[e] - this.tops[e];
                }),
                e
              );
            })(),
            vl = (function () {
              function e() {}
              return (
                (e.prototype.getMaxScrollTop = function () {
                  return this.getScrollHeight() - this.getClientHeight();
                }),
                (e.prototype.getMaxScrollLeft = function () {
                  return this.getScrollWidth() - this.getClientWidth();
                }),
                (e.prototype.canScrollVertically = function () {
                  return this.getMaxScrollTop() > 0;
                }),
                (e.prototype.canScrollHorizontally = function () {
                  return this.getMaxScrollLeft() > 0;
                }),
                (e.prototype.canScrollUp = function () {
                  return this.getScrollTop() > 0;
                }),
                (e.prototype.canScrollDown = function () {
                  return this.getScrollTop() < this.getMaxScrollTop();
                }),
                (e.prototype.canScrollLeft = function () {
                  return this.getScrollLeft() > 0;
                }),
                (e.prototype.canScrollRight = function () {
                  return this.getScrollLeft() < this.getMaxScrollLeft();
                }),
                e
              );
            })(),
            ml = (function (e) {
              function n(t) {
                var n = e.call(this) || this;
                return (n.el = t), n;
              }
              return (
                t(n, e),
                (n.prototype.getScrollTop = function () {
                  return this.el.scrollTop;
                }),
                (n.prototype.getScrollLeft = function () {
                  return this.el.scrollLeft;
                }),
                (n.prototype.setScrollTop = function (e) {
                  this.el.scrollTop = e;
                }),
                (n.prototype.setScrollLeft = function (e) {
                  this.el.scrollLeft = e;
                }),
                (n.prototype.getScrollWidth = function () {
                  return this.el.scrollWidth;
                }),
                (n.prototype.getScrollHeight = function () {
                  return this.el.scrollHeight;
                }),
                (n.prototype.getClientHeight = function () {
                  return this.el.clientHeight;
                }),
                (n.prototype.getClientWidth = function () {
                  return this.el.clientWidth;
                }),
                n
              );
            })(vl),
            yl = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.getScrollTop = function () {
                  return window.pageYOffset;
                }),
                (n.prototype.getScrollLeft = function () {
                  return window.pageXOffset;
                }),
                (n.prototype.setScrollTop = function (e) {
                  window.scroll(window.pageXOffset, e);
                }),
                (n.prototype.setScrollLeft = function (e) {
                  window.scroll(e, window.pageYOffset);
                }),
                (n.prototype.getScrollWidth = function () {
                  return document.documentElement.scrollWidth;
                }),
                (n.prototype.getScrollHeight = function () {
                  return document.documentElement.scrollHeight;
                }),
                (n.prototype.getClientHeight = function () {
                  return document.documentElement.clientHeight;
                }),
                (n.prototype.getClientWidth = function () {
                  return document.documentElement.clientWidth;
                }),
                n
              );
            })(vl),
            bl = (function () {
              function e(e) {
                this.iconOverrideOption &&
                  this.setIconOverride(e[this.iconOverrideOption]);
              }
              return (
                (e.prototype.setIconOverride = function (e) {
                  var t, n;
                  if ("object" == typeof e && e) {
                    t = vs({}, this.iconClasses);
                    for (n in e) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t;
                  } else !1 === e && (this.iconClasses = {});
                }),
                (e.prototype.applyIconOverridePrefix = function (e) {
                  var t = this.iconOverridePrefix;
                  return t && 0 !== e.indexOf(t) && (e = t + e), e;
                }),
                (e.prototype.getClass = function (e) {
                  return this.classes[e] || "";
                }),
                (e.prototype.getIconClass = function (e, t) {
                  var n;
                  return (
                    (n =
                      t && this.rtlIconClasses
                        ? this.rtlIconClasses[e] || this.iconClasses[e]
                        : this.iconClasses[e]),
                    n ? this.baseIconClass + " " + n : ""
                  );
                }),
                (e.prototype.getCustomButtonIconClass = function (e) {
                  var t;
                  return this.iconOverrideCustomButtonOption &&
                    (t = e[this.iconOverrideCustomButtonOption])
                    ? this.baseIconClass + " " + this.applyIconOverridePrefix(t)
                    : "";
                }),
                e
              );
            })();
          if (
            ((bl.prototype.classes = {}),
            (bl.prototype.iconClasses = {}),
            (bl.prototype.baseIconClass = ""),
            (bl.prototype.iconOverridePrefix = ""),
            "undefined" == typeof FullCalendarVDom)
          )
            throw new Error(
              "Please import the top-level fullcalendar lib before attempting to import a plugin."
            );
          var Cl = FullCalendarVDom.Component,
            wl = FullCalendarVDom.createElement,
            Sl = FullCalendarVDom.render,
            El = FullCalendarVDom.createRef,
            Dl = FullCalendarVDom.Fragment,
            Tl = FullCalendarVDom.createContext,
            Rl = FullCalendarVDom.flushToDom,
            xl = FullCalendarVDom.unmountComponentAtNode,
            kl = (function () {
              function e(e, t, n) {
                var r = this;
                (this.execFunc = e),
                  (this.emitter = t),
                  (this.scrollTime = n),
                  (this.handleScrollRequest = function (e) {
                    (r.queuedRequest = vs({}, r.queuedRequest || {}, e)),
                      r.drain();
                  }),
                  t.on("_scrollRequest", this.handleScrollRequest),
                  this.fireInitialScroll();
              }
              return (
                (e.prototype.detach = function () {
                  this.emitter.off("_scrollRequest", this.handleScrollRequest);
                }),
                (e.prototype.update = function (e) {
                  e ? this.fireInitialScroll() : this.drain();
                }),
                (e.prototype.fireInitialScroll = function () {
                  this.handleScrollRequest({ time: this.scrollTime });
                }),
                (e.prototype.drain = function () {
                  this.queuedRequest &&
                    this.execFunc(this.queuedRequest) &&
                    (this.queuedRequest = null);
                }),
                e
              );
            })(),
            Ml = Tl({}),
            _l = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.shouldComponentUpdate = function (e, t) {
                  return (
                    this.debug &&
                      console.log(ze(e, this.props), ze(t, this.state)),
                    !je(this.props, e, this.propEquality) ||
                      !je(this.state, t, this.stateEquality)
                  );
                }),
                (n.addPropsEquality = Ar),
                (n.addStateEquality = Lr),
                (n.contextType = Ml),
                n
              );
            })(Cl);
          (_l.prototype.propEquality = {}), (_l.prototype.stateEquality = {});
          var Il = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return t(n, e), (n.contextType = Ml), n;
            })(_l),
            Pl = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.uid = G()), t;
              }
              return (
                t(n, e),
                (n.prototype.prepareHits = function () {}),
                (n.prototype.queryHit = function (e, t, n, r) {
                  return null;
                }),
                (n.prototype.isInteractionValid = function (e) {
                  var t = this.props.dateProfile,
                    n = e.mutatedEvents.instances;
                  if (t)
                    for (var r in n) if (!un(t.validRange, n[r].range)) return !1;
                  return Zr(e, this.context);
                }),
                (n.prototype.isDateSelectionValid = function (e) {
                  var t = this.props.dateProfile;
                  return (
                    !(t && !un(t.validRange, e.range)) && qr(e, this.context)
                  );
                }),
                (n.prototype.isValidSegDownEl = function (e) {
                  return (
                    !this.props.eventDrag &&
                    !this.props.eventResize &&
                    !H(e, ".fc-event-mirror")
                  );
                }),
                (n.prototype.isValidDateDownEl = function (e) {
                  return !(
                    H(e, ".fc-event:not(.fc-bg-event)") ||
                    H(e, ".fc-daygrid-more-link") ||
                    H(e, "a[data-navlink]") ||
                    H(e, ".fc-popover")
                  );
                }),
                n
              );
            })(Il),
            Nl = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return t(n, e), n;
            })(bl);
          (Nl.prototype.classes = {
            root: "fc-theme-standard",
            tableCellShaded: "fc-cell-shaded",
            buttonGroup: "fc-button-group",
            button: "fc-button fc-button-primary",
            buttonActive: "fc-button-active",
          }),
            (Nl.prototype.baseIconClass = "fc-icon"),
            (Nl.prototype.iconClasses = {
              close: "fc-icon-x",
              prev: "fc-icon-chevron-left",
              next: "fc-icon-chevron-right",
              prevYear: "fc-icon-chevrons-left",
              nextYear: "fc-icon-chevrons-right",
            }),
            (Nl.prototype.rtlIconClasses = {
              prev: "fc-icon-chevron-right",
              next: "fc-icon-chevron-left",
              prevYear: "fc-icon-chevrons-right",
              nextYear: "fc-icon-chevrons-left",
            }),
            (Nl.prototype.iconOverrideOption = "buttonIcons"),
            (Nl.prototype.iconOverrideCustomButtonOption = "icon"),
            (Nl.prototype.iconOverridePrefix = "fc-icon-");
          var Hl = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.rootElRef = El()),
                  (t.handleRootEl = function (e) {
                    zr(t.rootElRef, e), t.props.elRef && zr(t.props.elRef, e);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.hookProps;
                  return wl(
                    Ll,
                    {
                      hookProps: n,
                      didMount: t.didMount,
                      willUnmount: t.willUnmount,
                      elRef: this.handleRootEl,
                    },
                    function (r) {
                      return wl(
                        co,
                        {
                          hookProps: n,
                          content: t.content,
                          defaultContent: t.defaultContent,
                          backupElRef: e.rootElRef,
                        },
                        function (e, o) {
                          return t.children(r, po(t.classNames, n), e, o);
                        }
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            Ol = Tl(0),
            Al = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.innerElRef = El()), t;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  return this.props.children(
                    this.innerElRef,
                    this.renderInnerContent()
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  this.updateCustomContent();
                }),
                (n.prototype.componentDidUpdate = function () {
                  this.updateCustomContent();
                }),
                (n.prototype.componentWillUnmount = function () {
                  this.customContentInfo &&
                    this.customContentInfo.destroy &&
                    this.customContentInfo.destroy();
                }),
                (n.prototype.renderInnerContent = function () {
                  var e = this.context.pluginHooks.contentTypeHandlers,
                    t = this,
                    n = t.props,
                    r = t.customContentInfo,
                    o = n.content,
                    i = ho(o, n.hookProps),
                    a = null;
                  if (
                    (void 0 === i && (i = ho(n.defaultContent, n.hookProps)),
                    void 0 !== i)
                  ) {
                    if (r) r.contentVal = i[r.contentKey];
                    else if ("object" == typeof i)
                      for (var s in e)
                        if (void 0 !== i[s]) {
                          var l = e[s]();
                          r = this.customContentInfo = vs(
                            { contentKey: s, contentVal: i[s] },
                            l
                          );
                          break;
                        }
                    a = r ? [] : i;
                  }
                  return a;
                }),
                (n.prototype.updateCustomContent = function () {
                  this.customContentInfo &&
                    this.customContentInfo.render(
                      this.innerElRef.current || this.props.backupElRef.current,
                      this.customContentInfo.contentVal
                    );
                }),
                n
              );
            })(Il),
            Ll = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handleRootEl = function (e) {
                    (t.rootEl = e), t.props.elRef && zr(t.props.elRef, e);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  return this.props.children(this.handleRootEl);
                }),
                (n.prototype.componentDidMount = function () {
                  var e = this.props.didMount;
                  e && e(vs(vs({}, this.props.hookProps), { el: this.rootEl }));
                }),
                (n.prototype.componentWillUnmount = function () {
                  var e = this.props.willUnmount;
                  e && e(vs(vs({}, this.props.hookProps), { el: this.rootEl }));
                }),
                n
              );
            })(Il),
            zl = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.normalizeClassNames = fo()), t;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = n.options,
                    o = { view: n.viewApi },
                    i = this.normalizeClassNames(r.viewClassNames, o);
                  return wl(
                    Ll,
                    {
                      hookProps: o,
                      didMount: r.viewDidMount,
                      willUnmount: r.viewWillUnmount,
                      elRef: t.elRef,
                    },
                    function (e) {
                      return t.children(
                        e,
                        ["fc-" + t.viewSpec.type + "-view", "fc-view"].concat(i)
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            jl = {},
            Ul = (function () {
              function e(e) {
                (this.props = e),
                  (this.nowDate = Zn(e.nowInput, e.dateEnv)),
                  this.initHiddenDays();
              }
              return (
                (e.prototype.buildPrev = function (e, t, n) {
                  var r = this.props.dateEnv,
                    o = r.subtract(
                      r.startOf(t, e.currentRangeUnit),
                      e.dateIncrement
                    );
                  return this.build(o, -1, n);
                }),
                (e.prototype.buildNext = function (e, t, n) {
                  var r = this.props.dateEnv,
                    o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                  return this.build(o, 1, n);
                }),
                (e.prototype.build = function (e, t, n) {
                  void 0 === n && (n = !0);
                  var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u = this.props;
                  return (
                    (r = this.buildValidRange()),
                    (r = this.trimHiddenDays(r)),
                    n && (e = dn(e, r)),
                    (o = this.buildCurrentRangeInfo(e, t)),
                    (i = /^(year|month|week|day)$/.test(o.unit)),
                    (a = this.buildRenderRange(
                      this.trimHiddenDays(o.range),
                      o.unit,
                      i
                    )),
                    (a = this.trimHiddenDays(a)),
                    (s = a),
                    u.showNonCurrentDates || (s = an(s, o.range)),
                    (s = this.adjustActiveRange(s)),
                    (s = an(s, r)),
                    (l = ln(o.range, r)),
                    {
                      validRange: r,
                      currentRange: o.range,
                      currentRangeUnit: o.unit,
                      isRangeAllDay: i,
                      activeRange: s,
                      renderRange: a,
                      slotMinTime: u.slotMinTime,
                      slotMaxTime: u.slotMaxTime,
                      isValid: l,
                      dateIncrement: this.buildDateIncrement(o.duration),
                    }
                  );
                }),
                (e.prototype.buildValidRange = function () {
                  var e = this.props.validRangeInput,
                    t =
                      "function" == typeof e
                        ? e.call(this.props.calendarApi, this.nowDate)
                        : e;
                  return this.refineRange(t) || { start: null, end: null };
                }),
                (e.prototype.buildCurrentRangeInfo = function (e, t) {
                  var n,
                    r = this.props,
                    o = null,
                    i = null,
                    a = null;
                  return (
                    r.duration
                      ? ((o = r.duration),
                        (i = r.durationUnit),
                        (a = this.buildRangeFromDuration(e, t, o, i)))
                      : (n = this.props.dayCount)
                      ? ((i = "day"), (a = this.buildRangeFromDayCount(e, t, n)))
                      : (a = this.buildCustomVisibleRange(e))
                      ? (i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit)
                      : ((o = this.getFallbackDuration()),
                        (i = at(o).unit),
                        (a = this.buildRangeFromDuration(e, t, o, i))),
                    { duration: o, unit: i, range: a }
                  );
                }),
                (e.prototype.getFallbackDuration = function () {
                  return Ge({ day: 1 });
                }),
                (e.prototype.adjustActiveRange = function (e) {
                  var t = this.props,
                    n = t.dateEnv,
                    r = t.usesMinMaxTime,
                    o = t.slotMinTime,
                    i = t.slotMaxTime,
                    a = e.start,
                    s = e.end;
                  return (
                    r &&
                      (tt(o) < 0 && ((a = me(a)), (a = n.add(a, o))),
                      tt(i) > 1 &&
                        ((s = me(s)), (s = se(s, -1)), (s = n.add(s, i)))),
                    { start: a, end: s }
                  );
                }),
                (e.prototype.buildRangeFromDuration = function (e, t, n, r) {
                  function o() {
                    (i = u.startOf(e, c)),
                      (a = u.add(i, n)),
                      (s = { start: i, end: a });
                  }
                  var i,
                    a,
                    s,
                    l = this.props,
                    u = l.dateEnv,
                    c = l.dateAlignment;
                  if (!c) {
                    var d = this.props.dateIncrement;
                    c = d && ot(d) < ot(n) ? at(d).unit : r;
                  }
                  return (
                    tt(n) <= 1 &&
                      this.isHiddenDay(i) &&
                      ((i = this.skipHiddenDays(i, t)), (i = me(i))),
                    o(),
                    this.trimHiddenDays(s) ||
                      ((e = this.skipHiddenDays(e, t)), o()),
                    s
                  );
                }),
                (e.prototype.buildRangeFromDayCount = function (e, t, n) {
                  var r,
                    o = this.props,
                    i = o.dateEnv,
                    a = o.dateAlignment,
                    s = 0,
                    l = e;
                  a && (l = i.startOf(l, a)),
                    (l = me(l)),
                    (l = this.skipHiddenDays(l, t)),
                    (r = l);
                  do {
                    (r = se(r, 1)), this.isHiddenDay(r) || (s += 1);
                  } while (s < n);
                  return { start: l, end: r };
                }),
                (e.prototype.buildCustomVisibleRange = function (e) {
                  var t = this.props,
                    n = t.visibleRangeInput,
                    r =
                      "function" == typeof n
                        ? n.call(t.calendarApi, t.dateEnv.toDate(e))
                        : n,
                    o = this.refineRange(r);
                  return !o || (null != o.start && null != o.end) ? o : null;
                }),
                (e.prototype.buildRenderRange = function (e, t, n) {
                  return e;
                }),
                (e.prototype.buildDateIncrement = function (e) {
                  var t,
                    n = this.props.dateIncrement;
                  return (
                    n ||
                    ((t = this.props.dateAlignment)
                      ? Ge(1, t)
                      : e || Ge({ days: 1 }))
                  );
                }),
                (e.prototype.refineRange = function (e) {
                  if (e) {
                    var t = nn(e, this.props.dateEnv);
                    return t && (t = Qt(t)), t;
                  }
                  return null;
                }),
                (e.prototype.initHiddenDays = function () {
                  var e,
                    t = this.props.hiddenDays || [],
                    n = [],
                    r = 0;
                  for (
                    !1 === this.props.weekends && t.push(0, 6), e = 0;
                    e < 7;
                    e += 1
                  )
                    (n[e] = -1 !== t.indexOf(e)) || (r += 1);
                  if (!r) throw new Error("invalid hiddenDays");
                  this.isHiddenDayHash = n;
                }),
                (e.prototype.trimHiddenDays = function (e) {
                  var t = e.start,
                    n = e.end;
                  return (
                    t && (t = this.skipHiddenDays(t)),
                    n && (n = this.skipHiddenDays(n, -1, !0)),
                    null == t || null == n || t < n ? { start: t, end: n } : null
                  );
                }),
                (e.prototype.isHiddenDay = function (e) {
                  return (
                    e instanceof Date && (e = e.getUTCDay()),
                    this.isHiddenDayHash[e]
                  );
                }),
                (e.prototype.skipHiddenDays = function (e, t, n) {
                  for (
                    void 0 === t && (t = 1), void 0 === n && (n = !1);
                    this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];
  
                  )
                    e = se(e, t);
                  return e;
                }),
                e
              );
            })(),
            Bl = {
              ignoreRange: !0,
              parseMeta: function (e) {
                return Array.isArray(e.events) ? e.events : null;
              },
              fetch: function (e, t) {
                t({ rawEvents: e.eventSource.meta });
              },
            },
            Wl = ro({ eventSourceDefs: [Bl] }),
            Vl = {
              parseMeta: function (e) {
                return "function" == typeof e.events ? e.events : null;
              },
              fetch: function (e, t, n) {
                var r = e.context.dateEnv;
                Pr(
                  e.eventSource.meta.bind(null, Pn(e.range, r)),
                  function (e) {
                    t({ rawEvents: e });
                  },
                  n
                );
              },
            },
            Fl = ro({ eventSourceDefs: [Vl] }),
            Gl = {
              method: String,
              extraParams: Pt,
              startParam: String,
              endParam: String,
              timeZoneParam: String,
            },
            Yl = {
              parseMeta: function (e) {
                return !e.url || ("json" !== e.format && e.format)
                  ? null
                  : {
                      url: e.url,
                      format: "json",
                      method: (e.method || "GET").toUpperCase(),
                      extraParams: e.extraParams,
                      startParam: e.startParam,
                      endParam: e.endParam,
                      timeZoneParam: e.timeZoneParam,
                    };
              },
              fetch: function (e, t, n) {
                var r = e.eventSource.meta,
                  o = qo(r, e.range, e.context);
                Go(
                  r.method,
                  r.url,
                  o,
                  function (e, n) {
                    t({ rawEvents: e, xhr: n });
                  },
                  function (e, t) {
                    n({ message: e, xhr: t });
                  }
                );
              },
            },
            Zl = ro({ eventSourceRefiners: Gl, eventSourceDefs: [Yl] }),
            ql = {
              daysOfWeek: Pt,
              startTime: Ge,
              endTime: Ge,
              duration: Ge,
              startRecur: Pt,
              endRecur: Pt,
            },
            Xl = {
              parse: function (e, t) {
                if (
                  e.daysOfWeek ||
                  e.startTime ||
                  e.endTime ||
                  e.startRecur ||
                  e.endRecur
                ) {
                  var n = {
                      daysOfWeek: e.daysOfWeek || null,
                      startTime: e.startTime || null,
                      endTime: e.endTime || null,
                      startRecur: e.startRecur
                        ? t.createMarker(e.startRecur)
                        : null,
                      endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
                    },
                    r = void 0;
                  return (
                    e.duration && (r = e.duration),
                    !r &&
                      e.startTime &&
                      e.endTime &&
                      (r = Je(e.endTime, e.startTime)),
                    {
                      allDayGuess: Boolean(!e.startTime && !e.endTime),
                      duration: r,
                      typeData: n,
                    }
                  );
                }
                return null;
              },
              expand: function (e, t, n) {
                var r = an(t, { start: e.startRecur, end: e.endRecur });
                return r ? Xo(e.daysOfWeek, e.startTime, r, n) : [];
              },
            },
            $l = ro({ recurringTypes: [Xl], eventRefiners: ql }),
            Jl = ro({
              optionChangeHandlers: {
                events: function (e, t) {
                  $o([e], t);
                },
                eventSources: $o,
              },
            }),
            Kl = [
              Wl,
              Fl,
              Zl,
              $l,
              Jl,
              ro({
                isLoadingFuncs: [
                  function (e) {
                    return xo(e.eventSources);
                  },
                ],
                contentTypeHandlers: {
                  html: function () {
                    return { render: Qo };
                  },
                  domNodes: function () {
                    return { render: ei };
                  },
                },
                propSetHandlers: { dateProfile: Jo, eventStore: Ko },
              }),
            ],
            Ql = (function () {
              function e(e) {
                (this.drainedOption = e),
                  (this.isRunning = !1),
                  (this.isDirty = !1),
                  (this.pauseDepths = {}),
                  (this.timeoutId = 0);
              }
              return (
                (e.prototype.request = function (e) {
                  (this.isDirty = !0),
                    this.isPaused() ||
                      (this.clearTimeout(),
                      null == e
                        ? this.tryDrain()
                        : (this.timeoutId = setTimeout(
                            this.tryDrain.bind(this),
                            e
                          )));
                }),
                (e.prototype.pause = function (e) {
                  void 0 === e && (e = "");
                  var t = this.pauseDepths;
                  (t[e] = (t[e] || 0) + 1), this.clearTimeout();
                }),
                (e.prototype.resume = function (e, t) {
                  void 0 === e && (e = "");
                  var n = this.pauseDepths;
                  if (e in n) {
                    if (t) delete n[e];
                    else {
                      n[e] -= 1;
                      n[e] <= 0 && delete n[e];
                    }
                    this.tryDrain();
                  }
                }),
                (e.prototype.isPaused = function () {
                  return Object.keys(this.pauseDepths).length;
                }),
                (e.prototype.tryDrain = function () {
                  if (!this.isRunning && !this.isPaused()) {
                    for (this.isRunning = !0; this.isDirty; )
                      (this.isDirty = !1), this.drained();
                    this.isRunning = !1;
                  }
                }),
                (e.prototype.clear = function () {
                  this.clearTimeout(),
                    (this.isDirty = !1),
                    (this.pauseDepths = {});
                }),
                (e.prototype.clearTimeout = function () {
                  this.timeoutId &&
                    (clearTimeout(this.timeoutId), (this.timeoutId = 0));
                }),
                (e.prototype.drained = function () {
                  this.drainedOption && this.drainedOption();
                }),
                e
              );
            })(),
            eu = (function () {
              function e(e, t) {
                (this.runTaskOption = e),
                  (this.drainedOption = t),
                  (this.queue = []),
                  (this.delayedRunner = new Ql(this.drain.bind(this)));
              }
              return (
                (e.prototype.request = function (e, t) {
                  this.queue.push(e), this.delayedRunner.request(t);
                }),
                (e.prototype.pause = function (e) {
                  this.delayedRunner.pause(e);
                }),
                (e.prototype.resume = function (e, t) {
                  this.delayedRunner.resume(e, t);
                }),
                (e.prototype.drain = function () {
                  for (var e = this.queue; e.length; ) {
                    for (var t = [], n = void 0; (n = e.shift()); )
                      this.runTask(n), t.push(n);
                    this.drained(t);
                  }
                }),
                (e.prototype.runTask = function (e) {
                  this.runTaskOption && this.runTaskOption(e);
                }),
                (e.prototype.drained = function (e) {
                  this.drainedOption && this.drainedOption(e);
                }),
                e
              );
            })(),
            tu = (function () {
              function e(e) {
                var t = this;
                (this.computeOptionsData = pt(this._computeOptionsData)),
                  (this.computeCurrentViewData = pt(
                    this._computeCurrentViewData
                  )),
                  (this.organizeRawLocales = pt(Kn)),
                  (this.buildLocale = pt(Qn)),
                  (this.buildPluginHooks = io()),
                  (this.buildDateEnv = pt(ri)),
                  (this.buildTheme = pt(oi)),
                  (this.parseToolbars = pt(Wo)),
                  (this.buildViewSpecs = pt(yo)),
                  (this.buildDateProfileGenerator = ht(ii)),
                  (this.buildViewApi = pt(ai)),
                  (this.buildViewUiProps = ht(ui)),
                  (this.buildEventUiBySource = pt(si, Le)),
                  (this.buildEventUiBases = pt(li)),
                  (this.parseContextBusinessHours = ht(di)),
                  (this.buildTitle = pt(ti)),
                  (this.emitter = new hl()),
                  (this.actionRunner = new eu(
                    this._handleAction.bind(this),
                    this.updateData.bind(this)
                  )),
                  (this.currentCalendarOptionsInput = {}),
                  (this.currentCalendarOptionsRefined = {}),
                  (this.currentViewOptionsInput = {}),
                  (this.currentViewOptionsRefined = {}),
                  (this.currentCalendarOptionsRefiners = {}),
                  (this.getCurrentData = function () {
                    return t.data;
                  }),
                  (this.dispatch = function (e) {
                    t.actionRunner.request(e);
                  }),
                  (this.props = e),
                  this.actionRunner.pause();
                var n = {},
                  r = this.computeOptionsData(
                    e.optionOverrides,
                    n,
                    e.calendarApi
                  ),
                  o = r.calendarOptions.initialView || r.pluginHooks.initialView,
                  i = this.computeCurrentViewData(o, r, e.optionOverrides, n);
                (e.calendarApi.currentDataManager = this),
                  this.emitter.setThisContext(e.calendarApi),
                  this.emitter.setOptions(i.options);
                var a = Yn(r.calendarOptions, r.dateEnv),
                  s = i.dateProfileGenerator.build(a);
                cn(s.activeRange, a) || (a = s.currentRange.start);
                for (
                  var l = {
                      dateEnv: r.dateEnv,
                      options: r.calendarOptions,
                      pluginHooks: r.pluginHooks,
                      calendarApi: e.calendarApi,
                      dispatch: this.dispatch,
                      emitter: this.emitter,
                      getCurrentData: this.getCurrentData,
                    },
                    u = 0,
                    c = r.pluginHooks.contextInit;
                  u < c.length;
                  u++
                ) {
                  (0, c[u])(l);
                }
                for (
                  var d = Do(r.calendarOptions, s, l),
                    f = {
                      dynamicOptionOverrides: n,
                      currentViewType: o,
                      currentDate: a,
                      dateProfile: s,
                      businessHours: this.parseContextBusinessHours(l),
                      eventSources: d,
                      eventUiBases: {},
                      eventStore: Lt(),
                      renderableEventStore: Lt(),
                      dateSelection: null,
                      eventSelection: "",
                      eventDrag: null,
                      eventResize: null,
                      selectionConfig: this.buildViewUiProps(l).selectionConfig,
                    },
                    p = vs(vs({}, l), f),
                    h = 0,
                    g = r.pluginHooks.reducers;
                  h < g.length;
                  h++
                ) {
                  var v = g[h];
                  vs(f, v(null, null, p));
                }
                ci(f, l) && this.emitter.trigger("loading", !0),
                  (this.state = f),
                  this.updateData(),
                  this.actionRunner.resume();
              }
              return (
                (e.prototype.resetOptions = function (e, t) {
                  var n = this.props;
                  (n.optionOverrides = t ? vs(vs({}, n.optionOverrides), e) : e),
                    this.actionRunner.request({ type: "NOTHING" });
                }),
                (e.prototype._handleAction = function (e) {
                  var t = this,
                    n = t.props,
                    r = t.state,
                    o = t.emitter,
                    i = So(r.dynamicOptionOverrides, e),
                    a = this.computeOptionsData(
                      n.optionOverrides,
                      i,
                      n.calendarApi
                    ),
                    s = wo(r.currentViewType, e),
                    l = this.computeCurrentViewData(s, a, n.optionOverrides, i);
                  (n.calendarApi.currentDataManager = this),
                    o.setThisContext(n.calendarApi),
                    o.setOptions(l.options);
                  var u = {
                      dateEnv: a.dateEnv,
                      options: a.calendarOptions,
                      pluginHooks: a.pluginHooks,
                      calendarApi: n.calendarApi,
                      dispatch: this.dispatch,
                      emitter: o,
                      getCurrentData: this.getCurrentData,
                    },
                    c = r.currentDate,
                    d = r.dateProfile;
                  this.data &&
                    this.data.dateProfileGenerator !== l.dateProfileGenerator &&
                    (d = l.dateProfileGenerator.build(c)),
                    (c = Gn(c, e)),
                    (d = Eo(d, e, c, l.dateProfileGenerator)),
                    cn(d.currentRange, c) || (c = d.currentRange.start);
                  for (
                    var f = To(r.eventSources, e, d, u),
                      p = jr(r.eventStore, e, f, d, u),
                      h = xo(f),
                      g =
                        h && !l.options.progressiveEventRendering
                          ? r.renderableEventStore || p
                          : p,
                      v = this.buildViewUiProps(u),
                      m = v.eventUiSingleBase,
                      y = v.selectionConfig,
                      b = this.buildEventUiBySource(f),
                      C = this.buildEventUiBases(g.defs, m, b),
                      w = {
                        dynamicOptionOverrides: i,
                        currentViewType: s,
                        currentDate: c,
                        dateProfile: d,
                        eventSources: f,
                        eventStore: p,
                        renderableEventStore: g,
                        selectionConfig: y,
                        eventUiBases: C,
                        businessHours: this.parseContextBusinessHours(u),
                        dateSelection: zo(r.dateSelection, e),
                        eventSelection: jo(r.eventSelection, e),
                        eventDrag: Uo(r.eventDrag, e),
                        eventResize: Bo(r.eventResize, e),
                      },
                      S = vs(vs({}, u), w),
                      E = 0,
                      D = a.pluginHooks.reducers;
                    E < D.length;
                    E++
                  ) {
                    var T = D[E];
                    vs(w, T(r, e, S));
                  }
                  var R = ci(r, u),
                    x = ci(w, u);
                  !R && x
                    ? o.trigger("loading", !0)
                    : R && !x && o.trigger("loading", !1),
                    (this.state = w),
                    n.onAction && n.onAction(e);
                }),
                (e.prototype.updateData = function () {
                  var e = this,
                    t = e.props,
                    n = e.state,
                    r = this.data,
                    o = this.computeOptionsData(
                      t.optionOverrides,
                      n.dynamicOptionOverrides,
                      t.calendarApi
                    ),
                    i = this.computeCurrentViewData(
                      n.currentViewType,
                      o,
                      t.optionOverrides,
                      n.dynamicOptionOverrides
                    ),
                    a = (this.data = vs(
                      vs(
                        vs(
                          {
                            viewTitle: this.buildTitle(
                              n.dateProfile,
                              i.options,
                              o.dateEnv
                            ),
                            calendarApi: t.calendarApi,
                            dispatch: this.dispatch,
                            emitter: this.emitter,
                            getCurrentData: this.getCurrentData,
                          },
                          o
                        ),
                        i
                      ),
                      n
                    )),
                    s = o.pluginHooks.optionChangeHandlers,
                    l = r && r.calendarOptions,
                    u = o.calendarOptions;
                  if (l && l !== u) {
                    l.timeZone !== u.timeZone &&
                      ((n.eventSources = a.eventSources =
                        Ro(a.eventSources, n.dateProfile, a)),
                      (n.eventStore = a.eventStore =
                        Fr(a.eventStore, r.dateEnv, a.dateEnv)));
                    for (var c in s) l[c] !== u[c] && s[c](u[c], a);
                  }
                  t.onData && t.onData(a);
                }),
                (e.prototype._computeOptionsData = function (e, t, n) {
                  var r = this.processRawCalendarOptions(e, t),
                    o = r.refinedOptions,
                    i = r.pluginHooks,
                    a = r.localeDefaults,
                    s = r.availableLocaleData;
                  fi(r.extra);
                  var l = this.buildDateEnv(
                      o.timeZone,
                      o.locale,
                      o.weekNumberCalculation,
                      o.firstDay,
                      o.weekText,
                      i,
                      s,
                      o.defaultRangeSeparator
                    ),
                    u = this.buildViewSpecs(i.views, e, t, a),
                    c = this.buildTheme(o, i);
                  return {
                    calendarOptions: o,
                    pluginHooks: i,
                    dateEnv: l,
                    viewSpecs: u,
                    theme: c,
                    toolbarConfig: this.parseToolbars(o, e, c, u, n),
                    localeDefaults: a,
                    availableRawLocales: s.map,
                  };
                }),
                (e.prototype.processRawCalendarOptions = function (e, t) {
                  var n = _t([Bs, e, t]),
                    r = n.locales,
                    o = n.locale,
                    i = this.organizeRawLocales(r),
                    a = i.map,
                    s = this.buildLocale(o || i.defaultCode, a).options,
                    l = this.buildPluginHooks(e.plugins || [], Kl),
                    u = (this.currentCalendarOptionsRefiners = vs(
                      vs(vs(vs(vs({}, Us), Ws), Vs), l.listenerRefiners),
                      l.optionRefiners
                    )),
                    c = {},
                    d = _t([Bs, s, e, t]),
                    f = {},
                    p = this.currentCalendarOptionsInput,
                    h = this.currentCalendarOptionsRefined,
                    g = !1;
                  for (var v in d)
                    "plugins" !== v &&
                      (d[v] === p[v] || (Fs[v] && v in p && Fs[v](p[v], d[v]))
                        ? (f[v] = h[v])
                        : u[v]
                        ? ((f[v] = u[v](d[v])), (g = !0))
                        : (c[v] = p[v]));
                  return (
                    g &&
                      ((this.currentCalendarOptionsInput = d),
                      (this.currentCalendarOptionsRefined = f)),
                    {
                      rawOptions: this.currentCalendarOptionsInput,
                      refinedOptions: this.currentCalendarOptionsRefined,
                      pluginHooks: l,
                      availableLocaleData: i,
                      localeDefaults: s,
                      extra: c,
                    }
                  );
                }),
                (e.prototype._computeCurrentViewData = function (e, t, n, r) {
                  var o = t.viewSpecs[e];
                  if (!o)
                    throw new Error(
                      'viewType "' +
                        e +
                        "\" is not available. Please make sure you've loaded all neccessary plugins"
                    );
                  var i = this.processRawViewOptions(
                      o,
                      t.pluginHooks,
                      t.localeDefaults,
                      n,
                      r
                    ),
                    a = i.refinedOptions;
                  return (
                    fi(i.extra),
                    {
                      viewSpec: o,
                      options: a,
                      dateProfileGenerator: this.buildDateProfileGenerator({
                        dateProfileGeneratorClass:
                          o.optionDefaults.dateProfileGeneratorClass,
                        duration: o.duration,
                        durationUnit: o.durationUnit,
                        usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                        dateEnv: t.dateEnv,
                        calendarApi: this.props.calendarApi,
                        slotMinTime: a.slotMinTime,
                        slotMaxTime: a.slotMaxTime,
                        showNonCurrentDates: a.showNonCurrentDates,
                        dayCount: a.dayCount,
                        dateAlignment: a.dateAlignment,
                        dateIncrement: a.dateIncrement,
                        hiddenDays: a.hiddenDays,
                        weekends: a.weekends,
                        nowInput: a.now,
                        validRangeInput: a.validRange,
                        visibleRangeInput: a.visibleRange,
                        monthMode: a.monthMode,
                        fixedWeekCount: a.fixedWeekCount,
                      }),
                      viewApi: this.buildViewApi(
                        e,
                        this.getCurrentData,
                        t.dateEnv
                      ),
                    }
                  );
                }),
                (e.prototype.processRawViewOptions = function (e, t, n, r, o) {
                  var i = _t([Bs, e.optionDefaults, n, r, e.optionOverrides, o]),
                    a = vs(
                      vs(vs(vs(vs(vs({}, Us), Ws), Vs), Gs), t.listenerRefiners),
                      t.optionRefiners
                    ),
                    s = {},
                    l = this.currentViewOptionsInput,
                    u = this.currentViewOptionsRefined,
                    c = !1,
                    d = {};
                  for (var f in i)
                    i[f] === l[f]
                      ? (s[f] = u[f])
                      : (i[f] === this.currentCalendarOptionsInput[f]
                          ? f in this.currentCalendarOptionsRefined &&
                            (s[f] = this.currentCalendarOptionsRefined[f])
                          : a[f]
                          ? (s[f] = a[f](i[f]))
                          : (d[f] = i[f]),
                        (c = !0));
                  return (
                    c &&
                      ((this.currentViewOptionsInput = i),
                      (this.currentViewOptionsRefined = s)),
                    {
                      rawOptions: this.currentViewOptionsInput,
                      refinedOptions: this.currentViewOptionsRefined,
                      extra: d,
                    }
                  );
                }),
                e
              );
            })(),
            nu = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                return (
                  (n.handleData = function (e) {
                    n.dataManager ? n.setState(e) : (n.state = e);
                  }),
                  (n.dataManager = new tu({
                    optionOverrides: t.optionOverrides,
                    calendarApi: t.calendarApi,
                    onData: n.handleData,
                  })),
                  n
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  return this.props.children(this.state);
                }),
                (n.prototype.componentDidUpdate = function (e) {
                  var t = this.props.optionOverrides;
                  t !== e.optionOverrides && this.dataManager.resetOptions(t);
                }),
                n
              );
            })(Cl),
            ru = (function () {
              function e(e) {
                this.timeZoneName = e;
              }
              return e;
            })(),
            ou = (function () {
              function e(e) {
                this.component = e.component;
              }
              return (e.prototype.destroy = function () {}), e;
            })(),
            iu = {},
            au = (function () {
              function e(e, t) {
                this.emitter = new hl();
              }
              return (
                (e.prototype.destroy = function () {}),
                (e.prototype.setMirrorIsVisible = function (e) {}),
                (e.prototype.setMirrorNeedsRevert = function (e) {}),
                (e.prototype.setAutoScrollEnabled = function (e) {}),
                e
              );
            })(),
            su = {},
            lu = {
              startTime: Ge,
              duration: Ge,
              create: Boolean,
              sourceId: String,
            },
            uu = (function (e) {
              function r() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(r, e),
                (r.prototype.render = function () {
                  var e = this,
                    t = this.props.widgetGroups.map(function (t) {
                      return e.renderWidgetGroup(t);
                    });
                  return wl.apply(
                    void 0,
                    n(["div", { className: "fc-toolbar-chunk" }], t)
                  );
                }),
                (r.prototype.renderWidgetGroup = function (e) {
                  for (
                    var t = this.props,
                      r = this.context.theme,
                      o = [],
                      i = !0,
                      a = 0,
                      s = e;
                    a < s.length;
                    a++
                  ) {
                    var l = s[a],
                      u = l.buttonName,
                      c = l.buttonClick,
                      d = l.buttonText,
                      f = l.buttonIcon;
                    if ("title" === u)
                      (i = !1),
                        o.push(
                          wl("h2", { className: "fc-toolbar-title" }, t.title)
                        );
                    else {
                      var p = f ? { "aria-label": u } : {},
                        h = ["fc-" + u + "-button", r.getClass("button")];
                      u === t.activeButton && h.push(r.getClass("buttonActive"));
                      var g =
                        (!t.isTodayEnabled && "today" === u) ||
                        (!t.isPrevEnabled && "prev" === u) ||
                        (!t.isNextEnabled && "next" === u);
                      o.push(
                        wl(
                          "button",
                          vs(
                            {
                              disabled: g,
                              className: h.join(" "),
                              onClick: c,
                              type: "button",
                            },
                            p
                          ),
                          d || (f ? wl("span", { className: f }) : "")
                        )
                      );
                    }
                  }
                  if (o.length > 1) {
                    var v = (i && r.getClass("buttonGroup")) || "";
                    return wl.apply(void 0, n(["div", { className: v }], o));
                  }
                  return o[0];
                }),
                r
              );
            })(Il),
            cu = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.model,
                    o = n.extraClassName,
                    i = !1,
                    a = r.center;
                  return (
                    r.left ? ((i = !0), (e = r.left)) : (e = r.start),
                    r.right ? ((i = !0), (t = r.right)) : (t = r.end),
                    wl(
                      "div",
                      {
                        className: [
                          o || "",
                          "fc-toolbar",
                          i ? "fc-toolbar-ltr" : "",
                        ].join(" "),
                      },
                      this.renderSection("start", e || []),
                      this.renderSection("center", a || []),
                      this.renderSection("end", t || [])
                    )
                  );
                }),
                (n.prototype.renderSection = function (e, t) {
                  var n = this.props;
                  return wl(uu, {
                    key: e,
                    widgetGroups: t,
                    title: n.title,
                    activeButton: n.activeButton,
                    isTodayEnabled: n.isTodayEnabled,
                    isPrevEnabled: n.isPrevEnabled,
                    isNextEnabled: n.isNextEnabled,
                  });
                }),
                n
              );
            })(Il),
            du = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.state = { availableWidth: null }),
                  (t.handleEl = function (e) {
                    (t.el = e), zr(t.props.elRef, e), t.updateAvailableWidth();
                  }),
                  (t.handleResize = function () {
                    t.updateAvailableWidth();
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.state,
                    r = t.aspectRatio,
                    o = [
                      "fc-view-harness",
                      r || t.liquid || t.height
                        ? "fc-view-harness-active"
                        : "fc-view-harness-passive",
                    ],
                    i = "",
                    a = "";
                  return (
                    r
                      ? null !== n.availableWidth
                        ? (i = n.availableWidth / r)
                        : (a = (1 / r) * 100 + "%")
                      : (i = t.height || ""),
                    wl(
                      "div",
                      {
                        ref: this.handleEl,
                        onClick: t.onClick,
                        className: o.join(" "),
                        style: { height: i, paddingBottom: a },
                      },
                      t.children
                    )
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  this.context.addResizeHandler(this.handleResize);
                }),
                (n.prototype.componentWillUnmount = function () {
                  this.context.removeResizeHandler(this.handleResize);
                }),
                (n.prototype.updateAvailableWidth = function () {
                  this.el &&
                    this.props.aspectRatio &&
                    this.setState({ availableWidth: this.el.offsetWidth });
                }),
                n
              );
            })(Il),
            fu = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                return (
                  (n.handleSegClick = function (e, t) {
                    var r = n.component,
                      o = r.context,
                      i = gn(t);
                    if (i && r.isValidSegDownEl(e.target)) {
                      var a = H(e.target, ".fc-event-forced-url"),
                        s = a ? a.querySelector("a[href]").href : "";
                      o.emitter.trigger("eventClick", {
                        el: t,
                        event: new tl(
                          r.context,
                          i.eventRange.def,
                          i.eventRange.instance
                        ),
                        jsEvent: e,
                        view: o.viewApi,
                      }),
                        s && !e.defaultPrevented && (window.location.href = s);
                    }
                  }),
                  (n.destroy = W(t.el, "click", ".fc-event", n.handleSegClick)),
                  n
                );
              }
              return t(n, e), n;
            })(ou),
            pu = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                return (
                  (n.handleEventElRemove = function (e) {
                    e === n.currentSegEl &&
                      n.handleSegLeave(null, n.currentSegEl);
                  }),
                  (n.handleSegEnter = function (e, t) {
                    gn(t) &&
                      ((n.currentSegEl = t),
                      n.triggerEvent("eventMouseEnter", e, t));
                  }),
                  (n.handleSegLeave = function (e, t) {
                    n.currentSegEl &&
                      ((n.currentSegEl = null),
                      n.triggerEvent("eventMouseLeave", e, t));
                  }),
                  (n.removeHoverListeners = V(
                    t.el,
                    ".fc-event",
                    n.handleSegEnter,
                    n.handleSegLeave
                  )),
                  n
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.removeHoverListeners();
                }),
                (n.prototype.triggerEvent = function (e, t, n) {
                  var r = this.component,
                    o = r.context,
                    i = gn(n);
                  (t && !r.isValidSegDownEl(t.target)) ||
                    o.emitter.trigger(e, {
                      el: n,
                      event: new tl(o, i.eventRange.def, i.eventRange.instance),
                      jsEvent: t,
                      view: o.viewApi,
                    });
                }),
                n
              );
            })(ou),
            hu = (function (e) {
              function r() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.buildViewContext = pt(Or)),
                  (t.buildViewPropTransformers = pt(yi)),
                  (t.buildToolbarProps = pt(mi)),
                  (t.handleNavLinkClick = B(
                    "a[data-navlink]",
                    t._handleNavLinkClick.bind(t)
                  )),
                  (t.headerRef = El()),
                  (t.footerRef = El()),
                  (t.interactionsStore = {}),
                  (t.registerInteractiveComponent = function (e, n) {
                    var r = hi(e, n),
                      o = [fu, pu],
                      i = o.concat(t.props.pluginHooks.componentInteractions),
                      a = i.map(function (e) {
                        return new e(r);
                      });
                    (t.interactionsStore[e.uid] = a), (iu[e.uid] = r);
                  }),
                  (t.unregisterInteractiveComponent = function (e) {
                    for (
                      var n = 0, r = t.interactionsStore[e.uid];
                      n < r.length;
                      n++
                    ) {
                      r[n].destroy();
                    }
                    delete t.interactionsStore[e.uid], delete iu[e.uid];
                  }),
                  (t.resizeRunner = new Ql(function () {
                    t.props.emitter.trigger("_resize", !0),
                      t.props.emitter.trigger("windowResize", {
                        view: t.props.viewApi,
                      });
                  })),
                  (t.handleWindowResize = function (e) {
                    var n = t.props.options;
                    n.handleWindowResize &&
                      e.target === window &&
                      t.resizeRunner.request(n.windowResizeDelay);
                  }),
                  t
                );
              }
              return (
                t(r, e),
                (r.prototype.render = function () {
                  var e,
                    t = this.props,
                    n = t.toolbarConfig,
                    r = t.options,
                    o = this.buildToolbarProps(
                      t.viewSpec,
                      t.dateProfile,
                      t.dateProfileGenerator,
                      t.currentDate,
                      Zn(t.options.now, t.dateEnv),
                      t.viewTitle
                    ),
                    i = !1,
                    a = "";
                  t.isHeightAuto || t.forPrint
                    ? (a = "")
                    : null != r.height
                    ? (i = !0)
                    : null != r.contentHeight
                    ? (a = r.contentHeight)
                    : (e = Math.max(r.aspectRatio, 0.5));
                  var s = this.buildViewContext(
                    t.viewSpec,
                    t.viewApi,
                    t.options,
                    t.dateProfileGenerator,
                    t.dateEnv,
                    t.theme,
                    t.pluginHooks,
                    t.dispatch,
                    t.getCurrentData,
                    t.emitter,
                    t.calendarApi,
                    this.registerInteractiveComponent,
                    this.unregisterInteractiveComponent
                  );
                  return wl(
                    Ml.Provider,
                    { value: s },
                    n.headerToolbar &&
                      wl(
                        cu,
                        vs(
                          {
                            ref: this.headerRef,
                            extraClassName: "fc-header-toolbar",
                            model: n.headerToolbar,
                          },
                          o
                        )
                      ),
                    wl(
                      du,
                      {
                        liquid: i,
                        height: a,
                        aspectRatio: e,
                        onClick: this.handleNavLinkClick,
                      },
                      this.renderView(t),
                      this.buildAppendContent()
                    ),
                    n.footerToolbar &&
                      wl(
                        cu,
                        vs(
                          {
                            ref: this.footerRef,
                            extraClassName: "fc-footer-toolbar",
                            model: n.footerToolbar,
                          },
                          o
                        )
                      )
                  );
                }),
                (r.prototype.componentDidMount = function () {
                  var e = this.props;
                  (this.calendarInteractions =
                    e.pluginHooks.calendarInteractions.map(function (t) {
                      return new t(e);
                    })),
                    window.addEventListener("resize", this.handleWindowResize);
                  var t = e.pluginHooks.propSetHandlers;
                  for (var n in t) t[n](e[n], e);
                }),
                (r.prototype.componentDidUpdate = function (e) {
                  var t = this.props,
                    n = t.pluginHooks.propSetHandlers;
                  for (var r in n) t[r] !== e[r] && n[r](t[r], t);
                }),
                (r.prototype.componentWillUnmount = function () {
                  window.removeEventListener("resize", this.handleWindowResize),
                    this.resizeRunner.clear();
                  for (
                    var e = 0, t = this.calendarInteractions;
                    e < t.length;
                    e++
                  ) {
                    t[e].destroy();
                  }
                  this.props.emitter.trigger("_unmount");
                }),
                (r.prototype._handleNavLinkClick = function (e, t) {
                  var n = this.props,
                    r = n.dateEnv,
                    o = n.options,
                    i = n.calendarApi,
                    a = t.getAttribute("data-navlink");
                  a = a ? JSON.parse(a) : {};
                  var s = r.createMarker(a.date),
                    l = a.type,
                    u =
                      "day" === l
                        ? o.navLinkDayClick
                        : "week" === l
                        ? o.navLinkWeekClick
                        : null;
                  "function" == typeof u
                    ? u.call(i, r.toDate(s), e)
                    : ("string" == typeof u && (l = u), i.zoomTo(s, l));
                }),
                (r.prototype.buildAppendContent = function () {
                  var e = this.props,
                    t = e.pluginHooks.viewContainerAppends.map(function (t) {
                      return t(e);
                    });
                  return wl.apply(void 0, n([Dl, {}], t));
                }),
                (r.prototype.renderView = function (e) {
                  for (
                    var t = e.pluginHooks,
                      n = e.viewSpec,
                      r = {
                        dateProfile: e.dateProfile,
                        businessHours: e.businessHours,
                        eventStore: e.renderableEventStore,
                        eventUiBases: e.eventUiBases,
                        dateSelection: e.dateSelection,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        isHeightAuto: e.isHeightAuto,
                        forPrint: e.forPrint,
                      },
                      o = this.buildViewPropTransformers(t.viewPropsTransformers),
                      i = 0,
                      a = o;
                    i < a.length;
                    i++
                  ) {
                    var s = a[i];
                    vs(r, s.transform(r, e));
                  }
                  var l = n.component;
                  return wl(l, vs({}, r));
                }),
                r
              );
            })(_l),
            gu = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.state = { forPrint: !1 }),
                  (t.handleBeforePrint = function () {
                    t.setState({ forPrint: !0 });
                  }),
                  (t.handleAfterPrint = function () {
                    t.setState({ forPrint: !1 });
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props,
                    t = e.options,
                    n = this.state.forPrint,
                    r = n || "auto" === t.height || "auto" === t.contentHeight,
                    o = r || null == t.height ? "" : t.height,
                    i = [
                      "fc",
                      n ? "fc-media-print" : "fc-media-screen",
                      "fc-direction-" + t.direction,
                      e.theme.getClass("root"),
                    ];
                  return hr() || i.push("fc-liquid-hack"), e.children(i, o, r, n);
                }),
                (n.prototype.componentDidMount = function () {
                  var e = this.props.emitter;
                  e.on("_beforeprint", this.handleBeforePrint),
                    e.on("_afterprint", this.handleAfterPrint);
                }),
                (n.prototype.componentWillUnmount = function () {
                  var e = this.props.emitter;
                  e.off("_beforeprint", this.handleBeforePrint),
                    e.off("_afterprint", this.handleAfterPrint);
                }),
                n
              );
            })(Il),
            vu = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.context,
                    t = e.dateEnv,
                    n = e.options,
                    r = e.theme,
                    o = e.viewApi,
                    i = this.props,
                    a = i.date,
                    s = i.dateProfile,
                    l = mr(a, i.todayRange, null, s),
                    u = ["fc-col-header-cell"].concat(yr(l, r)),
                    c = t.format(a, i.dayHeaderFormat),
                    d =
                      n.navLinks && !l.isDisabled && i.colCnt > 1
                        ? { "data-navlink": Cr(a), tabIndex: 0 }
                        : {},
                    f = vs(
                      vs(vs({ date: t.toDate(a), view: o }, i.extraHookProps), {
                        text: c,
                      }),
                      l
                    );
                  return wl(
                    Hl,
                    {
                      hookProps: f,
                      classNames: n.dayHeaderClassNames,
                      content: n.dayHeaderContent,
                      defaultContent: Ci,
                      didMount: n.dayHeaderDidMount,
                      willUnmount: n.dayHeaderWillUnmount,
                    },
                    function (e, t, n, r) {
                      return wl(
                        "th",
                        vs(
                          {
                            ref: e,
                            className: u.concat(t).join(" "),
                            "data-date": l.isDisabled ? void 0 : lt(a),
                            colSpan: i.colSpan,
                          },
                          i.extraDataAttrs
                        ),
                        wl(
                          "div",
                          { className: "fc-scrollgrid-sync-inner" },
                          !l.isDisabled &&
                            wl(
                              "a",
                              vs(
                                {
                                  ref: n,
                                  className: [
                                    "fc-col-header-cell-cushion",
                                    i.isSticky ? "fc-sticky" : "",
                                  ].join(" "),
                                },
                                d
                              ),
                              r
                            )
                        )
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            mu = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    r = t.theme,
                    o = t.viewApi,
                    i = t.options,
                    a = se(new Date(2592e5), e.dow),
                    s = {
                      dow: e.dow,
                      isDisabled: !1,
                      isFuture: !1,
                      isPast: !1,
                      isToday: !1,
                      isOther: !1,
                    },
                    l = ["fc-col-header-cell"].concat(
                      yr(s, r),
                      e.extraClassNames || []
                    ),
                    u = n.format(a, e.dayHeaderFormat),
                    c = vs(
                      vs(vs(vs({ date: a }, s), { view: o }), e.extraHookProps),
                      { text: u }
                    );
                  return wl(
                    Hl,
                    {
                      hookProps: c,
                      classNames: i.dayHeaderClassNames,
                      content: i.dayHeaderContent,
                      defaultContent: Ci,
                      didMount: i.dayHeaderDidMount,
                      willUnmount: i.dayHeaderWillUnmount,
                    },
                    function (t, n, r, o) {
                      return wl(
                        "th",
                        vs(
                          {
                            ref: t,
                            className: l.concat(n).join(" "),
                            colSpan: e.colSpan,
                          },
                          e.extraDataAttrs
                        ),
                        wl(
                          "div",
                          { className: "fc-scrollgrid-sync-inner" },
                          wl(
                            "a",
                            {
                              className: [
                                "fc-col-header-cell-cushion",
                                e.isSticky ? "fc-sticky" : "",
                              ].join(" "),
                              ref: r,
                            },
                            o
                          )
                        )
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            yu = (function (e) {
              function n(t, n) {
                var r = e.call(this, t, n) || this;
                return (
                  (r.initialNowDate = Zn(n.options.now, n.dateEnv)),
                  (r.initialNowQueriedMs = new Date().valueOf()),
                  (r.state = r.computeTiming().currentState),
                  r
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.state;
                  return t.children(n.nowDate, n.todayRange);
                }),
                (n.prototype.componentDidMount = function () {
                  this.setTimeout();
                }),
                (n.prototype.componentDidUpdate = function (e) {
                  e.unit !== this.props.unit &&
                    (this.clearTimeout(), this.setTimeout());
                }),
                (n.prototype.componentWillUnmount = function () {
                  this.clearTimeout();
                }),
                (n.prototype.computeTiming = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = le(
                      this.initialNowDate,
                      new Date().valueOf() - this.initialNowQueriedMs
                    ),
                    o = n.dateEnv.startOf(r, t.unit),
                    i = n.dateEnv.add(o, Ge(1, t.unit)),
                    a = i.valueOf() - r.valueOf();
                  return (
                    (a = Math.min(864e5, a)),
                    {
                      currentState: { nowDate: o, todayRange: wi(o) },
                      nextState: { nowDate: i, todayRange: wi(i) },
                      waitMs: a,
                    }
                  );
                }),
                (n.prototype.setTimeout = function () {
                  var e = this,
                    t = this.computeTiming(),
                    n = t.nextState,
                    r = t.waitMs;
                  this.timeoutId = setTimeout(function () {
                    e.setState(n, function () {
                      e.setTimeout();
                    });
                  }, r);
                }),
                (n.prototype.clearTimeout = function () {
                  this.timeoutId && clearTimeout(this.timeoutId);
                }),
                (n.contextType = Ml),
                n
              );
            })(Cl),
            bu = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.createDayHeaderFormatter = pt(Si)), t;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.context,
                    t = this.props,
                    n = t.dates,
                    r = t.dateProfile,
                    o = t.datesRepDistinctDays,
                    i = t.renderIntro,
                    a = this.createDayHeaderFormatter(
                      e.options.dayHeaderFormat,
                      o,
                      n.length
                    );
                  return wl(yu, { unit: "day" }, function (e, t) {
                    return wl(
                      "tr",
                      null,
                      i && i("day"),
                      n.map(function (e) {
                        return o
                          ? wl(vu, {
                              key: e.toISOString(),
                              date: e,
                              dateProfile: r,
                              todayRange: t,
                              colCnt: n.length,
                              dayHeaderFormat: a,
                            })
                          : wl(mu, {
                              key: e.getUTCDay(),
                              dow: e.getUTCDay(),
                              dayHeaderFormat: a,
                            });
                      })
                    );
                  });
                }),
                n
              );
            })(Il),
            Cu = (function () {
              function e(e, t) {
                for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r; )
                  t.isHiddenDay(n)
                    ? o.push(a + 0.5)
                    : ((a += 1), o.push(a), i.push(n)),
                    (n = se(n, 1));
                (this.dates = i), (this.indices = o), (this.cnt = i.length);
              }
              return (
                (e.prototype.sliceRange = function (e) {
                  var t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex(se(e.end, -1)),
                    r = Math.max(0, t),
                    o = Math.min(this.cnt - 1, n);
                  return (
                    (r = Math.ceil(r)),
                    (o = Math.floor(o)),
                    r <= o
                      ? {
                          firstIndex: r,
                          lastIndex: o,
                          isStart: t === r,
                          isEnd: n === o,
                        }
                      : null
                  );
                }),
                (e.prototype.getDateDayIndex = function (e) {
                  var t = this.indices,
                    n = Math.floor(ce(this.dates[0], e));
                  return n < 0
                    ? t[0] - 1
                    : n >= t.length
                    ? t[t.length - 1] + 1
                    : t[n];
                }),
                e
              );
            })(),
            wu = (function () {
              function e(e, t) {
                var n,
                  r,
                  o,
                  i = e.dates;
                if (t) {
                  for (
                    r = i[0].getUTCDay(), n = 1;
                    n < i.length && i[n].getUTCDay() !== r;
                    n += 1
                  );
                  o = Math.ceil(i.length / n);
                } else (o = 1), (n = i.length);
                (this.rowCnt = o),
                  (this.colCnt = n),
                  (this.daySeries = e),
                  (this.cells = this.buildCells()),
                  (this.headerDates = this.buildHeaderDates());
              }
              return (
                (e.prototype.buildCells = function () {
                  for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                    for (var n = [], r = 0; r < this.colCnt; r += 1)
                      n.push(this.buildCell(t, r));
                    e.push(n);
                  }
                  return e;
                }),
                (e.prototype.buildCell = function (e, t) {
                  var n = this.daySeries.dates[e * this.colCnt + t];
                  return { key: n.toISOString(), date: n };
                }),
                (e.prototype.buildHeaderDates = function () {
                  for (var e = [], t = 0; t < this.colCnt; t += 1)
                    e.push(this.cells[0][t].date);
                  return e;
                }),
                (e.prototype.sliceRange = function (e) {
                  var t = this.colCnt,
                    n = this.daySeries.sliceRange(e),
                    r = [];
                  if (n)
                    for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i; ) {
                      var s = Math.floor(a / t),
                        l = Math.min((s + 1) * t, i + 1);
                      r.push({
                        row: s,
                        firstCol: a % t,
                        lastCol: (l - 1) % t,
                        isStart: n.isStart && a === o,
                        isEnd: n.isEnd && l - 1 === i,
                      }),
                        (a = l);
                    }
                  return r;
                }),
                e
              );
            })(),
            Su = (function () {
              function e() {
                (this.sliceBusinessHours = pt(this._sliceBusinessHours)),
                  (this.sliceDateSelection = pt(this._sliceDateSpan)),
                  (this.sliceEventStore = pt(this._sliceEventStore)),
                  (this.sliceEventDrag = pt(this._sliceInteraction)),
                  (this.sliceEventResize = pt(this._sliceInteraction)),
                  (this.forceDayIfListItem = !1);
              }
              return (
                (e.prototype.sliceProps = function (e, t, r, o) {
                  for (var i = [], a = 4; a < arguments.length; a++)
                    i[a - 4] = arguments[a];
                  var s = e.eventUiBases,
                    l = this.sliceEventStore.apply(
                      this,
                      n([e.eventStore, s, t, r], i)
                    );
                  return {
                    dateSelectionSegs: this.sliceDateSelection.apply(
                      this,
                      n([e.dateSelection, s, o], i)
                    ),
                    businessHourSegs: this.sliceBusinessHours.apply(
                      this,
                      n([e.businessHours, t, r, o], i)
                    ),
                    fgEventSegs: l.fg,
                    bgEventSegs: l.bg,
                    eventDrag: this.sliceEventDrag.apply(
                      this,
                      n([e.eventDrag, s, t, r], i)
                    ),
                    eventResize: this.sliceEventResize.apply(
                      this,
                      n([e.eventResize, s, t, r], i)
                    ),
                    eventSelection: e.eventSelection,
                  };
                }),
                (e.prototype.sliceNowDate = function (e, t) {
                  for (var r = [], o = 2; o < arguments.length; o++)
                    r[o - 2] = arguments[o];
                  return this._sliceDateSpan.apply(
                    this,
                    n(
                      [{ range: { start: e, end: le(e, 1) }, allDay: !1 }, {}, t],
                      r
                    )
                  );
                }),
                (e.prototype._sliceBusinessHours = function (e, t, r, o) {
                  for (var i = [], a = 4; a < arguments.length; a++)
                    i[a - 4] = arguments[a];
                  return e
                    ? this._sliceEventStore.apply(
                        this,
                        n([Ve(e, Ei(t, Boolean(r)), o), {}, t, r], i)
                      ).bg
                    : [];
                }),
                (e.prototype._sliceEventStore = function (e, t, n, r) {
                  for (var o = [], i = 4; i < arguments.length; i++)
                    o[i - 4] = arguments[i];
                  if (e) {
                    var a = fn(e, t, Ei(n, Boolean(r)), r);
                    return {
                      bg: this.sliceEventRanges(a.bg, o),
                      fg: this.sliceEventRanges(a.fg, o),
                    };
                  }
                  return { bg: [], fg: [] };
                }),
                (e.prototype._sliceInteraction = function (e, t, n, r) {
                  for (var o = [], i = 4; i < arguments.length; i++)
                    o[i - 4] = arguments[i];
                  if (!e) return null;
                  var a = fn(e.mutatedEvents, t, Ei(n, Boolean(r)), r);
                  return {
                    segs: this.sliceEventRanges(a.fg, o),
                    affectedInstances: e.affectedEvents.instances,
                    isEvent: e.isEvent,
                  };
                }),
                (e.prototype._sliceDateSpan = function (e, t, r) {
                  for (var o = [], i = 3; i < arguments.length; i++)
                    o[i - 3] = arguments[i];
                  if (!e) return [];
                  for (
                    var a = Hn(e, t, r),
                      s = this.sliceRange.apply(this, n([e.range], o)),
                      l = 0,
                      u = s;
                    l < u.length;
                    l++
                  ) {
                    u[l].eventRange = a;
                  }
                  return s;
                }),
                (e.prototype.sliceEventRanges = function (e, t) {
                  for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.sliceEventRange(i, t));
                  }
                  return n;
                }),
                (e.prototype.sliceEventRange = function (e, t) {
                  var r = e.range;
                  this.forceDayIfListItem &&
                    "list-item" === e.ui.display &&
                    (r = { start: r.start, end: se(r.start, 1) });
                  for (
                    var o = this.sliceRange.apply(this, n([r], t)), i = 0, a = o;
                    i < a.length;
                    i++
                  ) {
                    var s = a[i];
                    (s.eventRange = e),
                      (s.isStart = e.isStart && s.isStart),
                      (s.isEnd = e.isEnd && s.isEnd);
                  }
                  return o;
                }),
                e
              );
            })(),
            Eu = /^(visible|hidden)$/,
            Du = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handleEl = function (e) {
                    (t.el = e), zr(t.props.elRef, e);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props,
                    t = e.liquid,
                    n = e.liquidIsAbsolute,
                    r = t && n,
                    o = ["fc-scroller"];
                  return (
                    t &&
                      (n
                        ? o.push("fc-scroller-liquid-absolute")
                        : o.push("fc-scroller-liquid")),
                    wl(
                      "div",
                      {
                        ref: this.handleEl,
                        className: o.join(" "),
                        style: {
                          overflowX: e.overflowX,
                          overflowY: e.overflowY,
                          left: (r && -(e.overcomeLeft || 0)) || "",
                          right: (r && -(e.overcomeRight || 0)) || "",
                          bottom: (r && -(e.overcomeBottom || 0)) || "",
                          marginLeft: (!r && -(e.overcomeLeft || 0)) || "",
                          marginRight: (!r && -(e.overcomeRight || 0)) || "",
                          marginBottom: (!r && -(e.overcomeBottom || 0)) || "",
                          maxHeight: e.maxHeight || "",
                        },
                      },
                      e.children
                    )
                  );
                }),
                (n.prototype.needsXScrolling = function () {
                  if (Eu.test(this.props.overflowX)) return !1;
                  for (
                    var e = this.el,
                      t =
                        this.el.getBoundingClientRect().width -
                        this.getYScrollbarWidth(),
                      n = e.children,
                      r = 0;
                    r < n.length;
                    r += 1
                  ) {
                    if (n[r].getBoundingClientRect().width > t) return !0;
                  }
                  return !1;
                }),
                (n.prototype.needsYScrolling = function () {
                  if (Eu.test(this.props.overflowY)) return !1;
                  for (
                    var e = this.el,
                      t =
                        this.el.getBoundingClientRect().height -
                        this.getXScrollbarWidth(),
                      n = e.children,
                      r = 0;
                    r < n.length;
                    r += 1
                  ) {
                    if (n[r].getBoundingClientRect().height > t) return !0;
                  }
                  return !1;
                }),
                (n.prototype.getXScrollbarWidth = function () {
                  return Eu.test(this.props.overflowX)
                    ? 0
                    : this.el.offsetHeight - this.el.clientHeight;
                }),
                (n.prototype.getYScrollbarWidth = function () {
                  return Eu.test(this.props.overflowY)
                    ? 0
                    : this.el.offsetWidth - this.el.clientWidth;
                }),
                n
              );
            })(Il),
            Tu = (function () {
              function e(e) {
                var t = this;
                (this.masterCallback = e),
                  (this.currentMap = {}),
                  (this.depths = {}),
                  (this.callbackMap = {}),
                  (this.handleValue = function (e, n) {
                    var r = t,
                      o = r.depths,
                      i = r.currentMap,
                      a = !1,
                      s = !1;
                    null !== e
                      ? ((a = n in i),
                        (i[n] = e),
                        (o[n] = (o[n] || 0) + 1),
                        (s = !0))
                      : ((o[n] -= 1),
                        o[n] || (delete i[n], delete t.callbackMap[n], (a = !0))),
                      t.masterCallback &&
                        (a && t.masterCallback(null, String(n)),
                        s && t.masterCallback(e, String(n)));
                  });
              }
              return (
                (e.prototype.createRef = function (e) {
                  var t = this,
                    n = this.callbackMap[e];
                  return (
                    n ||
                      (n = this.callbackMap[e] =
                        function (n) {
                          t.handleValue(n, String(e));
                        }),
                    n
                  );
                }),
                (e.prototype.collect = function (e, t, n) {
                  return Be(this.currentMap, e, t, n);
                }),
                (e.prototype.getAll = function () {
                  return Ae(this.currentMap);
                }),
                e
              );
            })(),
            Ru = (function (e) {
              function r() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.processCols = pt(function (e) {
                    return e;
                  }, ki)),
                  (t.renderMicroColGroup = pt(Mi)),
                  (t.scrollerRefs = new Tu()),
                  (t.scrollerElRefs = new Tu(t._handleScrollerEl.bind(t))),
                  (t.state = {
                    shrinkWidth: null,
                    forceYScrollbars: !1,
                    scrollerClientWidths: {},
                    scrollerClientHeights: {},
                  }),
                  (t.handleSizing = function () {
                    t.setState(
                      vs(
                        { shrinkWidth: t.computeShrinkWidth() },
                        t.computeScrollerDims()
                      )
                    );
                  }),
                  t
                );
              }
              return (
                t(r, e),
                (r.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    r = e.state,
                    o = e.context,
                    i = t.sections || [],
                    a = this.processCols(t.cols),
                    s = this.renderMicroColGroup(a, r.shrinkWidth),
                    l = Pi(t.liquid, o);
                  t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
                  for (
                    var u, c = i.length, d = 0, f = [], p = [], h = [];
                    d < c && "header" === (u = i[d]).type;
  
                  )
                    f.push(this.renderSection(u, s)), (d += 1);
                  for (; d < c && "body" === (u = i[d]).type; )
                    p.push(this.renderSection(u, s)), (d += 1);
                  for (; d < c && "footer" === (u = i[d]).type; )
                    h.push(this.renderSection(u, s)), (d += 1);
                  var g = !hr();
                  return wl(
                    "table",
                    { className: l.join(" "), style: { height: t.height } },
                    Boolean(!g && f.length) &&
                      wl.apply(void 0, n(["thead", {}], f)),
                    Boolean(!g && p.length) &&
                      wl.apply(void 0, n(["tbody", {}], p)),
                    Boolean(!g && h.length) &&
                      wl.apply(void 0, n(["tfoot", {}], h)),
                    g && wl.apply(void 0, n(["tbody", {}], f, p, h))
                  );
                }),
                (r.prototype.renderSection = function (e, t) {
                  return "outerContent" in e
                    ? wl(Dl, { key: e.key }, e.outerContent)
                    : wl(
                        "tr",
                        {
                          key: e.key,
                          className: Ni(e, this.props.liquid).join(" "),
                        },
                        this.renderChunkTd(e, t, e.chunk)
                      );
                }),
                (r.prototype.renderChunkTd = function (e, t, n) {
                  if ("outerContent" in n) return n.outerContent;
                  var r = this.props,
                    o = this.state,
                    i = o.forceYScrollbars,
                    a = o.scrollerClientWidths,
                    s = o.scrollerClientHeights,
                    l = Ri(r, e),
                    u = Ti(r, e),
                    c = r.liquid
                      ? i
                        ? "scroll"
                        : l
                        ? "auto"
                        : "hidden"
                      : "visible",
                    d = e.key,
                    f = xi(e, n, {
                      tableColGroupNode: t,
                      tableMinWidth: "",
                      clientWidth:
                        r.collapsibleWidth || void 0 === a[d] ? null : a[d],
                      clientHeight: void 0 !== s[d] ? s[d] : null,
                      expandRows: e.expandRows,
                      syncRowHeights: !1,
                      rowSyncHeights: [],
                      reportRowHeightChange: function () {},
                    });
                  return wl(
                    "td",
                    { ref: n.elRef },
                    wl(
                      "div",
                      {
                        className:
                          "fc-scroller-harness" +
                          (u ? " fc-scroller-harness-liquid" : ""),
                      },
                      wl(
                        Du,
                        {
                          ref: this.scrollerRefs.createRef(d),
                          elRef: this.scrollerElRefs.createRef(d),
                          overflowY: c,
                          overflowX: r.liquid ? "hidden" : "visible",
                          maxHeight: e.maxHeight,
                          liquid: u,
                          liquidIsAbsolute: !0,
                        },
                        f
                      )
                    )
                  );
                }),
                (r.prototype._handleScrollerEl = function (e, t) {
                  var n = Li(this.props.sections, t);
                  n && zr(n.chunk.scrollerElRef, e);
                }),
                (r.prototype.componentDidMount = function () {
                  this.handleSizing(),
                    this.context.addResizeHandler(this.handleSizing);
                }),
                (r.prototype.componentDidUpdate = function () {
                  this.handleSizing();
                }),
                (r.prototype.componentWillUnmount = function () {
                  this.context.removeResizeHandler(this.handleSizing);
                }),
                (r.prototype.computeShrinkWidth = function () {
                  return Ii(this.props.cols)
                    ? Di(this.scrollerElRefs.getAll())
                    : 0;
                }),
                (r.prototype.computeScrollerDims = function () {
                  var e = Er(),
                    t = this,
                    n = t.scrollerRefs,
                    r = t.scrollerElRefs,
                    o = !1,
                    i = {},
                    a = {};
                  for (var s in n.currentMap) {
                    var l = n.currentMap[s];
                    if (l && l.needsYScrolling()) {
                      o = !0;
                      break;
                    }
                  }
                  for (var u = 0, c = this.props.sections; u < c.length; u++) {
                    var d = c[u],
                      s = d.key,
                      f = r.currentMap[s];
                    if (f) {
                      var p = f.parentNode;
                      (i[s] = Math.floor(
                        p.getBoundingClientRect().width - (o ? e.y : 0)
                      )),
                        (a[s] = Math.floor(p.getBoundingClientRect().height));
                    }
                  }
                  return {
                    forceYScrollbars: o,
                    scrollerClientWidths: i,
                    scrollerClientHeights: a,
                  };
                }),
                r
              );
            })(Il);
          Ru.addStateEquality({
            scrollerClientWidths: Le,
            scrollerClientHeights: Le,
          });
          var xu = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.elRef = El()), t;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = n.options,
                    o = t.seg,
                    i = o.eventRange,
                    a = i.ui,
                    s = {
                      event: new tl(n, i.def, i.instance),
                      view: n.viewApi,
                      timeText: t.timeText,
                      textColor: a.textColor,
                      backgroundColor: a.backgroundColor,
                      borderColor: a.borderColor,
                      isDraggable: !t.disableDragging && Cn(o, n),
                      isStartResizable: !t.disableResizing && wn(o, n),
                      isEndResizable: !t.disableResizing && Sn(o),
                      isMirror: Boolean(
                        t.isDragging || t.isResizing || t.isDateSelecting
                      ),
                      isStart: Boolean(o.isStart),
                      isEnd: Boolean(o.isEnd),
                      isPast: Boolean(t.isPast),
                      isFuture: Boolean(t.isFuture),
                      isToday: Boolean(t.isToday),
                      isSelected: Boolean(t.isSelected),
                      isDragging: Boolean(t.isDragging),
                      isResizing: Boolean(t.isResizing),
                    },
                    l = Tn(s).concat(a.classNames);
                  return wl(
                    Hl,
                    {
                      hookProps: s,
                      classNames: r.eventClassNames,
                      content: r.eventContent,
                      defaultContent: t.defaultContent,
                      didMount: r.eventDidMount,
                      willUnmount: r.eventWillUnmount,
                      elRef: this.elRef,
                    },
                    function (e, n, r, o) {
                      return t.children(e, l.concat(n), r, o, s);
                    }
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  hn(this.elRef.current, this.props.seg);
                }),
                (n.prototype.componentDidUpdate = function (e) {
                  var t = this.props.seg;
                  t !== e.seg && hn(this.elRef.current, t);
                }),
                n
              );
            })(Il),
            ku = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = t.seg,
                    o = n.options.eventTimeFormat || t.defaultTimeFormat,
                    i = En(
                      r,
                      o,
                      n,
                      t.defaultDisplayEventTime,
                      t.defaultDisplayEventEnd
                    );
                  return wl(
                    xu,
                    {
                      seg: r,
                      timeText: i,
                      disableDragging: t.disableDragging,
                      disableResizing: t.disableResizing,
                      defaultContent: t.defaultContent || zi,
                      isDragging: t.isDragging,
                      isResizing: t.isResizing,
                      isDateSelecting: t.isDateSelecting,
                      isSelected: t.isSelected,
                      isPast: t.isPast,
                      isFuture: t.isFuture,
                      isToday: t.isToday,
                    },
                    function (e, n, o, i, a) {
                      return wl(
                        "a",
                        vs(
                          {
                            className: t.extraClassNames.concat(n).join(" "),
                            style: {
                              borderColor: a.borderColor,
                              backgroundColor: a.backgroundColor,
                            },
                            ref: e,
                          },
                          ji(r)
                        ),
                        wl(
                          "div",
                          {
                            className: "fc-event-main",
                            ref: o,
                            style: { color: a.textColor },
                          },
                          i
                        ),
                        a.isStartResizable &&
                          wl("div", {
                            className: "fc-event-resizer fc-event-resizer-start",
                          }),
                        a.isEndResizable &&
                          wl("div", {
                            className: "fc-event-resizer fc-event-resizer-end",
                          })
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            Mu = function (e) {
              return wl(Ml.Consumer, null, function (t) {
                var n = t.options,
                  r = {
                    isAxis: e.isAxis,
                    date: t.dateEnv.toDate(e.date),
                    view: t.viewApi,
                  };
                return wl(
                  Hl,
                  {
                    hookProps: r,
                    classNames: n.nowIndicatorClassNames,
                    content: n.nowIndicatorContent,
                    didMount: n.nowIndicatorDidMount,
                    willUnmount: n.nowIndicatorWillUnmount,
                  },
                  e.children
                );
              });
            },
            _u = kt({ day: "numeric" }),
            Iu = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = n.options,
                    o = Ui({
                      date: t.date,
                      dateProfile: t.dateProfile,
                      todayRange: t.todayRange,
                      showDayNumber: t.showDayNumber,
                      extraProps: t.extraHookProps,
                      viewApi: n.viewApi,
                      dateEnv: n.dateEnv,
                    });
                  return wl(
                    co,
                    {
                      hookProps: o,
                      content: r.dayCellContent,
                      defaultContent: t.defaultContent,
                    },
                    t.children
                  );
                }),
                n
              );
            })(Il),
            Pu = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.refineHookProps = ht(Ui)), (t.normalizeClassNames = fo()), t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = n.options,
                    o = this.refineHookProps({
                      date: t.date,
                      dateProfile: t.dateProfile,
                      todayRange: t.todayRange,
                      showDayNumber: t.showDayNumber,
                      extraProps: t.extraHookProps,
                      viewApi: n.viewApi,
                      dateEnv: n.dateEnv,
                    }),
                    i = yr(o, n.theme).concat(
                      o.isDisabled
                        ? []
                        : this.normalizeClassNames(r.dayCellClassNames, o)
                    ),
                    a = o.isDisabled ? {} : { "data-date": lt(t.date) };
                  return wl(
                    Ll,
                    {
                      hookProps: o,
                      didMount: r.dayCellDidMount,
                      willUnmount: r.dayCellWillUnmount,
                      elRef: t.elRef,
                    },
                    function (e) {
                      return t.children(e, i, a, o.isDisabled);
                    }
                  );
                }),
                n
              );
            })(Il),
            Nu = function (e) {
              return wl(
                xu,
                {
                  defaultContent: Wi,
                  seg: e.seg,
                  timeText: "",
                  disableDragging: !0,
                  disableResizing: !0,
                  isDragging: !1,
                  isResizing: !1,
                  isDateSelecting: !1,
                  isSelected: !1,
                  isPast: e.isPast,
                  isFuture: e.isFuture,
                  isToday: e.isToday,
                },
                function (e, t, n, r, o) {
                  return wl(
                    "div",
                    {
                      ref: e,
                      className: ["fc-bg-event"].concat(t).join(" "),
                      style: { backgroundColor: o.backgroundColor },
                    },
                    r
                  );
                }
              );
            },
            Hu = function (e) {
              return wl(Ml.Consumer, null, function (t) {
                var n = t.dateEnv,
                  r = t.options,
                  o = e.date,
                  i = r.weekNumberFormat || e.defaultFormat,
                  a = n.computeWeekNumber(o),
                  s = n.format(o, i);
                return wl(
                  Hl,
                  {
                    hookProps: { num: a, text: s, date: o },
                    classNames: r.weekNumberClassNames,
                    content: r.weekNumberContent,
                    defaultContent: Vi,
                    didMount: r.weekNumberDidMount,
                    willUnmount: r.weekNumberWillUnmount,
                  },
                  e.children
                );
              });
            },
            Ou = (function (e) {
              function n(t, n) {
                void 0 === n && (n = {});
                var r = e.call(this) || this;
                return (
                  (r.isRendering = !1),
                  (r.isRendered = !1),
                  (r.currentClassNames = []),
                  (r.customContentRenderId = 0),
                  (r.handleAction = function (e) {
                    switch (e.type) {
                      case "SET_EVENT_DRAG":
                      case "SET_EVENT_RESIZE":
                        r.renderRunner.tryDrain();
                    }
                  }),
                  (r.handleData = function (e) {
                    (r.currentData = e),
                      r.renderRunner.request(e.calendarOptions.rerenderDelay);
                  }),
                  (r.handleRenderRequest = function () {
                    if (r.isRendering) {
                      r.isRendered = !0;
                      var e = r.currentData;
                      Sl(
                        wl(
                          gu,
                          {
                            options: e.calendarOptions,
                            theme: e.theme,
                            emitter: e.emitter,
                          },
                          function (t, n, o, i) {
                            return (
                              r.setClassNames(t),
                              r.setHeight(n),
                              wl(
                                Ol.Provider,
                                { value: r.customContentRenderId },
                                wl(hu, vs({ isHeightAuto: o, forPrint: i }, e))
                              )
                            );
                          }
                        ),
                        r.el
                      );
                    } else
                      r.isRendered &&
                        ((r.isRendered = !1),
                        xl(r.el),
                        r.setClassNames([]),
                        r.setHeight(""));
                    Rl();
                  }),
                  (r.el = t),
                  (r.renderRunner = new Ql(r.handleRenderRequest)),
                  new tu({
                    optionOverrides: n,
                    calendarApi: r,
                    onAction: r.handleAction,
                    onData: r.handleData,
                  }),
                  r
                );
              }
              return (
                t(n, e),
                Object.defineProperty(n.prototype, "view", {
                  get: function () {
                    return this.currentData.viewApi;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (n.prototype.render = function () {
                  var e = this.isRendering;
                  e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
                    this.renderRunner.request(),
                    e && this.updateSize();
                }),
                (n.prototype.destroy = function () {
                  this.isRendering &&
                    ((this.isRendering = !1), this.renderRunner.request());
                }),
                (n.prototype.updateSize = function () {
                  e.prototype.updateSize.call(this), Rl();
                }),
                (n.prototype.batchRendering = function (e) {
                  this.renderRunner.pause("batchRendering"),
                    e(),
                    this.renderRunner.resume("batchRendering");
                }),
                (n.prototype.pauseRendering = function () {
                  this.renderRunner.pause("pauseRendering");
                }),
                (n.prototype.resumeRendering = function () {
                  this.renderRunner.resume("pauseRendering", !0);
                }),
                (n.prototype.resetOptions = function (e, t) {
                  this.currentDataManager.resetOptions(e, t);
                }),
                (n.prototype.setClassNames = function (e) {
                  if (!ft(e, this.currentClassNames)) {
                    for (
                      var t = this.el.classList,
                        n = 0,
                        r = this.currentClassNames;
                      n < r.length;
                      n++
                    ) {
                      var o = r[n];
                      t.remove(o);
                    }
                    for (var i = 0, a = e; i < a.length; i++) {
                      var o = a[i];
                      t.add(o);
                    }
                    this.currentClassNames = e;
                  }
                }),
                (n.prototype.setHeight = function (e) {
                  j(this.el, "height", e);
                }),
                n
              );
            })(el);
          su.touchMouseIgnoreWait = 500;
          var Au = 0,
            Lu = 0,
            zu = !1,
            ju = (function () {
              function e(e) {
                var t = this;
                (this.subjectEl = null),
                  (this.selector = ""),
                  (this.handleSelector = ""),
                  (this.shouldIgnoreMove = !1),
                  (this.shouldWatchScroll = !0),
                  (this.isDragging = !1),
                  (this.isTouchDragging = !1),
                  (this.wasTouchScroll = !1),
                  (this.handleMouseDown = function (e) {
                    if (!t.shouldIgnoreMouse() && Fi(e) && t.tryStart(e)) {
                      var n = t.createEventFromMouse(e, !0);
                      t.emitter.trigger("pointerdown", n),
                        t.initScrollWatch(n),
                        t.shouldIgnoreMove ||
                          document.addEventListener(
                            "mousemove",
                            t.handleMouseMove
                          ),
                        document.addEventListener("mouseup", t.handleMouseUp);
                    }
                  }),
                  (this.handleMouseMove = function (e) {
                    var n = t.createEventFromMouse(e);
                    t.recordCoords(n), t.emitter.trigger("pointermove", n);
                  }),
                  (this.handleMouseUp = function (e) {
                    document.removeEventListener("mousemove", t.handleMouseMove),
                      document.removeEventListener("mouseup", t.handleMouseUp),
                      t.emitter.trigger("pointerup", t.createEventFromMouse(e)),
                      t.cleanup();
                  }),
                  (this.handleTouchStart = function (e) {
                    if (t.tryStart(e)) {
                      t.isTouchDragging = !0;
                      var n = t.createEventFromTouch(e, !0);
                      t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
                      var r = e.target;
                      t.shouldIgnoreMove ||
                        r.addEventListener("touchmove", t.handleTouchMove),
                        r.addEventListener("touchend", t.handleTouchEnd),
                        r.addEventListener("touchcancel", t.handleTouchEnd),
                        window.addEventListener(
                          "scroll",
                          t.handleTouchScroll,
                          !0
                        );
                    }
                  }),
                  (this.handleTouchMove = function (e) {
                    var n = t.createEventFromTouch(e);
                    t.recordCoords(n), t.emitter.trigger("pointermove", n);
                  }),
                  (this.handleTouchEnd = function (e) {
                    if (t.isDragging) {
                      var n = e.target;
                      n.removeEventListener("touchmove", t.handleTouchMove),
                        n.removeEventListener("touchend", t.handleTouchEnd),
                        n.removeEventListener("touchcancel", t.handleTouchEnd),
                        window.removeEventListener(
                          "scroll",
                          t.handleTouchScroll,
                          !0
                        ),
                        t.emitter.trigger("pointerup", t.createEventFromTouch(e)),
                        t.cleanup(),
                        (t.isTouchDragging = !1),
                        Gi();
                    }
                  }),
                  (this.handleTouchScroll = function () {
                    t.wasTouchScroll = !0;
                  }),
                  (this.handleScroll = function (e) {
                    if (!t.shouldIgnoreMove) {
                      var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                        r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                      t.emitter.trigger("pointermove", {
                        origEvent: e,
                        isTouch: t.isTouchDragging,
                        subjectEl: t.subjectEl,
                        pageX: n,
                        pageY: r,
                        deltaX: n - t.origPageX,
                        deltaY: r - t.origPageY,
                      });
                    }
                  }),
                  (this.containerEl = e),
                  (this.emitter = new hl()),
                  e.addEventListener("mousedown", this.handleMouseDown),
                  e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0,
                  }),
                  Yi();
              }
              return (
                (e.prototype.destroy = function () {
                  this.containerEl.removeEventListener(
                    "mousedown",
                    this.handleMouseDown
                  ),
                    this.containerEl.removeEventListener(
                      "touchstart",
                      this.handleTouchStart,
                      { passive: !0 }
                    ),
                    Zi();
                }),
                (e.prototype.tryStart = function (e) {
                  var t = this.querySubjectEl(e),
                    n = e.target;
                  return (
                    !(
                      !t ||
                      (this.handleSelector && !H(n, this.handleSelector))
                    ) &&
                    ((this.subjectEl = t),
                    (this.isDragging = !0),
                    (this.wasTouchScroll = !1),
                    !0)
                  );
                }),
                (e.prototype.cleanup = function () {
                  (zu = !1),
                    (this.isDragging = !1),
                    (this.subjectEl = null),
                    this.destroyScrollWatch();
                }),
                (e.prototype.querySubjectEl = function (e) {
                  return this.selector
                    ? H(e.target, this.selector)
                    : this.containerEl;
                }),
                (e.prototype.shouldIgnoreMouse = function () {
                  return Au || this.isTouchDragging;
                }),
                (e.prototype.cancelTouchScroll = function () {
                  this.isDragging && (zu = !0);
                }),
                (e.prototype.initScrollWatch = function (e) {
                  this.shouldWatchScroll &&
                    (this.recordCoords(e),
                    window.addEventListener("scroll", this.handleScroll, !0));
                }),
                (e.prototype.recordCoords = function (e) {
                  this.shouldWatchScroll &&
                    ((this.prevPageX = e.pageX),
                    (this.prevPageY = e.pageY),
                    (this.prevScrollX = window.pageXOffset),
                    (this.prevScrollY = window.pageYOffset));
                }),
                (e.prototype.destroyScrollWatch = function () {
                  this.shouldWatchScroll &&
                    window.removeEventListener("scroll", this.handleScroll, !0);
                }),
                (e.prototype.createEventFromMouse = function (e, t) {
                  var n = 0,
                    r = 0;
                  return (
                    t
                      ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
                      : ((n = e.pageX - this.origPageX),
                        (r = e.pageY - this.origPageY)),
                    {
                      origEvent: e,
                      isTouch: !1,
                      subjectEl: this.subjectEl,
                      pageX: e.pageX,
                      pageY: e.pageY,
                      deltaX: n,
                      deltaY: r,
                    }
                  );
                }),
                (e.prototype.createEventFromTouch = function (e, t) {
                  var n,
                    r,
                    o = e.touches,
                    i = 0,
                    a = 0;
                  return (
                    o && o.length
                      ? ((n = o[0].pageX), (r = o[0].pageY))
                      : ((n = e.pageX), (r = e.pageY)),
                    t
                      ? ((this.origPageX = n), (this.origPageY = r))
                      : ((i = n - this.origPageX), (a = r - this.origPageY)),
                    {
                      origEvent: e,
                      isTouch: !0,
                      subjectEl: this.subjectEl,
                      pageX: n,
                      pageY: r,
                      deltaX: i,
                      deltaY: a,
                    }
                  );
                }),
                e
              );
            })(),
            Uu = (function () {
              function e() {
                (this.isVisible = !1),
                  (this.sourceEl = null),
                  (this.mirrorEl = null),
                  (this.sourceElRect = null),
                  (this.parentNode = document.body),
                  (this.zIndex = 9999),
                  (this.revertDuration = 0);
              }
              return (
                (e.prototype.start = function (e, t, n) {
                  (this.sourceEl = e),
                    (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
                    (this.origScreenX = t - window.pageXOffset),
                    (this.origScreenY = n - window.pageYOffset),
                    (this.deltaX = 0),
                    (this.deltaY = 0),
                    this.updateElPosition();
                }),
                (e.prototype.handleMove = function (e, t) {
                  (this.deltaX = e - window.pageXOffset - this.origScreenX),
                    (this.deltaY = t - window.pageYOffset - this.origScreenY),
                    this.updateElPosition();
                }),
                (e.prototype.setIsVisible = function (e) {
                  e
                    ? this.isVisible ||
                      (this.mirrorEl && (this.mirrorEl.style.display = ""),
                      (this.isVisible = e),
                      this.updateElPosition())
                    : this.isVisible &&
                      (this.mirrorEl && (this.mirrorEl.style.display = "none"),
                      (this.isVisible = e));
                }),
                (e.prototype.stop = function (e, t) {
                  var n = this,
                    r = function () {
                      n.cleanup(), t();
                    };
                  e &&
                  this.mirrorEl &&
                  this.isVisible &&
                  this.revertDuration &&
                  (this.deltaX || this.deltaY)
                    ? this.doRevertAnimation(r, this.revertDuration)
                    : setTimeout(r, 0);
                }),
                (e.prototype.doRevertAnimation = function (e, t) {
                  var n = this.mirrorEl,
                    r = this.sourceEl.getBoundingClientRect();
                  (n.style.transition = "top " + t + "ms,left " + t + "ms"),
                    z(n, { left: r.left, top: r.top }),
                    F(n, function () {
                      (n.style.transition = ""), e();
                    });
                }),
                (e.prototype.cleanup = function () {
                  this.mirrorEl && (N(this.mirrorEl), (this.mirrorEl = null)),
                    (this.sourceEl = null);
                }),
                (e.prototype.updateElPosition = function () {
                  this.sourceEl &&
                    this.isVisible &&
                    z(this.getMirrorEl(), {
                      left: this.sourceElRect.left + this.deltaX,
                      top: this.sourceElRect.top + this.deltaY,
                    });
                }),
                (e.prototype.getMirrorEl = function () {
                  var e = this.sourceElRect,
                    t = this.mirrorEl;
                  return (
                    t ||
                      ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)),
                      t.classList.add("fc-unselectable"),
                      t.classList.add("fc-event-dragging"),
                      z(t, {
                        position: "fixed",
                        zIndex: this.zIndex,
                        visibility: "",
                        boxSizing: "border-box",
                        width: e.right - e.left,
                        height: e.bottom - e.top,
                        right: "auto",
                        bottom: "auto",
                        margin: 0,
                      }),
                      this.parentNode.appendChild(t)),
                    t
                  );
                }),
                e
              );
            })(),
            Bu = (function (e) {
              function n(t, n) {
                var r = e.call(this) || this;
                return (
                  (r.handleScroll = function () {
                    (r.scrollTop = r.scrollController.getScrollTop()),
                      (r.scrollLeft = r.scrollController.getScrollLeft()),
                      r.handleScrollChange();
                  }),
                  (r.scrollController = t),
                  (r.doesListening = n),
                  (r.scrollTop = r.origScrollTop = t.getScrollTop()),
                  (r.scrollLeft = r.origScrollLeft = t.getScrollLeft()),
                  (r.scrollWidth = t.getScrollWidth()),
                  (r.scrollHeight = t.getScrollHeight()),
                  (r.clientWidth = t.getClientWidth()),
                  (r.clientHeight = t.getClientHeight()),
                  (r.clientRect = r.computeClientRect()),
                  r.doesListening &&
                    r.getEventTarget().addEventListener("scroll", r.handleScroll),
                  r
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.doesListening &&
                    this.getEventTarget().removeEventListener(
                      "scroll",
                      this.handleScroll
                    );
                }),
                (n.prototype.getScrollTop = function () {
                  return this.scrollTop;
                }),
                (n.prototype.getScrollLeft = function () {
                  return this.scrollLeft;
                }),
                (n.prototype.setScrollTop = function (e) {
                  this.scrollController.setScrollTop(e),
                    this.doesListening ||
                      ((this.scrollTop = Math.max(
                        Math.min(e, this.getMaxScrollTop()),
                        0
                      )),
                      this.handleScrollChange());
                }),
                (n.prototype.setScrollLeft = function (e) {
                  this.scrollController.setScrollLeft(e),
                    this.doesListening ||
                      ((this.scrollLeft = Math.max(
                        Math.min(e, this.getMaxScrollLeft()),
                        0
                      )),
                      this.handleScrollChange());
                }),
                (n.prototype.getClientWidth = function () {
                  return this.clientWidth;
                }),
                (n.prototype.getClientHeight = function () {
                  return this.clientHeight;
                }),
                (n.prototype.getScrollWidth = function () {
                  return this.scrollWidth;
                }),
                (n.prototype.getScrollHeight = function () {
                  return this.scrollHeight;
                }),
                (n.prototype.handleScrollChange = function () {}),
                n
              );
            })(vl),
            Wu = (function (e) {
              function n(t, n) {
                return e.call(this, new ml(t), n) || this;
              }
              return (
                t(n, e),
                (n.prototype.getEventTarget = function () {
                  return this.scrollController.el;
                }),
                (n.prototype.computeClientRect = function () {
                  return xr(this.scrollController.el);
                }),
                n
              );
            })(Bu),
            Vu = (function (e) {
              function n(t) {
                return e.call(this, new yl(), t) || this;
              }
              return (
                t(n, e),
                (n.prototype.getEventTarget = function () {
                  return window;
                }),
                (n.prototype.computeClientRect = function () {
                  return {
                    left: this.scrollLeft,
                    right: this.scrollLeft + this.clientWidth,
                    top: this.scrollTop,
                    bottom: this.scrollTop + this.clientHeight,
                  };
                }),
                (n.prototype.handleScrollChange = function () {
                  this.clientRect = this.computeClientRect();
                }),
                n
              );
            })(Bu),
            Fu = "function" == typeof performance ? performance.now : Date.now,
            Gu = (function () {
              function e() {
                var e = this;
                (this.isEnabled = !0),
                  (this.scrollQuery = [window, ".fc-scroller"]),
                  (this.edgeThreshold = 50),
                  (this.maxVelocity = 300),
                  (this.pointerScreenX = null),
                  (this.pointerScreenY = null),
                  (this.isAnimating = !1),
                  (this.scrollCaches = null),
                  (this.everMovedUp = !1),
                  (this.everMovedDown = !1),
                  (this.everMovedLeft = !1),
                  (this.everMovedRight = !1),
                  (this.animate = function () {
                    if (e.isAnimating) {
                      var t = e.computeBestEdge(
                        e.pointerScreenX + window.pageXOffset,
                        e.pointerScreenY + window.pageYOffset
                      );
                      if (t) {
                        var n = Fu();
                        e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                          e.requestAnimation(n);
                      } else e.isAnimating = !1;
                    }
                  });
              }
              return (
                (e.prototype.start = function (e, t) {
                  this.isEnabled &&
                    ((this.scrollCaches = this.buildCaches()),
                    (this.pointerScreenX = null),
                    (this.pointerScreenY = null),
                    (this.everMovedUp = !1),
                    (this.everMovedDown = !1),
                    (this.everMovedLeft = !1),
                    (this.everMovedRight = !1),
                    this.handleMove(e, t));
                }),
                (e.prototype.handleMove = function (e, t) {
                  if (this.isEnabled) {
                    var n = e - window.pageXOffset,
                      r = t - window.pageYOffset,
                      o =
                        null === this.pointerScreenY
                          ? 0
                          : r - this.pointerScreenY,
                      i =
                        null === this.pointerScreenX
                          ? 0
                          : n - this.pointerScreenX;
                    o < 0
                      ? (this.everMovedUp = !0)
                      : o > 0 && (this.everMovedDown = !0),
                      i < 0
                        ? (this.everMovedLeft = !0)
                        : i > 0 && (this.everMovedRight = !0),
                      (this.pointerScreenX = n),
                      (this.pointerScreenY = r),
                      this.isAnimating ||
                        ((this.isAnimating = !0), this.requestAnimation(Fu()));
                  }
                }),
                (e.prototype.stop = function () {
                  if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                      t[e].destroy();
                    }
                    this.scrollCaches = null;
                  }
                }),
                (e.prototype.requestAnimation = function (e) {
                  (this.msSinceRequest = e), requestAnimationFrame(this.animate);
                }),
                (e.prototype.handleSide = function (e, t) {
                  var n = e.scrollCache,
                    r = this.edgeThreshold,
                    o = r - e.distance,
                    i = ((o * o) / (r * r)) * this.maxVelocity * t,
                    a = 1;
                  switch (e.name) {
                    case "left":
                      a = -1;
                    case "right":
                      n.setScrollLeft(n.getScrollLeft() + i * a);
                      break;
                    case "top":
                      a = -1;
                    case "bottom":
                      n.setScrollTop(n.getScrollTop() + i * a);
                  }
                }),
                (e.prototype.computeBestEdge = function (e, t) {
                  for (
                    var n = this.edgeThreshold,
                      r = null,
                      o = 0,
                      i = this.scrollCaches;
                    o < i.length;
                    o++
                  ) {
                    var a = i[o],
                      s = a.clientRect,
                      l = e - s.left,
                      u = s.right - e,
                      c = t - s.top,
                      d = s.bottom - t;
                    l >= 0 &&
                      u >= 0 &&
                      c >= 0 &&
                      d >= 0 &&
                      (c <= n &&
                        this.everMovedUp &&
                        a.canScrollUp() &&
                        (!r || r.distance > c) &&
                        (r = { scrollCache: a, name: "top", distance: c }),
                      d <= n &&
                        this.everMovedDown &&
                        a.canScrollDown() &&
                        (!r || r.distance > d) &&
                        (r = { scrollCache: a, name: "bottom", distance: d }),
                      l <= n &&
                        this.everMovedLeft &&
                        a.canScrollLeft() &&
                        (!r || r.distance > l) &&
                        (r = { scrollCache: a, name: "left", distance: l }),
                      u <= n &&
                        this.everMovedRight &&
                        a.canScrollRight() &&
                        (!r || r.distance > u) &&
                        (r = { scrollCache: a, name: "right", distance: u }));
                  }
                  return r;
                }),
                (e.prototype.buildCaches = function () {
                  return this.queryScrollEls().map(function (e) {
                    return e === window ? new Vu(!1) : new Wu(e, !1);
                  });
                }),
                (e.prototype.queryScrollEls = function () {
                  for (
                    var e = [], t = 0, n = this.scrollQuery;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    "object" == typeof r
                      ? e.push(r)
                      : e.push.apply(
                          e,
                          Array.prototype.slice.call(document.querySelectorAll(r))
                        );
                  }
                  return e;
                }),
                e
              );
            })(),
            Yu = (function (e) {
              function n(t, n) {
                var r = e.call(this, t) || this;
                (r.delay = null),
                  (r.minDistance = 0),
                  (r.touchScrollAllowed = !0),
                  (r.mirrorNeedsRevert = !1),
                  (r.isInteracting = !1),
                  (r.isDragging = !1),
                  (r.isDelayEnded = !1),
                  (r.isDistanceSurpassed = !1),
                  (r.delayTimeoutId = null),
                  (r.onPointerDown = function (e) {
                    r.isDragging ||
                      ((r.isInteracting = !0),
                      (r.isDelayEnded = !1),
                      (r.isDistanceSurpassed = !1),
                      q(document.body),
                      $(document.body),
                      e.isTouch || e.origEvent.preventDefault(),
                      r.emitter.trigger("pointerdown", e),
                      r.isInteracting &&
                        !r.pointer.shouldIgnoreMove &&
                        (r.mirror.setIsVisible(!1),
                        r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                        r.startDelay(e),
                        r.minDistance || r.handleDistanceSurpassed(e)));
                  }),
                  (r.onPointerMove = function (e) {
                    if (r.isInteracting) {
                      if (
                        (r.emitter.trigger("pointermove", e),
                        !r.isDistanceSurpassed)
                      ) {
                        var t = r.minDistance,
                          n = void 0,
                          o = e.deltaX,
                          i = e.deltaY;
                        (n = o * o + i * i),
                          n >= t * t && r.handleDistanceSurpassed(e);
                      }
                      r.isDragging &&
                        ("scroll" !== e.origEvent.type &&
                          (r.mirror.handleMove(e.pageX, e.pageY),
                          r.autoScroller.handleMove(e.pageX, e.pageY)),
                        r.emitter.trigger("dragmove", e));
                    }
                  }),
                  (r.onPointerUp = function (e) {
                    r.isInteracting &&
                      ((r.isInteracting = !1),
                      X(document.body),
                      J(document.body),
                      r.emitter.trigger("pointerup", e),
                      r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)),
                      r.delayTimeoutId &&
                        (clearTimeout(r.delayTimeoutId),
                        (r.delayTimeoutId = null)));
                  });
                var o = (r.pointer = new ju(t));
                return (
                  o.emitter.on("pointerdown", r.onPointerDown),
                  o.emitter.on("pointermove", r.onPointerMove),
                  o.emitter.on("pointerup", r.onPointerUp),
                  n && (o.selector = n),
                  (r.mirror = new Uu()),
                  (r.autoScroller = new Gu()),
                  r
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.pointer.destroy(), this.onPointerUp({});
                }),
                (n.prototype.startDelay = function (e) {
                  var t = this;
                  "number" == typeof this.delay
                    ? (this.delayTimeoutId = setTimeout(function () {
                        (t.delayTimeoutId = null), t.handleDelayEnd(e);
                      }, this.delay))
                    : this.handleDelayEnd(e);
                }),
                (n.prototype.handleDelayEnd = function (e) {
                  (this.isDelayEnded = !0), this.tryStartDrag(e);
                }),
                (n.prototype.handleDistanceSurpassed = function (e) {
                  (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
                }),
                (n.prototype.tryStartDrag = function (e) {
                  this.isDelayEnded &&
                    this.isDistanceSurpassed &&
                    ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
                      ((this.isDragging = !0),
                      (this.mirrorNeedsRevert = !1),
                      this.autoScroller.start(e.pageX, e.pageY),
                      this.emitter.trigger("dragstart", e),
                      !1 === this.touchScrollAllowed &&
                        this.pointer.cancelTouchScroll()));
                }),
                (n.prototype.tryStopDrag = function (e) {
                  this.mirror.stop(
                    this.mirrorNeedsRevert,
                    this.stopDrag.bind(this, e)
                  );
                }),
                (n.prototype.stopDrag = function (e) {
                  (this.isDragging = !1), this.emitter.trigger("dragend", e);
                }),
                (n.prototype.setIgnoreMove = function (e) {
                  this.pointer.shouldIgnoreMove = e;
                }),
                (n.prototype.setMirrorIsVisible = function (e) {
                  this.mirror.setIsVisible(e);
                }),
                (n.prototype.setMirrorNeedsRevert = function (e) {
                  this.mirrorNeedsRevert = e;
                }),
                (n.prototype.setAutoScrollEnabled = function (e) {
                  this.autoScroller.isEnabled = e;
                }),
                n
              );
            })(au),
            Zu = (function () {
              function e(e) {
                (this.origRect = kr(e)),
                  (this.scrollCaches = Ir(e).map(function (e) {
                    return new Wu(e, !0);
                  }));
              }
              return (
                (e.prototype.destroy = function () {
                  for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy();
                  }
                }),
                (e.prototype.computeLeft = function () {
                  for (
                    var e = this.origRect.left, t = 0, n = this.scrollCaches;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft();
                  }
                  return e;
                }),
                (e.prototype.computeTop = function () {
                  for (
                    var e = this.origRect.top, t = 0, n = this.scrollCaches;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop();
                  }
                  return e;
                }),
                (e.prototype.isWithinClipping = function (e, t) {
                  for (
                    var n = { left: e, top: t }, r = 0, o = this.scrollCaches;
                    r < o.length;
                    r++
                  ) {
                    var i = o[r];
                    if (!Xi(i.getEventTarget()) && !lr(n, i.clientRect))
                      return !1;
                  }
                  return !0;
                }),
                e
              );
            })(),
            qu = (function () {
              function e(e, t) {
                var n = this;
                (this.useSubjectCenter = !1),
                  (this.requireInitial = !0),
                  (this.initialHit = null),
                  (this.movingHit = null),
                  (this.finalHit = null),
                  (this.handlePointerDown = function (e) {
                    var t = n.dragging;
                    (n.initialHit = null),
                      (n.movingHit = null),
                      (n.finalHit = null),
                      n.prepareHits(),
                      n.processFirstCoord(e),
                      n.initialHit || !n.requireInitial
                        ? (t.setIgnoreMove(!1),
                          n.emitter.trigger("pointerdown", e))
                        : t.setIgnoreMove(!0);
                  }),
                  (this.handleDragStart = function (e) {
                    n.emitter.trigger("dragstart", e), n.handleMove(e, !0);
                  }),
                  (this.handleDragMove = function (e) {
                    n.emitter.trigger("dragmove", e), n.handleMove(e);
                  }),
                  (this.handlePointerUp = function (e) {
                    n.releaseHits(), n.emitter.trigger("pointerup", e);
                  }),
                  (this.handleDragEnd = function (e) {
                    n.movingHit && n.emitter.trigger("hitupdate", null, !0, e),
                      (n.finalHit = n.movingHit),
                      (n.movingHit = null),
                      n.emitter.trigger("dragend", e);
                  }),
                  (this.droppableStore = t),
                  e.emitter.on("pointerdown", this.handlePointerDown),
                  e.emitter.on("dragstart", this.handleDragStart),
                  e.emitter.on("dragmove", this.handleDragMove),
                  e.emitter.on("pointerup", this.handlePointerUp),
                  e.emitter.on("dragend", this.handleDragEnd),
                  (this.dragging = e),
                  (this.emitter = new hl());
              }
              return (
                (e.prototype.processFirstCoord = function (e) {
                  var t,
                    n = { left: e.pageX, top: e.pageY },
                    r = n,
                    o = e.subjectEl;
                  o !== document && ((t = kr(o)), (r = dr(r, t)));
                  var i = (this.initialHit = this.queryHitForOffset(
                    r.left,
                    r.top
                  ));
                  if (i) {
                    if (this.useSubjectCenter && t) {
                      var a = ur(t, i.rect);
                      a && (r = fr(a));
                    }
                    this.coordAdjust = pr(r, n);
                  } else this.coordAdjust = { left: 0, top: 0 };
                }),
                (e.prototype.handleMove = function (e, t) {
                  var n = this.queryHitForOffset(
                    e.pageX + this.coordAdjust.left,
                    e.pageY + this.coordAdjust.top
                  );
                  (!t && $i(this.movingHit, n)) ||
                    ((this.movingHit = n),
                    this.emitter.trigger("hitupdate", n, !1, e));
                }),
                (e.prototype.prepareHits = function () {
                  this.offsetTrackers = Ne(this.droppableStore, function (e) {
                    return e.component.prepareHits(), new Zu(e.el);
                  });
                }),
                (e.prototype.releaseHits = function () {
                  var e = this.offsetTrackers;
                  for (var t in e) e[t].destroy();
                  this.offsetTrackers = {};
                }),
                (e.prototype.queryHitForOffset = function (e, t) {
                  var n = this,
                    r = n.droppableStore,
                    o = n.offsetTrackers,
                    i = null;
                  for (var a in r) {
                    var s = r[a].component,
                      l = o[a];
                    if (l && l.isWithinClipping(e, t)) {
                      var u = l.computeLeft(),
                        c = l.computeTop(),
                        d = e - u,
                        f = t - c,
                        p = l.origRect,
                        h = p.right - p.left,
                        g = p.bottom - p.top;
                      if (d >= 0 && d < h && f >= 0 && f < g) {
                        var v = s.queryHit(d, f, h, g),
                          m = s.context.getCurrentData().dateProfile;
                        v &&
                          un(m.activeRange, v.dateSpan.range) &&
                          (!i || v.layer > i.layer) &&
                          ((v.rect.left += u),
                          (v.rect.right += u),
                          (v.rect.top += c),
                          (v.rect.bottom += c),
                          (i = v));
                      }
                    }
                  }
                  return i;
                }),
                e
              );
            })(),
            Xu = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                (n.handlePointerDown = function (e) {
                  var t = n.dragging,
                    r = e.origEvent.target;
                  t.setIgnoreMove(!n.component.isValidDateDownEl(r));
                }),
                  (n.handleDragEnd = function (e) {
                    var t = n.component;
                    if (!n.dragging.pointer.wasTouchScroll) {
                      var r = n.hitDragging,
                        o = r.initialHit,
                        i = r.finalHit;
                      if (o && i && $i(o, i)) {
                        var a = t.context,
                          s = vs(vs({}, Ji(o.dateSpan, a)), {
                            dayEl: o.dayEl,
                            jsEvent: e.origEvent,
                            view: a.viewApi || a.calendarApi.view,
                          });
                        a.emitter.trigger("dateClick", s);
                      }
                    }
                  }),
                  (n.dragging = new Yu(t.el)),
                  (n.dragging.autoScroller.isEnabled = !1);
                var r = (n.hitDragging = new qu(n.dragging, gi(t)));
                return (
                  r.emitter.on("pointerdown", n.handlePointerDown),
                  r.emitter.on("dragend", n.handleDragEnd),
                  n
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.dragging.destroy();
                }),
                n
              );
            })(ou),
            $u = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                (n.dragSelection = null),
                  (n.handlePointerDown = function (e) {
                    var t = n,
                      r = t.component,
                      o = t.dragging,
                      i = r.context.options,
                      a = i.selectable && r.isValidDateDownEl(e.origEvent.target);
                    o.setIgnoreMove(!a), (o.delay = e.isTouch ? Qi(r) : null);
                  }),
                  (n.handleDragStart = function (e) {
                    n.component.context.calendarApi.unselect(e);
                  }),
                  (n.handleHitUpdate = function (e, t) {
                    var r = n.component.context,
                      o = null,
                      i = !1;
                    e &&
                      (((o = ea(
                        n.hitDragging.initialHit,
                        e,
                        r.pluginHooks.dateSelectionTransformers
                      )) &&
                        n.component.isDateSelectionValid(o)) ||
                        ((i = !0), (o = null))),
                      o
                        ? r.dispatch({ type: "SELECT_DATES", selection: o })
                        : t || r.dispatch({ type: "UNSELECT_DATES" }),
                      i ? Y() : Z(),
                      t || (n.dragSelection = o);
                  }),
                  (n.handlePointerUp = function (e) {
                    n.dragSelection &&
                      (On(n.dragSelection, e, n.component.context),
                      (n.dragSelection = null));
                  });
                var r = t.component,
                  o = r.context.options,
                  i = (n.dragging = new Yu(t.el));
                (i.touchScrollAllowed = !1),
                  (i.minDistance = o.selectMinDistance || 0),
                  (i.autoScroller.isEnabled = o.dragScroll);
                var a = (n.hitDragging = new qu(n.dragging, gi(t)));
                return (
                  a.emitter.on("pointerdown", n.handlePointerDown),
                  a.emitter.on("dragstart", n.handleDragStart),
                  a.emitter.on("hitupdate", n.handleHitUpdate),
                  a.emitter.on("pointerup", n.handlePointerUp),
                  n
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.dragging.destroy();
                }),
                n
              );
            })(ou),
            Ju = (function (e) {
              function n(t) {
                var r = e.call(this, t) || this;
                (r.subjectEl = null),
                  (r.subjectSeg = null),
                  (r.isDragging = !1),
                  (r.eventRange = null),
                  (r.relevantEvents = null),
                  (r.receivingContext = null),
                  (r.validMutation = null),
                  (r.mutatedRelevantEvents = null),
                  (r.handlePointerDown = function (e) {
                    var t = e.origEvent.target,
                      n = r,
                      o = n.component,
                      i = n.dragging,
                      a = i.mirror,
                      s = o.context.options,
                      l = o.context;
                    r.subjectEl = e.subjectEl;
                    var u = (r.subjectSeg = gn(e.subjectEl)),
                      c = (r.eventRange = u.eventRange),
                      d = c.instance.instanceId;
                    (r.relevantEvents = Ot(l.getCurrentData().eventStore, d)),
                      (i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance),
                      (i.delay =
                        e.isTouch && d !== o.props.eventSelection ? na(o) : null),
                      s.fixedMirrorParent
                        ? (a.parentNode = s.fixedMirrorParent)
                        : (a.parentNode = H(t, ".fc")),
                      (a.revertDuration = s.dragRevertDuration);
                    var f = o.isValidSegDownEl(t) && !H(t, ".fc-event-resizer");
                    i.setIgnoreMove(!f),
                      (r.isDragging =
                        f &&
                        e.subjectEl.classList.contains("fc-event-draggable"));
                  }),
                  (r.handleDragStart = function (e) {
                    var t = r.component.context,
                      n = r.eventRange,
                      o = n.instance.instanceId;
                    e.isTouch
                      ? o !== r.component.props.eventSelection &&
                        t.dispatch({ type: "SELECT_EVENT", eventInstanceId: o })
                      : t.dispatch({ type: "UNSELECT_EVENT" }),
                      r.isDragging &&
                        (t.calendarApi.unselect(e),
                        t.emitter.trigger("eventDragStart", {
                          el: r.subjectEl,
                          event: new tl(t, n.def, n.instance),
                          jsEvent: e.origEvent,
                          view: t.viewApi,
                        }));
                  }),
                  (r.handleHitUpdate = function (e, t) {
                    if (r.isDragging) {
                      var n = r.relevantEvents,
                        o = r.hitDragging.initialHit,
                        i = r.component.context,
                        a = null,
                        s = null,
                        l = null,
                        u = !1,
                        c = {
                          affectedEvents: n,
                          mutatedEvents: Lt(),
                          isEvent: !0,
                        };
                      if (e) {
                        var d = e.component;
                        a = d.context;
                        var f = a.options;
                        i === a || (f.editable && f.droppable)
                          ? (s = ta(
                              o,
                              e,
                              a.getCurrentData().pluginHooks
                                .eventDragMutationMassagers
                            )) &&
                            ((l = jn(n, a.getCurrentData().eventUiBases, s, a)),
                            (c.mutatedEvents = l),
                            d.isInteractionValid(c) ||
                              ((u = !0),
                              (s = null),
                              (l = null),
                              (c.mutatedEvents = Lt())))
                          : (a = null);
                      }
                      r.displayDrag(a, c),
                        u ? Y() : Z(),
                        t ||
                          (i === a && $i(o, e) && (s = null),
                          r.dragging.setMirrorNeedsRevert(!s),
                          r.dragging.setMirrorIsVisible(
                            !e || !document.querySelector(".fc-event-mirror")
                          ),
                          (r.receivingContext = a),
                          (r.validMutation = s),
                          (r.mutatedRelevantEvents = l));
                    }
                  }),
                  (r.handlePointerUp = function () {
                    r.isDragging || r.cleanup();
                  }),
                  (r.handleDragEnd = function (e) {
                    if (r.isDragging) {
                      var t = r.component.context,
                        n = t.viewApi,
                        o = r,
                        i = o.receivingContext,
                        a = o.validMutation,
                        s = r.eventRange.def,
                        l = r.eventRange.instance,
                        u = new tl(t, s, l),
                        c = r.relevantEvents,
                        d = r.mutatedRelevantEvents,
                        f = r.hitDragging.finalHit;
                      if (
                        (r.clearDrag(),
                        t.emitter.trigger("eventDragStop", {
                          el: r.subjectEl,
                          event: u,
                          jsEvent: e.origEvent,
                          view: n,
                        }),
                        a)
                      ) {
                        if (i === t) {
                          var p = new tl(
                            t,
                            d.defs[s.defId],
                            l ? d.instances[l.instanceId] : null
                          );
                          t.dispatch({ type: "MERGE_EVENTS", eventStore: d });
                          for (
                            var h = {
                                oldEvent: u,
                                event: p,
                                relatedEvents: Xn(d, t, l),
                                revert: function () {
                                  t.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: c,
                                  });
                                },
                              },
                              g = {},
                              v = 0,
                              m =
                                t.getCurrentData().pluginHooks
                                  .eventDropTransformers;
                            v < m.length;
                            v++
                          ) {
                            var y = m[v];
                            vs(g, y(a, t));
                          }
                          t.emitter.trigger(
                            "eventDrop",
                            vs(vs(vs({}, h), g), {
                              el: e.subjectEl,
                              delta: a.datesDelta,
                              jsEvent: e.origEvent,
                              view: n,
                            })
                          ),
                            t.emitter.trigger("eventChange", h);
                        } else if (i) {
                          var b = {
                            event: u,
                            relatedEvents: Xn(c, t, l),
                            revert: function () {
                              t.dispatch({ type: "MERGE_EVENTS", eventStore: c });
                            },
                          };
                          t.emitter.trigger(
                            "eventLeave",
                            vs(vs({}, b), { draggedEl: e.subjectEl, view: n })
                          ),
                            t.dispatch({ type: "REMOVE_EVENTS", eventStore: c }),
                            t.emitter.trigger("eventRemove", b);
                          var C = d.defs[s.defId],
                            w = d.instances[l.instanceId],
                            S = new tl(i, C, w);
                          i.dispatch({ type: "MERGE_EVENTS", eventStore: d });
                          var E = {
                            event: S,
                            relatedEvents: Xn(d, i, w),
                            revert: function () {
                              i.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: d,
                              });
                            },
                          };
                          i.emitter.trigger("eventAdd", E),
                            e.isTouch &&
                              i.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: l.instanceId,
                              }),
                            i.emitter.trigger(
                              "drop",
                              vs(vs({}, Ji(f.dateSpan, i)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: f.component.context.viewApi,
                              })
                            ),
                            i.emitter.trigger(
                              "eventReceive",
                              vs(vs({}, E), {
                                draggedEl: e.subjectEl,
                                view: f.component.context.viewApi,
                              })
                            );
                        }
                      } else t.emitter.trigger("_noEventDrop");
                    }
                    r.cleanup();
                  });
                var o = r.component,
                  i = o.context.options,
                  a = (r.dragging = new Yu(t.el));
                (a.pointer.selector = n.SELECTOR),
                  (a.touchScrollAllowed = !1),
                  (a.autoScroller.isEnabled = i.dragScroll);
                var s = (r.hitDragging = new qu(r.dragging, iu));
                return (
                  (s.useSubjectCenter = t.useEventCenter),
                  s.emitter.on("pointerdown", r.handlePointerDown),
                  s.emitter.on("dragstart", r.handleDragStart),
                  s.emitter.on("hitupdate", r.handleHitUpdate),
                  s.emitter.on("pointerup", r.handlePointerUp),
                  s.emitter.on("dragend", r.handleDragEnd),
                  r
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.dragging.destroy();
                }),
                (n.prototype.displayDrag = function (e, t) {
                  var n = this.component.context,
                    r = this.receivingContext;
                  r &&
                    r !== e &&
                    (r === n
                      ? r.dispatch({
                          type: "SET_EVENT_DRAG",
                          state: {
                            affectedEvents: t.affectedEvents,
                            mutatedEvents: Lt(),
                            isEvent: !0,
                          },
                        })
                      : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
                    e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
                }),
                (n.prototype.clearDrag = function () {
                  var e = this.component.context,
                    t = this.receivingContext;
                  t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
                    e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
                }),
                (n.prototype.cleanup = function () {
                  (this.subjectSeg = null),
                    (this.isDragging = !1),
                    (this.eventRange = null),
                    (this.relevantEvents = null),
                    (this.receivingContext = null),
                    (this.validMutation = null),
                    (this.mutatedRelevantEvents = null);
                }),
                (n.SELECTOR = ".fc-event-draggable, .fc-event-resizable"),
                n
              );
            })(ou),
            Ku = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                (n.draggingSegEl = null),
                  (n.draggingSeg = null),
                  (n.eventRange = null),
                  (n.relevantEvents = null),
                  (n.validMutation = null),
                  (n.mutatedRelevantEvents = null),
                  (n.handlePointerDown = function (e) {
                    var t = n.component,
                      r = n.querySegEl(e),
                      o = gn(r),
                      i = (n.eventRange = o.eventRange);
                    (n.dragging.minDistance =
                      t.context.options.eventDragMinDistance),
                      n.dragging.setIgnoreMove(
                        !n.component.isValidSegDownEl(e.origEvent.target) ||
                          (e.isTouch &&
                            n.component.props.eventSelection !==
                              i.instance.instanceId)
                      );
                  }),
                  (n.handleDragStart = function (e) {
                    var t = n.component.context,
                      r = n.eventRange;
                    n.relevantEvents = Ot(
                      t.getCurrentData().eventStore,
                      n.eventRange.instance.instanceId
                    );
                    var o = n.querySegEl(e);
                    (n.draggingSegEl = o),
                      (n.draggingSeg = gn(o)),
                      t.calendarApi.unselect(),
                      t.emitter.trigger("eventResizeStart", {
                        el: o,
                        event: new tl(t, r.def, r.instance),
                        jsEvent: e.origEvent,
                        view: t.viewApi,
                      });
                  }),
                  (n.handleHitUpdate = function (e, t, r) {
                    var o = n.component.context,
                      i = n.relevantEvents,
                      a = n.hitDragging.initialHit,
                      s = n.eventRange.instance,
                      l = null,
                      u = null,
                      c = !1,
                      d = { affectedEvents: i, mutatedEvents: Lt(), isEvent: !0 };
                    e &&
                      (l = ra(
                        a,
                        e,
                        r.subjectEl.classList.contains("fc-event-resizer-start"),
                        s.range,
                        o.pluginHooks.eventResizeJoinTransforms
                      )),
                      l &&
                        ((u = jn(i, o.getCurrentData().eventUiBases, l, o)),
                        (d.mutatedEvents = u),
                        n.component.isInteractionValid(d) ||
                          ((c = !0),
                          (l = null),
                          (u = null),
                          (d.mutatedEvents = null))),
                      u
                        ? o.dispatch({ type: "SET_EVENT_RESIZE", state: d })
                        : o.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                      c ? Y() : Z(),
                      t ||
                        (l && $i(a, e) && (l = null),
                        (n.validMutation = l),
                        (n.mutatedRelevantEvents = u));
                  }),
                  (n.handleDragEnd = function (e) {
                    var t = n.component.context,
                      r = n.eventRange.def,
                      o = n.eventRange.instance,
                      i = new tl(t, r, o),
                      a = n.relevantEvents,
                      s = n.mutatedRelevantEvents;
                    if (
                      (t.emitter.trigger("eventResizeStop", {
                        el: n.draggingSegEl,
                        event: i,
                        jsEvent: e.origEvent,
                        view: t.viewApi,
                      }),
                      n.validMutation)
                    ) {
                      var l = new tl(
                        t,
                        s.defs[r.defId],
                        o ? s.instances[o.instanceId] : null
                      );
                      t.dispatch({ type: "MERGE_EVENTS", eventStore: s });
                      var u = {
                        oldEvent: i,
                        event: l,
                        relatedEvents: Xn(s, t, o),
                        revert: function () {
                          t.dispatch({ type: "MERGE_EVENTS", eventStore: a });
                        },
                      };
                      t.emitter.trigger(
                        "eventResize",
                        vs(vs({}, u), {
                          el: n.draggingSegEl,
                          startDelta: n.validMutation.startDelta || Ge(0),
                          endDelta: n.validMutation.endDelta || Ge(0),
                          jsEvent: e.origEvent,
                          view: t.viewApi,
                        })
                      ),
                        t.emitter.trigger("eventChange", u);
                    } else t.emitter.trigger("_noEventResize");
                    (n.draggingSeg = null),
                      (n.relevantEvents = null),
                      (n.validMutation = null);
                  });
                var r = t.component,
                  o = (n.dragging = new Yu(t.el));
                (o.pointer.selector = ".fc-event-resizer"),
                  (o.touchScrollAllowed = !1),
                  (o.autoScroller.isEnabled = r.context.options.dragScroll);
                var i = (n.hitDragging = new qu(n.dragging, gi(t)));
                return (
                  i.emitter.on("pointerdown", n.handlePointerDown),
                  i.emitter.on("dragstart", n.handleDragStart),
                  i.emitter.on("hitupdate", n.handleHitUpdate),
                  i.emitter.on("dragend", n.handleDragEnd),
                  n
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.dragging.destroy();
                }),
                (n.prototype.querySegEl = function (e) {
                  return H(e.subjectEl, ".fc-event");
                }),
                n
              );
            })(ou),
            Qu = (function () {
              function e(e) {
                var t = this;
                (this.context = e),
                  (this.isRecentPointerDateSelect = !1),
                  (this.matchesCancel = !1),
                  (this.matchesEvent = !1),
                  (this.onSelect = function (e) {
                    e.jsEvent && (t.isRecentPointerDateSelect = !0);
                  }),
                  (this.onDocumentPointerDown = function (e) {
                    var n = t.context.options.unselectCancel,
                      r = e.origEvent.target;
                    (t.matchesCancel = !!H(r, n)),
                      (t.matchesEvent = !!H(r, Ju.SELECTOR));
                  }),
                  (this.onDocumentPointerUp = function (e) {
                    var n = t.context,
                      r = t.documentPointer,
                      o = n.getCurrentData();
                    if (!r.wasTouchScroll) {
                      if (o.dateSelection && !t.isRecentPointerDateSelect) {
                        var i = n.options.unselectAuto;
                        !i || (i && t.matchesCancel) || n.calendarApi.unselect(e);
                      }
                      o.eventSelection &&
                        !t.matchesEvent &&
                        n.dispatch({ type: "UNSELECT_EVENT" });
                    }
                    t.isRecentPointerDateSelect = !1;
                  });
                var n = (this.documentPointer = new ju(document));
                (n.shouldIgnoreMove = !0),
                  (n.shouldWatchScroll = !1),
                  n.emitter.on("pointerdown", this.onDocumentPointerDown),
                  n.emitter.on("pointerup", this.onDocumentPointerUp),
                  e.emitter.on("select", this.onSelect);
              }
              return (
                (e.prototype.destroy = function () {
                  this.context.emitter.off("select", this.onSelect),
                    this.documentPointer.destroy();
                }),
                e
              );
            })(),
            ec = { fixedMirrorParent: Pt },
            tc = {
              dateClick: Pt,
              eventDragStart: Pt,
              eventDragStop: Pt,
              eventDrop: Pt,
              eventResizeStart: Pt,
              eventResizeStop: Pt,
              eventResize: Pt,
              drop: Pt,
              eventReceive: Pt,
              eventLeave: Pt,
            },
            nc = (function () {
              function e(e, t) {
                var n = this;
                (this.receivingContext = null),
                  (this.droppableEvent = null),
                  (this.suppliedDragMeta = null),
                  (this.dragMeta = null),
                  (this.handleDragStart = function (e) {
                    n.dragMeta = n.buildDragMeta(e.subjectEl);
                  }),
                  (this.handleHitUpdate = function (e, t, r) {
                    var o = n.hitDragging.dragging,
                      i = null,
                      a = null,
                      s = !1,
                      l = {
                        affectedEvents: Lt(),
                        mutatedEvents: Lt(),
                        isEvent: n.dragMeta.create,
                      };
                    e &&
                      ((i = e.component.context),
                      n.canDropElOnCalendar(r.subjectEl, i) &&
                        ((a = oa(e.dateSpan, n.dragMeta, i)),
                        (l.mutatedEvents = Ht(a)),
                        (s = !Zr(l, i)) &&
                          ((l.mutatedEvents = Lt()), (a = null)))),
                      n.displayDrag(i, l),
                      o.setMirrorIsVisible(
                        t || !a || !document.querySelector(".fc-event-mirror")
                      ),
                      s ? Y() : Z(),
                      t ||
                        (o.setMirrorNeedsRevert(!a),
                        (n.receivingContext = i),
                        (n.droppableEvent = a));
                  }),
                  (this.handleDragEnd = function (e) {
                    var t = n,
                      r = t.receivingContext,
                      o = t.droppableEvent;
                    if ((n.clearDrag(), r && o)) {
                      var i = n.hitDragging.finalHit,
                        a = i.component.context.viewApi,
                        s = n.dragMeta;
                      if (
                        (r.emitter.trigger(
                          "drop",
                          vs(vs({}, Ji(i.dateSpan, r)), {
                            draggedEl: e.subjectEl,
                            jsEvent: e.origEvent,
                            view: a,
                          })
                        ),
                        s.create)
                      ) {
                        var l = Ht(o);
                        r.dispatch({ type: "MERGE_EVENTS", eventStore: l }),
                          e.isTouch &&
                            r.dispatch({
                              type: "SELECT_EVENT",
                              eventInstanceId: o.instance.instanceId,
                            }),
                          r.emitter.trigger("eventReceive", {
                            event: new tl(r, o.def, o.instance),
                            relatedEvents: [],
                            revert: function () {
                              r.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: l,
                              });
                            },
                            draggedEl: e.subjectEl,
                            view: a,
                          });
                      }
                    }
                    (n.receivingContext = null), (n.droppableEvent = null);
                  });
                var r = (this.hitDragging = new qu(e, iu));
                (r.requireInitial = !1),
                  r.emitter.on("dragstart", this.handleDragStart),
                  r.emitter.on("hitupdate", this.handleHitUpdate),
                  r.emitter.on("dragend", this.handleDragEnd),
                  (this.suppliedDragMeta = t);
              }
              return (
                (e.prototype.buildDragMeta = function (e) {
                  return "object" == typeof this.suppliedDragMeta
                    ? vi(this.suppliedDragMeta)
                    : "function" == typeof this.suppliedDragMeta
                    ? vi(this.suppliedDragMeta(e))
                    : ia(e);
                }),
                (e.prototype.displayDrag = function (e, t) {
                  var n = this.receivingContext;
                  n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
                    e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
                }),
                (e.prototype.clearDrag = function () {
                  this.receivingContext &&
                    this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
                }),
                (e.prototype.canDropElOnCalendar = function (e, t) {
                  var n = t.options.dropAccept;
                  return "function" == typeof n
                    ? n.call(t.calendarApi, e)
                    : "string" != typeof n || !n || Boolean(O(e, n));
                }),
                e
              );
            })();
          su.dataAttrPrefix = "";
          var rc = (function () {
              function e(e, t) {
                var n = this;
                void 0 === t && (t = {}),
                  (this.handlePointerDown = function (e) {
                    var t = n.dragging,
                      r = n.settings,
                      o = r.minDistance,
                      i = r.longPressDelay;
                    (t.minDistance =
                      null != o ? o : e.isTouch ? 0 : Bs.eventDragMinDistance),
                      (t.delay = e.isTouch
                        ? null != i
                          ? i
                          : Bs.longPressDelay
                        : 0);
                  }),
                  (this.handleDragStart = function (e) {
                    e.isTouch &&
                      n.dragging.delay &&
                      e.subjectEl.classList.contains("fc-event") &&
                      n.dragging.mirror
                        .getMirrorEl()
                        .classList.add("fc-event-selected");
                  }),
                  (this.settings = t);
                var r = (this.dragging = new Yu(e));
                (r.touchScrollAllowed = !1),
                  null != t.itemSelector && (r.pointer.selector = t.itemSelector),
                  null != t.appendTo && (r.mirror.parentNode = t.appendTo),
                  r.emitter.on("pointerdown", this.handlePointerDown),
                  r.emitter.on("dragstart", this.handleDragStart),
                  new nc(r, t.eventData);
              }
              return (
                (e.prototype.destroy = function () {
                  this.dragging.destroy();
                }),
                e
              );
            })(),
            oc = (function (e) {
              function n(t) {
                var n = e.call(this, t) || this;
                (n.shouldIgnoreMove = !1),
                  (n.mirrorSelector = ""),
                  (n.currentMirrorEl = null),
                  (n.handlePointerDown = function (e) {
                    n.emitter.trigger("pointerdown", e),
                      n.shouldIgnoreMove || n.emitter.trigger("dragstart", e);
                  }),
                  (n.handlePointerMove = function (e) {
                    n.shouldIgnoreMove || n.emitter.trigger("dragmove", e);
                  }),
                  (n.handlePointerUp = function (e) {
                    n.emitter.trigger("pointerup", e),
                      n.shouldIgnoreMove || n.emitter.trigger("dragend", e);
                  });
                var r = (n.pointer = new ju(t));
                return (
                  r.emitter.on("pointerdown", n.handlePointerDown),
                  r.emitter.on("pointermove", n.handlePointerMove),
                  r.emitter.on("pointerup", n.handlePointerUp),
                  n
                );
              }
              return (
                t(n, e),
                (n.prototype.destroy = function () {
                  this.pointer.destroy();
                }),
                (n.prototype.setIgnoreMove = function (e) {
                  this.shouldIgnoreMove = e;
                }),
                (n.prototype.setMirrorIsVisible = function (e) {
                  if (e)
                    this.currentMirrorEl &&
                      ((this.currentMirrorEl.style.visibility = ""),
                      (this.currentMirrorEl = null));
                  else {
                    var t = this.mirrorSelector
                      ? document.querySelector(this.mirrorSelector)
                      : null;
                    t &&
                      ((this.currentMirrorEl = t),
                      (t.style.visibility = "hidden"));
                  }
                }),
                n
              );
            })(au),
            ic = (function () {
              function e(e, t) {
                var n = document;
                e === document || e instanceof Element
                  ? ((n = e), (t = t || {}))
                  : (t = e || {});
                var r = (this.dragging = new oc(n));
                "string" == typeof t.itemSelector
                  ? (r.pointer.selector = t.itemSelector)
                  : n === document && (r.pointer.selector = "[data-event]"),
                  "string" == typeof t.mirrorSelector &&
                    (r.mirrorSelector = t.mirrorSelector),
                  new nc(r, t.eventData);
              }
              return (
                (e.prototype.destroy = function () {
                  this.dragging.destroy();
                }),
                e
              );
            })(),
            ac = ro({
              componentInteractions: [Xu, $u, Ju, Ku],
              calendarInteractions: [Qu],
              elementDraggingImpl: Yu,
              optionRefiners: ec,
              listenerRefiners: tc,
            }),
            sc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.headerElRef = El()), t;
              }
              return (
                t(n, e),
                (n.prototype.renderSimpleLayout = function (e, t) {
                  var n = this,
                    r = n.props,
                    o = n.context,
                    i = [],
                    a = Oi(o.options);
                  return (
                    e &&
                      i.push({
                        type: "header",
                        key: "header",
                        isSticky: a,
                        chunk: {
                          elRef: this.headerElRef,
                          tableClassName: "fc-col-header",
                          rowContent: e,
                        },
                      }),
                    i.push({
                      type: "body",
                      key: "body",
                      liquid: !0,
                      chunk: { content: t },
                    }),
                    wl(zl, { viewSpec: o.viewSpec }, function (e, t) {
                      return wl(
                        "div",
                        { ref: e, className: ["fc-daygrid"].concat(t).join(" ") },
                        wl(Ru, {
                          liquid: !r.isHeightAuto && !r.forPrint,
                          collapsibleWidth: r.forPrint,
                          cols: [],
                          sections: i,
                        })
                      );
                    })
                  );
                }),
                (n.prototype.renderHScrollLayout = function (e, t, n, r) {
                  var o = this.context.pluginHooks.scrollGridImpl;
                  if (!o) throw new Error("No ScrollGrid implementation");
                  var i = this,
                    a = i.props,
                    s = i.context,
                    l = !a.forPrint && Oi(s.options),
                    u = !a.forPrint && Ai(s.options),
                    c = [];
                  return (
                    e &&
                      c.push({
                        type: "header",
                        key: "header",
                        isSticky: l,
                        chunks: [
                          {
                            key: "main",
                            elRef: this.headerElRef,
                            tableClassName: "fc-col-header",
                            rowContent: e,
                          },
                        ],
                      }),
                    c.push({
                      type: "body",
                      key: "body",
                      liquid: !0,
                      chunks: [{ key: "main", content: t }],
                    }),
                    u &&
                      c.push({
                        type: "footer",
                        key: "footer",
                        isSticky: !0,
                        chunks: [{ key: "main", content: Hi }],
                      }),
                    wl(zl, { viewSpec: s.viewSpec }, function (e, t) {
                      return wl(
                        "div",
                        { ref: e, className: ["fc-daygrid"].concat(t).join(" ") },
                        wl(o, {
                          liquid: !a.isHeightAuto && !a.forPrint,
                          collapsibleWidth: a.forPrint,
                          colGroups: [{ cols: [{ span: n, minWidth: r }] }],
                          sections: c,
                        })
                      );
                    })
                  );
                }),
                n
              );
            })(Pl),
            lc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props,
                    t = this.context.options.navLinks
                      ? { "data-navlink": Cr(e.date), tabIndex: 0 }
                      : {};
                  return wl(
                    Iu,
                    {
                      date: e.date,
                      dateProfile: e.dateProfile,
                      todayRange: e.todayRange,
                      showDayNumber: e.showDayNumber,
                      extraHookProps: e.extraHookProps,
                      defaultContent: ca,
                    },
                    function (n, r) {
                      return (
                        (r || e.forceDayTop) &&
                        wl(
                          "div",
                          { className: "fc-daygrid-day-top", ref: n },
                          wl(
                            "a",
                            vs({ className: "fc-daygrid-day-number" }, t),
                            r || wl(Dl, null, " ")
                          )
                        )
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            uc = kt({ week: "narrow" }),
            cc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handleRootEl = function (e) {
                    (t.rootEl = e), zr(t.props.elRef, e);
                  }),
                  (t.handleMoreLinkClick = function (e) {
                    var n = t.props;
                    if (n.onMoreClick) {
                      var r = n.segsByEachCol,
                        o = r.filter(function (e) {
                          return n.segIsHidden[e.eventRange.instance.instanceId];
                        });
                      n.onMoreClick({
                        date: n.date,
                        allSegs: r,
                        hiddenSegs: o,
                        moreCnt: n.moreCnt,
                        dayEl: t.rootEl,
                        ev: e,
                      });
                    }
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this.context,
                    n = t.options,
                    r = t.viewApi,
                    o = this.props,
                    i = o.date,
                    a = o.dateProfile,
                    s = {
                      num: o.moreCnt,
                      text: o.buildMoreLinkText(o.moreCnt),
                      view: r,
                    },
                    l = n.navLinks
                      ? { "data-navlink": Cr(i, "week"), tabIndex: 0 }
                      : {};
                  return wl(
                    Pu,
                    {
                      date: i,
                      dateProfile: a,
                      todayRange: o.todayRange,
                      showDayNumber: o.showDayNumber,
                      extraHookProps: o.extraHookProps,
                      elRef: this.handleRootEl,
                    },
                    function (t, r, u, c) {
                      return wl(
                        "td",
                        vs(
                          {
                            ref: t,
                            className: ["fc-daygrid-day"]
                              .concat(r, o.extraClassNames || [])
                              .join(" "),
                          },
                          u,
                          o.extraDataAttrs
                        ),
                        wl(
                          "div",
                          {
                            className:
                              "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                            ref: o.innerElRef,
                          },
                          o.showWeekNumber &&
                            wl(
                              Hu,
                              { date: i, defaultFormat: uc },
                              function (e, t, n, r) {
                                return wl(
                                  "a",
                                  vs(
                                    {
                                      ref: e,
                                      className: ["fc-daygrid-week-number"]
                                        .concat(t)
                                        .join(" "),
                                    },
                                    l
                                  ),
                                  r
                                );
                              }
                            ),
                          !c &&
                            wl(lc, {
                              date: i,
                              dateProfile: a,
                              showDayNumber: o.showDayNumber,
                              forceDayTop: o.forceDayTop,
                              todayRange: o.todayRange,
                              extraHookProps: o.extraHookProps,
                            }),
                          wl(
                            "div",
                            {
                              className: "fc-daygrid-day-events",
                              ref: o.fgContentElRef,
                              style: { paddingBottom: o.fgPaddingBottom },
                            },
                            o.fgContent,
                            Boolean(o.moreCnt) &&
                              wl(
                                "div",
                                {
                                  className: "fc-daygrid-day-bottom",
                                  style: { marginTop: o.moreMarginTop },
                                },
                                wl(
                                  Hl,
                                  {
                                    hookProps: s,
                                    classNames: n.moreLinkClassNames,
                                    content: n.moreLinkContent,
                                    defaultContent: da,
                                    didMount: n.moreLinkDidMount,
                                    willUnmount: n.moreLinkWillUnmount,
                                  },
                                  function (t, n, r, o) {
                                    return wl(
                                      "a",
                                      {
                                        ref: t,
                                        className: ["fc-daygrid-more-link"]
                                          .concat(n)
                                          .join(" "),
                                        onClick: e.handleMoreLinkClick,
                                      },
                                      o
                                    );
                                  }
                                )
                              )
                          ),
                          wl(
                            "div",
                            { className: "fc-daygrid-day-bg" },
                            o.bgContent
                          )
                        )
                      );
                    }
                  );
                }),
                n
              );
            })(Pl);
          cc.addPropsEquality({ onMoreClick: !0 });
          var dc = kt({
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "narrow",
            }),
            fc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = n.options.eventTimeFormat || dc,
                    o = En(t.seg, r, n, !0, t.defaultDisplayEventEnd);
                  return wl(
                    xu,
                    {
                      seg: t.seg,
                      timeText: o,
                      defaultContent: pa,
                      isDragging: t.isDragging,
                      isResizing: !1,
                      isDateSelecting: !1,
                      isSelected: t.isSelected,
                      isPast: t.isPast,
                      isFuture: t.isFuture,
                      isToday: t.isToday,
                    },
                    function (e, n, r, o) {
                      return wl(
                        "a",
                        vs(
                          {
                            className: [
                              "fc-daygrid-event",
                              "fc-daygrid-dot-event",
                            ]
                              .concat(n)
                              .join(" "),
                            ref: e,
                          },
                          ha(t.seg)
                        ),
                        o
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            pc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props;
                  return wl(
                    ku,
                    vs({}, e, {
                      extraClassNames: [
                        "fc-daygrid-event",
                        "fc-daygrid-block-event",
                        "fc-h-event",
                      ],
                      defaultTimeFormat: dc,
                      defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                      disableResizing: !e.seg.eventRange.def.allDay,
                    })
                  );
                }),
                n
              );
            })(Il),
            hc = (function (e) {
              function r() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.cellElRefs = new Tu()),
                  (t.frameElRefs = new Tu()),
                  (t.fgElRefs = new Tu()),
                  (t.segHarnessRefs = new Tu()),
                  (t.rootElRef = El()),
                  (t.state = {
                    framePositions: null,
                    maxContentHeight: null,
                    segHeights: {},
                  }),
                  t
                );
              }
              return (
                t(r, e),
                (r.prototype.render = function () {
                  var e = this,
                    t = this,
                    n = t.props,
                    r = t.state,
                    o = t.context,
                    i = n.cells.length,
                    a = la(n.businessHourSegs, i),
                    s = la(n.bgEventSegs, i),
                    l = la(this.getHighlightSegs(), i),
                    u = la(this.getMirrorSegs(), i),
                    c = ga(
                      n.cells,
                      n.fgEventSegs,
                      n.dayMaxEvents,
                      n.dayMaxEventRows,
                      r.segHeights,
                      r.maxContentHeight,
                      i,
                      o.options.eventOrder
                    ),
                    d = c.paddingBottoms,
                    f = c.segsByFirstCol,
                    p = c.segsByEachCol,
                    h = c.segIsHidden,
                    g = c.segTops,
                    v = c.segMarginTops,
                    m = c.moreCnts,
                    y = c.moreTops,
                    b =
                      (n.eventDrag && n.eventDrag.affectedInstances) ||
                      (n.eventResize && n.eventResize.affectedInstances) ||
                      {};
                  return wl(
                    "tr",
                    { ref: this.rootElRef },
                    n.renderIntro && n.renderIntro(),
                    n.cells.map(function (t, r) {
                      var o = e.renderFgSegs(f[r], h, g, v, b, n.todayRange),
                        i = e.renderFgSegs(
                          u[r],
                          {},
                          g,
                          {},
                          {},
                          n.todayRange,
                          Boolean(n.eventDrag),
                          Boolean(n.eventResize),
                          !1
                        );
                      return wl(cc, {
                        key: t.key,
                        elRef: e.cellElRefs.createRef(t.key),
                        innerElRef: e.frameElRefs.createRef(t.key),
                        dateProfile: n.dateProfile,
                        date: t.date,
                        showDayNumber: n.showDayNumbers,
                        showWeekNumber: n.showWeekNumbers && 0 === r,
                        forceDayTop: n.showWeekNumbers,
                        todayRange: n.todayRange,
                        extraHookProps: t.extraHookProps,
                        extraDataAttrs: t.extraDataAttrs,
                        extraClassNames: t.extraClassNames,
                        moreCnt: m[r],
                        buildMoreLinkText: n.buildMoreLinkText,
                        onMoreClick: function (e) {
                          n.onMoreClick(vs(vs({}, e), { fromCol: r }));
                        },
                        segIsHidden: h,
                        moreMarginTop: y[r],
                        segsByEachCol: p[r],
                        fgPaddingBottom: d[r],
                        fgContentElRef: e.fgElRefs.createRef(t.key),
                        fgContent: wl(Dl, null, wl(Dl, null, o), wl(Dl, null, i)),
                        bgContent: wl(
                          Dl,
                          null,
                          e.renderFillSegs(l[r], "highlight"),
                          e.renderFillSegs(a[r], "non-business"),
                          e.renderFillSegs(s[r], "bg-event")
                        ),
                      });
                    })
                  );
                }),
                (r.prototype.componentDidMount = function () {
                  this.updateSizing(!0);
                }),
                (r.prototype.componentDidUpdate = function (e, t) {
                  var n = this.props;
                  this.updateSizing(!Le(e, n));
                }),
                (r.prototype.getHighlightSegs = function () {
                  var e = this.props;
                  return e.eventDrag && e.eventDrag.segs.length
                    ? e.eventDrag.segs
                    : e.eventResize && e.eventResize.segs.length
                    ? e.eventResize.segs
                    : e.dateSelectionSegs;
                }),
                (r.prototype.getMirrorSegs = function () {
                  var e = this.props;
                  return e.eventResize && e.eventResize.segs.length
                    ? e.eventResize.segs
                    : [];
                }),
                (r.prototype.renderFgSegs = function (e, t, n, r, o, i, a, s, l) {
                  var u = this.context,
                    c = this.props.eventSelection,
                    d = this.state.framePositions,
                    f = 1 === this.props.cells.length,
                    p = [];
                  if (d)
                    for (var h = 0, g = e; h < g.length; h++) {
                      var v = g[h],
                        m = v.eventRange.instance.instanceId,
                        y = a || s || l,
                        b = o[m],
                        C = t[m] || b,
                        w =
                          t[m] ||
                          y ||
                          v.firstCol !== v.lastCol ||
                          !v.isStart ||
                          !v.isEnd,
                        S = void 0,
                        E = void 0,
                        D = void 0,
                        T = void 0;
                      w
                        ? ((E = n[m]),
                          u.isRtl
                            ? ((T = 0),
                              (D = d.lefts[v.lastCol] - d.lefts[v.firstCol]))
                            : ((D = 0),
                              (T = d.rights[v.firstCol] - d.rights[v.lastCol])))
                        : (S = r[m]),
                        p.push(
                          wl(
                            "div",
                            {
                              className:
                                "fc-daygrid-event-harness" +
                                (w ? " fc-daygrid-event-harness-abs" : ""),
                              key: m,
                              ref: y
                                ? null
                                : this.segHarnessRefs.createRef(
                                    m + ":" + v.firstCol
                                  ),
                              style: {
                                visibility: C ? "hidden" : "",
                                marginTop: S || "",
                                top: E || "",
                                left: D || "",
                                right: T || "",
                              },
                            },
                            fa(v)
                              ? wl(
                                  fc,
                                  vs(
                                    {
                                      seg: v,
                                      isDragging: a,
                                      isSelected: m === c,
                                      defaultDisplayEventEnd: f,
                                    },
                                    Dn(v, i)
                                  )
                                )
                              : wl(
                                  pc,
                                  vs(
                                    {
                                      seg: v,
                                      isDragging: a,
                                      isResizing: s,
                                      isDateSelecting: l,
                                      isSelected: m === c,
                                      defaultDisplayEventEnd: f,
                                    },
                                    Dn(v, i)
                                  )
                                )
                          )
                        );
                    }
                  return p;
                }),
                (r.prototype.renderFillSegs = function (e, t) {
                  var r = this.context.isRtl,
                    o = this.props.todayRange,
                    i = this.state.framePositions,
                    a = [];
                  if (i)
                    for (var s = 0, l = e; s < l.length; s++) {
                      var u = l[s],
                        c = r
                          ? {
                              right: 0,
                              left: i.lefts[u.lastCol] - i.lefts[u.firstCol],
                            }
                          : {
                              left: 0,
                              right: i.rights[u.firstCol] - i.rights[u.lastCol],
                            };
                      a.push(
                        wl(
                          "div",
                          {
                            key: Rn(u.eventRange),
                            className: "fc-daygrid-bg-harness",
                            style: c,
                          },
                          "bg-event" === t
                            ? wl(Nu, vs({ seg: u }, Dn(u, o)))
                            : Bi(t)
                        )
                      );
                    }
                  return wl.apply(void 0, n([Dl, {}], a));
                }),
                (r.prototype.updateSizing = function (e) {
                  var t = this,
                    n = t.props,
                    r = t.frameElRefs;
                  if (null !== n.clientWidth) {
                    if (e) {
                      var o = n.cells.map(function (e) {
                        return r.currentMap[e.key];
                      });
                      if (o.length) {
                        var i = this.rootElRef.current;
                        this.setState({ framePositions: new gl(i, o, !0, !1) });
                      }
                    }
                    var a = !0 === n.dayMaxEvents || !0 === n.dayMaxEventRows;
                    this.setState({
                      segHeights: this.computeSegHeights(),
                      maxContentHeight: a ? this.computeMaxContentHeight() : null,
                    });
                  }
                }),
                (r.prototype.computeSegHeights = function () {
                  return Ne(this.segHarnessRefs.currentMap, function (e) {
                    return e.getBoundingClientRect().height;
                  });
                }),
                (r.prototype.computeMaxContentHeight = function () {
                  var e = this.props.cells[0].key,
                    t = this.cellElRefs.currentMap[e],
                    n = this.fgElRefs.currentMap[e];
                  return (
                    t.getBoundingClientRect().bottom -
                    n.getBoundingClientRect().top
                  );
                }),
                (r.prototype.getCellEls = function () {
                  var e = this.cellElRefs.currentMap;
                  return this.props.cells.map(function (t) {
                    return e[t.key];
                  });
                }),
                r
              );
            })(Pl);
          hc.addPropsEquality({ onMoreClick: !0 }),
            hc.addStateEquality({ segHeights: Le });
          var gc = 10,
            vc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.repositioner = new Ql(t.updateSize.bind(t))),
                  (t.handleRootEl = function (e) {
                    (t.rootEl = e), t.props.elRef && zr(t.props.elRef, e);
                  }),
                  (t.handleDocumentMousedown = function (e) {
                    var n = t.props.onClose;
                    n && !t.rootEl.contains(e.target) && n();
                  }),
                  (t.handleDocumentScroll = function () {
                    t.repositioner.request(gc);
                  }),
                  (t.handleCloseClick = function () {
                    var e = t.props.onClose;
                    e && e();
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.context.theme,
                    t = this.props,
                    n = ["fc-popover", e.getClass("popover")].concat(
                      t.extraClassNames || []
                    );
                  return wl(
                    "div",
                    vs({ className: n.join(" ") }, t.extraAttrs, {
                      ref: this.handleRootEl,
                    }),
                    wl(
                      "div",
                      {
                        className:
                          "fc-popover-header " + e.getClass("popoverHeader"),
                      },
                      wl("span", { className: "fc-popover-title" }, t.title),
                      wl("span", {
                        className: "fc-popover-close " + e.getIconClass("close"),
                        onClick: this.handleCloseClick,
                      })
                    ),
                    wl(
                      "div",
                      {
                        className:
                          "fc-popover-body " + e.getClass("popoverContent"),
                      },
                      t.children
                    )
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  document.addEventListener(
                    "mousedown",
                    this.handleDocumentMousedown
                  ),
                    document.addEventListener(
                      "scroll",
                      this.handleDocumentScroll
                    ),
                    this.updateSize();
                }),
                (n.prototype.componentWillUnmount = function () {
                  document.removeEventListener(
                    "mousedown",
                    this.handleDocumentMousedown
                  ),
                    document.removeEventListener(
                      "scroll",
                      this.handleDocumentScroll
                    );
                }),
                (n.prototype.updateSize = function () {
                  var e = this.props,
                    t = e.alignmentEl,
                    n = e.topAlignmentEl,
                    r = this.rootEl;
                  if (r) {
                    var o = r.getBoundingClientRect(),
                      i = t.getBoundingClientRect(),
                      a = n ? n.getBoundingClientRect().top : i.top;
                    (a = Math.min(a, window.innerHeight - o.height - 10)),
                      (a = Math.max(a, 10));
                    var s;
                    (s = this.context.isRtl ? i.right - o.width : i.left),
                      (s = Math.min(s, window.innerWidth - o.width - 10)),
                      (s = Math.max(s, 10)),
                      z(r, { top: a, left: s });
                  }
                }),
                n
              );
            })(Il),
            mc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.rootElRef = El()), t;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.context,
                    t = e.options,
                    n = e.dateEnv,
                    r = this.props,
                    o = r.date,
                    i = r.hiddenInstances,
                    a = r.todayRange,
                    s = r.dateProfile,
                    l = r.selectedInstanceId,
                    u = n.format(o, t.dayPopoverFormat);
                  return wl(
                    Pu,
                    {
                      date: o,
                      dateProfile: s,
                      todayRange: a,
                      elRef: this.rootElRef,
                    },
                    function (e, t, n) {
                      return wl(
                        vc,
                        {
                          elRef: e,
                          title: u,
                          extraClassNames: ["fc-more-popover"].concat(t),
                          extraAttrs: n,
                          onClose: r.onCloseClick,
                          alignmentEl: r.alignmentEl,
                          topAlignmentEl: r.topAlignmentEl,
                        },
                        wl(
                          Iu,
                          { date: o, dateProfile: s, todayRange: a },
                          function (e, t) {
                            return (
                              t &&
                              wl(
                                "div",
                                { className: "fc-more-popover-misc", ref: e },
                                t
                              )
                            );
                          }
                        ),
                        r.segs.map(function (e) {
                          var t = e.eventRange.instance.instanceId;
                          return wl(
                            "div",
                            {
                              className: "fc-daygrid-event-harness",
                              key: t,
                              style: { visibility: i[t] ? "hidden" : "" },
                            },
                            fa(e)
                              ? wl(
                                  fc,
                                  vs(
                                    {
                                      seg: e,
                                      isDragging: !1,
                                      isSelected: t === l,
                                      defaultDisplayEventEnd: !1,
                                    },
                                    Dn(e, a)
                                  )
                                )
                              : wl(
                                  pc,
                                  vs(
                                    {
                                      seg: e,
                                      isDragging: !1,
                                      isResizing: !1,
                                      isDateSelecting: !1,
                                      isSelected: t === l,
                                      defaultDisplayEventEnd: !1,
                                    },
                                    Dn(e, a)
                                  )
                                )
                          );
                        })
                      );
                    }
                  );
                }),
                (n.prototype.positionToHit = function (e, t, n) {
                  var r = this.rootElRef.current;
                  if (!n || !r) return null;
                  var o = n.getBoundingClientRect(),
                    i = r.getBoundingClientRect(),
                    a = i.left - o.left,
                    s = i.top - o.top,
                    l = e - a,
                    u = t - s,
                    c = this.props.date;
                  return l >= 0 && l < i.width && u >= 0 && u < i.height
                    ? {
                        dateSpan: {
                          allDay: !0,
                          range: { start: c, end: se(c, 1) },
                        },
                        dayEl: r,
                        relativeRect: {
                          left: a,
                          top: s,
                          right: i.width,
                          bottom: i.height,
                        },
                        layer: 1,
                      }
                    : null;
                }),
                n
              );
            })(Pl),
            yc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.splitBusinessHourSegs = pt(sa)),
                  (t.splitBgEventSegs = pt(sa)),
                  (t.splitFgEventSegs = pt(sa)),
                  (t.splitDateSelectionSegs = pt(sa)),
                  (t.splitEventDrag = pt(ua)),
                  (t.splitEventResize = pt(ua)),
                  (t.buildBuildMoreLinkText = pt(Ea)),
                  (t.morePopoverRef = El()),
                  (t.rowRefs = new Tu()),
                  (t.state = { morePopoverState: null }),
                  (t.handleRootEl = function (e) {
                    (t.rootEl = e), zr(t.props.elRef, e);
                  }),
                  (t.handleMoreLinkClick = function (e) {
                    function n(e) {
                      var t = e.eventRange,
                        n = t.def,
                        i = t.instance,
                        a = t.range;
                      return {
                        event: new tl(r, n, i),
                        start: o.toDate(a.start),
                        end: o.toDate(a.end),
                        isStart: e.isStart,
                        isEnd: e.isEnd,
                      };
                    }
                    var r = t.context,
                      o = r.dateEnv,
                      i = r.options.moreLinkClick;
                    "function" == typeof i &&
                      (i = i({
                        date: o.toDate(e.date),
                        allDay: !0,
                        allSegs: e.allSegs.map(n),
                        hiddenSegs: e.hiddenSegs.map(n),
                        jsEvent: e.ev,
                        view: r.viewApi,
                      })),
                      i && "popover" !== i
                        ? "string" == typeof i && r.calendarApi.zoomTo(e.date, i)
                        : t.setState({
                            morePopoverState: vs(vs({}, e), {
                              currentFgEventSegs: t.props.fgEventSegs,
                              fromRow: e.fromRow,
                              fromCol: e.fromCol,
                            }),
                          });
                  }),
                  (t.handleMorePopoverClose = function () {
                    t.setState({ morePopoverState: null });
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.dateProfile,
                    r = t.dayMaxEventRows,
                    o = t.dayMaxEvents,
                    i = t.expandRows,
                    a = this.state.morePopoverState,
                    s = t.cells.length,
                    l = this.splitBusinessHourSegs(t.businessHourSegs, s),
                    u = this.splitBgEventSegs(t.bgEventSegs, s),
                    c = this.splitFgEventSegs(t.fgEventSegs, s),
                    d = this.splitDateSelectionSegs(t.dateSelectionSegs, s),
                    f = this.splitEventDrag(t.eventDrag, s),
                    p = this.splitEventResize(t.eventResize, s),
                    h = this.buildBuildMoreLinkText(
                      this.context.options.moreLinkText
                    ),
                    g = !0 === o || !0 === r;
                  return (
                    g && !i && ((g = !1), (r = null), (o = null)),
                    wl(
                      "div",
                      {
                        className: [
                          "fc-daygrid-body",
                          g
                            ? "fc-daygrid-body-balanced"
                            : "fc-daygrid-body-unbalanced",
                          i ? "" : "fc-daygrid-body-natural",
                        ].join(" "),
                        ref: this.handleRootEl,
                        style: {
                          width: t.clientWidth,
                          minWidth: t.tableMinWidth,
                        },
                      },
                      wl(yu, { unit: "day" }, function (g, v) {
                        return wl(
                          Dl,
                          null,
                          wl(
                            "table",
                            {
                              className: "fc-scrollgrid-sync-table",
                              style: {
                                width: t.clientWidth,
                                minWidth: t.tableMinWidth,
                                height: i ? t.clientHeight : "",
                              },
                            },
                            t.colGroupNode,
                            wl(
                              "tbody",
                              null,
                              t.cells.map(function (i, a) {
                                return wl(hc, {
                                  ref: e.rowRefs.createRef(a),
                                  key: i.length ? i[0].date.toISOString() : a,
                                  showDayNumbers: s > 1,
                                  showWeekNumbers: t.showWeekNumbers,
                                  todayRange: v,
                                  dateProfile: n,
                                  cells: i,
                                  renderIntro: t.renderRowIntro,
                                  businessHourSegs: l[a],
                                  eventSelection: t.eventSelection,
                                  bgEventSegs: u[a].filter(Da),
                                  fgEventSegs: c[a],
                                  dateSelectionSegs: d[a],
                                  eventDrag: f[a],
                                  eventResize: p[a],
                                  dayMaxEvents: o,
                                  dayMaxEventRows: r,
                                  clientWidth: t.clientWidth,
                                  clientHeight: t.clientHeight,
                                  buildMoreLinkText: h,
                                  onMoreClick: function (t) {
                                    e.handleMoreLinkClick(
                                      vs(vs({}, t), { fromRow: a })
                                    );
                                  },
                                });
                              })
                            )
                          ),
                          !t.forPrint &&
                            a &&
                            a.currentFgEventSegs === t.fgEventSegs &&
                            wl(mc, {
                              ref: e.morePopoverRef,
                              date: a.date,
                              dateProfile: n,
                              segs: a.allSegs,
                              alignmentEl: a.dayEl,
                              topAlignmentEl:
                                1 === s ? t.headerAlignElRef.current : null,
                              onCloseClick: e.handleMorePopoverClose,
                              selectedInstanceId: t.eventSelection,
                              hiddenInstances:
                                (t.eventDrag
                                  ? t.eventDrag.affectedInstances
                                  : null) ||
                                (t.eventResize
                                  ? t.eventResize.affectedInstances
                                  : null) ||
                                {},
                              todayRange: v,
                            })
                        );
                      })
                    )
                  );
                }),
                (n.prototype.prepareHits = function () {
                  (this.rowPositions = new gl(
                    this.rootEl,
                    this.rowRefs.collect().map(function (e) {
                      return e.getCellEls()[0];
                    }),
                    !1,
                    !0
                  )),
                    (this.colPositions = new gl(
                      this.rootEl,
                      this.rowRefs.currentMap[0].getCellEls(),
                      !0,
                      !1
                    ));
                }),
                (n.prototype.positionToHit = function (e, t) {
                  var n = this.morePopoverRef.current,
                    r = n ? n.positionToHit(e, t, this.rootEl) : null,
                    o = this.state.morePopoverState;
                  if (r) return vs({ row: o.fromRow, col: o.fromCol }, r);
                  var i = this,
                    a = i.colPositions,
                    s = i.rowPositions,
                    l = a.leftToIndex(e),
                    u = s.topToIndex(t);
                  return null != u && null != l
                    ? {
                        row: u,
                        col: l,
                        dateSpan: { range: this.getCellRange(u, l), allDay: !0 },
                        dayEl: this.getCellEl(u, l),
                        relativeRect: {
                          left: a.lefts[l],
                          right: a.rights[l],
                          top: s.tops[u],
                          bottom: s.bottoms[u],
                        },
                      }
                    : null;
                }),
                (n.prototype.getCellEl = function (e, t) {
                  return this.rowRefs.currentMap[e].getCellEls()[t];
                }),
                (n.prototype.getCellRange = function (e, t) {
                  var n = this.props.cells[e][t].date;
                  return { start: n, end: se(n, 1) };
                }),
                n
              );
            })(Pl),
            bc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.forceDayIfListItem = !0), t;
              }
              return (
                t(n, e),
                (n.prototype.sliceRange = function (e, t) {
                  return t.sliceRange(e);
                }),
                n
              );
            })(Su),
            Cc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.slicer = new bc()),
                  (t.tableRef = El()),
                  (t.handleRootEl = function (e) {
                    e
                      ? t.context.registerInteractiveComponent(t, { el: e })
                      : t.context.unregisterInteractiveComponent(t);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context;
                  return wl(
                    yc,
                    vs(
                      { ref: this.tableRef, elRef: this.handleRootEl },
                      this.slicer.sliceProps(
                        t,
                        t.dateProfile,
                        t.nextDayThreshold,
                        n,
                        t.dayTableModel
                      ),
                      {
                        dateProfile: t.dateProfile,
                        cells: t.dayTableModel.cells,
                        colGroupNode: t.colGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        renderRowIntro: t.renderRowIntro,
                        dayMaxEvents: t.dayMaxEvents,
                        dayMaxEventRows: t.dayMaxEventRows,
                        showWeekNumbers: t.showWeekNumbers,
                        expandRows: t.expandRows,
                        headerAlignElRef: t.headerAlignElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: t.forPrint,
                      }
                    )
                  );
                }),
                (n.prototype.prepareHits = function () {
                  this.tableRef.current.prepareHits();
                }),
                (n.prototype.queryHit = function (e, t) {
                  var n = this.tableRef.current.positionToHit(e, t);
                  return n
                    ? {
                        component: this,
                        dateSpan: n.dateSpan,
                        dayEl: n.dayEl,
                        rect: {
                          left: n.relativeRect.left,
                          right: n.relativeRect.right,
                          top: n.relativeRect.top,
                          bottom: n.relativeRect.bottom,
                        },
                        layer: 0,
                      }
                    : null;
                }),
                n
              );
            })(Pl),
            wc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.buildDayTableModel = pt(Ta)),
                  (t.headerRef = El()),
                  (t.tableRef = El()),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this.context,
                    n = t.options,
                    r = t.dateProfileGenerator,
                    o = this.props,
                    i = this.buildDayTableModel(o.dateProfile, r),
                    a =
                      n.dayHeaders &&
                      wl(bu, {
                        ref: this.headerRef,
                        dateProfile: o.dateProfile,
                        dates: i.headerDates,
                        datesRepDistinctDays: 1 === i.rowCnt,
                      }),
                    s = function (t) {
                      return wl(Cc, {
                        ref: e.tableRef,
                        dateProfile: o.dateProfile,
                        dayTableModel: i,
                        businessHours: o.businessHours,
                        dateSelection: o.dateSelection,
                        eventStore: o.eventStore,
                        eventUiBases: o.eventUiBases,
                        eventSelection: o.eventSelection,
                        eventDrag: o.eventDrag,
                        eventResize: o.eventResize,
                        nextDayThreshold: n.nextDayThreshold,
                        colGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        dayMaxEvents: n.dayMaxEvents,
                        dayMaxEventRows: n.dayMaxEventRows,
                        showWeekNumbers: n.weekNumbers,
                        expandRows: !o.isHeightAuto,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: o.forPrint,
                      });
                    };
                  return n.dayMinWidth
                    ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth)
                    : this.renderSimpleLayout(a, s);
                }),
                n
              );
            })(sc),
            Sc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.buildRenderRange = function (t, n, r) {
                  var o,
                    i = this.props.dateEnv,
                    a = e.prototype.buildRenderRange.call(this, t, n, r),
                    s = a.start,
                    l = a.end;
                  if (
                    (/^(year|month)$/.test(n) &&
                      ((s = i.startOfWeek(s)),
                      (o = i.startOfWeek(l)),
                      o.valueOf() !== l.valueOf() && (l = ae(o, 1))),
                    this.props.monthMode && this.props.fixedWeekCount)
                  ) {
                    l = ae(l, 6 - Math.ceil(ue(s, l)));
                  }
                  return { start: s, end: l };
                }),
                n
              );
            })(Ul),
            Ec = {
              moreLinkClick: Pt,
              moreLinkClassNames: Pt,
              moreLinkContent: Pt,
              moreLinkDidMount: Pt,
              moreLinkWillUnmount: Pt,
            },
            Dc = ro({
              initialView: "dayGridMonth",
              optionRefiners: Ec,
              views: {
                dayGrid: { component: wc, dateProfileGeneratorClass: Sc },
                dayGridDay: { type: "dayGrid", duration: { days: 1 } },
                dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
                dayGridMonth: {
                  type: "dayGrid",
                  duration: { months: 1 },
                  monthMode: !0,
                  fixedWeekCount: !0,
                },
              },
            }),
            Tc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.getKeyInfo = function () {
                  return { allDay: {}, timed: {} };
                }),
                (n.prototype.getKeysForDateSpan = function (e) {
                  return e.allDay ? ["allDay"] : ["timed"];
                }),
                (n.prototype.getKeysForEventDef = function (e) {
                  return e.allDay
                    ? pn(e)
                      ? ["timed", "allDay"]
                      : ["allDay"]
                    : ["timed"];
                }),
                n
              );
            })(fl),
            Rc = kt({
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "short",
            }),
            xc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  return this.props.slatMetas.map(function (e) {
                    return wl("tr", { key: e.key }, wl(Ra, vs({}, e)));
                  });
                }),
                n
              );
            })(Il),
            kc = kt({ week: "short" }),
            Mc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.allDaySplitter = new Tc()),
                  (t.headerElRef = El()),
                  (t.rootElRef = El()),
                  (t.scrollerElRef = El()),
                  (t.state = { slatCoords: null }),
                  (t.handleScrollTopRequest = function (e) {
                    var n = t.scrollerElRef.current;
                    n && (n.scrollTop = e);
                  }),
                  (t.renderHeadAxis = function (e, n) {
                    void 0 === n && (n = "");
                    var r = t.context.options,
                      o = t.props.dateProfile,
                      i = o.renderRange,
                      a = ce(i.start, i.end),
                      s =
                        r.navLinks && 1 === a
                          ? { "data-navlink": Cr(i.start, "week"), tabIndex: 0 }
                          : {};
                    return r.weekNumbers && "day" === e
                      ? wl(
                          Hu,
                          { date: i.start, defaultFormat: kc },
                          function (e, t, r, o) {
                            return wl(
                              "th",
                              {
                                ref: e,
                                className: [
                                  "fc-timegrid-axis",
                                  "fc-scrollgrid-shrink",
                                ]
                                  .concat(t)
                                  .join(" "),
                              },
                              wl(
                                "div",
                                {
                                  className:
                                    "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                                  style: { height: n },
                                },
                                wl(
                                  "a",
                                  vs(
                                    {
                                      ref: r,
                                      className:
                                        "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                    },
                                    s
                                  ),
                                  o
                                )
                              )
                            );
                          }
                        )
                      : wl(
                          "th",
                          { className: "fc-timegrid-axis" },
                          wl("div", {
                            className: "fc-timegrid-axis-frame",
                            style: { height: n },
                          })
                        );
                  }),
                  (t.renderTableRowAxis = function (e) {
                    var n = t.context,
                      r = n.options,
                      o = n.viewApi,
                      i = { text: r.allDayText, view: o };
                    return wl(
                      Hl,
                      {
                        hookProps: i,
                        classNames: r.allDayClassNames,
                        content: r.allDayContent,
                        defaultContent: ka,
                        didMount: r.allDayDidMount,
                        willUnmount: r.allDayWillUnmount,
                      },
                      function (t, n, r, o) {
                        return wl(
                          "td",
                          {
                            ref: t,
                            className: [
                              "fc-timegrid-axis",
                              "fc-scrollgrid-shrink",
                            ]
                              .concat(n)
                              .join(" "),
                          },
                          wl(
                            "div",
                            {
                              className:
                                "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" +
                                (null == e
                                  ? " fc-timegrid-axis-frame-liquid"
                                  : ""),
                              style: { height: e },
                            },
                            wl(
                              "span",
                              {
                                className:
                                  "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                ref: r,
                              },
                              o
                            )
                          )
                        );
                      }
                    );
                  }),
                  (t.handleSlatCoords = function (e) {
                    t.setState({ slatCoords: e });
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.renderSimpleLayout = function (e, t, n) {
                  var r = this,
                    o = r.context,
                    i = r.props,
                    a = [],
                    s = Oi(o.options);
                  return (
                    e &&
                      a.push({
                        type: "header",
                        key: "header",
                        isSticky: s,
                        chunk: {
                          elRef: this.headerElRef,
                          tableClassName: "fc-col-header",
                          rowContent: e,
                        },
                      }),
                    t &&
                      (a.push({
                        type: "body",
                        key: "all-day",
                        chunk: { content: t },
                      }),
                      a.push({
                        type: "body",
                        key: "all-day-divider",
                        outerContent: wl(
                          "tr",
                          { className: "fc-scrollgrid-section" },
                          wl("td", {
                            className:
                              "fc-timegrid-divider " +
                              o.theme.getClass("tableCellShaded"),
                          })
                        ),
                      })),
                    a.push({
                      type: "body",
                      key: "body",
                      liquid: !0,
                      expandRows: Boolean(o.options.expandRows),
                      chunk: { scrollerElRef: this.scrollerElRef, content: n },
                    }),
                    wl(
                      zl,
                      { viewSpec: o.viewSpec, elRef: this.rootElRef },
                      function (e, t) {
                        return wl(
                          "div",
                          {
                            className: ["fc-timegrid"].concat(t).join(" "),
                            ref: e,
                          },
                          wl(Ru, {
                            liquid: !i.isHeightAuto && !i.forPrint,
                            collapsibleWidth: i.forPrint,
                            cols: [{ width: "shrink" }],
                            sections: a,
                          })
                        );
                      }
                    )
                  );
                }),
                (n.prototype.renderHScrollLayout = function (
                  e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a
                ) {
                  var s = this,
                    l = this.context.pluginHooks.scrollGridImpl;
                  if (!l) throw new Error("No ScrollGrid implementation");
                  var u = this,
                    c = u.context,
                    d = u.props,
                    f = !d.forPrint && Oi(c.options),
                    p = !d.forPrint && Ai(c.options),
                    h = [];
                  e &&
                    h.push({
                      type: "header",
                      key: "header",
                      isSticky: f,
                      syncRowHeights: !0,
                      chunks: [
                        {
                          key: "axis",
                          rowContent: function (e) {
                            return wl(
                              "tr",
                              null,
                              s.renderHeadAxis("day", e.rowSyncHeights[0])
                            );
                          },
                        },
                        {
                          key: "cols",
                          elRef: this.headerElRef,
                          tableClassName: "fc-col-header",
                          rowContent: e,
                        },
                      ],
                    }),
                    t &&
                      (h.push({
                        type: "body",
                        key: "all-day",
                        syncRowHeights: !0,
                        chunks: [
                          {
                            key: "axis",
                            rowContent: function (e) {
                              return wl(
                                "tr",
                                null,
                                s.renderTableRowAxis(e.rowSyncHeights[0])
                              );
                            },
                          },
                          { key: "cols", content: t },
                        ],
                      }),
                      h.push({
                        key: "all-day-divider",
                        type: "body",
                        outerContent: wl(
                          "tr",
                          { className: "fc-scrollgrid-section" },
                          wl("td", {
                            colSpan: 2,
                            className:
                              "fc-timegrid-divider " +
                              c.theme.getClass("tableCellShaded"),
                          })
                        ),
                      }));
                  var g = c.options.nowIndicator;
                  return (
                    h.push({
                      type: "body",
                      key: "body",
                      liquid: !0,
                      expandRows: Boolean(c.options.expandRows),
                      chunks: [
                        {
                          key: "axis",
                          content: function (e) {
                            return wl(
                              "div",
                              { className: "fc-timegrid-axis-chunk" },
                              wl(
                                "table",
                                {
                                  style: {
                                    height: e.expandRows ? e.clientHeight : "",
                                  },
                                },
                                e.tableColGroupNode,
                                wl("tbody", null, wl(xc, { slatMetas: i }))
                              ),
                              wl(
                                "div",
                                {
                                  className:
                                    "fc-timegrid-now-indicator-container",
                                },
                                wl(
                                  yu,
                                  { unit: g ? "minute" : "day" },
                                  function (e) {
                                    var t = g && a && a.safeComputeTop(e);
                                    return "number" == typeof t
                                      ? wl(
                                          Mu,
                                          { isAxis: !0, date: e },
                                          function (e, n, r, o) {
                                            return wl(
                                              "div",
                                              {
                                                ref: e,
                                                className: [
                                                  "fc-timegrid-now-indicator-arrow",
                                                ]
                                                  .concat(n)
                                                  .join(" "),
                                                style: { top: t },
                                              },
                                              o
                                            );
                                          }
                                        )
                                      : null;
                                  }
                                )
                              )
                            );
                          },
                        },
                        {
                          key: "cols",
                          scrollerElRef: this.scrollerElRef,
                          content: n,
                        },
                      ],
                    }),
                    p &&
                      h.push({
                        key: "footer",
                        type: "footer",
                        isSticky: !0,
                        chunks: [
                          { key: "axis", content: Hi },
                          { key: "cols", content: Hi },
                        ],
                      }),
                    wl(
                      zl,
                      { viewSpec: c.viewSpec, elRef: this.rootElRef },
                      function (e, t) {
                        return wl(
                          "div",
                          {
                            className: ["fc-timegrid"].concat(t).join(" "),
                            ref: e,
                          },
                          wl(l, {
                            liquid: !d.isHeightAuto && !d.forPrint,
                            collapsibleWidth: !1,
                            colGroups: [
                              { width: "shrink", cols: [{ width: "shrink" }] },
                              { cols: [{ span: r, minWidth: o }] },
                            ],
                            sections: h,
                          })
                        );
                      }
                    )
                  );
                }),
                (n.prototype.getAllDayMaxEventProps = function () {
                  var e = this.context.options,
                    t = e.dayMaxEvents,
                    n = e.dayMaxEventRows;
                  return (
                    (!0 !== t && !0 !== n) || ((t = void 0), (n = 5)),
                    { dayMaxEvents: t, dayMaxEventRows: n }
                  );
                }),
                n
              );
            })(Pl),
            _c = (function () {
              function e(e, t, n) {
                (this.positions = e),
                  (this.dateProfile = t),
                  (this.slotDuration = n);
              }
              return (
                (e.prototype.safeComputeTop = function (e) {
                  var t = this.dateProfile;
                  if (cn(t.currentRange, e)) {
                    var n = me(e),
                      r = e.valueOf() - n.valueOf();
                    if (r >= ot(t.slotMinTime) && r < ot(t.slotMaxTime))
                      return this.computeTimeTop(Ge(r));
                  }
                  return null;
                }),
                (e.prototype.computeDateTop = function (e, t) {
                  return (
                    t || (t = me(e)),
                    this.computeTimeTop(Ge(e.valueOf() - t.valueOf()))
                  );
                }),
                (e.prototype.computeTimeTop = function (e) {
                  var t,
                    n,
                    r = this,
                    o = r.positions,
                    i = r.dateProfile,
                    a = o.els.length,
                    s =
                      (e.milliseconds - ot(i.slotMinTime)) /
                      ot(this.slotDuration);
                  return (
                    (s = Math.max(0, s)),
                    (s = Math.min(a, s)),
                    (t = Math.floor(s)),
                    (t = Math.min(t, a - 1)),
                    (n = s - t),
                    o.tops[t] + o.getHeight(t) * n
                  );
                }),
                e
              );
            })(),
            Ic = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = n.options,
                    o = t.slatElRefs;
                  return wl(
                    "tbody",
                    null,
                    t.slatMetas.map(function (e, i) {
                      var a = {
                          time: e.time,
                          date: n.dateEnv.toDate(e.date),
                          view: n.viewApi,
                        },
                        s = [
                          "fc-timegrid-slot",
                          "fc-timegrid-slot-lane",
                          e.isLabeled ? "" : "fc-timegrid-slot-minor",
                        ];
                      return wl(
                        "tr",
                        { key: e.key, ref: o.createRef(e.key) },
                        t.axis && wl(Ra, vs({}, e)),
                        wl(
                          Hl,
                          {
                            hookProps: a,
                            classNames: r.slotLaneClassNames,
                            content: r.slotLaneContent,
                            didMount: r.slotLaneDidMount,
                            willUnmount: r.slotLaneWillUnmount,
                          },
                          function (t, n, r, o) {
                            return wl(
                              "td",
                              {
                                ref: t,
                                className: s.concat(n).join(" "),
                                "data-time": e.isoTimeStr,
                              },
                              o
                            );
                          }
                        )
                      );
                    })
                  );
                }),
                n
              );
            })(Il),
            Pc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.rootElRef = El()), (t.slatElRefs = new Tu()), t;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context;
                  return wl(
                    "div",
                    { className: "fc-timegrid-slots", ref: this.rootElRef },
                    wl(
                      "table",
                      {
                        className: n.theme.getClass("table"),
                        style: {
                          minWidth: t.tableMinWidth,
                          width: t.clientWidth,
                          height: t.minHeight,
                        },
                      },
                      t.tableColGroupNode,
                      wl(Ic, {
                        slatElRefs: this.slatElRefs,
                        axis: t.axis,
                        slatMetas: t.slatMetas,
                      })
                    )
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  this.updateSizing();
                }),
                (n.prototype.componentDidUpdate = function () {
                  this.updateSizing();
                }),
                (n.prototype.componentWillUnmount = function () {
                  this.props.onCoords && this.props.onCoords(null);
                }),
                (n.prototype.updateSizing = function () {
                  var e = this,
                    t = e.context,
                    n = e.props;
                  if (n.onCoords && null !== n.clientWidth) {
                    this.rootElRef.current.offsetHeight &&
                      n.onCoords(
                        new _c(
                          new gl(
                            this.rootElRef.current,
                            Ma(this.slatElRefs.currentMap, n.slatMetas),
                            !1,
                            !0
                          ),
                          this.props.dateProfile,
                          t.options.slotDuration
                        )
                      );
                  }
                }),
                n
              );
            })(Il),
            Nc = kt({ hour: "numeric", minute: "2-digit", meridiem: !1 }),
            Hc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = ["fc-timegrid-event", "fc-v-event"];
                  return (
                    this.props.isCondensed &&
                      e.push("fc-timegrid-event-condensed"),
                    wl(
                      ku,
                      vs({}, this.props, {
                        defaultTimeFormat: Nc,
                        extraClassNames: e,
                      })
                    )
                  );
                }),
                n
              );
            })(Il),
            Oc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props;
                  return wl(
                    Iu,
                    {
                      date: e.date,
                      dateProfile: e.dateProfile,
                      todayRange: e.todayRange,
                      extraHookProps: e.extraHookProps,
                    },
                    function (e, t) {
                      return (
                        t &&
                        wl(
                          "div",
                          { className: "fc-timegrid-col-misc", ref: e },
                          t
                        )
                      );
                    }
                  );
                }),
                n
              );
            })(Il);
          su.timeGridEventCondensedHeight = 30;
          var Ac = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this,
                    n = t.props,
                    r = t.context,
                    o = r.options.selectMirror,
                    i =
                      (n.eventDrag && n.eventDrag.segs) ||
                      (n.eventResize && n.eventResize.segs) ||
                      (o && n.dateSelectionSegs) ||
                      [],
                    a =
                      (n.eventDrag && n.eventDrag.affectedInstances) ||
                      (n.eventResize && n.eventResize.affectedInstances) ||
                      {};
                  return wl(
                    Pu,
                    {
                      elRef: n.elRef,
                      date: n.date,
                      dateProfile: n.dateProfile,
                      todayRange: n.todayRange,
                      extraHookProps: n.extraHookProps,
                    },
                    function (t, r, s) {
                      return wl(
                        "td",
                        vs(
                          {
                            ref: t,
                            className: ["fc-timegrid-col"]
                              .concat(r, n.extraClassNames || [])
                              .join(" "),
                          },
                          s,
                          n.extraDataAttrs
                        ),
                        wl(
                          "div",
                          { className: "fc-timegrid-col-frame" },
                          wl(
                            "div",
                            { className: "fc-timegrid-col-bg" },
                            e.renderFillSegs(n.businessHourSegs, "non-business"),
                            e.renderFillSegs(n.bgEventSegs, "bg-event"),
                            e.renderFillSegs(n.dateSelectionSegs, "highlight")
                          ),
                          wl(
                            "div",
                            { className: "fc-timegrid-col-events" },
                            e.renderFgSegs(n.fgEventSegs, a)
                          ),
                          wl(
                            "div",
                            { className: "fc-timegrid-col-events" },
                            e.renderFgSegs(
                              i,
                              {},
                              Boolean(n.eventDrag),
                              Boolean(n.eventResize),
                              Boolean(o)
                            )
                          ),
                          wl(
                            "div",
                            { className: "fc-timegrid-now-indicator-container" },
                            e.renderNowIndicator(n.nowIndicatorSegs)
                          ),
                          wl(Oc, {
                            date: n.date,
                            dateProfile: n.dateProfile,
                            todayRange: n.todayRange,
                            extraHookProps: n.extraHookProps,
                          })
                        )
                      );
                    }
                  );
                }),
                (n.prototype.renderFgSegs = function (e, t, n, r, o) {
                  var i = this.props;
                  return i.forPrint
                    ? this.renderPrintFgSegs(e)
                    : i.slatCoords
                    ? this.renderPositionedFgSegs(e, t, n, r, o)
                    : null;
                }),
                (n.prototype.renderPrintFgSegs = function (e) {
                  var t = this,
                    n = t.props;
                  return (
                    (e = yn(e, t.context.options.eventOrder)),
                    e.map(function (e) {
                      return wl(
                        "div",
                        {
                          className: "fc-timegrid-event-harness",
                          key: e.eventRange.instance.instanceId,
                        },
                        wl(
                          Hc,
                          vs(
                            {
                              seg: e,
                              isDragging: !1,
                              isResizing: !1,
                              isDateSelecting: !1,
                              isSelected: !1,
                              isCondensed: !1,
                            },
                            Dn(e, n.todayRange, n.nowDate)
                          )
                        )
                      );
                    })
                  );
                }),
                (n.prototype.renderPositionedFgSegs = function (e, t, n, r, o) {
                  var i = this,
                    a = this,
                    s = a.context,
                    l = a.props;
                  return (
                    (e = Pa(
                      e,
                      l.date,
                      l.slatCoords,
                      s.options.eventMinHeight,
                      s.options.eventOrder
                    )),
                    e.map(function (e) {
                      var a = e.eventRange.instance.instanceId,
                        s = n || r || o,
                        u = s
                          ? vs({ left: 0, right: 0 }, i.computeSegTopBottomCss(e))
                          : i.computeFgSegPositionCss(e);
                      return wl(
                        "div",
                        {
                          className:
                            "fc-timegrid-event-harness" +
                            (e.level > 0
                              ? " fc-timegrid-event-harness-inset"
                              : ""),
                          key: a,
                          style: vs({ visibility: t[a] ? "hidden" : "" }, u),
                        },
                        wl(
                          Hc,
                          vs(
                            {
                              seg: e,
                              isDragging: n,
                              isResizing: r,
                              isDateSelecting: o,
                              isSelected: a === l.eventSelection,
                              isCondensed:
                                e.bottom - e.top <
                                su.timeGridEventCondensedHeight,
                            },
                            Dn(e, l.todayRange, l.nowDate)
                          )
                        )
                      );
                    })
                  );
                }),
                (n.prototype.renderFillSegs = function (e, t) {
                  var n = this,
                    r = this,
                    o = r.context,
                    i = r.props;
                  if (!i.slatCoords) return null;
                  Na(e, i.date, i.slatCoords, o.options.eventMinHeight);
                  var a = e.map(function (e) {
                    return wl(
                      "div",
                      {
                        key: Rn(e.eventRange),
                        className: "fc-timegrid-bg-harness",
                        style: n.computeSegTopBottomCss(e),
                      },
                      "bg-event" === t
                        ? wl(Nu, vs({ seg: e }, Dn(e, i.todayRange, i.nowDate)))
                        : Bi(t)
                    );
                  });
                  return wl(Dl, null, a);
                }),
                (n.prototype.renderNowIndicator = function (e) {
                  var t = this.props,
                    n = t.slatCoords,
                    r = t.date;
                  return n
                    ? e.map(function (e, t) {
                        return wl(
                          Mu,
                          { isAxis: !1, date: r, key: t },
                          function (t, o, i, a) {
                            return wl(
                              "div",
                              {
                                ref: t,
                                className: ["fc-timegrid-now-indicator-line"]
                                  .concat(o)
                                  .join(" "),
                                style: { top: n.computeDateTop(e.start, r) },
                              },
                              a
                            );
                          }
                        );
                      })
                    : null;
                }),
                (n.prototype.computeFgSegPositionCss = function (e) {
                  var t,
                    n,
                    r = this.context,
                    o = r.isRtl,
                    i = r.options,
                    a = i.slotEventOverlap,
                    s = e.backwardCoord,
                    l = e.forwardCoord;
                  a && (l = Math.min(1, s + 2 * (l - s))),
                    o ? ((t = 1 - l), (n = s)) : ((t = s), (n = 1 - l));
                  var u = {
                    zIndex: e.level + 1,
                    left: 100 * t + "%",
                    right: 100 * n + "%",
                  };
                  return (
                    a &&
                      e.forwardPressure &&
                      (u[o ? "marginLeft" : "marginRight"] = 20),
                    vs(vs({}, u), this.computeSegTopBottomCss(e))
                  );
                }),
                (n.prototype.computeSegTopBottomCss = function (e) {
                  return { top: e.top, bottom: -e.bottom };
                }),
                n
              );
            })(Il),
            Lc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.splitFgEventSegs = pt(_a)),
                  (t.splitBgEventSegs = pt(_a)),
                  (t.splitBusinessHourSegs = pt(_a)),
                  (t.splitNowIndicatorSegs = pt(_a)),
                  (t.splitDateSelectionSegs = pt(_a)),
                  (t.splitEventDrag = pt(Ia)),
                  (t.splitEventResize = pt(Ia)),
                  (t.rootElRef = El()),
                  (t.cellElRefs = new Tu()),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this,
                    n = t.props,
                    r = t.context,
                    o =
                      r.options.nowIndicator &&
                      n.slatCoords &&
                      n.slatCoords.safeComputeTop(n.nowDate),
                    i = n.cells.length,
                    a = this.splitFgEventSegs(n.fgEventSegs, i),
                    s = this.splitBgEventSegs(n.bgEventSegs, i),
                    l = this.splitBusinessHourSegs(n.businessHourSegs, i),
                    u = this.splitNowIndicatorSegs(n.nowIndicatorSegs, i),
                    c = this.splitDateSelectionSegs(n.dateSelectionSegs, i),
                    d = this.splitEventDrag(n.eventDrag, i),
                    f = this.splitEventResize(n.eventResize, i);
                  return wl(
                    "div",
                    { className: "fc-timegrid-cols", ref: this.rootElRef },
                    wl(
                      "table",
                      {
                        style: {
                          minWidth: n.tableMinWidth,
                          width: n.clientWidth,
                        },
                      },
                      n.tableColGroupNode,
                      wl(
                        "tbody",
                        null,
                        wl(
                          "tr",
                          null,
                          n.axis &&
                            wl(
                              "td",
                              { className: "fc-timegrid-col fc-timegrid-axis" },
                              wl(
                                "div",
                                { className: "fc-timegrid-col-frame" },
                                wl(
                                  "div",
                                  {
                                    className:
                                      "fc-timegrid-now-indicator-container",
                                  },
                                  "number" == typeof o &&
                                    wl(
                                      Mu,
                                      { isAxis: !0, date: n.nowDate },
                                      function (e, t, n, r) {
                                        return wl(
                                          "div",
                                          {
                                            ref: e,
                                            className: [
                                              "fc-timegrid-now-indicator-arrow",
                                            ]
                                              .concat(t)
                                              .join(" "),
                                            style: { top: o },
                                          },
                                          r
                                        );
                                      }
                                    )
                                )
                              )
                            ),
                          n.cells.map(function (t, r) {
                            return wl(Ac, {
                              key: t.key,
                              elRef: e.cellElRefs.createRef(t.key),
                              dateProfile: n.dateProfile,
                              date: t.date,
                              nowDate: n.nowDate,
                              todayRange: n.todayRange,
                              extraHookProps: t.extraHookProps,
                              extraDataAttrs: t.extraDataAttrs,
                              extraClassNames: t.extraClassNames,
                              fgEventSegs: a[r],
                              bgEventSegs: s[r],
                              businessHourSegs: l[r],
                              nowIndicatorSegs: u[r],
                              dateSelectionSegs: c[r],
                              eventDrag: d[r],
                              eventResize: f[r],
                              slatCoords: n.slatCoords,
                              eventSelection: n.eventSelection,
                              forPrint: n.forPrint,
                            });
                          })
                        )
                      )
                    )
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  this.updateCoords();
                }),
                (n.prototype.componentDidUpdate = function () {
                  this.updateCoords();
                }),
                (n.prototype.updateCoords = function () {
                  var e = this.props;
                  e.onColCoords &&
                    null !== e.clientWidth &&
                    e.onColCoords(
                      new gl(
                        this.rootElRef.current,
                        Va(this.cellElRefs.currentMap, e.cells),
                        !0,
                        !1
                      )
                    );
                }),
                n
              );
            })(Il),
            zc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.processSlotOptions = pt(Fa)),
                  (t.state = { slatCoords: null }),
                  (t.handleScrollRequest = function (e) {
                    var n = t.props.onScrollTopRequest,
                      r = t.state.slatCoords;
                    if (n && r) {
                      if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)), o && (o += 1), n(o);
                      }
                      return !0;
                    }
                    return !1;
                  }),
                  (t.handleColCoords = function (e) {
                    t.colCoords = e;
                  }),
                  (t.handleSlatCoords = function (e) {
                    t.setState({ slatCoords: e }),
                      t.props.onSlatCoords && t.props.onSlatCoords(e);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.state;
                  return wl(
                    "div",
                    {
                      className: "fc-timegrid-body",
                      ref: t.rootElRef,
                      style: { width: t.clientWidth, minWidth: t.tableMinWidth },
                    },
                    wl(Pc, {
                      axis: t.axis,
                      dateProfile: t.dateProfile,
                      slatMetas: t.slatMetas,
                      clientWidth: t.clientWidth,
                      minHeight: t.expandRows ? t.clientHeight : "",
                      tableMinWidth: t.tableMinWidth,
                      tableColGroupNode: t.axis ? t.tableColGroupNode : null,
                      onCoords: this.handleSlatCoords,
                    }),
                    wl(Lc, {
                      cells: t.cells,
                      axis: t.axis,
                      dateProfile: t.dateProfile,
                      businessHourSegs: t.businessHourSegs,
                      bgEventSegs: t.bgEventSegs,
                      fgEventSegs: t.fgEventSegs,
                      dateSelectionSegs: t.dateSelectionSegs,
                      eventSelection: t.eventSelection,
                      eventDrag: t.eventDrag,
                      eventResize: t.eventResize,
                      todayRange: t.todayRange,
                      nowDate: t.nowDate,
                      nowIndicatorSegs: t.nowIndicatorSegs,
                      clientWidth: t.clientWidth,
                      tableMinWidth: t.tableMinWidth,
                      tableColGroupNode: t.tableColGroupNode,
                      slatCoords: n.slatCoords,
                      onColCoords: this.handleColCoords,
                      forPrint: t.forPrint,
                    })
                  );
                }),
                (n.prototype.componentDidMount = function () {
                  this.scrollResponder = this.context.createScrollResponder(
                    this.handleScrollRequest
                  );
                }),
                (n.prototype.componentDidUpdate = function (e) {
                  this.scrollResponder.update(
                    e.dateProfile !== this.props.dateProfile
                  );
                }),
                (n.prototype.componentWillUnmount = function () {
                  this.scrollResponder.detach();
                }),
                (n.prototype.positionToHit = function (e, t) {
                  var n = this.context,
                    r = n.dateEnv,
                    o = n.options,
                    i = this.colCoords,
                    a = this.props.dateProfile,
                    s = this.state.slatCoords,
                    l = this.processSlotOptions(
                      this.props.slotDuration,
                      o.snapDuration
                    ),
                    u = l.snapDuration,
                    c = l.snapsPerSlot,
                    d = i.leftToIndex(e),
                    f = s.positions.topToIndex(t);
                  if (null != d && null != f) {
                    var p = s.positions.tops[f],
                      h = s.positions.getHeight(f),
                      g = (t - p) / h,
                      v = Math.floor(g * c),
                      m = f * c + v,
                      y = this.props.cells[d].date,
                      b = $e(a.slotMinTime, Ke(u, m)),
                      C = r.add(y, b);
                    return {
                      col: d,
                      dateSpan: {
                        range: { start: C, end: r.add(C, u) },
                        allDay: !1,
                      },
                      dayEl: i.els[d],
                      relativeRect: {
                        left: i.lefts[d],
                        right: i.rights[d],
                        top: p,
                        bottom: p + h,
                      },
                    };
                  }
                  return null;
                }),
                n
              );
            })(Il),
            jc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.sliceRange = function (e, t) {
                  for (var n = [], r = 0; r < t.length; r += 1) {
                    var o = an(e, t[r]);
                    o &&
                      n.push({
                        start: o.start,
                        end: o.end,
                        isStart: o.start.valueOf() === e.start.valueOf(),
                        isEnd: o.end.valueOf() === e.end.valueOf(),
                        col: r,
                      });
                  }
                  return n;
                }),
                n
              );
            })(Su),
            Uc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.buildDayRanges = pt(Ga)),
                  (t.slicer = new jc()),
                  (t.timeColsRef = El()),
                  (t.handleRootEl = function (e) {
                    e
                      ? t.context.registerInteractiveComponent(t, { el: e })
                      : t.context.unregisterInteractiveComponent(t);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this,
                    n = t.props,
                    r = t.context,
                    o = n.dateProfile,
                    i = n.dayTableModel,
                    a = r.options.nowIndicator,
                    s = this.buildDayRanges(i, o, r.dateEnv);
                  return wl(yu, { unit: a ? "minute" : "day" }, function (t, l) {
                    return wl(
                      zc,
                      vs(
                        { ref: e.timeColsRef, rootElRef: e.handleRootEl },
                        e.slicer.sliceProps(n, o, null, r, s),
                        {
                          forPrint: n.forPrint,
                          axis: n.axis,
                          dateProfile: o,
                          slatMetas: n.slatMetas,
                          slotDuration: n.slotDuration,
                          cells: i.cells[0],
                          tableColGroupNode: n.tableColGroupNode,
                          tableMinWidth: n.tableMinWidth,
                          clientWidth: n.clientWidth,
                          clientHeight: n.clientHeight,
                          expandRows: n.expandRows,
                          nowDate: t,
                          nowIndicatorSegs: a && e.slicer.sliceNowDate(t, r, s),
                          todayRange: l,
                          onScrollTopRequest: n.onScrollTopRequest,
                          onSlatCoords: n.onSlatCoords,
                        }
                      )
                    );
                  });
                }),
                (n.prototype.queryHit = function (e, t) {
                  var n = this.timeColsRef.current.positionToHit(e, t);
                  return n
                    ? {
                        component: this,
                        dateSpan: n.dateSpan,
                        dayEl: n.dayEl,
                        rect: {
                          left: n.relativeRect.left,
                          right: n.relativeRect.right,
                          top: n.relativeRect.top,
                          bottom: n.relativeRect.bottom,
                        },
                        layer: 0,
                      }
                    : null;
                }),
                n
              );
            })(Pl),
            Bc = [
              { hours: 1 },
              { minutes: 30 },
              { minutes: 15 },
              { seconds: 30 },
              { seconds: 15 },
            ],
            Wc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.buildTimeColsModel = pt(qa)), (t.buildSlatMetas = pt(Ya)), t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this.context,
                    n = t.options,
                    r = t.dateEnv,
                    o = t.dateProfileGenerator,
                    i = this.props,
                    a = i.dateProfile,
                    s = this.buildTimeColsModel(a, o),
                    l = this.allDaySplitter.splitProps(i),
                    u = this.buildSlatMetas(
                      a.slotMinTime,
                      a.slotMaxTime,
                      n.slotLabelInterval,
                      n.slotDuration,
                      r
                    ),
                    c = n.dayMinWidth,
                    d = !c,
                    f = c,
                    p =
                      n.dayHeaders &&
                      wl(bu, {
                        dates: s.headerDates,
                        dateProfile: a,
                        datesRepDistinctDays: !0,
                        renderIntro: d ? this.renderHeadAxis : null,
                      }),
                    h =
                      !1 !== n.allDaySlot &&
                      function (t) {
                        return wl(
                          Cc,
                          vs(
                            {},
                            l.allDay,
                            {
                              dateProfile: a,
                              dayTableModel: s,
                              nextDayThreshold: n.nextDayThreshold,
                              tableMinWidth: t.tableMinWidth,
                              colGroupNode: t.tableColGroupNode,
                              renderRowIntro: d ? e.renderTableRowAxis : null,
                              showWeekNumbers: !1,
                              expandRows: !1,
                              headerAlignElRef: e.headerElRef,
                              clientWidth: t.clientWidth,
                              clientHeight: t.clientHeight,
                              forPrint: i.forPrint,
                            },
                            e.getAllDayMaxEventProps()
                          )
                        );
                      },
                    g = function (t) {
                      return wl(
                        Uc,
                        vs({}, l.timed, {
                          dayTableModel: s,
                          dateProfile: a,
                          axis: d,
                          slotDuration: n.slotDuration,
                          slatMetas: u,
                          forPrint: i.forPrint,
                          tableColGroupNode: t.tableColGroupNode,
                          tableMinWidth: t.tableMinWidth,
                          clientWidth: t.clientWidth,
                          clientHeight: t.clientHeight,
                          onSlatCoords: e.handleSlatCoords,
                          expandRows: t.expandRows,
                          onScrollTopRequest: e.handleScrollTopRequest,
                        })
                      );
                    };
                  return f
                    ? this.renderHScrollLayout(
                        p,
                        h,
                        g,
                        s.colCnt,
                        c,
                        u,
                        this.state.slatCoords
                      )
                    : this.renderSimpleLayout(p, h, g);
                }),
                n
              );
            })(Mc),
            Vc = { allDaySlot: Boolean },
            Fc = ro({
              initialView: "timeGridWeek",
              optionRefiners: Vc,
              views: {
                timeGrid: {
                  component: Wc,
                  usesMinMaxTime: !0,
                  allDaySlot: !0,
                  slotDuration: "00:30:00",
                  slotEventOverlap: !0,
                },
                timeGridDay: { type: "timeGrid", duration: { days: 1 } },
                timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
              },
            }),
            Gc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this.props,
                    t = e.dayDate,
                    n = e.todayRange,
                    r = this.context,
                    o = r.theme,
                    i = r.dateEnv,
                    a = r.options,
                    s = r.viewApi,
                    l = mr(t, n),
                    u = a.listDayFormat ? i.format(t, a.listDayFormat) : "",
                    c = a.listDaySideFormat
                      ? i.format(t, a.listDaySideFormat)
                      : "",
                    d = a.navLinks ? Cr(t) : null,
                    f = vs(
                      {
                        date: i.toDate(t),
                        view: s,
                        text: u,
                        sideText: c,
                        navLinkData: d,
                      },
                      l
                    ),
                    p = ["fc-list-day"].concat(yr(l, o));
                  return wl(
                    Hl,
                    {
                      hookProps: f,
                      classNames: a.dayHeaderClassNames,
                      content: a.dayHeaderContent,
                      defaultContent: Xa,
                      didMount: a.dayHeaderDidMount,
                      willUnmount: a.dayHeaderWillUnmount,
                    },
                    function (e, n, r, i) {
                      return wl(
                        "tr",
                        {
                          ref: e,
                          className: p.concat(n).join(" "),
                          "data-date": lt(t),
                        },
                        wl(
                          "th",
                          { colSpan: 3 },
                          wl(
                            "div",
                            {
                              className:
                                "fc-list-day-cushion " +
                                o.getClass("tableCellShaded"),
                              ref: r,
                            },
                            i
                          )
                        )
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            Yc = kt({ hour: "numeric", minute: "2-digit", meridiem: "short" }),
            Zc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = e.props,
                    n = e.context,
                    r = t.seg,
                    o = n.options.eventTimeFormat || Yc;
                  return wl(
                    xu,
                    {
                      seg: r,
                      timeText: "",
                      disableDragging: !0,
                      disableResizing: !0,
                      defaultContent: $a,
                      isPast: t.isPast,
                      isFuture: t.isFuture,
                      isToday: t.isToday,
                      isSelected: t.isSelected,
                      isDragging: t.isDragging,
                      isResizing: t.isResizing,
                      isDateSelecting: t.isDateSelecting,
                    },
                    function (e, t, i, a, s) {
                      return wl(
                        "tr",
                        {
                          className: [
                            "fc-list-event",
                            s.event.url ? "fc-event-forced-url" : "",
                          ]
                            .concat(t)
                            .join(" "),
                          ref: e,
                        },
                        Ja(r, o, n),
                        wl(
                          "td",
                          { className: "fc-list-event-graphic" },
                          wl("span", {
                            className: "fc-list-event-dot",
                            style: {
                              borderColor: s.borderColor || s.backgroundColor,
                            },
                          })
                        ),
                        wl("td", { className: "fc-list-event-title", ref: i }, a)
                      );
                    }
                  );
                }),
                n
              );
            })(Il),
            qc = (function (e) {
              function n() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.computeDateVars = pt(es)),
                  (t.eventStoreToSegs = pt(t._eventStoreToSegs)),
                  (t.setRootEl = function (e) {
                    e
                      ? t.context.registerInteractiveComponent(t, { el: e })
                      : t.context.unregisterInteractiveComponent(t);
                  }),
                  t
                );
              }
              return (
                t(n, e),
                (n.prototype.render = function () {
                  var e = this,
                    t = this,
                    n = t.props,
                    r = t.context,
                    o = [
                      "fc-list",
                      r.theme.getClass("table"),
                      !1 !== r.options.stickyHeaderDates ? "fc-list-sticky" : "",
                    ],
                    i = this.computeDateVars(n.dateProfile),
                    a = i.dayDates,
                    s = i.dayRanges,
                    l = this.eventStoreToSegs(n.eventStore, n.eventUiBases, s);
                  return wl(
                    zl,
                    { viewSpec: r.viewSpec, elRef: this.setRootEl },
                    function (t, r) {
                      return wl(
                        "div",
                        { ref: t, className: o.concat(r).join(" ") },
                        wl(
                          Du,
                          {
                            liquid: !n.isHeightAuto,
                            overflowX: n.isHeightAuto ? "visible" : "hidden",
                            overflowY: n.isHeightAuto ? "visible" : "auto",
                          },
                          l.length > 0
                            ? e.renderSegList(l, a)
                            : e.renderEmptyMessage()
                        )
                      );
                    }
                  );
                }),
                (n.prototype.renderEmptyMessage = function () {
                  var e = this.context,
                    t = e.options,
                    n = e.viewApi,
                    r = { text: t.noEventsText, view: n };
                  return wl(
                    Hl,
                    {
                      hookProps: r,
                      classNames: t.noEventsClassNames,
                      content: t.noEventsContent,
                      defaultContent: Qa,
                      didMount: t.noEventsDidMount,
                      willUnmount: t.noEventsWillUnmount,
                    },
                    function (e, t, n, r) {
                      return wl(
                        "div",
                        {
                          className: ["fc-list-empty"].concat(t).join(" "),
                          ref: e,
                        },
                        wl(
                          "div",
                          { className: "fc-list-empty-cushion", ref: n },
                          r
                        )
                      );
                    }
                  );
                }),
                (n.prototype.renderSegList = function (e, t) {
                  var n = this.context,
                    r = n.theme,
                    o = n.options,
                    i = ts(e);
                  return wl(yu, { unit: "day" }, function (e, n) {
                    for (var a = [], s = 0; s < i.length; s += 1) {
                      var l = i[s];
                      if (l) {
                        var u = t[s].toISOString();
                        a.push(wl(Gc, { key: u, dayDate: t[s], todayRange: n })),
                          (l = yn(l, o.eventOrder));
                        for (var c = 0, d = l; c < d.length; c++) {
                          var f = d[c];
                          a.push(
                            wl(
                              Zc,
                              vs(
                                {
                                  key: u + ":" + f.eventRange.instance.instanceId,
                                  seg: f,
                                  isDragging: !1,
                                  isResizing: !1,
                                  isDateSelecting: !1,
                                  isSelected: !1,
                                },
                                Dn(f, n, e)
                              )
                            )
                          );
                        }
                      }
                    }
                    return wl(
                      "table",
                      { className: "fc-list-table " + r.getClass("table") },
                      wl("tbody", null, a)
                    );
                  });
                }),
                (n.prototype._eventStoreToSegs = function (e, t, n) {
                  return this.eventRangesToSegs(
                    fn(
                      e,
                      t,
                      this.props.dateProfile.activeRange,
                      this.context.options.nextDayThreshold
                    ).fg,
                    n
                  );
                }),
                (n.prototype.eventRangesToSegs = function (e, t) {
                  for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.eventRangeToSegs(i, t));
                  }
                  return n;
                }),
                (n.prototype.eventRangeToSegs = function (e, t) {
                  var n,
                    r,
                    o,
                    i = this.context.dateEnv,
                    a = this.context.options.nextDayThreshold,
                    s = e.range,
                    l = e.def.allDay,
                    u = [];
                  for (n = 0; n < t.length; n += 1)
                    if (
                      (r = an(s, t[n])) &&
                      ((o = {
                        component: this,
                        eventRange: e,
                        start: r.start,
                        end: r.end,
                        isStart:
                          e.isStart && r.start.valueOf() === s.start.valueOf(),
                        isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
                        dayIndex: n,
                      }),
                      u.push(o),
                      !o.isEnd &&
                        !l &&
                        n + 1 < t.length &&
                        s.end < i.add(t[n + 1].start, a))
                    ) {
                      (o.end = s.end), (o.isEnd = !0);
                      break;
                    }
                  return u;
                }),
                n
              );
            })(Pl),
            Xc = {
              listDayFormat: ns,
              listDaySideFormat: ns,
              noEventsClassNames: Pt,
              noEventsContent: Pt,
              noEventsDidMount: Pt,
              noEventsWillUnmount: Pt,
            },
            $c = ro({
              optionRefiners: Xc,
              views: {
                list: {
                  component: qc,
                  buttonTextKey: "list",
                  listDayFormat: {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  },
                },
                listDay: {
                  type: "list",
                  duration: { days: 1 },
                  listDayFormat: { weekday: "long" },
                },
                listWeek: {
                  type: "list",
                  duration: { weeks: 1 },
                  listDayFormat: { weekday: "long" },
                  listDaySideFormat: {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  },
                },
                listMonth: {
                  type: "list",
                  duration: { month: 1 },
                  listDaySideFormat: { weekday: "long" },
                },
                listYear: {
                  type: "list",
                  duration: { year: 1 },
                  listDaySideFormat: { weekday: "long" },
                },
              },
            }),
            Jc = (function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return t(n, e), n;
            })(bl);
          (Jc.prototype.classes = {
            root: "fc-theme-bootstrap",
            table: "table-bordered",
            tableCellShaded: "table-active",
            buttonGroup: "btn-group",
            button: "btn btn-primary",
            buttonActive: "active",
            popover: "popover",
            popoverHeader: "popover-header",
            popoverContent: "popover-body",
          }),
            (Jc.prototype.baseIconClass = "fa"),
            (Jc.prototype.iconClasses = {
              close: "fa-times",
              prev: "fa-chevron-left",
              next: "fa-chevron-right",
              prevYear: "fa-angle-double-left",
              nextYear: "fa-angle-double-right",
            }),
            (Jc.prototype.rtlIconClasses = {
              prev: "fa-chevron-right",
              next: "fa-chevron-left",
              prevYear: "fa-angle-double-right",
              nextYear: "fa-angle-double-left",
            }),
            (Jc.prototype.iconOverrideOption = "bootstrapFontAwesome"),
            (Jc.prototype.iconOverrideCustomButtonOption =
              "bootstrapFontAwesome"),
            (Jc.prototype.iconOverridePrefix = "fa-");
          var Kc = ro({ themeClasses: { bootstrap: Jc } }),
            Qc = { googleCalendarApiKey: String },
            ed = {
              googleCalendarApiKey: String,
              googleCalendarId: String,
              googleCalendarApiBase: String,
              extraParams: Pt,
            },
            td = "https://www.googleapis.com/calendar/v3/calendars",
            nd = {
              parseMeta: function (e) {
                var t = e.googleCalendarId;
                return (
                  !t && e.url && (t = rs(e.url)),
                  t
                    ? {
                        googleCalendarId: t,
                        googleCalendarApiKey: e.googleCalendarApiKey,
                        googleCalendarApiBase: e.googleCalendarApiBase,
                        extraParams: e.extraParams,
                      }
                    : null
                );
              },
              fetch: function (e, t, n) {
                var r = e.context,
                  o = r.dateEnv,
                  i = r.options,
                  a = e.eventSource.meta,
                  s = a.googleCalendarApiKey || i.googleCalendarApiKey;
                if (s) {
                  var l = os(a),
                    u = a.extraParams,
                    c = "function" == typeof u ? u() : u,
                    d = is(e.range, s, c, o);
                  Go(
                    "GET",
                    l,
                    d,
                    function (e, r) {
                      e.error
                        ? n({
                            message: "Google Calendar API: " + e.error.message,
                            errors: e.error.errors,
                            xhr: r,
                          })
                        : t({ rawEvents: as(e.items, d.timeZone), xhr: r });
                    },
                    function (e, t) {
                      n({ message: e, xhr: t });
                    }
                  );
                } else
                  n({
                    message:
                      "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/",
                  });
              },
            },
            rd = ro({
              eventSourceDefs: [nd],
              optionRefiners: Qc,
              eventSourceRefiners: ed,
            });
          return (
            Kl.push(ac, Dc, Fc, $c, Kc, rd),
            (e.BASE_OPTION_DEFAULTS = Bs),
            (e.BASE_OPTION_REFINERS = Us),
            (e.BaseComponent = Il),
            (e.BgEvent = Nu),
            (e.BootstrapTheme = Jc),
            (e.Calendar = Ou),
            (e.CalendarApi = el),
            (e.CalendarContent = hu),
            (e.CalendarDataManager = tu),
            (e.CalendarDataProvider = nu),
            (e.CalendarRoot = gu),
            (e.Component = Cl),
            (e.ContentHook = co),
            (e.CustomContentRenderContext = Ol),
            (e.DateComponent = Pl),
            (e.DateEnv = sl),
            (e.DateProfileGenerator = Ul),
            (e.DayCellContent = Iu),
            (e.DayCellRoot = Pu),
            (e.DayGridView = wc),
            (e.DayHeader = bu),
            (e.DaySeriesModel = Cu),
            (e.DayTable = Cc),
            (e.DayTableModel = wu),
            (e.DayTableSlicer = bc),
            (e.DayTimeCols = Uc),
            (e.DayTimeColsSlicer = jc),
            (e.DayTimeColsView = Wc),
            (e.DelayedRunner = Ql),
            (e.Draggable = rc),
            (e.ElementDragging = au),
            (e.ElementScrollController = ml),
            (e.Emitter = hl),
            (e.EventApi = tl),
            (e.EventRoot = xu),
            (e.EventSourceApi = Ss),
            (e.FeaturefulElementDragging = Yu),
            (e.Fragment = Dl),
            (e.Interaction = ou),
            (e.ListView = qc),
            (e.MountHook = Ll),
            (e.NamedTimeZoneImpl = ru),
            (e.NowIndicatorRoot = Mu),
            (e.NowTimer = yu),
            (e.PointerDragging = ju),
            (e.PositionCache = gl),
            (e.RefMap = Tu),
            (e.RenderHook = Hl),
            (e.ScrollController = vl),
            (e.ScrollResponder = kl),
            (e.Scroller = Du),
            (e.SimpleScrollGrid = Ru),
            (e.Slicer = Su),
            (e.Splitter = fl),
            (e.StandardEvent = ku),
            (e.Table = yc),
            (e.TableDateCell = vu),
            (e.TableDowCell = mu),
            (e.TableView = sc),
            (e.Theme = bl),
            (e.ThirdPartyDraggable = ic),
            (e.TimeCols = zc),
            (e.TimeColsSlatsCoords = _c),
            (e.TimeColsView = Mc),
            (e.ViewApi = Ks),
            (e.ViewContextType = Ml),
            (e.ViewRoot = zl),
            (e.WeekNumberRoot = Hu),
            (e.WindowScrollController = yl),
            (e.addDays = se),
            (e.addDurations = $e),
            (e.addMs = le),
            (e.addWeeks = ae),
            (e.allowContextMenu = J),
            (e.allowSelection = X),
            (e.applyMutationToEventStore = jn),
            (e.applyStyle = z),
            (e.applyStyleProp = j),
            (e.asCleanDays = Xe),
            (e.asRoughMinutes = nt),
            (e.asRoughMs = ot),
            (e.asRoughSeconds = rt),
            (e.buildClassNameNormalizer = fo),
            (e.buildDayRanges = Ga),
            (e.buildDayTableModel = Ta),
            (e.buildEventApis = Xn),
            (e.buildEventRangeKey = Rn),
            (e.buildHashFromArray = Oe),
            (e.buildNavLinkData = Cr),
            (e.buildSegCompareObj = bn),
            (e.buildSegTimeText = En),
            (e.buildSlatMetas = Ya),
            (e.buildTimeColsModel = qa),
            (e.collectFromHash = Be),
            (e.combineEventUis = Ft),
            (e.compareByFieldSpec = ee),
            (e.compareByFieldSpecs = Q),
            (e.compareNumbers = re),
            (e.compareObjs = je),
            (e.computeEdges = Rr),
            (e.computeFallbackHeaderFormat = bi),
            (e.computeHeightAndMargins = Mr),
            (e.computeInnerRect = xr),
            (e.computeRect = kr),
            (e.computeSegDraggable = Cn),
            (e.computeSegEndResizable = Sn),
            (e.computeSegStartResizable = wn),
            (e.computeShrinkWidth = Di),
            (e.computeSmallestCellWidth = ie),
            (e.computeVisibleDayRange = Qt),
            (e.config = su),
            (e.constrainPoint = dr),
            (e.createContext = Tl),
            (e.createDuration = Ge),
            (e.createElement = wl),
            (e.createEmptyEventStore = Lt),
            (e.createEventInstance = _e),
            (e.createEventUi = Vt),
            (e.createFormatter = kt),
            (e.createPlugin = ro),
            (e.createRef = El),
            (e.diffDates = tn),
            (e.diffDayAndTime = he),
            (e.diffDays = ce),
            (e.diffPoints = pr),
            (e.diffWeeks = ue),
            (e.diffWholeDays = ve),
            (e.diffWholeWeeks = ge),
            (e.disableCursor = Y),
            (e.elementClosest = H),
            (e.elementMatches = O),
            (e.enableCursor = Z),
            (e.eventTupleToStore = Ht),
            (e.filterEventStoreDefs = jt),
            (e.filterHash = Pe),
            (e.findDirectChildren = L),
            (e.findElements = A),
            (e.flexibleCompare = te),
            (e.flushToDom = Rl),
            (e.formatDate = rr),
            (e.formatDayString = lt),
            (e.formatIsoTimeString = ut),
            (e.formatRange = or),
            (e.getAllowYScrolling = Ri),
            (e.getCanVGrowWithinCell = hr),
            (e.getClippingParents = Ir),
            (e.getDateMeta = mr),
            (e.getDayClassNames = yr),
            (e.getDefaultEventEnd = zn),
            (e.getElSeg = gn),
            (e.getEventClassNames = Tn),
            (e.getIsRtlScrollbarOnLeft = wr),
            (e.getRectCenter = fr),
            (e.getRelevantEvents = Ot),
            (e.getScrollGridClassNames = Pi),
            (e.getScrollbarWidths = Er),
            (e.getSectionClassNames = Ni),
            (e.getSectionHasLiquidHeight = Ti),
            (e.getSegMeta = Dn),
            (e.getSlotClassNames = br),
            (e.getStickyFooterScrollbar = Ai),
            (e.getStickyHeaderDates = Oi),
            (e.getUnequalProps = ze),
            (e.globalLocales = ll),
            (e.globalPlugins = Kl),
            (e.greatestDurationDenominator = at),
            (e.guid = G),
            (e.hasBgRendering = pn),
            (e.hasShrinkWidth = Ii),
            (e.identity = Pt),
            (e.interactionSettingsStore = iu),
            (e.interactionSettingsToStore = gi),
            (e.intersectRanges = an),
            (e.intersectRects = ur),
            (e.isArraysEqual = ft),
            (e.isColPropsEqual = ki),
            (e.isDateSpansEqual = Mn),
            (e.isInt = oe),
            (e.isInteractionValid = Zr),
            (e.isMultiDayRange = en),
            (e.isPropsEqual = Le),
            (e.isPropsValid = $r),
            (e.isValidDate = ke),
            (e.listenBySelector = W),
            (e.mapHash = Ne),
            (e.memoize = pt),
            (e.memoizeArraylike = gt),
            (e.memoizeHashlike = vt),
            (e.memoizeObjArg = ht),
            (e.mergeEventStores = zt),
            (e.multiplyDuration = Ke),
            (e.padStart = ne),
            (e.parseBusinessHours = ar),
            (e.parseClassNames = Wt),
            (e.parseDragMeta = vi),
            (e.parseEventDef = Xt),
            (e.parseFieldSpecs = K),
            (e.parseMarker = Jn),
            (e.pointInsideRect = lr),
            (e.preventContextMenu = $),
            (e.preventDefault = U),
            (e.preventSelection = q),
            (e.rangeContainsMarker = cn),
            (e.rangeContainsRange = un),
            (e.rangesEqual = sn),
            (e.rangesIntersect = ln),
            (e.refineEventDef = Zt),
            (e.refineProps = It),
            (e.removeElement = N),
            (e.removeExact = dt),
            (e.render = Sl),
            (e.renderChunkContent = xi),
            (e.renderFill = Bi),
            (e.renderMicroColGroup = Mi),
            (e.renderScrollShim = Hi),
            (e.requestJson = Go),
            (e.sanitizeShrinkWidth = _i),
            (e.setElSeg = hn),
            (e.setRef = zr),
            (e.sliceEventStore = fn),
            (e.sliceEvents = pi),
            (e.sortEventSegs = yn),
            (e.startOfDay = me),
            (e.translateRect = cr),
            (e.triggerDateSelect = On),
            (e.unmountComponentAtNode = xl),
            (e.unpromisify = Pr),
            (e.version = "5.6.0"),
            (e.whenTransitionDone = F),
            (e.wholeDivideDurations = it),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            e
          );
        })({})),
          window.FullCalendar.globalLocales.push(
            (function () {
              "use strict";
              return {
                code: "it",
                week: { dow: 1, doy: 4 },
                buttonText: {
                  prev: "Prec",
                  next: "Succ",
                  today: "Oggi",
                  month: "Mese",
                  week: "Settimana",
                  day: "Giorno",
                  list: "Agenda",
                },
                weekText: "Sm",
                allDayText: "Tutto il giorno",
                moreLinkText: function (e) {
                  return "+altri " + e;
                },
                noEventsText: "Non ci sono eventi da visualizzare",
              };
            })()
          );
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function (e, t, n) {
        (function (r) {
          var o,
            i,
            a,
            s = void 0 !== e && e.exports && void 0 !== r ? r : this || window;
          !(function (e) {
            "use strict";
            var t = e.GreenSockGlobals || e,
              n = (function (e) {
                var n,
                  r = e.split("."),
                  o = t;
                for (n = 0; n < r.length; n++) o[r[n]] = o = o[r[n]] || {};
                return o;
              })("com.greensock.utils"),
              r = function (e) {
                var t = e.nodeType,
                  n = "";
                if (1 === t || 9 === t || 11 === t) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === t || 4 === t) return e.nodeValue;
                return n;
              },
              o = document,
              i = o.defaultView ? o.defaultView.getComputedStyle : function () {},
              a = /([A-Z])/g,
              s = function (e, t, n, r) {
                var o;
                return (
                  (n = n || i(e, null))
                    ? ((e = n.getPropertyValue(
                        t.replace(a, "-$1").toLowerCase()
                      )),
                      (o = e || n.length ? e : n[t]))
                    : e.currentStyle && ((n = e.currentStyle), (o = n[t])),
                  r ? o : parseInt(o, 10) || 0
                );
              },
              l = function (e) {
                return !!(
                  e.length &&
                  e[0] &&
                  ((e[0].nodeType && e[0].style && !e.nodeType) ||
                    (e[0].length && e[0][0]))
                );
              },
              u = function (e) {
                var t,
                  n,
                  r,
                  o = [],
                  i = e.length;
                for (t = 0; i > t; t++)
                  if (((n = e[t]), l(n)))
                    for (r = n.length, r = 0; r < n.length; r++) o.push(n[r]);
                  else o.push(n);
                return o;
              },
              c = /(?:\r|\n|\t\t)/g,
              d = /(?:\s\s+)/g,
              f = 127462,
              p = 127487,
              h = function (e) {
                return (
                  ((e.charCodeAt(0) - 55296) << 10) +
                  (e.charCodeAt(1) - 56320) +
                  65536
                );
              },
              g = o.all && !o.addEventListener,
              v =
                " style='position:relative;display:inline-block;" +
                (g ? "*display:inline;*zoom:1;'" : "'"),
              m = function (e, t) {
                e = e || "";
                var n = -1 !== e.indexOf("++"),
                  r = 1;
                return (
                  n && (e = e.split("++").join("")),
                  function () {
                    return (
                      "<" +
                      t +
                      v +
                      (e ? " class='" + e + (n ? r++ : "") + "'>" : ">")
                    );
                  }
                );
              },
              y =
                (n.SplitText =
                t.SplitText =
                  function (e, t) {
                    if (("string" == typeof e && (e = y.selector(e)), !e))
                      throw "cannot split a null element.";
                    (this.elements = l(e) ? u(e) : [e]),
                      (this.chars = []),
                      (this.words = []),
                      (this.lines = []),
                      (this._originals = []),
                      (this.vars = t || {}),
                      this.split(t);
                  }),
              b = function (e, t, n) {
                var r = e.nodeType;
                if (1 === r || 9 === r || 11 === r)
                  for (e = e.firstChild; e; e = e.nextSibling) b(e, t, n);
                else
                  (3 === r || 4 === r) &&
                    (e.nodeValue = e.nodeValue.split(t).join(n));
              },
              C = function (e, t) {
                for (var n = t.length; --n > -1; ) e.push(t[n]);
              },
              w = function (e) {
                var t,
                  n = [],
                  r = e.length;
                for (t = 0; t !== r; n.push(e[t++]));
                return n;
              },
              S = function (e, t, n) {
                for (var r; e && e !== t; ) {
                  if ((r = e._next || e.nextSibling))
                    return r.textContent.charAt(0) === n;
                  e = e.parentNode || e._parent;
                }
                return !1;
              },
              E = function (e) {
                var t,
                  n,
                  r = w(e.childNodes),
                  o = r.length;
                for (t = 0; o > t; t++)
                  (n = r[t]),
                    n._isSplit
                      ? E(n)
                      : (t && 3 === n.previousSibling.nodeType
                          ? (n.previousSibling.nodeValue +=
                              3 === n.nodeType
                                ? n.nodeValue
                                : n.firstChild.nodeValue)
                          : 3 !== n.nodeType && e.insertBefore(n.firstChild, n),
                        e.removeChild(n));
              },
              D = function (e, t, n, r, a, l, u) {
                var c,
                  d,
                  f,
                  p,
                  h,
                  g,
                  v,
                  m,
                  y,
                  w,
                  D,
                  T,
                  R = i(e),
                  x = s(e, "paddingLeft", R),
                  k = -999,
                  M = s(e, "borderBottomWidth", R) + s(e, "borderTopWidth", R),
                  _ = s(e, "borderLeftWidth", R) + s(e, "borderRightWidth", R),
                  I = s(e, "paddingTop", R) + s(e, "paddingBottom", R),
                  P = s(e, "paddingLeft", R) + s(e, "paddingRight", R),
                  N = 0.2 * s(e, "fontSize"),
                  H = s(e, "textAlign", R, !0),
                  O = [],
                  A = [],
                  L = [],
                  z = t.wordDelimiter || " ",
                  j = t.span ? "span" : "div",
                  U = t.type || t.split || "chars,words,lines",
                  B = a && -1 !== U.indexOf("lines") ? [] : null,
                  W = -1 !== U.indexOf("words"),
                  V = -1 !== U.indexOf("chars"),
                  F = "absolute" === t.position || !0 === t.absolute,
                  G = t.linesClass,
                  Y = -1 !== (G || "").indexOf("++"),
                  Z = [];
                for (
                  B &&
                    1 === e.children.length &&
                    e.children[0]._isSplit &&
                    (e = e.children[0]),
                    Y && (G = G.split("++").join("")),
                    d = e.getElementsByTagName("*"),
                    f = d.length,
                    h = [],
                    c = 0;
                  f > c;
                  c++
                )
                  h[c] = d[c];
                if (B || F)
                  for (c = 0; f > c; c++)
                    (p = h[c]),
                      ((g = p.parentNode === e) || F || (V && !W)) &&
                        ((T = p.offsetTop),
                        B &&
                          g &&
                          Math.abs(T - k) > N &&
                          ("BR" !== p.nodeName || 0 === c) &&
                          ((v = []), B.push(v), (k = T)),
                        F &&
                          ((p._x = p.offsetLeft),
                          (p._y = T),
                          (p._w = p.offsetWidth),
                          (p._h = p.offsetHeight)),
                        B &&
                          (((p._isSplit && g) ||
                            (!V && g) ||
                            (W && g) ||
                            (!W &&
                              p.parentNode.parentNode === e &&
                              !p.parentNode._isSplit)) &&
                            (v.push(p),
                            (p._x -= x),
                            S(p, e, z) && (p._wordEnd = !0)),
                          "BR" === p.nodeName &&
                            ((p.nextSibling && "BR" === p.nextSibling.nodeName) ||
                              0 === c) &&
                            B.push([])));
                for (c = 0; f > c; c++)
                  (p = h[c]),
                    (g = p.parentNode === e),
                    "BR" !== p.nodeName
                      ? (F &&
                          ((y = p.style),
                          W ||
                            g ||
                            ((p._x += p.parentNode._x),
                            (p._y += p.parentNode._y)),
                          (y.left = p._x + "px"),
                          (y.top = p._y + "px"),
                          (y.position = "absolute"),
                          (y.display = "block"),
                          (y.width = p._w + 1 + "px"),
                          (y.height = p._h + "px")),
                        !W && V
                          ? p._isSplit
                            ? ((p._next = p.nextSibling),
                              p.parentNode.appendChild(p))
                            : p.parentNode._isSplit
                            ? ((p._parent = p.parentNode),
                              !p.previousSibling &&
                                p.firstChild &&
                                (p.firstChild._isFirst = !0),
                              p.nextSibling &&
                                " " === p.nextSibling.textContent &&
                                !p.nextSibling.nextSibling &&
                                Z.push(p.nextSibling),
                              (p._next =
                                p.nextSibling && p.nextSibling._isFirst
                                  ? null
                                  : p.nextSibling),
                              p.parentNode.removeChild(p),
                              h.splice(c--, 1),
                              f--)
                            : g ||
                              ((T = !p.nextSibling && S(p.parentNode, e, z)),
                              p.parentNode._parent &&
                                p.parentNode._parent.appendChild(p),
                              T &&
                                p.parentNode.appendChild(o.createTextNode(" ")),
                              t.span && (p.style.display = "inline"),
                              O.push(p))
                          : p.parentNode._isSplit &&
                            !p._isSplit &&
                            "" !== p.innerHTML
                          ? A.push(p)
                          : V &&
                            !p._isSplit &&
                            (t.span && (p.style.display = "inline"), O.push(p)))
                      : B || F
                      ? (p.parentNode && p.parentNode.removeChild(p),
                        h.splice(c--, 1),
                        f--)
                      : W || e.appendChild(p);
                for (c = Z.length; --c > -1; ) Z[c].parentNode.removeChild(Z[c]);
                if (B) {
                  for (
                    F &&
                      ((w = o.createElement(j)),
                      e.appendChild(w),
                      (D = w.offsetWidth + "px"),
                      (T = w.offsetParent === e ? 0 : e.offsetLeft),
                      e.removeChild(w)),
                      y = e.style.cssText,
                      e.style.cssText = "display:none;";
                    e.firstChild;
  
                  )
                    e.removeChild(e.firstChild);
                  for (
                    m = " " === z && (!F || (!W && !V)), c = 0;
                    c < B.length;
                    c++
                  ) {
                    for (
                      v = B[c],
                        w = o.createElement(j),
                        w.style.cssText =
                          "display:block;text-align:" +
                          H +
                          ";position:" +
                          (F ? "absolute;" : "relative;"),
                        G && (w.className = G + (Y ? c + 1 : "")),
                        L.push(w),
                        f = v.length,
                        d = 0;
                      f > d;
                      d++
                    )
                      "BR" !== v[d].nodeName &&
                        ((p = v[d]),
                        w.appendChild(p),
                        m && p._wordEnd && w.appendChild(o.createTextNode(" ")),
                        F &&
                          (0 === d &&
                            ((w.style.top = p._y + "px"),
                            (w.style.left = x + T + "px")),
                          (p.style.top = "0px"),
                          T && (p.style.left = p._x - T + "px")));
                    0 === f
                      ? (w.innerHTML = "&nbsp;")
                      : W || V || (E(w), b(w, String.fromCharCode(160), " ")),
                      F && ((w.style.width = D), (w.style.height = p._h + "px")),
                      e.appendChild(w);
                  }
                  e.style.cssText = y;
                }
                F &&
                  (u > e.clientHeight &&
                    ((e.style.height = u - I + "px"),
                    e.clientHeight < u && (e.style.height = u + M + "px")),
                  l > e.clientWidth &&
                    ((e.style.width = l - P + "px"),
                    e.clientWidth < l && (e.style.width = l + _ + "px"))),
                  C(n, O),
                  C(r, A),
                  C(a, L);
              },
              T = function (e, t, n, i) {
                var a,
                  s,
                  l,
                  u,
                  g,
                  v,
                  m,
                  y,
                  C,
                  w = t.span ? "span" : "div",
                  S = t.type || t.split || "chars,words,lines",
                  E = -1 !== S.indexOf("chars"),
                  D = "absolute" === t.position || !0 === t.absolute,
                  T = t.wordDelimiter || " ",
                  R = " " !== T ? "" : D ? "&#173; " : " ",
                  x = t.span ? "</span>" : "</div>",
                  k = !0,
                  M = o.createElement("div"),
                  _ = e.parentNode;
                for (
                  _.insertBefore(M, e),
                    M.textContent = e.nodeValue,
                    _.removeChild(e),
                    e = M,
                    a = r(e),
                    m = -1 !== a.indexOf("<"),
                    !1 !== t.reduceWhiteSpace &&
                      (a = a.replace(d, " ").replace(c, "")),
                    m && (a = a.split("<").join("{{LT}}")),
                    g = a.length,
                    s = (" " === a.charAt(0) ? R : "") + n(),
                    l = 0;
                  g > l;
                  l++
                )
                  if ((v = a.charAt(l)) === T && a.charAt(l - 1) !== T && l) {
                    for (s += k ? x : "", k = !1; a.charAt(l + 1) === T; )
                      (s += R), l++;
                    l === g - 1
                      ? (s += R)
                      : ")" !== a.charAt(l + 1) && ((s += R + n()), (k = !0));
                  } else
                    "{" === v && "{{LT}}" === a.substr(l, 6)
                      ? ((s += E ? i() + "{{LT}}</" + w + ">" : "{{LT}}"),
                        (l += 5))
                      : (v.charCodeAt(0) >= 55296 && v.charCodeAt(0) <= 56319) ||
                        (a.charCodeAt(l + 1) >= 65024 &&
                          a.charCodeAt(l + 1) <= 65039)
                      ? ((y = h(a.substr(l, 2))),
                        (C = h(a.substr(l + 2, 2))),
                        (u =
                          (f > y || y > p || f > C || C > p) &&
                          (127995 > C || C > 127999)
                            ? 2
                            : 4),
                        (s +=
                          E && " " !== v
                            ? i() + a.substr(l, u) + "</" + w + ">"
                            : a.substr(l, u)),
                        (l += u - 1))
                      : (s += E && " " !== v ? i() + v + "</" + w + ">" : v);
                (e.outerHTML = s + (k ? x : "")), m && b(_, "{{LT}}", "<");
              },
              R = function (e, t, n, r) {
                var o,
                  i,
                  a = w(e.childNodes),
                  l = a.length,
                  u = "absolute" === t.position || !0 === t.absolute;
                if (3 !== e.nodeType || l > 1) {
                  for (t.absolute = !1, o = 0; l > o; o++)
                    (i = a[o]),
                      (3 !== i.nodeType || /\S+/.test(i.nodeValue)) &&
                        (u &&
                          3 !== i.nodeType &&
                          "inline" === s(i, "display", null, !0) &&
                          ((i.style.display = "inline-block"),
                          (i.style.position = "relative")),
                        (i._isSplit = !0),
                        R(i, t, n, r));
                  return (t.absolute = u), void (e._isSplit = !0);
                }
                T(e, t, n, r);
              },
              x = y.prototype;
            (x.split = function (e) {
              this.isSplit && this.revert(),
                (this.vars = e = e || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var t,
                  n,
                  r,
                  o = this.elements.length,
                  i = e.span ? "span" : "div",
                  a = m(e.wordsClass, i),
                  s = m(e.charsClass, i);
                --o > -1;
  
              )
                (r = this.elements[o]),
                  (this._originals[o] = r.innerHTML),
                  (t = r.clientHeight),
                  (n = r.clientWidth),
                  R(r, e, a, s),
                  D(r, e, this.chars, this.words, this.lines, n, t);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
              (x.revert = function () {
                if (!this._originals)
                  throw "revert() call wasn't scoped properly.";
                for (var e = this._originals.length; --e > -1; )
                  this.elements[e].innerHTML = this._originals[e];
                return (
                  (this.chars = []),
                  (this.words = []),
                  (this.lines = []),
                  (this.isSplit = !1),
                  this
                );
              }),
              (y.selector =
                e.$ ||
                e.jQuery ||
                function (t) {
                  var n = e.$ || e.jQuery;
                  return n
                    ? ((y.selector = n), n(t))
                    : "undefined" == typeof document
                    ? t
                    : document.querySelectorAll
                    ? document.querySelectorAll(t)
                    : document.getElementById(
                        "#" === t.charAt(0) ? t.substr(1) : t
                      );
                }),
              (y.version = "0.5.8");
          })(s),
            (function (r) {
              "use strict";
              var l = function () {
                return (s.GreenSockGlobals || s).SplitText;
              };
              void 0 !== e && e.exports
                ? (e.exports = l())
                : n(57) &&
                  ((i = []),
                  (o = l),
                  void 0 !== (a = "function" == typeof o ? o.apply(t, i) : o) &&
                    (e.exports = a));
            })();
        }.call(t, n(2)));
      },
      ,
      function (e, t, n) {
        function r(e) {
          return n(o(e));
        }
        function o(e) {
          var t = i[e];
          if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
          return t;
        }
        var i = {
          "./accordion.js": 13,
          "./actionBar.js": 14,
          "./bannerSlides.js": 15,
          "./calendar.js": 16,
          "./cardSlider.js": 68,
          "./form.js": 17,
          "./formBuilder.js": 18,
          "./gallery.js": 19,
          "./headline.js": 20,
          "./hpSlider.js": 21,
          "./index.js": 4,
          "./lazyload.js": 22,
          "./main.js": 23,
          "./map.js": 26,
          "./menuFull.js": 27,
          "./menuSimple.js": 28,
          "./menuToggle.js": 29,
          "./newsletter.js": 30,
          "./openStory.js": 31,
          "./select.js": 32,
          "./siteHeader.js": 33,
          "./splitLines.js": 34,
          "./story.js": 35,
          "./video.js": 36,
          "./videoBg.js": 37,
        };
        (r.keys = function () {
          return Object.keys(i);
        }),
          (r.resolve = o),
          (e.exports = r),
          (r.id = 58);
      },
      function (e, t, n) {
        var r = n(0),
          o = n(5),
          i = (n(3), n(25)),
          a = n(60),
          s = n(61),
          l = n(62),
          u = {
            init: function () {
              r("#main").length && this.initBarba();
            },
            initBarba: function () {
              i.init();
              var e = o.Pjax.onStateChange;
              (o.Pjax.onStateChange = function (t) {
                (t && null != t.state && 1 == t.state.fancybox) ||
                  e.apply(o.Pjax);
              }),
                (o.Pjax.Dom.wrapperId = "main"),
                (o.Pjax.Dom.containerClass = "Main-container"),
                (o.Pjax.cacheEnabled = !1),
                (o.Pjax.getTransition = this.getTransition.bind(this)),
                o.Pjax.start(),
                o.Dispatcher.on("initStateChange", this.onInitStateChange),
                o.Dispatcher.on("newPageReady", this.onNewPageReady);
            },
            onNewPageReady: function (e, t, n, o) {
              r(n).css("position", "fixed").css("top", "100%");
            },
            getTransition: function () {
              return s.valid() ? s : a;
            },
            onInitStateChange: function (e) {
              l.trackPage(e.url);
            },
          };
        e.exports = u;
      },
      // MASK
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(5),
                o = n(3),
                i = n(25),
                a = n(1),
                s = (n(8), n(9), { name: "baseTransition" }),
                l = t(document),
                u = t("html"),
                c = (t("body"), t("#mask"));
              return r.BaseTransition.extend({
                start: function () {
                  var e = this;
                  i.holdScroll(),
                    Promise.all([o.closeOverlays()]).then(function () {
                      Promise.all([e.newContainerLoading, e.fadeOut()]).then(
                        e.fadeIn.bind(e)
                      );
                    });
                },
                fadeOut: function () {
                  l.trigger("page-transitioning-start", s),
                    u.addClass(
                      "page-transitioning page-transitioning-in page-transitioning--fade"
                    ),
                    ($lastClickedElement = null);
                  var e = r.Utils.deferred(),
                    n = t(this.oldContainer),
                    o = Power3.easeIn;
                  return (
                    a.to(n, 0.8, { y: -64, ease: Power4.easeIn }),
                    a.to(c, 0.8, {
                      opacity: 1,
                      ease: o,
                      onComplete: function () {
                        l.trigger("page-transitioning-out", s), e.resolve();
                      },
                    }),
                    e.promise
                  );
                },
                fadeIn: function () {
                  var e = this,
                    n = t(this.newContainer),
                    r = t(this.oldContainer),
                    i = Power2.easeOut;
                  u
                    .removeClass("page-transitioning-in")
                    .addClass("page-transitioning-out"),
                    r.hide(),
                    r.destroyPlugins(),
                    this.newContainer.style.removeProperty("position"),
                    this.newContainer.style.removeProperty("visibility"),
                    this.newContainer.style.removeProperty("top"),
                    window.scrollTo(0, 0),
                    n.initPlugins(),
                    e.done(),
                    o.updateHeader(),
                    o.updateBodyClass(),
                    o.setupNoBarbaLinks(n),
                    l.trigger("page-transitioning-ending", s),
                    a.to(c, 0.4, {
                      opacity: 0,
                      ease: i,
                      force3D: !0,
                      onComplete: function () {
                        u.removeClass(
                          "page-transitioning page-transitioning-out page-transitioning--fade"
                        ),
                          l.trigger("page-transitioning-end", s);
                      },
                    });
                },
                valid: function () {
                  return !0;
                },
              });
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // MENU TRANSITION
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(5),
                o = n(3),
                i = n(1),
                a = (n(9), n(8), { name: "menuTransition" }),
                s = t(document),
                l = t("html");
              return r.BaseTransition.extend({
                start: function () {
                  var e = this;
                  Promise.all([o.closeOverlays()]).then(function () {
                    Promise.all([e.newContainerLoading, e.fadeOut()]).then(
                      e.fadeIn.bind(e)
                    );
                  });
                },
                fadeOut: function () {
                  l.addClass(
                    "page-transitioning page-transitioning-in page-transitioning--menu"
                  );
                  var e = r.Utils.deferred(),
                    n = t(this.oldContainer);
                  return i.set(n, { opacity: 0 }), e.resolve(), e.promise;
                },
                fadeIn: function () {
                  var e = this,
                    n = t(this.newContainer),
                    r = t(this.oldContainer);
                  l
                    .removeClass("page-transitioning-in")
                    .addClass("page-transitioning-out"),
                    r.hide().destroyPlugins(),
                    this.newContainer.style.removeProperty("position"),
                    this.newContainer.style.removeProperty("visibility"),
                    this.newContainer.style.removeProperty("top"),
                    window.scrollTo(0, 0),
                    s.trigger("page-transitioning-start", a),
                    s.trigger("page-transitioning-out", a),
                    n.initPlugins(),
                    e.done(),
                    o.updateHeader(),
                    o.updateBodyClass(),
                    o.setupNoBarbaLinks(n),
                    s.trigger("page-transitioning-ending", a),
                    setTimeout(function () {
                      window.requestAnimationFrame(function () {
                        l.removeClass(
                          "page-transitioning page-transitioning-out page-transitioning--menu"
                        ),
                          s.trigger("page-transitioning-end", a);
                      });
                    }, 400);
                },
                valid: function () {
                  return l.hasClass("show-menu");
                },
              });
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
      // GTAG
      function (e, t) {
        var n = window;
        (n.dataLayer = n.dataLayer || []),
          (n.gtag =
            n.gtag ||
            function () {
              dataLayer.push(arguments);
            });
        var r,
          o = function () {
            if (void 0 === r)
              for (var e = window.dataLayer || [], t = 0; t < e.length; t++)
                "config" == e[t][0] && (r = e[t][1]);
            return r;
          },
          i = {
            trackPage: function (e) {
              var t = {};
              "http" === e.substring(0, 4)
                ? (t.page_location = e)
                : (t.page_path = e),
                n.gtag("config", o(), t);
            },
            trackEvent: function (e) {
              n.gtag("event", e.action, {
                send_to: o(),
                event_category: e.category,
                event_label: e.label,
              });
            },
            trackConversion: function (e) {
              n.gtag("event", "conversion", { send_to: e });
            },
          };
        e.exports = i;
      },
      ,
      ,
      ,
      ,
      ,
      // CARD SLIDER
      function (e, t, n) {
        (function (r) {
          var o;
          void 0 !==
            (o = function (e) {
              var t = n(0),
                r = n(7),
                o = (n(3), "cardSlider");
              return {
                name: o,
                fn: function () {
                  function e() {
                    t(document).off("page-transitioning-end page-ready", e),
                      (i.swiper = new r(i.find("[data-card-slider]").get(0), {
                        slidesPerView: "auto",
                      }));
                  }
                  function n() {
                    t(document).off("page-transitioning-end page-ready", e),
                      i.swiper && i.swiper.destroy();
                  }
                  var i = t(this);
                  t("html");
                  return (
                    (i.destroy = function () {
                      n();
                    }),
                    (function () {
                      i.data("__" + o) ||
                        (i.data("__" + o, !0),
                        i.data("js-" + o, i),
                        t(document).one("page-transitioning-end page-ready", e));
                    })(),
                    this
                  );
                },
              };
            }.call(t, n, t, e)) && (e.exports = o);
        }.call(t, n(0)));
      },
    ],
    [43]
  );
  
  