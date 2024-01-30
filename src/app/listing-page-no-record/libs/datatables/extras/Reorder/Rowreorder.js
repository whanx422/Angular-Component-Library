/*! RowReorder 1.3.1
 * 2015-2022 SpryMedia Ltd - datatables.net/license
 */
! function (o) {
    "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
        return o(t, window, document)
    }) : "object" == typeof exports ? module.exports = function (t, e) {
        return t = t || window, (e = e || ("undefined" != typeof window ? require("jquery") : require("jquery")(t))).fn.dataTable || require("datatables.net")(t, e), o(e, t, t.document)
    } : o(jQuery, window, document)
}(function (v, d, b, t) {
    "use strict";

    function s(t, e) {
        if (!i.versionCheck || !i.versionCheck("1.10.8")) throw "DataTables RowReorder requires DataTables 1.10.8 or newer";
        if (this.c = v.extend(!0, {}, i.defaults.rowReorder, s.defaults, e), this.s = {
                bodyTop: null,
                dt: new i.Api(t),
                getDataFn: i.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),
                middles: null,
                scroll: {},
                scrollInterval: null,
                setDataFn: i.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),
                start: {
                    top: 0,
                    left: 0,
                    offsetTop: 0,
                    offsetLeft: 0,
                    nodes: []
                },
                windowHeight: 0,
                documentOuterHeight: 0,
                domCloneOuterHeight: 0
            }, this.dom = {
                clone: null,
                cloneParent: null,
                dtScroll: v("div.dataTables_scrollBody", this.s.dt.table().container())
            }, e = this.s.dt.settings()[0], t = e.rowreorder) return t;
        this.dom.dtScroll.length || (this.dom.dtScroll = v(this.s.dt.table().container(), "tbody")), (e.rowreorder = this)._constructor()
    }
    var i = v.fn.dataTable,
        e = (v.extend(s.prototype, {
            _constructor: function () {
                var r = this,
                    n = this.s.dt,
                    t = v(n.table().node());
                "static" === t.css("position") && t.css("position", "relative"), v(n.table().container()).on("mousedown.rowReorder touchstart.rowReorder", this.c.selector, function (t) {
                    var e, o;
                    if (r.c.enable) return !!v(t.target).is(r.c.excludedChildren) || (e = v(this).closest("tr"), (o = n.row(e)).any() ? (r._emitEvent("pre-row-reorder", {
                        node: o.node(),
                        index: o.index()
                    }), r._mouseDown(t, e), !1) : void 0)
                }), n.on("destroy.rowReorder", function () {
                    v(n.table().container()).off(".rowReorder"), n.off(".rowReorder")
                })
            },
            _cachePositions: function () {
                var t = this.s.dt,
                    r = v(t.table().node()).find("thead").outerHeight(),
                    e = v.unique(t.rows({
                        page: "current"
                    }).nodes().toArray()),
                    e = v.map(e, function (t, e) {
                        var o = v(t).position().top - r;
                        return (o + o + v(t).outerHeight()) / 2
                    });
                this.s.middles = e, this.s.bodyTop = v(t.table().body()).offset().top, this.s.windowHeight = v(d).height(), this.s.documentOuterHeight = v(b).outerHeight()
            },
            _clone: function (t) {
                var e = this.s.dt,
                    e = v(e.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(t.clone(!1)),
                    o = t.outerWidth(),
                    r = t.outerHeight(),
                    n = v(v(this.s.dt.table().node()).parent()),
                    s = n.width(),
                    n = n.scrollLeft(),
                    i = t.children().map(function () {
                        return v(this).width()
                    }),
                    t = (e.width(o).height(r).find("tr").children().each(function (t) {
                        this.style.width = i[t] + "px"
                    }), v("<div>").addClass("dt-rowReorder-float-parent").width(s).append(e).appendTo("body").scrollLeft(n));
                this.dom.clone = e, this.dom.cloneParent = t, this.s.domCloneOuterHeight = e.outerHeight()
            },
            _clonePosition: function (t) {
                var e = this.s.start,
                    o = this._eventToPage(t, "Y") - e.top,
                    t = this._eventToPage(t, "X") - e.left,
                    r = this.c.snapX,
                    o = o + e.offsetTop,
                    r = !0 === r ? e.offsetLeft : "number" == typeof r ? e.offsetLeft + r : t + e.offsetLeft + this.dom.cloneParent.scrollLeft();
                o < 0 ? o = 0 : o + this.s.domCloneOuterHeight > this.s.documentOuterHeight && (o = this.s.documentOuterHeight - this.s.domCloneOuterHeight), this.dom.cloneParent.css({
                    top: o,
                    left: r
                })
            },
            _emitEvent: function (o, r) {
                this.s.dt.iterator("table", function (t, e) {
                    v(t.nTable).triggerHandler(o + ".dt", r)
                })
            },
            _eventToPage: function (t, e) {
                return (-1 !== t.type.indexOf("touch") ? t.originalEvent.touches[0] : t)["page" + e]
            },
            _mouseDown: function (t, e) {
                var o = this,
                    r = this.s.dt,
                    n = this.s.start,
                    s = e.offset(),
                    s = (n.top = this._eventToPage(t, "Y"), n.left = this._eventToPage(t, "X"), n.offsetTop = s.top, n.offsetLeft = s.left, n.nodes = v.unique(r.rows({
                        page: "current"
                    }).nodes().toArray()), this._cachePositions(), this._clone(e), this._clonePosition(t), (this.dom.target = e).addClass("dt-rowReorder-moving"), v(b).on("mouseup.rowReorder touchend.rowReorder", function (t) {
                        o._mouseUp(t)
                    }).on("mousemove.rowReorder touchmove.rowReorder", function (t) {
                        o._mouseMove(t)
                    }), v(d).width() === v(b).width() && v(b.body).addClass("dt-rowReorder-noOverflow"), this.dom.dtScroll);
                this.s.scroll = {
                    windowHeight: v(d).height(),
                    windowWidth: v(d).width(),
                    dtTop: s.length ? s.offset().top : null,
                    dtLeft: s.length ? s.offset().left : null,
                    dtHeight: s.length ? s.outerHeight() : null,
                    dtWidth: s.length ? s.outerWidth() : null
                }
            },
            _mouseMove: function (t) {
                this._clonePosition(t);
                for (var e = this._eventToPage(t, "Y") - this.s.bodyTop, o = this.s.middles, r = null, n = this.s.dt, s = 0, i = o.length; s < i; s++)
                    if (e < o[s]) {
                        r = s;
                        break
                    } null === r && (r = o.length), null !== this.s.lastInsert && this.s.lastInsert === r || (n = v.unique(n.rows({
                    page: "current"
                }).nodes().toArray()), r > this.s.lastInsert ? this.dom.target.insertAfter(n[r - 1]) : this.dom.target.insertBefore(n[r]), this._cachePositions(), this.s.lastInsert = r), this._shiftScroll(t)
            },
            _mouseUp: function (t) {
                for (var e, o, r, n = this, s = this.s.dt, i = this.c.dataSrc, d = (this.dom.clone.remove(), this.dom.cloneParent.remove(), this.dom.clone = null, this.dom.cloneParent = null, this.dom.target.removeClass("dt-rowReorder-moving"), v(b).off(".rowReorder"), v(b.body).removeClass("dt-rowReorder-noOverflow"), clearInterval(this.s.scrollInterval), this.s.scrollInterval = null, this.s.start.nodes), l = v.unique(s.rows({
                        page: "current"
                    }).nodes().toArray()), a = {}, c = [], h = [], u = this.s.getDataFn, f = this.s.setDataFn, w = 0, p = d.length; w < p; w++) d[w] !== l[w] && (e = s.row(l[w]).id(), o = s.row(l[w]).data(), r = s.row(d[w]).data(), e && (a[e] = u(r)), c.push({
                    node: l[w],
                    oldData: u(o),
                    newData: u(r),
                    newPosition: w,
                    oldPosition: v.inArray(l[w], d)
                }), h.push(l[w]));

                function m() {
                    if (n.c.update) {
                        for (w = 0, p = c.length; w < p; w++) {
                            var t = s.row(c[w].node).data();
                            f(t, c[w].newData), s.columns().every(function () {
                                this.dataSrc() === i && s.cell(c[w].node, this.index()).invalidate("data")
                            })
                        }
                        n._emitEvent("row-reordered", g), s.draw(!1)
                    }
                }
                var g = [c, {
                    dataSrc: i,
                    nodes: h,
                    values: a,
                    triggerRow: s.row(this.dom.target),
                    originalEvent: t
                }];
                this._emitEvent("row-reorder", g);
                this.c.editor ? (this.c.enable = !1, this.c.editor.edit(h, !1, v.extend({
                    submit: "changed"
                }, this.c.formOptions)).multiSet(i, a).one("preSubmitCancelled.rowReorder", function () {
                    n.c.enable = !0, n.c.editor.off(".rowReorder"), s.draw(!1)
                }).one("submitUnsuccessful.rowReorder", function () {
                    s.draw(!1)
                }).one("submitSuccess.rowReorder", function () {
                    m()
                }).one("submitComplete", function () {
                    n.c.enable = !0, n.c.editor.off(".rowReorder")
                }).submit()) : m()
            },
            _shiftScroll: function (t) {
                var e, o, r = this,
                    n = (this.s.dt, this.s.scroll),
                    s = !1,
                    i = t.pageY - b.body.scrollTop;
                i < v(d).scrollTop() + 65 ? e = -5 : i > n.windowHeight + v(d).scrollTop() - 65 && (e = 5), null !== n.dtTop && t.pageY < n.dtTop + 65 ? o = -5 : null !== n.dtTop && t.pageY > n.dtTop + n.dtHeight - 65 && (o = 5), e || o ? (n.windowVert = e, n.dtVert = o, s = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && s && (this.s.scrollInterval = setInterval(function () {
                    var t;
                    n.windowVert && (t = v(b).scrollTop(), v(b).scrollTop(t + n.windowVert), t !== v(b).scrollTop()) && (t = parseFloat(r.dom.cloneParent.css("top")), r.dom.cloneParent.css("top", t + n.windowVert)), n.dtVert && (t = r.dom.dtScroll[0], n.dtVert) && (t.scrollTop += n.dtVert)
                }, 20))
            }
        }), s.defaults = {
            dataSrc: 0,
            editor: null,
            enable: !0,
            formOptions: {},
            selector: "td:first-child",
            snapX: !1,
            update: !0,
            excludedChildren: "a"
        }, v.fn.dataTable.Api);
    return e.register("rowReorder()", function () {
        return this
    }), e.register("rowReorder.enable()", function (e) {
        return e === t && (e = !0), this.iterator("table", function (t) {
            t.rowreorder && (t.rowreorder.c.enable = e)
        })
    }), e.register("rowReorder.disable()", function () {
        return this.iterator("table", function (t) {
            t.rowreorder && (t.rowreorder.c.enable = !1)
        })
    }), s.version = "1.3.1", v.fn.dataTable.RowReorder = s, v.fn.DataTable.RowReorder = s, v(b).on("init.dt.dtr", function (t, e, o) {
        var r, n;
        "dt" === t.namespace && (t = e.oInit.rowReorder, r = i.defaults.rowReorder, t || r) && (n = v.extend({}, t, r), !1 !== t) && new s(e, n)
    }), i
});