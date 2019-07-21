var perPage = 6;
var numPages = 3;
var firstText = 'First';
var lastText = 'Last';
var urlactivepage = location['href'];
var home_page = '/';
if (typeof firstText == 'undefined') {
    firstText = 'First'
};
if (typeof lastText == 'undefined') {
    lastText = 'Last'
};
var noPage;
var currentPage;
var currentPageNo;
var postLabel;
pagecurrentg();

function looppagecurrentg(_0x92c3xf) {
    var _0x92c3x10 = '';
    pageNumber = parseInt(numPages / 2);
    if (pageNumber == numPages - pageNumber) {
        numPages = pageNumber * 2 + 1
    };
    pageStart = currentPageNo - pageNumber;
    if (pageStart < 1) {
        pageStart = 1
    };
    lastPageNo = parseInt(_0x92c3xf / perPage) + 1;
    if (lastPageNo - 1 == _0x92c3xf / perPage) {
        lastPageNo = lastPageNo - 1
    };
    pageEnd = pageStart + numPages - 1;
    if (pageEnd > lastPageNo) {
        pageEnd = lastPageNo
    };
    var _0x92c3x11 = parseInt(currentPageNo) - 1;
    if (currentPage == 'page') {
        _0x92c3x10 += '<li class="showpage firstpage"><a href="' + home_page + '">' + firstText + '</a></li>'
    } else {
        _0x92c3x10 += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + firstText + '</a></li>'
    };
    if (currentPageNo == 3) {
        if (currentPage == 'page') {
            _0x92c3x10 += '<li><a href="' + home_page + '"><i class="fa fa-angle-double-left"></i></a></li>'
        } else {
            _0x92c3x10 += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '"><i class="fa fa-angle-double-left"></i></a></li>'
        }
    } else {
        if (currentPage == 'page') {
            _0x92c3x10 += '<li><a href="#" onclick="redirectpage(' + _0x92c3x11 + ');return false"><i class="fa fa-angle-double-left"></i></a></li>'
        } else {
            _0x92c3x10 += '<li><a href="#" onclick="redirectlabel(' + _0x92c3x11 + ');return false"><i class="fa fa-angle-double-left"></i></a></li>'
        }
    };
    if (pageStart > 1) {
        if (currentPage == 'page') {
            _0x92c3x10 += '<li><a href="' + home_page + '">1</a></li>'
        } else {
            _0x92c3x10 += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></li>'
        }
    };
    if (pageStart > 2) {
        _0x92c3x10 += ' ... '
    };
    for (var _0x92c3x12 = pageStart; _0x92c3x12 <= pageEnd; _0x92c3x12++) {
        if (currentPageNo == _0x92c3x12) {
            _0x92c3x10 += '<li class="active">' + _0x92c3x12 + '</li>'
        } else {
            if (_0x92c3x12 == 1) {
                if (currentPage == 'page') {
                    _0x92c3x10 += '<li><a href="' + home_page + '">1</a></li>'
                } else {
                    _0x92c3x10 += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></li>'
                }
            } else {
                if (currentPage == 'page') {
                    _0x92c3x10 += '<li><a href="#" onclick="redirectpage(' + _0x92c3x12 + ');return false">' + _0x92c3x12 + '</a></li>'
                } else {
                    _0x92c3x10 += '<li><a href="#" onclick="redirectlabel(' + _0x92c3x12 + ');return false">' + _0x92c3x12 + '</a></li>'
                }
            }
        }
    };
    if (pageEnd < lastPageNo - 1) {
        _0x92c3x10 += '...'
    };
    if (pageEnd < lastPageNo) {
        if (currentPage == 'page') {
            _0x92c3x10 += '<li><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></li>'
        } else {
            _0x92c3x10 += '<li><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></li>'
        }
    };
    var _0x92c3x13 = parseInt(currentPageNo) + 1;
    if (currentPage == 'page') {
        _0x92c3x10 += '<li><a href="#" onclick="redirectpage(' + _0x92c3x13 + ');return false"><i class="fa fa-angle-double-right"></i></a></li>'
    } else {
        _0x92c3x10 += '<li><a href="#" onclick="redirectlabel(' + _0x92c3x13 + ');return false"><i class="fa fa-angle-double-right"></i></a></li>'
    };
    if (currentPage == 'page') {
        _0x92c3x10 += '<li class="displaypageNum lastpage"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + '</a></li>'
    } else {
        _0x92c3x10 += '<li class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + '</a></li>'
    };
    var _0x92c3x14 = document['getElementsByName']('pageArea');
    var _0x92c3x15 = document['getElementById']('blog-pager');
    for (var _0x92c3x16 = 0; _0x92c3x16 < _0x92c3x14['length']; _0x92c3x16++) {
        _0x92c3x14[_0x92c3x16]['innerHTML'] = _0x92c3x10
    };
    if (_0x92c3x14 && _0x92c3x14['length'] > 0) {
        _0x92c3x10 = ''
    };
    if (_0x92c3x15) {
        _0x92c3x15['innerHTML'] = _0x92c3x10
    }
}

function totalcountdata(_0x92c3x18) {
    var _0x92c3x19 = _0x92c3x18['feed'];
    var _0x92c3x1a = parseInt(_0x92c3x19['openSearch$totalResults'].$t, 10);
    looppagecurrentg(_0x92c3x1a)
}

function pagecurrentg() {
    var _0x92c3x8 = urlactivepage;
    if (_0x92c3x8['indexOf']('/search/label/') != -1) {
        if (_0x92c3x8['indexOf']('?updated-max') != -1) {
            postLabel = _0x92c3x8['substring'](_0x92c3x8['indexOf']('/search/label/') + 14, _0x92c3x8['indexOf']('?updated-max'))
        } else {
            postLabel = _0x92c3x8['substring'](_0x92c3x8['indexOf']('/search/label/') + 14, _0x92c3x8['indexOf']('?&max'))
        }
    };
    if (_0x92c3x8['indexOf']('?q=') == -1 && _0x92c3x8['indexOf']('.html') == -1) {
        if (_0x92c3x8['indexOf']('/search/label/') == -1) {
            currentPage = 'page';
            if (urlactivepage['indexOf']('#PageNo=') != -1) {
                currentPageNo = urlactivepage['substring'](urlactivepage['indexOf']('#PageNo=') + 8, urlactivepage['length'])
            } else {
                currentPageNo = 1
            };
            document['write']('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"></script>')
        } else {
            currentPage = 'label';
            if (_0x92c3x8['indexOf']('&max-results=') == -1) {
                perPage = 20
            };
            if (urlactivepage['indexOf']('#PageNo=') != -1) {
                currentPageNo = urlactivepage['substring'](urlactivepage['indexOf']('#PageNo=') + 8, urlactivepage['length'])
            } else {
                currentPageNo = 1
            };
            document['write']('<script src="' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ></script>')
        }
    }
}

function redirectpage(_0x92c3x18) {
    jsonstart = (_0x92c3x18 - 1) * perPage;
    noPage = _0x92c3x18;
    var _0x92c3x1a = document['getElementsByTagName']('head')[0];
    var _0x92c3x19 = document['createElement']('script');
    _0x92c3x19['type'] = 'text/javascript';
    _0x92c3x19['setAttribute']('src', home_page + 'feeds/posts/summary?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=finddatepost');
    _0x92c3x1a['appendChild'](_0x92c3x19)
}

function redirectlabel(_0x92c3x18) {
    jsonstart = (_0x92c3x18 - 1) * perPage;
    noPage = _0x92c3x18;
    var _0x92c3x1a = document['getElementsByTagName']('head')[0];
    var _0x92c3x19 = document['createElement']('script');
    _0x92c3x19['type'] = 'text/javascript';
    _0x92c3x19['setAttribute']('src', home_page + 'feeds/posts/summary/-/' + postLabel + '?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=finddatepost');
    _0x92c3x1a['appendChild'](_0x92c3x19)
}

function finddatepost(_0x92c3x1f) {
    post = _0x92c3x1f['feed']['entry'][0];
    var _0x92c3x19 = post['published']['$t']['substring'](0, 19) + post['published']['$t']['substring'](23, 29);
    var _0x92c3x20 = encodeURIComponent(_0x92c3x19);
    if (currentPage == 'page') {
        var _0x92c3x18 = '/search?updated-max=' + _0x92c3x20 + '&max-results=' + perPage + '#PageNo=' + noPage
    } else {
        var _0x92c3x18 = '/search/label/' + postLabel + '?updated-max=' + _0x92c3x20 + '&max-results=' + perPage + '#PageNo=' + noPage
    };
    location['href'] = _0x92c3x18
}
