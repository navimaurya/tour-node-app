!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ''),
    t((t.s = 0));
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t, n) {
    'use strict';
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function s(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function c(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function u(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function p(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function f(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function d(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function _(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function m(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function y(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function v(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function b(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function E(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function w(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function S(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function P(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function O(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function k(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function A(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function T(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function I(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function R(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function N(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function C(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function M(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function j(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function L(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function x(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function D(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function q(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function F(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function B(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function U(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function H(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function G(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Y(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function W(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function z(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function K(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function V(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function J(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function X(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function $(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function Q(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function Z(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function ee(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function te(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function ne(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function re(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function oe(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function ie(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function ae(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function se(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ce(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function ue(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function le(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function pe(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function fe(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function de(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function he(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function _e(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function me(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function ye(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function ve(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var be,
      ge,
      Ee,
      we,
      Se,
      Pe,
      Oe,
      ke,
      Ae = (function (e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            window.__stripeElementsController &&
              window.__stripeElementsController.reportIntegrationError(e),
            (n.name = 'IntegrationError'),
            Object.defineProperty(n, 'message', {
              value: n.message,
              enumerable: !0,
            }),
            n
          );
        }
        return i(t, e), t;
      })(Error),
      Te = Ae,
      Ie = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'absurd';
        throw new Error(t);
      },
      Re = n(2),
      Ne = n.n(Re),
      Ce = window.Promise ? Promise : Ne.a,
      Me = Ce,
      je =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      Le = function (e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
      },
      xe = function (e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
        return -1;
      },
      De = function e(t, n) {
        if (
          'object' !== (void 0 === t ? 'undefined' : je(t)) ||
          'object' !== (void 0 === n ? 'undefined' : je(n))
        )
          return t === n;
        if (null === t || null === n) return t === n;
        var r = Array.isArray(t);
        if (r !== Array.isArray(n)) return !1;
        var o = '[object Object]' === Object.prototype.toString.call(t);
        if (o !== ('[object Object]' === Object.prototype.toString.call(n)))
          return !1;
        if (!o && !r) return !1;
        var i = Object.keys(t),
          a = Object.keys(n);
        if (i.length !== a.length) return !1;
        for (var s = {}, c = 0; c < i.length; c++) s[i[c]] = !0;
        for (var u = 0; u < a.length; u++) s[a[u]] = !0;
        var l = Object.keys(s);
        if (l.length !== i.length) return !1;
        var p = t,
          f = n,
          d = function (t) {
            return e(p[t], f[t]);
          };
        return l.every(d);
      },
      qe = function (e, t) {
        for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
        for (var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
        return o;
      },
      Fe = function (e, t) {
        var n = 0,
          r = function r(o) {
            for (var i = Date.now() + 50; n < e.length && Date.now() < i; )
              t(e[n]), n++;
            n === e.length
              ? o()
              : setTimeout(function () {
                  return r(o);
                });
          };
        return new Me(function (e) {
          return r(e);
        });
      },
      Be = [
        'aed',
        'afn',
        'all',
        'amd',
        'ang',
        'aoa',
        'ars',
        'aud',
        'awg',
        'azn',
        'bam',
        'bbd',
        'bdt',
        'bgn',
        'bhd',
        'bif',
        'bmd',
        'bnd',
        'bob',
        'brl',
        'bsd',
        'btn',
        'bwp',
        'byr',
        'bzd',
        'cad',
        'cdf',
        'chf',
        'clf',
        'clp',
        'cny',
        'cop',
        'crc',
        'cuc',
        'cup',
        'cve',
        'czk',
        'djf',
        'dkk',
        'dop',
        'dzd',
        'egp',
        'ern',
        'etb',
        'eur',
        'fjd',
        'fkp',
        'gbp',
        'gel',
        'ghs',
        'gip',
        'gmd',
        'gnf',
        'gtq',
        'gyd',
        'hkd',
        'hnl',
        'hrk',
        'htg',
        'huf',
        'idr',
        'ils',
        'inr',
        'iqd',
        'irr',
        'isk',
        'jmd',
        'jod',
        'jpy',
        'kes',
        'kgs',
        'khr',
        'kmf',
        'kpw',
        'krw',
        'kwd',
        'kyd',
        'kzt',
        'lak',
        'lbp',
        'lkr',
        'lrd',
        'lsl',
        'ltl',
        'lvl',
        'lyd',
        'mad',
        'mdl',
        'mga',
        'mkd',
        'mmk',
        'mnt',
        'mop',
        'mro',
        'mur',
        'mvr',
        'mwk',
        'mxn',
        'myr',
        'mzn',
        'nad',
        'ngn',
        'nio',
        'nok',
        'npr',
        'nzd',
        'omr',
        'pab',
        'pen',
        'pgk',
        'php',
        'pkr',
        'pln',
        'pyg',
        'qar',
        'ron',
        'rsd',
        'rub',
        'rwf',
        'sar',
        'sbd',
        'scr',
        'sdg',
        'sek',
        'sgd',
        'shp',
        'skk',
        'sll',
        'sos',
        'srd',
        'ssp',
        'std',
        'svc',
        'syp',
        'szl',
        'thb',
        'tjs',
        'tmt',
        'tnd',
        'top',
        'try',
        'ttd',
        'twd',
        'tzs',
        'uah',
        'ugx',
        'usd',
        'uyu',
        'uzs',
        'vef',
        'vnd',
        'vuv',
        'wst',
        'xaf',
        'xag',
        'xau',
        'xcd',
        'xdr',
        'xof',
        'xpf',
        'yer',
        'zar',
        'zmk',
        'zmw',
        'btc',
        'jep',
        'eek',
        'ghc',
        'mtl',
        'tmm',
        'yen',
        'zwd',
        'zwl',
        'zwn',
        'zwr',
      ],
      Ue = Be,
      He = {
        AE: 'AE',
        AT: 'AT',
        AU: 'AU',
        BE: 'BE',
        BG: 'BG',
        BR: 'BR',
        CA: 'CA',
        CH: 'CH',
        CI: 'CI',
        CR: 'CR',
        CY: 'CY',
        CZ: 'CZ',
        DE: 'DE',
        DK: 'DK',
        DO: 'DO',
        EE: 'EE',
        ES: 'ES',
        FI: 'FI',
        FR: 'FR',
        GB: 'GB',
        GR: 'GR',
        GT: 'GT',
        HK: 'HK',
        HU: 'HU',
        ID: 'ID',
        IE: 'IE',
        IN: 'IN',
        IT: 'IT',
        JP: 'JP',
        LT: 'LT',
        LU: 'LU',
        LV: 'LV',
        MT: 'MT',
        MX: 'MX',
        MY: 'MY',
        NL: 'NL',
        NO: 'NO',
        NZ: 'NZ',
        PE: 'PE',
        PH: 'PH',
        PL: 'PL',
        PT: 'PT',
        RO: 'RO',
        SE: 'SE',
        SG: 'SG',
        SI: 'SI',
        SK: 'SK',
        SN: 'SN',
        TH: 'TH',
        TT: 'TT',
        US: 'US',
        UY: 'UY',
      },
      Ge = Object.keys(He),
      Ye = { live: 'live', test: 'test', unknown: 'unknown' },
      We = function (e) {
        return /^pk_test_/.test(e)
          ? Ye.test
          : /^pk_live_/.test(e)
          ? Ye.live
          : Ye.unknown;
      },
      ze = function (e) {
        if (e === Ye.unknown)
          throw new Te(
            "It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
          );
      },
      Ke = /^(http(s)?):\/\//,
      Ve = function (e) {
        return Ke.test(e);
      },
      Je = function (e) {
        if (!Ve(e)) return null;
        var t = document.createElement('a');
        t.href = e;
        var n = t.protocol,
          r = t.host,
          o = t.pathname,
          i = /:80$/,
          a = /:443$/;
        return (
          'http:' === n && i.test(r)
            ? (r = r.replace(i, ''))
            : 'https:' === n && a.test(r) && (r = r.replace(a, '')),
          { host: r, protocol: n, origin: n + '//' + r, path: o }
        );
      },
      Xe = function (e, t) {
        if ('/' === t[0]) {
          var n = Je(e);
          return n ? '' + n.origin + t : t;
        }
        return '' + e.replace(/\/[^\/]*$/, '/') + t;
      },
      $e =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Qe =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      Ze = function (e, t, n) {
        return (
          'Invalid value for ' +
          n.label +
          ': ' +
          (n.path.join('.') || 'value') +
          ' should be ' +
          e +
          '. You specified: ' +
          t +
          '.'
        );
      },
      et = function (e) {
        return {
          type: 'valid',
          value: e,
          warnings:
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        };
      },
      tt = function (e) {
        return { error: e, errorType: 'full', type: 'error' };
      },
      nt = function (e, t, n) {
        var r = new Te(Ze(e, t, n));
        return tt(r);
      },
      rt = function (e, t, n) {
        return {
          expected: e,
          actual: String(t),
          options: n,
          errorType: 'mismatch',
          type: 'error',
        };
      },
      ot = function (e) {
        return function (t, n) {
          return void 0 === t ? et(t) : e(t, n);
        };
      },
      it = function (e, t) {
        return function (n, r) {
          var o = function (e) {
              var t = e.options.path.join('.') || 'value';
              return {
                error: t + ' should be ' + e.expected,
                actual: t + ' as ' + e.actual,
              };
            },
            i = function (e, t, n) {
              return tt(
                new Te(
                  'Invalid value for ' +
                    e +
                    ': ' +
                    t +
                    '. You specified ' +
                    n +
                    '.'
                )
              );
            },
            a = e(n, r),
            s = t(n, r);
          if ('error' === a.type && 'error' === s.type) {
            if ('mismatch' === a.errorType && 'mismatch' === s.errorType) {
              var c = o(a),
                u = c.error,
                l = c.actual,
                p = o(s),
                f = p.error,
                d = p.actual;
              return i(
                r.label,
                u === f ? u : u + ' or ' + f,
                l === d ? l : l + ' and ' + d
              );
            }
            if ('mismatch' === a.errorType) {
              var h = o(a),
                _ = h.error,
                m = h.actual;
              return i(r.label, _, m);
            }
            if ('mismatch' === s.errorType) {
              var y = o(s),
                v = y.error,
                b = y.actual;
              return i(r.label, v, b);
            }
            return tt(a.error);
          }
          return 'valid' === a.type ? a : s;
        };
      },
      at = function (e, t) {
        return function (n, r) {
          var o = Le(e, function (e) {
            return e === n;
          });
          if (void 0 === o) {
            var i = t
              ? 'a recognized string.'
              : 'one of the following strings: ' + e.join(', ');
            return rt(i, n, r);
          }
          return et(o);
        };
      },
      st = function (e) {
        return function (t, n) {
          return 'string' == typeof t && 0 === t.indexOf(e)
            ? et(t)
            : rt('a string starting with ' + e, t, n);
        };
      },
      ct = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return at(t, !1);
      },
      ut = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return at(t, !0);
      },
      lt = ct.apply(void 0, s(Ge)),
      pt = ct.apply(void 0, s(Ue)),
      ft =
        (ct.apply(void 0, s(Object.keys(Ye))),
        function (e, t) {
          return 'string' == typeof e ? et(e) : rt('a string', e, t);
        }),
      dt = function (e, t) {
        return function (n, r) {
          return void 0 === n ? et(t()) : e(n, r);
        };
      },
      ht = function (e, t) {
        return 'boolean' == typeof e ? et(e) : rt('a boolean', e, t);
      },
      _t = function (e, t) {
        return 'number' == typeof e ? et(e) : rt('a number', e, t);
      },
      mt = function (e) {
        return function (t, n) {
          return 'number' == typeof t && t > e
            ? et(t)
            : rt('a number greater than ' + e, t, n);
        };
      },
      yt = function (e) {
        return function (t, n) {
          return 'number' == typeof t && t === parseInt(t, 10) && (!e || t >= 0)
            ? et(t)
            : rt(
                e
                  ? "a positive amount in the currency's subunit"
                  : "an amount in the currency's subunit",
                t,
                n
              );
        };
      },
      vt = function (e, t) {
        return yt(!1)(e, t);
      },
      bt = function (e, t) {
        return yt(!0)(e, t);
      },
      gt = function (e, t) {
        return e && 'object' === (void 0 === e ? 'undefined' : Qe(e))
          ? et(e)
          : rt('an object', e, t);
      },
      Et = function (e) {
        return function (t, n) {
          if (Array.isArray(t)) {
            return t
              .map(function (t, r) {
                return e(
                  t,
                  $e({}, n, { path: [].concat(s(n.path), [String(r)]) })
                );
              })
              .reduce(function (e, t) {
                return 'error' === e.type
                  ? e
                  : 'error' === t.type
                  ? t
                  : et(
                      [].concat(s(e.value), [t.value]),
                      [].concat(s(e.warnings), s(t.warnings))
                    );
              }, et([]));
          }
          return rt('array', t, n);
        };
      },
      wt = function (e) {
        return function (t) {
          return function (n, r) {
            if (Array.isArray(n)) {
              var o = t(n, r);
              if ('valid' === o.type)
                for (var i = {}, a = 0; a < o.value.length; a += 1) {
                  var s = o.value[a];
                  if (
                    'object' === (void 0 === s ? 'undefined' : Qe(s)) &&
                    s &&
                    'string' == typeof s[e]
                  ) {
                    var c = s[e],
                      u = '_' + c;
                    if (i[u])
                      return tt(
                        new Te(
                          'Duplicate value for ' +
                            e +
                            ': ' +
                            c +
                            ". The property '" +
                            e +
                            "' of '" +
                            r.path.join('.') +
                            "' has to be unique."
                        )
                      );
                    i[u] = !0;
                  }
                }
              return o;
            }
            return rt('array', n, r);
          };
        };
      },
      St = function (e) {
        return function (t, n) {
          return void 0 === t
            ? et(void 0)
            : rt('used in ' + e + ' instead', t, n);
        };
      },
      Pt = function (e) {
        return function (t) {
          return function (n, r) {
            if (
              n &&
              'object' === (void 0 === n ? 'undefined' : Qe(n)) &&
              !Array.isArray(n)
            ) {
              var o = n,
                i = Le(Object.keys(o), function (e) {
                  return !t[e];
                });
              if (i && e)
                return tt(
                  new Te(
                    'Invalid ' +
                      r.label +
                      ' parameter: ' +
                      [].concat(s(r.path), [i]).join('.') +
                      ' is not an accepted parameter.'
                  )
                );
              var c = Object.keys(o),
                u = et({});
              return (
                i &&
                  (u = c.reduce(function (e, n) {
                    return t[n]
                      ? e
                      : et(
                          e.value,
                          [].concat(s(e.warnings), [
                            'Unrecognized ' +
                              r.label +
                              ' parameter: ' +
                              [].concat(s(r.path), [n]).join('.') +
                              ' is not a recognized parameter. This may cause issues with your integration in the future.',
                          ])
                        );
                  }, u)),
                Object.keys(t).reduce(function (e, n) {
                  if ('error' === e.type) return e;
                  var i = t[n],
                    c = i(o[n], $e({}, r, { path: [].concat(s(r.path), [n]) }));
                  return 'valid' === c.type && void 0 !== c.value
                    ? et(
                        $e({}, e.value, a({}, n, c.value)),
                        [].concat(s(e.warnings), s(c.warnings))
                      )
                    : 'valid' === c.type
                    ? et(e.value, [].concat(s(e.warnings), s(c.warnings)))
                    : c;
                }, u)
              );
            }
            return rt('an object', n, r);
          };
        };
      },
      Ot = Pt(!0),
      kt = Pt(!1),
      At = function (e, t) {
        return $e({}, e, { path: [].concat(s(e.path), [t]) });
      },
      Tt = function (e, t, n, r) {
        var o = r || {},
          i = e(t, {
            origin: o.origin || '',
            element: o.element || '',
            label: n,
            path: o.path || [],
          });
        return 'valid' === i.type
          ? i
          : 'full' === i.errorType
          ? i
          : {
              type: 'error',
              errorType: 'full',
              error: new Te(Ze(i.expected, i.actual, i.options)),
            };
      },
      It = function (e, t, n, r) {
        var o = Tt(e, t, n, r);
        switch (o.type) {
          case 'valid':
            return { value: o.value, warnings: o.warnings };
          case 'error':
            throw o.error;
          default:
            return Ie(o);
        }
      },
      Rt = {
        CARD_ELEMENT: 'CARD_ELEMENT',
        CONTROLLER: 'CONTROLLER',
        METRICS_CONTROLLER: 'METRICS_CONTROLLER',
        PAYMENT_REQUEST_ELEMENT: 'PAYMENT_REQUEST_ELEMENT',
        PAYMENT_REQUEST_BROWSER: 'PAYMENT_REQUEST_BROWSER',
        PAYMENT_REQUEST_GOOGLE_PAY: 'PAYMENT_REQUEST_GOOGLE_PAY',
        IBAN_ELEMENT: 'IBAN_ELEMENT',
        IDEAL_BANK_ELEMENT: 'IDEAL_BANK_ELEMENT',
        AUTHORIZE_WITH_URL: 'AUTHORIZE_WITH_URL',
        STRIPE_3DS2_CHALLENGE: 'STRIPE_3DS2_CHALLENGE',
        STRIPE_3DS2_FINGERPRINT: 'STRIPE_3DS2_FINGERPRINT',
        AU_BANK_ACCOUNT_ELEMENT: 'AU_BANK_ACCOUNT_ELEMENT',
        FPX_BANK_ELEMENT: 'FPX_BANK_ELEMENT',
        LIGHTBOX_APP: 'LIGHTBOX_APP',
      },
      Nt = Rt,
      Ct = Object({
        NODE_ENV: 'production',
        TEST_ENV: !1,
        SELENIUM_TEST_ENV: !1,
        PUBLIC_URL: '',
        RELEASE_VERSION: '8ce3d6c5',
        STRIPE_JS_API_URL: 'https://api.stripe.com/v1/',
        STRIPE_JS_HOOKS_URL: 'https://hooks.stripe.com/',
        STRIPE_HIP_URL: 'https://invoice.stripe.com',
        STRIPE_HIP_DATA_URL: '',
        STRIPE_JS_ALLOW_MUTABLE_API_URL: !1,
        STRIPE_JS_Q_URL: 'https://q.stripe.com',
        STRIPE_JS_M_NETWORK_URL: 'https://m.stripe.network',
        STRIPE_JS_ROOT_URL: 'https://js.stripe.com/v3/',
        STRIPE_CHECKOUT_URL: 'https://checkout.stripe.com/',
        STRIPE_JS_SOURCEMAPS: !1,
        STRIPE_JS_DEBUG_POSTMESSAGE: !1,
        STRIPE_JS_DEBUG_LOGGER: !0,
        ELEMENTS_INNER_CARD_HTML_NAME:
          'elements-inner-card-99fc4c4cd46cc371238ffb50889328f5.html',
        ELEMENTS_INNER_IBAN_HTML_NAME:
          'elements-inner-iban-8ec83cb0812ea16d4af7e7b20078631d.html',
        ELEMENTS_INNER_IDEAL_BANK_HTML_NAME:
          'elements-inner-ideal-bank-a27aa9c220e457e387bd7fcf61ad2cf2.html',
        ELEMENTS_INNER_PAYMENT_REQUEST_HTML_NAME:
          'elements-inner-payment-request-bc73c490f330b120d5ba7c5ef0e7589a.html',
        ELEMENTS_INNER_AU_BANK_ACCOUNT_HTML_NAME:
          'elements-inner-au-bank-account-e7eb51a63f6eaaeac3efa60e059e4e95.html',
        ELEMENTS_INNER_FPX_BANK_HTML_NAME:
          'elements-inner-fpx-bank-7919485913d6e60abbde69f6b0c5e514.html',
        RECAPTCHA_HTML_NAME: 'recaptcha.html',
        CONTROLLER_HTML_NAME:
          'controller-b495b633c20bf164ee5e27d99cd81be9.html',
        PAYMENT_REQUEST_INNER_BROWSER_HTML_NAME:
          'payment-request-inner-browser-5646e5ff507fedbd82b009894c151421.html',
        PAYMENT_REQUEST_INNER_GOOGLE_PAY_HTML_NAME:
          'payment-request-inner-google-pay-0c8f594a87dfb7df201aadd7a08fab38.html',
        AUTHORIZE_WITH_URL_INNER_HTML_NAME:
          'authorize-with-url-inner-3eb6098eadf75216ef88978c06d0c94c.html',
        THREE_DS_2_CHALLENGE_HTML_NAME:
          'three-ds-2-challenge-eb020ea005dfee3a52ce2444ab709702.html',
        THREE_DS_2_FINGERPRINT_HTML_NAME:
          'three-ds-2-fingerprint-7a2688e9c4b9b9fbda8f8c1e0f1bfde5.html',
        M_OUTER_HTML_NAME: 'm-outer-bed6abdc0a0b5ea6d8e7eca78387ad54.html',
        LIGHTBOX_INNER_HTML_NAME:
          'lightbox-inner-ce78a34654d8baaea8a71266dd95b9c8.html',
        STRIPE_JS_NO_DEMOS: !0,
        STRIPE_JS_NO_REPORTS: !0,
      }),
      Mt = function (e) {
        return '' + (Ct.STRIPE_JS_ROOT_URL || '') + (e || '');
      },
      jt = function (e) {
        switch (e) {
          case 'CARD_ELEMENT':
            return Mt(Ct.ELEMENTS_INNER_CARD_HTML_NAME);
          case 'CONTROLLER':
            return Mt(Ct.CONTROLLER_HTML_NAME);
          case 'METRICS_CONTROLLER':
            return Mt(Ct.M_OUTER_HTML_NAME);
          case 'PAYMENT_REQUEST_ELEMENT':
            return Mt(Ct.ELEMENTS_INNER_PAYMENT_REQUEST_HTML_NAME);
          case 'PAYMENT_REQUEST_BROWSER':
            return Mt(Ct.PAYMENT_REQUEST_INNER_BROWSER_HTML_NAME);
          case 'PAYMENT_REQUEST_GOOGLE_PAY':
            return Mt(Ct.PAYMENT_REQUEST_INNER_GOOGLE_PAY_HTML_NAME);
          case 'IBAN_ELEMENT':
            return Mt(Ct.ELEMENTS_INNER_IBAN_HTML_NAME);
          case 'IDEAL_BANK_ELEMENT':
            return Mt(Ct.ELEMENTS_INNER_IDEAL_BANK_HTML_NAME);
          case 'AUTHORIZE_WITH_URL':
            return Mt(Ct.AUTHORIZE_WITH_URL_INNER_HTML_NAME);
          case 'STRIPE_3DS2_CHALLENGE':
            return Mt(Ct.THREE_DS_2_CHALLENGE_HTML_NAME);
          case 'STRIPE_3DS2_FINGERPRINT':
            return Mt(Ct.THREE_DS_2_FINGERPRINT_HTML_NAME);
          case 'AU_BANK_ACCOUNT_ELEMENT':
            return Mt(Ct.ELEMENTS_INNER_AU_BANK_ACCOUNT_HTML_NAME);
          case 'FPX_BANK_ELEMENT':
            return Mt(Ct.ELEMENTS_INNER_FPX_BANK_HTML_NAME);
          case 'LIGHTBOX_APP':
            return Mt(Ct.LIGHTBOX_INNER_HTML_NAME);
          default:
            return Ie(e);
        }
      },
      Lt = jt,
      xt = {
        card: 'card',
        cardNumber: 'cardNumber',
        cardExpiry: 'cardExpiry',
        cardCvc: 'cardCvc',
        postalCode: 'postalCode',
        iban: 'iban',
        idealBank: 'idealBank',
        paymentRequestButton: 'paymentRequestButton',
        auBankAccount: 'auBankAccount',
        fpxBank: 'fpxBank',
        idealBankSecondary: 'idealBankSecondary',
        auBankAccountNumber: 'auBankAccountNumber',
        auBsb: 'auBsb',
        fpxBankSecondary: 'fpxBankSecondary',
      },
      Dt = xt,
      qt = { PAYMENT_INTENT: 'PAYMENT_INTENT', SETUP_INTENT: 'SETUP_INTENT' },
      Ft = qt,
      Bt = [Dt.card, Dt.cardNumber, Dt.cardExpiry, Dt.cardCvc, Dt.postalCode],
      Ut = Bt,
      Ht = 'https://js.stripe.com/v3/',
      Gt = Je(Ht),
      Yt = Gt ? Gt.origin : '',
      Wt = {
        family: 'font-family',
        src: 'src',
        unicodeRange: 'unicode-range',
        style: 'font-style',
        variant: 'font-variant',
        stretch: 'font-stretch',
        weight: 'font-weight',
        display: 'font-display',
      },
      zt = Object.keys(Wt).reduce(function (e, t) {
        return (e[Wt[t]] = t), e;
      }, {}),
      Kt = [
        Dt.idealBank,
        Dt.idealBankSecondary,
        Dt.fpxBank,
        Dt.fpxBankSecondary,
      ],
      Vt = 0,
      Jt = function (e) {
        return '' + e + Vt++;
      },
      Xt = function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return t
          ? (
              parseInt(t, 10) ^
              ((16 * Math.random()) >> (parseInt(t, 10) / 4))
            ).toString(16)
          : '00000000-0000-4000-8000-000000000000'.replace(/[08]/g, e);
      },
      $t = function (e) {
        return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(
          e
        );
      },
      Qt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      Zt = function e(t, n) {
        var r = [];
        return (
          Object.keys(t).forEach(function (o) {
            var i = t[o],
              a = n ? n + '[' + o + ']' : o;
            if (i && 'object' === (void 0 === i ? 'undefined' : Qt(i))) {
              var s = e(i, a);
              '' !== s && (r = [].concat(c(r), [s]));
            } else void 0 !== i && null !== i && (r = [].concat(c(r), [a + '=' + encodeURIComponent(String(i))]));
          }),
          r.join('&').replace(/%20/g, '+')
        );
      },
      en = Zt,
      tn = n(6),
      nn = n.n(tn),
      rn = (function () {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      on = function (e, t) {
        var n = {};
        t.forEach(function (e) {
          var t = rn(e, 2),
            r = t[0],
            o = t[1];
          r.split(/\s+/).forEach(function (e) {
            e && (n[e] = n[e] || o);
          });
        }),
          (e.className = nn()(e.className, n));
      },
      an = function (e, t) {
        e.style.cssText = Object.keys(t)
          .map(function (e) {
            return e + ': ' + t[e] + ' !important;';
          })
          .join(' ');
      },
      sn = function (e) {
        try {
          return window.parent.frames[e];
        } catch (e) {
          return null;
        }
      },
      cn = function (e) {
        if (!document.body)
          throw new Te(
            'Stripe.js requires that your page has a <body> element.'
          );
        return e(document.body);
      },
      un =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ln = function (e) {
        var t = e.frameId,
          n = e.controllerId,
          r = e.type,
          o = Yt,
          i = void 0;
        'controller' === r
          ? (i = sn(t))
          : 'group' === r
          ? (i = sn(n))
          : 'outer' === r
          ? (i = window.frames[t])
          : 'inner' === r && ((o = '*'), (i = window.parent)),
          i &&
            i.postMessage(JSON.stringify(un({}, e, { __stripeJsV3: !0 })), o);
      },
      pn = function (e) {
        try {
          var t = 'string' == typeof e ? JSON.parse(e) : e;
          return t.__stripeJsV3 ? t : null;
        } catch (e) {
          return null;
        }
      },
      fn =
        (n(7),
        function (e, t) {
          var n = e._isUserError || 'IntegrationError' === e.name;
          throw (
            (t &&
              !n &&
              t.report('fatal.uncaught_error', {
                iframe: !1,
                name: e.name,
                element: 'outer',
                message: e.message || e.description,
                fileName: e.fileName,
                lineNumber: e.lineNumber,
                columnNumber: e.columnNumber,
                stack: e.stack && e.stack.substring(0, 1e3),
              }),
            e)
          );
        }),
      dn = function (e, t) {
        return function () {
          try {
            return e.call(this);
          } catch (e) {
            return fn(e, t || (this && this._controller));
          }
        };
      },
      hn = function (e, t) {
        return function (n) {
          try {
            return e.call(this, n);
          } catch (e) {
            return fn(e, t || (this && this._controller));
          }
        };
      },
      _n = function (e, t) {
        return function (n, r) {
          try {
            return e.call(this, n, r);
          } catch (e) {
            return fn(e, t || (this && this._controller));
          }
        };
      },
      mn = function (e, t) {
        return function (n, r, o) {
          try {
            return e.call(this, n, r, o);
          } catch (e) {
            return fn(e, t || (this && this._controller));
          }
        };
      },
      yn = function (e, t) {
        return function () {
          try {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return e.call.apply(e, [this].concat(r));
          } catch (e) {
            return fn(e, t || (this && this._controller));
          }
        };
      },
      vn = function e() {
        var t = this;
        u(this, e),
          (this._emit = function (e) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return (
              (t._callbacks[e] || []).forEach(function (e) {
                var t = e.fn;
                if (t._isUserCallback)
                  try {
                    t.apply(void 0, r);
                  } catch (e) {
                    throw ((e._isUserError = !0), e);
                  }
                else t.apply(void 0, r);
              }),
              t
            );
          }),
          (this._once = function (e, n) {
            var r = function r() {
              t._off(e, r), n.apply(void 0, arguments);
            };
            return t._on(e, r, n);
          }),
          (this._removeAllListeners = function () {
            return (t._callbacks = {}), t;
          }),
          (this._on = function (e, n, r) {
            return (
              (t._callbacks[e] = t._callbacks[e] || []),
              t._callbacks[e].push({ original: r, fn: n }),
              t
            );
          }),
          (this._validateUserOn = function (e, t) {}),
          (this._userOn = function (e, n) {
            if ('string' != typeof e)
              throw new Te(
                'When adding an event listener, the first argument should be a string event name.'
              );
            if ('function' != typeof n)
              throw new Te(
                'When adding an event listener, the second argument should be a function callback.'
              );
            return (
              t._validateUserOn(e, n), (n._isUserCallback = !0), t._on(e, n)
            );
          }),
          (this._hasRegisteredListener = function (e) {
            return t._callbacks[e] && t._callbacks[e].length > 0;
          }),
          (this._off = function (e, n) {
            if (n) {
              for (
                var r = t._callbacks[e], o = void 0, i = 0;
                i < r.length;
                i++
              )
                if (((o = r[i]), o.fn === n || o.original === n)) {
                  r.splice(i, 1);
                  break;
                }
            } else delete t._callbacks[e];
            return t;
          }),
          (this._callbacks = {});
        var n = _n(this._userOn),
          r = _n(this._off),
          o = _n(this._once),
          i = hn(this._hasRegisteredListener),
          a = hn(this._removeAllListeners),
          s = yn(this._emit);
        (this.on = this.addListener = this.addEventListener = n),
          (this.off = this.removeListener = this.removeEventListener = r),
          (this.once = o),
          (this.hasRegisteredListener = i),
          (this.removeAllListeners = a),
          (this.emit = s);
      },
      bn = vn,
      gn =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      En = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      wn = (function (e) {
        function t(e, n, r, o) {
          p(this, t);
          var i = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (i._sendFAReq = function (e) {
              var t = Jt(e.tag);
              return new Me(function (n, r) {
                (i._requests[t] = { resolve: n, reject: r }),
                  i._send({
                    message: {
                      action: 'stripe-frame-action',
                      payload: { nonce: t, faReq: e },
                    },
                    type: 'outer',
                    frameId: i.id,
                    controllerId: i._controllerId,
                  });
              });
            }),
            (i.action = {
              perform3DS2Challenge: function (e) {
                return i._sendFAReq({
                  tag: 'PERFORM_3DS2_CHALLENGE',
                  value: e,
                });
              },
              perform3DS2Fingerprint: function (e) {
                return i._sendFAReq({
                  tag: 'PERFORM_3DS2_FINGERPRINT',
                  value: e,
                });
              },
              show3DS2Spinner: function (e) {
                return i._sendFAReq({ tag: 'SHOW_3DS2_SPINNER', value: e });
              },
              checkCanMakePayment: function (e) {
                return i._sendFAReq({
                  tag: 'CHECK_CAN_MAKE_PAYMENT',
                  value: e,
                });
              },
              closeLightboxFrame: function (e) {
                return i._sendFAReq({ tag: 'CLOSE_LIGHTBOX_FRAME', value: e });
              },
              openLightboxFrame: function (e) {
                return i._sendFAReq({ tag: 'OPEN_LIGHTBOX_FRAME', value: e });
              },
            }),
            (i.type = e),
            (i.loaded = !1),
            (i._controllerId = n),
            (i._persistentMessages = []),
            (i._queuedMessages = []),
            (i._requests = {}),
            (i._listenerRegistry = r),
            (i.id = i._generateId()),
            (i._iframe = i._createIFrame(o)),
            i._on('load', function () {
              (i.loaded = !0),
                i._ensureMounted(),
                i.loaded &&
                  (i._persistentMessages.forEach(function (e) {
                    return i._send(e);
                  }),
                  i._queuedMessages.forEach(function (e) {
                    return i._send(e);
                  }),
                  (i._queuedMessages = []));
            }),
            i
          );
        }
        return (
          d(t, e),
          En(t, [
            {
              key: '_generateId',
              value: function () {
                return Jt('__privateStripeFrame');
              },
            },
            {
              key: 'send',
              value: function (e) {
                this._send({
                  message: e,
                  type: 'outer',
                  frameId: this.id,
                  controllerId: this._controllerId,
                });
              },
            },
            {
              key: 'sendPersistent',
              value: function (e) {
                this._ensureMounted();
                var t = {
                  message: e,
                  type: 'outer',
                  frameId: this.id,
                  controllerId: this._controllerId,
                };
                (this._persistentMessages = [].concat(
                  l(this._persistentMessages),
                  [t]
                )),
                  this.loaded && ln(t);
              },
            },
            {
              key: 'resolve',
              value: function (e, t) {
                this._requests[e] && this._requests[e].resolve(t);
              },
            },
            {
              key: 'reject',
              value: function (e, t) {
                this._requests[e] && this._requests[e].reject(t);
              },
            },
            {
              key: '_send',
              value: function (e) {
                this._ensureMounted(),
                  this.loaded
                    ? ln(e)
                    : (this._queuedMessages = [].concat(
                        l(this._queuedMessages),
                        [e]
                      ));
              },
            },
            {
              key: 'appendTo',
              value: function (e) {
                e.appendChild(this._iframe);
              },
            },
            {
              key: 'unmount',
              value: function () {
                (this.loaded = !1), this._emit('unload');
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.unmount();
                var e = this._iframe.parentElement;
                e && e.removeChild(this._iframe), this._emit('destroy');
              },
            },
            {
              key: '_ensureMounted',
              value: function () {
                this._isMounted() || this.unmount();
              },
            },
            {
              key: '_isMounted',
              value: function () {
                return !!document.body && document.body.contains(this._iframe);
              },
            },
            {
              key: '_createIFrame',
              value: function (e) {
                var t = window.location.href.toString(),
                  n = Je(t),
                  r = n ? n.origin : '',
                  o =
                    e.queryString && 'string' == typeof e.queryString
                      ? e.queryString
                      : en(
                          gn({}, e, {
                            origin: r,
                            referrer: t,
                            controllerId: this._controllerId,
                          })
                        ),
                  i = document.createElement('iframe');
                return (
                  i.setAttribute('frameborder', '0'),
                  i.setAttribute('allowTransparency', 'true'),
                  i.setAttribute('scrolling', 'no'),
                  i.setAttribute('name', this.id),
                  i.setAttribute('allowpaymentrequest', 'true'),
                  (i.src = Lt(this.type) + '#' + o),
                  i
                );
              },
            },
          ]),
          t
        );
      })(bn),
      Sn = wn,
      Pn = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      On = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      kn = {
        border: 'none',
        margin: '0',
        padding: '0',
        width: '1px',
        'min-width': '100%',
        overflow: 'hidden',
        display: 'block',
        visibility: 'hidden',
        position: 'fixed',
        height: '1px',
        'pointer-events': 'none',
        'user-select': 'none',
      },
      An = (function (e) {
        function t(e, n, r, o) {
          h(this, t);
          var i = _(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, o)
          );
          if (
            ((i.autoload = o.autoload || !1),
            'complete' === document.readyState)
          )
            i._ensureMounted();
          else {
            var a = i._ensureMounted.bind(i);
            i._listenerRegistry.addEventListener(
              document,
              'DOMContentLoaded',
              a
            ),
              i._listenerRegistry.addEventListener(window, 'load', a),
              setTimeout(a, 5e3);
          }
          return i;
        }
        return (
          m(t, e),
          Pn(t, [
            {
              key: '_ensureMounted',
              value: function () {
                On(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  '_ensureMounted',
                  this
                ).call(this),
                  this._isMounted() || this._autoMount();
              },
            },
            {
              key: '_autoMount',
              value: function () {
                if (document.body) this.appendTo(document.body);
                else if (
                  'complete' === document.readyState ||
                  'interactive' === document.readyState
                )
                  throw new Te(
                    'Stripe.js requires that your page has a <body> element.'
                  );
                this.autoload && (this.loaded = !0);
              },
            },
            {
              key: '_createIFrame',
              value: function (e) {
                var n = On(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  '_createIFrame',
                  this
                ).call(this, e);
                return (
                  n.setAttribute('aria-hidden', 'true'),
                  n.setAttribute('allowpaymentrequest', 'true'),
                  n.setAttribute('tabIndex', '-1'),
                  an(n, kn),
                  n
                );
              },
            },
          ]),
          t
        );
      })(Sn),
      Tn = An,
      In = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Rn = (function (e) {
        function t() {
          return (
            y(this, t),
            v(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          b(t, e),
          In(t, [
            {
              key: '_generateId',
              value: function () {
                return this._controllerId;
              },
            },
          ]),
          t
        );
      })(Tn),
      Nn = Rn,
      Cn = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Mn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      jn = {
        border: 'none',
        margin: '0',
        padding: '0',
        width: '1px',
        'min-width': '100%',
        overflow: 'hidden',
        display: 'block',
        'user-select': 'none',
      },
      Ln = (function (e) {
        function t() {
          return (
            g(this, t),
            E(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          w(t, e),
          Cn(t, [
            {
              key: 'update',
              value: function (e) {
                this.send({ action: 'stripe-user-update', payload: e });
              },
            },
            {
              key: 'updateStyle',
              value: function (e) {
                var t = this;
                Object.keys(e).forEach(function (n) {
                  t._iframe.style[n] = e[n];
                });
              },
            },
            {
              key: 'focus',
              value: function () {
                this.loaded &&
                  this.send({ action: 'stripe-user-focus', payload: {} });
              },
            },
            {
              key: 'blur',
              value: function () {
                this.loaded &&
                  (this._iframe.contentWindow.blur(), this._iframe.blur());
              },
            },
            {
              key: 'clear',
              value: function () {
                this.send({ action: 'stripe-user-clear', payload: {} });
              },
            },
            {
              key: '_createIFrame',
              value: function (e) {
                var n = Mn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  '_createIFrame',
                  this
                ).call(this, e);
                return (
                  n.setAttribute('title', 'Secure payment input frame'),
                  an(n, jn),
                  n
                );
              },
            },
          ]),
          t
        );
      })(Sn),
      xn = Ln,
      Dn = function (e, t) {
        var n = !1;
        return function () {
          if (n) throw new Te(t);
          n = !0;
          try {
            return e.apply(void 0, arguments).then(
              function (e) {
                return (n = !1), e;
              },
              function (e) {
                throw ((n = !1), e);
              }
            );
          } catch (e) {
            throw ((n = !1), e);
          }
        };
      },
      qn = function (e) {
        var t = e;
        return function () {
          t && (t.apply(void 0, arguments), (t = null));
        };
      },
      Fn = function () {
        return cn(function (e) {
          var t = e.style,
            n = t.position,
            r = t.top,
            o = t.left,
            i = t.bottom,
            a = t.right,
            s = t.overflow,
            c = document.documentElement
              ? document.documentElement.style
              : { overflow: '', scrollBehavior: '' },
            u = c.overflow,
            l = c.scrollBehavior,
            p = window,
            f = p.pageXOffset,
            d = p.pageYOffset,
            h = document.documentElement
              ? window.innerWidth - document.documentElement.offsetWidth
              : 0,
            _ = document.documentElement
              ? window.innerHeight - document.documentElement.offsetHeight
              : 0;
          return (
            (e.style.position = 'fixed'),
            (e.style.overflow = 'hidden'),
            document.documentElement &&
              ((document.documentElement.style.overflow = 'visible'),
              (document.documentElement.style.scrollBehavior = 'auto')),
            (e.style.top = -d + 'px'),
            (e.style.left = -f + 'px'),
            (e.style.right = h + 'px'),
            (e.style.bottom = _ + 'px'),
            qn(function () {
              (e.style.position = n),
                (e.style.top = r),
                (e.style.left = o),
                (e.style.bottom = i),
                (e.style.right = a),
                (e.style.overflow = s),
                document.documentElement &&
                  (document.documentElement.style.overflow = u),
                window.scrollTo(f, d),
                document.documentElement &&
                  (document.documentElement.style.scrollBehavior = l);
            })
          );
        });
      },
      Bn = function (e, t) {
        return e ? window.getComputedStyle(e, t) : null;
      },
      Un = Bn,
      Hn = function (e, t) {
        var n = Array.prototype.slice
          .call(
            document.querySelectorAll(
              'a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]'
            )
          )
          .filter(function (e) {
            var t = e.getAttribute('tabindex'),
              n = !t || parseInt(t, 10) >= 0,
              r = e.getBoundingClientRect(),
              o = Un(e),
              i =
                r.width > 0 &&
                r.height > 0 &&
                o &&
                'hidden' !== o.getPropertyValue('visibility');
            return n && i;
          });
        return n[
          xe(n, function (t) {
            return t === e || e.contains(t);
          }) + ('previous' === t ? -1 : 1)
        ];
      },
      Gn = function (e) {
        var t = [],
          n = Fe(document.querySelectorAll('*'), function (n) {
            var r = n.getAttribute('tabindex') || '';
            e !== n && (n.tabIndex = -1), t.push({ element: n, tabIndex: r });
          });
        return qn(function () {
          n.then(function () {
            return Fe(t, function (e) {
              var t = e.element,
                n = e.tabIndex;
              '' === n
                ? t.removeAttribute('tabindex')
                : t.setAttribute('tabindex', n);
            });
          });
        });
      },
      Yn =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Wn = {
        display: 'block',
        position: 'fixed',
        'z-index': '2147483647',
        background: 'rgba(40,40,40,0)',
        transition: 'background 400ms ease',
        'will-change': 'background',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      },
      zn = Yn({}, Wn, { background: 'rgba(40,40,40,0.75)' }),
      Kn = function e(t) {
        var n = this,
          r = t.lockScrolling,
          o = t.lockFocus,
          i = t.lockFocusOn,
          a = t.listenerRegistry;
        S(this, e),
          (this.domElement = document.createElement('div')),
          (this._runOnHide = []),
          (this.mount = function () {
            cn(function (e) {
              (n.domElement.style.display = 'none'),
                e.contains(n.domElement) ||
                  e.insertBefore(n.domElement, e.firstChild);
            });
          }),
          (this.show = function () {
            if ((an(n.domElement, Wn), n._lockScrolling)) {
              var e = Fn();
              n._runOnHide.push(e);
            }
            if (n._lockFocus) {
              var t = Gn(n._lockFocusOn);
              n._runOnHide.push(t);
            }
          }),
          (this.fadeIn = function () {
            setTimeout(function () {
              an(n.domElement, zn);
            });
          }),
          (this.fadeOut = function () {
            return new Me(function (e) {
              an(n.domElement, Wn),
                setTimeout(e, 500),
                n._listenerRegistry.addEventListener(
                  n.domElement,
                  'transitionend',
                  e
                );
            }).then(function () {
              for (n.domElement.style.display = 'none'; n._runOnHide.length; )
                n._runOnHide.pop()();
            });
          }),
          (this.unmount = function () {
            cn(function (e) {
              e.removeChild(n.domElement);
            });
          }),
          (this._lockScrolling = !!r),
          (this._lockFocus = !!o),
          (this._lockFocusOn = i || null),
          (this._listenerRegistry = a);
      },
      Vn = Kn,
      Jn =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Xn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      $n = {
        position: 'absolute',
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
      },
      Qn = (function (e) {
        function t(e) {
          var n = e.type,
            r = e.controllerId,
            o = e.listenerRegistry,
            i = e.options;
          P(this, t);
          var a = O(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(
              this,
              n,
              r,
              o,
              Jn({}, i)
            )
          );
          return (
            (a._autoMount = function () {
              a.appendTo(a._backdrop.domElement), a._backdrop.mount();
            }),
            (a.show = function () {
              a._backdrop.show(), an(a._iframe, $n);
            }),
            (a.fadeInBackdrop = function () {
              a._backdrop.fadeIn();
            }),
            (a._backdropFadeoutPromise = null),
            (a.fadeOutBackdrop = function () {
              return (
                a._backdropFadeoutPromise ||
                  (a._backdropFadeoutPromise = a._backdrop.fadeOut()),
                a._backdropFadeoutPromise
              );
            }),
            (a.destroy = function () {
              return a.fadeOutBackdrop().then(function () {
                a._backdrop.unmount(),
                  Xn(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    'destroy',
                    a
                  ).call(a);
              });
            }),
            (a._backdrop = new Vn({
              lockScrolling: !0,
              lockFocus: !0,
              lockFocusOn: a._iframe,
              listenerRegistry: o,
            })),
            a._autoMount(),
            a
          );
        }
        return k(t, e), t;
      })(Sn),
      Zn = Qn,
      er =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      tr = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      nr = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ('value' in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      rr = {
        display: 'block',
        position: 'absolute',
        'z-index': '1000',
        width: '1px',
        'min-width': '100%',
        margin: '2px 0 0 0',
        padding: '0',
        border: 'none',
        overflow: 'hidden',
      },
      or = (function (e) {
        function t() {
          return (
            A(this, t),
            T(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          I(t, e),
          tr(t, [
            {
              key: 'updateStyle',
              value: function (e) {
                var t = this;
                Object.keys(e).forEach(function (n) {
                  t._iframe.style[n] = e[n];
                });
              },
            },
            {
              key: 'update',
              value: function (e) {
                this.send({ action: 'stripe-user-update', payload: e });
              },
            },
            {
              key: '_createIFrame',
              value: function (e) {
                var n = nr(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  '_createIFrame',
                  this
                ).call(this, er({}, e, { isSecondaryFrame: !0 }));
                return an(n, rr), (n.style.height = '0'), n;
              },
            },
          ]),
          t
        );
      })(Sn),
      ir = or,
      ar = function (e) {
        var t = Je(e),
          n = t ? t.host : '';
        return 'stripe.com' === n || !!n.match(/\.stripe\.(com|me)$/);
      },
      sr = function (e, t) {
        var n = Je(e),
          r = Je(t);
        return !(!n || !r) && n.origin === r.origin;
      },
      cr = function (e) {
        return sr(e, 'https://js.stripe.com/v3/');
      },
      ur = function (e) {
        return cr(e) || ar(e);
      },
      lr = [
        'button',
        'checkbox',
        'file',
        'hidden',
        'image',
        'submit',
        'radio',
        'reset',
      ],
      pr = function (e) {
        var t = e.tagName;
        if (e.isContentEditable || 'TEXTAREA' === t) return !0;
        if ('INPUT' !== t) return !1;
        var n = e.getAttribute('type');
        return -1 === lr.indexOf(n);
      },
      fr = pr,
      dr = function (e) {
        return /Edge\//i.test(e);
      },
      hr = function (e) {
        return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e);
      },
      _r = function (e) {
        return /SamsungBrowser/.test(e);
      },
      mr = function (e) {
        return /iPad|iPhone/i.test(e) && !hr(e);
      },
      yr = function (e) {
        return /Android/i.test(e) && !hr(e);
      },
      vr = window.navigator.userAgent,
      br = dr(vr),
      gr =
        ((function (e) {
          /Edge\/((1[0-6]\.)|0\.)/i.test(e);
        })(vr),
        hr(vr)),
      Er =
        ((function (e) {
          /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e);
        })(vr),
        mr(vr)),
      wr =
        ((function (e) {
          mr(e) || yr(e);
        })(vr),
        yr(vr),
        (function (e) {
          /Android 4\./i.test(e) && !/Chrome/i.test(e) && yr(e);
        })(vr),
        (function (e) {
          return /^((?!chrome|android).)*safari/i.test(e) && !_r(e);
        })(vr)),
      Sr =
        ((function (e) {
          /Firefox\//i.test(e);
        })(vr),
        (function (e) {
          /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e);
        })(vr),
        _r(vr)),
      Pr =
        ((function (e) {
          /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e);
        })(vr),
        (function (e) {
          return (
            /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !dr(e) && !hr(e)
          );
        })(vr)),
      Or = (function (e) {
        return /Chrome/i.test(e) && !dr(e);
      })(vr),
      kr = function (e) {
        var t = e.name,
          n = e.value,
          r = e.expiresIn,
          o = e.path,
          i = e.domain,
          a = new Date(),
          s = r || 31536e6;
        a.setTime(a.getTime() + s);
        var c = o || '/',
          u = (n || '').replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
          l =
            encodeURIComponent(t) +
            '=' +
            u +
            ';expires=' +
            a.toGMTString() +
            ';path=' +
            c +
            ';SameSite=Lax';
        return i && (l += ';domain=' + i), (document.cookie = l), l;
      },
      Ar = function (e) {
        var t = Le(document.cookie.split('; '), function (t) {
          var n = t.indexOf('=');
          return decodeURIComponent(t.substr(0, n)) === e;
        });
        if (t) {
          var n = t.indexOf('=');
          return decodeURIComponent(t.substr(n + 1));
        }
        return null;
      },
      Tr = function (e) {
        var t = {};
        return (
          e
            .replace(/\+/g, ' ')
            .split('&')
            .forEach(function (e, n) {
              var r = e.split('='),
                o = decodeURIComponent(r[0]),
                i = void 0,
                a = t,
                s = 0,
                c = o.split(']['),
                u = c.length - 1;
              if (
                (/\[/.test(c[0]) && /\]$/.test(c[u])
                  ? ((c[u] = c[u].replace(/\]$/, '')),
                    (c = c.shift().split('[').concat(c)),
                    (u = c.length - 1))
                  : (u = 0),
                2 === r.length)
              )
                if (((i = decodeURIComponent(r[1])), u))
                  for (; s <= u; s++)
                    (o = '' === c[s] ? a.length : c[s]),
                      (a[o] =
                        s < u
                          ? a[o] || (c[s + 1] && isNaN(c[s + 1]) ? {} : [])
                          : i),
                      (a = a[o]);
                else
                  Array.isArray(t[o])
                    ? t[o].push(i)
                    : void 0 !== t[o]
                    ? (t[o] = [t[o], i])
                    : (t[o] = i);
              else o && (t[o] = '');
            }),
          t
        );
      },
      Ir = Tr,
      Rr = n(8),
      Nr = n.n(Rr),
      Cr =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Mr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      jr = function (e) {
        return (
          e &&
          'object' === (void 0 === e ? 'undefined' : Mr(e)) &&
          (e.constructor === Array || e.constructor === Object)
        );
      },
      Lr = function (e) {
        return jr(e)
          ? Array.isArray(e)
            ? e.slice(0, e.length)
            : Cr({}, e)
          : e;
      },
      xr = function e(t) {
        return function () {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          if (Array.isArray(r[0]) && t) return Lr(r[0]);
          var i = Array.isArray(r[0]) ? [] : {};
          return (
            r.forEach(function (n) {
              n &&
                Object.keys(n).forEach(function (r) {
                  var o = i[r],
                    a = n[r],
                    s = jr(o) && !(t && Array.isArray(o));
                  'object' === (void 0 === a ? 'undefined' : Mr(a)) && s
                    ? (i[r] = e(t)(o, Lr(a)))
                    : void 0 !== a
                    ? (i[r] = jr(a) ? e(t)(a) : Lr(a))
                    : void 0 !== o && (i[r] = o);
                });
            }),
            i
          );
        };
      },
      Dr = (xr(!1), xr(!0)),
      qr = Ht.replace(/\/$/, ''),
      Fr = '_1776170249',
      Br = (function (e) {
        var t = R({}, Fr, !0);
        try {
          var n = Ir(e.slice(e.indexOf('?') + 1));
          Object.keys(n).forEach(function (e) {
            var r = Nr()(e),
              o = n[e];
            switch (r) {
              case Fr:
                'false' === o && (t[r] = !1);
            }
          });
        } catch (e) {}
        return t;
      })(
        (function (e) {
          try {
            if (e.currentScript) return e.currentScript.src;
            var t = e.querySelectorAll('script[src^="' + qr + '"]'),
              n = Le(t, function (e) {
                var t = e.getAttribute('src') || '',
                  n = t.split('?')[0];
                return new RegExp('^' + qr + '/?$').test(n);
              });
            return (n && n.getAttribute('src')) || '';
          } catch (e) {
            return '';
          }
        })(document)
      ),
      Ur = Br[Fr],
      Hr = (function () {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Gr = function () {
        var e = [];
        return {
          addEventListener: function (t, n, r) {
            t.addEventListener(n, r), e.push([t, n, r]);
          },
          removeEventListener: function (t, n, r) {
            t.removeEventListener(n, r),
              (e = e.filter(function (e) {
                var o = Hr(e, 3),
                  i = o[0],
                  a = o[1],
                  s = o[2];
                return i !== t || a !== n || s !== r;
              }));
          },
        };
      },
      Yr = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Wr = '__privateStripeMetricsController',
      zr = { MERCHANT: 'merchant', SESSION: 'session' },
      Kr = (function () {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if ((N(this, e), (this._controllerFrame = null), n.checkoutIds)) {
            var r = n.checkoutIds,
              o = r.muid,
              i = r.sid;
            (this._muid = o), (this._sid = i), (this._doNotPersist = !0);
          } else
            (this._muid = this._getID(zr.MERCHANT)),
              (this._sid = this._getID(zr.SESSION)),
              (this._doNotPersist = !1);
          (this._listenerRegistry = Gr()),
            (this._guidPromise = new Me(function (e) {
              t._establishMessageChannel(e);
            })),
            (this._id = Jt(Wr)),
            Ur &&
              ((this._controllerFrame = new Nn(
                Nt.METRICS_CONTROLLER,
                this._id,
                this._listenerRegistry,
                { autoload: !0, queryString: this._buildFrameQueryString() }
              )),
              this._startIntervalCheck(),
              setTimeout(
                this._testLatency.bind(this),
                2e3 + 500 * Math.random()
              ));
        }
        return (
          Yr(e, [
            {
              key: 'ids',
              value: function () {
                return {
                  guid: this._guid || 'NA',
                  muid: this._muid || 'NA',
                  sid: this._sid || 'NA',
                };
              },
            },
            {
              key: 'idsPromise',
              value: function () {
                var e = this;
                return this._guidPromise.then(function () {
                  return e.ids();
                });
              },
            },
            {
              key: '_establishMessageChannel',
              value: function (e) {
                var t = this;
                if (!Ur) return (this._guid = Xt()), void e();
                this._listenerRegistry.addEventListener(
                  window,
                  'message',
                  function (n) {
                    var r = n.data;
                    if ('string' == typeof r)
                      try {
                        var o = JSON.parse(r),
                          i = o.originatingScript,
                          a = o.payload;
                        'm' === i && ((t._guid = a), e());
                      } catch (e) {}
                  }
                );
              },
            },
            {
              key: '_startIntervalCheck',
              value: function () {
                var e = this,
                  t = window.location.href;
                setInterval(function () {
                  var n = window.location.href;
                  n !== t &&
                    (e.send({
                      action: 'ping',
                      payload: {
                        sid: e._getID(zr.SESSION),
                        muid: e._getID(zr.MERCHANT),
                        title: document.title,
                        referrer: document.referrer,
                        url: document.location.href,
                      },
                    }),
                    (t = n));
                }, 5e3);
              },
            },
            {
              key: 'report',
              value: function (e, t) {
                try {
                  this.send({
                    action: 'track',
                    payload: {
                      sid: this._getID(zr.SESSION),
                      muid: this._getID(zr.MERCHANT),
                      url: document.location.href,
                      source: e,
                      data: t,
                    },
                  });
                } catch (e) {}
              },
            },
            {
              key: 'send',
              value: function (e) {
                var t = Lt(Nt.METRICS_CONTROLLER);
                cr(t) && this._controllerFrame && this._controllerFrame.send(e);
              },
            },
            {
              key: 'safeSend',
              value: function (e) {
                var t = this;
                this._guidPromise.then(function () {
                  t.send(e);
                });
              },
            },
            {
              key: '_testLatency',
              value: function () {
                var e = this,
                  t = [],
                  n = new Date(),
                  r = function r() {
                    try {
                      var o = new Date();
                      t.push(o - n),
                        t.length >= 10 &&
                          (e.report('mouse-timings-10', t),
                          e._listenerRegistry.removeEventListener(
                            document,
                            'mousemove',
                            r
                          )),
                        (n = o);
                    } catch (e) {}
                  };
                this._listenerRegistry.addEventListener(
                  document,
                  'mousemove',
                  r
                );
              },
            },
            {
              key: '_extractMetaReferrerPolicy',
              value: function () {
                var e = document.querySelector('meta[name=referrer]');
                return null != e && e instanceof HTMLMetaElement
                  ? e.content.toLowerCase()
                  : null;
              },
            },
            {
              key: '_extractUrl',
              value: function (e) {
                var t = document.location.href;
                switch (e) {
                  case 'origin':
                  case 'strict-origin':
                  case 'origin-when-cross-origin':
                  case 'strict-origin-when-cross-origin':
                    return document.location.origin;
                  case 'unsafe-url':
                    return t.split('#')[0];
                  default:
                    return t;
                }
              },
            },
            {
              key: '_buildFrameQueryString',
              value: function () {
                var e = this._extractMetaReferrerPolicy(),
                  t = this._extractUrl(e),
                  n = {
                    url: t,
                    title: document.title,
                    referrer: document.referrer,
                    muid: this._muid,
                    sid: this._sid,
                    preview: ur(t),
                  };
                return (
                  null != e && (n.metaReferrerPolicy = e),
                  Object.keys(n)
                    .map(function (e) {
                      return null != n[e]
                        ? e + '=' + encodeURIComponent(n[e].toString())
                        : null;
                    })
                    .join('&')
                );
              },
            },
            {
              key: '_getID',
              value: function (e) {
                switch (e) {
                  case zr.MERCHANT:
                    if (this._doNotPersist) return this._muid;
                    try {
                      var t = Ur && Ar('__stripe_mid');
                      return (
                        (t = t && $t(t) ? t : Xt()),
                        Ur &&
                          kr({
                            name: '__stripe_mid',
                            value: t,
                            domain: '.' + document.location.hostname,
                          }),
                        t
                      );
                    } catch (e) {
                      return 'NA';
                    }
                  case zr.SESSION:
                    if (this._doNotPersist) return this._sid;
                    try {
                      var n = Ur && Ar('__stripe_sid');
                      return (
                        (n = n && $t(n) ? n : Xt()),
                        Ur &&
                          kr({
                            name: '__stripe_sid',
                            value: n,
                            domain: '.' + document.location.hostname,
                            expiresIn: 18e5,
                          }),
                        n
                      );
                    } catch (e) {
                      return 'NA';
                    }
                  default:
                    throw new Error('Invalid ID type specified: ' + e);
                }
              },
            },
          ]),
          e
        );
      })(),
      Vr = null,
      Jr = function () {
        return Vr;
      },
      Xr = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (Vr = new Kr(e));
      },
      $r = !1,
      Qr = function () {
        var e = Jr();
        e &&
          ($r ||
            (($r = !0),
            e.safeSend({
              action: 'ping',
              payload: {
                v2: 2,
                sid: e._getID(zr.SESSION),
                muid: e._getID(zr.MERCHANT),
                title: document.title,
                referrer: document.referrer,
                url: document.location.href,
              },
            })));
      },
      Zr = Qr,
      eo =
        ((be = {}),
        C(be, Dt.card, {
          unique: !0,
          conflict: [Dt.cardNumber, Dt.cardExpiry, Dt.cardCvc, Dt.postalCode],
          beta: !1,
        }),
        C(be, Dt.cardNumber, { unique: !0, conflict: [Dt.card], beta: !1 }),
        C(be, Dt.cardExpiry, { unique: !0, conflict: [Dt.card], beta: !1 }),
        C(be, Dt.cardCvc, { unique: !0, conflict: [Dt.card], beta: !1 }),
        C(be, Dt.postalCode, { unique: !0, conflict: [Dt.card], beta: !1 }),
        C(be, Dt.paymentRequestButton, { unique: !0, conflict: [], beta: !1 }),
        C(be, Dt.iban, { unique: !0, conflict: [], beta: !1 }),
        C(be, Dt.idealBank, { unique: !0, conflict: [], beta: !1 }),
        C(be, Dt.auBankAccount, { unique: !0, beta: !1, conflict: [] }),
        C(be, Dt.fpxBank, { unique: !0, beta: !1, conflict: [] }),
        be),
      to = eo,
      no =
        ((ge = {}),
        M(ge, Dt.card, Nt.CARD_ELEMENT),
        M(ge, Dt.cardNumber, Nt.CARD_ELEMENT),
        M(ge, Dt.cardExpiry, Nt.CARD_ELEMENT),
        M(ge, Dt.cardCvc, Nt.CARD_ELEMENT),
        M(ge, Dt.postalCode, Nt.CARD_ELEMENT),
        M(ge, Dt.paymentRequestButton, Nt.PAYMENT_REQUEST_ELEMENT),
        M(ge, Dt.iban, Nt.IBAN_ELEMENT),
        M(ge, Dt.idealBank, Nt.IDEAL_BANK_ELEMENT),
        M(ge, Dt.auBankAccount, Nt.AU_BANK_ACCOUNT_ELEMENT),
        M(ge, Dt.fpxBank, Nt.FPX_BANK_ELEMENT),
        ge),
      ro = no,
      oo = ['brand'],
      io = ['country', 'bankName'],
      ao = ['bankName', 'branchName'],
      so =
        ((Ee = {}),
        j(Ee, Dt.card, oo),
        j(Ee, Dt.cardNumber, oo),
        j(Ee, Dt.iban, io),
        j(Ee, Dt.auBankAccount, ao),
        Ee),
      co =
        ((we = {}),
        j(we, Dt.idealBank, { secondary: Dt.idealBankSecondary }),
        j(we, Dt.fpxBank, { secondary: Dt.fpxBankSecondary }),
        we),
      uo =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      lo = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      po =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      fo = '__privateStripeController',
      ho = !1,
      _o = function (e, t) {
        return (
          document.activeElement === e._iframe ||
          (e._iframe.parentElement && document.activeElement === t)
        );
      },
      mo = function (e) {
        return 'object' === (void 0 === e ? 'undefined' : po(e)) &&
          null !== e &&
          'IntegrationError' === e.name
          ? new Te('string' == typeof e.message ? e.message : '')
          : e;
      },
      yo = (function () {
        function e(t) {
          x(this, e), vo.call(this);
          var n = t.listenerRegistry,
            r = L(t, ['listenerRegistry']),
            o = r.apiKey,
            i = r.stripeAccount,
            a = r.stripeJsId,
            s = r.locale;
          (this._id = Jt(fo)),
            (this._stripeJsId = a),
            (this._apiKey = o),
            (this._stripeAccount = i),
            (this._listenerRegistry = n),
            (this._controllerFrame = new Nn(
              Nt.CONTROLLER,
              this._id,
              this._listenerRegistry,
              uo({}, r)
            )),
            (this._frames = {}),
            (this._requests = {}),
            this._setupPostMessage(),
            (this._handleMessage = hn(this._handleMessage, this)),
            this.action.fetchLocale({ locale: s || 'auto' });
        }
        return (
          lo(e, [
            {
              key: 'registerWrapper',
              value: function (e) {
                this._controllerFrame.send({
                  action: 'stripe-wrapper-register',
                  payload: { wrapperLibrary: e },
                });
              },
            },
          ]),
          e
        );
      })(),
      vo = function () {
        var e = this;
        (this._sendCAReq = function (t) {
          var n = Jt(t.tag);
          return new Me(function (r, o) {
            (e._requests[n] = { resolve: r, reject: o }),
              e._controllerFrame.send({
                action: 'stripe-safe-controller-action-request',
                payload: { nonce: n, caReq: t },
              });
          });
        }),
          (this.livemode = function () {
            var t = e._apiKey;
            return /^pk_test_/.test(t)
              ? 'testmode'
              : /^pk_live_/.test(t)
              ? 'livemode'
              : 'unknown';
          }),
          (this.action = {
            retrievePaymentIntent: function (t) {
              return e._sendCAReq({ tag: 'RETRIEVE_PAYMENT_INTENT', value: t });
            },
            confirmPaymentIntent: function (t) {
              return e._sendCAReq({ tag: 'CONFIRM_PAYMENT_INTENT', value: t });
            },
            cancelPaymentIntentSource: function (t) {
              return e._sendCAReq({
                tag: 'CANCEL_PAYMENT_INTENT_SOURCE',
                value: t,
              });
            },
            confirmSetupIntent: function (t) {
              return e._sendCAReq({ tag: 'CONFIRM_SETUP_INTENT', value: t });
            },
            retrieveSetupIntent: function (t) {
              return e._sendCAReq({ tag: 'RETRIEVE_SETUP_INTENT', value: t });
            },
            cancelSetupIntentSource: function (t) {
              return e._sendCAReq({
                tag: 'CANCEL_SETUP_INTENT_SOURCE',
                value: t,
              });
            },
            fetchLocale: function (t) {
              return e._sendCAReq({ tag: 'FETCH_LOCALE', value: t });
            },
            updateCSSFonts: function (t) {
              return e._sendCAReq({ tag: 'UPDATE_CSS_FONTS', value: t });
            },
            createApplePaySession: function (t) {
              return e._sendCAReq({
                tag: 'CREATE_APPLE_PAY_SESSION',
                value: t,
              });
            },
            retrieveSource: function (t) {
              return e._sendCAReq({ tag: 'RETRIEVE_SOURCE', value: t });
            },
            tokenizeWithElement: function (t) {
              return e._sendCAReq({ tag: 'TOKENIZE_WITH_ELEMENT', value: t });
            },
            tokenizeCvcUpdate: function (t) {
              return e._sendCAReq({ tag: 'TOKENIZE_CVC_UPDATE', value: t });
            },
            tokenizeWithData: function (t) {
              return e._sendCAReq({ tag: 'TOKENIZE_WITH_DATA', value: t });
            },
            createSourceWithElement: function (t) {
              return e._sendCAReq({
                tag: 'CREATE_SOURCE_WITH_ELEMENT',
                value: t,
              });
            },
            createSourceWithData: function (t) {
              return e._sendCAReq({ tag: 'CREATE_SOURCE_WITH_DATA', value: t });
            },
            createPaymentMethodWithElement: function (t) {
              return e._sendCAReq({
                tag: 'CREATE_PAYMENT_METHOD_WITH_ELEMENT',
                value: t,
              });
            },
            createPaymentMethodWithData: function (t) {
              return e._sendCAReq({
                tag: 'CREATE_PAYMENT_METHOD_WITH_DATA',
                value: t,
              });
            },
            createPaymentPage: function (t) {
              return e._sendCAReq({ tag: 'CREATE_PAYMENT_PAGE', value: t });
            },
            createPaymentPageWithSession: function (t) {
              return e._sendCAReq({
                tag: 'CREATE_PAYMENT_PAGE_WITH_SESSION',
                value: t,
              });
            },
            createRadarSession: function (t) {
              return e._sendCAReq({ tag: 'CREATE_RADAR_SESSION', value: t });
            },
            authenticate3DS2: function (t) {
              return e._sendCAReq({ tag: 'AUTHENTICATE_3DS2', value: t });
            },
            verifyMicrodepositsForPayment: function (t) {
              return e._sendCAReq({
                tag: 'VERIFY_MICRODEPOSITS_FOR_PAYMENT',
                value: t,
              });
            },
            verifyMicrodepositsForSetup: function (t) {
              return e._sendCAReq({
                tag: 'VERIFY_MICRODEPOSITS_FOR_SETUP',
                value: t,
              });
            },
          }),
          (this.createElementFrame = function (t, n) {
            var r = n.groupId,
              o = L(n, ['groupId']),
              i = new xn(
                t,
                e._id,
                e._listenerRegistry,
                uo({}, o, { keyMode: We(e._apiKey), apiKey: e._apiKey })
              );
            return e._setupFrame(i, t, r);
          }),
          (this.createSecondaryElementFrame = function (t, n) {
            var r = n.groupId,
              o = L(n, ['groupId']),
              i = new ir(t, e._id, e._listenerRegistry, uo({}, o));
            return e._setupFrame(i, t, r);
          }),
          (this.createHiddenFrame = function (t, n) {
            var r = new Tn(t, e._id, e._listenerRegistry, n);
            return e._setupFrame(r, t);
          }),
          (this.createLightboxFrame = function (t) {
            var n = t.type,
              r = t.options,
              o = new Zn({
                type: n,
                controllerId: e._id,
                listenerRegistry: e._listenerRegistry,
                options: r,
              });
            return e._setupFrame(o, n);
          }),
          (this._setupFrame = function (t, n, r) {
            return (
              (e._frames[t.id] = t),
              e._controllerFrame.sendPersistent({
                action: 'stripe-user-createframe',
                payload: { newFrameId: t.id, frameType: n, groupId: r },
              }),
              t._on('unload', function () {
                e._controllerFrame.sendPersistent({
                  action: 'stripe-frame-unload',
                  payload: { unloadedFrameId: t.id },
                });
              }),
              t._on('destroy', function () {
                delete e._frames[t.id],
                  e._controllerFrame.sendPersistent({
                    action: 'stripe-frame-destroy',
                    payload: { destroyedFrameId: t.id },
                  });
              }),
              t._on('load', function () {
                e._controllerFrame.sendPersistent({
                  action: 'stripe-frame-load',
                  payload: { loadedFrameId: t.id },
                }),
                  e._controllerFrame.loaded &&
                    t.send({ action: 'stripe-controller-load', payload: {} });
              }),
              t
            );
          }),
          (this.report = function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            e._controllerFrame.send({
              action: 'stripe-controller-report',
              payload: { event: t, data: n },
            });
          }),
          (this.warn = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            e._controllerFrame.send({
              action: 'stripe-controller-warn',
              payload: { args: n },
            });
          }),
          (this.controllerFor = function () {
            return 'outer';
          }),
          (this._setupPostMessage = function () {
            e._listenerRegistry.addEventListener(window, 'message', function (
              t
            ) {
              var n = t.data,
                r = t.origin,
                o = pn(n);
              o && sr(Yt, r) && e._handleMessage(o);
            });
          }),
          (this._handleMessage = function (t) {
            var n = t.controllerId,
              r = t.frameId,
              o = t.message,
              i = e._frames[r];
            if (n === e._id)
              switch (o.action) {
                case 'stripe-frame-event':
                  var a = o.payload,
                    s = a.event,
                    c = a.data;
                  if (i) {
                    if (Er) {
                      var u = i._iframe.parentElement,
                        l =
                          u && u.querySelector('.__PrivateStripeElement-input');
                      if ('focus' === s && !ho && !_o(i, l)) {
                        l && l.focus(), (ho = !0);
                        break;
                      }
                      if ('blur' === s && ho) {
                        ho = !1;
                        break;
                      }
                      'blur' === s &&
                        setTimeout(function () {
                          var e = document.activeElement;
                          if (e && !_o(i, l) && !fr(e)) {
                            var t =
                              u &&
                              u.querySelector(
                                '.__PrivateStripeElement-safariInput'
                              );
                            if (t) {
                              var n = t;
                              (n.disabled = !1),
                                n.focus(),
                                n.blur(),
                                (n.disabled = !0);
                            }
                            e.focus();
                          }
                        }, 400);
                    }
                    i._emit(s, c);
                  }
                  break;
                case 'stripe-frame-action-response':
                  i && i.resolve(o.payload.nonce, o.payload.faRes);
                  break;
                case 'stripe-frame-action-error':
                  i && i.reject(o.payload.nonce, mo(o.payload.faErr));
                  break;
                case 'stripe-frame-error':
                  throw new Te(o.payload.message);
                case 'stripe-integration-error':
                  i &&
                    i._emit('__privateIntegrationError', {
                      message: o.payload.message,
                    });
                  break;
                case 'stripe-controller-load':
                  e._controllerFrame._emit('load'),
                    Object.keys(e._frames).forEach(function (t) {
                      return e._frames[t].send({
                        action: 'stripe-controller-load',
                        payload: {},
                      });
                    });
                  break;
                case 'stripe-safe-controller-action-response':
                  e._requests[o.payload.nonce] &&
                    e._requests[o.payload.nonce].resolve(o.payload.caRes);
                  break;
                case 'stripe-safe-controller-action-error':
                  e._requests[o.payload.nonce] &&
                    e._requests[o.payload.nonce].reject(mo(o.payload.caErr));
                  break;
                case 'stripe-api-call':
                  Zr();
              }
          });
      },
      bo = yo,
      go = function () {
        var e = document.querySelectorAll('meta[name=viewport][content]'),
          t = e[e.length - 1];
        return t && t instanceof HTMLMetaElement ? t.content : '';
      },
      Eo = function (e) {
        go().match(/width=device-width/) ||
          e(
            'Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements'
          );
      },
      wo = {
        checkout_beta_2: 'checkout_beta_2',
        checkout_beta_3: 'checkout_beta_3',
        checkout_beta_4: 'checkout_beta_4',
        checkout_beta_testcards: 'checkout_beta_testcards',
        payment_intent_beta_1: 'payment_intent_beta_1',
        payment_intent_beta_2: 'payment_intent_beta_2',
        payment_intent_beta_3: 'payment_intent_beta_3',
        card_payment_method_beta_1: 'card_payment_method_beta_1',
        acknowledge_ie9_deprecation: 'acknowledge_ie9_deprecation',
        cvc_update_beta_1: 'cvc_update_beta_1',
        google_pay_beta_1: 'google_pay_beta_1',
        acss_debit_beta_1: 'acss_debit_beta_1',
        alipay_pm_beta_1: 'alipay_pm_beta_1',
        au_bank_account_beta_1: 'au_bank_account_beta_1',
        au_bank_account_beta_2: 'au_bank_account_beta_2',
        bacs_debit_beta: 'bacs_debit_beta',
        bancontact_pm_beta_1: 'bancontact_pm_beta_1',
        boleto_pm_beta_1: 'boleto_pm_beta_1',
        eps_pm_beta_1: 'eps_pm_beta_1',
        fpx_bank_beta_1: 'fpx_bank_beta_1',
        giropay_pm_beta_1: 'giropay_pm_beta_1',
        grabpay_pm_beta_1: 'grabpay_pm_beta_1',
        ideal_pm_beta_1: 'ideal_pm_beta_1',
        oxxo_pm_beta_1: 'oxxo_pm_beta_1',
        p24_pm_beta_1: 'p24_pm_beta_1',
        sepa_pm_beta_1: 'sepa_pm_beta_1',
        sofort_pm_beta_1: 'sofort_pm_beta_1',
        checkout_beta_locales: 'checkout_beta_locales',
        stripe_js_beta_locales: 'stripe_js_beta_locales',
        ideal_sepa_beta_1: 'ideal_sepa_beta_1',
      },
      So = Object.keys(wo),
      Po = function (e, t) {
        return e.indexOf(t) >= 0;
      },
      Oo = (function (e) {
        function t() {
          D(this, t);
          var e = q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (e.name = 'NetworkError'), (e.type = 'network_error'), e;
        }
        return F(t, e), t;
      })(Error),
      ko = Oo,
      Ao =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      To = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      Io = function (e) {
        return (
          Object.keys(To).forEach(function (t) {
            e.setRequestHeader(t, To[t]);
          }),
          e
        );
      },
      Ro = function e(t) {
        return new Me(function (n, r) {
          var o = t.method,
            i = t.url,
            a = t.data,
            s = t.withCredentials,
            c = a ? en(a) : '',
            u = 'GET' === o && c ? i + '?' + c : i,
            l = 'GET' === o ? '' : c,
            p = new XMLHttpRequest();
          s && (p.withCredentials = s),
            p.open(o, u, !0),
            Io(p),
            (p.onreadystatechange = function () {
              4 === p.readyState &&
                ((p.onreadystatechange = function () {}),
                0 === p.status
                  ? s
                    ? r(new ko())
                    : e(Ao({}, t, { withCredentials: !0 })).then(n, r)
                  : n(p));
            });
          try {
            p.send(l);
          } catch (e) {
            r(e);
          }
        });
      },
      No = Ro,
      Co =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Mo = function (e, t) {
        var n = /@font-face[ ]?{[^}]*}/g,
          r = e.match(n);
        if (!r) throw new Te('No @font-face rules found in file from ' + t);
        return r;
      },
      jo = function (e) {
        var t = e.match(/@font-face[ ]?{([^}]*)}/);
        return t ? t[1] : '';
      },
      Lo = function (e, t) {
        var n = e.replace(/\/\*.*\*\//g, '').trim(),
          r = n.length && /;$/.test(n) ? n : n + ';',
          o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
        if (!o)
          throw new Te(
            'Found @font-face rule containing no valid font-properties in file from ' +
              t
          );
        return o;
      },
      xo = function (e, t) {
        var n = e.indexOf(':');
        if (-1 === n)
          throw new Te(
            'Invalid css declaration in file from ' + t + ': "' + e + '"'
          );
        var r = e.slice(0, n).trim(),
          o = zt[r];
        if (!o)
          throw new Te(
            'Unsupported css property in file from ' + t + ': "' + r + '"'
          );
        return { property: o, value: e.slice(n + 1).trim() };
      },
      Do = function (e, t) {
        var n = e.reduce(function (e, n) {
          var r = xo(n, t),
            o = r.property,
            i = r.value;
          return Co({}, e, B({}, o, i));
        }, {});
        return (
          ['family', 'src'].forEach(function (e) {
            if (!n[e])
              throw new Te(
                'Missing css property in file from ' + t + ': "' + Wt[e] + '"'
              );
          }),
          n
        );
      },
      qo = function (e) {
        return No({ url: e, method: 'GET' })
          .then(function (e) {
            return e.responseText;
          })
          .then(function (t) {
            return Mo(t, e).map(function (t) {
              var n = jo(t),
                r = Lo(n, e);
              return Do(r, e);
            });
          });
      },
      Fo = qo,
      Bo = function (e, t) {
        return e.reduce(function (e, n) {
          return e.then(function (e) {
            return 'SATISFIED' === e.type
              ? e
              : n().then(function (e) {
                  return t(e)
                    ? { type: 'SATISFIED', value: e }
                    : { type: 'UNSATISFIED' };
                });
          });
        }, Me.resolve({ type: 'UNSATISFIED' }));
      },
      Uo = Bo,
      Ho =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Go = {
        success: 'success',
        fail: 'fail',
        invalid_shipping_address: 'invalid_shipping_address',
      },
      Yo = {
        fail: 'fail',
        invalid_payer_name: 'invalid_payer_name',
        invalid_payer_email: 'invalid_payer_email',
        invalid_payer_phone: 'invalid_payer_phone',
        invalid_shipping_address: 'invalid_shipping_address',
      },
      Wo = { shipping: 'shipping', delivery: 'delivery', pickup: 'pickup' },
      zo = Ho({ success: 'success' }, Yo),
      Ko = { merchantCapabilities: ['supports3DS'], displayItems: [] },
      Vo = kt({ amount: bt, label: ft, pending: ot(ht) }),
      Jo = kt({ amount: vt, label: ft, pending: ot(ht) }),
      Xo = kt({
        amount: vt,
        label: ft,
        pending: ot(ht),
        id: dt(ft, function () {
          return Jt('shippingOption');
        }),
        detail: dt(ft, function () {
          return '';
        }),
      }),
      $o = ct.apply(void 0, U(Object.keys(Wo))),
      Qo = kt({ origin: ft, name: ft }),
      Zo = kt({
        displayItems: ot(Et(Jo)),
        shippingOptions: ot(wt('id')(Et(Xo))),
        total: Vo,
        requestShipping: ot(ht),
        requestPayerName: ot(ht),
        requestPayerEmail: ot(ht),
        requestPayerPhone: ot(ht),
        shippingType: ot($o),
        currency: pt,
        country: lt,
        jcbEnabled: ot(ht),
        __billingDetailsEmailOverride: ot(ft),
        __minApplePayVersion: ot(_t),
        __merchantDetails: ot(Qo),
        __skipGooglePayInPaymentRequest: ot(ht),
        __isCheckout: ot(ht),
      }),
      ei = Ot({
        currency: ot(pt),
        displayItems: ot(Et(Jo)),
        shippingOptions: ot(wt('id')(Et(Xo))),
        total: ot(Vo),
      }),
      ti = function (e, t) {
        var n = [
          'invalid_payer_name',
          'invalid_payer_email',
          'invalid_payer_phone',
        ];
        return ct.apply(void 0, U(Object.keys(Go)))(
          -1 !== n.indexOf(e) ? 'fail' : e,
          t
        );
      },
      ni = kt({
        displayItems: ot(Et(Jo)),
        shippingOptions: ot(wt('id')(Et(Xo))),
        total: ot(Vo),
        status: ti,
      }),
      ri = ct.apply(void 0, U(Object.keys(zo))),
      oi = function (e) {
        var t = Po(e, wo.google_pay_beta_1);
        return wr
          ? t
            ? ['APPLE_PAY', 'GOOGLE_PAY']
            : ['APPLE_PAY']
          : t
          ? ['GOOGLE_PAY', 'BROWSER']
          : ['BROWSER'];
      },
      ii = oi,
      ai = function () {
        try {
          return window.location.origin === window.top.location.origin;
        } catch (e) {
          return !1;
        }
      },
      si = 2,
      ci = (function (e) {
        var t = {};
        return function (n) {
          var r = '_' + n;
          if (void 0 !== t[r]) return t[r];
          var o = e(n);
          return (t[r] = o), o;
        };
      })(function (e) {
        return window.ApplePaySession.canMakePaymentsWithActiveCard(e);
      }),
      ui = function (e) {
        if (!window.ApplePaySession) return !1;
        try {
          return window.ApplePaySession.supportsVersion(e);
        } catch (e) {
          return !1;
        }
      },
      li = function (e, t, n, r) {
        var o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : si,
          i = Math.max(si, o);
        if (window.ApplePaySession) {
          if (ai()) {
            if (window.ApplePaySession.supportsVersion(i)) {
              var a = t ? [e, t] : [e],
                s = 'merchant.' + a.join('.') + '.stripe';
              return ci(s).then(function (o) {
                if (
                  (r('pr.apple_pay.can_make_payment_native_response', {
                    available: o,
                  }),
                  n && !o && window.console)
                ) {
                  var i = t ? 'or stripeAccount parameter (' + t + ') ' : '';
                  window.console.warn(
                    'Either you do not have a card saved to your Wallet or the current domain (' +
                      e +
                      ') ' +
                      i +
                      'is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.'
                  );
                }
                return o;
              });
            }
            return (
              n &&
                window.console &&
                window.console.warn(
                  'This version of Safari does not support ApplePay JS version ' +
                    i +
                    '.'
                ),
              Me.resolve(!1)
            );
          }
          return Me.resolve(!1);
        }
        return Me.resolve(!1);
      },
      pi = ['mastercard', 'visa'],
      fi = [
        'AT',
        'AU',
        'BE',
        'CA',
        'CH',
        'DE',
        'DK',
        'EE',
        'ES',
        'FI',
        'FR',
        'GB',
        'GR',
        'HK',
        'IE',
        'IT',
        'JP',
        'LT',
        'LU',
        'LV',
        'MX',
        'NL',
        'NO',
        'NZ',
        'PL',
        'PT',
        'SE',
        'SG',
        'US',
      ],
      di = function (e, t) {
        var n = 'US' === e || t ? ['discover', 'diners', 'jcb'].concat(pi) : pi;
        return -1 !== fi.indexOf(e) ? ['amex'].concat(H(n)) : n;
      },
      hi = function (e, t) {
        return di(e, t).reduce(function (e, t) {
          return 'mastercard' === t
            ? [].concat(H(e), ['masterCard'])
            : 'diners' === t
            ? e
            : [].concat(H(e), [t]);
        }, []);
      },
      _i = {
        bif: 1,
        clp: 1,
        djf: 1,
        gnf: 1,
        jpy: 1,
        kmf: 1,
        krw: 1,
        mga: 1,
        pyg: 1,
        rwf: 1,
        vnd: 1,
        vuv: 1,
        xaf: 1,
        xof: 1,
        xpf: 1,
      },
      mi = function (e) {
        var t = _i[e.toLowerCase()] || 100;
        return { unitSize: 1 / t, fractionDigits: Math.log(t) / Math.log(10) };
      },
      yi = function (e, t) {
        var n = mi(t);
        return (e * n.unitSize).toFixed(n.fractionDigits);
      },
      vi =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      bi = function (e, t) {
        return {
          amount: yi(e.amount, t.currency),
          label: e.label,
          type: e.pending ? 'pending' : 'final',
        };
      },
      gi = function (e, t) {
        return {
          amount: yi(e.amount, t.currency),
          label: e.label,
          detail: e.detail,
          identifier: e.id,
        };
      },
      Ei = function (e, t) {
        return new window.ApplePayError(e, t);
      },
      wi = function (e) {
        return function (t) {
          return t[e] && 'string' == typeof t[e] ? t[e].toUpperCase() : null;
        };
      },
      Si =
        ((Se = {}),
        G(Se, zo.success, 0),
        G(Se, zo.fail, 1),
        G(Se, zo.invalid_payer_name, 2),
        G(Se, zo.invalid_shipping_address, 3),
        G(Se, zo.invalid_payer_phone, 4),
        G(Se, zo.invalid_payer_email, 4),
        Se),
      Pi =
        ((Pe = {}),
        G(Pe, zo.success, function () {
          return null;
        }),
        G(Pe, zo.fail, function () {
          return null;
        }),
        G(Pe, zo.invalid_payer_name, function () {
          return Ei('billingContactInvalid', 'name');
        }),
        G(Pe, zo.invalid_shipping_address, function () {
          return Ei('shippingContactInvalid', 'postalAddress');
        }),
        G(Pe, zo.invalid_payer_phone, function () {
          return Ei('shippingContactInvalid', 'phoneNumber');
        }),
        G(Pe, zo.invalid_payer_email, function () {
          return Ei('shippingContactInvalid', 'emailAddress');
        }),
        Pe),
      Oi =
        ((Oe = {}),
        G(Oe, Wo.pickup, 'storePickup'),
        G(Oe, Wo.shipping, 'shipping'),
        G(Oe, Wo.delivery, 'delivery'),
        Oe),
      ki = {
        total: function (e) {
          return bi(e.total, e);
        },
        lineItems: function (e) {
          return e.displayItems
            ? e.displayItems.map(function (t) {
                return bi(t, e);
              })
            : [];
        },
        shippingMethods: function (e) {
          return e.shippingOptions
            ? e.shippingOptions.map(function (t) {
                return gi(t, e);
              })
            : [];
        },
      },
      Ai = {
        shippingType: function (e) {
          var t = e.shippingType;
          if (!t) return null;
          var n = Oi[t];
          if (void 0 !== n) return n;
          throw new Te('Invalid value for shippingType: ' + t);
        },
        requiredBillingContactFields: function (e) {
          return e.requestPayerName ? ['postalAddress'] : null;
        },
        requiredShippingContactFields: function (e) {
          var t = [];
          return (
            e.requestShipping && t.push('postalAddress'),
            e.requestPayerEmail && t.push('email'),
            e.requestPayerPhone && t.push('phone'),
            t.length ? t : null
          );
        },
        countryCode: wi('country'),
        currencyCode: wi('currency'),
        merchantCapabilities: (function (e) {
          return function (t) {
            return t[e] || null;
          };
        })('merchantCapabilities'),
        supportedNetworks: function (e) {
          var t = hi(e.country, e.jcbEnabled || !1);
          return ui(4) && t.push('maestro'), t;
        },
      },
      Ti = {
        status: function (e) {
          var t = Si[e.status];
          return ui(3) && t > 1 ? 1 : t;
        },
        error: function (e) {
          return ui(3) ? Pi[e.status]() : null;
        },
      },
      Ii = vi({}, ki, Ai),
      Ri = vi({}, ki, Ti),
      Ni = function (e) {
        var t = vi({}, Ko, e);
        return Object.keys(Ii).reduce(function (e, n) {
          var r = Ii[n],
            o = r(t);
          return null !== o ? vi({}, e, G({}, n, o)) : e;
        }, {});
      },
      Ci = function (e) {
        return Object.keys(Ri).reduce(function (t, n) {
          var r = Ri[n],
            o = r(e);
          return null !== o ? vi({}, t, G({}, n, o)) : t;
        }, {});
      },
      Mi = function (e) {
        return 'string' == typeof e ? e : null;
      },
      ji = function (e) {
        return e ? Mi(e.phoneNumber) : null;
      },
      Li = function (e) {
        return e ? Mi(e.emailAddress) : null;
      },
      xi = function (e) {
        return e
          ? [e.givenName, e.familyName]
              .filter(function (e) {
                return e && 'string' == typeof e;
              })
              .join(' ')
          : null;
      },
      Di = function (e) {
        var t = e.addressLines,
          n = e.countryCode,
          r = e.postalCode,
          o = e.administrativeArea,
          i = e.locality,
          a = e.phoneNumber,
          s = Mi(n);
        return {
          addressLine: Array.isArray(t)
            ? t.reduce(function (e, t) {
                return 'string' == typeof t ? [].concat(Y(e), [t]) : e;
              }, [])
            : [],
          country: s ? s.toUpperCase() : '',
          postalCode: Mi(r) || '',
          recipient: xi(e) || '',
          region: Mi(o) || '',
          city: Mi(i) || '',
          phone: Mi(a) || '',
          sortingCode: '',
          dependentLocality: '',
          organization: '',
        };
      },
      qi = function (e, t) {
        var n = e.identifier,
          r = e.label;
        return t.filter(function (e) {
          return e.id === n && e.label === r;
        })[0];
      },
      Fi = function (e, t) {
        var n = e.shippingContact,
          r = e.shippingMethod,
          o = e.billingContact;
        return {
          shippingOption:
            r && t.shippingOptions && t.shippingOptions.length
              ? qi(r, t.shippingOptions)
              : null,
          shippingAddress: n ? Di(n) : null,
          payerEmail: Li(n),
          payerPhone: ji(n),
          payerName: xi(o),
          methodName: 'apple-pay',
        };
      },
      Bi = Fi,
      Ui =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Hi = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Gi =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      Yi = {
        australia: 'AU',
        austria: 'AT',
        canada: 'CA',
        schweiz: 'CH',
        deutschland: 'DE',
        hongkong: 'HK',
        saudiarabia: 'SA',
        espaa: 'ES',
        singapore: 'SG',
        us: 'US',
        usa: 'US',
        unitedstatesofamerica: 'US',
        unitedstates: 'US',
        england: 'GB',
        gb: 'GB',
        uk: 'GB',
        unitedkingdom: 'GB',
      },
      Wi = function (e, t) {
        return e && 'object' === (void 0 === e ? 'undefined' : Gi(e))
          ? t(e)
          : null;
      },
      zi = (function () {
        function e(t) {
          var n = this;
          W(this, e),
            (this._onEvent = function () {}),
            (this.setEventHandler = function (e) {
              n._onEvent = e;
            }),
            (this.canMakePayment = function () {
              return li(
                window.location.hostname,
                n._authentication.accountId,
                We(n._authentication.apiKey) === Ye.test,
                n._report,
                n._minimumVersion
              );
            }),
            (this.update = function (e) {
              (n._initialPaymentRequest = Dr(n._paymentRequestOptions, e)),
                n._initializeSessionState();
            }),
            (this.show = function () {
              n._initializeSessionState();
              var e = void 0;
              try {
                e = new window.ApplePaySession(
                  n._minimumVersion,
                  Ni(n._paymentRequestOptions)
                );
              } catch (e) {
                throw 'Must create a new ApplePaySession from a user gesture handler.' ===
                  e.message
                  ? new Te(
                      'show() must be called from a user gesture handler (such as a click handler, after the user clicks a button).'
                    )
                  : e;
              }
              (n._privateSession = e),
                n._setupSession(e, n._usesButtonElement()),
                e.begin(),
                (n._isShowing = !0);
            }),
            (this.abort = function () {
              n._privateSession && n._privateSession.abort();
            }),
            (this._warn = function (e) {}),
            (this._report = function (e, t) {
              n._controller.report(
                e,
                Ui({}, t, {
                  backingLibrary: 'APPLE_PAY',
                  usesButtonElement: n._usesButtonElement(),
                })
              );
            }),
            (this._validateMerchant = function (e, t) {
              return function (r) {
                n._controller.action
                  .createApplePaySession({
                    data: {
                      validation_url: r.validationURL,
                      domain_name: window.location.hostname,
                      display_name: n._paymentRequestOptions.total.label,
                    },
                    usesButtonElement: t,
                  })
                  .then(function (t) {
                    if (n._isShowing)
                      switch (t.type) {
                        case 'object':
                          e.completeMerchantValidation(
                            JSON.parse(t.object.session)
                          );
                          break;
                        case 'error':
                          n._handleValidationError(e)(t.error);
                          break;
                        default:
                          Ie(t);
                      }
                  }, n._handleValidationError(e));
              };
            }),
            (this._handleValidationError = function (e) {
              return function (t) {
                n._report('error.pr.apple_pay.session_creation_failed', {
                  error: t,
                }),
                  e.abort();
                var r = t.message;
                'string' == typeof r && n._controller.warn(r);
              };
            }),
            (this._paymentAuthorized = function (e) {
              return function (t) {
                var r = t.payment,
                  o = n._usesButtonElement() ? Dt.paymentRequestButton : null;
                n._controller.action
                  .tokenizeWithData({
                    type: 'apple_pay',
                    elementName: o,
                    tokenData: Ui({}, r, {
                      billingContact: Wi(r.billingContact, n._normalizeContact),
                    }),
                    mids: n._mids,
                  })
                  .then(function (t) {
                    if ('error' === t.type)
                      e.completePayment(window.ApplePaySession.STATUS_FAILURE),
                        n._report('error.pr.create_token_failed', {
                          error: t.error,
                        });
                    else {
                      var o = Wi(r.shippingContact, n._normalizeContact),
                        i = Wi(r.billingContact, n._normalizeContact);
                      o &&
                        n._paymentRequestOptions.requestShipping &&
                        !o.countryCode &&
                        e.completePayment(
                          window.ApplePaySession
                            .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS
                        );
                      var a = Bi(
                        { shippingContact: o, billingContact: i },
                        n._paymentRequestOptions
                      );
                      n._onToken(e)(
                        Ui({}, a, {
                          shippingOption: n._privateShippingOption,
                          token: t.object,
                        })
                      );
                    }
                  });
              };
            }),
            (this._normalizeContact = function (e) {
              if (e.country && 'string' == typeof e.country) {
                var t = e.country.toLowerCase().replace(/[^a-z]+/g, ''),
                  r = void 0;
                return (
                  e.countryCode
                    ? 'string' == typeof e.countryCode &&
                      (r = e.countryCode.toUpperCase())
                    : (r = Yi[t]) ||
                      n._report('warn.pr.apple_pay.missing_country_code', {
                        country: e.country,
                      }),
                  Ui({}, e, { countryCode: r })
                );
              }
              return e;
            }),
            (this._onToken = function (e) {
              return function (t) {
                n._onEvent({
                  type: 'paymentresponse',
                  payload: Ui({}, t, { complete: n._completePayment(e) }),
                });
              };
            }),
            (this._completePayment = function (e) {
              return function (t) {
                n._paymentRequestOptions = Dr(n._paymentRequestOptions, {
                  status: t,
                });
                var r = Ci(n._paymentRequestOptions),
                  o = r.status,
                  i = r.error;
                i
                  ? e.completePayment({ status: o, errors: [i] })
                  : e.completePayment(o),
                  (0 === o || (1 === o && null == i)) &&
                    ((n._isShowing = !1),
                    n._onEvent && n._onEvent({ type: 'close' }));
              };
            }),
            (this._shippingContactSelected = function (e) {
              return function (t) {
                n._onEvent({
                  type: 'shippingaddresschange',
                  payload: {
                    shippingAddress: Di(n._normalizeContact(t.shippingContact)),
                    updateWith: n._completeShippingContactSelection(e),
                  },
                });
              };
            }),
            (this._completeShippingContactSelection = function (e) {
              return function (t) {
                (n._paymentRequestOptions = Dr(n._paymentRequestOptions, t)),
                  n._paymentRequestOptions.shippingOptions &&
                    n._paymentRequestOptions.shippingOptions.length &&
                    (n._privateShippingOption =
                      n._paymentRequestOptions.shippingOptions[0]);
                var r = Ci(n._paymentRequestOptions),
                  o = r.status,
                  i = r.shippingMethods,
                  a = r.total,
                  s = r.lineItems;
                e.completeShippingContactSelection(o, i, a, s);
              };
            }),
            (this._shippingMethodSelected = function (e) {
              return function (t) {
                if (n._paymentRequestOptions.shippingOptions) {
                  var r = qi(
                    t.shippingMethod,
                    n._paymentRequestOptions.shippingOptions
                  );
                  (n._privateShippingOption = r),
                    n._onEvent({
                      type: 'shippingoptionchange',
                      payload: {
                        shippingOption: r,
                        updateWith: n._completeShippingMethodSelection(e),
                      },
                    });
                }
              };
            }),
            (this._completeShippingMethodSelection = function (e) {
              return function (t) {
                n._paymentRequestOptions = Dr(n._paymentRequestOptions, t);
                var r = Ci(n._paymentRequestOptions),
                  o = r.status,
                  i = r.total,
                  a = r.lineItems;
                e.completeShippingMethodSelection(o, i, a);
              };
            });
          var r = t.controller,
            o = t.authentication,
            i = t.mids,
            a = t.options,
            s = t.usesButtonElement,
            c = t.listenerRegistry;
          (this._controller = r),
            (this._authentication = o),
            (this._mids = i),
            (this._minimumVersion = a.__minApplePayVersion || si),
            (this._usesButtonElement = s),
            (this._listenerRegistry = c),
            (this._initialPaymentRequest = a),
            (this._isShowing = !1),
            this._initializeSessionState();
        }
        return (
          Hi(e, [
            {
              key: '_initializeSessionState',
              value: function () {
                (this._paymentRequestOptions = Ui(
                  {},
                  Ko,
                  this._initialPaymentRequest,
                  { status: zo.success }
                )),
                  (this._privateSession = null),
                  (this._privateShippingOption = null);
                var e = this._paymentRequestOptions.shippingOptions;
                e && e.length && (this._privateShippingOption = e[0]);
              },
            },
            {
              key: '_setupSession',
              value: function (e, t) {
                var n = this;
                this._listenerRegistry.addEventListener(
                  e,
                  'validatemerchant',
                  hn(this._validateMerchant(e, t))
                ),
                  this._listenerRegistry.addEventListener(
                    e,
                    'paymentauthorized',
                    hn(this._paymentAuthorized(e))
                  ),
                  this._listenerRegistry.addEventListener(
                    e,
                    'cancel',
                    hn(function () {
                      (n._isShowing = !1),
                        n._onEvent({ type: 'cancel' }),
                        n._onEvent({ type: 'close' });
                    })
                  ),
                  this._listenerRegistry.addEventListener(
                    e,
                    'shippingcontactselected',
                    hn(this._shippingContactSelected(e))
                  ),
                  this._listenerRegistry.addEventListener(
                    e,
                    'shippingmethodselected',
                    hn(this._shippingMethodSelected(e))
                  );
              },
            },
          ]),
          e
        );
      })(),
      Ki = zi,
      Vi = null,
      Ji = function (e) {
        return null !== Vi
          ? Me.resolve(Vi)
          : e().then(function (e) {
              return (Vi = e);
            });
      },
      Xi = Ji,
      $i = function () {
        return !(!Pr && !Or);
      },
      Qi = $i,
      Zi =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ea = function e(t) {
        var n = this;
        z(this, e),
          (this._mids = null),
          (this._frame = null),
          (this._initFrame = function (e) {
            var t = n._controller.createHiddenFrame(
              Nt.PAYMENT_REQUEST_GOOGLE_PAY,
              { authentication: n._authentication, mids: n._mids }
            );
            t.send({ action: 'stripe-pr-initialize', payload: { data: e } }),
              n._initFrameEventHandlers(t),
              (n._frame = t);
          }),
          (this._initFrameEventHandlers = function (e) {
            e._on('pr-cancel', function () {
              n._onEvent({ type: 'cancel' });
            }),
              e._on('pr-close', function () {
                n._backdrop.fadeOut().then(function () {
                  n._backdrop.unmount();
                }),
                  n._onEvent({ type: 'close' });
              }),
              e._on('pr-error', function (e) {
                n._onEvent({
                  type: 'error',
                  payload: {
                    errorMessage: e.errorMessage,
                    errorCode: e.errorCode,
                  },
                });
              }),
              e._on('pr-callback', function (t) {
                var r = t.event,
                  o = t.options,
                  i = t.nonce;
                switch (r) {
                  case 'paymentresponse':
                    n._handlePaymentResponse(e, o, i);
                    break;
                  case 'shippingaddresschange':
                    n._handleShippingAddressChange(e, o, i);
                    break;
                  case 'shippingoptionchange':
                    n._handleShippingOptionChange(e, o, i);
                    break;
                  default:
                    throw new Error('Unexpected event name: ' + r);
                }
              });
          }),
          (this._handlePaymentResponse = function (e, t, r) {
            var o = function (t) {
              e.send({
                action: 'stripe-pr-callback-complete',
                payload: { nonce: r, data: { status: t } },
              });
            };
            n._onEvent({
              type: 'paymentresponse',
              payload: Zi({}, t, { complete: o }),
            });
          }),
          (this._handleShippingAddressChange = function (e, t, r) {
            var o = function (t) {
              e.send({
                action: 'stripe-pr-callback-complete',
                payload: { nonce: r, data: t },
              });
            };
            n._onEvent({
              type: 'shippingaddresschange',
              payload: Zi({}, t, { updateWith: o }),
            });
          }),
          (this._handleShippingOptionChange = function (e, t, r) {
            var o = function (t) {
              e.send({
                action: 'stripe-pr-callback-complete',
                payload: { nonce: r, data: t },
              });
            };
            n._onEvent({
              type: 'shippingoptionchange',
              payload: Zi({}, t, { updateWith: o }),
            });
          }),
          (this.setEventHandler = function (e) {
            n._onEvent = e;
          }),
          (this.canMakePayment = function () {
            if (!Qi()) return Me.resolve(!1);
            if (!n._frame) throw new Error('Frame not initialized.');
            var e = n._frame;
            return Xi(function () {
              return e.action.checkCanMakePayment().then(function (e) {
                return !0 === e.available;
              });
            });
          }),
          (this.show = function () {
            n._frame &&
              (n._frame.send({
                action: 'stripe-pr-show',
                payload: {
                  data: { usesButtonElement: n._usesButtonElement() },
                },
              }),
              n._backdrop.mount(),
              n._backdrop.show(),
              n._backdrop.fadeIn());
          }),
          (this.update = function (e) {
            n._frame &&
              n._frame.send({
                action: 'stripe-pr-update',
                payload: { data: e },
              });
          }),
          (this.abort = function () {
            n._frame &&
              n._frame.send({ action: 'stripe-pr-abort', payload: {} });
          }),
          (this._controller = t.controller),
          (this._authentication = t.authentication),
          (this._mids = t.mids),
          (this._usesButtonElement = t.usesButtonElement),
          (this._backdrop = new Vn({
            lockScrolling: !1,
            lockFocus: !0,
            lockFocusOn: null,
            listenerRegistry: t.listenerRegistry,
          })),
          Qi() &&
            this._controller &&
            (this._controller.action.fetchLocale({ locale: 'auto' }),
            this._initFrame(t.options));
      },
      ta = ea,
      na = (function () {
        if (!window.PaymentRequest) return null;
        if (/CriOS\/59/.test(navigator.userAgent)) return null;
        if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent))
          return null;
        if (Sr) return null;
        var e = window.PaymentRequest;
        return (
          e.prototype.canMakePayment ||
            (e.prototype.canMakePayment = function () {
              return Me.resolve(!1);
            }),
          e
        );
      })(),
      ra = null,
      oa = function (e, t) {
        return null !== ra
          ? Me.resolve(ra)
          : na && e
          ? e.action.checkCanMakePayment().then(function (e) {
              var t = e.available;
              return (ra = !0 === t);
            })
          : Me.resolve(!1);
      },
      ia =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      aa = function e(t) {
        K(this, e), sa.call(this);
        var n = t.authentication,
          r = t.controller,
          o = t.mids,
          i = t.usesButtonElement,
          a = t.options;
        if (
          ((this._authentication = n),
          (this._controller = r),
          (this._mids = o),
          (this._usesButtonElement = i),
          na && 'https:' === window.location.protocol)
        ) {
          this._controller.action.fetchLocale({ locale: 'auto' });
          var s = this._controller.createHiddenFrame(
            Nt.PAYMENT_REQUEST_BROWSER,
            { authentication: n, mids: this._mids }
          );
          this._setupPrFrame(s, a), (this._prFrame = s);
        } else this._prFrame = null;
      },
      sa = function () {
        var e = this;
        (this._onEvent = function () {}),
          (this.setEventHandler = function (t) {
            e._onEvent = t;
          }),
          (this.canMakePayment = function () {
            return oa(e._prFrame, (We(e._authentication.apiKey), Ye.test));
          }),
          (this.update = function (t) {
            var n = e._prFrame;
            n && n.send({ action: 'stripe-pr-update', payload: { data: t } });
          }),
          (this.show = function () {
            if (!e._prFrame)
              throw new Te('Payment Request is not available in this browser.');
            e._prFrame.send({
              action: 'stripe-pr-show',
              payload: { data: { usesButtonElement: e._usesButtonElement() } },
            });
          }),
          (this.abort = function () {
            e._prFrame &&
              e._prFrame.send({ action: 'stripe-pr-abort', payload: {} });
          }),
          (this._setupPrFrame = function (t, n) {
            t.send({ action: 'stripe-pr-initialize', payload: { data: n } }),
              t._on('pr-cancel', function () {
                e._onEvent({ type: 'cancel' });
              }),
              t._on('pr-close', function () {
                e._onEvent({ type: 'close' });
              }),
              t._on('pr-error', function (t) {
                e._onEvent({
                  type: 'error',
                  payload: {
                    errorMessage: t.message || '',
                    errorCode: t.code || '',
                  },
                });
              }),
              t._on('pr-callback', function (n) {
                var r = n.event,
                  o = n.nonce,
                  i = n.options;
                switch (r) {
                  case 'token':
                    e._onEvent({
                      type: 'paymentresponse',
                      payload: ia({}, i, {
                        complete: function (e) {
                          t.send({
                            action: 'stripe-pr-callback-complete',
                            payload: { data: { status: e }, nonce: o },
                          });
                        },
                      }),
                    });
                    break;
                  case 'shippingaddresschange':
                    e._onEvent({
                      type: 'shippingaddresschange',
                      payload: {
                        shippingAddress: i.shippingAddress,
                        updateWith: function (e) {
                          t.send({
                            action: 'stripe-pr-callback-complete',
                            payload: { nonce: o, data: e },
                          });
                        },
                      },
                    });
                    break;
                  case 'shippingoptionchange':
                    e._onEvent({
                      type: 'shippingoptionchange',
                      payload: {
                        shippingOption: i.shippingOption,
                        updateWith: function (e) {
                          t.send({
                            action: 'stripe-pr-callback-complete',
                            payload: { nonce: o, data: e },
                          });
                        },
                      },
                    });
                    break;
                  default:
                    throw new Error(
                      'Unexpected event from PaymentRequest inner: ' + r
                    );
                }
              });
          });
      },
      ca = aa,
      ua =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      la = (function (e) {
        function t(e) {
          X(this, t);
          var n = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          pa.call(n),
            (n._controller = e.controller),
            (n._authentication = e.authentication),
            (n._mids = e.mids),
            (n._listenerRegistry = e.listenerRegistry),
            n._report('pr.options', { options: e.rawOptions });
          var r = It(Zo, e.rawOptions || {}, 'paymentRequest()'),
            o = r.value;
          if (
            (r.warnings.forEach(function (e) {
              return n._warn(e);
            }),
            o.__billingDetailsEmailOverride && o.requestPayerEmail)
          )
            throw new Te(
              'When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet.'
            );
          return (
            (n._queryStrategy = e.queryStrategyOverride || ii(e.betas)),
            n._report('pr.query_strategy', { queryStrategy: n._queryStrategy }),
            (n._initialOptions = ua({}, o, {
              __skipGooglePayInPaymentRequest:
                -1 !== n._queryStrategy.indexOf('GOOGLE_PAY'),
            })),
            n._initBackingLibraries(n._initialOptions),
            n
          );
        }
        return Q(t, e), t;
      })(bn),
      pa = function () {
        var e = this;
        (this._usedByButtonElement = null),
          (this._showCalledByButtonElement = !1),
          (this._isShowing = !1),
          (this._backingLibraries = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null,
          }),
          (this._activeBackingLibraryName = null),
          (this._activeBackingLibrary = null),
          (this._canMakePaymentAvailability = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null,
          }),
          (this._canMakePaymentResolved = !1),
          (this._validateUserOn = function (t, n) {
            'string' == typeof t &&
              (('source' === t && e._hasRegisteredListener('paymentmethod')) ||
                ('paymentmethod' === t &&
                  e._hasRegisteredListener('source'))) &&
              (e._report('pr.double_callback_registration'),
              e._controller.warn(
                'Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed.'
              ));
          }),
          (this._report = function (t, n) {
            e._controller.report(
              t,
              ua({}, n, {
                activeBackingLibrary: e._activeBackingLibraryName,
                usesButtonElement: e._usedByButtonElement || !1,
              })
            );
          }),
          (this._warn = function (t) {
            e._controller.warn(t);
          }),
          (this._registerElement = function () {
            e._usedByButtonElement = !0;
          }),
          (this._elementShow = function () {
            (e._showCalledByButtonElement = !0), e.show();
          }),
          (this._initBackingLibraries = function (t) {
            e._queryStrategy.forEach(function (n) {
              var r = {
                controller: e._controller,
                authentication: e._authentication,
                mids: e._mids,
                options: t,
                usesButtonElement: function () {
                  return !0 === e._usedByButtonElement;
                },
                listenerRegistry: e._listenerRegistry,
              };
              switch (n) {
                case 'APPLE_PAY':
                  (e._backingLibraries.APPLE_PAY = new Ki(r)),
                    e._backingLibraries.APPLE_PAY.setEventHandler(
                      e._handleInternalEvent
                    );
                  break;
                case 'GOOGLE_PAY':
                  (e._backingLibraries.GOOGLE_PAY = new ta(r)),
                    e._backingLibraries.GOOGLE_PAY.setEventHandler(
                      e._handleInternalEvent
                    );
                  break;
                case 'BROWSER':
                  (e._backingLibraries.BROWSER = new ca(r)),
                    e._backingLibraries.BROWSER.setEventHandler(
                      e._handleInternalEvent
                    );
                  break;
                default:
                  Ie(n);
              }
            });
          }),
          (this._handleInternalEvent = function (t) {
            switch (t.type) {
              case 'paymentresponse':
                e._emitPaymentResponse(t.payload);
                break;
              case 'error':
                e._report('error.pr.internal_error', { error: t.payload });
                break;
              case 'close':
                e._isShowing = !1;
                break;
              default:
                e._emitExternalEvent(t);
            }
          }),
          (this._emitExternalEvent = function (t) {
            switch (t.type) {
              case 'cancel':
                e._emit('cancel');
                break;
              case 'shippingoptionchange':
              case 'shippingaddresschange':
                var n = t.type,
                  r = t.payload,
                  o = null,
                  i = !1,
                  a = !1,
                  s = function (s) {
                    if (a && i)
                      return (
                        e._report('pr.update_with_called_after_timeout', {
                          event: n,
                        }),
                        void e._controller.warn(
                          'Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds.'
                        )
                      );
                    if (i)
                      return (
                        e._report('pr.update_with_double_call', { event: n }),
                        void e._controller.warn(
                          'Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once.'
                        )
                      );
                    o && clearTimeout(o),
                      (i = !0),
                      e._report('pr.update_with', { event: n, updates: s });
                    var c = It(ni, s || {}, n + ' callback'),
                      u = c.value;
                    c.warnings.forEach(function (t) {
                      return e._controller.warn(t);
                    });
                    var l = u,
                      p = !1;
                    if (
                      e._initialOptions.__isCheckout &&
                      'APPLE_PAY' === e._activeBackingLibraryName &&
                      u.shippingOptions &&
                      1 === u.shippingOptions.length &&
                      0 === u.shippingOptions[0].amount
                    ) {
                      u.shippingOptions;
                      (l = J(u, ['shippingOptions'])), (p = !0);
                    }
                    var f =
                      u.shippingOptions || e._initialOptions.shippingOptions;
                    if (
                      !(
                        p ||
                        'shippingaddresschange' !== t.type ||
                        u.status !== zo.success ||
                        (f && f.length)
                      )
                    )
                      throw new Te(
                        'When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.'
                      );
                    r.updateWith(l);
                  };
                e._hasRegisteredListener(t.type)
                  ? ((o = setTimeout(function () {
                      (a = !0),
                        e._report('pr.update_with_timed_out', { event: n }),
                        e._controller.warn(
                          'Timed out waiting for a call to updateWith(). If you listen to "' +
                            t.type +
                            '" events, then you must call event.updateWith in the "' +
                            t.type +
                            '" handler within 30 seconds.'
                        ),
                        s({ status: 'fail' });
                    }, 29900)),
                    e._emit(n, ua({}, r, { updateWith: s })))
                  : s({ status: 'success' });
                break;
              case 'token':
              case 'source':
              case 'paymentmethod':
                var c = t.type,
                  u = t.payload,
                  l = null,
                  p = !1,
                  f = !1,
                  d = function (t) {
                    if (p && f)
                      return (
                        e._report('pr.complete_called_after_timeout'),
                        void e._controller.warn(
                          'Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds.'
                        )
                      );
                    if (f)
                      return (
                        e._report('pr.complete_double_call'),
                        void e._controller.warn(
                          'Call to complete() was ignored because it has already been called. Do not call complete more than once.'
                        )
                      );
                    l && clearTimeout(l), (f = !0);
                    var n = It(ri, t, 'status for PaymentRequest completion'),
                      r = n.value;
                    n.warnings.forEach(function (t) {
                      return e._controller.warn(t);
                    }),
                      u.complete(r);
                  };
                (l = setTimeout(function () {
                  (p = !0),
                    e._report('pr.complete_timed_out'),
                    e._controller.warn(
                      'Timed out waiting for a call to complete(). Once you have processed the payment in the "' +
                        t.type +
                        '" handler, you must call event.complete within 30 seconds.'
                    ),
                    d('fail');
                }, 29900)),
                  e._emit(c, ua({}, u, { complete: d }));
                break;
              default:
                Ie(t);
            }
          }),
          (this._maybeEmitPaymentResponse = function (t) {
            e._isShowing && e._emitExternalEvent(t);
          }),
          (this._emitPaymentResponse = function (t) {
            e._report('pr.payment_authorized');
            var n = t.token,
              r = J(t, ['token']),
              o = r.payerEmail,
              i = r.payerPhone,
              a = r.complete,
              s = e._showCalledByButtonElement ? Dt.paymentRequestButton : null;
            e._hasRegisteredListener('token') &&
              e._maybeEmitPaymentResponse({ type: 'token', payload: t }),
              e._hasRegisteredListener('source') &&
                e._controller.action
                  .createSourceWithData({
                    elementName: s,
                    type: 'card',
                    sourceData: {
                      token: n.id,
                      owner: {
                        email:
                          e._initialOptions.__billingDetailsEmailOverride || o,
                        phone: i,
                      },
                    },
                    mids: null,
                  })
                  .then(function (t) {
                    'error' === t.type
                      ? t.error.code && 'email_invalid' === t.error.code
                        ? a('invalid_payer_email')
                        : (e._report('fatal.pr.token_to_source_failed', {
                            error: t.error,
                            token: n.id,
                          }),
                          a('fail'))
                      : e._maybeEmitPaymentResponse({
                          type: 'source',
                          payload: ua({}, r, { source: t.object }),
                        });
                  }),
              e._hasRegisteredListener('paymentmethod') &&
                e._controller.action
                  .createPaymentMethodWithData({
                    elementName: s,
                    type: 'card',
                    paymentMethodData: {
                      card: { token: n.id },
                      billing_details: {
                        email:
                          e._initialOptions.__billingDetailsEmailOverride || o,
                        phone: i,
                      },
                    },
                    mids: null,
                  })
                  .then(function (t) {
                    'error' === t.type
                      ? t.error.code && 'email_invalid' === t.error.code
                        ? a('invalid_payer_email')
                        : (e._report(
                            'fatal.pr.token_to_payment_method_failed',
                            { error: t.error, token: n.id }
                          ),
                          a('fail'))
                      : e._maybeEmitPaymentResponse({
                          type: 'paymentmethod',
                          payload: ua({}, r, { paymentMethod: t.object }),
                        });
                  });
          }),
          (this._canMakePaymentForBackingLibrary = function (t) {
            var n = e._backingLibraries[t];
            if (!n)
              throw new Error(
                'Unexpectedly calling canMakePayment on uninitialized backing library.'
              );
            return Me.race([
              new Me(function (e) {
                return setTimeout(e, 1e4);
              }).then(function () {
                return !1;
              }),
              n.canMakePayment().then(function (e) {
                return !!e;
              }),
            ]).then(function (n) {
              return (
                (e._canMakePaymentAvailability = ua(
                  {},
                  e._canMakePaymentAvailability,
                  V({}, t, n)
                )),
                { backingLibraryName: t, available: n }
              );
            });
          }),
          (this._constructCanMakePaymentResponse = function () {
            return ua(
              { applePay: !!e._canMakePaymentAvailability.APPLE_PAY },
              -1 !== e._queryStrategy.indexOf('GOOGLE_PAY')
                ? { googlePay: !!e._canMakePaymentAvailability.GOOGLE_PAY }
                : {}
            );
          }),
          (this.canMakePayment = hn(function () {
            if ((e._report('pr.can_make_payment'), e._canMakePaymentResolved)) {
              var t =
                null !== e._activeBackingLibrary
                  ? e._constructCanMakePaymentResponse()
                  : null;
              return (
                e._report('pr.can_make_payment_response', {
                  response: t,
                  cached: !0,
                }),
                Me.resolve(t)
              );
            }
            if ('https:' !== window.location.protocol)
              return (
                e._controller.warn(
                  'If you are testing the PaymentRequest button (to accept Apple Pay, Google Pay, etc.) you must serve this page over HTTPS as it will not work over HTTP. Please read https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-prerequisites for more details.'
                ),
                (e._canMakePaymentResolved = !0),
                Me.resolve(null)
              );
            var n = e._queryStrategy.map(function (t) {
                return function () {
                  return e._canMakePaymentForBackingLibrary(t);
                };
              }),
              r = Date.now();
            return Uo(n, function (t) {
              var n = t.backingLibraryName,
                r = t.available;
              return (
                r &&
                  ((e._activeBackingLibraryName = n),
                  (e._activeBackingLibrary = e._backingLibraries[n])),
                r
              );
            }).then(function (t) {
              var n = Date.now();
              e._canMakePaymentResolved = !0;
              var o = null;
              return (
                'SATISFIED' === t.type &&
                  (o = e._constructCanMakePaymentResponse()),
                e._report('pr.can_make_payment_response', {
                  response: o,
                  cached: !1,
                  duration: n - r,
                }),
                o
              );
            });
          })),
          (this.update = hn(function (t) {
            if (e._isShowing)
              throw (
                (e._report('pr.update_called_while_showing'),
                new Te(
                  'You cannot update Payment Request options while the payment sheet is showing.'
                ))
              );
            e._report('pr.update', { updates: t });
            var n = It(ei, t, 'PaymentRequest update()'),
              r = n.value;
            n.warnings.forEach(function (t) {
              return e._warn(t);
            }),
              e._activeBackingLibrary && e._activeBackingLibrary.update(r);
          })),
          (this.show = hn(function () {
            if (
              (e._usedByButtonElement &&
                !e._showCalledByButtonElement &&
                (e._report('pr.show_called_with_button'),
                e._warn(
                  'Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.'
                )),
              !e._canMakePaymentResolved)
            )
              throw (
                (e._report('pr.show_called_before_can_make_payment'),
                new Te(
                  "You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show()."
                ))
              );
            if (!e._activeBackingLibrary)
              throw (
                (e._report('pr.show_called_with_can_make_payment_false'),
                new Te('Payment Request is not available in this browser.'))
              );
            var t = e._activeBackingLibrary;
            e._report('pr.show', {
              listeners: Object.keys(e._callbacks).sort(),
            }),
              (e._isShowing = !0),
              t.show();
          })),
          (this.abort = hn(function () {
            if (e._activeBackingLibrary) {
              var t = e._activeBackingLibrary;
              e._report('pr.abort'), t.abort();
            }
          }));
      },
      fa = la,
      da = {
        base: ot(gt),
        complete: ot(gt),
        empty: ot(gt),
        invalid: ot(gt),
        paymentRequestButton: ot(gt),
      },
      ha = {
        classes: ot(
          kt({
            base: ot(ft),
            complete: ot(ft),
            empty: ot(ft),
            focus: ot(ft),
            invalid: ot(ft),
            webkitAutofill: ot(ft),
          })
        ),
        hidePostalCode: ot(ht),
        hideIcon: ot(ht),
        showIcon: ot(ht),
        style: ot(kt(da)),
        iconStyle: ot(ct('solid', 'default')),
        value: ot(it(ft, gt)),
        __privateCvcOptional: ot(ht),
        __privateValue: ot(it(ft, gt)),
        __privateEmitIbanValue: ot(ht),
        error: ot(
          kt({ type: ft, code: ot(ft), decline_code: ot(ft), param: ot(ft) })
        ),
        locale: St('elements()'),
        fonts: St('elements()'),
        placeholder: ot(ft),
        disabled: ot(ht),
        placeholderCountry: ot(ft),
        paymentRequest: ot(
          (function (e, t) {
            return function (n, r) {
              return n instanceof e ? et(n) : rt('a ' + t + ' instance', n, r);
            };
          })(fa, 'stripe.paymentRequest(...)')
        ),
        supportedCountries: ot(Et(ft)),
        accountHolderType: ot(ct('individual', 'company')),
      },
      _a = kt(ha),
      ma = ['hu', 'mt', 'tr', 'th'],
      ya = (function (e) {
        return function (t, n) {
          return Po(n, wo.stripe_js_beta_locales)
            ? t
            : -1 === e.indexOf(t)
            ? t
            : 'auto';
        };
      })(ma),
      va =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      ba = function (e) {
        return 'string' == typeof e
          ? Le(Object.keys(to), function (t) {
              return t === e;
            }) || null
          : null;
      },
      ga = function (e) {
        return null != e &&
          e.__elementType &&
          'string' == typeof e.__elementType &&
          'function' == typeof e
          ? e.__elementType
          : null;
      },
      Ea = function (e, t) {
        var n = ba(e);
        if (!n)
          throw new Te(
            'A valid Element name must be provided. Valid Elements are:\n' +
              Object.keys(to)
                .filter(function (e) {
                  return !to[e].beta;
                })
                .join(', ') +
              '; you passed: ' +
              (n || (void 0 === e ? 'undefined' : va(e))) +
              '.'
          );
      },
      wa = function (e, t, n) {
        if ((Ea(e), to[e].unique && -1 !== t.indexOf(e)))
          throw new Te('Can only create one Element of type ' + e + '.');
        var r = to[e].conflict,
          o = qe(t, r);
        if (o.length) {
          var i = o[0];
          throw new Te(
            'Cannot create an Element of type ' +
              e +
              ' after an Element of type ' +
              i +
              ' has already been created.'
          );
        }
      },
      Sa = '14px',
      Pa = function (e) {
        var t = e.split(' ').map(function (e) {
          return parseInt(e.trim(), 10);
        });
        return 1 === t.length || 2 === t.length
          ? 2 * t[0]
          : 3 === t.length || 4 === t.length
          ? t[0] + t[2]
          : 0;
      },
      Oa = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : '1.2em',
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sa,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : '0',
          r = Pa(n);
        if ('string' == typeof e && /^[0-9.]+px$/.test(e)) {
          return parseFloat(e.toString().replace(/[^0-9.]/g, '')) + r + 'px';
        }
        var o = parseFloat(e.toString().replace(/[^0-9.]/g, '')),
          i = parseFloat(Sa.replace(/[^0-9.]/g, '')),
          a = parseFloat(t.toString().replace(/[^0-9.]/g, '')),
          s = void 0;
        if ('string' == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) s = a;
        else if ('string' == typeof t && /^(\d+|\d*\.\d+)em$/.test(t))
          s = a * i;
        else if ('string' == typeof t && /^(\d+|\d*\.\d+)%$/.test(t))
          s = (a / 100) * i;
        else {
          if (
            'string' != typeof t ||
            (!/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t))
          )
            return '100%';
          s = i;
        }
        var c = o * s + r,
          u = c + 'px';
        return /^[0-9.]+px$/.test(u) ? u : '100%';
      },
      ka = Oa,
      Aa =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ta = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ia = {
        base: 'StripeElement',
        focus: 'StripeElement--focus',
        invalid: 'StripeElement--invalid',
        complete: 'StripeElement--complete',
        empty: 'StripeElement--empty',
        webkitAutofill: 'StripeElement--webkit-autofill',
      },
      Ra = {
        margin: '0',
        padding: '0',
        border: 'none',
        display: 'block',
        background: 'transparent',
        position: 'relative',
        opacity: '1',
      },
      Na = {
        border: 'none',
        display: 'block',
        position: 'absolute',
        height: '1px',
        top: '0',
        left: '0',
        padding: '0',
        margin: '0',
        width: '100%',
        opacity: '0',
        background: 'transparent',
        'pointer-events': 'none',
        'font-size': '16px',
      },
      Ca = function (e) {
        return parseFloat(e.toFixed(1));
      },
      Ma = function (e) {
        return /^\d+(\.\d*)?px$/.test(e);
      },
      ja = (function (e) {
        function t(e, n) {
          te(this, t);
          var r = ne(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
          );
          La.call(r);
          var o = e.controller,
            i = e.componentName,
            a = e.paymentRequest;
          (r._controller = o),
            (r._listenerRegistry = n),
            (r._componentName = i);
          var s = 'paymentRequestButton' === r._componentName;
          if (s) {
            if (!a)
              throw new Te(
                'You must pass in a stripe.paymentRequest object in order to use this Element.'
              );
            (r._paymentRequest = a), r._paymentRequest._registerElement();
          }
          return (
            r._createComponent(e, i),
            (r._classes = Ia),
            r._computeCustomClasses(e.classes || {}),
            (r._lastBackgroundColor = ''),
            (r._destroyed = !1),
            (r._focused = !1),
            (r._empty = !s),
            (r._invalid = !1),
            (r._complete = !1),
            (r._autofilled = !1),
            (r._lastSubmittedAt = null),
            r
          );
        }
        return (
          re(t, e),
          Ta(t, [
            {
              key: '_checkDestroyed',
              value: function () {
                if (this._destroyed)
                  throw new Te(
                    'This Element has already been destroyed. Please create a new one.'
                  );
              },
            },
            {
              key: '_isMounted',
              value: function () {
                return (
                  !!document.body && document.body.contains(this._component)
                );
              },
            },
            {
              key: '_mountToParent',
              value: function (e) {
                var t = this._component.parentElement,
                  n = this._isMounted();
                if (e === t) {
                  if (n) return;
                  this.unmount(), this._mountTo(e);
                } else if (t) {
                  if (n)
                    throw new Te(
                      'This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.'
                    );
                  this.unmount(), this._mountTo(e);
                } else this._mountTo(e);
              },
            },
            {
              key: '_mountTo',
              value: function (e) {
                var t = Date.now(),
                  n = Un(e, null),
                  r = !!n && 'rtl' === n.getPropertyValue('direction'),
                  o = this._paymentRequest
                    ? this._paymentRequest._activeBackingLibraryName
                    : null;
                for (this._parent = e; e.firstChild; )
                  e.removeChild(e.firstChild);
                e.appendChild(this._component),
                  this._frame.send({
                    action: 'stripe-user-mount',
                    payload: {
                      mountTime: t,
                      rtl: r,
                      paymentRequestButtonType: o,
                    },
                  }),
                  this._findPossibleLabel(),
                  this._updateClasses();
              },
            },
            {
              key: '_updateClasses',
              value: function () {
                this._parent &&
                  on(this._parent, [
                    [this._classes.base, !0],
                    [this._classes.empty, this._empty],
                    [this._classes.focus, this._focused],
                    [this._classes.invalid, this._invalid],
                    [this._classes.complete, this._complete],
                    [this._classes.webkitAutofill, this._autofilled],
                  ]);
              },
            },
            {
              key: '_removeClasses',
              value: function () {
                this._parent &&
                  on(this._parent, [
                    [this._classes.base, !1],
                    [this._classes.empty, !1],
                    [this._classes.focus, !1],
                    [this._classes.invalid, !1],
                    [this._classes.complete, !1],
                    [this._classes.webkitAutofill, !1],
                  ]);
              },
            },
            {
              key: '_findPossibleLabel',
              value: function () {
                var e = this._parent;
                if (e) {
                  var t = e.getAttribute('id'),
                    n = void 0;
                  if (
                    (t &&
                      (n = document.querySelector("label[for='" + t + "']")),
                    n)
                  )
                    this._listenerRegistry.addEventListener(
                      e,
                      'click',
                      this.focus
                    );
                  else
                    for (
                      n = n || e.parentElement;
                      n && 'LABEL' !== n.nodeName;

                    )
                      n = n.parentElement;
                  n
                    ? ((this._label = n),
                      this._listenerRegistry.addEventListener(
                        n,
                        'click',
                        this.focus
                      ))
                    : this._listenerRegistry.addEventListener(
                        e,
                        'click',
                        this.focus
                      );
                }
              },
            },
            {
              key: '_computeCustomClasses',
              value: function (e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function (n) {
                    if (!Ia[n])
                      throw new Te(
                        n +
                          ' is not a customizable class name.\nYou can customize: ' +
                          Object.keys(Ia).join(', ')
                      );
                    var r = e[n] || Ia[n];
                    t[n] = r.replace(/\./g, ' ');
                  }),
                  (this._classes = Aa({}, this._classes, t)),
                  this
                );
              },
            },
            {
              key: '_emitEvent',
              value: function (e, t) {
                return this._emit(
                  e,
                  Aa({ elementType: this._componentName }, t)
                );
              },
            },
            {
              key: '_setupEvents',
              value: function () {
                var e = this;
                this._frame._on('redirectfocus', function (t) {
                  var n = t.focusDirection,
                    r = Hn(e._component, n);
                  r && r.focus();
                }),
                  this._frame._on('focus', function () {
                    (e._focused = !0), e._updateClasses();
                  }),
                  this._frame._on('blur', function () {
                    (e._focused = !1),
                      e._updateClasses(),
                      e._lastSubmittedAt &&
                        'paymentRequestButton' === e._componentName &&
                        (e._controller.report(
                          'payment_request_button.sheet_visible',
                          { latency: new Date() - e._lastSubmittedAt }
                        ),
                        (e._lastSubmittedAt = null));
                  }),
                  this._frame._on('submit', function () {
                    if ('paymentRequestButton' === e._componentName) {
                      e._lastSubmittedAt = new Date();
                      var t = !1,
                        n = !1;
                      Zr(),
                        e._emitEvent('click', {
                          preventDefault: function () {
                            e._controller.report(
                              'payment_request_button.default_prevented'
                            ),
                              t &&
                                e._controller.warn(
                                  'event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event.'
                                ),
                              (n = !0);
                          },
                        }),
                        !n &&
                          e._paymentRequest &&
                          (e._paymentRequest._elementShow(), (t = !0));
                    } else e._emitEvent('submit'), e._formSubmit();
                  }),
                  ['ready', 'focus', 'blur', 'escape'].forEach(function (t) {
                    e._frame._on(t, function () {
                      e._emitEvent(t);
                    });
                  }),
                  this._frame._on('change', function (t) {
                    Zr();
                    var n = {};
                    ['error', 'value', 'empty', 'complete']
                      .concat(ee(so[e._componentName] || []))
                      .forEach(function (e) {
                        return (n[e] = t[e]);
                      }),
                      e._emitEvent('change', n),
                      (e._empty = n.empty),
                      (e._invalid = !!n.error),
                      (e._complete = n.complete),
                      e._updateClasses();
                  }),
                  this._frame._on('__privateIntegrationError', function (t) {
                    var n = t.message;
                    e._emitEvent('__privateIntegrationError', { message: n });
                  }),
                  this._frame._on('dimensions', function (t) {
                    if (e._parent) {
                      var n = Un(e._parent, null);
                      if (n) {
                        var r = parseFloat(n.getPropertyValue('height')),
                          o = t.height;
                        if ('border-box' === n.getPropertyValue('box-sizing')) {
                          var i = parseFloat(n.getPropertyValue('padding-top')),
                            a = parseFloat(
                              n.getPropertyValue('padding-bottom')
                            );
                          r =
                            r -
                            parseFloat(n.getPropertyValue('border-top')) -
                            parseFloat(n.getPropertyValue('border-bottom')) -
                            i -
                            a;
                        }
                        0 !== r &&
                          Ca(r) < Ca(o) &&
                          e._controller.report('wrapper_height_mismatch', {
                            height: o,
                            outer_height: r,
                          });
                        var s = e._component.getBoundingClientRect().height;
                        0 !== s &&
                          0 !== o &&
                          Ca(s) !== Ca(o) &&
                          (e._frame.updateStyle({ height: o + 'px' }),
                          e._controller.report('iframe_height_update', {
                            height: o,
                            calculated_height: s,
                          }));
                      }
                    }
                  }),
                  this._frame._on('autofill', function () {
                    if (e._parent) {
                      var t = e._parent.style.backgroundColor,
                        n = '#faffbd' === t || 'rgb(250, 255, 189)' === t;
                      (e._lastBackgroundColor = n ? e._lastBackgroundColor : t),
                        (e._parent.style.backgroundColor = '#faffbd'),
                        (e._autofilled = !0),
                        e._updateClasses();
                    }
                  }),
                  this._frame._on('autofill-cleared', function () {
                    (e._autofilled = !1),
                      e._parent &&
                        (e._parent.style.backgroundColor =
                          e._lastBackgroundColor),
                      e._updateClasses();
                  });
              },
            },
            {
              key: '_handleOutsideClick',
              value: function () {
                this._secondaryFrame &&
                  this._secondaryFrame.send({
                    action: 'stripe-outside-click',
                    payload: {},
                  });
              },
            },
            {
              key: '_createSecondFrame',
              value: function (e, t, n) {
                var r = this._controller.createSecondaryElementFrame(
                  e,
                  Aa({}, n, { componentName: t })
                );
                return (
                  r &&
                    r.on &&
                    r.on('height-change', function (e) {
                      r.updateStyle({ height: e.height + 'px' });
                    }),
                  r
                );
              },
            },
            {
              key: '_createComponent',
              value: function (e, t) {
                this._createElement(e, t),
                  this._setupEvents(),
                  this._updateFrameHeight(e, !0);
              },
            },
            {
              key: '_updateFrameHeight',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if ('paymentRequestButton' === this._componentName) {
                  var n = (e.style && e.style.paymentRequestButton) || {},
                    r = n.height,
                    o = 'string' == typeof r ? r : void 0;
                  (t || o) &&
                    (this._frame.updateStyle({
                      height: o || this._lastHeight || '40px',
                    }),
                    (this._lastHeight = o || this._lastHeight));
                } else {
                  var i = (e.style && e.style.base) || {},
                    a = i.lineHeight,
                    s = i.fontSize,
                    c = i.padding,
                    u =
                      'string' != typeof a || isNaN(parseFloat(a)) ? void 0 : a,
                    l = 'string' == typeof s ? s : void 0,
                    p = 'string' == typeof c ? c : void 0;
                  if (
                    (l &&
                      !Ma(l) &&
                      this._controller.warn(
                        'The fontSize style you specified (' +
                          l +
                          ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."
                      ),
                    t || u || l)
                  ) {
                    var f =
                        -1 === Kt.indexOf(this._componentName)
                          ? void 0
                          : p || this._lastPadding,
                      d = ka(u || this._lastHeight, l || this._lastFontSize, f);
                    this._frame.updateStyle({ height: d }),
                      (this._lastFontSize = l || this._lastFontSize),
                      (this._lastHeight = u || this._lastHeight),
                      (this._lastPadding = f);
                  }
                }
              },
            },
            {
              key: '_createElement',
              value: function (e, t) {
                var n = this,
                  r =
                    (e.classes,
                    e.controller,
                    e.paymentRequest,
                    Z(e, ['classes', 'controller', 'paymentRequest'])),
                  o = document.createElement('div');
                o.className = '__PrivateStripeElement';
                var i = document.createElement('input');
                (i.className = '__PrivateStripeElement-input'),
                  i.setAttribute('aria-hidden', 'true'),
                  i.setAttribute('aria-label', ' '),
                  i.setAttribute('autocomplete', 'false'),
                  (i.maxLength = 1),
                  (i.disabled = !0),
                  an(o, Ra),
                  an(i, Na);
                var a = Un(document.body),
                  s = !!a && 'rtl' === a.getPropertyValue('direction'),
                  c = ro[t],
                  u = Aa({}, r, { rtl: s }),
                  l = this._controller.createElementFrame(c, u);
                if (
                  (l._on('load', function () {
                    i.disabled = !1;
                  }),
                  this._listenerRegistry.addEventListener(
                    i,
                    'focus',
                    function () {
                      l.focus();
                    }
                  ),
                  l.appendTo(o),
                  co[t])
                ) {
                  var p = co[t].secondary;
                  (this._secondaryFrame = this._createSecondFrame(
                    c,
                    p,
                    Aa({}, u, { primaryElementType: t })
                  )),
                    this._secondaryFrame.appendTo(o),
                    this._listenerRegistry.addEventListener(
                      window,
                      'click',
                      function () {
                        return n._handleOutsideClick();
                      }
                    );
                }
                if ((o.appendChild(i), Er && t !== Dt.paymentRequestButton)) {
                  var f = document.createElement('input');
                  (f.className = '__PrivateStripeElement-safariInput'),
                    f.setAttribute('aria-hidden', 'true'),
                    f.setAttribute('tabindex', '-1'),
                    f.setAttribute('autocomplete', 'false'),
                    (f.maxLength = 1),
                    (f.disabled = !0),
                    an(f, Na),
                    o.appendChild(f);
                }
                (this._component = o), (this._frame = l), (this._fakeInput = i);
              },
            },
          ]),
          t
        );
      })(bn),
      La = function () {
        var e = this;
        (this._paymentRequest = null),
          (this.mount = hn(function (t) {
            e._checkDestroyed();
            var n = void 0;
            if (!t)
              throw new Te(
                'Missing argument. Make sure to call mount() with a valid DOM element or selector.'
              );
            if ('string' == typeof t) {
              var r = document.querySelectorAll(t);
              if (
                (r.length > 1 &&
                  e._controller.warn(
                    'The selector you specified (' +
                      t +
                      ') applies to ' +
                      r.length +
                      ' DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one.'
                  ),
                !r.length)
              )
                throw new Te(
                  'The selector you specified (' +
                    t +
                    ') applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().'
                );
              n = r[0];
            } else {
              if (!t.appendChild)
                throw new Te(
                  'Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.'
                );
              n = t;
            }
            if ('INPUT' === n.nodeName)
              throw new Te(
                'Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.'
              );
            if (
              (n.children.length &&
                e._controller.warn(
                  'This Element will be mounted to a DOM element that contains child nodes.'
                ),
              e._paymentRequest)
            ) {
              if (!e._paymentRequest._canMakePaymentResolved)
                throw new Te(
                  'For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element.'
                );
              if (!e._paymentRequest._activeBackingLibraryName)
                throw new Te(
                  'The paymentRequestButton Element is not available in the current environment.'
                );
              e._mountToParent(n);
            } else e._mountToParent(n);
          })),
          (this.update = hn(function (t) {
            e._checkDestroyed();
            var n = It(_a, t || {}, 'element.update()'),
              r = n.value;
            if (
              (n.warnings.forEach(function (t) {
                return e._controller.warn(t);
              }),
              r)
            ) {
              var o = r.classes,
                i = Z(r, ['classes']);
              o &&
                (e._removeClasses(),
                e._computeCustomClasses(o),
                e._updateClasses()),
                e._updateFrameHeight(r),
                Object.keys(i).length &&
                  (e._frame.update(i),
                  e._secondaryFrame && e._secondaryFrame.update(i));
            }
            return e;
          })),
          (this.focus = hn(function (t) {
            return (
              e._checkDestroyed(),
              t && t.preventDefault(),
              document.activeElement &&
                document.activeElement.blur &&
                document.activeElement.blur(),
              e._fakeInput.focus(),
              e
            );
          })),
          (this.blur = hn(function () {
            return e._checkDestroyed(), e._frame.blur(), e._fakeInput.blur(), e;
          })),
          (this.clear = hn(function () {
            return e._checkDestroyed(), e._frame.clear(), e;
          })),
          (this.unmount = hn(function () {
            e._checkDestroyed();
            var t = e._component.parentElement,
              n = e._label;
            return (
              t &&
                (t.removeChild(e._component),
                e._listenerRegistry.removeEventListener(t, 'click', e.focus),
                e._removeClasses()),
              (e._parent = null),
              n &&
                (e._listenerRegistry.removeEventListener(n, 'click', e.focus),
                (e._label = null)),
              e._secondaryFrame &&
                (e._secondaryFrame.unmount(),
                e._listenerRegistry.removeEventListener(
                  window,
                  'click',
                  e._handleOutsideClick
                )),
              (e._fakeInput.disabled = !0),
              e._frame.unmount(),
              e
            );
          })),
          (this.destroy = hn(function () {
            return (
              e._checkDestroyed(),
              e.unmount(),
              (e._destroyed = !0),
              e._emitEvent('destroy'),
              e
            );
          })),
          (this._formSubmit = function () {
            for (
              var t = e._component.parentElement;
              t && 'FORM' !== t.nodeName;

            )
              t = t.parentElement;
            if (t) {
              var n = document.createEvent('Event');
              n.initEvent('submit', !0, !0), t.dispatchEvent(n);
            }
          });
      },
      xa = ja,
      Da =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      qa = {
        locale: ot(ft),
        fonts: ot(Et(gt)),
        betas: ot(Et(ut.apply(void 0, ae(So)))),
      },
      Fa = kt(qa),
      Ba = function e(t, n, r) {
        var o = this;
        ie(this, e), Ua.call(this);
        var i = It(Fa, r || {}, 'elements()'),
          a = i.value;
        i.warnings.forEach(function (e) {
          return t.warn(e);
        }),
          Eo(t.warn),
          t.report('elements', { options: r }),
          (this._elements = []),
          (this._id = Jt('elements')),
          (this._controller = t),
          (this._betas = a.betas || []),
          (this._listenerRegistry = n),
          (a.locale = ya(a.locale, this._betas));
        var s = a.locale,
          c = a.fonts || [];
        this._controller.action.fetchLocale({ locale: s || 'auto' });
        var u = c
            .filter(function (e) {
              return !e.cssSrc || 'string' != typeof e.cssSrc;
            })
            .map(function (e) {
              return Da({}, e, {
                __resolveFontRelativeTo: window.location.href,
              });
            }),
          l = c
            .map(function (e) {
              return e.cssSrc;
            })
            .reduce(function (e, t) {
              return 'string' == typeof t ? [].concat(ae(e), [t]) : e;
            }, [])
            .map(function (e) {
              return Ve(e) ? e : Xe(window.location.href, e);
            });
        this._pendingFonts = l.length;
        var p = (a.betas, oe(a, ['betas']));
        return (
          (this._commonOptions = Da({}, p, { fonts: u })),
          l.forEach(function (e) {
            if ('string' == typeof e) {
              var t = Date.now();
              Fo(e)
                .then(function (n) {
                  o._controller.report('font.loaded', {
                    load_time: Date.now() - t,
                    font_count: n.length,
                    css_src: e,
                  });
                  var r = n.map(function (t) {
                    return Da({}, t, { __resolveFontRelativeTo: e });
                  });
                  o._controller.action.updateCSSFonts({
                    fonts: r,
                    groupId: o._id,
                  }),
                    (o._commonOptions = Da({}, o._commonOptions, {
                      fonts: [].concat(
                        ae(
                          o._commonOptions.fonts ? o._commonOptions.fonts : []
                        ),
                        ae(r)
                      ),
                    }));
                })
                .catch(function (n) {
                  o._controller.report('error.font.not_loaded', {
                    load_time: Date.now() - t,
                    message: n && n.message && n.message,
                    css_src: e,
                  }),
                    o._controller.warn('Failed to load CSS file at ' + e + '.');
                });
            }
          }),
          this
        );
      },
      Ua = function () {
        var e = this;
        (this.getElement = hn(function (t) {
          var n = ga(t) || t;
          return (
            Ea(n, e._betas),
            Le(e._elements, function (e) {
              return e._componentName === n;
            }) || null
          );
        })),
          (this.create = _n(function (t, n) {
            wa(
              t,
              e._elements.map(function (e) {
                return e._componentName;
              }),
              e._betas
            );
            var r = It(_a, n || {}, 'create()'),
              o = r.value;
            r.warnings.forEach(function (t) {
              return e._controller.warn(t);
            });
            var i = Da({}, o, e._commonOptions, {
                componentName: t,
                groupId: e._id,
              }),
              a = (i.paymentRequest, oe(i, ['paymentRequest'])),
              s = (br || gr) && en(a).length > 2e3,
              c = !!e._pendingFonts || s,
              u = new xa(
                Da({}, i, {
                  fonts: s ? null : e._commonOptions.fonts,
                  controller: e._controller,
                  wait: c,
                }),
                e._listenerRegistry
              );
            return (
              (e._elements = [].concat(ae(e._elements), [u])),
              u._on('destroy', function () {
                e._elements = e._elements.filter(function (e) {
                  return e._componentName !== t;
                });
              }),
              s &&
                u._frame.send({
                  action: 'stripe-user-update',
                  payload: { fonts: e._commonOptions.fonts },
                }),
              u
            );
          }));
      },
      Ha = Ba,
      Ga = function (e, t, n, r, o, i, a) {
        return new fa({
          controller: e,
          authentication: t,
          mids: n,
          rawOptions: r,
          betas: o,
          queryStrategyOverride: i,
          listenerRegistry: a,
        });
      },
      Ya = Ga,
      Wa = { _componentName: ft, _frame: kt({ id: ft }) },
      za = kt(Wa),
      Ka = function (e) {
        var t = Tt(za, e, '');
        return 'error' === t.type ? null : t.value;
      },
      Va = {
        alipay: 'alipay',
        au_becs_debit: 'au_becs_debit',
        acss_debit: 'acss_debit',
        bacs_debit: 'bacs_debit',
        bancontact: 'bancontact',
        boleto: 'boleto',
        card: 'card',
        eps: 'eps',
        fpx: 'fpx',
        giropay: 'giropay',
        grabpay: 'grabpay',
        ideal: 'ideal',
        oxxo: 'oxxo',
        p24: 'p24',
        sepa_debit: 'sepa_debit',
        sofort: 'sofort',
        three_d_secure: 'three_d_secure',
      },
      Ja =
        ((ke = {}),
        se(ke, Dt.auBankAccount, Va.au_becs_debit),
        se(ke, Dt.card, Va.card),
        se(ke, Dt.cardNumber, Va.card),
        se(ke, Dt.cardExpiry, Va.card),
        se(ke, Dt.cardCvc, Va.card),
        se(ke, Dt.postalCode, Va.card),
        se(ke, Dt.iban, Va.sepa_debit),
        se(ke, Dt.idealBank, Va.ideal),
        se(ke, Dt.fpxBank, Va.fpx),
        ke),
      Xa = function (e) {
        return -1 === Ut.indexOf(e);
      },
      $a = function (e, t) {
        return null != t ? t : Xa(e) ? null : Ja[e] || null;
      },
      Qa =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Za = function (e, t) {
        switch (e.type) {
          case 'object':
            return { paymentIntent: e.object };
          case 'error':
            return { error: Qa({}, t ? { payment_intent: t } : {}, e.error) };
          default:
            return Ie(e);
        }
      },
      es = function (e) {
        switch (e.type) {
          case 'error':
            return { error: e.error };
          case 'object':
            return { setupIntent: e.object };
          default:
            return Ie(e);
        }
      },
      ts = function (e) {
        var t = e.trim().match(/^([a-z]+_[^_]+)_secret_[^-]+$/);
        return t ? { id: t[1], clientSecret: t[0] } : null;
      },
      ns = function (e) {
        return { id: e.id, clientSecret: e.client_secret };
      },
      rs = function (e) {
        return 'requires_source_action' === e || 'requires_action' === e;
      },
      os = function (e) {
        return 'requires_source_action' === e.status ||
          'requires_action' === e.status
          ? e.next_action
          : null;
      },
      is =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      as =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      ss = function (e, t) {
        if ('string' != typeof e) return rt('a client_secret string', e, t);
        var n = ts(e);
        return null === n
          ? rt('a client secret of the form ${id}_secret_${secret}', e, t)
          : et(n, []);
      },
      cs = function (e, t) {
        if (null === e) return nt('object', 'null', t);
        if ('object' !== (void 0 === e ? 'undefined' : as(e)))
          return nt('object', void 0 === e ? 'undefined' : as(e), t);
        var n = e.client_secret,
          r = e.status,
          o = e.next_action,
          i = ss(n, At(t, 'client_secret'));
        if ('error' === i.type) return i;
        if ('string' != typeof r)
          return nt(
            'string',
            void 0 === r ? 'undefined' : as(r),
            At(t, 'status')
          );
        if (
          ('requires_source_action' === r || 'requires_action' === r) &&
          'object' !== (void 0 === o ? 'undefined' : as(o))
        )
          return nt(
            'object',
            void 0 === o ? 'undefined' : as(o),
            At(t, 'next_action')
          );
        if ('payment_intent' === e.object) {
          return et(e, []);
        }
        return et(e, []);
      },
      us = function (e) {
        return function (t, n) {
          if ('object' !== (void 0 === t ? 'undefined' : as(t)))
            return nt('object', void 0 === t ? 'undefined' : as(t), n);
          if (null === t) return nt('object', 'null', n);
          var r = t.type,
            o = ue(t, ['type']),
            i = void 0;
          if (null === e) {
            if ('string' != typeof r)
              return nt(
                'string',
                void 0 === r ? 'undefined' : as(r),
                At(n, 'type')
              );
            i = r;
          } else {
            if (void 0 !== r && r !== e)
              return 'string' != typeof r
                ? nt(
                    'string',
                    void 0 === r ? 'undefined' : as(r),
                    At(n, 'type')
                  )
                : nt('"' + r + '"', '"' + e + '"', At(n, 'type'));
            i = e;
          }
          var a = [
              'alipay',
              'bancontact',
              'eps',
              'giropay',
              'grabpay',
              'oxxo',
              'p24',
            ],
            s = o[i],
            c = (o[i], ue(o, [i]));
          if (
            (-1 !== a.indexOf(i) && void 0 === s && (s = {}),
            'object' !== (void 0 === s ? 'undefined' : as(s)))
          )
            return nt('object or element', as(t[i]), At(n, i));
          if (null === s) return nt('object or element', 'null', At(n, i));
          var u = Ka(s);
          if (u) {
            var l = u._componentName;
            if (Ja[l] !== i) {
              var p = [].concat(ce(n.path), [i]).join('.'),
                f = n.label,
                d = new Te(
                  'Invalid value for ' +
                    f +
                    ': ' +
                    p +
                    ' was `' +
                    l +
                    '` Element, which cannot be used to create ' +
                    i +
                    ' PaymentMethods.'
                );
              return tt(d);
            }
            return et({ type: i, element: u, data: c });
          }
          return et({ type: i, element: null, data: o });
        };
      },
      ls = function (e) {
        return function (t, n) {
          if (null == t) return et(null);
          if ('object' !== (void 0 === t ? 'undefined' : as(t)))
            return nt('object', void 0 === t ? 'undefined' : as(t), n);
          var r = t.card,
            o = ue(t, ['card']);
          if (!r || 'object' !== (void 0 === r ? 'undefined' : as(r)))
            return et(t);
          var i = r.cvc,
            a = ue(r, ['cvc']);
          if (null == i) return et(t);
          var s = Ka(i),
            c = s ? s._componentName : '';
          return Dt.cardCvc !== c
            ? nt(
                '`' + Dt.cardCvc + '` Element',
                c ? '`' + c + '` Element' : void 0 === i ? 'undefined' : as(i),
                At(n, e + '.cvc')
              )
            : et(is({}, o, { card: is({}, a, { cvc: s }) }));
        };
      },
      ps = dt(
        kt({
          handleActions: dt(ht, function () {
            return !0;
          }),
        }),
        function () {
          return { handleActions: !0 };
        }
      ),
      fs = function (e, t) {
        return function (n, r) {
          if (void 0 === n)
            return et({
              paymentMethodData: null,
              paymentMethodOptions: null,
              source: null,
              paymentMethod: null,
              otherParams: {},
            });
          if ('object' !== (void 0 === n ? 'undefined' : as(n)))
            return nt('object', void 0 === n ? 'undefined' : as(n), r);
          if (null === n) return nt('object', 'null', r);
          var o = n.source,
            i = n.source_data,
            a = n.payment_method_data,
            s = n.payment_method_options,
            c = n.payment_method,
            u = ue(n, [
              'source',
              'source_data',
              'payment_method_data',
              'payment_method_options',
              'payment_method',
            ]);
          if (null != i)
            throw new Te(
              t + ': Expected payment_method, or source, not source_data.'
            );
          if (null != a)
            throw new Te(
              t +
                ': Expected payment_method, or source, not payment_method_data.'
            );
          if (null != o && null != c)
            throw new Te(
              t + ': Expected either payment_method or source, but not both.'
            );
          if (null != o)
            return 'string' != typeof o
              ? nt(
                  'string',
                  void 0 === o ? 'undefined' : as(o),
                  At(r, 'source')
                )
              : et({
                  source: o,
                  paymentMethodData: null,
                  paymentMethodOptions: null,
                  paymentMethod: null,
                  otherParams: u,
                });
          if (
            null != c &&
            'string' != typeof c &&
            'object' !== (void 0 === c ? 'undefined' : as(c))
          )
            return nt(
              'string or object',
              void 0 === c ? 'undefined' : as(c),
              At(r, 'payment_method')
            );
          var l = Tt(ls(e), s, t, {
            path: [].concat(ce(r.path), ['payment_method_options']),
          });
          if ('error' === l.type) return l;
          if ('string' == typeof c)
            return et({
              source: null,
              paymentMethodData: null,
              paymentMethodOptions: l.value,
              paymentMethod: c,
              otherParams: u,
            });
          if ('object' === (void 0 === c ? 'undefined' : as(c)) && null !== c) {
            var p = Tt(us(e), c, t, {
              path: [].concat(ce(r.path), ['payment_method']),
            });
            if ('error' === p.type) return p;
            var f = p.value;
            return et({
              source: null,
              paymentMethod: null,
              paymentMethodOptions: l.value,
              paymentMethodData: f,
              otherParams: u,
            });
          }
          return et({
            source: null,
            paymentMethodData: null,
            paymentMethodOptions: null,
            paymentMethod: null,
            otherParams: u,
          });
        };
      },
      ds = kt({
        name: ct('react-stripe-js', 'stripe-js', 'react-stripe-elements'),
        version: (function (e) {
          return function (t, n) {
            return null === t ? et(t) : e(t, n);
          };
        })(ft),
      }),
      hs = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      _s = ['elements', 'createToken', 'createPaymentMethod'],
      ms = ['elements', 'createSource', 'createToken', 'createPaymentMethod'],
      ys = (function () {
        function e(t) {
          var n = this;
          le(this, e),
            (this._gets = []),
            (this._didDetect = !1),
            (this._onDetection = function (e) {
              (n._didDetect = !0), t(e);
            }),
            window.Stripe &&
              window.Stripe.__cachedInstances &&
              this._onDetection('react-stripe-elements');
        }
        return (
          hs(e, [
            {
              key: 'got',
              value: function (e) {
                this._didDetect ||
                  ('elements' === e
                    ? (this._gets = ['elements'])
                    : this._gets.push(e),
                  this._checkForWrapper());
              },
            },
            {
              key: 'called',
              value: function (e) {
                this._didDetect ||
                  (this._gets = this._gets.filter(function (t) {
                    return t !== e;
                  }));
              },
            },
            {
              key: '_checkForWrapper',
              value: function () {
                De(this._gets, _s)
                  ? this._onDetection('react-stripe-js')
                  : De(this._gets, ms) &&
                    this._onDetection('react-stripe-elements');
              },
            },
          ]),
          e
        );
      })(),
      vs =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      bs = function (e) {
        if (!e || 'object' !== (void 0 === e ? 'undefined' : vs(e)))
          return null;
        var t = e.type,
          n = pe(e, ['type']);
        return { type: 'string' == typeof t ? t : null, data: n };
      },
      gs = function (e) {
        switch (e.type) {
          case 'object':
            return { source: e.object };
          case 'error':
            return { error: e.error };
          default:
            return Ie(e);
        }
      },
      Es = {
        source: kt({ id: st('src_'), client_secret: st('src_client_secret_') }),
      },
      ws = kt(Es),
      Ss = function (e) {
        switch (e.type) {
          case 'object':
            return { paymentMethod: e.object };
          case 'error':
            return { error: e.error };
          default:
            return Ie(e);
        }
      },
      Ps = function (e) {
        return It(us(null), e, 'createPaymentMethod').value;
      },
      Os = function (e, t, n, r, o) {
        var i = Ka(r),
          a = bs(i ? o : r),
          s = a || { type: null, data: {} },
          c = s.type,
          u = s.data;
        if (c && n !== c)
          return Me.reject(
            new Te(
              'The type supplied in payment_method_data is not consistent.'
            )
          );
        if (i) {
          var l = i._frame.id,
            p = i._componentName;
          return e.action
            .createPaymentMethodWithElement({
              frameId: l,
              elementName: p,
              type: n,
              paymentMethodData: u,
              mids: t,
            })
            .then(Ss);
        }
        return a
          ? e.action
              .createPaymentMethodWithData({
                elementName: null,
                type: n,
                paymentMethodData: u,
                mids: t,
              })
              .then(Ss)
          : Me.reject(
              new Te(
                'Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod.'
              )
            );
      },
      ks = function (e, t, n, r, o) {
        if ('string' == typeof n) return Os(e, t, n, r, o);
        try {
          var i = Ps(n),
            a = i.element,
            s = i.type,
            c = i.data;
          if (a) {
            var u = a._frame.id,
              l = a._componentName;
            return e.action
              .createPaymentMethodWithElement({
                frameId: u,
                elementName: l,
                type: s,
                paymentMethodData: c,
                mids: t,
              })
              .then(Ss);
          }
          return e.action
            .createPaymentMethodWithData({
              elementName: null,
              type: s,
              paymentMethodData: c,
              mids: t,
            })
            .then(Ss);
        } catch (e) {
          return Me.reject(e);
        }
      },
      As = function (e) {
        return (
          'https://stripe.com/docs/stripe-js/reference#stripe-' +
          e
            .split(/(?=[A-Z])/)
            .join('-')
            .toLowerCase()
        );
      },
      Ts = function (e, t) {
        return It(ss, e, 'stripe.' + t + ' intent secret').value;
      },
      Is = function (e, t) {
        return It(ps, t, e).value;
      },
      Rs = function (e, t, n) {
        if ('valid' === Tt(za, n, t).type)
          throw new Te(
            'Do not pass an Element to stripe.' +
              t +
              '() directly.\nFor more information: ' +
              As(t)
          );
        var r = It(fs(e, t), n, t),
          o = r.value,
          i = o.source,
          a = o.paymentMethodData,
          s = o.paymentMethodOptions,
          c = o.paymentMethod,
          u = o.otherParams;
        if (null != i && (null != a || null != c))
          throw new Te(
            t + ': Expected either source or payment_method, but not both.'
          );
        return a
          ? a.element
            ? {
                confirmMode: {
                  tag: 'paymentMethod-from-element',
                  type: e,
                  elementName: a.element._componentName,
                  frameId: a.element._frame.id,
                  data: a.data,
                  options: s,
                },
                otherParams: u,
              }
            : {
                confirmMode: {
                  tag: 'paymentMethod-from-data',
                  type: e,
                  data: a.data,
                  options: s,
                },
                otherParams: u,
              }
          : c
          ? {
              confirmMode: {
                tag: 'paymentMethod',
                paymentMethod: c,
                options: s,
              },
              otherParams: u,
            }
          : i
          ? { confirmMode: { tag: 'source', source: i }, otherParams: u }
          : { confirmMode: { tag: 'none' }, otherParams: u };
      },
      Ns = function (e, t) {
        var n = {
          skipFingerprint: !1,
          sandboxFingerprintFrame: !1,
          sandboxChallengeFrame: !1,
        };
        return (
          -1 !== e.indexOf('Y') &&
            (t.report('3ds2.optimization.Y'), (n.skipFingerprint = !0)),
          -1 !== e.indexOf('k') &&
            (t.report('3ds2.optimization.k'), (n.sandboxFingerprintFrame = !0)),
          -1 !== e.indexOf('5') &&
            (t.report('3ds2.optimization.5'), (n.sandboxChallengeFrame = !0)),
          n
        );
      },
      Cs = function (e) {
        return (
          {
            american_express: 'amex',
            visa: 'visa',
            mastercard: 'mastercard',
            discover: 'discover',
          }[e] || 'unknown'
        );
      },
      Ms = function (e, t, n) {
        if (!e) return null;
        if ('use_stripe_sdk' === e.type) {
          var r = e.use_stripe_sdk;
          switch (r.type) {
            case 'stripe_3ds2_fingerprint':
              return {
                type: '3ds2-fingerprint',
                threeDS2Source: r.three_d_secure_2_source,
                cardBrand: Cs(r.directory_server_name),
                transactionId: r.server_transaction_id,
                optimizations: Ns(r.three_ds_optimizations, n),
                methodUrl: r.three_ds_method_url,
              };
            case 'stripe_3ds2_challenge':
              return {
                type: '3ds2-challenge',
                threeDS2Source: r.stripe_js.three_d_secure_2_source,
                cardBrand: Cs(r.stripe_js.directory_server_name),
                transactionId: r.stripe_js.server_transaction_id,
                optimizations: Ns(r.stripe_js.three_ds_optimizations, n),
                acsTransactionId: r.stripe_js.acs_transaction_id,
                acsUrl: r.stripe_js.acs_url,
                creq: r.stripe_js.creq,
              };
            case 'three_d_secure_redirect':
              return { type: '3ds1-modal', url: r.stripe_js, source: r.source };
          }
        }
        if ('redirect_to_url' === e.type)
          return { type: 'redirect', redirectUrl: e.redirect_to_url.url };
        if ('display_boleto_details' === e.type)
          return { type: 'boleto-display' };
        if ('display_oxxo_details' === e.type) return { type: 'oxxo-display' };
        if ('authorize_with_url' === e.type) {
          var o = e.authorize_with_url.url;
          switch (t) {
            case Va.card:
              return { type: '3ds1-modal', url: o, source: null };
            case Va.ideal:
              return { type: 'redirect', redirectUrl: o };
          }
        }
        return null;
      },
      js = function (e) {
        switch (e.type) {
          case 'error':
            return { error: e.error };
          case 'object':
            switch (e.object.object) {
              case 'payment_intent':
                return { paymentIntent: e.object };
              case 'setup_intent':
                return { setupIntent: e.object };
              default:
                return Ie(e.object);
            }
          default:
            return Ie(e);
        }
      },
      Ls = function (e, t, n, r) {
        return t === Ft.PAYMENT_INTENT
          ? n.action
              .retrievePaymentIntent({
                hosted: !1,
                intentSecret: e,
                locale: r,
                asErrorIfNotSucceeded: !0,
              })
              .then(js)
          : n.action
              .retrieveSetupIntent({
                hosted: !1,
                intentSecret: e,
                locale: r,
                asErrorIfNotSucceeded: !0,
              })
              .then(js);
      },
      xs = function (e, t, n, r, o) {
        return t === Ft.PAYMENT_INTENT
          ? n.action
              .cancelPaymentIntentSource({
                intentSecret: e,
                locale: o,
                sourceId: r,
              })
              .then(js)
          : n.action
              .cancelSetupIntentSource({
                intentSecret: e,
                locale: o,
                sourceId: r,
              })
              .then(js);
      },
      Ds = function (e) {
        return (
          (e.error
            ? e.error.payment_intent || e.error.setup_intent
            : e.paymentIntent || e.setupIntent) || null
        );
      },
      qs = function (e, t, n, r, o) {
        var i = !0,
          a = 3,
          s = void 0;
        return (
          (function c() {
            Ls(e, t, n, r).then(function (e) {
              if (i) {
                var t = Ds(e);
                if (null !== t)
                  switch (((a = 3), t.status)) {
                    case 'requires_action':
                    case 'requires_source_action':
                      return void (s = setTimeout(c, 5e3));
                    case 'processing':
                      return void (s = setTimeout(c, 1e3));
                    default:
                      o(e);
                  }
                else if (a > 0) {
                  var n = 500 * Math.pow(2, 3 - a);
                  (s = setTimeout(c, n)), (a -= 1);
                } else o(e);
              }
            });
          })(),
          function () {
            clearTimeout(s), (i = !1);
          }
        );
      },
      Fs = (function () {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Bs =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Us = function (e, t, n, r, o) {
        return e.createLightboxFrame({
          type: Nt.AUTHORIZE_WITH_URL,
          options: Bs(
            { url: t, locale: o, intentId: n },
            r ? { source: r } : {}
          ),
        });
      },
      Hs = function (e, t, n, r, o) {
        var i = go(),
          a = Date.now(),
          s = Us(r, e.url, t.id, e.source, o);
        return (
          s.show(),
          r.report('authorize_with_url.loading', {
            viewport: i,
            intentId: t.id,
          }),
          s._on('load', function () {
            r.report('authorize_with_url.loaded', {
              loadDuration: Date.now() - a,
              intentId: t.id,
            }),
              s.fadeInBackdrop();
          }),
          s._on('challenge_complete', function () {
            s.fadeOutBackdrop();
          }),
          new Me(function (i, c) {
            var u = e.source;
            u &&
              s._once('cancel', function () {
                Me.all([xs(t, n, r, u, o), s.destroy()]).then(function (e) {
                  var t = Fs(e, 1),
                    n = t[0];
                  return i(n);
                });
              }),
              s._once('authorize_with_url_done', function () {
                var e = s.destroy();
                qs(t, n, r, o, function (n) {
                  e.then(function () {
                    r.report('authorize_with_url.done', {
                      shownDuration: Date.now() - a,
                      success: !('error' in n),
                      intentId: t.id,
                    }),
                      i(n);
                  });
                });
              });
          })
        );
      },
      Gs = (function () {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Ys =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ws = function (e) {
        return new Me(function (t) {
          e._on('load', function () {
            return t(e);
          });
        });
      },
      zs = function (e, t, n, r) {
        var o = e.createHiddenFrame(Nt.STRIPE_3DS2_FINGERPRINT, {
          intentId: t,
          locale: r,
          hosted: n,
        });
        e.report('3ds2.fingerprint_frame.loading', { hosted: n, intentId: t });
        var i = Ws(o);
        return (
          i.then(function () {
            e.report('3ds2.fingerprint_frame.loaded', {
              hosted: n,
              intentId: t,
            });
          }),
          i
        );
      },
      Ks = function (e, t, n, r, o) {
        var i = t.createLightboxFrame({
          type: Nt.STRIPE_3DS2_CHALLENGE,
          options: { intentId: e, hosted: r, locale: o },
        });
        t.report('3ds2.challenge_frame.loading', { intentId: e, hosted: r }),
          i._on('challenge_complete', function () {
            i.fadeOutBackdrop();
          });
        var a = Ws(i);
        return (
          a.then(function () {
            return t.report('3ds2.challenge_frame.loaded', {
              intentId: e,
              hosted: r,
            });
          }),
          r && (i.show(), i.action.show3DS2Spinner({ cardBrand: n })),
          a
        );
      },
      Vs = function (e, t, n, r, o) {
        return t.optimizations.skipFingerprint
          ? Me.resolve({ fingerprintAttempted: !1, fingerprintData: null })
          : '' === t.methodUrl
          ? (n.report('3ds2.fingerprint.no_method_url', {
              hosted: r,
              intentId: e.id,
            }),
            Me.resolve({ fingerprintAttempted: !1, fingerprintData: null }))
          : zs(n, e.id, r, o).then(function (e) {
              return e.action
                .perform3DS2Fingerprint({
                  transactionId: t.transactionId,
                  methodUrl: t.methodUrl,
                  shouldSandbox: t.optimizations.sandboxFingerprintFrame,
                })
                .then(function (t) {
                  return e.destroy(), t;
                });
            });
      },
      Js = function (e, t, n, r, o, i) {
        var a = Date.now(),
          s = Ks(e.id, r, n.cardBrand, i, o),
          c = function (a) {
            return new Me(function (c) {
              var u = qs(e, t, r, o, function (e) {
                var t = Ds(e);
                ((t && 'requires_payment_method' === t.status) ||
                  (t && 'requires_source' === t.status)) &&
                  c(e);
              });
              s.then(function (s) {
                s._once('cancel', function () {
                  s.fadeOutBackdrop(),
                    u(),
                    xs(e, t, r, n.threeDS2Source, o).then(c);
                }),
                  i || (s.show(), s.fadeInBackdrop());
                var l = (a.type, a.optimizations),
                  p = fe(a, ['type', 'optimizations']);
                s.action
                  .perform3DS2Challenge(
                    Ys({}, p, { shouldSandbox: l.sandboxChallengeFrame })
                  )
                  .then(function () {
                    u(), c();
                  });
              });
            });
          },
          u = function (t) {
            return (
              r.report('3ds2.authenticate', { hosted: i, intentId: e.id }),
              r.action
                .authenticate3DS2({
                  threeDS2Source: n.threeDS2Source,
                  outerWindowWidth: window.innerWidth,
                  hosted: i,
                  fingerprintResult: t,
                })
                .then(function (t) {
                  return (
                    'error' === t.type
                      ? r.report('3ds2.authenticate.error', {
                          error: t.error,
                          hosted: i,
                          intentId: e.id,
                        })
                      : r.report('3ds2.authenticate.success', {
                          hosted: i,
                          intentId: e.id,
                        }),
                    t
                  );
                })
            );
          },
          l = function (n) {
            return Me.all([
              n ? Me.resolve(n) : Ls(e, t, r, o),
              s.then(function (e) {
                return e.destroy();
              }),
            ]).then(function (t) {
              var n = Gs(t, 1),
                o = n[0];
              return (
                r.report(
                  '3ds2.done',
                  Ys(
                    {
                      intentId: e.id,
                      hosted: i,
                      totalDuration: Date.now() - a,
                    },
                    o.error ? { error: o.error, success: !1 } : { success: !0 }
                  )
                ),
                o
              );
            });
          };
        switch (n.type) {
          case '3ds2-challenge':
            return c(n).then(l);
          case '3ds2-fingerprint':
            return Vs(e, n, r, i, o)
              .then(u)
              .then(function (t) {
                if ('error' === t.type || null === t.object.ares) return l();
                var o = t.object,
                  a = o.ares,
                  s = o.creq;
                return 'C' !== a.transStatus || null == s
                  ? (r.report('3ds2.frictionless', {
                      hosted: i,
                      intentId: e.id,
                    }),
                    l())
                  : c({
                      type: '3ds2-challenge',
                      threeDS2Source: n.threeDS2Source,
                      cardBrand: n.cardBrand,
                      transactionId: n.transactionId,
                      acsUrl: a.acsURL,
                      acsTransactionId: a.acsTransID,
                      optimizations: n.optimizations,
                      creq: s,
                    }).then(l);
              });
          default:
            return Ie(n);
        }
      },
      Xs = function (e) {
        return new Me(function (t, n) {
          var r = setTimeout(function () {
            t({
              type: 'error',
              error: {
                code: 'redirect_error',
                message: 'Failed to redirect to ' + e,
              },
              locale: 'en',
            });
          }, 3e3);
          window.addEventListener('pagehide', function () {
            clearTimeout(r);
          }),
            (window.top.location.href = e);
        });
      },
      $s = function (e, t, n) {
        e.report('redirect_error', { initiator: t, error: n.error });
      },
      Qs = function (e, t, n, r) {
        return Xs(n).then(function (n) {
          return $s(r, t + ' redirect', n), Za(n, e);
        });
      },
      Zs = function (e, t, n, r) {
        return Xs(n).then(function (e) {
          return $s(r, t + ' redirect', e), es(e);
        });
      },
      ec =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      tc = function (e) {
        switch (e.type) {
          case 'error':
            var t = e.error;
            if (
              'payment_intent_unexpected_state' === t.code &&
              'object' === ec(t.payment_intent) &&
              null != t.payment_intent &&
              'string' == typeof t.payment_intent.status &&
              rs(t.payment_intent.status)
            ) {
              var n = t.payment_intent;
              return { type: 'object', locale: e.locale, object: n };
            }
            return e;
          case 'object':
            return e;
          default:
            return Ie(e);
        }
      },
      nc = function (e, t, n, r, o) {
        var i = Ms(os(t), n, e),
          a = ns(t);
        if (!i) return Me.resolve({ paymentIntent: t });
        switch (i.type) {
          case '3ds1-modal':
            return Hs(i, a, Ft.PAYMENT_INTENT, e, r);
          case '3ds2-fingerprint':
          case '3ds2-challenge':
            return Js(a, Ft.PAYMENT_INTENT, i, e, r, o);
          case 'redirect':
            return Qs(t, n, i.redirectUrl, e);
          case 'boleto-display':
            throw new Te(
              'Expected option `handleActions` to be `false`. The Boleto private beta does not handle the next actions for you automatically (e.g. display Boleto details). Please refer to the Stripe Boleto integration guide for more info: \n\nhttps://stripe.com/docs/payments/boleto'
            );
          case 'oxxo-display':
            throw new Te(
              'Expected option `handleActions` to be `false`. The OXXO private beta does not handle the next actions for you automatically (e.g. display OXXO details). Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo'
            );
          default:
            return Me.resolve({ paymentIntent: t });
        }
      },
      rc = function (e, t, n, r, o) {
        return nc(e, t, n, r, o).then(function (e) {
          if (e.setupIntent)
            throw new Error('Got unexpected SetupIntent response');
          return e;
        });
      },
      oc = function (e, t, n, r) {
        return function (o) {
          var i = tc(o);
          switch (i.type) {
            case 'error':
              var a = i.error,
                s = a.payment_intent;
              return n &&
                s &&
                'payment_intent_unexpected_state' === a.code &&
                ('succeeded' === s.status || 'requires_capture' === s.status)
                ? Me.resolve({ paymentIntent: s })
                : Me.resolve(Za(o));
            case 'object':
              var c = i.object;
              return rc(e, c, t, i.locale, r);
            default:
              return Ie(i);
          }
        };
      },
      ic =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ac = function (e, t) {
        return function (n, r, o, i, a) {
          var s = Ts(o, e),
            c = Rs(t, e, i),
            u = Is(e, a),
            l = 'none' === c.confirmMode.tag,
            p = n.action.confirmPaymentIntent(
              ic({}, c, {
                intentSecret: s,
                expectedType: t,
                options: u,
                mids: r,
              })
            );
          return u.handleActions ? p.then(oc(n, t, l, !1)) : p.then(Za);
        };
      },
      sc = ac('confirmAcssDebitPayment', Va.acss_debit),
      cc = ac('confirmAuBecsDebitPayment', Va.au_becs_debit),
      uc = ac('confirmBacsDebitPayment', Va.bacs_debit),
      lc = ac('confirmBancontactPayment', Va.bancontact),
      pc = ac('confirmBoletoPayment', Va.boleto),
      fc = ac('confirmCardPayment', Va.card),
      dc = ac('confirmEpsPayment', Va.eps),
      hc = ac('confirmFpxPayment', Va.fpx),
      _c = ac('confirmGiropayPayment', Va.giropay),
      mc = ac('confirmGrabPayPayment', Va.grabpay),
      yc = ac('confirmIdealPayment', Va.ideal),
      vc = ac('confirmOxxoPayment', Va.oxxo),
      bc = ac('confirmAlipayPayment', Va.alipay),
      gc = ac('confirmP24Payment', Va.p24),
      Ec = ac('confirmSepaDebitPayment', Va.sepa_debit),
      wc = ac('confirmSofortPayment', Va.sofort),
      Sc = function (e, t) {
        var n = Ts(e, 'retrievePaymentIntent');
        return t.action
          .retrievePaymentIntent({ intentSecret: n, hosted: !1 })
          .then(Za);
      },
      Pc = function (e, t, n) {
        var r = Ts(t, 'verifyMicrodepositsForSetup'),
          o = It(gt, n, 'stripe.verifyMicrodepositsForSetup');
        return e.action
          .verifyMicrodepositsForPayment({ intentSecret: r, data: o.value })
          .then(Za);
      },
      Oc = function (e, t) {
        var n = Ts(e, 'handleHosted3DS2Setup [internal]');
        return t.action
          .retrievePaymentIntent({ intentSecret: n, hosted: !0 })
          .then(oc(t, Va.card, !1, !0));
      },
      kc = function (e, t) {
        var n = Ts(e, 'handleCardAction');
        return t.action
          .retrievePaymentIntent({ intentSecret: n, hosted: !1 })
          .then(function (e) {
            var n = tc(e);
            switch (n.type) {
              case 'error':
                return Me.resolve(Za(e));
              case 'object':
                var r = n.object;
                if (rs(r.status)) {
                  if ('manual' !== r.confirmation_method)
                    throw new Te(
                      'handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment.'
                    );
                  return rc(t, r, Va.card, n.locale, !1);
                }
                throw new Te(
                  'handleCardAction: The PaymentIntent supplied is not in the requires_action state.'
                );
              default:
                return Ie(n);
            }
          });
      },
      Ac =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Tc =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      Ic = function (e, t) {
        if (null == e) return et(null);
        var n = e.type,
          r = de(e, ['type']),
          o = dt(ft, function () {
            return null;
          })(n, At(t, 'type'));
        return 'error' === o.type ? o : et({ type: o.value, data: r });
      },
      Rc = function (e, t, n, r) {
        if (null === e) {
          if (null === t) {
            throw new Te(
              n +
                ': you must additionally specify the type of payment method to create within ' +
                (r ? 'source_data' : 'payment_method_data') +
                '.'
            );
          }
          return t;
        }
        if (null === t) return e;
        if (t !== e)
          throw new Te(
            n +
              ': you specified `type: ' +
              t +
              '`, but ' +
              n +
              ' will create a ' +
              e +
              ' payment method.'
          );
        return e;
      },
      Nc = function (e) {
        return function (t, n) {
          if ('object' === (void 0 === t ? 'undefined' : Tc(t)) && null !== t) {
            var r = t.source,
              o = t.source_data,
              i = t.payment_method,
              a = t.payment_method_data,
              s = de(t, [
                'source',
                'source_data',
                'payment_method',
                'payment_method_data',
              ]);
            if (null != r && 'string' != typeof r)
              return nt(
                'string',
                void 0 === r ? 'undefined' : Tc(r),
                At(n, 'source')
              );
            if (null != i && 'string' != typeof i)
              return nt(
                'string',
                void 0 === i ? 'undefined' : Tc(i),
                At(n, 'payment_method')
              );
            if (null != o && 'object' !== (void 0 === o ? 'undefined' : Tc(o)))
              return nt(
                'object',
                void 0 === o ? 'undefined' : Tc(o),
                At(n, 'source_data')
              );
            if (null != a && 'object' !== (void 0 === a ? 'undefined' : Tc(a)))
              return nt(
                'object',
                void 0 === a ? 'undefined' : Tc(a),
                At(n, 'payment_method_data')
              );
            var c = Ic(o, At(n, 'source_data'));
            if ('error' === c.type) return c;
            var u = c.value,
              l = Ic(a, At(n, 'payment_method_data'));
            if ('error' === l.type) return l;
            var p = l.value;
            return et({
              sourceData: u,
              source: null == r ? null : r,
              paymentMethodData: p,
              paymentMethod: null == i ? null : i,
              otherParams: Ac({}, e, s),
            });
          }
          return null === t
            ? nt('object', 'null', n)
            : nt('object', void 0 === t ? 'undefined' : Tc(t), n);
        };
      },
      Cc = function (e) {
        return function (t, n) {
          if (void 0 === t)
            return et({
              sourceData: null,
              paymentMethodData: null,
              source: null,
              paymentMethod: null,
              otherParams: {},
            });
          if ('object' !== (void 0 === t ? 'undefined' : Tc(t)))
            return nt('object', void 0 === t ? 'undefined' : Tc(t), n);
          if (null === t) return nt('object', 'null', n);
          if (e) {
            if (!t.payment_intent)
              return et({
                sourceData: null,
                paymentMethodData: null,
                source: null,
                paymentMethod: null,
                otherParams: t,
              });
            var r = t.payment_intent,
              o = de(t, ['payment_intent']);
            return Nc(o)(r, At(n, 'payment_intent'));
          }
          return t.payment_intent
            ? tt(
                new Te(
                  'The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object.'
                )
              )
            : Nc({})(t, n);
        };
      },
      Mc = function (e, t, n, r, o, i) {
        var a = Tt(za, o, r);
        if ('error' === a.type) return null;
        var s = a.value,
          c = It(Cc(t), i, r),
          u = c.value,
          l = u.sourceData,
          p = u.source,
          f = u.paymentMethodData,
          d = u.paymentMethod,
          h = u.otherParams;
        if (!e && l)
          throw new Te(r + ': Expected payment_method_data, not source_data.');
        if (null != p)
          throw new Te(
            'When calling ' +
              r +
              " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element."
          );
        if (null != d)
          throw new Te(
            'When calling ' +
              r +
              " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element."
          );
        var _ = s._componentName,
          m = s._frame.id,
          y = l || f || { type: null, data: {} },
          v = y.type,
          b = y.data,
          g = $a(_, v),
          E = e && !f,
          w = Rc(n, g, r, E),
          S = { elementName: _, frameId: m, type: w, data: b };
        return E
          ? {
              confirmMode: Ac({ tag: 'source-from-element' }, S),
              otherParams: h,
            }
          : {
              confirmMode: Ac(
                { tag: 'paymentMethod-from-element', options: null },
                S
              ),
              otherParams: h,
            };
      },
      jc = function (e, t, n, r, o, i) {
        var a = It(Cc(t), o, r),
          s = a.value,
          c = s.sourceData,
          u = s.source,
          l = s.paymentMethodData,
          p = s.paymentMethod,
          f = s.otherParams;
        if (!e && c)
          throw new Te(
            r +
              ': Expected payment_method, source, or payment_method_data, not source_data.'
          );
        if (null !== u && null !== c)
          throw new Te(
            r + ': Expected either source or source_data, but not both.'
          );
        if (null !== p && null !== l)
          throw new Te(
            r +
              ': Expected either payment_method or payment_method_data, but not both.'
          );
        if (null !== p && null !== u)
          throw new Te(
            r + ': Expected either payment_method or source, but not both.'
          );
        if (c || l) {
          var d = c || l || {},
            h = d.type,
            _ = d.data,
            m = e && !l,
            y = Rc(n, h, r, m);
          return m
            ? {
                confirmMode: { tag: 'source-from-data', type: y, data: _ },
                otherParams: f,
              }
            : {
                confirmMode: {
                  tag: 'paymentMethod-from-data',
                  type: y,
                  data: _,
                  options: null,
                },
                otherParams: f,
              };
        }
        return null !== u
          ? { confirmMode: { tag: 'source', source: u }, otherParams: f }
          : null !== p
          ? {
              confirmMode: {
                tag: 'paymentMethod',
                paymentMethod: p,
                options: null,
              },
              otherParams: f,
            }
          : { confirmMode: { tag: 'none' }, otherParams: f };
      },
      Lc = function (e, t, n, r) {
        return function (o, i) {
          var a = Mc(e, t, n, r, o, i);
          if (a) return a;
          var s = jc(e, t, n, r, o);
          if (s) return s;
          throw new Te(
            'Expected: stripe.' +
              r +
              '(intentSecret, element[, data]) or stripe.' +
              r +
              '(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication'
          );
        };
      },
      xc =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Dc = function (e, t, n, r, o, i) {
        var a = It(ss, r, 'stripe.confirmPaymentIntent intent secret'),
          s = a.value,
          c = Lc(e, !1, null, 'confirmPaymentIntent')(o, i);
        return t.action
          .confirmPaymentIntent(
            xc({}, c, {
              intentSecret: s,
              expectedType: null,
              options: { handleActions: !1 },
              mids: n,
            })
          )
          .then(Za);
      },
      qc = function (e, t, n, r, o, i, a) {
        var s = It(ss, o, 'stripe.handleCardPayment intent secret'),
          c = s.value,
          u = Va.card,
          l = Lc(e, r, u, 'handleCardPayment')(i, a),
          p = !i && !a;
        return t.action
          .confirmPaymentIntent(
            xc({}, l, {
              intentSecret: c,
              expectedType: u,
              options: { handleActions: !0 },
              mids: n,
            })
          )
          .then(oc(t, u, p, !1));
      },
      Fc = function (e, t, n, r, o, i) {
        var a = It(ss, r, 'stripe.handleSepaDebitPayment intent secret'),
          s = a.value,
          c = Va.sepa_debit,
          u = Lc(!1, n, c, 'handleSepaDebitPayment')(o, i),
          l = !o && !i;
        return e.action
          .confirmPaymentIntent(
            xc({}, u, {
              intentSecret: s,
              expectedType: c,
              options: { handleActions: !0 },
              mids: t,
            })
          )
          .then(oc(e, c, l, !1));
      },
      Bc = function (e, t, n, r, o, i, a) {
        var s = It(ss, o, 'stripe.handleIdealPayment intent secret'),
          c = s.value,
          u = Va.ideal,
          l = Lc(e, r, u, 'handleIdealPayment')(i, a),
          p = !i && !a;
        return t.action
          .confirmPaymentIntent(
            xc({}, l, {
              intentSecret: c,
              expectedType: u,
              options: { handleActions: !0 },
              mids: n,
            })
          )
          .then(oc(t, u, p, !1));
      },
      Uc = function (e, t, n, r, o, i) {
        var a = It(ss, r, 'stripe.handleFpxPayment intent secret'),
          s = a.value,
          c = Va.fpx,
          u = Lc(!1, n, c, 'handleFpxPayment')(o, i),
          l = !o && !i;
        return e.action
          .confirmPaymentIntent(
            xc({}, u, {
              intentSecret: s,
              expectedType: c,
              options: { handleActions: !0 },
              mids: t,
            })
          )
          .then(oc(e, c, l, !1));
      },
      Hc = function (e, t, n, r, o) {
        var i = Ms(os(t), n, e),
          a = ns(t);
        if (!i) return Me.resolve({ setupIntent: t });
        switch (i.type) {
          case '3ds1-modal':
            return Hs(i, a, Ft.SETUP_INTENT, e, r);
          case '3ds2-fingerprint':
          case '3ds2-challenge':
            return Js(a, Ft.SETUP_INTENT, i, e, r, o);
          case 'redirect':
            return Zs(0, n, i.redirectUrl, e);
          default:
            return Me.resolve({ setupIntent: t });
        }
      },
      Gc = function (e, t, n, r, o) {
        return Hc(e, t, n, r, o).then(function (e) {
          if (e.paymentIntent)
            throw new Error('Got unexpected PaymentIntent response');
          return e;
        });
      },
      Yc = function (e, t, n, r) {
        return function (o) {
          switch (o.type) {
            case 'error':
              var i = o.error,
                a = i.setup_intent;
              return n && a && 'succeeded' === a.status
                ? Me.resolve({ setupIntent: a })
                : Me.resolve({ error: i });
            case 'object':
              var s = o.object;
              return Gc(e, s, t, o.locale, r);
            default:
              return Ie(o);
          }
        };
      },
      Wc =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      zc = function (e, t) {
        return function (n, r, o, i, a) {
          var s = Ts(o, e),
            c = Rs(t, e, i),
            u = Is(e, a),
            l = 'none' === c.confirmMode.tag,
            p = n.action.confirmSetupIntent(
              Wc({}, c, {
                intentSecret: s,
                expectedType: t,
                options: u,
                mids: r,
              })
            );
          return u.handleActions ? p.then(Yc(n, t, l, !1)) : p.then(es);
        };
      },
      Kc = zc('confirmAcssDebitSetup', Va.acss_debit),
      Vc = zc('confirmCardSetup', Va.card),
      Jc = zc('confirmSepaDebitSetup', Va.sepa_debit),
      Xc = zc('confirmAuBecsDebitSetup', Va.au_becs_debit),
      $c = zc('confirmBacsDebitSetup', Va.bacs_debit),
      Qc = zc('confirmIdealSetup', Va.ideal),
      Zc = function (e, t) {
        var n = Ts(e, 'retrieveSetupIntent');
        return t.action
          .retrieveSetupIntent({ intentSecret: n, hosted: !1 })
          .then(es);
      },
      eu = function (e, t, n) {
        var r = Ts(t, 'verifyMicrodepositsForSetup'),
          o = It(gt, n, 'stripe.verifyMicrodepositsForSetup');
        return e.action
          .verifyMicrodepositsForSetup({ intentSecret: r, data: o.value })
          .then(es);
      },
      tu = function (e, t) {
        var n = Ts(e, 'handleHosted3DS2Setup [internal]');
        return t.action
          .retrieveSetupIntent({ intentSecret: n, hosted: !0 })
          .then(Yc(t, Va.card, !1, !0));
      },
      nu =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ru = function (e, t, n, r, o) {
        var i = It(ss, n, 'stripe.handleCardSetup intent secret'),
          a = i.value,
          s = Va.card,
          c = Lc(!1, !1, s, 'handleCardSetup')(r, o),
          u = !r && !o;
        return e.action
          .confirmSetupIntent(
            nu({}, c, {
              intentSecret: a,
              expectedType: s,
              options: { handleActions: !0 },
              mids: t,
            })
          )
          .then(Yc(e, s, u, !1));
      },
      ou = function (e, t, n, r, o) {
        var i = It(ss, n, 'stripe.handleSepaDebitSetup intent secret'),
          a = i.value,
          s = Va.sepa_debit,
          c = Lc(!1, !1, s, 'handleSepaDebitSetup')(r, o),
          u = !r && !o;
        return e.action
          .confirmSetupIntent(
            nu({}, c, {
              intentSecret: a,
              expectedType: s,
              options: { handleActions: !0 },
              mids: t,
            })
          )
          .then(Yc(e, s, u, !1));
      },
      iu = function (e, t, n, r, o) {
        var i = It(ss, n, 'stripe.confirmSetupIntent intent secret'),
          a = i.value,
          s = Lc(!1, !1, null, 'confirmSetupIntent')(r, o);
        return e.action
          .confirmSetupIntent(
            nu({}, s, {
              otherParams: nu({}, s.otherParams),
              intentSecret: a,
              expectedType: null,
              options: { handleActions: !1 },
              mids: t,
            })
          )
          .then(es);
      },
      au = [wo.checkout_beta_2, wo.checkout_beta_3, wo.checkout_beta_4],
      su = [
        wo.checkout_beta_2,
        wo.checkout_beta_3,
        wo.checkout_beta_4,
        wo.checkout_beta_locales,
        wo.checkout_beta_testcards,
      ],
      cu = {
        bg: 'bg',
        cs: 'cs',
        da: 'da',
        de: 'de',
        el: 'el',
        en: 'en',
        es: 'es',
        et: 'et',
        fi: 'fi',
        fr: 'fr',
        hu: 'hu',
        it: 'it',
        ja: 'ja',
        lt: 'lt',
        lv: 'lv',
        ms: 'ms',
        mt: 'mt',
        nb: 'nb',
        nl: 'nl',
        pl: 'pl',
        pt: 'pt',
        'pt-BR': 'pt-BR',
        ro: 'ro',
        ru: 'ru',
        sk: 'sk',
        sl: 'sl',
        sv: 'sv',
        tr: 'tr',
        zh: 'zh',
      },
      uu = { id: 'id', th: 'th' },
      lu = Object.keys(cu),
      pu = Object.keys(uu),
      fu =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      du = {
        sku: ot(ft),
        plan: ot(ft),
        clientReferenceId: ot(ft),
        locale: ot(ct.apply(void 0, ['auto'].concat(_e(lu)))),
        customerEmail: ot(ft),
        billingAddressCollection: ot(ct('required', 'auto')),
        submitType: ot(ct('auto', 'pay', 'book', 'donate')),
        allowIncompleteSubscriptions: ot(ht),
        shippingAddressCollection: ot(Ot({ allowedCountries: Et(ft) })),
      },
      hu = function (e, t, n) {
        if ((e && t) || ((e || t) && n))
          throw new Te(
            'stripe.redirectToCheckout: Expected only one of sku, plan, or items.'
          );
        if ('string' == typeof e) return [{ sku: e, quantity: 1 }];
        if ('string' == typeof t) return [{ plan: t, quantity: 1 }];
        if (n)
          return n.map(function (e) {
            return 'sku' === e.type
              ? { sku: e.id, quantity: e.quantity }
              : { plan: e.id, quantity: e.quantity };
          });
        throw new Te(
          'stripe.redirectToCheckout: You must provide either sku, plan, or items.'
        );
      },
      _u = function (e, t) {
        var n = Ot(
            fu({}, du, {
              items: ot(
                it(
                  Et(Ot({ type: ct('plan'), quantity: mt(0), id: ft })),
                  Et(Ot({ type: ct('sku'), quantity: mt(0), id: ft }))
                )
              ),
              successUrl: ft,
              cancelUrl: ft,
            })
          ),
          r = It(n, t, 'stripe.redirectToCheckout'),
          o = r.value,
          i = o.sku,
          a = o.plan,
          s = o.items,
          c = he(o, ['sku', 'plan', 'items']),
          u = hu(i, a, s);
        return fu({ tag: 'no-session', items: u }, c);
      },
      mu = function (e, t, n) {
        var r = Ot(
            fu(
              {},
              du,
              {
                sessionId: ot(ft),
                successUrl: ot(ft),
                cancelUrl: ot(ft),
                mode: ot(ct('subscription', 'payment')),
                items: ot(
                  it(
                    Et(Ot({ quantity: mt(0), plan: ft })),
                    Et(Ot({ quantity: mt(0), sku: ft }))
                  )
                ),
                lineItems: ot(Et(Ot({ quantity: mt(0), price: ft }))),
              },
              -1 !== e.indexOf('checkout_beta_locales')
                ? {
                    locale: ot(
                      ct.apply(void 0, ['auto'].concat(_e(lu), _e(pu)))
                    ),
                  }
                : {}
            )
          ),
          o = It(r, t, 'stripe.redirectToCheckout'),
          i = o.value;
        if (i.sessionId) {
          var a = i.sessionId;
          if (Object.keys(i).length > 1)
            throw new Te(
              'stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession.'
            );
          if (!/^cs_/.test(a))
            throw new Te(
              "stripe.redirectToCheckout: Invalid value for sessionId. You specified '" +
                a +
                "'."
            );
          if ('livemode' === n && /^cs_test_/.test(a))
            throw new Te(
              'stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key.'
            );
          if ('testmode' === n && /^cs_live_/.test(a))
            throw new Te(
              'stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key.'
            );
          return { tag: 'session', sessionId: a };
        }
        var s = (i.sessionId, i.sku, i.plan, i.items),
          c = i.lineItems,
          u = i.successUrl,
          l = i.cancelUrl,
          p = i.mode,
          f = he(i, [
            'sessionId',
            'sku',
            'plan',
            'items',
            'lineItems',
            'successUrl',
            'cancelUrl',
            'mode',
          ]);
        if (!c && !s)
          throw new Te(
            'stripe.redirectToCheckout: You must provide one of lineItems, items, or sessionId.'
          );
        if (!u || !l)
          throw new Te(
            'stripe.redirectToCheckout: You must provide successUrl and cancelUrl.'
          );
        return fu(
          {
            tag: 'no-session',
            items: s,
            lineItems: c,
            successUrl: u,
            cancelUrl: l,
            mode: p,
          },
          f
        );
      },
      yu = function (e, t, n) {
        var r = mu(e, t, n);
        if ('no-session' === r.tag) {
          var o = r.successUrl,
            i = r.cancelUrl;
          if (!Ve(o))
            throw new Te(
              'stripe.redirectToCheckout: successUrl must start with either http:// or https://.'
            );
          if (!Ve(i))
            throw new Te(
              'stripe.redirectToCheckout: cancelUrl must start with either http:// or https://.'
            );
          return r;
        }
        return r;
      },
      vu = function (e, t) {
        return 'session' === t.tag ||
          null == e ||
          t.locale ||
          -1 === ['auto'].concat(_e(lu)).indexOf(e)
          ? t
          : fu({}, t, { locale: e });
      },
      bu = function (e, t, n) {
        var r = Le(au, function (t) {
          return Po(e, t);
        });
        if (t && t.lineItems && r)
          throw new Te('Prices cannot be used with ' + r);
        switch (r) {
          case 'checkout_beta_2':
            return _u(0, t);
          case 'checkout_beta_3':
            return mu(e, t, n);
          case 'checkout_beta_4':
          default:
            return yu(e, t, n);
        }
      },
      gu = function (e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : 'unknown';
        return vu(t, bu(e, n, r));
      },
      Eu = gu,
      wu =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Su = function (e, t) {
        var n = function (t) {
          return $s(e, 'redirectToCheckout', t), { error: t.error };
        };
        return Xs(t).then(n);
      },
      Pu = function (e, t, n, r) {
        return function (o) {
          e.report('redirect_to_checkout.options', {
            betas: t,
            options: o,
            globalLocale: r,
          });
          var i = Eu(t, r, o, e.livemode());
          if ('session' === i.tag) {
            var a = i,
              s = a.sessionId;
            return e.action
              .createPaymentPageWithSession({
                betas: t,
                mids: n(),
                sessionId: s,
              })
              .then(function (t) {
                if ('error' === t.type) return { error: t.error };
                var n = t.object.url;
                return Su(e, n);
              });
          }
          var c = i,
            u = (c.tag, c.items),
            l = c.lineItems,
            p = c.mode,
            f = c.successUrl,
            d = c.cancelUrl,
            h = c.clientReferenceId,
            _ = c.customerEmail,
            m = c.billingAddressCollection,
            y = c.submitType,
            v = c.allowIncompleteSubscriptions,
            b = c.shippingAddressCollection,
            g = me(c, [
              'tag',
              'items',
              'lineItems',
              'mode',
              'successUrl',
              'cancelUrl',
              'clientReferenceId',
              'customerEmail',
              'billingAddressCollection',
              'submitType',
              'allowIncompleteSubscriptions',
              'shippingAddressCollection',
            ]),
            E = [];
          if (l && u)
            throw new Error('Only one of items, lineItems can be passed in.');
          if (l) {
            if (!p) throw new Error('Expected `mode`');
            E = l.map(function (e) {
              if (e.price)
                return { type: 'price', id: e.price, quantity: e.quantity };
              throw new Error('Unexpected item shape.');
            });
          } else {
            if (!u) throw new Error('An items field must be passed in.');
            E = u.map(function (e) {
              if (e.sku)
                return { type: 'sku', id: e.sku, quantity: e.quantity };
              if (e.plan)
                return { type: 'plan', id: e.plan, quantity: e.quantity };
              throw new Error('Unexpected item shape.');
            });
          }
          var w = Le(au, function (e) {
            return Po(t, e);
          });
          return e.action
            .createPaymentPage(
              wu(
                {
                  betas: t,
                  mids: n(),
                  items: E,
                  mode: p,
                  success_url: f,
                  cancel_url: d,
                  client_reference_id: h,
                  customer_email: _,
                  billing_address_collection: m,
                  submit_type: y,
                  use_payment_methods: !w,
                  allow_incomplete_subscriptions: v,
                  shipping_address_collection: b && {
                    allowed_countries: b.allowedCountries,
                  },
                },
                g
              )
            )
            .then(function (t) {
              if ('error' === t.type) return { error: t.error };
              var n = t.object.url;
              return Su(e, n);
            });
        };
      },
      Ou =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      ku = function (e) {
        switch (e.type) {
          case 'object':
            return { token: e.object };
          case 'error':
            return { error: e.error };
          default:
            return Ie(e);
        }
      },
      Au = function (e) {
        return 'object' === (void 0 === e ? 'undefined' : Ou(e)) && null !== e
          ? e
          : {};
      },
      Tu = function (e, t, n) {
        var r = Ka(t);
        if (r && 'cardCvc' === r._componentName) {
          var o = r._frame.id;
          return e.action.tokenizeCvcUpdate({ frameId: o, mids: n }).then(ku);
        }
        throw new Te(
          'You must provide a `cardCvc` Element to create a `cvc_update` token.'
        );
      },
      Iu = function (e, t) {
        return function (n, r) {
          var o = Ka(n);
          if (o) {
            var i = o._frame.id,
              a = o._componentName,
              s = Au(r);
            return e.action
              .tokenizeWithElement({
                frameId: i,
                elementName: a,
                tokenData: s,
                mids: t,
              })
              .then(ku);
          }
          if ('string' == typeof n) {
            var c = n,
              u = Au(r);
            return e.action
              .tokenizeWithData({
                elementName: null,
                type: c,
                tokenData: u,
                mids: t,
              })
              .then(ku);
          }
          throw new Te(
            'You must provide a Stripe Element or a valid token type to create a Token.'
          );
        };
      },
      Ru = function (e) {
        switch (e.type) {
          case 'object':
            return { radarSession: e.object };
          case 'error':
            return { error: e.error };
          default:
            return Ie(e);
        }
      },
      Nu = function (e, t) {
        return e.action.createRadarSession({ mids: t }).then(Ru);
      },
      Cu =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Mu = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      ju = (function () {
        return window.performance && window.performance.now
          ? window.performance.now()
          : Date.now();
      })(),
      Lu = kt({
        apiKey: ft,
        stripeAccount: ot(ft),
        locale: ot(ft),
        apiVersion: ot(ft),
        __privateApiUrl: ot(ft),
        __checkout: ot(kt({ mids: kt({ muid: ft, sid: ft }) })),
        __hosted3DS: ot(ht),
        canCreateRadarSession: ot(ht),
        betas: ot(Et(ut.apply(void 0, ve(So)))),
      }),
      xu = function (e) {
        return (
          'You have an in-flight ' +
          e +
          '! Please be sure to disable your form submit button when ' +
          e +
          ' is called.'
        );
      },
      Du = function (e) {
        return function () {
          throw new Te(
            'You cannot call `stripe.' +
              e +
              '` without supplying a PaymentIntents beta flag when initializing Stripe.js.    You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart.'
          );
        };
      },
      qu = (function () {
        function e(t, n) {
          var r = this;
          ye(this, e), Fu.call(this);
          var o = It(Lu, t || {}, 'Stripe()'),
            i = o.value,
            a = o.warnings,
            s = i.apiKey,
            c = i.stripeAccount,
            u = i.apiVersion,
            l = i.locale,
            p = i.__privateApiUrl,
            f = i.__checkout,
            d = i.__hosted3DS,
            h = i.canCreateRadarSession,
            _ = i.betas;
          if ('' === s)
            throw new Te(
              'Please call Stripe() with your publishable key. You used an empty string.'
            );
          if (0 === s.indexOf('sk_'))
            throw new Te(
              'You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead.'
            );
          f && f.mids && (e._ec = Xr({ checkoutIds: f.mids })),
            (this._apiKey = s.trim()),
            (this._keyMode = We(this._apiKey)),
            (this._betas = _ || []),
            (this._locale = ya(l, this._betas) || null),
            (this._stripeAccount = c || null),
            (this._isCheckout = !!f),
            (this._controller = new bo(
              Cu(
                {
                  apiKey: this._apiKey,
                  apiVersion: u,
                  __privateApiUrl: p,
                  stripeAccount: c,
                  betas: this._betas,
                  stripeJsId: e.stripeJsId,
                  startTime: ju,
                  listenerRegistry: this._listenerRegistry,
                },
                this._locale ? { locale: this._locale } : {}
              )
            )),
            a.forEach(function (e) {
              return r._controller.warn(e);
            }),
            this._ensureHTTPS(),
            this._ensureStripeHosted(n),
            this._attachPaymentIntentMethods(this._betas, !!d),
            this._attachLegacyPaymentIntentMethods(this._betas),
            this._attachCheckoutMethods(this._betas),
            this._attachPrivateMethodsForCheckout(this._isCheckout),
            this._attachCreateRadarSession(h || !1),
            this._attachGetters();
        }
        return (
          Mu(e, [
            {
              key: '_attachCreateRadarSession',
              value: function (e) {
                var t = this;
                e &&
                  (this.createRadarSession = dn(function () {
                    var e = t._mids();
                    return Nu(t._controller, e);
                  }));
              },
            },
            {
              key: '_attachPaymentIntentMethods',
              value: function (e, t) {
                var n = this,
                  r = function () {
                    return n._mids();
                  };
                (this.createPaymentMethod = mn(function () {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  return ks.apply(void 0, [n._controller, r()].concat(t));
                })),
                  (this._createPaymentMethod = this.createPaymentMethod),
                  (this.retrievePaymentIntent = hn(function (e) {
                    return Sc(e, n._controller);
                  })),
                  (this.retrieveSetupIntent = hn(function (e) {
                    return Zc(e, n._controller);
                  }));
                var o = Dn(kc, xu('handleCardAction'));
                this.handleCardAction = hn(function (e) {
                  return o(e, n._controller);
                });
                var i = Dn(fc, xu('confirmCardPayment'));
                this.confirmCardPayment = mn(function () {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  return i.apply(void 0, [n._controller, r()].concat(t));
                });
                var a = Dn(Vc, xu('confirmCardSetup'));
                (this.confirmCardSetup = mn(function () {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  return a.apply(void 0, [n._controller, r()].concat(t));
                })),
                  (this.confirmIdealPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return yc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmSepaDebitPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return Ec.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmSepaDebitSetup = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return Jc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmFpxPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return hc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmAuBecsDebitPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return cc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmAuBecsDebitSetup = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return Xc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmBacsDebitPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return uc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmBacsDebitSetup = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return $c.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmBancontactPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return lc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmEpsPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return dc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmGiropayPayment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return _c.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmP24Payment = mn(function () {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return gc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  Po(this._betas, wo.acss_debit_beta_1) &&
                    ((this.confirmAcssDebitPayment = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return sc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                    (this.confirmAcssDebitSetup = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return Kc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                    (this.verifyMicrodepositsForPayment = _n(function () {
                      for (
                        var e = arguments.length, t = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        t[r] = arguments[r];
                      return Pc.apply(void 0, [n._controller].concat(t));
                    })),
                    (this.verifyMicrodepositsForSetup = _n(function () {
                      for (
                        var e = arguments.length, t = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        t[r] = arguments[r];
                      return eu.apply(void 0, [n._controller].concat(t));
                    }))),
                  (this.confirmGrabPayPayment = Du('confirmGrabPayPayment')),
                  Po(this._betas, wo.grabpay_pm_beta_1) &&
                    (this.confirmGrabPayPayment = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return mc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  (this.confirmBoletoPayment = Du('confirmBoletoPayment')),
                  Po(this._betas, wo.boleto_pm_beta_1) &&
                    (this.confirmBoletoPayment = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return pc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  (this.confirmOxxoPayment = Du('confirmOxxoPayment')),
                  Po(this._betas, wo.oxxo_pm_beta_1) &&
                    (this.confirmOxxoPayment = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return vc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  (this.confirmAlipayPayment = Du('confirmAlipayPayment')),
                  Po(this._betas, wo.alipay_pm_beta_1) &&
                    (this.confirmAlipayPayment = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return bc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  (this.confirmSofortPayment = Du('confirmSofortPayment')),
                  Po(this._betas, wo.sofort_pm_beta_1) &&
                    (this.confirmSofortPayment = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return wc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  (this.confirmIdealSetup = Du('confirmIdealSetup')),
                  Po(this._betas, wo.ideal_sepa_beta_1) &&
                    (this.confirmIdealSetup = mn(function () {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return Qc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  t &&
                    ((this.handleHosted3DS2Payment = hn(function (e) {
                      return Oc(e, n._controller);
                    })),
                    (this.handleHosted3DS2Setup = hn(function (e) {
                      return tu(e, n._controller);
                    })));
              },
            },
            {
              key: '_attachLegacyPaymentIntentMethods',
              value: function (e) {
                var t = this,
                  n =
                    Po(this._betas, wo.payment_intent_beta_1) ||
                    Po(this._betas, wo.payment_intent_beta_2),
                  r = function () {
                    return t._mids();
                  },
                  o = mn(function () {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return Dc.apply(void 0, [!0, t._controller, r()].concat(n));
                  }),
                  i = mn(function () {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return Dc.apply(void 0, [!1, t._controller, r()].concat(n));
                  }),
                  a = Dn(qc, xu('handleCardPayment')),
                  s = mn(function () {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return a.apply(
                      void 0,
                      [!0, t._controller, r(), n].concat(o)
                    );
                  }),
                  c = mn(function () {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return a.apply(
                      void 0,
                      [!1, t._controller, r(), n].concat(o)
                    );
                  }),
                  u = Dn(ru, xu('handleCardSetup')),
                  l = mn(function () {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return u.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  p = mn(function () {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return iu.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  f = mn(function () {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Fc.apply(void 0, [t._controller, r(), n].concat(o));
                  }),
                  d = mn(function () {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return ou.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  h = mn(function () {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Bc.apply(
                      void 0,
                      [!0, t._controller, r(), n].concat(o)
                    );
                  }),
                  _ = mn(function () {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Bc.apply(
                      void 0,
                      [!1, t._controller, r(), n].concat(o)
                    );
                  }),
                  m = mn(function () {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Uc.apply(void 0, [t._controller, r(), n].concat(o));
                  });
                (this.handleCardPayment = c),
                  (this.confirmPaymentIntent = i),
                  (this.handleCardSetup = l),
                  (this.confirmSetupIntent = p),
                  (this.fulfillPaymentIntent = Du('fulfillPaymentIntent')),
                  (this.handleSepaDebitPayment = Du('handleSepaDebitPayment')),
                  (this.handleSepaDebitSetup = Du('handleSepaDebitSetup')),
                  (this.handleIdealPayment = Du('handleIdealPayment')),
                  (this.handleFpxPayment = Du('handleFpxPayment')),
                  Po(this._betas, wo.payment_intent_beta_1)
                    ? (this.fulfillPaymentIntent = s)
                    : (Po(this._betas, wo.payment_intent_beta_3) ||
                        Po(this._betas, wo.payment_intent_beta_2)) &&
                      (this.handleCardPayment = s),
                  Po(this._betas, wo.payment_intent_beta_3) &&
                    ((this.confirmPaymentIntent = o),
                    (this.handleIdealPayment = h),
                    (this.handleSepaDebitPayment = f)),
                  Po(this._betas, wo.fpx_bank_beta_1) &&
                    (this.handleFpxPayment = m),
                  Po(this._betas, wo.ideal_pm_beta_1) &&
                    (this.handleIdealPayment = _),
                  Po(this._betas, wo.sepa_pm_beta_1) &&
                    ((this.handleSepaDebitPayment = f),
                    (this.handleSepaDebitSetup = d));
              },
            },
            {
              key: '_attachPrivateMethodsForCheckout',
              value: function (e) {
                var t = this;
                e &&
                  ((this.sendInteractionEvent = Zr),
                  (this.tryNextAction = _n(function (e, n) {
                    var r = It(cs, e, 'Payment Intent'),
                      o = r.value,
                      i = Object.keys(Va).map(function (e) {
                        return Va[e];
                      }),
                      a = It(ct.apply(void 0, ve(i)), n, 'Source type'),
                      s = a.value;
                    return 'payment_intent' === o.object
                      ? rc(t._controller, o, s, 'auto', !1)
                      : Gc(t._controller, o, s, 'auto', !1);
                  })));
              },
            },
            {
              key: '_attachCheckoutMethods',
              value: function (e) {
                var t = this,
                  n = function () {
                    return t._mids();
                  },
                  r = e.reduce(function (e, t) {
                    var n = Le(su, function (e) {
                      return e === t;
                    });
                    return n ? [].concat(ve(e), [n]) : e;
                  }, []);
                this.redirectToCheckout = Pu(
                  this._controller,
                  r,
                  n,
                  this._locale
                );
              },
            },
            {
              key: '_attachGetters',
              value: function () {
                var e = this,
                  t = [
                    'elements',
                    'createToken',
                    'createSource',
                    'createPaymentMethod',
                  ],
                  n = new ys(function (t) {
                    e._registerWrapper({ name: t, version: null });
                  });
                t.forEach(function (t) {
                  if (e.hasOwnProperty(t)) {
                    var r = e[t],
                      o = function () {
                        n.called(t);
                        for (
                          var e = arguments.length, o = Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        return r.apply(this, o);
                      };
                    Object.defineProperty(e, t, {
                      enumerable: !0,
                      get: function () {
                        return n.got(t), o;
                      },
                    });
                  }
                });
              },
            },
            {
              key: '_ensureHTTPS',
              value: function () {
                var e = window.location.protocol,
                  t = -1 !== ['https:', 'file:', 'ionic:'].indexOf(e),
                  n =
                    -1 !==
                    ['localhost', '127.0.0.1', '0.0.0.0'].indexOf(
                      window.location.hostname
                    ),
                  r = this._keyMode === Ye.live,
                  o =
                    'Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/security#tls';
                if (!t) {
                  if (r && !n)
                    throw (
                      (this._controller.report('user_error.non_https_error', {
                        protocol: e,
                      }),
                      new Te(o))
                    );
                  !r || n
                    ? window.console &&
                      console.warn(
                        'You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.'
                      )
                    : window.console && console.warn(o);
                }
              },
            },
            {
              key: '_ensureStripeHosted',
              value: function (e) {
                if (!e)
                  throw (
                    (this._controller.report('user_error.self_hosted'),
                    new Te(
                      'Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs'
                    ))
                  );
              },
            },
            {
              key: '_mids',
              value: function () {
                return e._ec ? e._ec.ids() : null;
              },
            },
            {
              key: '_registerWrapper',
              value: function (e) {
                var t = Tt(ds, e, 'WrapperLibrary');
                if ('error' === t.type)
                  return void this._controller.report(
                    'register_wrapper.error',
                    { error: t.error.message }
                  );
                var n = t.value,
                  r = n.name,
                  o = n.version;
                this._controller.registerWrapper({ name: r, version: o });
              },
            },
          ]),
          e
        );
      })();
    (qu.version = 3),
      (qu.stripeJsId = Xt()),
      (qu._ec = (function () {
        return 'https://checkout.stripe.com/'.match(
          new RegExp(document.location.protocol + '//' + document.location.host)
        )
          ? null
          : Xr();
      })());
    var Fu = function () {
        var e = this;
        (this._listenerRegistry = Gr()),
          (this.elements = hn(function (t) {
            return new Ha(
              e._controller,
              e._listenerRegistry,
              Cu({}, e._locale ? { locale: e._locale } : {}, t, {
                betas: e._betas,
              })
            );
          })),
          (this.createToken = _n(function (t, n) {
            var r = e._mids();
            if ('cvc_update' === t) {
              if (Po(e._betas, wo.cvc_update_beta_1))
                return Tu(e._controller, n, r);
              throw new Te(
                "You cannot create a 'cvc_update' token without using the 'cvc_update_beta_1' beta flag."
              );
            }
            return Iu(e._controller, r)(t, n);
          })),
          (this.createSource = _n(function (t, n) {
            var r = Ka(t),
              o = bs(r ? n : t),
              i = o || { type: null, data: {} },
              a = i.type,
              s = i.data;
            if (r) {
              var c = r._frame.id,
                u = r._componentName;
              return !o && Xa(u)
                ? Me.reject(
                    new Te(
                      'Please provide Source creation parameters to createSource.'
                    )
                  )
                : e._controller.action
                    .createSourceWithElement({
                      frameId: c,
                      elementName: u,
                      type: a,
                      sourceData: s,
                      mids: e._mids(),
                    })
                    .then(gs);
            }
            return o
              ? a
                ? e._controller.action
                    .createSourceWithData({
                      elementName: null,
                      type: a,
                      sourceData: s,
                      mids: e._mids(),
                    })
                    .then(gs)
                : Me.reject(
                    new Te('Please provide a source type to createSource.')
                  )
              : Me.reject(
                  new Te(
                    'Please provide either an Element or Source creation parameters to createSource.'
                  )
                );
          })),
          (this.retrieveSource = hn(function (t) {
            var n = It(ws, { source: t }, 'retrieveSource'),
              r = n.value;
            return (
              n.warnings.forEach(function (t) {
                return e._controller.warn(t);
              }),
              e._controller.action.retrieveSource(r).then(gs)
            );
          })),
          (this.paymentRequest = _n(function (t, n) {
            ze(e._keyMode);
            var r = e._isCheckout && n ? n : null;
            return Ya(
              e._controller,
              { apiKey: e._apiKey, accountId: e._stripeAccount },
              e._mids(),
              t,
              e._betas,
              r,
              e._listenerRegistry
            );
          }));
      },
      Bu = qu,
      Uu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      Hu =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Gu = (function () {
        if (document.currentScript) {
          var e = Je(document.currentScript.src);
          return !e || ur(e.origin);
        }
        return !0;
      })(),
      Yu = function (e, t) {
        return new Bu(
          Hu(
            { apiKey: e },
            t && 'object' === (void 0 === t ? 'undefined' : Uu(t)) ? t : {}
          ),
          Gu
        );
      };
    (Yu.version = Bu.version),
      window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3
        ? (window.Stripe.StripeV3 = Yu)
        : window.Stripe
        ? window.console &&
          console.warn(
            'It looks like Stripe.js was loaded more than one time. Please only load it once per page.'
          )
        : (window.Stripe = Yu);
    t.default = Yu;
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      var t = new o(o._61);
      return (t._81 = 1), (t._65 = e), t;
    }
    var o = n(3);
    e.exports = o;
    var i = r(!0),
      a = r(!1),
      s = r(null),
      c = r(void 0),
      u = r(0),
      l = r('');
    (o.resolve = function (e) {
      if (e instanceof o) return e;
      if (null === e) return s;
      if (void 0 === e) return c;
      if (!0 === e) return i;
      if (!1 === e) return a;
      if (0 === e) return u;
      if ('' === e) return l;
      if ('object' == typeof e || 'function' == typeof e)
        try {
          var t = e.then;
          if ('function' == typeof t) return new o(t.bind(e));
        } catch (e) {
          return new o(function (t, n) {
            n(e);
          });
        }
      return r(e);
    }),
      (o.all = function (e) {
        var t = Array.prototype.slice.call(e);
        return new o(function (e, n) {
          function r(a, s) {
            if (s && ('object' == typeof s || 'function' == typeof s)) {
              if (s instanceof o && s.then === o.prototype.then) {
                for (; 3 === s._81; ) s = s._65;
                return 1 === s._81
                  ? r(a, s._65)
                  : (2 === s._81 && n(s._65),
                    void s.then(function (e) {
                      r(a, e);
                    }, n));
              }
              var c = s.then;
              if ('function' == typeof c) {
                return void new o(c.bind(s)).then(function (e) {
                  r(a, e);
                }, n);
              }
            }
            (t[a] = s), 0 == --i && e(t);
          }
          if (0 === t.length) return e([]);
          for (var i = t.length, a = 0; a < t.length; a++) r(a, t[a]);
        });
      }),
      (o.reject = function (e) {
        return new o(function (t, n) {
          n(e);
        });
      }),
      (o.race = function (e) {
        return new o(function (t, n) {
          e.forEach(function (e) {
            o.resolve(e).then(t, n);
          });
        });
      }),
      (o.prototype.catch = function (e) {
        return this.then(null, e);
      });
  },
  function (e, t, n) {
    'use strict';
    function r() {}
    function o(e) {
      try {
        return e.then;
      } catch (e) {
        return (y = e), v;
      }
    }
    function i(e, t) {
      try {
        return e(t);
      } catch (e) {
        return (y = e), v;
      }
    }
    function a(e, t, n) {
      try {
        e(t, n);
      } catch (e) {
        return (y = e), v;
      }
    }
    function s(e) {
      if ('object' != typeof this)
        throw new TypeError('Promises must be constructed via new');
      if ('function' != typeof e) throw new TypeError('not a function');
      (this._45 = 0),
        (this._81 = 0),
        (this._65 = null),
        (this._54 = null),
        e !== r && _(e, this);
    }
    function c(e, t, n) {
      return new e.constructor(function (o, i) {
        var a = new s(r);
        a.then(o, i), u(e, new h(t, n, a));
      });
    }
    function u(e, t) {
      for (; 3 === e._81; ) e = e._65;
      if ((s._10 && s._10(e), 0 === e._81))
        return 0 === e._45
          ? ((e._45 = 1), void (e._54 = t))
          : 1 === e._45
          ? ((e._45 = 2), void (e._54 = [e._54, t]))
          : void e._54.push(t);
      l(e, t);
    }
    function l(e, t) {
      m(function () {
        var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
        if (null === n)
          return void (1 === e._81 ? p(t.promise, e._65) : f(t.promise, e._65));
        var r = i(n, e._65);
        r === v ? f(t.promise, y) : p(t.promise, r);
      });
    }
    function p(e, t) {
      if (t === e)
        return f(e, new TypeError('A promise cannot be resolved with itself.'));
      if (t && ('object' == typeof t || 'function' == typeof t)) {
        var n = o(t);
        if (n === v) return f(e, y);
        if (n === e.then && t instanceof s)
          return (e._81 = 3), (e._65 = t), void d(e);
        if ('function' == typeof n) return void _(n.bind(t), e);
      }
      (e._81 = 1), (e._65 = t), d(e);
    }
    function f(e, t) {
      (e._81 = 2), (e._65 = t), s._97 && s._97(e, t), d(e);
    }
    function d(e) {
      if ((1 === e._45 && (u(e, e._54), (e._54 = null)), 2 === e._45)) {
        for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
        e._54 = null;
      }
    }
    function h(e, t, n) {
      (this.onFulfilled = 'function' == typeof e ? e : null),
        (this.onRejected = 'function' == typeof t ? t : null),
        (this.promise = n);
    }
    function _(e, t) {
      var n = !1,
        r = a(
          e,
          function (e) {
            n || ((n = !0), p(t, e));
          },
          function (e) {
            n || ((n = !0), f(t, e));
          }
        );
      n || r !== v || ((n = !0), f(t, y));
    }
    var m = n(4),
      y = null,
      v = {};
    (e.exports = s),
      (s._10 = null),
      (s._97 = null),
      (s._61 = r),
      (s.prototype.then = function (e, t) {
        if (this.constructor !== s) return c(this, e, t);
        var n = new s(r);
        return u(this, new h(e, t, n)), n;
      });
  },
  function (e, t, n) {
    'use strict';
    (function (t) {
      function n(e) {
        a.length || (i(), (s = !0)), (a[a.length] = e);
      }
      function r() {
        for (; c < a.length; ) {
          var e = c;
          if (((c += 1), a[e].call(), c > u)) {
            for (var t = 0, n = a.length - c; t < n; t++) a[t] = a[t + c];
            (a.length -= c), (c = 0);
          }
        }
        (a.length = 0), (c = 0), (s = !1);
      }
      function o(e) {
        return function () {
          function t() {
            clearTimeout(n), clearInterval(r), e();
          }
          var n = setTimeout(t, 0),
            r = setInterval(t, 50);
        };
      }
      e.exports = n;
      var i,
        a = [],
        s = !1,
        c = 0,
        u = 1024,
        l = void 0 !== t ? t : self,
        p = l.MutationObserver || l.WebKitMutationObserver;
      (i =
        'function' == typeof p
          ? (function (e) {
              var t = 1,
                n = new p(e),
                r = document.createTextNode('');
              return (
                n.observe(r, { characterData: !0 }),
                function () {
                  (t = -t), (r.data = t);
                }
              );
            })(r)
          : o(r)),
        (n.requestFlush = i),
        (n.makeRequestCallFromTimer = o);
    }.call(t, n(5)));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var r, o;
    !(function () {
      'use strict';
      var n = (function () {
        function e() {}
        function t(e, t) {
          for (var n = t.length, r = 0; r < n; ++r) i(e, t[r]);
        }
        function n(e, t) {
          e[t] = !0;
        }
        function r(e, t) {
          for (var n in t) s.call(t, n) && (e[n] = !!t[n]);
        }
        function o(e, t) {
          for (var n = t.split(c), r = n.length, o = 0; o < r; ++o)
            e[n[o]] = !0;
        }
        function i(e, i) {
          if (i) {
            var a = typeof i;
            'string' === a
              ? o(e, i)
              : Array.isArray(i)
              ? t(e, i)
              : 'object' === a
              ? r(e, i)
              : 'number' === a && n(e, i);
          }
        }
        function a() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          var i = new e();
          t(i, r);
          var a = [];
          for (var s in i) i[s] && a.push(s);
          return a.join(' ');
        }
        e.prototype = Object.create(null);
        var s = {}.hasOwnProperty,
          c = /\s+/;
        return a;
      })();
      void 0 !== e && e.exports
        ? (e.exports = n)
        : ((r = []),
          void 0 !==
            (o = function () {
              return n;
            }.apply(t, r)) && (e.exports = o));
    })();
  },
  function (e, t) {},
  function (e, t) {
    var n = function (e) {
      return (
        '_' +
        e
          .split('')
          .map(function (e) {
            return e.charCodeAt(0);
          })
          .reduce(function (e, t) {
            return ((e << 5) - e + t) & ((e << 5) - e + t);
          }, 0)
          .toString()
          .replace(/[-.]/g, '_')
      );
    };
    e.exports = n;
  },
]);
