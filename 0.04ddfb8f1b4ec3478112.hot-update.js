webpackHotUpdate(0,{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Navbar = __webpack_require__(150);\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _Query = __webpack_require__(145);\n\nvar _Query2 = _interopRequireDefault(_Query);\n\nvar _Stats = __webpack_require__(147);\n\nvar _Stats2 = _interopRequireDefault(_Stats);\n\nvar _Results = __webpack_require__(146);\n\nvar _Results2 = _interopRequireDefault(_Results);\n\nvar _Footer = __webpack_require__(149);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_Component) {\n\t_inherits(Main, _Component);\n\n\tfunction Main(props) {\n\t\t_classCallCheck(this, Main);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tquery: ''\n\t\t\t// this.getSaved = this.getSaved.bind(this);\n\t\t};_this.setParent = _this.setParent.bind(_this);\n\t\treturn _this;\n\t}\n\t// getSaved() {\n\t// \tthis.child.getSaved();\n\t// }\n\n\n\t_createClass(Main, [{\n\t\tkey: 'setParent',\n\t\tvalue: function setParent(query) {\n\t\t\tthis.setState({\n\t\t\t\tquery: query\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tif (!this.state.query.length) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'site d-flex flex-column container-fluid' },\n\t\t\t\t\t_react2.default.createElement(_Navbar2.default, { setParent: this.setParent }),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'main flex-grow container-fluid' },\n\t\t\t\t\t\t_react2.default.createElement(_Query2.default, { setParent: this.setParent }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(_Stats2.default, null)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(_Footer2.default, null)\n\t\t\t\t);\n\t\t\t} else if (this.state.query.length) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'site d-flex flex-column container-fluid' },\n\t\t\t\t\t_react2.default.createElement(_Navbar2.default, { setParent: this.setParent }),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'main flex-grow container-fluid' },\n\t\t\t\t\t\t_react2.default.createElement(_Query2.default, { setParent: this.setParent }),\n\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t_react2.default.createElement(_Results2.default, { query: this.state.query })\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(_Footer2.default, null)\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Main;\n}(_react.Component);\n\nexports.default = Main;\n\n// // When the user scrolls down 20px from the top of the document, show the button\n// window.onscroll = function() {scrollFunction()};\n\n// function scrollFunction() {\n//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n//         document.getElementById(\"myBtn\").style.display = \"block\";\n//     } else {\n//         document.getElementById(\"myBtn\").style.display = \"none\";\n//     }\n// }\n\n// // When the user clicks on the button, scroll to the top of the document\n// function topFunction() {\n//     document.body.scrollTop = 0; // For Chrome, Safari and Opera \n//     document.documentElement.scrollTop = 0; // For IE and Firefox\n// }\n\n// <button onClick={topFunction} id=\"myBtn\" title=\"Go Back to Top\">Back to Top</button>\n\n// <br/>\n// <Results query={this.state.query}/>\n\n// {this.props.children}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9NYWluLmpzPzBiZmUiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwic3RhdGUiLCJxdWVyeSIsInNldFBhcmVudCIsImJpbmQiLCJzZXRTdGF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7QUFDTCxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPO0FBRVI7QUFIYSxHQUFiLENBSUEsTUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBakI7QUFOa0I7QUFPbEI7QUFDRDtBQUNBO0FBQ0E7Ozs7OzRCQUNVRixLLEVBQU87QUFDaEIsUUFBS0csUUFBTCxDQUFjO0FBQ2JILFdBQU9BO0FBRE0sSUFBZDtBQUdBOzs7MkJBQ1E7QUFDUixPQUFJLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxLQUFYLENBQWlCSSxNQUF0QixFQUE4QjtBQUM3QixXQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUseUNBQWY7QUFDQyx1REFBUSxXQUFXLEtBQUtILFNBQXhCLEdBREQ7QUFFQyw4Q0FGRDtBQUdDLDhDQUhEO0FBSUM7QUFBQTtBQUFBLFFBQUssV0FBVSxnQ0FBZjtBQUNDLHVEQUFPLFdBQVcsS0FBS0EsU0FBdkIsR0FERDtBQUVDLCtDQUZEO0FBR0M7QUFIRCxNQUpEO0FBU0MsOENBVEQ7QUFVQztBQVZELEtBREQ7QUFjQSxJQWZELE1BZU8sSUFBSSxLQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJJLE1BQXJCLEVBQTZCO0FBQ25DLFdBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSx5Q0FBZjtBQUNDLHVEQUFRLFdBQVcsS0FBS0gsU0FBeEIsR0FERDtBQUVDLDhDQUZEO0FBR0M7QUFBQTtBQUFBLFFBQUssV0FBVSxnQ0FBZjtBQUNDLHVEQUFPLFdBQVcsS0FBS0EsU0FBdkIsR0FERDtBQUVDLCtDQUZEO0FBR0MseURBQVMsT0FBTyxLQUFLRixLQUFMLENBQVdDLEtBQTNCO0FBSEQsTUFIRDtBQVFDLDhDQVJEO0FBU0M7QUFURCxLQUREO0FBYUE7QUFDRDs7Ozs7O2tCQUdhSCxJOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFSztBQUNBOztBQUVDIiwiZmlsZSI6IjE0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21tb24vTmF2YmFyXCI7XG5pbXBvcnQgUXVlcnkgZnJvbSAnLi9RdWVyeSc7XG5pbXBvcnQgU3RhdHMgZnJvbSAnLi9TdGF0cyc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL1Jlc3VsdHMnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21tb24vRm9vdGVyXCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cXVlcnk6ICcnXG5cdFx0fVxuXHRcdC8vIHRoaXMuZ2V0U2F2ZWQgPSB0aGlzLmdldFNhdmVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRQYXJlbnQgPSB0aGlzLnNldFBhcmVudC5iaW5kKHRoaXMpO1xuXHR9XG5cdC8vIGdldFNhdmVkKCkge1xuXHQvLyBcdHRoaXMuY2hpbGQuZ2V0U2F2ZWQoKTtcblx0Ly8gfVxuXHRzZXRQYXJlbnQocXVlcnkpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHF1ZXJ5OiBxdWVyeVxuXHRcdH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUucXVlcnkubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpdGUgZC1mbGV4IGZsZXgtY29sdW1uIGNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdDxOYXZiYXIgc2V0UGFyZW50PXt0aGlzLnNldFBhcmVudH0vPlxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4gZmxleC1ncm93IGNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdFx0PFF1ZXJ5IHNldFBhcmVudD17dGhpcy5zZXRQYXJlbnR9Lz5cblx0XHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0XHQ8U3RhdHMgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5xdWVyeS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2l0ZSBkLWZsZXggZmxleC1jb2x1bW4gY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0PE5hdmJhciBzZXRQYXJlbnQ9e3RoaXMuc2V0UGFyZW50fS8+XG5cdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4gZmxleC1ncm93IGNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdFx0PFF1ZXJ5IHNldFBhcmVudD17dGhpcy5zZXRQYXJlbnR9Lz5cblx0XHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0XHQ8UmVzdWx0cyBxdWVyeT17dGhpcy5zdGF0ZS5xdWVyeX0vPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cbi8vIC8vIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyBkb3duIDIwcHggZnJvbSB0aGUgdG9wIG9mIHRoZSBkb2N1bWVudCwgc2hvdyB0aGUgYnV0dG9uXG4vLyB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtzY3JvbGxGdW5jdGlvbigpfTtcblxuLy8gZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDIwKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlCdG5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15QnRuXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sIHNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBkb2N1bWVudFxuLy8gZnVuY3Rpb24gdG9wRnVuY3Rpb24oKSB7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwOyAvLyBGb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhIFxuLy8gICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwOyAvLyBGb3IgSUUgYW5kIEZpcmVmb3hcbi8vIH1cblxuLy8gPGJ1dHRvbiBvbkNsaWNrPXt0b3BGdW5jdGlvbn0gaWQ9XCJteUJ0blwiIHRpdGxlPVwiR28gQmFjayB0byBUb3BcIj5CYWNrIHRvIFRvcDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0Ly8gPGJyLz5cblx0XHRcdFx0XHQvLyA8UmVzdWx0cyBxdWVyeT17dGhpcy5zdGF0ZS5xdWVyeX0vPlxuXG5cdFx0XHRcdFx0XHQvLyB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9NYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})